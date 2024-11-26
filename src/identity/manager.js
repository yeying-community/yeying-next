import {LocalCache} from '../cache/local.js'
import {convertCryptoAlgorithmFromAlgorithm, convertDidToPublicKey, Identity} from './model.js'
import {cloneObject, sortKeys, updateNestedObject} from '../tool/object.js'
import {AlreadyExist, DataForgery, InvalidPassword, NotFound} from '../tool/error.js'
import {decryptObject, deriveRawKeyFromPassword, encryptObject} from '../tool/crypto.js'
import {decodeString, encodeString} from '../tool/string.js'
import {decodeBase64, encodeBase64} from '../tool/codec.js'
import {computeHash} from '../tool/digest.js'
import {sign, verify} from '../tool/signature.js'


export class IdentityManager {
  constructor() {
    // 存放历史的身份信息
    this.localCache = new LocalCache()
  }

  createNewIdentity(metadata, blockAddress, extend, password) {
    return new Promise(async (resolve, reject) => {
      let identity = new Identity(metadata, blockAddress, extend)
      // 加密
      try {
        identity = await this.encryptIdentity(identity, password)
      } catch (err) {
        return reject(err)
      }

      // 缓存身份
      this.localCache.set(metadata.did, identity)
      resolve(identity)
    })
  }

  // 加密身份
  encryptIdentity(identity, password) {
    return new Promise(async (resolve, reject) => {
      // 加密
      const privateKey = identity?.blockAddress?.privateKey
      try {
        const algorithm = convertCryptoAlgorithmFromAlgorithm(identity.extend['securityConfig']['algorithm'])
        identity.blockAddress = await this.#encryptBlockAddress(identity.blockAddress, algorithm, password)
      } catch (err) {
        console.error(`Fail to encrypt identity=${JSON.stringify(identity)} when adding identity!`, err)
        return reject(new DataForgery('Invalid identity!'))
      }

      // 添加签名
      try {
        await this.#signIdentity(identity, privateKey)
      } catch (err) {
        return reject(new DataForgery('Invalid identity!'))
      }
      resolve(identity)
    })
  }

  // 解密密身份
  decryptIdentity(identity, password) {
    return new Promise(async (resolve, reject) => {
      // 验证身份
      const isValid = await this.#verifyIdentity(identity)
      if (!isValid) {
        return reject(new DataForgery('Invalid identity!'))
      }

      // 解密
      try {
        const algorithm = convertCryptoAlgorithmFromAlgorithm(identity.extend['securityConfig']['algorithm'])
        identity.blockAddress = await this.#decryptBlockAddress(identity.blockAddress, algorithm, password)
      } catch (err) {
        console.error(`Fail to decrypt identity=${did}`, err)
        reject(new InvalidPassword(`Invalid password!`))
      }
      resolve(identity)
    })
  }

  // 获取身份
  getIdentity(did) {
    return new Promise(async (resolve, reject) => {
      // 查看当前对象里面是否已经缓存了
      const identity = this.localCache.get(did)
      if (identity === undefined) {
        return reject(new NotFound(`Not found=${did}`))
      }

      // 验证身份
      const isValid = await this.#verifyIdentity(identity)
      if (!isValid) {
        return reject(new DataForgery('Invalid identity!'))
      } else {
        resolve(identity)
      }
    })
  }

  // 更换密码
  changePassword(did, oldPassword, newPassword) {
    return new Promise(async (resolve, reject) => {
      let identity = this.localCache.get(did)
      if (identity === undefined) {
        return reject(new NotFound(`Not found identity=${did}`))
      }

      // 解密
      try {
        identity = await this.decryptIdentity(identity, oldPassword)
      } catch (err) {
        console.error(`Fail to decrypt identity=${did} when changing password`, err)
        return reject(new InvalidPassword(`Invalid old password!`))
      }

      // 加密
      try {
        identity = await this.encryptIdentity(identity, newPassword)
      } catch (err) {
        console.error(`Fail to encrypt identity=${did} with new password!`, err)
        return reject(new InvalidPassword(`Invalid new password!`))
      }

      this.localCache.set(did, identity)
      resolve(identity)
    })
  }

  // 更新身份元信息
  updateIdentityMetadata(did, metadata, password) {
    return new Promise(async (resolve, reject) => {
      let identity = this.localCache.get(did)
      if (identity === undefined) {
        return reject(new NotFound(`Not found identity=${did}`))
      }

      // 解密
      try {
        identity = await this.decryptIdentity(identity, password)
      } catch (err) {
        console.error(`Fail to decrypt identity=${did} when updating identity metadata!`, err)
        return reject(new InvalidPassword(`Invalid password!`))
      }

      updateNestedObject(identity.metadata, metadata)

      // 加密
      try {
        identity = await this.encryptIdentity(identity, password)
      } catch (err) {
        console.error(`Fail to encrypt identity=${did} when changing identity metadata!`, err)
        return reject(new InvalidPassword(`Invalid password!`))
      }

      this.localCache.set(did, identity)
      resolve(identity)
    })
  }

  // 更新身份扩展信息
  updateIdentityExtend(did, extend, password) {
    return new Promise(async (resolve, reject) => {
      let identity = this.localCache.get(did)
      if (identity === undefined) {
        return reject(new NotFound(`Not found identity=${did}`))
      }

      // 解密
      try {
        identity = await this.decryptIdentity(identity, password)
      } catch (err) {
        console.error(`Fail to decrypt identity=${did} when updating identity extend!`, err)
        return reject(new InvalidPassword(`Invalid password!`))
      }

      updateNestedObject(identity.extend, extend)

      // 加密
      try {
        identity = await this.encryptIdentity(identity, password)
      } catch (err) {
        console.error(`Fail to encrypt identity=${did} when changing identity extend!`, err)
        return reject(new InvalidPassword(`Invalid password!`))
      }

      this.localCache.set(did, identity)
      resolve(identity)
    })
  }

  // 增加身份
  addIdentity(identity) {
    return new Promise(async (resolve, reject) => {
      // 查看当前对象里面是否已经缓存了
      const existing = this.localCache.get(identity.metadata.did)
      if (existing) {
        console.log(`existing=${JSON.stringify(existing)}, identity=${JSON.stringify(identity)}`)
        return reject(new AlreadyExist(`Exist identity=${identity.name}`))
      }

      // 验证身份
      const isValid = await this.#verifyIdentity(identity)
      if (!isValid) {
        return reject(new DataForgery('Invalid identity!'))
      }

      // 添加身份
      this.localCache.set(identity.metadata.did, identity)
      resolve(identity)
    })
  }

  async #encryptBlockAddress(blockAddress, algorithm, password) {
    const cryptoKey = await deriveRawKeyFromPassword(password)
    const plainConvertor = d => encodeString(JSON.stringify(sortKeys(d)))
    const cipherConvertor = r => encodeBase64(r)
    return await encryptObject(algorithm, cryptoKey, blockAddress, plainConvertor, cipherConvertor)
  }

  async #decryptBlockAddress(blockAddress, algorithm, password) {
    const cryptoKey = await deriveRawKeyFromPassword(password)
    const cipherConvertor = (d) => decodeBase64(d)
    const plainConvertor = (r) => JSON.parse(decodeString(r))
    return await decryptObject(algorithm, cryptoKey, blockAddress, cipherConvertor, plainConvertor)
  }

  async #signIdentity(identity, privateKey) {
    identity.signature = undefined
    const hashBytes = await computeHash(encodeString(JSON.stringify(sortKeys(identity))))
    identity.signature = sign(privateKey, hashBytes)
  }

  async #verifyIdentity(identity) {
    // 从did身份中获取公钥
    const publicKey = convertDidToPublicKey(identity.metadata.did)
    const newIdentity = cloneObject(identity)
    newIdentity.signature = undefined
    const hashBytes = await computeHash(encodeString(JSON.stringify(sortKeys(newIdentity))))
    return verify(publicKey, hashBytes, identity.signature)
  }
}