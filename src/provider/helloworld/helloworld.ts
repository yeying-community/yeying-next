import {Authenticate} from '../common/authenticate'
import {MessageHeader} from '../../yeying/api/common/message_pb'
import {ProviderOption} from '../common/model'
import {
    Greeter,
    HelloResponseBody,
    HelloRequestSchema,
    HelloResponseBodySchema,
    HelloRequestBodySchema
} from '../../yeying/api/helloworld/helloworld_pb'
import {Client, createClient} from "@connectrpc/connect";
import {createGrpcWebTransport} from "@connectrpc/connect-web";
import {create, toBinary} from "@bufbuild/protobuf";

/**
 * 代表了一个节点，夜莺社区提供了默认的节点，也可以选择其他社区的节点，以及使用该节点的生态应用
 */

export class HelloProvider {
    private authenticate: Authenticate
    private client: Client<typeof Greeter>

    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(Greeter, createGrpcWebTransport({
            baseUrl: option.proxy,
            useBinaryFormat: true,
        }))
    }

    /**
     * helloworld
     *
     * @param name - name
     * @returns Promise - 发送请求的响应数据
     * @example
     * ```ts
     * helloProvider.sayHello('jack').then(response => {
     *   console.log(response); // 发送成功的响应
     * }).catch(err => {
     *   console.error(err); // 错误信息
     * });
     * ```
     */
    sayHello(name: string) {
        return new Promise<HelloResponseBody>(async (resolve, reject) => {
            const body = create(HelloRequestBodySchema, {
                name: name
            })

            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(toBinary(HelloRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for sayHello', err)
                return reject(err)
            }

            const request = create(HelloRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.sayHello(request)
                await this.authenticate.doResponse(res, HelloResponseBodySchema)
                resolve(res.body as HelloResponseBody)
            } catch (err) {
                console.error('Fail to call sayHello', err)
                return reject(err)
            }
        })
    }
}