import {Authenticate} from '../common/authenticate'
import {ProviderOption} from '../common/model'
import {
    BlockMetadataSchema,
    GetBlockRequestBodySchema,
    GetBlockRequestSchema,
    GetBlockResponseBodySchema
} from '../../yeying/api/asset/block_pb'
import {getCurrentUtcString} from '../../common/date'
import {Client, createClient} from '@connectrpc/connect'
import {createGrpcWebTransport} from '@connectrpc/connect-web'
import {create, toBinary} from '@bufbuild/protobuf'
import {
    CreateNamespaceRequestBodySchema,
    CreateNamespaceRequestSchema,
    CreateNamespaceResponseBody,
    CreateNamespaceResponseBodySchema,
    Namespace,
    NamespaceMetadata,
    NamespaceMetadataSchema,
    SearchNamespaceConditionSchema,
    SearchNamespaceRequestBodySchema,
    SearchNamespaceRequestSchema,
    SearchNamespaceResponseBody,
    SearchNamespaceResponseBodySchema
} from "../../yeying/api/asset/namespace_pb";
import {generateUuid} from "../../common/string";
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
export class NamespaceProvider {
    private authenticate: Authenticate
    private client: Client<typeof Namespace>

    /**
     * 创建命名空间供应商。
     *
     * @param option {ProviderOption} 指定供应商选项。
     *
     * @example
     * ```ts
     * const providerOption = { proxy: <proxy url>, blockAddress: <your block address> };
     * const namespaceProvider = new NamespaceProvider(providerOption);
     * ```
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(
            Namespace,
            createGrpcWebTransport({
                baseUrl: option.proxy,
                useBinaryFormat: true
            })
        )
    }

    /**
     * 搜索命名空间
     *
     * @param hash - 要获取的区块的哈希值。
     * @returns 一个 Promise，解析为获取到的区块数据（Uint8Array）。
     * @throws {Error} 如果获取区块失败，抛出错误。
     * @example
     * ```ts
     * const data = await namespaceProvider.get('someHash');
     * console.log(data); // 输出区块数据
     * ```
     */
    search(page: number, pageSize: number, name?: string) {
        return new Promise<SearchNamespaceResponseBody>(async (resolve, reject) => {
            const body = create(SearchNamespaceRequestBodySchema, {
                condition: create(SearchNamespaceConditionSchema, {name: name}),
                page: create(RequestPageSchema, {page: page, pageSize: pageSize})
            })
            let header
            try {
                header = await this.authenticate.createHeader(toBinary(SearchNamespaceRequestBodySchema, body))
            } catch (err) {
                console.error(`Fail to create header when search namespace, page=${page}, pageSize=${pageSize}`, err)
                return reject(err)
            }

            const request = create(SearchNamespaceRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.search(request)
                await this.authenticate.doResponse(res, SearchNamespaceResponseBodySchema)
                const resBody = res.body as SearchNamespaceResponseBody
                for (const n of resBody.namespaces) {
                    if (!(await this.verifyNamespaceMetadata(n))) {
                        reject(new Error('invalid namespace metadata!'))
                    }
                }

                resolve(resBody)
            } catch (err) {
                console.error('Fail to search namespace', err)
            }
        })
    }

    /**
     * 创建命名空间
     *
     * @param name {string} 命名空间名称
     * @param description {string} 命名空间描述
     *
     * @returns 一个 Promise，解析为获取到的区块数据（Uint8Array）。
     * @throws {Error} 如果获取区块失败，抛出错误。
     * @example
     * ```ts
     * const data = await namespaceProvider.get('someHash');
     * console.log(data); // 输出区块数据
     * ```
     */
    create(name: string, description: string, uid?: string, participants?: string) {
        return new Promise<CreateNamespaceResponseBody>(async (resolve, reject) => {
            const namespace = await this.createNamespaceMetadata(name, description, uid, participants)
            const body = create(CreateNamespaceRequestBodySchema, {namespace: namespace})
            let header
            try {
                header = await this.authenticate.createHeader(toBinary(CreateNamespaceRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header when creating namespace', err)
                return reject(err)
            }

            const request = create(CreateNamespaceRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.create(request)
                await this.authenticate.doResponse(res, CreateNamespaceResponseBodySchema)
                const resBody = res.body as CreateNamespaceResponseBody
                if (resBody.namespace) {
                    if (!(await this.verifyNamespaceMetadata(resBody.namespace))) {
                        reject(new Error('invalid namespace metadata!'))
                    }
                }

                return resolve(resBody)
            } catch (err) {
                console.error('Fail to create namespace', err)
                return reject(err)
            }
        })
    }

    async createNamespaceMetadata(name: string, description: string, uid?: string, participants?: string) {
        const namespace = create(NamespaceMetadataSchema, {
            owner: this.authenticate.getDid(),
            uid: uid || uid === '' ? uid : generateUuid(),
            name: name,
            description: description,
            participants: participants,
            createdAt: getCurrentUtcString(),
            updatedAt: getCurrentUtcString(),
        })
        namespace.signature = await this.authenticate.sign(toBinary(NamespaceMetadataSchema, namespace))
        return namespace
    }

    async verifyNamespaceMetadata(namespace?: NamespaceMetadata) {
        if (namespace === undefined) {
            return false
        }

        const signature = namespace.signature
        try {
            namespace.signature = ''
            return await this.authenticate.verify(namespace.owner, toBinary(NamespaceMetadataSchema, namespace), signature)
        } finally {
            namespace.signature = signature
        }
    }
}
