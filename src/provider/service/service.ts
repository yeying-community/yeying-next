import {Authenticate} from '../common/authenticate'
import {Provider} from '../common/model'
import {ServiceClient} from '../../yeying/api/service/ServiceServiceClientPb'
import {MessageHeader} from '../../yeying/api/common/message_pb'
import {ServiceMetadata, WhoamiRequest, WhoamiResponseBody} from '../../yeying/api/service/service_pb'
import {DataForgery} from '../../common/error'
import {fromDidToPublicKey, verifyHashBytes} from "@yeying-community/yeying-web3";
import {computeHash} from "../../common/crypto";

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
                this.authenticate.doResponse(err, res)
                    .catch(reject)
                    .then(async (body) => {
                        const serviceMetadata = body.getService() as ServiceMetadata
                        const signature = serviceMetadata.getSignature()
                        serviceMetadata.setSignature('')
                        const passed = await this.authenticate.verify(serviceMetadata.getDid(), serviceMetadata.serializeBinary(), signature)
                        if (passed) {
                            serviceMetadata.setSignature(signature)
                            resolve(serviceMetadata)
                        } else {
                            reject(new DataForgery('invalid signature!'))
                        }
                    })
            })
        })
    }
}
