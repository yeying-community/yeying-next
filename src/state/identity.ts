// 处理身份的状态, 以实现跨端访问时尽可能显示一样的身份数据
// import {IdentityData, Metadata, State, StateMessage,} from './model'
// import {StateResultOperator, StatusCode} from './worker/model'
//
// import {Digest, Identity} from '@yeying-community/yeying-web3'
//
// /**
//  *
//  */
import { State } from './state'
import { IdentityManager } from '../identity/manager'

export class IdentityState extends State {
    identityManager: IdentityManager
    timer: number | NodeJS.Timeout

    constructor(stateId: string, identityManager: IdentityManager) {
        super(stateId)
        this.identityManager = identityManager
        // 使用箭头函数保持对当前实例的引用
        this.timer = setInterval(() => this.#sync(), 15 * 60 * 1000)
    }

    getStorageKey(key: string): string {
        return `s:${key}:${this.stateId}`
    }

    /**
     * 身份绑定的服务
     *
     * @param value 服务的元信息
     */
    setServices(value: any[]): void {
        return this.setList('services', value)
    }

    getServices(): any[] {
        return this.getList('services')
    }

    /**
     * 身份绑定的应用
     *
     * @param value 应用的元信息
     */
    setApplications(value: any[]): void {
        return this.setList('applications', value)
    }

    getApplications(): any[] {
        return this.getList('applications')
    }

    // 同步状态
    #sync() {
        return new Promise((resolve, reject) => {
            console.log(`Start to sync identity state`)
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
        })
    }
}
