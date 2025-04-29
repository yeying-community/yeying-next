import {
    decodeBase64,
    decodeString,
    decrypt,
    digest,
    encodeBase64,
    encodeString,
    encrypt,
    importKey,
    SecurityAlgorithm
} from '@yeying-community/yeying-web3'

export function convertToAlgorithmName(name: string): string {
    switch (name) {
        case 'CIPHER_TYPE_AES_GCM_256':
            return 'AES-GCM'
        default:
            return 'AES-GCM'
    }
}

export async function encryptString(algorithm: SecurityAlgorithm, password: string, content: string) {
    const hashBytes = await digest(new TextEncoder().encode(password), 'SHA-256')
    const name = convertToAlgorithmName(algorithm.name)
    const cryptoKey = await importKey(hashBytes, name)
    const cipher = await encrypt(cryptoKey, encodeString(content), decodeBase64(algorithm.iv), name)
    return encodeBase64(cipher)
}

export async function decryptString(algorithm: SecurityAlgorithm, password: string, content: string) {
    const hashBytes = await digest(new TextEncoder().encode(password), 'SHA-256')
    const name = convertToAlgorithmName(algorithm.name)
    const cryptoKey = await importKey(hashBytes, name)
    const plain = await decrypt(cryptoKey, decodeBase64(content), decodeBase64(algorithm.iv), name)
    return decodeString(plain)
}
