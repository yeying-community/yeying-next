import {ApplicationManager} from "../application/manager";
import {ServiceCodeEnum} from "../yeying/api/common/code_pb";
import {ServiceProvider} from "../provider/service/service";
import {BlockAddress} from "@yeying-community/yeying-web3";
import {NotFound} from "../common/error";

/**
 * 从当前应用的注册表搜索服务元信息，注册表通常存储在节点服务中
 *
 */
export class ServiceManager {
    applicationManager: ApplicationManager
    blockAddress: BlockAddress

    constructor(blockAddress: BlockAddress, applicationManager?: ApplicationManager) {
        this.applicationManager = applicationManager ? applicationManager : new ApplicationManager()
        this.blockAddress = blockAddress
    }

    async listServiceByCode(code: ServiceCodeEnum) {
        const node = await this.getCurrentNodeService()
        const serviceProvider = new ServiceProvider({proxy: node.proxy, blockAddress: this.blockAddress})
        const services = await serviceProvider.search({code: code}, 1, 10)
        if (services === undefined || services.length === 0) {
            throw new NotFound(`There is no ${ServiceCodeEnum[code]} service!`)
        } else {
            return services
        }
    }

    async getCurrentNodeService() {
        const nodes = await this.applicationManager.registry()
        if (nodes === undefined || nodes.length === 0) {
            throw new NotFound("There is no node service!")
        } else {
            return nodes[0]
        }
    }
}