import { Authenticate } from '../common/authenticate'
import { ProviderOption } from '../common/model'
import { ServiceClient } from '../../yeying/api/service/ServiceServiceClientPb'
import { MessageHeader } from '../../yeying/api/common/message_pb'
import { ServiceMetadata, WhoamiRequest } from '../../yeying/api/service/service_pb'
import { DataForgery } from '../../common/error'

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
}
