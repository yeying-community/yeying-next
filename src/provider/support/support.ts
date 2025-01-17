import { ProviderOption } from '../common/model'
import { Authenticate } from '../common/authenticate'
import { SupportClient } from '../../yeying/api/support/SupportServiceClientPb'
import { CollectRequest, CollectRequestBody, FaqMetadata, SupportCodeEnum } from '../../yeying/api/support/support_pb'
import { MessageHeader } from '../../yeying/api/common/message_pb'
import { getCurrentUtcString } from '../../common/date'

/**
 * 支持服务提供者类，用于与支持服务进行交互，包括收集 FAQ 数据。
 * 
 * @example
 * ```ts
 * const supportProvider = new SupportProvider(authenticate, providerOption);
 * await supportProvider.collectFaq("general", "user@example.com", "How to use the service?");
 * ```
 */
export class SupportProvider {
    private authenticate: Authenticate
    private client: SupportClient

    /**
     * 创建支持服务提供者的实例。
     * 
     * @param authenticate - 认证实例，用于签名和生成消息头。
     * @param option - 提供者配置选项，包括代理设置。
     * @example
     * ```ts
     * const authenticate = new Authenticate(blockAddress);
     * const supportProvider = new SupportProvider(authenticate, { proxy: 'http://proxy.url' });
     * ```
     */
    constructor(authenticate: Authenticate, option: ProviderOption) {
        this.authenticate = authenticate
        this.client = new SupportClient(option.proxy)
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
                console.error('Failed to create header for collecting FAQ', err)
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
