import { BlockAddress } from '@yeying-community/yeying-web3'
import { NotFound } from '../common/error'
import {
    SearchServiceConditionSchema,
    ServiceCodeEnum,
    ServiceCodeEnumJson,
    ServiceCodeEnumSchema,
    ServiceMetadata,
    ServiceProvider
} from '@yeying-community/yeying-client-ts'
import { Myself } from '../application/myself'
import { create, toBinary, toJson, enumToJson, fromJson, enumFromJson } from '@bufbuild/protobuf'

/**
 * 从当前应用的注册表搜索服务元信息，注册表通常存储在节点服务中
 *
 */
export class ServiceManager {
    myself: Myself
    blockAddress: BlockAddress

    constructor(blockAddress: BlockAddress, myself?: Myself) {
        this.blockAddress = blockAddress
        this.myself = myself ? myself : new Myself()
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
        const res = await serviceProvider.search(1, 10, { code: enumToJson(ServiceCodeEnumSchema, code) })
        if (res.body?.services === undefined || res.body?.services.length === 0) {
            throw new NotFound(`There is no ${ServiceCodeEnum[code]} service!`)
        } else {
            return res.body?.services
        }
    }

    /**
     * 获取当前访问的前端应用节点服务元信息
     *
     * @return 节点服务元信息
     *
     */
    async getCurrentNodeService() {
        const nodes = await this.myself.registry()
        if (nodes === undefined || nodes.length === 0) {
            throw new NotFound('There is no node service!')
        } else {
            return nodes[0]
        }
    }
}
