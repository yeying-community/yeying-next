import {Provider} from "../common/model";
import {Authenticate} from "../common/authenticate";
import {SupportClient} from "../../yeying/api/support/SupportServiceClientPb";
import {CollectRequest, CollectRequestBody, FaqMetadata, SupportCodeEnum} from "../../yeying/api/support/support_pb";
import {AddResponse} from "../../yeying/api/user/user_pb";
import {MessageHeader} from "../../yeying/api/common/message_pb";
import {getCurrentUtcString} from "../../common/date";
import {RpcError} from "grpc-web";
import {NetworkDown} from "../../common/error";
import {convertResponseStatusToError} from "../../common/status";

export class SupportProvider {
    private authenticate: Authenticate
    private client: SupportClient

    constructor(authenticate: Authenticate, provider: Provider) {
        this.authenticate = authenticate
        this.client = new SupportClient(provider.proxy)
    }

    async collectFaq(type: string, email: string, description: string) {
        return new Promise<void>(async (resolve, reject) => {
            const faq = new FaqMetadata()
            faq.setType(type)
            faq.setEmail(email)
            faq.setDescription(description)
            faq.setCreated(getCurrentUtcString())

            const body = new CollectRequestBody()
            body.setCode(SupportCodeEnum.SUPPORT_CODE_FAQ)
            body.setFaq(faq)

            let header: MessageHeader
            try {
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error('Fail to create header for collecting faq', err)
                return err
            }

            const request = new CollectRequest()
            request.setHeader(header)
            request.setBody(body)

            this.client.collect(request, null, (err, res) => {
                const body = res.getBody()
                this.authenticate.doResponse(err, res.getHeader(), body?.getStatus(), body?.serializeBinary())
                    .then(() => resolve())
                    .catch(err => reject(err))
            })
        })
    }

    async doCollectResponse(err: RpcError, res: AddResponse) {
        const header = res.getHeader()
        const body = res.getBody()
        const status = body?.getStatus()
        if (err === undefined || header === undefined || body === undefined || status === undefined) {
            throw new NetworkDown("Fail to collect")
        }

        const error = convertResponseStatusToError(status)
        if (error !== undefined) {
            throw error
        }

        await this.authenticate.verifyHeader(header, body.serializeBinary())
    }
}