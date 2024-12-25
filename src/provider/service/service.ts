import { Authenticate } from '../common/authenticate'
import { Provider } from '../common/model'
import { ServiceClient } from '../../yeying/api/service/ServiceServiceClientPb'
import { MessageHeader } from '../../yeying/api/common/message_pb'
import { ServiceMetadata, WhoamiRequest } from '../../yeying/api/service/service_pb'
import { Wallet } from '@yeying-community/yeying-web3'
import { DataForgery } from '../../common/error'

export class ServiceProvider {
    private authenticate: Authenticate
    private client: ServiceClient

    constructor(authenticate: Authenticate, provider: Provider) {
        this.authenticate = authenticate
        this.client = new ServiceClient(provider.proxy)
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
                this.authenticate
                    .doResponse(err, res.getHeader(), res.getBody()?.getStatus(), res.getBody()?.serializeBinary())
                    .catch(reject)
                    .then(async () => {
                        const serviceMetadata = res.getBody()?.getService() as ServiceMetadata
                        const signature = serviceMetadata.getSignature()
                        serviceMetadata.setSignature('')
                        const passed = await Wallet.verifyData(
                            serviceMetadata.getDid(),
                            serviceMetadata.serializeBinary(),
                            signature
                        )
                        if (passed) {
                            resolve(res.getBody()?.getService() as ServiceMetadata)
                        } else {
                            reject(new DataForgery('invalid signature!'))
                        }
                    })
            })
        })
    }
}
