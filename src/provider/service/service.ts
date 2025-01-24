import {Authenticate} from '../common/authenticate'
import {ProviderOption} from '../common/model'
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
    UnregisterServiceRequestBodySchema,
    UnregisterServiceRequestSchema,
    UnregisterServiceResponseBody,
    UnregisterServiceResponseBodySchema
} from "../../yeying/api/service/service_pb";
import {Client, createClient} from "@connectrpc/connect";
import {createGrpcWebTransport} from "@connectrpc/connect-web";
import {
    MessageHeader,
    RequestPageSchema,
    ServiceMetadata,
    ServiceMetadataSchema
} from "../../yeying/api/common/message_pb";
import {create, toBinary} from "@bufbuild/protobuf";

/**
 * ServiceProvider 类负责登记、注销、以及搜索服务。
 *
 */
export class ServiceProvider {
    private authenticate: Authenticate
    private client: Client<typeof Service>

    /**
     * ServiceProvider 的构造函数，初始化身份认证和客户端实例。
     *
     * @param option - 服务提供商的选项，包括代理设置等。
     * @example
     *
     * ```ts
     * const providerOption = { proxy: <proxy url>, blockAddress: <your block address> };
     * const provider = new ServiceProvider(providerOption);
     * ```
     *
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(Service, createGrpcWebTransport({
            baseUrl: option.proxy,
            useBinaryFormat: true,
        }))
    }

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

            const request = create(RegisterServiceRequestSchema, {header: header, body: body})
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

    search(condition: Partial<SearchServiceCondition>, page: number, pageSize: number) {
        return new Promise<SearchServiceResponseBody>(async (resolve, reject) => {
            const body = create(SearchServiceRequestBodySchema, {
                condition: create(SearchServiceConditionSchema, {
                    code: condition.code,
                    owner: condition.owner,
                }),

                page: create(RequestPageSchema, {page: page, pageSize: pageSize})
            })

            let header: MessageHeader
            try {
                header = await this.authenticate.createHeader(toBinary(SearchServiceRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for searching service.', err)
                return reject(err)
            }

            const request = create(SearchServiceRequestSchema, {header: header, body: body})
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

    unregister(did: string) {
        return new Promise<UnregisterServiceResponseBody>(async (resolve, reject) => {
            const body = create(UnregisterServiceRequestBodySchema, {
                did: did
            })

            let header: MessageHeader
            try {
                header = await this.authenticate.createHeader(toBinary(UnregisterServiceRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for unregistering service.', err)
                return reject(err)
            }

            const request = create(UnregisterServiceRequestSchema, {header: header, body: body})
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
