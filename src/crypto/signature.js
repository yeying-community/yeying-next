import elliptic from 'elliptic'
import {isBlank, trimLeft} from '../common/string.js'
import BN from 'bn.js'

export function convertDidToPublicKey(did) {
  if (did === undefined || did === null) {
    return did
  }

  const publicKey = did.slice(did.lastIndexOf(':') + 1)
  return trimLeft(publicKey, '0x')
}

/**
 * 对消息的哈希值签名
 *
 * @param privateKey
 * @param hashBytes
 * @returns {string}
 */
export function sign(privateKey, hashBytes) {
  const ec = new elliptic.ec('secp256k1')
  const keyPair = ec.keyFromPrivate(trimLeft(privateKey, '0x'), 'hex')
  const signature = keyPair.sign(new Uint8Array(hashBytes), {canonical: true})
  const r = signature.r.toArrayLike(Buffer, 'be', 32)
  const s = signature.s.toArrayLike(Buffer, 'be', 32)
  const v = Buffer.from([signature.recoveryParam])
  return Buffer.concat([r, s, v]).toString('hex')
}

/**
 * 验证消息的哈希值签名
 *
 * @param publicKey
 * @param hashBytes
 * @param signature
 * @returns {boolean}
 */
export function verify(publicKey, hashBytes, signature) {
  if (isBlank(signature)) {
    return false
  }

  const signatureBuffer = Buffer.from(signature, 'hex')
  const r = new BN(signatureBuffer.subarray(0, 32), 'be')
  const s = new BN(signatureBuffer.subarray(32, 64), 'be')
  const recoveryParam = signatureBuffer[64]
  const ec = new elliptic.ec('secp256k1')
  const pubKeyEc = ec.keyFromPublic(trimLeft(publicKey, '0x'), 'hex')
  return pubKeyEc.verify(new Uint8Array(hashBytes), {r: r, s: s, recoveryParam: recoveryParam,})
}


