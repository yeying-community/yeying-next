import {Authenticate} from "../common/authenticate";
import {Client, createClient} from "@connectrpc/connect";
import {
    AddProviderRequestBodySchema,
    AddProviderRequestSchema,
    AddProviderResponseBodySchema,
    DeleteProviderRequestBodySchema,
    DeleteProviderRequestSchema,
    DeleteProviderResponseBodySchema,
    ModelMetadata,
    ModelTypeEnum,
    Provider,
    ProviderCodeEnum,
    ProviderDescription,
    ProviderDescriptionsRequestSchema,
    ProviderDescriptionsResponseBodySchema,
    ProviderDetail,
    ProviderDetailRequestBodySchema,
    ProviderDetailRequestSchema,
    ProviderDetailResponseBodySchema,
    ProviderMetadata,
    ProviderMetadataSchema,
    ProviderModelsRequestSchema,
    ProviderModelsResponseBodySchema,
    QuotaTypeEnum, SearchProviderConditionSchema,
    SearchProviderRequestBodySchema,
    SearchProviderRequestSchema,
    SearchProviderResponseBodySchema
} from "../../yeying/api/llm/provider_pb";
import {ProviderOption} from "../common/model";
import {createGrpcWebTransport} from "@connectrpc/connect-web";
import {create, toBinary, toJson} from "@bufbuild/protobuf";
import {generateUuid} from "../../common/string";
import {getCurrentUtcString} from "../../common/date";
import {signProviderMetadata, verifyProviderMetadata, verifyProviderState} from "../model/model";
import {isDeleted, isExisted} from "../../common/status";
import {RequestPageSchema} from "../../yeying/api/common/message_pb";

/**
 * 大模型提供商。
 *
 */
export class ProviderProvider {
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
     * 罗列所有大模型供应商。
     *
     * @returns 返回大模型供应商列表。
     *
     * @throws NetworkUnavailable 网络不可用
     *
     */
    descriptions() {
        return new Promise<ProviderDescription[]>(async (resolve, reject) => {
            let header
            try {
                header = await this.authenticate.createHeader()
            } catch (err) {
                console.error('Fail to create header for listing providers.', err)
                return reject(err)
            }

            const request = create(ProviderDescriptionsRequestSchema, {header: header})
            try {
                const res = await this.client.descriptions(request)
                await this.authenticate.doResponse(res, ProviderDescriptionsResponseBodySchema)
                resolve(res.body?.descriptions as ProviderDescription[])
            } catch (err) {
                console.error('Fail to list providers.', err)
                return reject(err)
            }
        })
    }

    models(providerCode?: ProviderCodeEnum, modelType?: ModelTypeEnum) {
        return new Promise<ModelMetadata[]>(async (resolve, reject) => {
            let header
            try {
                header = await this.authenticate.createHeader()
            } catch (err) {
                console.error('Fail to create header for listing models.', err)
                return reject(err)
            }

            const request = create(ProviderModelsRequestSchema, {header: header})
            try {
                const res = await this.client.models(request)
                await this.authenticate.doResponse(res, ProviderModelsResponseBodySchema)
                resolve(res.body?.models as ModelMetadata[])
            } catch (err) {
                console.error('Fail to list models.', err)
                return reject(err)
            }
        })
    }

    add(name: string, code: ProviderCodeEnum, key: string, uid?: string) {
        return new Promise<ProviderMetadata>(async (resolve, reject) => {
            const provider = create(ProviderMetadataSchema, {
                owner: this.authenticate.getDid(),
                name: name,
                uid: uid ? uid : generateUuid(),
                code: code,
                quotaType: QuotaTypeEnum.QUOTA_TYPE_PAID,
                quotaLimit: BigInt(0),
                config: JSON.stringify({key: key}),
                createdAt: getCurrentUtcString(),
                updatedAt: getCurrentUtcString(),
            })

            const body = create(AddProviderRequestBodySchema, {provider: provider})
            let header
            try {
                await signProviderMetadata(this.authenticate, provider)
                header = await this.authenticate.createHeader(toBinary(AddProviderRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for adding providers.', err)
                return reject(err)
            }

            const request = create(AddProviderRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.add(request)
                await this.authenticate.doResponse(res, AddProviderResponseBodySchema, isExisted)
                await verifyProviderMetadata(this.authenticate, res.body?.provider)
                resolve(res.body?.provider as ProviderMetadata)
            } catch (err) {
                console.error('Fail to add provider.', err)
                return reject(err)
            }
        })
    }

    search(page: number, pageSize: number, code?: ProviderCodeEnum) {
        return new Promise<ProviderMetadata[]>(async (resolve, reject) => {
            const condition = create(SearchProviderConditionSchema, {
                code: code,
            })

            const body = create(SearchProviderRequestBodySchema, {
                condition: condition,
                page: create(RequestPageSchema, {page: page, pageSize: pageSize}),
            })

            let header
            try {
                header = await this.authenticate.createHeader(toBinary(SearchProviderRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for searching provider.', err)
                return reject(err)
            }


            const request = create(SearchProviderRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.search(request)
                await this.authenticate.doResponse(res, SearchProviderResponseBodySchema)
                const providers: ProviderMetadata[] = []
                if (res.body?.providers !== undefined) {
                    for (const provider of res.body.providers) {
                        try {
                            await verifyProviderMetadata(this.authenticate, provider)
                            providers.push(provider)
                        } catch (err) {
                            console.error(`Fail to verify provider=${toJson(ProviderMetadataSchema, provider)} when searching`, err)
                        }
                    }
                }
                resolve(providers)
            } catch (err) {
                console.error('Fail to search provider.', err)
                return reject(err)
            }
        })
    }

    delete(uid: string) {
        return new Promise<void>(async (resolve, reject) => {
            const body = create(DeleteProviderRequestBodySchema, {uid: uid})
            let header
            try {
                header = await this.authenticate.createHeader(toBinary(DeleteProviderRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for deleting provider.', err)
                return reject(err)
            }

            const request = create(DeleteProviderRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.delete(request)
                await this.authenticate.doResponse(res, DeleteProviderResponseBodySchema, isDeleted)
                resolve()
            } catch (err) {
                console.error('Fail to delete provider.', err)
                return reject(err)
            }
        })
    }

    detail(uid: string) {
        return new Promise<ProviderDetail>(async (resolve, reject) => {
            const body = create(ProviderDetailRequestBodySchema, {uid: uid})
            let header
            try {
                header = await this.authenticate.createHeader(toBinary(ProviderDetailRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for getting provider detail.', err)
                return reject(err)
            }


            const request = create(ProviderDetailRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.detail(request)
                await this.authenticate.doResponse(res, ProviderDetailResponseBodySchema)
                await verifyProviderMetadata(this.authenticate, res.body?.detail?.provider)
                await verifyProviderState(this.authenticate, res.body?.detail?.state)
                resolve(res.body?.detail as ProviderDetail)
            } catch (err) {
                console.error('Fail to get provider detail.', err)
                return reject(err)
            }
        })
    }
}