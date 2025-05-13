import { CommandMessage, CommonConfig, ProcessMessage, WorkerCallback, WorkerOption } from '../model/common'
import { Processor } from './common'
import { DownloadAssetMessage } from '../model/asset'

export class DownloadProcessor implements Processor {
    //@ts-ignore
    private downloader: Downloader | undefined
    // 设置回调函数, 用于通知worker结束，或者中间状态
    private readonly callback: WorkerCallback

    constructor(callback: WorkerCallback) {
        this.callback = callback
    }

    async initialize(c: CommandMessage): Promise<ProcessMessage> {
        console.log(`initialize worker: ${JSON.stringify(c)}`)
        const config: WorkerOption = c.payload
        //@ts-ignore, 当前定义的类是动态创建，这个类需要通过url传入进来
        this.downloader = new Downloader(config.providerOption, config.securityAlgorithm)
        return { workerId: c.workerId, msgId: c.msgId, processType: 'RESPONSE' }
    }

    async config(c: CommandMessage): Promise<ProcessMessage> {
        console.log(`download worker config: ${JSON.stringify(c)}`)
        const config: CommonConfig = c.payload
        return { workerId: c.workerId, msgId: c.msgId, processType: 'RESPONSE' }
    }

    async start(c: CommandMessage): Promise<ProcessMessage> {
        console.log(`download worker start: ${JSON.stringify(c)}`)
        const message: DownloadAssetMessage = c.payload
        const success = (a: any) =>
            this.callback(
                { workerId: c.workerId, msgId: c.msgId, processType: 'COMPLETE', payload: a },
                message.merged ? [a.data] : undefined
            )
        const error = (e: any) =>
            this.callback({ workerId: c.workerId, msgId: c.msgId, processType: 'ERROR', payload: e.message })
        const callback = message.merged
            ? undefined
            : (b: any, d: any) =>
                  this.callback(
                      { workerId: c.workerId, msgId: c.msgId, processType: 'DATA', payload: { block: b, data: d } },
                      [d]
                  )
        const progress = (e: any) =>
            this.callback({ workerId: c.workerId, msgId: c.msgId, processType: 'PROGRESS', payload: e })
        this.downloader.download(message.namespaceId, message.hash, progress, callback).then(success).catch(error)
        return { workerId: c.workerId, msgId: c.msgId, processType: 'RESPONSE' }
    }

    async pause(c: CommandMessage): Promise<ProcessMessage> {
        console.log(`download worker pause: ${JSON.stringify(c)}`)
        return { workerId: c.workerId, msgId: c.msgId, processType: 'RESPONSE' }
    }

    async abort(c: CommandMessage): Promise<ProcessMessage> {
        console.log(`download worker abort: ${JSON.stringify(c)}`)
        return { workerId: c.workerId, msgId: c.msgId, processType: 'RESPONSE' }
    }

    async resume(c: CommandMessage): Promise<ProcessMessage> {
        console.log(`download worker resume: ${JSON.stringify(c)}`)
        return { workerId: c.workerId, msgId: c.msgId, processType: 'RESPONSE' }
    }

    // 必须实现静态序列化方法
    static deserialize(callback: WorkerCallback): DownloadProcessor {
        return new DownloadProcessor(callback)
    }
}
