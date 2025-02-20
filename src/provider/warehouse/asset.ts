import { Authenticate } from '../common/authenticate'
import { ProviderOption } from '../common/model'
import { RequestPageSchema } from '../../yeying/api/common/message_pb'
import {
    Asset,
    AssetDetailRequestBodySchema,
    AssetDetailRequestSchema,
    AssetDetailResponseBodySchema,
    AssetMetadata,
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
import { signAssetMetadata, verifyAssetMetadata } from '../model/model'
import { isDeleted, isExisted } from '../../common/status'

/**
 * 提供对资产的管理，包括查询、版本获取、详情查看、删除等操作
 */
export class AssetProvider {
    private authenticate: Authenticate
    private client: Client<typeof Asset>

    /**
     * 构造函数
     * @param option - 提供者选项，包括代理设置，身份的区块链地址等
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
     * 搜索资产，根据条件和分页参数查询资产列表
     *
     * @param condition - 搜索条件（部分 `SearchAssetCondition` 对象）
     * @param page - 当前页码
     * @param pageSize - 每页显示的条目数
     *
     * @returns 返回搜索到的资产元数据列表
     *
     * @throws NoPermission 没有权限
     *
     * @example
     * ```ts
     * const condition = { namespaceId: 'example-namespace', format: 'example-format' }
     * assetProvider.search(condition, 1, 10)
     *   .then(assets => console.log(assets))
     *   .catch(err => console.error(err))
     * ```
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
     * 查询资产详情，根据命名空间 ID 和哈希值获取资产元数据
     *
     * @param namespaceId - 命名空间 ID
     * @param hash - 资产的哈希值
     *
     * @returns 返回资产元数据
     *
     * @throws NotFound
     * @throws ServiceUnavailable 服务不可用
     *
     * @example
     * ```ts
     * assetProvider.detail('example-namespace', 'example-hash')
     *   .then(asset => console.log(asset))
     *   .catch(err => console.error(err))
     * ```
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
     * 删除资产，根据命名空间 ID 和哈希值删除资产
     *
     * @param namespaceId - 命名空间 ID
     * @param hash - 资产的哈希值
     *
     * @returns 无返回
     *
     * @throws NoPermission 没有权限
     * @throws ServiceUnavailable 服务不可用
     *
     * @example
     * ```ts
     * assetProvider.delete('example-namespace', 'example-hash')
     *   .then(() => console.log('Asset deleted'))
     *   .catch(err => console.error(err))
     * ```
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
                await this.authenticate.doResponse(res, DeleteAssetResponseBodySchema, isDeleted)
                resolve()
            } catch (err) {
                console.error('Fail to delete asset.', err)
                return reject(err)
            }
        })
    }

    /**
     * 签名资产元数据，对资产元数据进行签名，并发送签名请求到后端服务。
     *
     * @param asset 签约资产元数据
     *
     * @returns 返回签名后的资产元数据
     *
     * @throws NoPermission 没有权限
     * @throws NotFound 资产不存在
     * @throws ServiceUnavailable 服务不可用
     *
     * @example
     * ```ts
     * const assetMetadata = { namespaceId: 'example-namespace', hash: 'example-hash', owner: 'example-did' }
     * assetProvider.sign(assetMetadata)
     *   .then(signedAsset => console.log(signedAsset))
     *   .catch(err => console.error(err))
     * ```
     */
    sign(asset: AssetMetadata) {
        return new Promise<AssetMetadata>(async (resolve, reject) => {
            const body = create(SignAssetRequestBodySchema, { asset: asset })

            let header
            try {
                await signAssetMetadata(this.authenticate, asset)
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
                await this.authenticate.doResponse(res, SignAssetResponseBodySchema, isExisted)
                const resBody = res.body as SignAssetResponseBody
                await verifyAssetMetadata(this.authenticate, resBody.asset)
                resolve(resBody?.asset as AssetMetadata)
            } catch (err) {
                console.error('Fail to sign asset', err)
                return reject(err)
            }
        })
    }
}
