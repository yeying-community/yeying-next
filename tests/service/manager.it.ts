import {ApplicationManager} from "../../src/application/manager";
import {ApplicationCodeEnum, ServiceCodeEnum} from "../../src";
import {ServiceManager} from "../../src/service/manager";
import {getApplicationAddress, getBlockAddress} from "../provider/common/common";

describe('Service', () => {
    it('metadata', async () => {
        const applicationManager = new ApplicationManager(getApplicationAddress(ApplicationCodeEnum.APPLICATION_CODE_MARKET))
        const serviceManager = new ServiceManager(getBlockAddress(), applicationManager);
        const services = await serviceManager.listServiceByCode(ServiceCodeEnum.SERVICE_CODE_AGENT)
        for (const service of services) {
            console.log(`service proxy=${service.proxy}`)
        }
    })
})
