import { Authenticate } from '../common/authenticate'
import { ProviderOption } from '../common/model'
import { BlockClient } from '../../yeying/api/asset/BlockServiceClientPb'
import { BlockMetadata, GetRequest, GetRequestBody, PutRequest, PutRequestBody } from '../../yeying/api/asset/block_pb'
import { getCurrentUtcString } from '../../common/date'

export class BlockProvider {
    private authenticate: Authenticate
    private client: BlockClient

    constructor(authenticate: Authenticate, option: ProviderOption) {
        this.authenticate = authenticate
        this.client = new BlockClient(option.proxy)
    }

    getOwner() {
        return this.authenticate.getDid()
    }

    get(hash: string) {
        return new Promise<Uint8Array>(async (resolve, reject) => {
            const method = '/yeying.api.asset.Asset/Get'
            const body = new GetRequestBody()
            body.setHash(hash)
            let header
            try {
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error(`Fail to create header when getting chunk content, hash=${hash}`, err)
                return reject(err)
            }

            const request = new GetRequest()
            request.setHeader(header)
            request.setBody(body)
            this.client.get(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then((body) => resolve(res.getData_asU8()), reject)
            })
        })
    }

    put(hash: string, size: number, data: Uint8Array) {
        return new Promise<BlockMetadata>(async (resolve, reject) => {
            const block = new BlockMetadata()
            block.setHash(hash)
            block.setOwner(this.authenticate.getDid())
            block.setCreated(getCurrentUtcString())
            block.setSize(size)

            const body = new PutRequestBody()
            let header
            try {
                block.setSignature(await this.authenticate.sign(block.serializeBinary()))
                body.setBlock(block)
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error('Fail to create header when putting chunk content', err)
                return reject(err)
            }

            const request = new PutRequest()
            request.setHeader(header)
            request.setBody(body)
            request.setData(data)
            this.client.put(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then(() => resolve(block), reject)
            })
        })
    }
}
