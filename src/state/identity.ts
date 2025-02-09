// 处理身份的状态, 以实现跨端访问时尽可能显示一样的身份数据
// import {IdentityData, Metadata, State, StateMessage,} from './model'
// import {StateResultOperator, StatusCode} from './worker/model'
//
// import {Digest, Identity} from '@yeying-community/yeying-web3'
//
// /**
//  *
//  */
// export class IdentityState {
//   identity: Identity
//
//   constructor(identity: Identity) {
//     this.identity = identity
//
//     const digest = new Digest()
//     digest.update(encodeString(identity.blockAddress.identifier))
//     this.assetId = digest.sum()
//
//     this.cacheKey = `id-${this.assetId}`
//     this.localCache = new LocalCache()
//     this.state = this.localCache.get(this.cacheKey, new State(new Metadata(), new IdentityData()))
//
//     // 使用箭头函数保持对当前实例的引用
//     this.timer = setInterval(() => this.#sync(), 15 * 60 * 1000)
//   }
//
//   setStore(store) {
//
//   }
//
//   // 当前状态
//   current() {
//     return this.state
//   }
//
//   // 同步状态
//   #sync() {
//     return new Promise((resolve, reject) => {
//       console.log(`Start to sync identity state`)
//       const worker = new Worker(new URL('./worker/job.js', import.meta.url))
//
//       const stateMessage = new StateMessage(
//         this.assetId,
//         this.state,
//         this.store,
//         this.identity.blockAddress,
//         this.identity.extend.securityConfig.algorithm
//       )
//
//       worker.onmessage = (event) => {
//         const workerResult = event.data
//         if (workerResult.status.code !== StatusCode.SUCCESS) {
//           reject(new Error(workerResult.status.message))
//           return
//         }
//
//         const operator = workerResult.operator
//         switch (operator) {
//           case StateResultOperator.CREATE:
//             console.log('The state of identity is created in backend.')
//             break
//           case StateResultOperator.OVERWRITE:
//           case StateResultOperator.MERGE:
//             this.state = workerResult.state
//             this.localCache.set(this.cacheKey, this.state)
//             break
//           case StateResultOperator.SKIP:
//             console.log('The state of identity is not changed, skip.')
//             break
//         }
//         resolve()
//       }
//
//       // 触发消息
//       worker.postMessage(stateMessage)
//     })
//   }
// }
