import {WorkerConfig} from "./common";
import {SecurityAlgorithm} from "@yeying-community/yeying-web3/dist/yeying/api/web3/web3";
import {Uploader} from "../../provider/warehouse/uploader";
import {BlockProvider} from "../../provider/warehouse/block";
import {AssetProvider} from "../../provider/warehouse/asset";
import {AssetCipher} from "../../provider/warehouse/cipher";
import {ConfigProvider} from "../../provider/config/config";
import {Downloader} from "../../provider/warehouse/downloader";
import {Authenticate} from "../../provider/common/authenticate";
import {Config} from "../../yeying/api/config/config_pb";

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

const SHARE_DEPS = [
    AssetProvider.toString(),
    BlockProvider.toString(),
    AssetCipher.toString(),
    ConfigProvider.toString(),
    Authenticate.toString(),
]

export function getUploadDependencies() {
    return [...SHARE_DEPS, Uploader.toString()]
}

export function getDownloadDependencies() {
    return [...SHARE_DEPS, Downloader.toString()]
}