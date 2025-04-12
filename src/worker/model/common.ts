import {ProviderOption} from "../../provider/common/model";

export type CommandType =
    | 'CONFIG'
    | 'START'
    | 'ABORT'
    | 'PAUSE'
    | 'RESUME'

export type ProcessType =
    | 'PROGRESS'
    | 'ERROR'
    | 'COMPLETE'

export type WorkerType =
    | 'UPLOAD_ASSET'
    | 'DOWNLOAD_ASSET'
    | 'SYNC_STATE'


export interface WorkerConfig {
    providerOption: ProviderOption
    concurrency?: number
    retries?: number
}

export interface CommandMessage<T = any> {
    id: string
    commandType: CommandType
    payload: T
    progress?: ProgressCallback // 进度回调
}

export interface ProcessMessage<T = any> {
    id: string
    processType: ProcessType
    data?: T
}

export interface CallbackFunction {
    callback: Function,
    progress?: Function
}

export type ProgressCallback = (process: ProcessMessage) => void;