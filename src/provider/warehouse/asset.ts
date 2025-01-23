import {Authenticate} from '../common/authenticate'
import {ProviderOption} from '../common/model'
import {RequestPageSchema} from '../../yeying/api/common/message_pb'
import {
    Asset,
    AssetMetadata,
    AssetMetadataSchema,
    AssetDetailRequestBodySchema,
    AssetDetailRequestSchema,
    AssetDetailResponseBody,
    AssetDetailResponseBodySchema,
    RemoveAssetRequestBodySchema,
    RemoveAssetRequestSchema,
    RemoveAssetResponseBody,
    RemoveAssetResponseBodySchema,
    SearchAssetCondition,
    SearchAssetConditionSchema,
    SearchAssetRequestBodySchema,
    SearchAssetRequestSchema,
    SearchAssetResponseBody,
    SearchAssetResponseBodySchema,
    SignAssetRequestBodySchema,
    SignAssetRequestSchema,
    SignAssetResponseBody,
    SignAssetResponseBodySchema,
    AssetVersionRequestBodySchema,
    AssetVersionRequestSchema,
    AssetVersionResponseBody,
    AssetVersionResponseBodySchema
} from '../../yeying/api/asset/asset_pb'
import {Client, createClient} from "@connectrpc/connect";
import {createGrpcWebTransport} from "@connectrpc/connect-web";
import {create, toBinary} from "@bufbuild/protobuf";

/**
 * AssetProvider 类提供对资产的管理，包括查询、版本获取、详情查看、删除等操作。
 */
export class AssetProvider {
    private authenticate: Authenticate
    private client: Client<typeof Asset>

    /**
     * 创建 AssetProvider 实例。
     * @param option - 提供者选项，包括代理设置等。
     * @example
     * const providerOption = { proxy: <proxy url>, blockAddress: <your block address> };
     * const assetProvider = new AssetProvider(providerOption);
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(Asset, createGrpcWebTransport({
            baseUrl: option.proxy,
            useBinaryFormat: true,
        }))
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
        return new Promise<SearchAssetResponseBody>(async (resolve, reject) => {
            const requestPage = create(RequestPageSchema, {page: page, pageSize: pageSize})
            const c = create(SearchAssetConditionSchema, {
                format: condition.format,
                contentHash: condition.contentHash,
                trash: condition.trash,
            })

            const body = create(SearchAssetRequestBodySchema, {condition: c, page: requestPage})
            let header
            try {
                header = await this.authenticate.createHeader(toBinary(SearchAssetRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for searching assets', err)
                return reject(err)
            }

            const request = create(SearchAssetRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.search(request)
                await this.authenticate.doResponse(res, SearchAssetResponseBodySchema)
                resolve(res.body as SearchAssetResponseBody)
            } catch (err) {
                console.error('Fail to search assets', err)
                return reject(err)
            }
        })
    }

    /**
     * 获取资产的版本信息。
     * @param uid - 资产的唯一标识符。
     * @param page - 页码。
     * @param pageSize - 每页数量。
     * @returns Promise，解析为版本响应。
     * @example
     * assetProvider.version('assetUid', 1, 10).then(response => { console.log(response); });
     */
    version(uid: string, page: number, pageSize: number) {
        return new Promise<AssetVersionResponseBody>(async (resolve, reject) => {
            const requestPage = create(RequestPageSchema, {page: page, pageSize: pageSize})
            const body = create(AssetVersionRequestBodySchema, {uid: uid, page: requestPage})

            let header
            try {
                header = await this.authenticate.createHeader(toBinary(AssetVersionRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header when getting asset version', err)
                return reject(err)
            }

            const request = create(AssetVersionRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.version(request)
                await this.authenticate.doResponse(res, AssetVersionResponseBodySchema)
                resolve(res.body as AssetVersionResponseBody)
            } catch (err) {
                console.error('Fail to get version for asset', err)
                return reject(err)
            }
        })
    }

    /**
     * 获取资产的详细信息。
     * @param uid - 资产的唯一标识符。
     * @param version - 资产的版本。
     * @param trash - 是否从回收站获取。
     * @returns Promise，解析为资产元数据。
     * @example
     * assetProvider.detail('assetUid', 1, false).then(metadata => { console.log(metadata); });
     */
    detail(uid: string, version: number, trash: boolean) {
        return new Promise<AssetDetailResponseBody>(async (resolve, reject) => {
            const body = create(AssetDetailRequestBodySchema, {
                uid: uid,
                version: version,
                trash: trash,
            })

            let header
            try {
                header = await this.authenticate.createHeader(toBinary(AssetDetailRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header when getting asset detail', err)
                return reject(err)
            }

            const request = create(AssetDetailRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.detail(request)
                await this.authenticate.doResponse(res, AssetDetailResponseBodySchema)
                resolve(res.body as AssetDetailResponseBody)
            } catch (err) {
                console.error('Fail to get asset detail', err)
                return reject(err)
            }
        })
    }

    /**
     * 将资产移动到回收站。
     * @param uid - 资产的唯一标识符。
     * @param version - 资产的版本。
     * @returns Promise，解析为移除响应。
     * @example
     * assetProvider.moveToTrash('assetUid', 1).then(response => { console.log(response); });
     */
    moveToTrash(uid: string, version: number) {
        return this.delete(uid, version, false)
    }

    private delete(uid: string, version: number, hard: boolean) {
        return new Promise<RemoveAssetResponseBody>(async (resolve, reject) => {
            const body = create(RemoveAssetRequestBodySchema, {
                uid: uid,
                version: version,
                hard: hard,
            })

            let header
            try {
                header = await this.authenticate.createHeader(toBinary(RemoveAssetRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header when moving asset to trash', err)
                return reject(err)
            }

            const request = create(RemoveAssetRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.remove(request)
                await this.authenticate.doResponse(res, RemoveAssetResponseBodySchema)
                resolve(res.body as RemoveAssetResponseBody)
            } catch (err) {
                console.error('Fail to move asset to trash', err)
                return reject(err)
            }
        })
    }

    /**
     * 永久删除资产。
     * @param uid - 资产的唯一标识符。
     * @param version - 资产的版本。
     * @returns Promise，解析为删除响应。
     * @example
     * assetProvider.remove('assetUid', 1).then(response => { console.log(response); });
     */
    remove(uid: string, version: number) {
        return this.delete(uid, version, true)
    }

    /**
     * 对资产进行签名操作。
     * @param asset - 要签名的资产元数据。
     * @returns Promise，解析为签名响应。
     * @example
     * assetProvider.sign(assetMetadata).then(response => { console.log(response); });
     */
    sign(asset: AssetMetadata) {
        return new Promise<SignAssetResponseBody>(async (resolve, reject) => {
            const body = create(SignAssetRequestBodySchema, {
                asset: asset,
            })

            let header
            try {
                asset.signature = await this.authenticate.sign(toBinary(AssetMetadataSchema, asset))
                header = await this.authenticate.createHeader(toBinary(SignAssetRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header when signing asset', err)
                return reject(err)
            }

            const request = create(SignAssetRequestSchema, {
                header: header,
                body: body
            })
            try {
                const res = await this.client.sign(request)
                await this.authenticate.doResponse(res, SignAssetResponseBodySchema)
                resolve(res.body as SignAssetResponseBody)
            } catch (err) {
                console.error('Fail to sign asset', err)
                return reject(err)
            }
        })
    }
}
