import code_pkg from '../yeying/api/common/code_pb.cjs'
import message_pkg from '../yeying/api/common/message_pb.cjs'
import {getCurrentUtcString, isExpired, parseDateTime} from '../tool/date.js'
import {composite, concat} from '../tool/object.js'
import {generateUuid} from '../tool/string.js'
import {convertDidToPublicKey, sign, verify} from '../tool/signature.js'
import {convertAuthenticateTypeTo} from '../tool/code.js'
import {InvalidArgument, NoPermission} from '../tool/error.js'
import {computeHash} from '../tool/digest.js'

const {MessageHeader} = message_pkg

const {AuthenticateTypeEnum} = code_pkg

export class Authenticate {
  constructor(blockAddress) {
    this.blockAddress = blockAddress
  }

  getDid() {
    return this.blockAddress.identifier
  }

  async createHeader(method, body) {
    const did = this.blockAddress.identifier
    const timestamp = getCurrentUtcString()
    const nonce = generateUuid()
    const version = 0
    let data
    const type = convertAuthenticateTypeTo(AuthenticateTypeEnum.AUTHENTICATE_TYPE_CERT)
    if (body === undefined) {
      data = composite(concat(did, method, type, timestamp, nonce, `${version}`))
    } else {
      data = composite(concat(did, method, type, timestamp, nonce, `${version}`), body.serializeBinary())
    }

    const hashBytes = await computeHash(data)
    const signature = sign(this.blockAddress.privateKey, hashBytes)
    const header = new MessageHeader()
    header.setDid(did)
    header.setAuthtype(AuthenticateTypeEnum.AUTHENTICATE_TYPE_CERT)
    header.setAuthcontent(signature)
    header.setNonce(nonce)
    header.setVersion(version)
    header.setTimestamp(timestamp)
    return header
  }

  async verifyHeader(method, header, body) {
    const timestamp = header.getTimestamp()
    const datetime = parseDateTime(timestamp)
    if (isExpired(datetime, 5 * 60)) {
      throw new InvalidArgument('Timestamp expired')
    }

    let data
    const authType = convertAuthenticateTypeTo(header.getAuthtype())
    const h = concat(header.getDid(), method, authType, timestamp, header.getNonce(), `${header.getVersion()}`)
    if (body === undefined) {
      data = composite(h)
    } else {
      data = composite(h, body.serializeBinary())
    }

    const hashBytes = await computeHash(data)
    if (!verify(convertDidToPublicKey(header.getDid()), hashBytes, header.getAuthcontent())) {
      throw new NoPermission('Invalid signature')
    }
  }
}

