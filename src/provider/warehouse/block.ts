import { Authenticate } from '../common/authenticate'
import { ProviderOption } from '../common/model'
import { BlockClient } from '../../yeying/api/asset/BlockServiceClientPb'
import { BlockMetadata, GetRequest, GetRequestBody, PutRequest, PutRequestBody } from '../../yeying/api/asset/block_pb'
import { getCurrentUtcString } from '../../common/date'

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
export class BlockProvider {
    private authenticate: Authenticate
    private client: BlockClient

    /**
     * 创建 BlockProvider 实例。
     * 
     * @param authenticate - 用于认证操作的 Authenticate 实例。
     * @param option - 提供连接选项的 ProviderOption 实例。
     * @example
     * ```ts
     * const authenticate = new Authenticate(blockAddress);
     * const option = { proxy: 'http://localhost:8080' };
     * const blockProvider = new BlockProvider(authenticate, option);
     * ```
     */
    constructor(authenticate: Authenticate, option: ProviderOption) {
        this.authenticate = authenticate
        this.client = new BlockClient(option.proxy)
    }

    /**
     * 获取区块的所有者 DID。
     * 
     * @returns 返回区块的所有者 DID。
     * @example
     * ```ts
     * const owner = blockProvider.getOwner();
     * console.log(owner); // 输出区块所有者 DID
     * ```
     */
    getOwner() {
        return this.authenticate.getDid()
    }

    /**
     * 获取指定哈希值的区块数据。
     * 
     * @param hash - 要获取的区块的哈希值。
     * @returns 一个 Promise，解析为获取到的区块数据（Uint8Array）。
     * @throws {Error} 如果获取区块失败，抛出错误。
     * @example
     * ```ts
     * const data = await blockProvider.get('someHash');
     * console.log(data); // 输出区块数据
     * ```
     */
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

    /**
     * 存储区块数据。
     * 
     * @param hash - 要存储的区块的哈希值。
     * @param size - 区块数据的大小。
     * @param data - 区块数据（Uint8Array）。
     * @returns 一个 Promise，解析为存储后的区块元数据（BlockMetadata）。
     * @throws {Error} 如果存储区块失败，抛出错误。
     * @example
     * ```ts
     * const blockMetadata = await blockProvider.put('someHash', 1000, someData);
     * console.log(blockMetadata); // 输出存储后的区块元数据
     * ```
     */
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
