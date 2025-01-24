import {Authenticate} from '../common/authenticate'
import {ProviderOption} from '../common/model'
import {LanguageCodeEnum} from '../../yeying/api/common/code_pb'
import {DataForgery} from '../../common/error'
import {
    Bulletin,
    BulletinCodeEnum,
    BulletinListRequestBodySchema,
    BulletinListRequestSchema,
    BulletinListResponseBody,
    BulletinListResponseBodySchema,
    SolutionMetadataSchema
} from '../../yeying/api/bulletin/bulletin_pb'
import {Client, createClient} from "@connectrpc/connect";
import {createGrpcWebTransport} from "@connectrpc/connect-web";
import {MessageHeader, RequestPageSchema} from "../../yeying/api/common/message_pb";
import {create, toBinary} from "@bufbuild/protobuf";

/**
 * BulletinProvider 类，用于提供公告相关的操作，包括获取公告列表等。
 * @class
 */
export class BulletinProvider {
    private authenticate: Authenticate
    private client: Client<typeof Bulletin>

    /**
     * 构造 BulletinProvider 实例。
     *
     * @param option - 提供的选项配置，如代理设置等。
     * @example
     * ```ts
     * const providerOption = { proxy: <proxy url>, blockAddress: <your block address> };
     * const bulletinProvider = new BulletinProvider(providerOption);
     * ```
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(Bulletin, createGrpcWebTransport({
            baseUrl: option.proxy,
            useBinaryFormat: true,
        }))
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
        return new Promise<BulletinListResponseBody>(async (resolve, reject) => {
            const requestPage = create(RequestPageSchema, {
                page: page,
                pageSize: pageSize,
            })

            const body = create(BulletinListRequestBodySchema, {
                language: language,
                code: BulletinCodeEnum.BULLETIN_CODE_SOLUTION,
                page: requestPage,
            })


            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(toBinary(BulletinListRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for BulletinListing solutions.', err)
                return err
            }

            const request = create(BulletinListRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.list(request)
                await this.authenticate.doResponse(res, BulletinListResponseBodySchema)
                const body = res.body as BulletinListResponseBody
                // 验证解决方案信息的签名
                for (let solution of body.solutions) {
                    const signature = solution.signature
                    solution.signature = ''

                    const passed = await this.authenticate.verify(
                        solution.publisher,
                        toBinary(SolutionMetadataSchema, solution),
                        signature
                    )

                    if (passed) {
                        solution.signature = signature
                    } else {
                        // 如果签名无效，抛出数据伪造错误
                        return reject(new DataForgery('无效的签名！'))
                    }
                }

                resolve(body)
            } catch (err) {
                console.error('Fail to BulletinList solutions', err)
                return reject(err)
            }
        })
    }
}
