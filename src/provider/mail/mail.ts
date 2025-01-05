import { Authenticate } from '../common/authenticate'
import { MessageHeader } from '../../yeying/api/common/message_pb'
import { ProviderOption } from '../common/model'
import { MailClient } from '../../yeying/api/mail/MailServiceClientPb'
import { VerifyRequest, VerifyRequestBody, SendRequest, SendRequestBody } from '../../yeying/api/mail/mail_pb'

/**
 * 邮件验证码实现
 */

export class MailProvider {
    private authenticate: Authenticate
    private client: MailClient

    constructor(authenticate: Authenticate, option: ProviderOption) {
        this.authenticate = authenticate
        this.client = new MailClient(option.proxy)
    }

    send(toMail: string) {
        return new Promise(async (resolve, reject) => {
            const body = new SendRequestBody()
            body.setTomail(toMail)
            let header: MessageHeader
            try {
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error('Fail to create header for mail send', err)
                return reject(err)
            }

            const request = new SendRequest()
            request.setHeader(header)
            request.setBody(body)

            this.client.send(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then((body) => resolve(body), reject)
            })
        })
    }

    verify(toMail: string, code: string) {
        return new Promise(async (resolve, reject) => {
            const body = new VerifyRequestBody()
            body.setTomail(toMail)
            body.setCode(code)
            let header: MessageHeader
            try {
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error('Fail to create header for verify', err)
                return reject(err)
            }

            const request = new VerifyRequest()
            request.setHeader(header)
            request.setBody(body)

            this.client.verify(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then((body) => resolve(body), reject)
            })
        })
    }
}
