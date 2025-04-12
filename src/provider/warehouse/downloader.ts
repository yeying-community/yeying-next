import { BlockProvider } from './block'
import { AssetMetadataSchema } from '../../yeying/api/asset/asset_pb'
import { AssetCipher } from './cipher'
import { toJson } from '@bufbuild/protobuf'
import { ProviderOption } from '../common/model'
import { SecurityAlgorithm } from '@yeying-community/yeying-web3'
import { AssetProvider } from './asset'

/**
 * 用于下载资产数据，支持从区块提供者获取数据并进行解密
 */
export class Downloader {
    blockProvider: BlockProvider
    assetProvider: AssetProvider
    assetCipher: AssetCipher

    /**
     * 构造函数
     * @param option - 包含代理地址和区块地址信息的配置选项
     * @param securityAlgorithm - 安全算法配置，包含算法名称和 IV
     * @example
     * ```ts
     * const option = { proxy: 'http://proxy.example.com', blockAddress: { identifier: 'example-did', privateKey: 'example-private-key' } }
     * const securityAlgorithm = { name: 'AES-GCM', iv: 'base64-encoded-iv' }
     * const downloader = new Downloader(option, securityAlgorithm)
     * ```
     */
    constructor(option: ProviderOption, securityAlgorithm: SecurityAlgorithm) {
        this.assetProvider = new AssetProvider(option)
        this.blockProvider = new BlockProvider(option)
        this.assetCipher = new AssetCipher(option.blockAddress, securityAlgorithm)
    }

    /**
     * 下载文件,根据命名空间 ID 和哈希值下载文件,如果文件被加密，会自动解密
     * @param namespaceId - 命名空间 ID
     * @param hash - 资产的哈希值
     * @returns 返回下载的文件（Blob）
     * @example
     * ```ts
     * downloader.download('example-namespace', 'example-hash')
     *   .then(file => console.log(file))
     *   .catch(err => console.error(err))
     * ```
     */
    download(namespaceId: string, hash: string) {
        return new Promise(async (resolve, reject) => {
            try {
                const asset = await this.assetProvider.detail(namespaceId, hash)
                console.log(`Try to download asset=${JSON.stringify(toJson(AssetMetadataSchema, asset))}`)

                const chunkBlobs = new Array(asset.chunkCount).fill(undefined)

                /**
                 * 递归下载每个数据块。
                 *
                 * @param index - 当前下载的数据块索引。
                 */
                const downloadChunk = async (index: number) => {
                    // 下载数据块
                    let data = await this.blockProvider.get(namespaceId, asset.chunks[index])
                    if (asset.isEncrypted) {
                        // 如果资产加密，解密数据块
                        data = await this.assetCipher.decrypt(data)
                    }

                    // 将解密后的数据块转换为 Blob
                    chunkBlobs[index] = new Blob([data], { type: 'application/octet-stream' })

                    // 如果所有块都已下载，合并为一个 Blob 并返回
                    if (index === chunkBlobs.length - 1) {
                        resolve(new Blob(chunkBlobs, { type: 'application/octet-stream' }))
                    } else {
                        // 否则继续下载下一个块
                        await downloadChunk(index + 1)
                    }
                }

                // 从第0块开始下载，当前是顺序下载，后续可以支持并发下载
                await downloadChunk(0)
            } catch (e) {
                console.log(`Fail to download asset, namespaceId=${namespaceId}, hash=${hash}`, e)
                return reject(e)
            }
        })
    }
}
