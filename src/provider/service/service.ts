import {Authenticate} from '../common/authenticate'
import {ProviderOption} from '../common/model'
import {ServiceClient} from '../../yeying/api/service/ServiceServiceClientPb'

/**
 * ServiceProvider 类负责登记、注销、以及搜索服务。
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
