import { Authenticate } from '../common/authenticate'
import { ProviderOption } from '../common/model'
import { Client, createClient } from '@connectrpc/connect'
import { createGrpcWebTransport } from '@connectrpc/connect-web'
import { MessageHeader } from '../../yeying/api/common/message_pb'
import { create, toBinary } from '@bufbuild/protobuf'
import {
    Application,
    ApplicationMetadata,
    ApplicationMetadataSchema,
    CreateApplicationRequestBodySchema,
    CreateApplicationRequestSchema,
    CreateApplicationResponseBody,
    CreateApplicationResponseBodySchema
} from '../../yeying/api/application/application_pb'

/**
 * ApplicationProvider 管理应用。
 */
export class ApplicationProvider {
    private authenticate: Authenticate
    private client: Client<typeof Application>

    /**
     * ServiceProvider 的构造函数，初始化身份认证和客户端实例。
     *
     * @param option - 服务提供商的选项，包括代理设置等。
     * @example
     *
     * ```ts
     * const option = { proxy: <proxy url>, blockAddress: <your block address> };
     * const provider = new ApplicationProvider(option);
     * ```
     *
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(
            Application,
            createGrpcWebTransport({
                baseUrl: option.proxy,
                useBinaryFormat: true
            })
        )
    }

    create(application: ApplicationMetadata) {
        return new Promise<CreateApplicationResponseBody>(async (resolve, reject) => {
            const body = create(CreateApplicationRequestBodySchema, {
                application: application
            })

            let header: MessageHeader
            try {
                application.signature = await this.authenticate.sign(toBinary(ApplicationMetadataSchema, application))
                header = await this.authenticate.createHeader(toBinary(CreateApplicationRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for creating application.', err)
                return reject(err)
            }

            const request = create(CreateApplicationRequestSchema, { header: header, body: body })
            try {
                const res = await this.client.create(request)
                await this.authenticate.doResponse(res, CreateApplicationResponseBodySchema)
                resolve(res.body as CreateApplicationResponseBody)
            } catch (err) {
                console.error('Fail to create application', err)
                return reject(err)
            }
        })
    }
}
