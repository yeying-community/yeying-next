// 考虑浏览器可能多个人使用，一个人也可能有多个账号，每个账号背后都有一个身份，这个身份是数字世界的唯一证明，需要保持其独立性。在端上使用的身份
// 需要精细化管理，具有一下功能
// 1、分层缓存, 利用浏览器端的存储能力，比如cookie、session、local、indexeddb，来实现免登陆，避免频繁输入密码；
// 2、所有的密码的管理都是在端上完成，不会和后台服务器有任何交互，也就是密码完全由用户负责；
// 3、一个端上多个身份切换，任何时刻只有一个身份在起作用
// 4、对于不再端上使用的身份，能够一键清理不留痕迹；
import { SessionCache } from '../cache/session'
import { LocalCache } from '../cache/local'
import { InvalidPassword, NotFound } from '../common/error'
import { Account, IdentityEntry } from './model'
import {
    CipherTypeEnum,
    Crypto,
    Identity,
    IdentityCodeEnum,
    IdentityPersonalExtend,
    IdentityTemplate,
    NetworkTypeEnum,
    SecurityAlgorithm,
    Wallet
} from '@yeying-community/yeying-web3'

export class AccountManager {
    private historyKey: string = 'yeying.history.accounts'
    private loginKey: string = 'yeying.login.account'
    private sessionCache: SessionCache
    private accountCache: LocalCache
    private identityCache: LocalCache
    private identityMap: Map<string, IdentityEntry>

    constructor() {
        // 当前登陆账号
        this.sessionCache = new SessionCache()
        // 历史账号信息
        this.accountCache = new LocalCache()
        // 历史身份信息
        this.identityCache = new LocalCache()
        // 缓存身份信息
        this.identityMap = new Map<string, IdentityEntry>()
    }

    // 当前浏览器中曾经登陆过的所有账号
    getHistoryAccounts() {
        const accounts = this.accountCache.get(this.historyKey)
        if (accounts === null) {
            return []
        } else {
            return JSON.parse(accounts) as Account[]
        }
    }

    // 当前激活的账号
    getActiveAccount(): Account | undefined {
        const account = this.sessionCache.get(this.loginKey)
        if (account === null) {
            return undefined
        } else {
            return JSON.parse(account) as Account
        }
    }

    // 当前激活的身份
    getActiveIdentity() {
        const activeAccount = this.getActiveAccount()
        if (activeAccount !== undefined) {
            return this.identityMap.get(activeAccount.did)?.identity
        } else {
            return undefined
        }
    }

    // 注销，清理登陆信息
    logout() {
        const activeAccount = this.getActiveAccount()
        if (activeAccount) {
            this.identityMap.delete(activeAccount.did)
        }
    }

    // 清理缓存，清理当前浏览器中所有和这个身份相关信息
    clear(did: string) {}

    // 登陆，解密身份信息
    login(did: string, password: string) {
        return new Promise(async (resolve, reject) => {
            let entry = this.identityMap.get(did)
            if (entry !== undefined) {
                return resolve(entry.identity)
            }

            const identity = await this.exportIdentity(did)
            if (identity === undefined) {
                return resolve(new NotFound('Not found identity!'))
            }

            // 加载身份信息
            try {
                // @ts-ignore
                const blockAddress = await Wallet.decryptBlockAddress(
                    identity.blockAddress,
                    identity.extend.securityConfig?.algorithm,
                    password
                )
                const entry: IdentityEntry = {
                    // @ts-ignore
                    blockAddress: blockAddress,
                    identity: identity
                }
                this.identityMap.set(did, entry)
            } catch (err) {
                console.error(`Fail to decrypt identity=${did}`, err)
                reject(new InvalidPassword(`Invalid password!`))
            }

            // 添加到历史账号中
            const account = this.addAccount(identity.metadata.did, identity.metadata.name, identity.metadata.avatar)
            // 设置当前登陆帐户
            this.sessionCache.set(this.loginKey, JSON.stringify(account))
            resolve(account)
        })
    }

    /**
     * 创建临时身份时，用户什么都不用输入，包括密码，全部由系统生成。解开身份的密码作为token临时存放在cookie中，临时身份最终有两个结局：
     * 1、自动过期被遗忘，这个身份再也无法使用，与这个身份相关信息也不再被认为有效；
     * 2、临时身份转正同时token失效，身份信息将被继续保留，用户自己的密码加密身份信息
     */
    async createGuest() {
        const extend: IdentityPersonalExtend = {
            email: '',
            telephone: '',
            securityConfig: {
                algorithm: {
                    type: CipherTypeEnum.CIPHER_TYPE_AES_GCM_256,
                    iv: Crypto.encodeBase64(Crypto.generateIv())
                }
            }
        }

        const template: IdentityTemplate = {
            network: NetworkTypeEnum.NETWORK_TYPE_UNKNOWN,
            parent: '',
            code: IdentityCodeEnum.IDENTITY_CODE_PERSONAL,
            name: 'Guest',
            description: '',
            avatar: '',
            extend: extend
        }

        const token = Crypto.generateIv(32)
        const identity = await Wallet.createIdentity(Crypto.encodeBase64(token), template)
        return identity
    }

    async createIdentity(password: string, template: IdentityTemplate) {
        const identity = await Wallet.createIdentity(password, template)
        const blockAddress = await Wallet.decryptBlockAddress(
            identity.blockAddress,
            identity.extend.securityConfig?.algorithm as SecurityAlgorithm,
            password
        )
        const entry: IdentityEntry = {
            blockAddress: blockAddress,
            identity: identity
        }
        this.identityMap.set(identity.metadata.did, entry)
        this.identityCache.set(identity.metadata.did, JSON.stringify(identity))
    }

    async exportIdentity(did: string) {
        const s = this.identityCache.get(did)
        if (s === null) {
            return
        }

        const identity = JSON.parse(s) as Identity
        const passed = await Wallet.verifyIdentity(identity)
        if (passed) {
            return identity
        }
    }

    // 导入用户身份
    async importIdentity(content: string) {
        const identity = JSON.parse(content) as Identity
        await Wallet.verifyIdentity(identity)
        this.identityCache.set(identity.metadata.did, content)
    }

    private addAccount(did: string, name: string, avatar: string): Account {
        const historyAccounts = this.getHistoryAccounts()
        const account: Account = { name: name, did: did, avatar: avatar, timestamp: Date.now() }

        const index = historyAccounts.findIndex((i) => i.did === did)
        if (index !== -1) {
            historyAccounts[index] = account
        } else {
            historyAccounts.push(account)
        }

        this.accountCache.set(this.historyKey, JSON.stringify(historyAccounts))
        return account
    }
}
