import { CipherTypeEnum } from '../yeying/api/common/code_pb'
import { BlockAddress, SecurityAlgorithm } from '@yeying-community/yeying-web3'
import { convertCipherTypeFrom, convertCipherTypeTo, decodeBase64, encodeBase64 } from './codec'

export function generateIv(len = 12): Uint8Array {
    return window.crypto.getRandomValues(new Uint8Array(len))
}

export async function computeHash(content: Uint8Array): Promise<Uint8Array> {
    return new Uint8Array(await window.crypto.subtle.digest('SHA-256', content))
}

export function convertToAlgorithmName(type: CipherTypeEnum): string {
    switch (type) {
        case CipherTypeEnum.CIPHER_TYPE_AES_GCM_256:
            return 'AES-GCM'
        default:
            return 'AES-GCM'
    }
}

export async function deriveRawKeyFromString(algorithmName: string, content: string): Promise<CryptoKey> {
    const hashBytes = await computeHash(new TextEncoder().encode(content))
    return window.crypto.subtle.importKey('raw', hashBytes, algorithmName, false, ['encrypt', 'decrypt'])
}

export function generateSecurityAlgorithm() {
    return SecurityAlgorithm.create({
        name: convertCipherTypeTo(CipherTypeEnum.CIPHER_TYPE_AES_GCM_256),
        iv: encodeBase64(generateIv())
    })
}

export async function encrypt(
    algorithmName: string,
    key: CryptoKey,
    iv: Uint8Array,
    content: ArrayBuffer
): Promise<ArrayBuffer> {
    return await window.crypto.subtle.encrypt({ name: algorithmName, iv: iv }, key, content)
}

export async function decrypt(
    algorithmName: string,
    key: CryptoKey,
    iv: Uint8Array,
    content: ArrayBuffer
): Promise<ArrayBuffer> {
    return await window.crypto.subtle.decrypt({ name: algorithmName, iv: iv }, key, content)
}

export async function encryptBlockAddress(
    blockAddress: BlockAddress,
    securityAlgorithm: SecurityAlgorithm,
    password: string
) {
    const algorithmName = convertToAlgorithmName(convertCipherTypeFrom(securityAlgorithm.name))
    const cryptoKey = await deriveRawKeyFromString(algorithmName, password)
    const cipher = await encrypt(
        algorithmName,
        cryptoKey,
        decodeBase64(securityAlgorithm.iv),
        BlockAddress.encode(blockAddress).finish()
    )
    return encodeBase64(cipher)
}

export async function decryptBlockAddress(
    blockAddress: string,
    securityAlgorithm: SecurityAlgorithm,
    password: string
) {
    const algorithmName = convertToAlgorithmName(convertCipherTypeFrom(securityAlgorithm.name))
    const cryptoKey = await deriveRawKeyFromString(algorithmName, password)
    const plain = await decrypt(
        algorithmName,
        cryptoKey,
        decodeBase64(securityAlgorithm.iv),
        decodeBase64(blockAddress)
    )
    return BlockAddress.decode(new Uint8Array(plain))
}
