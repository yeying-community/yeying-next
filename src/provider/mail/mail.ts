import { Authenticate } from '../common/authenticate'
import { MessageHeader } from '../../yeying/api/common/message_pb'
import { ProviderOption } from '../common/model'
import {
    Mail,
    SendMailRequestBodySchema,
    SendMailRequestSchema,
    SendMailResponseBody,
    SendMailResponseBodySchema,
    VerifyMailRequestBodySchema,
    VerifyMailRequestSchema,
    VerifyMailResponseBody,
    VerifyMailResponseBodySchema
} from '../../yeying/api/mail/mail_pb'
import { Client, createClient } from '@connectrpc/connect'
import { createGrpcWebTransport } from '@connectrpc/connect-web'
import { create, toBinary } from '@bufbuild/protobuf'

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
    private client: Client<typeof Mail>

    /**
     * 构造函数：初始化认证和邮件客户端
     *
     * @param option - 提供者选项，如代理设置
     * @example
     * ```ts
     * const providerOption = { proxy: <proxy url>, blockAddress: <your block address> };
     * const mailProvider = new MailProvider(providerOption);
     * ```
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(
            Mail,
            createGrpcWebTransport({
                baseUrl: option.proxy,
                useBinaryFormat: true
            })
        )
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
        return new Promise<SendMailResponseBody>(async (resolve, reject) => {
            const body = create(SendMailRequestBodySchema, {
                toMail: toMail
            })

            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(toBinary(SendMailRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for sending mail', err)
                return reject(err)
            }

            const request = create(SendMailRequestSchema, { header: header, body: body })
            try {
                const res = await this.client.send(request)
                await this.authenticate.doResponse(res, SendMailResponseBodySchema)
                resolve(res.body as SendMailResponseBody)
            } catch (err) {
                console.error('Fail to send mail', err)
                return reject(err)
            }
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
        return new Promise<VerifyMailResponseBody>(async (resolve, reject) => {
            const body = create(VerifyMailRequestBodySchema, {
                toMail: toMail,
                code: code
            })
            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(toBinary(VerifyMailRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header when verify email code.', err)
                return reject(err)
            }

            const request = create(VerifyMailRequestSchema, { header: header, body: body })
            try {
                const res = await this.client.verify(request)
                await this.authenticate.doResponse(res, VerifyMailResponseBodySchema)
                resolve(res.body as VerifyMailResponseBody)
            } catch (err) {
                console.error('Fail to verify email code', err)
                return reject(err)
            }
        })
    }
}
