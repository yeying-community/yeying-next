import { getCurrentUtcString, isExpired, parseDateTime } from '../../common/date'
import { generateUuid } from '../../common/string'
import { MessageHeader, MessageHeaderSchema } from '../../yeying/api/common/message_pb'
import { AuthenticateTypeEnum } from '../../yeying/api/common/code_pb'
import { BlockAddress, fromDidToPublicKey, signHashBytes, verifyHashBytes } from '@yeying-community/yeying-web3'
import { InvalidArgument, NetworkError, NoPermission } from '../../common/error'
import { composite } from '../../common/bytes'
import { computeHash } from '../../common/crypto'
import { create, toBinary } from '@bufbuild/protobuf'
import { DescMessage } from '@bufbuild/protobuf/dist/cjs/descriptors'

/**
 * 基于区块链地址的认证类，用于签名要发送的数据并验证接收到的数据，确保数据传输双方能够确认数据是否被篡改。
 *
 * @example
 * ```ts
 * const authenticate = new Authenticate(blockAddress);
 * const header = await authenticate.createHeader(body);
 * ```
 */
export class Authenticate {
    private blockAddress: BlockAddress

    /**
     * 创建认证实例。
     *
     * @param blockAddress 区块链地址。
     * @example
     *
     * ```ts
     * const authenticate = new Authenticate(<block address>);
     * ```
     *
     */
    constructor(blockAddress: BlockAddress) {
        this.blockAddress = blockAddress
    }

    /**
     * 获取身份DID。
     */
    getDid() {
        return this.blockAddress.identifier
    }

    /**
     * 创建签名的消息头
     *
     * @param body 二进制序列化的消息体，消息体里面是实际的业务数据。
     * @returns 签名的消息头。
     * @throws {InvalidArgument} 如果创建消息头失败，则抛出错误。
     * ```
     */
    async createHeader(body?: Uint8Array): Promise<MessageHeader> {
        const header: MessageHeader = create(MessageHeaderSchema, {
            did: this.blockAddress.identifier,
            authType: AuthenticateTypeEnum.AUTHENTICATE_TYPE_CERT,
            nonce: generateUuid(),
            version: 0,
            timestamp: getCurrentUtcString()
        })

        const data =
            body === undefined
                ? toBinary(MessageHeaderSchema, header)
                : composite(toBinary(MessageHeaderSchema, header), body)
        const signature = await this.sign(data)
        header.authContent = signature
        return header
    }

    /**
     * 签名数据
     *
     * @param data 要签名的数据。
     * @returns {Promise<string>} 签名。
     * @throws {InvalidArgument} 如果签名失败，则抛出错误。
     */
    async sign(data: Uint8Array) {
        const hashBytes = await computeHash(data)
        return await signHashBytes(this.blockAddress.privateKey, hashBytes)
    }

    /**
     * 验证签名
     *
     * @param did 身份DID。
     * @param data 要验证的数据。
     * @param signature 签名。
     * @returns {Promise<boolean>} 验证是否成功。
     * @throws {NoPermission} 如果验证失败，则抛出错误。
     */
    async verify(did: string, data: Uint8Array, signature: string) {
        const hashBytes = await computeHash(data)
        return await verifyHashBytes(fromDidToPublicKey(did), hashBytes, signature)
    }

    /**
     * 验证签名的消息头
     *
     * @param header - 要验证的消息头。
     * @param body - 二进制序列化的消息体，消息体里面是实际的业务数据。
     * @return {Promise<void>}
     *
     * @throws {InvalidArgument} 如果消息头中的时间戳过期，则抛出错误。
     * @throws {NoPermission} 如果签名无效，则抛出错误。
     */
    async verifyHeader(header: MessageHeader, body: Uint8Array | undefined) {
        const datetime = parseDateTime(header.timestamp)
        if (isExpired(datetime, 5 * 60)) {
            throw new InvalidArgument('Timestamp expired')
        }

        const signature = header.authContent
        header.authContent = ''

        const data: Uint8Array =
            body === undefined
                ? toBinary(MessageHeaderSchema, header)
                : composite(toBinary(MessageHeaderSchema, header), body)
        const success = this.verify(header.did, data, signature)
        if (!success) {
            throw new NoPermission('Invalid signature')
        }
    }

    /**
     * 处理响应，通过验证消息头和处理错误或数据。
     *
     * @param response - 要处理的响应。
     * @returns 一个 Promise，解析为处理后的响应主体。
     * @throws {NetworkError} 如果协议无效或响应数据缺失，则抛出错误。
     * @throws {InvalidArgument} 如果消息头验证失败，则抛出错误。
     * @throws {NoPermission} 如果签名验证失败，则抛出错误。
     * @example
     * ```ts
     * authenticate.doResponse(err, response).then(body => {
     *   // 处理成功的响应主体
     * }).catch(err => {
     *   // 处理错误
     * });
     * ```
     */
    async doResponse(response: any, bodySchema: DescMessage) {
        if (
            response === undefined ||
            response.header === undefined ||
            response.body === undefined ||
            response.body.status === undefined
        ) {
            throw new NetworkError('protocol error!')
        }

        await this.verifyHeader(response.header, toBinary(bodySchema, response.body))
    }
}
