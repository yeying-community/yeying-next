import { getCurrentUtcString, isExpired, parseDateTime } from '../../common/date'
import { generateUuid } from '../../common/string'
import { BlockAddress, MessageHeader, ResponseStatus } from '../../yeying/api/common/message_pb'
import { AuthenticateTypeEnum } from '../../yeying/api/common/code_pb'
import { Wallet } from '@yeying-community/yeying-web3'
import { InvalidArgument, NetworkDown, NoPermission } from '../../common/error'
import { composite } from '../../common/bytes'
import { RpcError } from 'grpc-web'
import { convertResponseStatusToError } from '../../common/status'

export class Authenticate {
    private blockAddress: BlockAddress

    constructor(blockAddress: BlockAddress) {
        this.blockAddress = blockAddress
    }

    getDid() {
        return this.blockAddress.getIdentifier()
    }

    async createHeader(body?: Uint8Array) {
        const header = new MessageHeader()
        header.setDid(this.blockAddress.getIdentifier())
        header.setAuthtype(AuthenticateTypeEnum.AUTHENTICATE_TYPE_CERT)
        header.setNonce(generateUuid())
        header.setVersion(0)
        header.setTimestamp(getCurrentUtcString())
        console.log(`${JSON.stringify(header)}`)
        const data = body === undefined ? header.serializeBinary() : composite(header.serializeBinary(), body)
        const signature = await this.sign(data)
        header.setAuthcontent(signature)
        return header
    }

    async sign(data: Uint8Array) {
        return await Wallet.signData(this.blockAddress.getPrivatekey(), data)
    }

    async verify(data: Uint8Array, signature: string) {
        return await Wallet.verifyData(this.getPublicKey(), data, signature)
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
        const success = this.verify(data, signature)
        if (!success) {
            throw new NoPermission('Invalid signature')
        }
    }

    getPublicKey() {
        const publicKey = this.blockAddress
            .getIdentifier()
            .slice(this.blockAddress.getIdentifier().lastIndexOf(':') + 1)
        return publicKey.startsWith('0x') ? publicKey.substring(2) : publicKey
    }

    async doResponse(err: RpcError, header?: MessageHeader, status?: ResponseStatus, body?: Uint8Array) {
        if (err !== null || header === undefined || body === undefined || status === undefined) {
            console.error(err)
            throw new NetworkDown('Fail to collect')
        }

        await this.verifyHeader(header, body)
        const error = convertResponseStatusToError(status)
        if (error !== undefined) {
            console.error(error)
            throw error
        }
        return body
    }
}
