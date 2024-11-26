import {ApplicationData, Metadata, State, StateMessage,} from './model.js'
import {StateResultOperator, StatusCode} from './worker/model.js'
import {LocalCache} from '../cache/local.js'
import {Digest} from '../tool/digest.js'
import {encodeString} from '../tool/string.js'

export class ApplicationState {
  constructor(identity, application, store) {
    this.identity = identity
    this.application = application
    this.store = store

    const digest = new Digest()
    digest.update(encodeString(`${identity.blockAddress.identifier}${application.uid}`))
    this.assetId = digest.sum()
    this.cacheKey = `app-${this.assetId}`

    this.localCache = new LocalCache()
    this.state = this.localCache.get(this.cacheKey, new State(new Metadata(), new ApplicationData()))
    // 使用箭头函数保持对当前实例的引用
    this.timer = setInterval(() => this.#sync(), 15 * 60 * 1000)
  }

  // 当前状态
  current() {
    return this.state
  }

  #sync() {
    return new Promise((resolve, reject) => {
      console.log(`Start to sync application state`)
      const worker = new Worker(new URL('./worker/job.js', import.meta.url))

      const stateMessage = new StateMessage(
        this.assetId,
        this.state,
        this.store,
        this.identity.blockAddress,
        this.identity.extend.securityConfig.algorithm
      )

      worker.onmessage = (event) => {
        const workerResult = event.data
        if (workerResult.status.code !== StatusCode.SUCCESS) {
          reject(new Error(workerResult.status.message))
          return
        }

        const operator = workerResult.operator
        console.log(`The result operator of application state worker is ${operator}.`)
        switch (operator) {
          case StateResultOperator.CREATE:
            console.log('The state of application is created.')
            break
          case StateResultOperator.OVERWRITE:
          case StateResultOperator.MERGE:
            this.state = workerResult.state
            this.localCache.set(this.cacheKey, this.state)
            break
            console.log('The state of application is not changed, skip.')
            break
        }
        resolve()
      }

      // 触发消息
      worker.postMessage(stateMessage)
    })
  }
}