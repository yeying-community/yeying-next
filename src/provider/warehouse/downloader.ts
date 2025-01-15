import { BlockProvider } from './block'
import { AssetMetadata } from '../../yeying/api/asset/asset_pb'
import { AssetCipher } from './cipher'

export class Downloader {
    blockProvider: BlockProvider
    assetCipher: AssetCipher

    constructor(blockProvider: BlockProvider, assetCipher: AssetCipher) {
        this.blockProvider = blockProvider
        this.assetCipher = assetCipher
    }

    download(asset: AssetMetadata) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log(
                    `Try to download asset, hash=${asset.getContenthash()}, uid=${asset.getUid()}, version=${asset.getVersion()}, name=${asset.getName()}}`
                )
                const chunkBlobs = new Array(asset.getTotal()).fill(undefined)
                const downloadChunk = async (index: number) => {
                    // 下载数据
                    let data = await this.blockProvider.get(asset.getChunksList()[index].getHash())
                    if (asset.getEncrypted()) {
                        // 解密数据
                        data = await this.assetCipher.decrypt(data)
                    }

                    chunkBlobs[index] = new Blob([data], { type: 'application/octet-stream' })
                    if (index === chunkBlobs.length - 1) {
                        resolve(new Blob(chunkBlobs, { type: 'application/octet-stream' }))
                    } else {
                        await downloadChunk(index + 1)
                    }
                }

                // 从第0块开始下载，顺序下载，也可以并发，后面考虑
                await downloadChunk(0)
            } catch (e) {
                console.log(`Fail to download asset=${asset}`, e)
                return reject(e)
            }
        })
    }
}
