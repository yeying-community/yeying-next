import {CommandMessage, CommonConfig, ProcessMessage, WorkerCallback, WorkerOption} from '../model/common'
import {Processor} from './common'
import {UploadAssetMessage} from '../model/asset'

export class UploadProcessor implements Processor {
    //@ts-ignore, 当前定义的类是动态创建，这个类需要通过url传入进来
    private uploader: Uploader | undefined
    // 设置回调函数, 用于通知worker结束，或者中间状态
    private readonly callback: WorkerCallback

    constructor(callback: WorkerCallback) {
        this.callback = callback
    }

    async initialize(c: CommandMessage): Promise<ProcessMessage> {
        console.log(`initialize worker: ${JSON.stringify(c)}`)
        const config: WorkerOption = c.payload
        //@ts-ignore, 当前定义的类是动态创建，这个类需要通过url传入进来
        this.uploader = new Uploader(config.providerOption, config.securityAlgorithm)
        return {workerId: c.workerId, msgId: c.msgId, processType: 'RESPONSE'}
    }

    async config(c: CommandMessage): Promise<ProcessMessage> {
        console.log(`upload worker config: ${JSON.stringify(c)}`)
        const config: CommonConfig = c.payload
        return {workerId: c.workerId, msgId: c.msgId, processType: 'RESPONSE'}
    }

    async start(c: CommandMessage): Promise<ProcessMessage> {
        console.log(`upload worker start: ${JSON.stringify(c)}`)
        // 实现实际处理逻辑
        const message: UploadAssetMessage = c.payload
        //@ts-ignore, 当前定义的类是动态创建，这个类需要通过url传入进来
        this.uploader.upload(message.namespaceId, message.file, message.encrypted)
            .then((a: any) => this.callback({workerId: c.workerId, msgId: c.msgId, processType: 'COMPLETE', payload: a}))
            .catch((e: { message: any }) => this.callback({workerId: c.workerId, msgId: c.msgId, processType: 'ERROR', payload: e.message}))
        console.log(`upload worker start message: ${JSON.stringify(message)}`)
        return {workerId: c.workerId, msgId: c.msgId, processType: 'RESPONSE'}
    }

    async pause(c: CommandMessage): Promise<ProcessMessage> {
        console.log(`upload worker pause: ${JSON.stringify(c)}`)
        return {workerId: c.workerId, msgId: c.msgId, processType: 'RESPONSE'}
    }

    async abort(c: CommandMessage): Promise<ProcessMessage> {
        console.log(`upload worker abort: ${JSON.stringify(c)}`)
        return {workerId: c.workerId, msgId: c.msgId, processType: 'RESPONSE'}
    }

    async resume(c: CommandMessage): Promise<ProcessMessage> {
        console.log(`upload worker resume: ${JSON.stringify(c)}`)
        return {workerId: c.workerId, msgId: c.msgId, processType: 'RESPONSE'}
    }

    // 必须实现静态序列化方法
    static deserialize(callback: WorkerCallback): UploadProcessor {
        return new UploadProcessor(callback)
    }
}

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
        return {workerId: c.workerId, msgId: c.msgId, processType: 'RESPONSE'}
    }

    async config(c: CommandMessage): Promise<ProcessMessage> {
        console.log(`download worker config: ${JSON.stringify(c)}`)
        const config: CommonConfig = c.payload
        // 实现实际处理逻辑
        try {
            //@ts-ignore
            this.uploader = new Uploader(config.providerOption, config.securityAlgorithm)
        } catch (err) {
            console.error('new Uploader', err)
        }

        // 实现实际处理逻辑
        return {workerId: c.workerId, msgId: c.msgId, processType: 'RESPONSE'}
    }

    async start(c: CommandMessage): Promise<ProcessMessage> {
        console.log(`download worker start: ${JSON.stringify(c)}`)
        // TODO: 加载续传信息

        // 实现实际处理逻辑
        return {workerId: c.workerId, msgId: c.msgId, processType: 'RESPONSE'}
    }

    async pause(c: CommandMessage): Promise<ProcessMessage> {
        console.log(`download worker pause: ${JSON.stringify(c)}`)
        return {workerId: c.workerId, msgId: c.msgId, processType: 'RESPONSE'}
    }

    async abort(c: CommandMessage): Promise<ProcessMessage> {
        console.log(`download worker abort: ${JSON.stringify(c)}`)
        return {workerId: c.workerId, msgId: c.msgId, processType: 'RESPONSE'}
    }

    async resume(c: CommandMessage): Promise<ProcessMessage> {
        console.log(`download worker resume: ${JSON.stringify(c)}`)
        return {workerId: c.workerId, msgId: c.msgId, processType: 'RESPONSE'}
    }

    // 必须实现静态序列化方法
    static deserialize(callback: WorkerCallback): DownloadProcessor {
        return new DownloadProcessor(callback)
    }
}
