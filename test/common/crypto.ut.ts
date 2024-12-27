import {convertToAlgorithmName, decrypt, deriveRawKeyFromString, encrypt, generateIv} from "../../src/common/crypto";
import {CipherTypeEnum} from "../../src/yeying/api/common/code_pb";
import {decodeString, encodeBase64, encodeString} from "../../src/common/codec";

describe('Crypto', () => {
    it('aes-gcm', async () => {
        const cipherType = CipherTypeEnum.CIPHER_TYPE_AES_GCM_256
        const token = generateIv(32)
        const plainText = "hello world"
        const algorithmName = convertToAlgorithmName(cipherType)
        const cryptoKey = await deriveRawKeyFromString(algorithmName, encodeBase64(token))
        const iv = generateIv(12)
        const cipherText = await encrypt(algorithmName, cryptoKey, iv, encodeString(plainText))
        const result = await decrypt(algorithmName, cryptoKey, iv, cipherText)
        expect(decodeString(result)).toEqual(plainText)
    })
})