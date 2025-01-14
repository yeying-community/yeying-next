import { Authenticate } from '../common/authenticate'
import { MessageHeader } from '../../yeying/api/common/message_pb'
import { ProviderOption } from '../common/model'
import { MailClient } from '../../yeying/api/mail/MailServiceClientPb'
import { VerifyRequest, VerifyRequestBody, SendRequest, SendRequestBody } from '../../yeying/api/mail/mail_pb'

/**
 * 这是一个邮箱验证码的服务提供者，用于前端页面直接调用
 */
export class MailProvider {
    /**
     * authenticate 服务认证
     * @private
     */
    private authenticate: Authenticate

    /**
     * mailClient
     * @private
     */
    private mailClient: MailClient

    /**
     * 构造函数：初始化
     * @param authenticate
     * @param option
     */
    constructor(authenticate: Authenticate, option: ProviderOption) {
        this.authenticate = authenticate
        this.mailClient = new MailClient(option.proxy)
    }

    /**
     * 发送验证码
     * @param toMail
     * @returns Promise
     */
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

            this.mailClient.send(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then((body) => resolve(body), reject)
            })
        })
    }

    /**
     * 邮箱验证码校验
     * @param toMail 邮箱账号
     * @param code 验证码
     * @returns Promise
     */
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

            this.mailClient.verify(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then((body) => resolve(body), reject)
            })
        })
    }
}
