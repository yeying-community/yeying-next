import {Authenticate} from "../common/authenticate";
import {Client, createClient} from "@connectrpc/connect";
import {
    ListProviderDescriptionRequestSchema,
    ListProviderDescriptionResponseBodySchema,
    Provider,
    ProviderDescription
} from "../../yeying/api/llm/provider_pb";
import {ProviderOption} from "../common/model";
import {createGrpcWebTransport} from "@connectrpc/connect-web";
import {create} from "@bufbuild/protobuf";

/**
 * 大模型提供商，增加配置创建和查询邀请码。
 *
 */
export class LlmProvider {
    /**
     * 认证实例，用于进行身份验证。
     *
     * @private
     */
    private authenticate: Authenticate
    private client: Client<typeof Provider>

    /**
     * 构造大模型供应商。
     *
     * @param option - 提供商配置，包括代理设置。
     * @example
     * ```ts
     * const option = { proxy: <proxy url>, blockAddress: <your block address> };
     * const llmProvider = new LlmProvider(providerOption);
     * ```
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(
            Provider,
            createGrpcWebTransport({
                baseUrl: option.proxy,
                useBinaryFormat: true
            })
        )
    }

    /**
     * 罗列所有供应商。
     *
     * @returns 返回邀请码列表。
     *
     * @throws 错误时抛出 `Error`。
     *
     * @example
     * ```ts
     * userProvider.get()
     *   .then(user => console.log(user))
     *   .catch(err => console.error(err));
     * ```
     */
    list() {
        return new Promise<ProviderDescription[]>(async (resolve, reject) => {
            let header
            try {
                header = await this.authenticate.createHeader()
            } catch (err) {
                console.error('Fail to create header for listing providers.', err)
                return reject(err)
            }

            const request = create(ListProviderDescriptionRequestSchema, {header: header})
            try {
                const res = await this.client.list(request)
                await this.authenticate.doResponse(res, ListProviderDescriptionResponseBodySchema)
                resolve(res.body?.providers as ProviderDescription[])
            } catch (err) {
                console.error('Fail to list providers.', err)
                return reject(err)
            }
        })
    }

}