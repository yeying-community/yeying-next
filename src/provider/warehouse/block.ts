import {Authenticate} from '../common/authenticate'
import {ProviderOption} from '../common/model'
import {
    Block,
    BlockMetadata,
    BlockMetadataSchema,
    ConfirmBlockRequestBodySchema,
    ConfirmBlockRequestSchema,
    ConfirmBlockResponseBody,
    ConfirmBlockResponseBodySchema,
    GetBlockRequestBodySchema,
    GetBlockRequestSchema,
    GetBlockResponseBodySchema,
    PutBlockRequestBodySchema,
    PutBlockRequestSchema,
    PutBlockResponseBody,
    PutBlockResponseBodySchema
} from '../../yeying/api/asset/block_pb'
import {getCurrentUtcString} from '../../common/date'
import {Client, createClient} from "@connectrpc/connect";
import {createGrpcWebTransport} from "@connectrpc/connect-web";
import {create, toBinary} from "@bufbuild/protobuf";
import {computeHash} from "../../common/crypto";
import {encodeHex} from "../../common/codec";

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
    private client: Client<typeof Block>

    /**
     * 创建 BlockProvider 实例。
     *
     * @param option - 提供连接选项的 ProviderOption 实例。
     * @example
     * ```ts
     * const providerOption = { proxy: <proxy url>, blockAddress: <your block address> };
     * const blockProvider = new BlockProvider(providerOption);
     * ```
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(Block, createGrpcWebTransport({
            baseUrl: option.proxy,
            useBinaryFormat: true,
        }))
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
            const body = create(GetBlockRequestBodySchema, {hash: hash})
            let header
            try {
                header = await this.authenticate.createHeader(toBinary(GetBlockRequestBodySchema, body))
            } catch (err) {
                console.error(`Fail to create header when getting chunk content, hash=${hash}`, err)
                return reject(err)
            }

            const request = create(GetBlockRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.get(request)
                await this.authenticate.doResponse(res, GetBlockResponseBodySchema)
                resolve(res.data)
            } catch (err) {
                console.error('Fail to get block', err)
            }
        })
    }

    async createBlockMetadata(data: Uint8Array) {
        const chunkHash = await computeHash(data)  // 计算块的哈希值
        const block = create(BlockMetadataSchema, {
            hash: encodeHex(chunkHash),
            owner: this.authenticate.getDid(),
            createdAt: getCurrentUtcString(),
            size: BigInt(data.length),
        })
        block.signature = await this.authenticate.sign(toBinary(BlockMetadataSchema, block))
        return block
    }

    confirm(block: BlockMetadata) {
        return new Promise<ConfirmBlockResponseBody>(async (resolve, reject) => {
            const body = create(ConfirmBlockRequestBodySchema, {block: block})
            let header
            try {
                header = await this.authenticate.createHeader(toBinary(ConfirmBlockRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header when confirming block', err)
                return reject(err)
            }

            const request = create(ConfirmBlockRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.confirm(request)
                await this.authenticate.doResponse(res, ConfirmBlockResponseBodySchema)
                const resBody = res.body as ConfirmBlockResponseBody
                if (resBody.block) {
                    if (!await this.verifyBlockMetadata(resBody.block)) {
                        reject(new Error('invalid block metadata!'))
                    }
                }

                return resolve(resBody)
            } catch (err) {
                console.error('Fail to put block', err)
                return reject(err)
            }
        })
    }

    /**
     * 存储区块数据。
     *
     * @param block - 要存储的区块的哈希值。
     * @param data - 区块数据（Uint8Array）。
     * @returns 一个 Promise，解析为存储后的区块元数据（BlockMetadata）。
     * @throws {Error} 如果存储区块失败，抛出错误。
     * @example
     * ```ts
     * const body = await blockProvider.put('someHash', 1000, someData);
     * console.log(body); // 输出存储后的区块元数据
     * ```
     */
    put(block: BlockMetadata, data: Uint8Array) {
        return new Promise<PutBlockResponseBody>(async (resolve, reject) => {
            const body = create(PutBlockRequestBodySchema, {block: block})
            let header
            try {
                header = await this.authenticate.createHeader(toBinary(PutBlockRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header when putting chunk content', err)
                return reject(err)
            }

            const request = create(PutBlockRequestSchema, {header: header, body: body, data: data})
            try {
                const res = await this.client.put(request)
                await this.authenticate.doResponse(res, PutBlockResponseBodySchema)
                const resBody = res.body as PutBlockResponseBody
                if (await this.verifyBlockMetadata(resBody.block)) {
                    resolve(resBody)
                } else {
                    reject(new Error('invalid block metadata!'))
                }
            } catch (err) {
                console.error('Fail to put block', err)
                return reject(err)
            }
        })
    }

    async verifyBlockMetadata(block?: BlockMetadata) {
        if (block === undefined) {
            return false
        }

        const signature = block.signature
        try {
            block.signature = ''
            return await this.authenticate.verify(
                block.owner,
                toBinary(BlockMetadataSchema, block),
                signature
            )
        } finally {
            block.signature = signature
        }
    }
}
