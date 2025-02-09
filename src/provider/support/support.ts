import { ProviderOption } from '../common/model'
import { Authenticate } from '../common/authenticate'
import { MessageHeader } from '../../yeying/api/common/message_pb'
import { getCurrentUtcString } from '../../common/date'
import {
    CollectSupportRequestBodySchema,
    CollectSupportRequestSchema,
    CollectSupportResponseBody,
    CollectSupportResponseBodySchema,
    FaqMetadataSchema,
    Support,
    SupportCodeEnum
} from '../../yeying/api/support/support_pb'
import { Client, createClient } from '@connectrpc/connect'
import { createGrpcWebTransport } from '@connectrpc/connect-web'
import { create, toBinary } from '@bufbuild/protobuf'
import { generateRandomString, generateUuid } from '../../common/string'

/**
 * 支持服务提供者类，用于与支持服务进行交互，包括收集 FAQ 数据。
 *
 * @example
 * ```ts
 * const providerOption = { proxy: <proxy url>, blockAddress: <your block address> };
 * const supportProvider = new SupportProvider(providerOption);
 * await supportProvider.collectFaq("general", "user@example.com", "How to use the service?");
 * ```
 */
export class SupportProvider {
    private authenticate: Authenticate
    private client: Client<typeof Support>

    /**
     * 创建支持服务提供者的实例。
     *
     * @param option - 提供者配置选项，包括代理设置。
     * @example
     * ```ts
     * const providerOption = { proxy: <proxy url>, blockAddress: <your block address> };
     * const supportProvider = new SupportProvider(providerOption);
     * ```
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(
            Support,
            createGrpcWebTransport({
                baseUrl: option.proxy,
                useBinaryFormat: true
            })
        )
    }

    /**
     * 收集 FAQ 数据并发送到支持服务。
     *
     * @param type - FAQ 类型，例如“general”。
     * @param email - 提交 FAQ 请求的电子邮件地址。
     * @param description - FAQ 问题的描述。
     * @returns 一个 Promise，解析为 void，表示请求成功。
     * @throws {InvalidArgument} 如果签名或请求头创建失败，则抛出错误。
     * @throws {NetworkDown} 如果协议错误或响应失败，则抛出错误。
     * @example
     * ```ts
     * try {
     *   await supportProvider.collectFaq("general", "user@example.com", "How to use the service?");
     * } catch (err) {
     *   console.error(err); // 处理错误
     * }
     * ```
     */
    async collectFaq(type: string, email: string, description: string) {
        return new Promise<CollectSupportResponseBody>(async (resolve, reject) => {
            const faq = create(FaqMetadataSchema, {
                did: this.authenticate.getDid(),
                type: type,
                email: email,
                description: description,
                createdAt: getCurrentUtcString()
            })

            const body = create(CollectSupportRequestBodySchema, {
                code: SupportCodeEnum.SUPPORT_CODE_FAQ
            })

            let header: MessageHeader
            try {
                faq.signature = await this.authenticate.sign(toBinary(FaqMetadataSchema, faq))
                body.data.value = faq
                body.data.case = 'faq'
                header = await this.authenticate.createHeader(toBinary(CollectSupportRequestBodySchema, body))
            } catch (err) {
                console.error('Failed to create header for collecting faq', err)
                return reject(err)
            }

            const request = create(CollectSupportRequestSchema, { header: header, body: body })
            try {
                const res = await this.client.collect(request)
                await this.authenticate.doResponse(res, CollectSupportResponseBodySchema)
                resolve(res.body as CollectSupportResponseBody)
            } catch (err) {
                console.error('Fail to collect faq', err)
                return reject(err)
            }
        })
    }
}
