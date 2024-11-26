import {trimLeft} from '../tool/string.js'
import {convertCipherTypeFrom} from '../tool/code.js'
import {decodeBase64} from '../tool/codec.js'
import code_pkg from '../yeying/api/common/code_pb.cjs'
import {deriveRawKeyFromPairKey} from '../tool/crypto.js'

const {CipherTypeEnum} = code_pkg

export class Identity {
  constructor(metadata, blockAddress, extend) {
    this.metadata = metadata
    this.blockAddress = blockAddress
    this.extend = extend
  }
}

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

export function deriveRawKeyFromBlockAddress(blockAddress) {
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

export function convertCryptoAlgorithmFromAlgorithm(algorithm) {
  const cipherType = convertCipherTypeFrom(algorithm.name)
  switch (cipherType) {
    case CipherTypeEnum.CIPHER_TYPE_AES_GCM_256:
      return new CryptoAlgorithm('AES-GCM', decodeBase64(algorithm.iv))
    default:
      return undefined
  }
}