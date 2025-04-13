import { CommandMessage, ProcessMessage } from '../model/common'
import { Processor } from './common'
import { AssetWorkerConfig, UploadAssetMessage } from '../model/asset'
import { Uploader } from '../../provider/warehouse/uploader'

export class UploadProcessor implements Processor {
    private uploader: Uploader | undefined

    constructor() {}

    async config(command: CommandMessage): Promise<ProcessMessage> {
        console.log(`upload worker config: ${JSON.stringify(command)}`)
        const config: AssetWorkerConfig = command.payload
        // 实现实际处理逻辑
        try {
            this.uploader = new Uploader(config.providerOption, config.securityAlgorithm)
        } catch (err) {
            console.error('new Uploader', err)
        }

        return { id: command.id, processType: 'COMPLETE' }
    }

    async start(command: CommandMessage): Promise<ProcessMessage> {
        console.log(`upload worker start: ${JSON.stringify(command)}`)
        // 实现实际处理逻辑
        const message: UploadAssetMessage = command.payload
        console.log(`upload worker start message: ${JSON.stringify(message)}`)

        return { id: command.id, processType: 'COMPLETE' }
    }

    async pause(command: CommandMessage): Promise<ProcessMessage> {
        console.log(`upload worker pause: ${JSON.stringify(command)}`)
        return { id: command.id, processType: 'COMPLETE' }
    }

    async abort(command: CommandMessage): Promise<ProcessMessage> {
        console.log(`upload worker abort: ${JSON.stringify(command)}`)
        return { id: command.id, processType: 'COMPLETE' }
    }

    async resume(command: CommandMessage): Promise<ProcessMessage> {
        console.log(`upload worker resume: ${JSON.stringify(command)}`)
        return { id: command.id, processType: 'COMPLETE' }
    }

    // 必须实现静态序列化方法
    static deserialize(): UploadProcessor {
        return new UploadProcessor()
    }
}

export class DownloadProcessor implements Processor {
    constructor() {}

    async config(command: CommandMessage): Promise<ProcessMessage> {
        console.log(`download worker config: ${JSON.stringify(command)}`)
        // 实现实际处理逻辑
        return { id: command.id, processType: 'COMPLETE' }
    }

    async start(command: CommandMessage): Promise<ProcessMessage> {
        console.log(`download worker start: ${JSON.stringify(command)}`)

        // 实现实际处理逻辑
        return { id: command.id, processType: 'COMPLETE' }
    }

    async pause(command: CommandMessage): Promise<ProcessMessage> {
        console.log(`download worker pause: ${JSON.stringify(command)}`)
        return { id: command.id, processType: 'COMPLETE' }
    }

    async abort(command: CommandMessage): Promise<ProcessMessage> {
        console.log(`download worker abort: ${JSON.stringify(command)}`)
        return { id: command.id, processType: 'COMPLETE' }
    }

    async resume(command: CommandMessage): Promise<ProcessMessage> {
        console.log(`download worker resume: ${JSON.stringify(command)}`)
        return { id: command.id, processType: 'COMPLETE' }
    }

    // 必须实现静态序列化方法
    static deserialize(): DownloadProcessor {
        return new DownloadProcessor()
    }
}
