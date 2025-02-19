import {Authenticate} from '../common/authenticate'
import {ProviderOption} from '../common/model'
import {Client, createClient} from '@connectrpc/connect'
import {createGrpcWebTransport} from '@connectrpc/connect-web'
import {MessageHeader} from '../../yeying/api/common/message_pb'
import {create, toBinary} from '@bufbuild/protobuf'
import {
    Config,
    ConfigMetadata,
    ConfigTypeEnum,
    GetConfigRequestBodySchema,
    GetConfigRequestSchema, GetConfigResponseBodySchema,
} from '../../yeying/api/config/config_pb'
import {NetworkError, SignError} from '../../common/error'

/**
 * 管理配置
 */
export class ConfigProvider {
    private authenticate: Authenticate
    private client: Client<typeof Config>

    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(
            Config,
            createGrpcWebTransport({
                baseUrl: option.proxy,
                useBinaryFormat: true
            })
        )
    }

    /**
     * 获取配置
     *
     * @param key 配置的key。
     * @param type 配置类型，是系统配置，还是用户配置，默认是用户配置。
     *
     * @returns 返回对应配置详细信息。
     *
     * @throws  {SignError|NetworkError}
     */
    get(key: string, type?: ConfigTypeEnum) {
        return new Promise<ConfigMetadata>(async (resolve, reject) => {
            const body = create(GetConfigRequestBodySchema, {
                key: key,
                type: type ?? ConfigTypeEnum.CONFIG_TYPE_USER,
            })

            let header: MessageHeader
            try {
                header = await this.authenticate.createHeader(toBinary(GetConfigRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for getting config.', err)
                return reject(new SignError())
            }

            const request = create(GetConfigRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.get(request)
                await this.authenticate.doResponse(res, GetConfigResponseBodySchema)
                resolve(res.body?.config as ConfigMetadata)
            } catch (err) {
                console.error('Fail to get config', err)
                return reject(new NetworkError())
            }
        })
    }

}
