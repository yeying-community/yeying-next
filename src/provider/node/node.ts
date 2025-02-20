import { Authenticate } from '../common/authenticate'
import { ProviderOption } from '../common/model'
import { MessageHeader } from '../../yeying/api/common/message_pb'
import { DataTampering } from '../../common/error'
import {
    HealthCheckRequestSchema,
    HealthCheckResponseBodySchema,
    Node,
    NodeMetadata,
    NodeMetadataSchema,
    WhoamiRequestSchema,
    WhoamiResponseBody,
    WhoamiResponseBodySchema
} from '../../yeying/api/node/node_pb'
import { Client, createClient } from '@connectrpc/connect'
import { createGrpcWebTransport } from '@connectrpc/connect-web'
import { create, toBinary } from '@bufbuild/protobuf'

/**
 * 用于与节点服务进行交互，提供健康检查和身份验证功能
 */
export class NodeProvider {
    private authenticate: Authenticate
    private client: Client<typeof Node>

    /**
     * 构造函数
     * @param option - 包含 blockAddress 和 proxy 的配置选项
     * @example
     * ```ts
     * const providerOption = { blockAddress: 'http://example.com', proxy: 'http://proxy.example.com' };
     * const nodeProvider = new NodeProvider(providerOption);
     * ```
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(
            Node,
            createGrpcWebTransport({
                baseUrl: option.proxy,
                useBinaryFormat: true
            })
        )
    }

    /**
     * 检查当前节点的健康状态
     * @returns 如果健康检查成功，则返回一个已解析的 Promise
     * @example
     * ```ts
     * nodeProvider.healthCheck()
     *     .then(() => console.log('Node health check passed.'))
     *     .catch(err => console.error('Failed to check node health:', err));
     * ```
     */
    healthCheck() {
        return new Promise<void>(async (resolve, reject) => {
            let header: MessageHeader
            try {
                header = await this.authenticate.createHeader()
            } catch (err) {
                console.error('Fail to create header for checking health', err)
                return reject(err)
            }

            const request = create(HealthCheckRequestSchema, { header: header })
            try {
                const res = await this.client.healthCheck(request)
                await this.authenticate.doResponse(res, HealthCheckResponseBodySchema)
                resolve()
            } catch (err) {
                console.error('Fail to check health.', err)
                return reject(err)
            }
        })
    }

    /**
     * 获取当前节点的元数据并验证其签名
     * @returns 返回一个 Promise，解析为 NodeMetadata
     * @throws {@link DataForgery} 如果签名验证失败
     * @example
     * ```ts
     * nodeProvider.whoami()
     *     .then(metadata => console.log('Node Metadata:', metadata))
     *     .catch(err => console.error('Failed to get node metadata', err));
     * ```
     */
    whoami() {
        return new Promise<NodeMetadata>(async (resolve, reject) => {
            let header: MessageHeader
            try {
                header = await this.authenticate.createHeader()
            } catch (err) {
                console.error('Fail to create header for whoami', err)
                return reject(err)
            }

            const request = create(WhoamiRequestSchema, { header: header })
            try {
                const res = await this.client.whoami(request)
                await this.authenticate.doResponse(res, WhoamiResponseBodySchema)
                const body = res.body as WhoamiResponseBody
                if (await this.verifyNodeMetadata(body.node)) {
                    resolve(body.node as NodeMetadata)
                } else {
                    reject(new DataTampering('invalid signature!'))
                }
            } catch (err) {
                console.error('Fail to call whoami', err)
                return reject(err)
            }
        })
    }

    /**
     * 验证节点元数据的签名是否有效
     * @param node - 要验证的节点元数据
     * @returns 如果签名有效，返回 true；否则返回 false
     * @example
     * ```ts
     * const nodeMetadata = { did: 'example-did', signature: 'example-signature' };
     * nodeProvider.verifyNodeMetadata(nodeMetadata)
     *     .then(isValid => console.log('Signature valid:', isValid))
     *     .catch(err => console.error('Failed to verify signature', err));
     * ```
     */
    private async verifyNodeMetadata(node?: NodeMetadata) {
        if (node === undefined) {
            return false
        }

        const signature = node.signature
        try {
            node.signature = ''
            return await this.authenticate.verify(node.did, toBinary(NodeMetadataSchema, node), signature)
        } finally {
            node.signature = signature
        }
    }
}
