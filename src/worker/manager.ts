import { createDynamicWorker, supportsTransferable } from './template'
import {
    CommandMessage,
    WorkerType,
    generateUuid,
    getModulePath,
    ProcessMessage,
    WorkerCallback,
    WorkerOption,
    WorkerState
} from '@yeying-community/yeying-client-ts'
import { IndexedCache } from '../cache/indexed'
import { getCurrentUtcString } from '@yeying-community/yeying-web3'

/**
 *
 * 管理主线程发起的worker任务，worker文件使用内联代码动态生成，以及在主线程中处理消息响应，具体的流程：
 *
 * 1、动态创建worker文件，用于和后台服务通信，比如下载和上传文件、同步状态，获取列表信息
 *
 * 2、worker响应消息分为主动消息和被动消息，主动消息是响应主线程发送的命令，被动消息是worker通知给主线程当前的进度和状态等信息
 *
 * 3、每个命令都有唯一ID，收到worker响应时，能够找到原始的命令，同时要考虑几种异常情况：
 *   1、如果页面刷新了，worker线程会终止，同时未处理的消息会丢失
 *   2、Blob Worker 默认无法使用 import 语句
 */

export class WorkerManager {
    private workers: Map<string, Worker> = new Map()
    private db: IndexedCache
    private tableName: string = 'state'
    private completeCallbacks: Map<string, WorkerCallback> = new Map()
    private errorCallbacks: Map<string, WorkerCallback> = new Map()
    private progressCallbacks: Map<string, WorkerCallback> = new Map()
    private commandCallbacks: Map<string, WorkerCallback> = new Map()
    private workerStates: Map<string, WorkerState> = new Map()
    private readonly workerOption: WorkerOption

    constructor(workerOption: WorkerOption) {
        this.db = new IndexedCache('workers')
        this.workerOption = workerOption
    }

    /**
     *
     * @param type
     * @param isPersisted
     * @param onComplete
     * @param onError
     * @param onProgress
     */
    public async createWorker(
        type: WorkerType,
        onComplete: WorkerCallback,
        onError: WorkerCallback,
        onProgress: WorkerCallback
    ): Promise<ProcessMessage> {
        return new Promise<ProcessMessage>(async (resolve, reject) => {
            let worker: Worker
            switch (type) {
                case 'UPLOAD_ASSET':
                    worker = createDynamicWorker('UploadProcessor', [
                        `import { UploadProcessor } from '${getModulePath('@yeying-community/yeying-client-ts')}';`
                    ])
                    break
                case 'DOWNLOAD_ASSET':
                    worker = createDynamicWorker('DownloadProcessor', [
                        `import { DownloadProcessor } from '${getModulePath('@yeying-community/yeying-client-ts')}';`
                    ])
                    break
                case 'SYNC_STATE':
                    worker = createDynamicWorker('StateProcessor', [
                        `import { StateProcessor } from '${getModulePath('@yeying-community/yeying-client-ts')}';`
                    ])
                    break
                default:
                    throw new Error(`Unsupported type: ${type}`)
            }

            const workerId: string = generateUuid()
            worker.onmessage = this.handleMessage.bind(this)
            worker.onerror = (err) => {
                console.error(`Worker=${workerId} error:`, err.message)
                this.handleError(workerId, err)
            }

            this.workers.set(workerId, worker)

            this.completeCallbacks.set(workerId, onComplete ?? WorkerManager.skipMessage)
            this.errorCallbacks.set(workerId, onError ?? WorkerManager.skipMessage)
            this.progressCallbacks.set(workerId, onProgress ?? WorkerManager.skipMessage)
            try {
                // 创建状态存储到数据库中
                await this.db.open([
                    {
                        name: this.tableName,
                        key: 'workerId',
                        autoIncrement: false,
                        indexes: [
                            {
                                keyPath: 'workerType',
                                name: 'workerType',
                                unique: false
                            }
                        ]
                    }
                ])

                // 初始化worker
                const msgId = generateUuid()
                await this.command(
                    {
                        workerId: workerId,
                        msgId: msgId,
                        commandType: 'INITIALIZE',
                        payload: this.workerOption
                    },
                    async (d) => {
                        console.log(`receive initialize!`)
                        const state: WorkerState = {
                            createdAt: getCurrentUtcString(),
                            data: undefined,
                            error: undefined,
                            progress: 0,
                            result: undefined,
                            retries: 0,
                            status: 'running',
                            updatedAt: getCurrentUtcString(),
                            workerType: type,
                            workerId: d.workerId
                        }

                        this.workerStates.set(workerId, state)
                        try {
                            await this.db.insert(this.tableName, state)
                        } finally {
                            resolve(d)
                        }
                    }
                )
                console.log(`create worker finished!`)
            } catch (err) {
                console.error(`Fail to initialize worker:${type}`, err)
                reject({ workerId: workerId, msgId: '', processType: 'ERROR', payload: err })
            }
        })
    }

    public getWorkerState(workerId: string): WorkerState | undefined {
        return this.workerStates.get(workerId)
    }

    public async abortWorker(workerId: string): Promise<ProcessMessage> {
        return new Promise<ProcessMessage>(async (resolve, reject) => {
            const msgId = generateUuid()
            await this.command(
                {
                    workerId: workerId,
                    msgId: msgId,
                    commandType: 'ABORT',
                    payload: ''
                },
                async (d) => {
                    console.log(`receive abort!`)
                    this.clearWorker(workerId)
                    resolve(d)
                }
            ).catch(reject)
        })
    }

    public clearWorker(workerId: string) {
        this.completeCallbacks.delete(workerId)
        this.errorCallbacks.delete(workerId)
        this.progressCallbacks.delete(workerId)
        this.workerStates.delete(workerId)
        this.workers.delete(workerId)
        this.db
            .deleteByKey(this.tableName, workerId)
            .then((v) => console.log(`Deleted from indexeddb, value=${JSON.stringify(v)}`))
            .catch((e) => console.error(e))
    }

    public async getWorkersByType(workerType: WorkerType): Promise<WorkerState[]> {
        // @ts-ignore, TODO: 如何解决这个问题
        return await this.db.indexAll(this.tableName, 'workerType', workerType)
    }

    private handleError(workerId: string, e: ErrorEvent) {
        this.errorCallbacks.get(workerId)?.({ workerId: workerId, msgId: '', processType: 'ERROR', payload: e.message })
        this.clearWorker(workerId)
    }

    /**
     * 在主线程中处理各种响应消息
     *
     * @param e - 主线程收到的Worker线程的响应事件
     *
     */
    private handleMessage(e: MessageEvent) {
        const { workerId, msgId, processType, payload } = e.data
        console.log(`Receive message, workerId=${workerId}, msgId=${msgId}, processType=${processType}`)
        const state = this.workerStates.get(workerId)

        switch (processType) {
            case 'RESPONSE':
                try {
                    this.commandCallbacks.get(msgId)?.(e.data)
                } finally {
                    this.commandCallbacks.delete(msgId)
                }
                break
            case 'PROGRESS':
                if (state !== undefined) {
                    state.progress = payload.progress
                    switch (state.workerType) {
                        case 'UPLOAD_ASSET':
                            state.data = state.data ?? []
                            state.data.push(payload.block)
                            break
                        case 'DOWNLOAD_ASSET':
                            state.data = state.data ?? []
                            state.data.push(payload.block)
                            break
                    }

                    this.db.updateByKey(this.tableName, state).catch((err) => console.error(err))
                }

                this.progressCallbacks.get(workerId)?.(e.data)
                break
            case 'ERROR':
                if (state !== undefined) {
                    state.status = 'failed'
                    state.error = payload
                    this.db.updateByKey(this.tableName, state).catch((err) => console.error(err))
                }

                this.errorCallbacks.get(workerId)?.(e.data)
                break
            case 'COMPLETE':
                try {
                    if (state !== undefined) {
                        state.status = 'completed'
                        state.result = payload
                        this.db.updateByKey(this.tableName, state).catch((err) => console.error(err))
                    }
                    this.completeCallbacks.get(workerId)?.(e.data)
                } finally {
                    this.clearWorker(workerId)
                }
                break
            default:
                this.errorCallbacks.get(workerId)?.(e.data)
                break
        }
    }

    /**
     * 主线程发起各种命令，可以是配置、开始、暂停、终止、重启等
     *
     * @param command - 命令信息
     * @param callback - 命令的直接回调函数
     * @param transfers - 零拷贝对象，避免在主线程和worker线程间拷贝数据：
     *   ArrayBuffer
     *   SharedArrayBuffer（受限）
     *   MessagePort
     *   ImageBitmap
     *   OffscreenCanvas
     *
     */
    async command(command: CommandMessage, callback?: WorkerCallback, transfers?: Transferable[]): Promise<void> {
        return new Promise((resolve, reject) => {
            const worker = this.workers.get(command.workerId)
            if (worker === undefined) {
                return reject(new Error('No such worker!'))
            }

            if (callback) {
                this.commandCallbacks.set(command.msgId, callback)
            }

            // 检测Transferable支持
            if (supportsTransferable() && transfers && transfers.length > 0) {
                console.log(`use transferable.`)
                worker.postMessage(command, transfers)
            } else {
                worker.postMessage(command)
                console.log(`not support transferable.`)
            }

            resolve()
        })
    }

    static skipMessage(message: ProcessMessage): void {
        console.log(`skip process message: ${JSON.stringify(message)}`)
    }
}
