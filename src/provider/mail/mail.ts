import { Authenticate } from '../common/authenticate'
import { MessageHeader } from '../../yeying/api/common/message_pb'
import { ProviderOption } from '../common/model'
import { MailClient } from '../../yeying/api/mail/MailServiceClientPb'
import { VerifyRequest, VerifyRequestBody, SendRequest, SendRequestBody } from '../../yeying/api/mail/mail_pb'

/**
 * 邮箱验证码服务提供者，提供前端页面直接调用的接口。
 * 通过该类，用户可以发送和验证邮箱验证码。
 * 
 * @example
 * ```ts
 * const mailProvider = new MailProvider(authenticate, option);
 * mailProvider.send('example@mail.com').then(response => console.log(response));
 * ```
 */
export class MailProvider {
    /**
     * authenticate 服务认证实例
     * @private
     */
    private authenticate: Authenticate

    /**
     * mailClient 邮件客户端，用于与邮件服务交互
     * @private
     */
    private mailClient: MailClient

    /**
     * 构造函数：初始化认证和邮件客户端
     * 
     * @param authenticate - 用于认证的 Authenticate 实例
     * @param option - 提供者选项，如代理设置
     * @example
     * ```ts
     * const authenticate = new Authenticate(blockAddress);
     * const mailProvider = new MailProvider(authenticate, { proxy: 'proxyUrl' });
     * ```
     */
    constructor(authenticate: Authenticate, option: ProviderOption) {
        this.authenticate = authenticate
        this.mailClient = new MailClient(option.proxy)
    }

    /**
     * 发送邮箱验证码。
     * 
     * @param toMail - 目标邮箱地址
     * @returns Promise - 发送请求的响应数据
     * @example
     * ```ts
     * mailProvider.send('example@mail.com').then(response => {
     *   console.log(response); // 发送成功的响应
     * }).catch(err => {
     *   console.error(err); // 错误信息
     * });
     * ```
     */
    send(toMail: string) {
        return new Promise(async (resolve, reject) => {
            const body = new SendRequestBody()
            body.setTomail(toMail)
            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error('Fail to create header for mail send', err)
                return reject(err)
            }

            const request = new SendRequest()
            request.setHeader(header)
            request.setBody(body)

            // 发送请求并处理响应
            this.mailClient.send(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then((body) => resolve(body), reject)
            })
        })
    }

    /**
     * 校验邮箱验证码。
     * 
     * @param toMail - 目标邮箱地址
     * @param code - 用户输入的验证码
     * @returns Promise - 校验请求的响应数据
     * @example
     * ```ts
     * mailProvider.verify('example@mail.com', '123456').then(response => {
     *   console.log(response); // 校验成功的响应
     * }).catch(err => {
     *   console.error(err); // 错误信息
     * });
     * ```
     */
    verify(toMail: string, code: string) {
        return new Promise(async (resolve, reject) => {
            const body = new VerifyRequestBody()
            body.setTomail(toMail)
            body.setCode(code)
            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error('Fail to create header for verify', err)
                return reject(err)
            }

            const request = new VerifyRequest()
            request.setHeader(header)
            request.setBody(body)

            // 校验请求并处理响应
            this.mailClient.verify(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then((body) => resolve(body), reject)
            })
        })
    }
}
