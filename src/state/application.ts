// import {ApplicationData, Metadata, State, StateMessage,} from './model'
// import {StateResultOperator, StatusCode} from './worker/model'
//
// import {AccountManager} from "../account/manager";
// import {Digest} from "@yeying-community/yeying-web3";
// import {ApplicationMetadata} from "../yeying/api/application/application_pb";
//
import { IdentityManager } from '../identity/manager'
import { State } from './state'
import { ApplicationMetadata } from '@yeying-community/yeying-client-ts'

export class ApplicationState extends State {
    metadata: ApplicationMetadata
    timer: number | NodeJS.Timeout

    constructor(stateId: string, metadata: ApplicationMetadata) {
        super(stateId)
        this.metadata = metadata
        // 使用箭头函数保持对当前实例的引用
        this.timer = setInterval(() => this.#sync(), 15 * 60 * 1000)
    }

    getStorageKey(key: string): string {
        return `a:${key}:${this.stateId}`
    }

    /**
     * 应用绑定的服务
     *
     * @param value 服务的元信息
     */
    setServices(value: any[]): void {
        return this.setList('services', value)
    }

    getServices(): any[] {
        return this.getList('services')
    }

    #sync() {
        return new Promise((resolve, reject) => {
            console.log(`Start to sync application state`)
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
            //         console.log(`The result operator of application state worker is ${operator}.`)
            //         switch (operator) {
            //           case StateResultOperator.CREATE:
            //             console.log('The state of application is created.')
            //             break
            //           case StateResultOperator.OVERWRITE:
            //           case StateResultOperator.MERGE:
            //             this.state = workerResult.state
            //             this.localCache.set(this.cacheKey, this.state)
            //             break
            //             console.log('The state of application is not changed, skip.')
            //             break
            //         }
            //         resolve()
            //       }
            //
            //       // 触发消息
            //      worker.postMessage(stateMessage)
        })
    }
}
