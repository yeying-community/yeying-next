import {ApplicationCodeEnum} from "@yeying-community/yeying-client-ts";
import {getApplicationAddress} from "../common/common";
import {Myself} from "../../src/application/myself";

describe('Myself', () => {
    it('whoami', async () => {
        const myself = new Myself(getApplicationAddress(ApplicationCodeEnum.APPLICATION_CODE_MARKET));
        const portal = await myself.whoami()
        expect(portal).toBeDefined()
        const services = await myself.registry()
        expect(services.length).greaterThanOrEqual(1)
        for (const service of services) {
            console.log(`service proxy=${service.proxy}`)
        }
    })
})
