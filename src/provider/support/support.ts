import { ProviderOption } from '../common/model'
import { Authenticate } from '../common/authenticate'
import { SupportClient } from '../../yeying/api/support/SupportServiceClientPb'
import { CollectRequest, CollectRequestBody, FaqMetadata, SupportCodeEnum } from '../../yeying/api/support/support_pb'
import { MessageHeader } from '../../yeying/api/common/message_pb'
import { getCurrentUtcString } from '../../common/date'

export class SupportProvider {
    private authenticate: Authenticate
    private client: SupportClient

    constructor(authenticate: Authenticate, option: ProviderOption) {
        this.authenticate = authenticate
        this.client = new SupportClient(option.proxy)
    }

    async collectFaq(type: string, email: string, description: string) {
        return new Promise<void>(async (resolve, reject) => {
            const faq = new FaqMetadata()
            faq.setDid(this.authenticate.getDid())
            faq.setType(type)
            faq.setEmail(email)
            faq.setDescription(description)
            faq.setCreated(getCurrentUtcString())

            const body = new CollectRequestBody()
            body.setCode(SupportCodeEnum.SUPPORT_CODE_FAQ)

            let header: MessageHeader
            try {
                faq.setSignature(await this.authenticate.sign(faq.serializeBinary()))
                body.setFaq(faq)
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error('Fail to create header for collecting faq', err)
                return err
            }

            const request = new CollectRequest()
            request.setHeader(header)
            request.setBody(body)

            this.client.collect(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then((body) => resolve(body), reject)
            })
        })
    }
}
