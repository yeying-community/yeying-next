// 考虑浏览器可能多个人使用，一个人也可能有多个账号，每个账号背后都有一个身份，这个身份是数字世界的唯一证明，需要保持其独立性。在端上使用的身份
// 需要精细化管理，具有一下功能
// 1、分层缓存, 利用浏览器端的存储能力，比如cookie、session、local、indexeddb，来实现免登陆，避免频繁输入密码；
// 2、所有的密码的管理都是在端上完成，不会和后台服务器有任何交互，也就是密码完全由用户负责；
// 3、一个端上多个身份切换，任何时刻只有一个身份在起作用
// 4、对于不再端上使用的身份，能够一键清理不留痕迹；
import {SessionCache} from '../cache/session.js'
import {LocalCache} from '../cache/local.js'
import {InvalidPassword} from '../tool/error.js'
import {Account} from './model.js'
import {IdentityManager} from '../identity/manager.js'

export class AccountManager {
  constructor() {
    this.historyAccountKey = 'yeying-history-accounts'
    this.loginAccountKey = 'yeying-login-account'
    // 当前登陆账号
    this.sessionCache = new SessionCache()
    // 历史账号信息
    this.localCache = new LocalCache()
    // 缓存身份信息
    this.identityMap = {}
    // 身份管理
    this.identityManager = new IdentityManager()
  }

  // 当前浏览器中曾经登陆过的所有账号
  getHistoryAccounts() {
    return this.localCache.get(this.historyAccountKey, [])
  }

  // 当前激活的账号
  getActiveAccount() {
    return this.sessionCache.get(this.loginAccountKey)
  }

  // 当前激活的身份
  getActiveIdentity() {
    const activeAccount = this.getActiveAccount()
    if (activeAccount !== undefined) {
      return this.identityMap[activeAccount.did]
    } else {
      return undefined
    }
  }

  // 注销，清理登陆信息
  logout() {
    const activeAccount = this.sessionCache.get(this.loginAccountKey)
    if (activeAccount !== undefined) {
      delete this.identityMap[activeAccount.did]
      this.sessionCache.remove(this.loginAccountKey)
    }
  }

  // 清理缓存，清理当前浏览器中所有和这个身份相关信息
  clear(did) {

  }

  // 登陆，解密身份信息
  login(did, password) {
    return new Promise(async (resolve, reject) => {
      if (this.identityMap[did] !== undefined) {
        return resolve(this.identityMap[did])
      }

      // 加载身份信息
      let identity = undefined
      try {
        identity = await this.identityManager.getIdentity(did)
        identity = await this.identityManager.decryptIdentity(identity, password)
      } catch (err) {
        console.error(`Fail to decrypt identity=${did}`, err)
        reject(new InvalidPassword(`Invalid password!`))
      }

      // 缓存
      this.identityMap[did] = identity

      // 添加到历史账号中
      const account = this.#addAccount(identity.metadata.name, identity.metadata.did, identity.metadata.avatar)

      // 设置当前登陆帐户
      this.sessionCache.set(this.loginAccountKey, account)
      resolve(account)
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
}