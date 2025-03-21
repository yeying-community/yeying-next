import { ApplicationManager } from '../application/manager'
import { ServiceCodeEnum } from '../yeying/api/common/code_pb'
import { ServiceProvider } from '../provider/service/service'
import { BlockAddress } from '@yeying-community/yeying-web3'
import { NotFound } from '../common/error'
import { ServiceMetadata } from '../yeying/api/common/model_pb'

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

    /**
     * 根据服务编码查询服务元信息
     *
     * @param code 服务编码
     *
     * @return 服务元信息列表
     *
     */
    async listServiceByCode(code: ServiceCodeEnum): Promise<ServiceMetadata[]> {
        const node = await this.getCurrentNodeService()
        const serviceProvider = new ServiceProvider({ proxy: node.proxy, blockAddress: this.blockAddress })
        const services = await serviceProvider.search({ code: code }, 1, 10)
        if (services === undefined || services.length === 0) {
            throw new NotFound(`There is no ${ServiceCodeEnum[code]} service!`)
        } else {
            return services
        }
    }

    /**
     * 获取当前访问的前端应用节点服务元信息
     *
     * @return 节点服务元信息
     *
     */
    async getCurrentNodeService() {
        const nodes = await this.applicationManager.registry()
        if (nodes === undefined || nodes.length === 0) {
            throw new NotFound('There is no node service!')
        } else {
            return nodes[0]
        }
    }
}
