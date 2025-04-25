import { WorkerConfig } from './common'
import { SecurityAlgorithm } from '@yeying-community/yeying-web3/dist/yeying/api/web3/web3'
import { Downloader, Uploader } from '@yeying-community/yeying-client-ts'

export interface UploadAssetMessage {
    file: File
}

export interface AssetWorkerConfig extends WorkerConfig {
    securityAlgorithm: SecurityAlgorithm
}

export interface AssetProgressMessage {
    total: number
    completed: number
}

export function getUploadDependencies() {
    return [Uploader.toString()]
}

export function getDownloadDependencies() {
    return [Downloader.toString()]
}
