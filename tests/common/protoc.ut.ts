import {CipherTypeEnum} from "../../src/yeying/api/common/code_pb";
import {expect} from "vitest";

describe('Protoc', () => {
    it('enum', async () => {
        let type: CipherTypeEnum
        type = CipherTypeEnum.CIPHER_TYPE_AES_GCM_256
        expect(CipherTypeEnum[type]).toBe('CIPHER_TYPE_AES_GCM_256')
        let str = 'CIPHER_TYPE_AES_GCM_256'
        expect(CipherTypeEnum[str as keyof typeof CipherTypeEnum]).toBe(CipherTypeEnum.CIPHER_TYPE_AES_GCM_256)
    })
})