import { Authenticate } from '../common/authenticate'
import { ProviderOption } from '../common/model'
import {
    RegisterServiceRequestBodySchema,
    RegisterServiceRequestSchema,
    RegisterServiceResponseBody,
    RegisterServiceResponseBodySchema,
    SearchServiceCondition,
    SearchServiceConditionSchema,
    SearchServiceRequestBodySchema,
    SearchServiceRequestSchema,
    SearchServiceResponseBody,
    SearchServiceResponseBodySchema,
    Service,
    ServiceMetadata,
    ServiceMetadataSchema,
    UnregisterServiceRequestBodySchema,
    UnregisterServiceRequestSchema,
    UnregisterServiceResponseBody,
    UnregisterServiceResponseBodySchema
} from '../../yeying/api/service/service_pb'
import { Client, createClient } from '@connectrpc/connect'
import { createGrpcWebTransport } from '@connectrpc/connect-web'
import { MessageHeader, RequestPageSchema } from '../../yeying/api/common/message_pb'
import { create, toBinary } from '@bufbuild/protobuf'

/**
 * 提供服务管理功能的类，支持注册、搜索和注销服务。
 */
export class ServiceProvider {
    private authenticate: Authenticate
    private client: Client<typeof Service>

    /**
     * 构造函数
     * @param option - 包含代理地址和区块地址信息的配置选项
     * @example
     * ```ts
     * const providerOption = { proxy: 'http://proxy.example.com', blockAddress: { identifier: 'example-did', privateKey: 'example-private-key' } }
     * const serviceProvider = new ServiceProvider(providerOption)
     * ```
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(
            Service,
            createGrpcWebTransport({
                baseUrl: option.proxy,
                useBinaryFormat: true
            })
        )
    }

    /**
     * 注册服务
     * @param service - 服务元数据对象
     * @returns 返回注册服务的响应体
     * @example
     * ```ts
     * const serviceMetadata = { did: 'example-did', name: 'example-service', description: 'This is a service' }
     * serviceProvider.register(serviceMetadata)
     *   .then(response => console.log(response))
     *   .catch(err => console.error(err))
     * ```
     */
    register(service: ServiceMetadata) {
        return new Promise<RegisterServiceResponseBody>(async (resolve, reject) => {
            const body = create(RegisterServiceRequestBodySchema, {
                service: service
            })

            let header: MessageHeader
            try {
                service.signature = await this.authenticate.sign(toBinary(ServiceMetadataSchema, service))
                header = await this.authenticate.createHeader(toBinary(RegisterServiceRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for registering service.', err)
                return reject(err)
            }

            const request = create(RegisterServiceRequestSchema, { header: header, body: body })
            try {
                const res = await this.client.register(request)
                await this.authenticate.doResponse(res, RegisterServiceResponseBodySchema)
                resolve(res.body as RegisterServiceResponseBody)
            } catch (err) {
                console.error('Fail to register service', err)
                return reject(err)
            }
        })
    }

    /**
     * 根据条件和分页参数查询服务列表
     * @param condition - 搜索条件（部分 `SearchServiceCondition` 对象）
     * @param page - 当前页码
     * @param pageSize - 每页显示的条目数
     * @returns 返回搜索服务的响应体
     * @example
     * ```ts
     * const condition = { code: 'example-code', owner: 'example-owner' }
     * serviceProvider.search(condition, 1, 10)
     *   .then(response => console.log(response))
     *   .catch(err => console.error(err))
     * ```
     */
    search(condition: Partial<SearchServiceCondition>, page: number, pageSize: number) {
        return new Promise<SearchServiceResponseBody>(async (resolve, reject) => {
            const body = create(SearchServiceRequestBodySchema, {
                condition: create(SearchServiceConditionSchema, {
                    code: condition.code,
                    owner: condition.owner
                }),

                page: create(RequestPageSchema, { page: page, pageSize: pageSize })
            })

            let header: MessageHeader
            try {
                header = await this.authenticate.createHeader(toBinary(SearchServiceRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for searching service.', err)
                return reject(err)
            }

            const request = create(SearchServiceRequestSchema, { header: header, body: body })
            try {
                const res = await this.client.search(request)
                await this.authenticate.doResponse(res, SearchServiceResponseBodySchema)
                resolve(res.body as SearchServiceResponseBody)
            } catch (err) {
                console.error('Fail to search service', err)
                return reject(err)
            }
        })
    }

    /**
     * 根据服务的 DID 和版本号发送注销请求
     * @param did - 服务的 DID
     * @param version - 服务的版本号
     * @returns 返回注销服务的响应体
     * @example
     * ```ts
     * serviceProvider.unregister('example-did', 1)
     *   .then(response => console.log(response))
     *   .catch(err => console.error(err))
     * ```
     */
    unregister(did: string, version: number) {
        return new Promise<UnregisterServiceResponseBody>(async (resolve, reject) => {
            const body = create(UnregisterServiceRequestBodySchema, {
                did: did,
                version: version
            })

            let header: MessageHeader
            try {
                header = await this.authenticate.createHeader(toBinary(UnregisterServiceRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for unregistering service.', err)
                return reject(err)
            }

            const request = create(UnregisterServiceRequestSchema, { header: header, body: body })
            try {
                const res = await this.client.unregister(request)
                await this.authenticate.doResponse(res, UnregisterServiceResponseBodySchema)
                resolve(res.body as UnregisterServiceResponseBody)
            } catch (err) {
                console.error('Fail to unregister service', err)
                return reject(err)
            }
        })
    }
}
