// 考虑浏览器可能多个人使用，一个人也可能有多个账号，每个账号背后都有一个身份，这个身份是数字世界的唯一证明，需要保持其独立性。在端上使用的身份
// 需要精细化管理，具有一下功能
// 1、分层缓存, 利用浏览器端的存储能力，比如cookie、session、local、indexeddb，来实现免登陆，避免频繁输入密码；
// 2、所有的密码的管理都是在端上完成，不会和后台服务器有任何交互，也就是密码完全由用户负责；
// 3、一个端上多个身份切换，任何时刻只有一个身份在起作用
// 4、对于不再端上使用的身份，能够一键清理不留痕迹；
import {SessionCache} from '../cache/session.js'
import {LocalCache} from '../cache/local.js'
import {AlreadyExist, DataForgery, InvalidPassword, NotFound} from '../common/error.js'
import {convertCryptoAlgorithmFromIdentity, convertDidToPublicKey} from '../identity/model.js'
import {cloneObject, sortKeys} from '../common/object.js'
import {decryptObject, deriveRawKeyFromPassword, encryptObject} from '../common/crypto.js'
import {decodeBase64, encodeBase64} from '../common/codec.js'
import {decodeString, encodeString} from '../common/string.js'
import {computeHash} from '../common/digest.js'
import {sign, verify} from '../common/signature.js'
import {Account} from './model.js'

export class AccountManager {
  constructor() {
    this.historyAccountKey = 'yeying-history-accounts'
    this.loginAccountKey = 'yeying-login-account'
    // 存放当前登陆的账号
    this.sessionCache = new SessionCache()
    // 存放历史的账号信息
    this.localCache = new LocalCache()
    // 身份信息不能使用缓存，还是直接存储在内存中
    this.identityMap = {}
  }

  getHistoryAccounts() {
    return this.localCache.get(this.historyAccountKey, [])
  }

  getActiveAccount() {
    return this.sessionCache.get(this.loginAccountKey)
  }

  getActiveIdentity() {
    const activeAccount = this.getActiveAccount()
    if (activeAccount !== undefined) {
      return this.identityMap[activeAccount.did]
    }
  }

  active(did, password) {
    return new Promise(async (resolve, reject) => {
      if (this.identityMap[did] !== undefined) {
        return resolve(this.identityMap[did])
      }

      // 从本地缓存获取身份信息
      const identity = this.localCache.get(did)
      if (identity === undefined) {
        return reject(new NotFound(`Not found=${did}`))
      }

      // 验证身份
      const isValid = await this.#verify(identity)
      if (!isValid) {
        return reject(new DataForgery('Invalid identity!'))
      }

      // 解密
      try {
        identity.blockAddress = await this.#decrypt(identity.blockAddress, convertCryptoAlgorithmFromIdentity(identity), password)
      } catch (err) {
        console.error(`Fail to decrypt identity=${did}`, err)
        reject(new InvalidPassword(`Invalid password!`))
      }

      // 缓存
      this.identityMap[did] = identity

      // 添加到历史账号中
      const account = this.#addAccount(identity.metadata.name, identity.metadata.did, identity.metadata.extend.avatar)

      // 设置当前登陆帐户
      this.sessionCache.set(this.loginAccountKey, account)
      resolve(account)
    })
  }

  changePassword(account, oldPassword, newPassword) {
    return new Promise(async (resolve, reject) => {
      const identity = this.localCache.get(account.did)
      if (identity === undefined) {
        return reject(new NotFound(`Not found=${account.name}`))
      }

      // 验证签名
      const isValid = await this.#verify(identity)
      if (!isValid) {
        return reject(new DataForgery('Data corrupted!'))
      }

      const algorithm = convertCryptoAlgorithmFromIdentity(identity)
      // 解密
      try {
        identity.blockAddress = await this.#decrypt(identity.blockAddress, algorithm, oldPassword)
      } catch (err) {
        console.error(`Fail to decrypt identity=${account.did}`, err)
        return reject(new InvalidPassword(`Invalid old password!`))
      }

      const privateKey = identity.blockAddress.privateKey
      // 加密
      try {
        identity.blockAddress = await this.#encrypt(identity.blockAddress, algorithm, newPassword)
      } catch (err) {
        console.error(`Fail to encrypt identity=${account.did} when changing password!`, err)
        return reject(new InvalidPassword(`Invalid new password!`))
      }

      // 添加签名
      try {
        await this.#sign(identity, privateKey)
      } catch (err) {
        return reject(new DataForgery('Invalid identity!'))
      }

      resolve(identity)
    })
  }

  getIdentity(did) {
    return this.identityMap[did]
  }

  addIdentity(plainIdentity, password) {
    return new Promise(async (resolve, reject) => {
      const algorithm = convertCryptoAlgorithmFromIdentity(plainIdentity)

      const identity = cloneObject(plainIdentity)

      // 加密
      try {
        identity.blockAddress = await this.#encrypt(identity.blockAddress, algorithm, password)
      } catch (err) {
        console.error(`Fail to encrypt identity=${JSON.stringify(identity)} when adding identity!`, err)
        return reject(new DataForgery('Invalid identity!'))
      }

      // 添加签名
      try {
        await this.#sign(identity, plainIdentity.blockAddress.privateKey)
      } catch (err) {
        return reject(new DataForgery('Invalid identity!'))
      }

      // 添加身份
      this.localCache.set(identity.metadata.did, identity)
      this.#addAccount(identity.metadata.name, identity.metadata.did, identity.metadata.extend.avatar)
      resolve(identity)
    })
  }

  importIdentity(identity) {
    return new Promise(async (resolve, reject) => {
      // 查看当前对象里面是否已经缓存了
      const existing = this.localCache.get(identity.metadata.did)
      console.log(`existing=${JSON.stringify(existing)}, identity=${JSON.stringify(identity)}`)
      if (existing) {
        return reject(new AlreadyExist(`Exist identity=${identity.name}`))
      }

      // 验证身份
      const isValid = await this.#verify(identity)
      if (!isValid) {
        return reject(new DataForgery('Invalid identity!'))
      }

      // 添加身份
      this.localCache.set(identity.metadata.did, identity)

      // 添加帐户信息
      resolve(this.#addAccount(identity.metadata.name, identity.metadata.did, identity.metadata.extend.avatar))
    })
  }

  exportIdentity(account) {
    return new Promise(async (resolve, reject) => {
      // 查看当前对象里面是否已经缓存了
      const identity = this.localCache.get(account.did)
      if (identity === undefined) {
        return reject(new NotFound(`Not found=${account.name}`))
      }

      // 验证身份
      const isValid = await this.#verify(identity)
      if (!isValid) {
        return reject(new DataForgery('Invalid identity!'))
      } else {
        resolve(identity)
      }
    })
  }

  #addAccount(name, did, avatar) {
    const historyAccounts = this.localCache.get(this.historyAccountKey, [])
    const account = new Account(name, did, avatar)

    const index = historyAccounts.findIndex(i => i.did === did)
    if (index !== -1) {
      historyAccounts[index] = account
    } else {
      historyAccounts.push(account)
    }

    this.localCache.set(this.historyAccountKey, historyAccounts)
    return account
  }

  async #encrypt(blockAddress, algorithm, password) {
    const cryptoKey = await deriveRawKeyFromPassword(password)
    const plainConvertor = d => encodeString(JSON.stringify(sortKeys(d)))
    const cipherConvertor = r => encodeBase64(r)
    return await encryptObject(algorithm, cryptoKey, blockAddress, plainConvertor, cipherConvertor)
  }

  async #decrypt(blockAddress, algorithm, password) {
    const cryptoKey = await deriveRawKeyFromPassword(password)
    const cipherConvertor = (d) => decodeBase64(d)
    const plainConvertor = (r) => JSON.parse(decodeString(r))
    return await decryptObject(algorithm, cryptoKey, blockAddress, cipherConvertor, plainConvertor)
  }

  async #sign(identity, privateKey) {
    identity.metadata.extend.signature = undefined
    const hashBytes = await computeHash(encodeString(JSON.stringify(sortKeys(identity))))
    identity.metadata.extend.signature = sign(privateKey, hashBytes)
  }

  async #verify(identity) {
    // 从did身份中获取公钥
    const publicKey = convertDidToPublicKey(identity.metadata.did)
    const newIdentity = cloneObject(identity)
    newIdentity.metadata.extend.signature = undefined
    const hashBytes = await computeHash(encodeString(JSON.stringify(sortKeys(newIdentity))))
    return verify(publicKey, hashBytes, identity.metadata.extend.signature)
  }
}