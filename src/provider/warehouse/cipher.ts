import { BlockAddress, deriveFromBlockAddress, SecurityAlgorithm } from '@yeying-community/yeying-web3'
import { decodeBase64 } from '../../common/codec'
import { convertToAlgorithmName, decrypt, encrypt } from '../../common/crypto'
import { convertCipherTypeFrom } from '../../common/message'

/**
 * 提供资产加密和解密功能
 */
export class AssetCipher {
    private readonly rawKey: Promise<CryptoKey>
    private readonly algorithmName: string
    private readonly iv: Buffer

    /**
     * 构造函数
     * @param blockAddress - 区块地址，用于生成加密密钥
     * @param securityAlgorithm - 安全算法配置，包含算法名称和 IV
     * @example
     * ```ts
     * const securityAlgorithm = { name: 'AES-GCM', iv: 'base64-encoded-iv' }
     * const assetCipher = new AssetCipher(blockAddress, securityAlgorithm)
     * ```
     */
    constructor(blockAddress: BlockAddress, securityAlgorithm: SecurityAlgorithm) {
        const rawKey = deriveFromBlockAddress(blockAddress)
        this.algorithmName = convertToAlgorithmName(convertCipherTypeFrom(securityAlgorithm.name))
        this.iv = decodeBase64(securityAlgorithm.iv)
        this.rawKey = crypto.subtle.importKey('raw', rawKey, this.algorithmName, false, ['encrypt', 'decrypt'])
    }

    /**
     * 解密数据,使用初始化的密钥和算法对加密数据进行解密
     * @param data - 加密后的数据（Uint8Array）
     * @returns 返回解密后的数据（Uint8Array）
     * @example
     * ```ts
     * const decryptedData = await assetCipher.decrypt(encryptedData)
     * ```
     */
    async decrypt(data: Uint8Array) {
        return new Uint8Array(await decrypt(this.algorithmName, await this.rawKey, this.iv, data))
    }

    /**
     * 加密数据,使用初始化的密钥和算法对原始数据进行加密
     * @param data - 原始数据（Uint8Array）
     * @returns 返回加密后的数据（Uint8Array）
     * @example
     * ```ts
     * const encryptedData = await assetCipher.encrypt(plainData)
     * ```
     */
    async encrypt(data: Uint8Array) {
        return new Uint8Array(await encrypt(this.algorithmName, await this.rawKey, this.iv, data))
    }
}
