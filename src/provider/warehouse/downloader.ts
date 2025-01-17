import { BlockProvider } from './block'
import { AssetMetadata } from '../../yeying/api/asset/asset_pb'
import { AssetCipher } from './cipher'

/**
 * Downloader 类用于下载资产数据，支持从区块提供者获取数据并进行解密。
 * 
 * @example
 * ```ts
 * const downloader = new Downloader(blockProvider, assetCipher);
 * downloader.download(asset).then(blob => {
 *   // 下载成功后处理数据
 * }).catch(err => {
 *   // 处理下载错误
 * });
 * ```
 */
export class Downloader {
    blockProvider: BlockProvider
    assetCipher: AssetCipher

    /**
     * 创建 Downloader 实例。
     * 
     * @param blockProvider - 区块提供者，用于获取资产数据的块。
     * @param assetCipher - 资产解密工具，用于解密下载的数据。
     * @example
     * ```ts
     * const blockProvider = new BlockProvider(...);
     * const assetCipher = new AssetCipher(...);
     * const downloader = new Downloader(blockProvider, assetCipher);
     * ```
     */
    constructor(blockProvider: BlockProvider, assetCipher: AssetCipher) {
        this.blockProvider = blockProvider
        this.assetCipher = assetCipher
    }

    /**
     * 下载给定资产的所有数据块，支持解密并合并为一个 Blob 对象。
     * 
     * @param asset - 需要下载的资产元数据。
     * @returns 一个 Promise，解析为下载并解密后的 Blob 对象。
     * @throws {Error} 如果下载过程失败，则抛出错误。
     * @example
     * ```ts
     * const asset = new AssetMetadata(...); 
     * downloader.download(asset).then(blob => {
     *   console.log('Download success:', blob);
     * }).catch(err => {
     *   console.error('Download failed:', err);
     * });
     * ```
     */
    download(asset: AssetMetadata) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log(
                    `Try to download asset, hash=${asset.getContenthash()}, uid=${asset.getUid()}, version=${asset.getVersion()}, name=${asset.getName()}}`
                )
                const chunkBlobs = new Array(asset.getTotal()).fill(undefined)

                /**
                 * 递归下载每个数据块。
                 * 
                 * @param index - 当前下载的数据块索引。
                 */
                const downloadChunk = async (index: number) => {
                    // 下载数据块
                    let data = await this.blockProvider.get(asset.getChunksList()[index].getHash())
                    if (asset.getEncrypted()) {
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
                console.log(`Fail to download asset=${asset}`, e)
                return reject(e)
            }
        })
    }
}
