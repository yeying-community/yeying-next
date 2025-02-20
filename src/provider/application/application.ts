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
    CreateApplicationResponseBodySchema
} from '../../yeying/api/application/application_pb'
import { NetworkUnavailable } from '../../common/error'

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

    /**
     * 创建应用
     *
     * @param duration - 有效时长，单位：天。
     * @param invitee - 可选，被邀请人身份ID。
     *
     * @returns 返回应用元信息。
     *
     * @throws  NetworkUnavailable
     *
     * @example
     * ```ts
     * invitationProvider.create(1)
     *   .then(result => console.log(result))
     *   .catch(err => console.error(err));
     * ```
     */
    create(application: ApplicationMetadata) {
        return new Promise<void>(async (resolve, reject) => {
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
                resolve()
            } catch (err) {
                console.error('Fail to create application', err)
                return reject(new NetworkUnavailable())
            }
        })
    }
}
