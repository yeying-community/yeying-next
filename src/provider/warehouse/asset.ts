import { Authenticate } from '../common/authenticate'
import { ProviderOption } from '../common/model'
import { RequestPageSchema } from '../../yeying/api/common/message_pb'
import {
    Asset,
    AssetDetailRequestBodySchema,
    AssetDetailRequestSchema,
    AssetDetailResponseBodySchema,
    AssetMetadata,
    AssetMetadataSchema,
    DeleteAssetRequestBodySchema,
    DeleteAssetRequestSchema,
    DeleteAssetResponseBodySchema,
    SearchAssetCondition,
    SearchAssetConditionSchema,
    SearchAssetRequestBodySchema,
    SearchAssetRequestSchema,
    SearchAssetResponseBodySchema,
    SignAssetRequestBodySchema,
    SignAssetRequestSchema,
    SignAssetResponseBody,
    SignAssetResponseBodySchema
} from '../../yeying/api/asset/asset_pb'
import { Client, createClient } from '@connectrpc/connect'
import { createGrpcWebTransport } from '@connectrpc/connect-web'
import { create, toBinary } from '@bufbuild/protobuf'

/**
 * AssetProvider 类提供对资产的管理，包括查询、版本获取、详情查看、删除等操作。
 */
export class AssetProvider {
    private authenticate: Authenticate
    private client: Client<typeof Asset>

    /**
     * 创建资产供应商实例。
     *
     * @param option - 提供者选项，包括代理设置，身份的区块链地址等。
     *
     * @example
     * ```ts
     * const providerOption = { proxy: <proxy url>, blockAddress: <your block address> };
     * const assetProvider = new AssetProvider(providerOption);
     * ```
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(
            Asset,
            createGrpcWebTransport({
                baseUrl: option.proxy,
                useBinaryFormat: true
            })
        )
    }

    /**
     * 搜索资产。
     *
     * @param condition - 搜索条件。
     * @param page - 页码。
     * @param pageSize - 每页数量。
     *
     * @returns Promise，解析为搜索结果。
     *
     */
    search(condition: Partial<SearchAssetCondition>, page: number, pageSize: number) {
        return new Promise<AssetMetadata[]>(async (resolve, reject) => {
            const requestPage = create(RequestPageSchema, { page: page, pageSize: pageSize })
            const c = create(SearchAssetConditionSchema, {
                namespaceId: condition.namespaceId,
                format: condition.format,
                hash: condition.hash
            })

            const body = create(SearchAssetRequestBodySchema, { condition: c, page: requestPage })
            let header
            try {
                header = await this.authenticate.createHeader(toBinary(SearchAssetRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for searching assets', err)
                return reject(err)
            }

            const request = create(SearchAssetRequestSchema, { header: header, body: body })
            try {
                const res = await this.client.search(request)
                await this.authenticate.doResponse(res, SearchAssetResponseBodySchema)
                resolve(res?.body?.assets as AssetMetadata[])
            } catch (err) {
                console.error('Fail to search assets', err)
                return reject(err)
            }
        })
    }

    // /**
    //  * 获取资产的版本信息。
    //  * @param uid - 资产的唯一标识符。
    //  * @param page - 页码。
    //  * @param pageSize - 每页数量。
    //  * @returns Promise，解析为版本响应。
    //  * @example
    //  * assetProvider.version('assetUid', 1, 10).then(response => { console.log(response); });
    //  */
    // version(uid: string, page: number, pageSize: number) {
    //     return new Promise<AssetVersionResponseBody>(async (resolve, reject) => {
    //         const requestPage = create(RequestPageSchema, { page: page, pageSize: pageSize })
    //         const body = create(AssetVersionRequestBodySchema, { uid: uid, page: requestPage })
    //
    //         let header
    //         try {
    //             header = await this.authenticate.createHeader(toBinary(AssetVersionRequestBodySchema, body))
    //         } catch (err) {
    //             console.error('Fail to create header when getting asset version', err)
    //             return reject(err)
    //         }
    //
    //         const request = create(AssetVersionRequestSchema, { header: header, body: body })
    //         try {
    //             const res = await this.client.version(request)
    //             await this.authenticate.doResponse(res, AssetVersionResponseBodySchema)
    //             resolve(res.body as AssetVersionResponseBody)
    //         } catch (err) {
    //             console.error('Fail to get version for asset', err)
    //             return reject(err)
    //         }
    //     })
    // }

    /**
     * 获取资产的详细信息。
     *
     * @param namespaceId - 资产所在命名空间。
     * @param version - 资产哈希值。
     *
     * @returns Promise，解析为资产元数据。
     *
     */
    detail(namespaceId: string, hash: string) {
        return new Promise<AssetMetadata>(async (resolve, reject) => {
            const body = create(AssetDetailRequestBodySchema, {
                namespaceId: namespaceId,
                hash: hash
            })

            let header
            try {
                header = await this.authenticate.createHeader(toBinary(AssetDetailRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header when getting asset detail', err)
                return reject(err)
            }

            const request = create(AssetDetailRequestSchema, { header: header, body: body })
            try {
                const res = await this.client.detail(request)
                await this.authenticate.doResponse(res, AssetDetailResponseBodySchema)
                resolve(res?.body?.asset as AssetMetadata)
            } catch (err) {
                console.error('Fail to get asset detail', err)
                return reject(err)
            }
        })
    }

    /**
     * 删除资产，也就是放入回收站。
     * @param namespaceId 资产的所在空间。
     * @param hash 资产哈希值。
     *
     * @returns Promise，解析为移除响应。
     *
     */
    delete(namespaceId: string, hash: string) {
        return new Promise<void>(async (resolve, reject) => {
            const body = create(DeleteAssetRequestBodySchema, {
                namespaceId: namespaceId,
                hash: hash
            })

            let header
            try {
                header = await this.authenticate.createHeader(toBinary(DeleteAssetRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header when deleting asset.', err)
                return reject(err)
            }

            const request = create(DeleteAssetRequestSchema, { header: header, body: body })
            try {
                const res = await this.client.delete(request)
                await this.authenticate.doResponse(res, DeleteAssetResponseBodySchema)
                resolve()
            } catch (err) {
                console.error('Fail to delete asset.', err)
                return reject(err)
            }
        })
    }

    /**
     * 和资产仓库签约。
     *
     * @param asset - 要签名的资产元数据。
     *
     * @returns Promise，解析为签名响应。
     * @example
     * assetProvider.sign(assetMetadata).then(response => { console.log(response); });
     */
    sign(asset: AssetMetadata) {
        return new Promise<AssetMetadata>(async (resolve, reject) => {
            const body = create(SignAssetRequestBodySchema, { asset: asset })

            let header
            try {
                await this.signAssetMetadata(asset)
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
                const resBody = res.body as SignAssetResponseBody
                if (await this.verifyAssetMetadata(resBody.asset)) {
                    resolve(resBody?.asset as AssetMetadata)
                } else {
                    reject(new Error('invalid asset metadata!'))
                }
            } catch (err) {
                console.error('Fail to sign asset', err)
                return reject(err)
            }
        })
    }

    private async signAssetMetadata(asset: AssetMetadata) {
        asset.signature = await this.authenticate.sign(toBinary(AssetMetadataSchema, asset))
    }

    private async verifyAssetMetadata(asset?: AssetMetadata) {
        if (asset === undefined) {
            return false
        }

        const signature = asset.signature
        try {
            asset.signature = ''
            return await this.authenticate.verify(asset.owner, toBinary(AssetMetadataSchema, asset), signature)
        } finally {
            asset.signature = signature
        }
    }
}
