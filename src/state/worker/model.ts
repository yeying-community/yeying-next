// export class WorkerResult {
//   constructor(status, operator, state) {
//     this.status = status
//     this.operator = operator
//     this.state = state
//   }
// }
//
// export class WorkerStatus {
//   constructor(code, message) {
//     this.code = code
//     this.message = message
//   }
// }
//
// export function success() {
//   return new WorkerStatus(StatusCode.SUCCESS)
// }
//
// export const StatusCode = {
//   SUCCESS: 1, // 成功
//   FAILURE: 2, // 失败
// }
//
//
// // 缓存记录了各种状态信息，缓存的依赖关系图：AccountState -> IdentityState -> ApplicationState -> UserState
// export const StateResultOperator = {
//   OVERWRITE: 1, // 之前在其他设备上使用过，首次在新的的设备上使用
//   SKIP: 2, // 当前设备的状态没有发生变化，同时和服务器上的状态保持一致
//   CREATE: 3, // 当前设备的状态发生变化，同时设备上的基线状态和服务器上最新的状态保持一致
//   MERGE: 4, // 当前设备的基线和服务器上最新的状态不一致
// }
