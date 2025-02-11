import { Authenticate } from '../common/authenticate'
import { ProviderOption } from '../common/model'
import { MessageHeader } from '../../yeying/api/common/message_pb'
import { DataForgery } from '../../common/error'
import {
    HealthCheckRequestSchema,
    HealthCheckResponseBody,
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
import {AssetMetadata, AssetMetadataSchema} from "../../yeying/api/asset/asset_pb";

/**
 * NodeProvider 每个服务都是一个节点，同个这类了解这个节点健康状态，和节点的元信息。
 *
 * @example
 * ```ts
 * const providerOption = { proxy: <proxy url>, blockAddress: <your block address> };
 * const provider = new NodeProvider(providerOption);
 * provider.whoami().then(metadata => console.log(metadata));
 * ```
 */
export class NodeProvider {
    private authenticate: Authenticate
    private client: Client<typeof Node>

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
     * 检查当前节点的健康状态。
     *
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
     * 获取当前节点的元数据，验证其签名的有效性。
     *
     * @returns 返回一个 Promise，解析为 NodeMetadata。
     * @throws {DataForgery} 如果签名验证失败，抛出数据伪造错误。
     * @example
     * ```ts
     * provider.whoami().then(metadata => {
     *     console.log('Node Metadata:', metadata);
     * }).catch(err => {
     *     console.error('Error:', err);
     * });
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
                    reject(new DataForgery('invalid signature!'))
                }
            } catch (err) {
                console.error('Fail to call whoami', err)
                return reject(err)
            }
        })
    }

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
