import {ApplicationManager} from "../../src/application/manager";
import {ServiceManager} from "../../src/service/manager";
import {ApplicationCodeEnum, ServiceCodeEnum} from "@yeying-community/yeying-client-ts";
import {getApplicationAddress, getBlockAddress} from "../common/common";
import {Myself} from "../../src/application/myself";

describe('Service', () => {
    it('metadata', async () => {
        const myself = new Myself(getApplicationAddress(ApplicationCodeEnum.APPLICATION_CODE_MARKET))
        const serviceManager = new ServiceManager(getBlockAddress(), myself);
        const services = await serviceManager.listServiceByCode(ServiceCodeEnum.SERVICE_CODE_AGENT)
        for (const service of services) {
            console.log(`service proxy=${service.proxy}`)
        }
    })
})
