import {Authenticate} from '../common/authenticate'
import {ProviderOption} from '../common/model'
import {Client, createClient} from '@connectrpc/connect'
import {createGrpcWebTransport} from '@connectrpc/connect-web'
import {create, toBinary} from '@bufbuild/protobuf'
import {
    Recycle,
    RemoveDeletedAssetRequestBodySchema,
    RemoveDeletedAssetRequestSchema,
    RemoveDeletedAssetResponseBody,
    RemoveDeletedAssetResponseBodySchema,
    SearchDeletedAssetRequestBodySchema,
    SearchDeletedAssetRequestSchema,
    SearchDeletedAssetResponseBody, SearchDeletedAssetResponseBodySchema
} from "../../yeying/api/asset/recycle_pb";
import {
    SearchAssetCondition,
    SearchAssetConditionSchema, SearchAssetRequestBodySchema, SearchAssetRequestSchema,
    SearchAssetResponseBody, SearchAssetResponseBodySchema
} from "../../yeying/api/asset/asset_pb";
import {RequestPageSchema} from "../../yeying/api/common/message_pb";

/**
 * 区块提供者类，用于与区块链交互，提供数据的获取和存储功能。
 *
 * @example
 * ```ts
 * const blockProvider = new BlockProvider(authenticate, option);
 * const data = await blockProvider.get(hash);
 * console.log(data);
 * ```
 */
export class RecycleProvider {
    private authenticate: Authenticate
    private client: Client<typeof Recycle>

    /**
     * 创建命名空间供应商。
     *
     * @param option {ProviderOption} 指定供应商选项。
     *
     * @example
     * ```ts
     * const providerOption = { proxy: <proxy url>, blockAddress: <your block address> };
     * const recycleProvider = new RecycleProvider(providerOption);
     * ```
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(
            Recycle,
            createGrpcWebTransport({
                baseUrl: option.proxy,
                useBinaryFormat: true
            })
        )
    }

    /**
     * 搜索资产。
     * @param condition - 搜索条件。
     * @param page - 页码。
     * @param pageSize - 每页数量。
     * @returns Promise，解析为搜索结果。
     * @example
     * assetProvider.search(searchCondition, 1, 10).then(response => { console.log(response); });
     */
    search(condition: Partial<SearchAssetCondition>, page: number, pageSize: number) {
        return new Promise<SearchDeletedAssetResponseBody>(async (resolve, reject) => {
            const requestPage = create(RequestPageSchema, {page: page, pageSize: pageSize})
            const c = create(SearchAssetConditionSchema, {
                namespaceId: condition.namespaceId,
                format: condition.format,
                hash: condition.hash,
            })

            const body = create(SearchDeletedAssetRequestBodySchema, {condition: c, page: requestPage})
            let header
            try {
                header = await this.authenticate.createHeader(toBinary(SearchDeletedAssetRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for searching deleted assets', err)
                return reject(err)
            }

            const request = create(SearchDeletedAssetRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.search(request)
                await this.authenticate.doResponse(res, SearchDeletedAssetResponseBodySchema)
                resolve(res.body as SearchDeletedAssetResponseBody)
            } catch (err) {
                console.error('Fail to search deleted assets', err)
                return reject(err)
            }
        })
    }

    /**
     * 永久删除资产。
     * @param namespaceId - 资产的唯一标识符。
     * @param hash - 资产哈希值。
     * @returns Promise，解析为删除响应。
     * @example
     * assetProvider.remove('assetUid', 1).then(response => { console.log(response); });
     */
    remove(namespaceId: string, hash: string) {
        return new Promise<RemoveDeletedAssetResponseBody>(async (resolve, reject) => {
            const body = create(RemoveDeletedAssetRequestBodySchema, {
                namespaceId: namespaceId,
                hash: hash,
            })

            let header
            try {
                header = await this.authenticate.createHeader(toBinary(RemoveDeletedAssetRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header when removing from recycle', err)
                return reject(err)
            }

            const request = create(RemoveDeletedAssetRequestSchema, { header: header, body: body })
            try {
                const res = await this.client.remove(request)
                await this.authenticate.doResponse(res, RemoveDeletedAssetResponseBodySchema)
                resolve(res.body as RemoveDeletedAssetResponseBody)
            } catch (err) {
                console.error('Fail to remove from recycle', err)
                return reject(err)
            }
        })
    }
}
