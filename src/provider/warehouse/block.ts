import { Authenticate } from '../common/authenticate'
import { ProviderOption } from '../common/model'
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
import { getCurrentUtcString } from '../../common/date'
import { Client, createClient } from '@connectrpc/connect'
import { createGrpcWebTransport } from '@connectrpc/connect-web'
import { create, toBinary } from '@bufbuild/protobuf'
import { computeHash } from '../../common/crypto'
import { encodeHex } from '../../common/codec'

/**
 * 用于与区块链交互，提供数据的获取和存储功能
 */
export class BlockProvider {
    private authenticate: Authenticate
    private client: Client<typeof Block>

    /**
     * 构造函数
     * @param option - 包含代理地址和区块地址信息的配置选项
     * @example
     * ```ts
     * const providerOption = { proxy: 'http://proxy.example.com', blockAddress: { identifier: 'example-did', privateKey: 'example-private-key' } }
     * const blockProvider = new BlockProvider(providerOption)
     * ```
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(
            Block,
            createGrpcWebTransport({
                baseUrl: option.proxy,
                useBinaryFormat: true
            })
        )
    }

    /**
     * 获取当前用户的 DID（所有者）
     * @returns 返回当前用户的 DID
     * @example
     * ```ts
     * const owner = blockProvider.getOwner()
     * ```
     */
    getOwner() {
        return this.authenticate.getDid()
    }

    /**
     * 获取资产块数据。
     * @param namespaceId 资产块命名空间
     * @param hash - 要获取的资产块哈希值
     * @returns 一个 Promise，解析为获取到的区块数据（Uint8Array）
     * @example
     * ```ts
     * blockProvider.get('example-namespace', 'example-hash')
     *   .then(data => console.log(data))
     *   .catch(err => console.error(err))
     * ```
     */
    get(namespaceId: string, hash: string) {
        return new Promise<Uint8Array>(async (resolve, reject) => {
            const body = create(GetBlockRequestBodySchema, {
                namespaceId: namespaceId,
                hash: hash
            })

            let header
            try {
                header = await this.authenticate.createHeader(toBinary(GetBlockRequestBodySchema, body))
            } catch (err) {
                console.error(`Fail to create header when getting chunk content, hash=${hash}`, err)
                return reject(err)
            }

            const request = create(GetBlockRequestSchema, { header: header, body: body })
            try {
                const res = await this.client.get(request)
                await this.authenticate.doResponse(res, GetBlockResponseBodySchema)
                resolve(res.data)
            } catch (err) {
                console.error('Fail to get block', err)
            }
        })
    }

    /**
     * 根据块数据生成哈希值，并创建签名的块元数据
     * @param namespaceId - 命名空间 ID
     * @param data - 块数据（Uint8Array）
     * @returns 返回签名后的块元数据
     * @example
     * ```ts
     * const data = new Uint8Array([1, 2, 3])
     * const blockMetadata = await blockProvider.createBlockMetadata('example-namespace', data)
     * ```
     */
    async createBlockMetadata(namespaceId: string, data: Uint8Array) {
        const chunkHash = await computeHash(data) // 计算块的哈希值
        const block = create(BlockMetadataSchema, {
            namespaceId: namespaceId,
            hash: encodeHex(chunkHash),
            owner: this.authenticate.getDid(),
            uploader: this.authenticate.getDid(),
            createdAt: getCurrentUtcString(),
            size: BigInt(data.length)
        })

        block.signature = await this.authenticate.sign(toBinary(BlockMetadataSchema, block))
        return block
    }

    /**
     * 发送确认请求到后端服务，并验证返回的块元数据签名
     * @param block - 块元数据对象
     * @returns 返回确认块的响应体
     * @example
     * ```ts
     * const blockMetadata = await blockProvider.createBlockMetadata('example-namespace', new Uint8Array([1, 2, 3]))
     * blockProvider.confirm(blockMetadata)
     *   .then(response => console.log(response))
     *   .catch(err => console.error(err))
     * ```
     */
    confirm(block: BlockMetadata) {
        return new Promise<ConfirmBlockResponseBody>(async (resolve, reject) => {
            const body = create(ConfirmBlockRequestBodySchema, { block: block })
            let header
            try {
                header = await this.authenticate.createHeader(toBinary(ConfirmBlockRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header when confirming block', err)
                return reject(err)
            }

            const request = create(ConfirmBlockRequestSchema, { header: header, body: body })
            try {
                const res = await this.client.confirm(request)
                await this.authenticate.doResponse(res, ConfirmBlockResponseBodySchema)
                const resBody = res.body as ConfirmBlockResponseBody
                if (resBody.block) {
                    if (!(await this.verifyBlockMetadata(resBody.block))) {
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
     * 上传块数据,发送块数据和元数据到后端服务，并验证返回的块元数据签名
     * @param block - 块元数据对象
     * @param data - 块数据（Uint8Array）
     * @returns 返回上传块的响应体
     * @example
     * ```ts
     * const blockMetadata = await blockProvider.createBlockMetadata('example-namespace', new Uint8Array([1, 2, 3]))
     * blockProvider.put(blockMetadata, new Uint8Array([1, 2, 3]))
     *   .then(response => console.log(response))
     *   .catch(err => console.error(err))
     * ```
     */
    put(block: BlockMetadata, data: Uint8Array) {
        return new Promise<PutBlockResponseBody>(async (resolve, reject) => {
            const body = create(PutBlockRequestBodySchema, { block: block })
            let header
            try {
                header = await this.authenticate.createHeader(toBinary(PutBlockRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header when putting chunk content', err)
                return reject(err)
            }

            const request = create(PutBlockRequestSchema, { header: header, body: body, data: data })
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

    /**
     * 验证块元数据的签名是否有效
     * @param block - 块元数据对象
     * @returns 如果签名有效，返回 true；否则返回 false
     * @example
     * ```ts
     * const blockMetadata = { owner: 'example-did', signature: 'example-signature' }
     * const isValid = await blockProvider.verifyBlockMetadata(blockMetadata)
     * ```
     */
    async verifyBlockMetadata(block?: BlockMetadata) {
        if (block === undefined) {
            return false
        }

        const signature = block.signature
        try {
            block.signature = ''
            return await this.authenticate.verify(block.owner, toBinary(BlockMetadataSchema, block), signature)
        } finally {
            block.signature = signature
        }
    }
}
