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

export class AssetProvider {
    private authenticate: Authenticate
    private client: AssetClient

    constructor(authenticate: Authenticate, option: ProviderOption) {
        this.authenticate = authenticate
        this.client = new AssetClient(option.proxy)
    }

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
