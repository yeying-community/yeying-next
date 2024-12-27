// 考虑浏览器可能多个人使用，一个人也可能有多个账号，每个账号背后都有一个身份，这个身份是数字世界的唯一证明，需要保持其独立性。在端上使用的身份
// 需要精细化管理，具有一下功能
// 1、分层缓存, 利用浏览器端的存储能力，比如cookie、session、local、indexeddb，来实现免登陆，避免频繁输入密码；
// 2、所有的密码的管理都是在端上完成，不会和后台服务器有任何交互，也就是密码完全由用户负责；
// 3、一个端上多个身份切换，任何时刻只有一个身份在起作用
// 4、对于不再端上使用的身份，能够一键清理不留痕迹；
import {SessionCache} from '../cache/session'
import {LocalCache} from '../cache/local'
import {InvalidPassword, NotFound} from '../common/error'
import {Account} from './model'
import {
    BlockAddress,
    createBlockAddress,
    createIdentity,
    Identity,
    IdentityCodeEnum,
    IdentityMetadata,
    IdentityPersonalExtend,
    IdentityTemplate,
    NetworkTypeEnum,
    SecurityAlgorithm,
    SecurityConfig,
    verifyIdentity,
} from '@yeying-community/yeying-web3'
import {CookieCache} from '../cache/cookie'
import {
    convertToAlgorithmName,
    decrypt,
    decryptBlockAddress,
    deriveRawKeyFromString,
    encrypt,
    encryptBlockAddress,
    generateIv,
    generateSecurityAlgorithm
} from "../common/crypto";
import {convertCipherTypeFrom, convertLanguageCodeTo, decodeBase64, encodeBase64} from "../common/codec";
import {LanguageCodeEnum} from "../yeying/api/common/code_pb";

export class AccountManager {
    private historyKey: string = 'yeying.history.accounts'
    private loginKey: string = 'yeying.login.account'
    private cookieCache: CookieCache
    private sessionCache: SessionCache
    private accountCache: LocalCache
    private identityCache: LocalCache
    private blockAddressMap: Map<string, BlockAddress>
    private identityMap: Map<string, Identity>
    private readonly durationDays: number

    constructor() {
        // 当前登陆账号
        this.sessionCache = new SessionCache()
        // 历史账号信息
        this.accountCache = new LocalCache()
        // 历史身份信息
        this.identityCache = new LocalCache()
        // 临时缓存
        this.cookieCache = new CookieCache()
        // 缓存区块链地址信息
        this.blockAddressMap = new Map<string, BlockAddress>()
        // 缓存身份信息
        this.identityMap = new Map<string, Identity>()
        // 默认密码保存有效期是30天，也就是临时身份有效期是30天
        this.durationDays = 30
    }

    // 当前浏览器中曾经登陆过的所有账号，加密缓存在local storage中
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
            return this.identityMap.get(activeAccount.did)
        } else {
            return undefined
        }
    }

    getBlockAddress(did: string) {
        return this.blockAddressMap.get(did)
    }

    // 注销，清理登陆信息
    logout() {
        const activeAccount = this.getActiveAccount()
        if (activeAccount) {
            this.blockAddressMap.delete(activeAccount.did)
        }
    }

    // 清理缓存，清理当前浏览器中所有和这个身份相关信息
    clear(did: string) {
    }

    // 登陆，解密身份信息
    login(did: string, password?: string) {
        return new Promise(async (resolve, reject) => {
            let blockAddress = this.blockAddressMap.get(did)
            if (blockAddress !== undefined) {
                return resolve(blockAddress)
            }

            const identity = await this.exportIdentity(did)
            if (identity === undefined) {
                return resolve(new NotFound('Not found identity!'))
            }

            const metadata = identity.metadata as IdentityMetadata
            if (password === undefined) {
                const token = this.cookieCache.get(did)
                if (token === null) {
                    return reject(new InvalidPassword(`Invalid password!`))
                }

                const encryptedPassword = this.sessionCache.get(did)
                if (encryptedPassword === null) {
                    return reject(new InvalidPassword(`Invalid password!`))
                }

                const securityAlgorithm = identity.securityConfig?.algorithm as SecurityAlgorithm
                const algorithmName = convertToAlgorithmName(convertCipherTypeFrom(securityAlgorithm.name))
                const cryptoKey = await deriveRawKeyFromString(algorithmName, token)
                const iv = decodeBase64(securityAlgorithm.iv)
                password = encodeBase64(await decrypt(algorithmName, cryptoKey, iv, decodeBase64(encryptedPassword)))
            }

            // 加载身份信息
            try {
                // 解密身份
                const blockAddress = await decryptBlockAddress(
                    identity.blockAddress,
                    identity.securityConfig?.algorithm as SecurityAlgorithm,
                    password
                )

                this.blockAddressMap.set(did, blockAddress)
                this.identityMap.set(did, identity)
            } catch (err) {
                console.error(`Fail to decrypt identity=${did}`, err)
                return reject(new InvalidPassword(`Invalid password!`))
            }

            // 添加到历史账号中
            const account = this.addAccount(metadata.did, metadata.name, metadata.avatar)

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
    async createGuest(language: LanguageCodeEnum = LanguageCodeEnum.LANGUAGE_CODE_ZH_CH) {
        // 创建区块链地址
        const blockAddress = createBlockAddress()

        // 生成访客的模版
        const extend = IdentityPersonalExtend.create({})
        const algorithm = generateSecurityAlgorithm()
        const securityConfig = SecurityConfig.create({algorithm: algorithm,})

        const template: IdentityTemplate = {
            language: convertLanguageCodeTo(language),
            network: NetworkTypeEnum.NETWORK_TYPE_YEYING,
            parent: '',
            code: IdentityCodeEnum.IDENTITY_CODE_PERSONAL,
            name: 'Guest',
            description: '',
            avatar: '',
            securityConfig: securityConfig,
            extend: extend
        }

        // 生成令牌，令牌存放在cookie中，令牌用来加密身份的密码，令牌一旦过期，那么身份将会失效。
        const token = encodeBase64(generateIv(32))
        const algorithmName = convertToAlgorithmName(convertCipherTypeFrom(algorithm.name))

        // 生成身份密码，密码保存在session中，需要使用cookie中的token加密和解密，保证其安全性
        const password = encodeBase64(generateIv(16))
        const encryptedBlockAddress = await encryptBlockAddress(blockAddress, algorithm, password)

        // 用令牌加密身份密码
        const cryptoKey = await deriveRawKeyFromString(algorithmName, token)
        const encryptedPassword = await encrypt(algorithmName, cryptoKey, decodeBase64(algorithm.iv), decodeBase64(password))

        const identity = await createIdentity(blockAddress, encryptedBlockAddress, template)
        const metadata = identity.metadata as IdentityMetadata
        const did = metadata.did

        // 缓存密码
        this.sessionCache.set(did, encryptedPassword)
        // 缓存令牌
        this.cookieCache.set(did, token, this.durationDays)
        // 保存为历史身份
        this.identityCache.set(did, encodeBase64(Identity.encode(identity).finish()))
        // 缓存身份
        this.identityMap.set(did, identity)
        // 缓存区块链地址
        this.blockAddressMap.set(did, blockAddress)
        return identity
    }

    async createIdentity(password: string, template: IdentityTemplate) {
        // 创建区块链地址
        const blockAddress = createBlockAddress()
        const securityAlgorithm = generateSecurityAlgorithm()
        const encryptedBlockAddress = await encryptBlockAddress(blockAddress, securityAlgorithm, password)

        const identity = await createIdentity(blockAddress, encryptedBlockAddress, template)
        const metadata = identity.metadata as IdentityMetadata
        const did = metadata.did

        this.identityCache.set(did, encodeBase64(Identity.encode(identity).finish()))
        this.identityMap.set(did, identity)
        this.blockAddressMap.set(did, blockAddress)
    }

    async exportIdentity(did: string) {
        const s = this.identityCache.get(did)
        if (s === null) {
            return
        }

        const identity = Identity.decode(decodeBase64(s))
        const passed = await verifyIdentity(identity)
        if (passed) {
            return identity
        }
    }

    // 导入用户身份
    async importIdentity(content: string) {
        const identity = Identity.decode(decodeBase64(content))
        const metadata = identity.metadata as IdentityMetadata
        await verifyIdentity(identity)
        this.identityCache.set(metadata.did, content)
    }

    private addAccount(did: string, name: string, avatar: string): Account {
        const historyAccounts = this.getHistoryAccounts()
        const account: Account = {name: name, did: did, avatar: avatar, timestamp: Date.now()}
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
