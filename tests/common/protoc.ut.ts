import {CipherTypeEnum} from "../../src/yeying/api/common/code_pb";
import {convertCipherTypeFrom, convertCipherTypeTo} from "../../src/common/codec";
import {expect} from "vitest";

describe('Protoc', () => {
    it('enum', async () => {
        const cipherType = CipherTypeEnum.CIPHER_TYPE_AES_GCM_256
        const type = CipherTypeEnum.CIPHER_TYPE_AES_GCM_256
        const str = convertCipherTypeTo(type) as string
        expect(str).toBe('CIPHER_TYPE_AES_GCM_256')
        expect(convertCipherTypeFrom(str)).toEqual(cipherType)
    })
})