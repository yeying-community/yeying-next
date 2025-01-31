import {convertCipherTypeFrom, convertCipherTypeTo, getDigitalFormatByName} from "../../src/common/message";
import {CipherTypeEnum, DigitalFormatEnum} from "../../src";
import {expect} from "vitest";

describe('Message', () => {
    it ('code',() => {
        expect(convertCipherTypeTo()).toBe('CIPHER_TYPE_UNKNOWN')
        expect(convertCipherTypeTo(CipherTypeEnum.CIPHER_TYPE_AES_GCM_256)).toBe('CIPHER_TYPE_AES_GCM_256')
        expect(convertCipherTypeFrom('TEST')).toBe(CipherTypeEnum.CIPHER_TYPE_UNKNOWN)

        const cipherType = CipherTypeEnum.CIPHER_TYPE_AES_GCM_256
        const type = CipherTypeEnum.CIPHER_TYPE_AES_GCM_256
        const str = convertCipherTypeTo(type) as string
        expect(str).toBe('CIPHER_TYPE_AES_GCM_256')
        expect(convertCipherTypeFrom(str)).toEqual(cipherType)

    })

    it('digital format', async () => {
        const name1 = "audio.wav"
        const format1 = getDigitalFormatByName(name1)
        assert.equal(format1, DigitalFormatEnum.DIGITAL_FORMAT_AUDIO)
        const name2 = "audio"
        const format2 = getDigitalFormatByName(name2)
        assert.equal(format2, DigitalFormatEnum.DIGITAL_FORMAT_OTHER)
    })
})