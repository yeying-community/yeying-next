// 考虑浏览器可能多个人使用，一个人也可能有多个账号，每个账号背后都有一个身份，这个身份是数字世界的唯一证明，需要保持其独立性。在端上使用的身份
// 需要精细化管理，具有一下功能
// 1、分层缓存, 利用浏览器端的存储能力，比如cookie、session、local、indexeddb，来实现免登陆，避免频繁输入密码；
// 2、所有的密码的管理都是在端上完成，不会和后台服务器有任何交互，也就是密码完全由用户负责；
// 3、一个端上多个身份切换，任何时刻只有一个身份在起作用
// 4、对于不再端上使用的身份，能够一键清理不留痕迹；
import {SessionCache} from '../cache/session'
import {LocalCache} from '../cache/local'
import {DataTampering, InvalidPassword, NotFound} from '../common/error'

import {
    BlockAddress,
    createBlockAddress,
    createIdentity,
    deserializeIdentityFromJson,
    Identity,
    IdentityApplicationExtend,
    IdentityCodeEnum,
    IdentityMetadata,
    IdentityOrganizationExtend,
    IdentityPersonalExtend,
    IdentityServiceExtend,
    IdentityTemplate,
    SecurityAlgorithm,
    SecurityConfig,
    serializeIdentityToJson,
    updateIdentity,
    verifyIdentity
} from '@yeying-community/yeying-web3'
import {CookieCache} from '../cache/cookie'
import {
    decryptBlockAddress,
    decryptString,
    encryptBlockAddress,
    encryptString,
    generateIv,
    generateSecurityAlgorithm
} from '../common/crypto'
import {encodeBase64} from '../common/codec'
import {NodeProvider} from "../provider/node/node";

/**
 * 身份管理类，用于管理用户身份、缓存数据。
 */
export class IdentityManager {
    private historyKey: string = 'yeying.history.accounts' // 历史账号存储的键名
    private loginKey: string = 'yeying.login.account' // 当前登录账号存储的键名
    private cookieCache: CookieCache // 存储cookie的缓存
    private sessionCache: SessionCache // 存储当前会话的缓存
    private accountCache: LocalCache // 存储历史账号信息
    private identityCache: LocalCache // 存储历史身份信息
    private blockAddressMap: Map<string, BlockAddress> // 存储区块链地址的映射
    private identityMap: Map<string, Identity> // 存储身份信息的映射
    private readonly durationDays: number // 默认的有效期（天）

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

    /**
     * 获取当前登录用户的区块链节点信息。
     *
     * @param domain - 可选参数，指定节点域名。如果未提供，将使用当前浏览器的域名。
     * @returns 返回当前节点信息。
     * @example
     * ```ts
     * const node = await accountManager.getNode();
     * console.log(node); // 输出当前节点信息
     * ```
     */
    async getNode(domain?: string) {
        const activeDid = this.getActiveDid()
        if (activeDid === undefined) {
            return
        }

        const blockAddress = this.getBlockAddress(activeDid)
        if (blockAddress === undefined) {
            return
        }

        if (domain === undefined) {
            domain = `${window.location.protocol}://${window.location.hostname}:${window.location.port}`
        }

        const provider = new NodeProvider({proxy: domain, blockAddress: blockAddress})
        return await provider.whoami()
    }

    /**
     * 获取历史登录过的所有账号信息。
     *
     * @returns 返回历史账号信息列表。
     *
     */
    getHistory() {
        const history = this.accountCache.get(this.historyKey)
        if (history === null) {
            return []
        } else {
            return JSON.parse(history) as string[]
        }
    }

    /**
     * 获取当前激活的身份DID。
     *
     * @returns {stirng|undefine} 返回当前激活账号的信息，若没有激活账号，则返回 undefined。
     *
     */
    getActiveDid(): string | undefined {
        const did = this.sessionCache.get(this.loginKey)
        if (did === null) {
            return undefined
        } else {
            return did
        }
    }

    /**
     * 获取当前激活账号对应的身份信息。
     *
     * @returns 返回当前激活账号的身份信息，若没有激活身份，则返回 undefined。
     * @example
     * ```ts
     * const activeIdentity = accountManager.getActiveIdentity();
     * console.log(activeIdentity); // 输出当前激活账号的身份信息
     * ```
     */
    getActiveIdentity() {
        const activeDid = this.getActiveDid()
        if (activeDid) {
            return this.identityMap.get(activeDid)
        } else {
            return undefined
        }
    }

    /**
     * 获取指定 DID 对应的区块链地址。
     *
     * @param did - 用户的 DID（去中心化标识符）。
     * @returns 返回对应的区块链地址。
     * @example
     * ```ts
     * const blockAddress = accountManager.getBlockAddress(did);
     * console.log(blockAddress); // 输出对应的区块链地址
     * ```
     */
    getBlockAddress(did: string) {
        return this.blockAddressMap.get(did)
    }

    /**
     * 注销当前账号，并清理相关的登录信息。
     *
     * @example
     * ```ts
     * accountManager.logout();
     * // 之后调用 getActiveAccount() 返回 undefined，表示注销成功
     * ```
     */
    logout() {
        const activeDid = this.getActiveDid()
        if (activeDid) {
            this.blockAddressMap.delete(activeDid)
        }
    }

    /**
     * 清理缓存中的身份相关信息。
     *
     * @param did - 要清理身份信息的 DID。
     * @example
     * ```ts
     * accountManager.clear(did);
     * // 清理对应 DID 的身份信息
     * ```
     */
    clear(did: string) {

    }

    /**
     * 判断指定 DID 是否已经登录。
     *
     * @param did - 要检查的 DID。
     * @returns 如果该 DID 已经登录，返回 true；否则返回 false。
     *
     */
    isLogin(did: string): boolean {
        return this.blockAddressMap.get(did) !== undefined
    }

    // 登陆，解密身份信息
    login(did: string, password?: string): Promise<Identity> {
        return new Promise(async (resolve, reject) => {
            if (this.isLogin(did)) {
                // 检查当前激活的账户是否发生了变化，如果发生了变化，则自动注销当前账户，切换当前激活的账号
                const identity = this.getActiveIdentity()
                if (identity && identity.metadata?.did === did) {
                    return resolve(identity)
                }
            }

            const identity = await this.getIdentity(did)
            if (identity === undefined) {
                return reject(new NotFound('Not found identity!'))
            }

            if (password === undefined) {
                const token = this.cookieCache.get(did)
                if (token === null) {
                    return reject(new InvalidPassword(`Invalid password!`))
                }

                const encryptedPassword = this.sessionCache.get(did)
                if (encryptedPassword === null) {
                    return reject(new InvalidPassword(`Invalid password!`))
                }

                password = await decryptString(
                    identity.securityConfig?.algorithm as SecurityAlgorithm,
                    token,
                    encryptedPassword
                )
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

            // 设置当前登陆帐户
            this.sessionCache.set(this.loginKey, did)
            try {
                // 缓存密码
                await this.cachePassword(did, password, identity.securityConfig?.algorithm as SecurityAlgorithm)
            } catch (err) {
               console.error(`Fail to cache password`, err)
            } finally {
                resolve(identity)
            }

        })
    }

    /**
     * 创建一个新的身份，并在区块链上生成地址。
     *
     * @param password - 用户设置的密码。
     * @param template - 用于创建身份的模板。
     * @returns 返回新创建的身份。
     *
     */
    async createIdentity(password: string, template: IdentityTemplate) {
        // 创建区块链地址
        const blockAddress = createBlockAddress()
        if (template.securityConfig === undefined) {
            // 如果没有定义安全配置，则创建一个空的安全配置
            template.securityConfig = {
                algorithm: generateSecurityAlgorithm(),
            }
        }

        // 如果安全配置没有定义算法，则生成一个默认的安全算法
        if (template.extend === undefined) {
            switch (template.code) {
                case IdentityCodeEnum.IDENTITY_CODE_PERSONAL:
                    template.extend = IdentityPersonalExtend.create({})
                    break
                case IdentityCodeEnum.IDENTITY_CODE_ORGANIZATION:
                    template.extend = IdentityOrganizationExtend.create({})
                    break
                case IdentityCodeEnum.IDENTITY_CODE_SERVICE:
                    template.extend = IdentityServiceExtend.create({})
                    break
                case IdentityCodeEnum.IDENTITY_CODE_APPLICATION:
                    template.extend = IdentityApplicationExtend.create({})
                    break
                default:
                    throw new Error(`Not support code=${template.code}`)
            }
        }

        // 使用密码和安全算法加密区块链地址
        const encryptedBlockAddress = await encryptBlockAddress(
            blockAddress,
            template.securityConfig.algorithm as SecurityAlgorithm,
            password
        )

        // 创建身份并返回
        const identity = await createIdentity(blockAddress, encryptedBlockAddress, template)
        const metadata = identity.metadata as IdentityMetadata
        const did = metadata.did

        // 将身份数据缓存
        this.identityCache.set(did, serializeIdentityToJson(identity))
        this.identityMap.set(did, identity)
        this.blockAddressMap.set(did, blockAddress)
        this.setHistory(did)

        return identity
    }

    /**
     * 更新身份信息。
     *
     * @param template - 用于更新身份的模板, 只需填写需要更新的字段即可。
     * @param password - 用户设置的密码，用于解密区块链地址。
     * @param identity - 要更新的身份。
     *
     * @returns 返回更新身份。
     */
    async updateIdentity(template: Partial<IdentityTemplate>, password: string, identity: Identity) {
        // 解密区块链地址
        const blockAddress = await decryptBlockAddress(
            identity.blockAddress,
            identity.securityConfig?.algorithm as SecurityAlgorithm,
            password
        )

        // 使用模板更新身份
        const newIdentity: Identity = await updateIdentity(template, identity, blockAddress)
        const did = (identity.metadata as IdentityMetadata).did

        // 更新缓存中的身份信息
        this.identityCache.set(did, serializeIdentityToJson(newIdentity))
        this.identityMap.set(did, newIdentity)
        this.blockAddressMap.set(did, blockAddress)
        return newIdentity
    }

    /**
     * 获得身份信息。
     *
     * @param did 身份DID。
     *
     * @returns {Promise<string>} 身份对象。
     *
     */
    async getIdentity(did: string): Promise<Identity> {
        const s = this.identityCache.get(did)
        if (s === null) {
            throw new NotFound()
        }

        // 验证身份是否有效
        const identity = deserializeIdentityFromJson(s)
        if (!await verifyIdentity(identity)) {
            throw new DataTampering()
        }
        return identity
    }

    /**
     * 导出身份信息。
     *
     * @param did 要导出的身份DID。
     *
     * @returns {Promise<string>} JSON序列化的身份信息字符串。
     *
     */
    async exportIdentity(did: string): Promise<string> {
        const s = this.identityCache.get(did)
        if (s === null) {
            throw new NotFound()
        }

        // 验证身份是否有效
        if (!await verifyIdentity(deserializeIdentityFromJson(s))) {
            throw new DataTampering()
        }

        return s
    }

    /**
     * 导入身份信息。
     *
     * @param content JSON序列化的身份信息字符串。
     *
     * @returns {Identity} 身份信息对象
     *
     */
    async importIdentity(content: string): Promise<Identity> {
        const identity = deserializeIdentityFromJson(content)
        const metadata = identity.metadata as IdentityMetadata

        // 验证身份
        if (!await verifyIdentity(identity)) {
            throw new DataTampering()
        }

        // 将导入的身份缓存
        this.identityCache.set(metadata.did, content)
        this.setHistory(metadata.did)
        return identity
    }

    /**
     * 添加身份DID到历史记录中
     *
     * @param did 身份DID
     *
     * @private
     */
    private setHistory(did: string) {
        const history = this.getHistory()
        const index = history.findIndex(a => a === did)
        if (index !== -1) {
            return
        }

        history.push(did)
        this.accountCache.set(this.historyKey, JSON.stringify(history))
    }

    /**
     * 将密码加密后缓存到会话中，密钥保存在cookie中。
     */
    private async cachePassword(did: string, password: string, securityAlgorithm: SecurityAlgorithm) {
        // 生成令牌，令牌存放在cookie中，令牌用来加密身份的密码，令牌一旦过期，那么身份将会失效。
        const token = encodeBase64(generateIv(32))
        const encryptedPassword = await encryptString(securityAlgorithm, token, password)
        this.sessionCache.set(did, encryptedPassword)
        // 缓存令牌
        this.cookieCache.set(did, token, this.durationDays)
    }
}
