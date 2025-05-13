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

export function getClientImports() {
    return [`import { Uploader, Downloader } from '${getModulePath('@yeying-community/yeying-client-ts')}';`]
}

function getModulePath(pkg: string): string {
    return `https://esm.sh/${pkg}@latest?target=esnext`
}
