import {ApplicationManager} from "../../src/application/manager";
import {ApplicationCodeEnum} from "../../src";
import {getApplicationAddress} from "../provider/common/common";

describe('Application', () => {
    it('metadata', async () => {
        const applicationManager = new ApplicationManager(getApplicationAddress(ApplicationCodeEnum.APPLICATION_CODE_MARKET));
        const portal = await applicationManager.whoami()
        expect(portal).toBeDefined()
        const services = await applicationManager.registry()
        expect(services.length).greaterThanOrEqual(1)
        for (const service of services) {
            console.log(`service proxy=${service.proxy}`)
        }
    })
})
