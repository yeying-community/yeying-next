import { Authenticate } from '../common/authenticate'
import { ProviderOption } from '../common/model'
import { ServiceClient } from '../../yeying/api/service/ServiceServiceClientPb'
import { MessageHeader } from '../../yeying/api/common/message_pb'
import { RegisterRequestBody, ServiceMetadata, WhoamiRequest } from '../../yeying/api/service/service_pb'
import { DataForgery } from '../../common/error'
import { Identity } from '@yeying-community/yeying-web3'

export class ServiceProvider {
    private authenticate: Authenticate
    private client: ServiceClient

    constructor(authenticate: Authenticate, option: ProviderOption) {
        this.authenticate = authenticate
        this.client = new ServiceClient(option.proxy)
    }

    whoami(): Promise<ServiceMetadata> {
        return new Promise(async (resolve, reject) => {
            let header: MessageHeader
            try {
                header = await this.authenticate.createHeader()
            } catch (err) {
                console.error('Fail to create header for whoami', err)
                return reject(err)
            }

            const request = new WhoamiRequest()
            request.setHeader(header)
            this.client.whoami(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then(async (body) => {
                    const serviceMetadata = body.getService() as ServiceMetadata
                    const signature = serviceMetadata.getSignature()
                    serviceMetadata.setSignature('')
                    const passed = await this.authenticate.verify(
                        serviceMetadata.getDid(),
                        serviceMetadata.serializeBinary(),
                        signature
                    )
                    if (passed) {
                        serviceMetadata.setSignature(signature)
                        resolve(serviceMetadata)
                    } else {
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
