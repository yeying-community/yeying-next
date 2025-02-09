import { getCurrentUtcString, isExpired, parseDateTime } from '../../common/date'
import { generateUuid } from '../../common/string'
import { MessageHeader, MessageHeaderSchema } from '../../yeying/api/common/message_pb'
import { AuthenticateTypeEnum } from '../../yeying/api/common/code_pb'
import { BlockAddress, fromDidToPublicKey, signHashBytes, verifyHashBytes } from '@yeying-community/yeying-web3'
import { InvalidArgument, NetworkDown, NoPermission } from '../../common/error'
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
     * 创建 Authenticate 类的实例。
     *
     * @param blockAddress - 与此认证实例关联的区块链地址。
     * @example
     * ```ts
     * const blockAddress = new BlockAddress(...);
     * const authenticate = new Authenticate(blockAddress);
     * ```
     */
    constructor(blockAddress: BlockAddress) {
        this.blockAddress = blockAddress
    }

    /**
     * 获取区块链地址的 DID（去中心化标识符）。
     *
     * @returns 返回区块链地址的 DID。
     * @example
     * ```ts
     * const did = authenticate.getDid();
     * console.log(did); // 输出区块链地址的 DID
     * ```
     */
    getDid() {
        return this.blockAddress.identifier
    }

    /**
     * 创建签名的消息头消息头，使用区块链账户的私钥签名。
     *
     * @param body - 二进制序列化的消息体，消息体里面是实际的业务数据。
     * @returns {Promise<MessageHeader>} 签名的消息头。
     * @throws {InvalidArgument} 如果创建消息头失败，则抛出错误。
     * @example
     * ```ts
     * const header = await authenticate.createHeader(body);
     * console.log(header);
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
     * 使用区块链地址的私钥对给定数据进行签名。
     *
     * @param data - 要签名的数据。
     * @returns 一个 Promise，解析为数据的签名。
     * @throws {InvalidArgument} 如果签名失败，则抛出错误。
     * @example
     * ```ts
     * const signature = await authenticate.sign(data);
     * console.log(signature); // 输出签名
     * ```
     */
    async sign(data: Uint8Array) {
        const hashBytes = await computeHash(data)
        return await signHashBytes(this.blockAddress.privateKey, hashBytes)
    }

    /**
     * 使用从 DID 派生的公钥验证给定数据的签名。
     *
     * @param did - 发送方的 DID（去中心化标识符）。
     * @param data - 要验证的数据。
     * @param signature - 要验证的签名。
     * @returns 一个 Promise，解析为布尔值，表示验证是否成功。
     * @throws {NoPermission} 如果验证失败，则抛出错误。
     * @example
     * ```ts
     * const isValid = await authenticate.verify(did, data, signature);
     * console.log(isValid); // 输出是否验证成功
     * ```
     */
    async verify(did: string, data: Uint8Array, signature: string) {
        const hashBytes = await computeHash(data)
        return await verifyHashBytes(fromDidToPublicKey(did), hashBytes, signature)
    }

    /**
     * 验证消息头和数据主体的有效性。
     *
     * @param header - 要验证的消息头。
     * @param body - 与消息头一起验证的可选数据主体。
     * @throws {InvalidArgument} 如果消息头中的时间戳过期，则抛出错误。
     * @throws {NoPermission} 如果签名无效，则抛出错误。
     * @example
     * ```ts
     * try {
     *   await authenticate.verifyHeader(header, body);
     * } catch (err) {
     *   console.error(err); // 输出错误信息
     * }
     * ```
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
     * @throws {NetworkDown} 如果协议无效或响应数据缺失，则抛出错误。
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
            throw new NetworkDown('protocol error!')
        }

        await this.verifyHeader(response.header, toBinary(bodySchema, response.body))
    }
}
