import {getCurrentUtcString} from '../../../tool/date.js'

export function StateMessage(assetId, workerType, state, store, blockAddress, algorithm) {
  // 状态资产id
  this.assetId = assetId
  // 当前状态信息
  this.state = state
  // 状态存储提供者
  this.store = store
  // 区块链地址
  this.blockAddress = blockAddress
  // 状态加密算法
  this.algorithm = algorithm
}

// 状态是由元信息和状态数据组成
export function State(metadata, data) {
  this.metadata = metadata
  this.data = data
}

// 状态元信息
export function Metadata(parent, assetId, version, merkleTree, checkpoint, signature) {
  // 状态作为个人资产，也会有一个唯一id
  this.assetId = assetId
  // 状态的版本号，只会按顺序增加
  this.version = version
  // 前一个状态的默克尔根
  this.parent = parent
  // 状态的默克尔树
  this.merkleTree = merkleTree
  // 快照的时间点
  this.checkpoint = checkpoint ? checkpoint : getCurrentUtcString()
  // 当前状态的数字签名
  this.signature = signature
}

// 身份状态数据，身份关联到某个节点就可以参与到网络活动，节点服务作为跳板完成和网络的连接，背后的实际连接其实是应用和服务的选择
export function IdentityData(metadata, services, users, applications) {
  // 身份元信息
  this.metadata = metadata
  // 使用的服务, code和service元信息数组的映射
  this.services = services
  // 服务的用户信息
  this.users = users
  // 使用的应用uid列表
  this.applicatinons = applications
  // 状态的创建时间
  this.created = getCurrentUtcString()
}

// 应用状态数据，每个身份都有一个独立的应用状态，里面记录了该身份使用过的各种应用状态信息, 构造成默克尔树，用于不同端设备间快速同步和合并数据
export function ApplicationData(metadata, account, useState, config, selected, data) {
  // 应用元信息
  this.metadata = metadata
  // 应用的帐户
  this.account = account
  // 应用配置
  this.config = config ? config : {}
  // 应用绑定的服务
  this.services = {}
  // 应用的选择数据，是一个KV存储，记录当前用户做的各种选择。
  this.selected = selected ? selected : {}
  // 应用的使用数据，会持续膨胀，则存储到后端存储，需要的时候才取，是一个KV存储，value存储的是访问地址和哈希值
  this.data = data ? data : {}
  // 在端上首次创建的时间
  this.created = getCurrentUtcString()
}
