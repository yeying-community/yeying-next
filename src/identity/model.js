import elliptic from 'elliptic'
import {trimLeft} from '../common/string.js'
import {convertCipherTypeFrom} from '../common/common.js'
import {decodeBase64} from '../common/codec.js'
import code_pkg from '../yeying/api/common/code_pb.cjs'
import {deriveRawKeyFromPairKey} from '../common/crypto.js'
const {CipherTypeEnum} = code_pkg


export class CryptoAlgorithm {
  constructor(name, iv) {
    this.name = name
    this.iv = iv
  }
}

export function convertDidToPublicKey(did) {
  if (did === undefined || did === null) {
    return did
  }

  const publicKey = did.slice(did.lastIndexOf(':') + 1)
  return trimLeft(publicKey, '0x')
}

export function deriveRawKeyFromIdentity(identity) {
  const blockAddress = identity.blockAddress
  return deriveRawKeyFromPairKey(blockAddress.publicKey, blockAddress.privateKey)
}

export function convertCryptoAlgorithmFromIdentity(identity) {
  const algorithm = identity['extend']['securityConfig']['algorithm']
  const cipherType = convertCipherTypeFrom(algorithm.name)
  switch (cipherType) {
    case CipherTypeEnum.CIPHER_TYPE_AES_GCM_256:
      return new CryptoAlgorithm('AES-GCM', decodeBase64(algorithm.iv))
    default:
      return undefined
  }
}