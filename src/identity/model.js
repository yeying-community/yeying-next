import elliptic from 'elliptic'
import {trimLeft} from '../common/string.js'
import {convertCipherTypeFrom} from '../common/common.js'
import {decodeBase64} from '../common/codec.js'
import code_pkg from '../yeying/api/common/code_pb.cjs'
const {CipherTypeEnum} = code_pkg


export class CryptoAlgorithm {
  constructor(name, iv) {
    this.name = name
    this.iv = iv
  }
}

export function deriveRawKeyFromIdentity(identity) {
  const ec = new elliptic.ec('secp256k1')
  const priKeyEc = ec.keyFromPrivate(trimLeft(identity['blockAddress'].privateKey, '0x'), 'hex')
  const pubKeyEc = ec.keyFromPublic(trimLeft(identity['blockAddress'].publicKey, '0x'), 'hex')
  const deriveKey = priKeyEc.derive(pubKeyEc.getPublic())
  return new Uint8Array(deriveKey.toArray('be'))
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