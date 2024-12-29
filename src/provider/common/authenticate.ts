import { getCurrentUtcString, isExpired, parseDateTime } from '../../common/date'
import { generateUuid } from '../../common/string'
import { MessageHeader } from '../../yeying/api/common/message_pb'
import { AuthenticateTypeEnum } from '../../yeying/api/common/code_pb'
import { BlockAddress, fromDidToPublicKey, signHashBytes, verifyHashBytes } from '@yeying-community/yeying-web3'
import { InvalidArgument, NetworkDown, NoPermission } from '../../common/error'
import { composite } from '../../common/bytes'
import { RpcError } from 'grpc-web'
import { convertResponseStatusToError } from '../../common/status'
import { computeHash } from '../../common/crypto'

/**
 * 这是一个基于区块链地址的认证类，用于签名要发送的数据，以及验证接受到的数据，确保数据传输双方识别数据是否被被篡改。
 *
 */
export class Authenticate {
    private blockAddress: BlockAddress

    constructor(blockAddress: BlockAddress) {
        this.blockAddress = blockAddress
    }

    getDid() {
        return this.blockAddress.identifier
    }

    async createHeader(body?: Uint8Array) {
        const header = new MessageHeader()
        header.setDid(this.blockAddress.identifier)
        header.setAuthtype(AuthenticateTypeEnum.AUTHENTICATE_TYPE_CERT)
        header.setNonce(generateUuid())
        header.setVersion(0)
        header.setTimestamp(getCurrentUtcString())
        const data = body === undefined ? header.serializeBinary() : composite(header.serializeBinary(), body)
        const signature = await this.sign(data)
        header.setAuthcontent(signature)
        return header
    }

    async sign(data: Uint8Array) {
        const hashBytes = await computeHash(data)
        return await signHashBytes(this.blockAddress.privateKey, hashBytes)
    }

    async verify(did: string, data: Uint8Array, signature: string) {
        const hashBytes = await computeHash(data)
        return await verifyHashBytes(fromDidToPublicKey(did), hashBytes, signature)
    }

    async verifyHeader(header: MessageHeader, body: Uint8Array | undefined) {
        const timestamp = header.getTimestamp()
        const datetime = parseDateTime(timestamp)
        if (isExpired(datetime, 5 * 60)) {
            throw new InvalidArgument('Timestamp expired')
        }

        const signature = header.getAuthcontent()
        header.setAuthcontent('')

        const data = body === undefined ? header.serializeBinary() : composite(header.serializeBinary(), body)
        const success = this.verify(header.getDid(), data, signature)
        if (!success) {
            throw new NoPermission('Invalid signature')
        }
    }

    doResponse(err: RpcError, response: any): Promise<any> {
        return new Promise(async (resolve, reject) => {
            if (
                err !== null ||
                response === undefined ||
                response.getHeader() === undefined ||
                response.getBody() === undefined ||
                response.getBody().getStatus() === undefined
            ) {
                console.error(err)
                return reject(new NetworkDown('protocol error!'))
            }

            const body = response.getBody()
            try {
                await this.verifyHeader(response.getHeader(), body.serializeBinary())
            } catch (err) {
                console.error(err)
                return reject(err)
            }

            const error = convertResponseStatusToError(body.getStatus())
            if (error !== undefined) {
                console.error(error)
                return reject(error)
            } else {
                resolve(body)
            }
        })
    }
}
