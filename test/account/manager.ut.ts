import {AccountManager} from "../../src/account/manager";

describe('Account', () => {
    // 登记
    it('create guest', async () => {
        const accountManager = new AccountManager()
        const identity = await accountManager.createGuest()
        console.log(`${JSON.stringify(identity, null, 2)}`)
        expect(identity.metadata.name).toEqual("Guest")
    })
})