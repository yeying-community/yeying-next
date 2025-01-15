import { BlockAddress, deriveFromBlockAddress, SecurityAlgorithm } from '@yeying-community/yeying-web3'
import { decodeBase64 } from '../../common/codec'
import { convertToAlgorithmName, decrypt, encrypt } from '../../common/crypto'
import { convertCipherTypeFrom } from '../../common/message'

export class AssetCipher {
    private readonly rawKey: Promise<CryptoKey>
    private readonly algorithmName: string
    private readonly iv: Buffer

    constructor(blockAddress: BlockAddress, securityAlgorithm: SecurityAlgorithm) {
        const rawKey = deriveFromBlockAddress(blockAddress)
        this.algorithmName = convertToAlgorithmName(convertCipherTypeFrom(securityAlgorithm.name))
        this.iv = decodeBase64(securityAlgorithm.iv)
        this.rawKey = crypto.subtle.importKey('raw', rawKey, this.algorithmName, false, ['encrypt', 'decrypt'])
    }

    async decrypt(data: Uint8Array) {
        return new Uint8Array(await decrypt(this.algorithmName, await this.rawKey, this.iv, data))
    }

    async encrypt(data: Uint8Array) {
        return new Uint8Array(await encrypt(this.algorithmName, await this.rawKey, this.iv, data))
    }
}
