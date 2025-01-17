import { Authenticate } from '../common/authenticate'
import { BulletinClient } from '../../yeying/api/bulletin/BulletinServiceClientPb'
import { ProviderOption } from '../common/model'
import { LanguageCodeEnum } from '../../yeying/api/common/code_pb'
import { BulletinCodeEnum, ListRequest, ListRequestBody, ListResponseBody } from '../../yeying/api/bulletin/bulletin_pb'
import { MessageHeader, RequestPage } from '../../yeying/api/common/message_pb'
import { ServiceMetadata } from '../../yeying/api/service/service_pb'
import { computeHash } from '../../common/crypto'
import { fromDidToPublicKey, verifyHashBytes } from '@yeying-community/yeying-web3'
import { DataForgery } from '../../common/error'
import { FaqMetadata } from '../../yeying/api/support/support_pb'

/**
 * BulletinProvider 类，用于提供公告相关的操作，包括获取公告列表等。
 * 
 * @example
 * ```ts
 * const bulletinProvider = new BulletinProvider(authenticate, option);
 * const response = await bulletinProvider.list(LanguageCodeEnum.EN, 1, 10);
 * console.log(response); 
 * ```
 */
export class BulletinProvider {
    private authenticate: Authenticate
    private client: BulletinClient

    /**
     * 构造 BulletinProvider 实例。
     * 
     * @param authenticate - 用于认证的 Authenticate 实例。
     * @param option - 提供的选项配置，如代理设置等。
     * @example
     * ```ts
     * const authenticate = new Authenticate(blockAddress);
     * const providerOption = { proxy: 'proxy_url' };
     * const bulletinProvider = new BulletinProvider(authenticate, providerOption);
     * ```
     */
    constructor(authenticate: Authenticate, option: ProviderOption) {
        this.authenticate = authenticate
        this.client = new BulletinClient(option.proxy)
    }

    /**
     * 获取公告列表。
     * 
     * @param language - 公告的语言。
     * @param page - 页码。
     * @param pageSize - 每页显示的公告数量。
     * @returns 一个 Promise，解析为公告列表的响应。
     * @throws {DataForgery} 如果验证公告数据的签名无效，则抛出错误。
     * @example
     * ```ts
     * const response = await bulletinProvider.list(LanguageCodeEnum.EN, 1, 10);
     * console.log(response); // 输出公告列表
     * ```
     */
    async list(language: LanguageCodeEnum, page: number, pageSize: number) {
        return new Promise<ListResponseBody>(async (resolve, reject) => {
            const requestPage = new RequestPage()
            requestPage.setPage(page)
            requestPage.setPagesize(pageSize)

            const body = new ListRequestBody()
            body.setLanguage(language)
            body.setCode(BulletinCodeEnum.BULLETIN_CODE_SOLUTION)
            body.setPage(requestPage)

            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error('创建列表解决方案的消息头失败', err)
                return err
            }

            const request = new ListRequest()
            request.setHeader(header)
            request.setBody(body)

            // 向客户端发送请求
            this.client.list(request, null, (err, res) => {
                // 处理响应并验证数据
                this.authenticate.doResponse(err, res).then(async (body) => {
                    // 验证解决方案信息的签名
                    for (let solutionMetadata of body.getSolutionsList()) {
                        const signature = solutionMetadata.getSignature()
                        solutionMetadata.setSignature('')
                        const passed = await this.authenticate.verify(
                            solutionMetadata.getPublisher(),
                            solutionMetadata.serializeBinary(),
                            signature
                        )
                        if (passed) {
                            solutionMetadata.setSignature(signature)
                        } else {
                            // 如果签名无效，抛出数据伪造错误
                            return reject(new DataForgery('无效的签名！'))
                        }
                    }

                    resolve(body as ListResponseBody)
                }, reject)
            })
        })
    }
}
