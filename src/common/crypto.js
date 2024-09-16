import {InvalidPassword} from './error.js'

// 推荐长度为 96比特（12字节），因为这种长度会在性能和安全性之间提供良好的平衡
export function generateIv(len = 12) {
  return crypto.getRandomValues(new Uint8Array(len))
}

export function generateBytes(len) {
  return crypto.getRandomValues(new Uint8Array(len))
}

export function encryptObject(algorithm, cryptoKey, plain, plainConvertor = undefined, cipherConvertor = undefined) {
  return new Promise(async (resolve, reject) => {
    try {
      const cipher = await crypto.subtle.encrypt(algorithm, cryptoKey, plainConvertor ? plainConvertor(plain) : plain)
      // 加密返回的是ArrayBuffer类型，本身是一个通用的固定长度的原始二进制数据缓冲区，不能直接从中读取内容，
      // 但可以用一个`TypedArray`视图来解释这些二进制数据。`TypedArray`可以是`Uint8Array`、`Int8Array`、`Uint16Array`等等
      resolve(cipherConvertor ? cipherConvertor(cipher) : cipher)
    } catch (err) {
      console.error(`Fail to encrypt bytes!`, err)
      reject(new InvalidPassword(`Invalid password!`))
    }
  })
}

export function decryptObject(algorithm, cryptoKey, cipher, cipherConvertor = undefined, plainConvertor = undefined) {
  return new Promise(async (resolve, reject) => {
    try {
      const plain = await crypto.subtle.decrypt(algorithm, cryptoKey, cipherConvertor ? cipherConvertor(cipher) : cipher)
      resolve(plainConvertor ? plainConvertor(plain) : plain)
    } catch (err) {
      console.error(`Fail to decrypt bytes!`, err)
      reject(new InvalidPassword(`Invalid password!`))
    }
  })
}

// export async function deriveAesKey(blockAddress) {
//   const ec = new elliptic.ec('secp256k1')
//   const priKeyEc = ec.keyFromPrivate(trimLeft(blockAddress.privateKey, '0x'), 'hex')
//   const pubKeyEc = ec.keyFromPublic(trimLeft(blockAddress.publicKey, '0x'), 'hex')
//   const deriveKey = priKeyEc.derive(pubKeyEc.getPublic())
//   const rawKey = new Uint8Array(deriveKey.toArray('be'))
//   // 是一种无填充（non-padding）的加密模式，无论原始数据长度大小，加密后的结果长度都会增加16个字节
//   const algorithm = {name: 'AES-GCM'}
//   return await crypto.subtle.importKey('raw', rawKey, algorithm, false, ['encrypt', 'decrypt'])
// }

// len 可以是128, 192, 或256比特
export function generateKey(name = 'AES-GCM', len = 256) {
  const algorithm = {name: name, length: len}
  return crypto.subtle.generateKey(algorithm, true, ['encrypt', 'decrypt'])
}

// 导入密钥
export function importRawKey(rawKey) {
  return crypto.subtle.importKey('raw', rawKey, 'AES-GCM', false, ['encrypt', 'decrypt',])
}

// 导出密钥
export function exportRawKey(cryptoKey) {
  return crypto.subtle.exportKey('raw', cryptoKey)
}

// export function encryptBytes(algorithm, cryptoKey, content, convertor = undefined) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const cipher = await crypto.subtle.encrypt(algorithm, cryptoKey, content)
//       // 加密返回的是ArrayBuffer类型，本身是一个通用的固定长度的原始二进制数据缓冲区，你不能直接从中读取内容，但可以用一个`TypedArray`视图
//       // 来解释这些二进制数据。`TypedArray`可以是`Uint8Array`、`Int8Array`、`Uint16Array`等等
//       resolve(convertor ? convertor(cipher) : cipher)
//     } catch (err) {
//       console.error(`Fail to encrypt bytes!`, err)
//       reject(new InvalidPassword(`Invalid password!`))
//     }
//   })
// }
//
// export function decryptBytes(algorithm, cryptoKey, content, convertor = undefined) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const plain = await crypto.subtle.decrypt(algorithm, cryptoKey, content)
//       resolve(convertor ? convertor(plain) : plain)
//     } catch (err) {
//       console.error(`Fail to decrypt bytes!`, err)
//       reject(new InvalidPassword(`Invalid password!`))
//     }
//   })
// }
//
// export function encryptString(algorithm, cryptoKey, content) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const cipher = await crypto.subtle.encrypt(algorithm, cryptoKey, encodeString(content))
//       resolve(encodeBase64(cipher))
//     } catch (err) {
//       console.error(`Fail to encrypt string!`, err)
//       reject(new InvalidPassword(`Invalid password!`))
//     }
//   })
// }
//
// export function decryptString(algorithm, cryptoKey, content) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const plain = await crypto.subtle.decrypt(algorithm, cryptoKey, decodeBase64(content))
//       resolve(decodeString(plain))
//     } catch (err) {
//       console.error(`Fail to decrypt string!`, err)
//       reject(new InvalidPassword(`Invalid password!`))
//     }
//   })
// }