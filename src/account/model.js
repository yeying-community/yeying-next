export class Account {
  constructor(name, did, avatar) {
    // 身份名称
    this.name = name
    // 身份DID
    this.did = did
    // 头像
    this.avatar = avatar
    // 首次添加或者最近一次登陆的时间点
    this.timestamp = Date.now()
  }
}