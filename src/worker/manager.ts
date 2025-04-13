import { createDynamicWorker } from './template'
import { DownloadProcessor, UploadProcessor } from './processor/asset'
import { CallbackFunction, CommandMessage, CommandType, ProcessMessage, WorkerType } from './model/common'
import { StateProcessor } from './processor/state'
import { generateUuid } from '../common/string'
import { getDownloadDependencies, getUploadDependencies } from './model/asset'

/**
 *
 * 管理主线程发起的worker任务，worker文件使用内联代码动态生成，以及在主线程中处理消息响应，具体的流程：
 * 1、动态创建worker文件，用于和后台服务通信，比如下载和上传文件、同步状态，获取列表信息
 * 2、worker响应消息分为主动消息和被动消息，主动消息是响应主线程发送的命令，被动消息是worker通知给主线程当前的进度和状态等信息
 * 3、每个命令都有唯一ID，收到worker响应时，能够找到原始的命令，同时要考虑几种异常情况：
 *   1、如果页面刷新了，worker线程会终止，同时未处理的消息会丢失
 *   2、Blob Worker 默认无法使用 import 语句
 *
 */

export class WorkerManager {
    private worker: Worker

    private callbacks: Map<string, CallbackFunction> = new Map<string, CallbackFunction>()

    constructor(type: WorkerType) {
        switch (type) {
            case 'UPLOAD_ASSET':
                this.worker = createDynamicWorker(UploadProcessor.toString(), getUploadDependencies())
                break
            case 'DOWNLOAD_ASSET':
                this.worker = createDynamicWorker(DownloadProcessor.toString(), getDownloadDependencies())
                break
            case 'SYNC_STATE':
                this.worker = createDynamicWorker(StateProcessor.toString())
                break
            default:
                throw new Error(`Unsupported type: ${type}`)
        }

        this.worker.onmessage = this.handleMessage.bind(this)
        this.worker.onerror = (err) => {
            console.error('Worker error:', err.message)
        }
    }

    /**
     * 在主线程中处理各种响应消息
     *
     * @param e 主线程收到的Worker线程的响应事件
     *
     * @private
     */
    private handleMessage(e: MessageEvent) {
        console.log(`response =${JSON.stringify(e.data)}`)
        const { id, processType } = e.data
        try {
            switch (processType) {
                case 'PROGRESS':
                    this.callbacks.get(id)?.progress?.(e.data)
                    break
                default:
                    this.callbacks.get(id)?.callback?.(e.data)
                    break
            }
        } finally {
            this.callbacks.delete(id)
        }
    }

    /**
     * 创建命令
     *
     * @param commandType
     * @param payload
     */
    static createCommand(commandType: CommandType, payload: any): CommandMessage {
        return { id: generateUuid(), commandType: commandType, payload: payload }
    }

    /**
     * 主线程发起各种命令，可以是配置、开始、暂停、终止、重启等
     *
     * @param command 命令
     * @param progressCallback 进度回调
     *
     */
    async command(command: CommandMessage): Promise<ProcessMessage> {
        return new Promise((resolve, reject) => {
            this.callbacks.set(command.id, {
                callback: (m: ProcessMessage) => (m.processType !== 'ERROR' ? resolve(m) : reject(m)),
                progress: command.progress
            })

            this.worker.postMessage(command)
        })
    }
}
