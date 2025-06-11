import {getModulePath} from "./common";

export interface UploadAssetMessage {
    namespaceId: string
    file: File
    encrypted: boolean
}

export interface DownloadAssetMessage {
    namespaceId: string
    hash: string
    merged: boolean
}

export function getUploadImports() {
    return [`import { UploadProcessor } from '${getModulePath('@yeying-community/yeying-next')}';`]
}

export function getDownloadImports() {
    return [`import { DownloadProcessor } from '${getModulePath('@yeying-community/yeying-next')}';`]
}