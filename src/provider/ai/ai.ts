import { Authenticate } from '../common/authenticate'
import { MessageHeader } from '../../yeying/api/common/message_pb'
import { ProviderOption } from '../common/model'
import {
    AIResponseBody,
    AI,
    AIRequestBodySchema,
    AIRequestSchema,
    AIResponseBodySchema
} from '../../yeying/api/ai/ai_pb'
import { Client, createClient } from '@connectrpc/connect'
import { createGrpcWebTransport } from '@connectrpc/connect-web'
import { create, toBinary } from '@bufbuild/protobuf'

/**
 * 代表了一个节点，夜莺社区提供了默认的节点，也可以选择其他社区的节点，以及使用该节点的生态应用
 */

export class AIProvider {
    private authenticate: Authenticate
    private client: Client<typeof AI>

    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(
            AI,
            createGrpcWebTransport({
                baseUrl: option.proxy,
                useBinaryFormat: true
            })
        )
    }

    /**
     * 调用智能体做题。
     *
     * @param imgUrl - 目标题目地址
     * @returns Promise - 发送请求的响应数据
     * @example
     * ```ts
     * aiProvider.call('http://image.jpg').then(response => {
     *   console.log(response); // 发送成功的响应
     * }).catch(err => {
     *   console.error(err); // 错误信息
     * });
     * ```
     */
    call(imgUrl: string) {
        return new Promise<AIResponseBody>(async (resolve, reject) => {
            const body = create(AIRequestBodySchema, {
                imgUrl: imgUrl
            })

            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(toBinary(AIRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for sending mail', err)
                return reject(err)
            }

            const request = create(AIRequestSchema, { header: header, body: body })
            try {
                const res = await this.client.call(request)
                await this.authenticate.doResponse(res, AIResponseBodySchema)
                resolve(res.body as AIResponseBody)
            } catch (err) {
                console.error('Fail to call ai', err)
                return reject(err)
            }
        })
    }
}
