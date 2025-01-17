import { Authenticate } from '../common/authenticate'
import { ProviderOption } from '../common/model'
import { ServiceClient } from '../../yeying/api/service/ServiceServiceClientPb'
import { MessageHeader } from '../../yeying/api/common/message_pb'
import { RegisterRequestBody, ServiceMetadata, WhoamiRequest } from '../../yeying/api/service/service_pb'
import { DataForgery } from '../../common/error'
import { Identity } from '@yeying-community/yeying-web3'

/**
 * ServiceProvider 类负责处理与服务端通信的逻辑，包括身份验证和服务注册等。
 * 
 * @example
 * ```ts
 * const provider = new ServiceProvider(authenticate, providerOption);
 * provider.whoami().then(metadata => console.log(metadata));
 * ```
 */
export class ServiceProvider {
    private authenticate: Authenticate
    private client: ServiceClient

    /**
     * ServiceProvider 的构造函数，初始化身份认证和客户端实例。
     * 
     * @param authenticate - 用于身份认证的 Authenticate 实例。
     * @param option - 服务提供商的选项，包括代理设置等。
     * @example
     * ```ts
     * const authenticate = new Authenticate(blockAddress);
     * const providerOption = { proxy: 'http://localhost:8080' };
     * const provider = new ServiceProvider(authenticate, providerOption);
     * ```
     */
    constructor(authenticate: Authenticate, option: ProviderOption) {
        this.authenticate = authenticate
        this.client = new ServiceClient(option.proxy)
    }

    /**
     * 获取当前服务的元数据，验证其签名的有效性。
     * 
     * @returns 返回一个 Promise，解析为 ServiceMetadata。
     * @throws {DataForgery} 如果签名验证失败，抛出数据伪造错误。
     * @example
     * ```ts
     * provider.whoami().then(metadata => {
     *     console.log('Service Metadata:', metadata);
     * }).catch(err => {
     *     console.error('Error:', err);
     * });
     * ```
     */
    whoami(): Promise<ServiceMetadata> {
        return new Promise(async (resolve, reject) => {
            let header: MessageHeader
            try {
                // 创建身份认证的消息头
                header = await this.authenticate.createHeader()
            } catch (err) {
                console.error('Fail to create header for whoami', err)
                return reject(err)
            }

            const request = new WhoamiRequest()
            request.setHeader(header)

            // 调用客户端的 whoami 方法，并处理响应
            this.client.whoami(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then(async (body) => {
                    const serviceMetadata = body.getService() as ServiceMetadata
                    const signature = serviceMetadata.getSignature()

                    // 清空签名，准备验证
                    serviceMetadata.setSignature('')
                    const passed = await this.authenticate.verify(
                        serviceMetadata.getDid(),
                        serviceMetadata.serializeBinary(),
                        signature
                    )

                    // 如果签名验证通过，返回服务元数据
                    if (passed) {
                        serviceMetadata.setSignature(signature)
                        resolve(serviceMetadata)
                    } else {
                        // 如果签名验证失败，抛出伪造数据错误
                        reject(new DataForgery('invalid signature!'))
                    }
                }, reject)
            })
        })
    }

    // register(identity: Idendity) {
    //     return new Promise(async (resolve, reject) => {
    //         let header: MessageHeader
    //         const body = new RegisterRequestBody()
    //         body.setService(convert)
    //
    //         try {
    //             header = await this.authenticate.createHeader()
    //         } catch (err) {
    //             console.error('Fail to create header for whoami', err)
    //             return reject(err)
    //         }

    // const method = '/yeying.api.service.Service/Register'
    // if (!isServiceIdentity(identity.metadata.code)) {
    //     return reject(new InvalidArgument(`Mismatch identity=${identity.metadata.code}`))
    // }
    //
    // const metadata = new ServiceMetadata()
    // metadata.setDid(identity.metadata.did)
    // metadata.setNetwork(identity.metadata.network)
    // metadata.setAddress(identity.blockAddress.address)
    // metadata.setOwner(identity.metadata.parent)
    // metadata.setVersion(identity.metadata.version)
    // metadata.setName(identity.metadata.name)
    // metadata.setAvatar(identity.metadata.avatar)
    // metadata.setCreated(identity.metadata.created)
    // metadata.setCheckpoint(identity.metadata.checkpoint)
    //
    // metadata.setCode(convertServiceCodeFrom(identity.extend.code))
    // metadata.setApisList(identity.extend.apis.map(a => convertApiCodeFrom(a)))
    // metadata.setProxy(identity.extend.proxy)
    // metadata.setGrpc(identity.extend.grpc)
    //
    // const body = new RegisterRequestBody()
    // body.setService(metadata)
    //
    // let header
    // try {
    //     header = await this.authenticate.createHeader(method, body)
    // } catch (err) {
    //     console.error('Fail to create header for register service', err)
    //     return reject(err)
    // }
    //
    // const request = new RegisterRequest()
    // request.setHeader(header)
    // request.setBody(body)
    // this.client.register(request, undefined, (err, res) => {
    //     this.doRegisterResponse(method, err, res, resolve, reject)
    // })
    //     })
    // }
}
