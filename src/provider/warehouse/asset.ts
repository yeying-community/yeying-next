import { Authenticate } from '../common/authenticate'
import { ProviderOption } from '../common/model'
import { DigitalFormatEnum } from '../../yeying/api/common/code_pb'
import { RequestPage } from '../../yeying/api/common/message_pb'
import { AssetClient } from '../../yeying/api/asset/AssetServiceClientPb'
import {
    AssetMetadata,
    DetailRequest,
    DetailRequestBody,
    RemoveRequest,
    RemoveRequestBody,
    RemoveResponseBody,
    SearchCondition,
    SearchRequest,
    SearchRequestBody,
    SearchResponseBody,
    SignRequest,
    SignRequestBody,
    SignResponseBody,
    VersionRequest,
    VersionRequestBody,
    VersionResponseBody
} from '../../yeying/api/asset/asset_pb'

/**
 * AssetProvider 类提供对资产的管理，包括查询、版本获取、详情查看、删除等操作。
 */
export class AssetProvider {
    private authenticate: Authenticate
    private client: AssetClient

    /**
     * 创建 AssetProvider 实例。
     * @param authenticate - 认证实例，用于身份验证和签名。
     * @param option - 提供者选项，包括代理设置等。
     * @example
     * const assetProvider = new AssetProvider(authenticate, { proxy: 'http://proxy.url' });
     */
    constructor(authenticate: Authenticate, option: ProviderOption) {
        this.authenticate = authenticate
        this.client = new AssetClient(option.proxy)
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
    search(condition: SearchCondition, page: number, pageSize: number) {
        return new Promise<SearchResponseBody>(async (resolve, reject) => {
            const requestPage = new RequestPage()
            requestPage.setPage(page)
            requestPage.setPagesize(pageSize)

            const body = new SearchRequestBody()
            body.setCondition(condition)
            body.setPage(requestPage)

            let header
            try {
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error('Fail to create header for searching assets', err)
                return reject(err)
            }

            const request = new SearchRequest()
            request.setHeader(header)
            request.setBody(body)

            this.client.search(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then((body) => resolve(body as SearchResponseBody), reject)
            })
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
        return new Promise(async (resolve, reject) => {
            const body = new VersionRequestBody()
            body.setUid(uid)

            const requestPage = new RequestPage()
            requestPage.setPage(page)
            requestPage.setPagesize(pageSize)

            let header
            try {
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error('Fail to create header when getting asset version', err)
                return reject(err)
            }

            const request = new VersionRequest()
            request.setHeader(header)
            request.setBody(body)
            this.client.version(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then((body) => resolve(body as VersionResponseBody), reject)
            })
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
        return new Promise<AssetMetadata>(async (resolve, reject) => {
            const body = new DetailRequestBody()
            body.setUid(uid)
            body.setVersion(version)
            body.setTrash(trash)
            let header
            try {
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error('Fail to create header when getting asset detail', err)
                return reject(err)
            }

            const request = new DetailRequest()
            request.setHeader(header)
            request.setBody(body)

            this.client.detail(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then((body) => resolve(body.getAsset()), reject)
            })
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
        return new Promise(async (resolve, reject) => {
            const body = new RemoveRequestBody()
            body.setUid(uid)
            body.setVersion(version)
            body.setHard(false)

            let header
            try {
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error('Fail to create header when moving asset to trash', err)
                return reject(err)
            }

            const request = new RemoveRequest()
            request.setHeader(header)
            request.setBody(body)

            this.client.remove(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then(resolve, reject)
            })
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
        return new Promise<RemoveResponseBody>(async (resolve, reject) => {
            const body = new RemoveRequestBody()
            body.setUid(uid)
            body.setVersion(version)
            body.setHard(true)
            let header
            try {
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error('Fail to create header when removing asset', err)
                return reject(err)
            }

            const request = new RemoveRequest()
            request.setHeader(header)
            request.setBody(body)

            this.client.remove(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then(resolve, reject)
            })
        })
    }

    /**
     * 对资产进行签名操作。
     * @param asset - 要签名的资产元数据。
     * @returns Promise，解析为签名响应。
     * @example
     * assetProvider.sign(assetMetadata).then(response => { console.log(response); });
     */
    sign(asset: AssetMetadata) {
        return new Promise<SignResponseBody>(async (resolve, reject) => {
            const body = new SignRequestBody()
            let header
            try {
                asset.setSignature(await this.authenticate.sign(asset.serializeBinary()))
                body.setAsset(asset)
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error('Fail to create header when signing asset', err)
                return reject(err)
            }

            const request = new SignRequest()
            request.setHeader(header)
            request.setBody(body)
            this.client.sign(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then(resolve, reject)
            })
        })
    }
}
