import {AccountManager} from "../../src/account/manager";
import {convertCipherTypeTo} from "../../src/common/codec";
import {CipherTypeEnum} from "../../src";
import {expect} from "vitest";

describe('Account', () => {
    // 登记
    it('create guest', async () => {
        const type = CipherTypeEnum.CIPHER_TYPE_AES_GCM_256
        const str = convertCipherTypeTo(type)
        const str1 = CipherTypeEnum[type]
        expect(str).toBe('CIPHER_TYPE_AES_GCM_256')
        const accountManager = new AccountManager()
        const identity = await accountManager.createGuest()
        console.log(`${JSON.stringify(identity, null, 2)}`)
        expect(identity.metadata?.name).toEqual("Guest")
    })
})