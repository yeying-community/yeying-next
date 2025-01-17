import {Authenticate} from "../common/authenticate";
import {ProviderOption} from "../common/model";
import {MessageHeader, ServiceMetadata} from "../../yeying/api/common/message_pb";
import {DataForgery} from "../../common/error";
import {NodeClient} from "../../yeying/api/node/NodeServiceClientPb";
import {HealthCheckRequest, NodeMetadata, WhoamiRequest} from "../../yeying/api/node/node_pb";

/**
 * NodeProvider 每个服务都是一个节点，同个这类了解这个节点健康状态，和节点的元信息。
 *
 * @example
 * ```ts
 * const provider = new NodeProvider(authenticate, providerOption);
 * provider.whoami().then(metadata => console.log(metadata));
 * ```
 */
export class NodeProvider {
    private authenticate: Authenticate
    private client: NodeClient

    constructor(authenticate: Authenticate, option: ProviderOption) {
        this.authenticate = authenticate
        this.client = new NodeClient(option.proxy)
    }

    /**
     * 检查当前节点的健康状态。
     *
     * @returns 返回一个 Promise，解析为 HealthCheckResponseBody
     * @example
     * ```ts
     * provider.healthCheck().then(response => {
     *     console.log('Status:', response.getStatus());
     * }).catch(err => {
     *     console.error('Error:', err);
     * });
     * ```
     */
    healthCheck(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            let header: MessageHeader
            try {
                header = await this.authenticate.createHeader()
            } catch (err) {
                console.error('Fail to create header for whoami', err)
                return reject(err)
            }

            const request = new HealthCheckRequest()
            request.setHeader(header)
            this.client.healthCheck(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then(resolve, reject)
            })
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
    whoami(): Promise<NodeMetadata> {
        return new Promise(async (resolve, reject) => {
            let header: MessageHeader
            try {
                header = await this.authenticate.createHeader()
            } catch (err) {
                console.error('Fail to create header for whoami', err)
                return reject(err)
            }

            const request = new WhoamiRequest()
            request.setHeader(header)
            this.client.whoami(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then(async (body) => {
                    const nodeMetadata = body.getNode() as NodeMetadata
                    const serviceMetadata = nodeMetadata.getService() as ServiceMetadata
                    const signature = serviceMetadata.getSignature()
                    serviceMetadata.setSignature('')
                    const passed = await this.authenticate.verify(
                        serviceMetadata.getDid(),
                        serviceMetadata.serializeBinary(),
                        signature
                    )
                    if (passed) {
                        serviceMetadata.setSignature(signature)
                        resolve(nodeMetadata)
                    } else {
                        reject(new DataForgery('invalid signature!'))
                    }
                }, reject)
            })
        })
    }
}