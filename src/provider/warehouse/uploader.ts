import { BlockProvider } from './block'
import { AssetCipher } from './cipher'
import { convertDateToDateTime, convertToUtcDateTime, formatDateTime, getCurrentUtcString } from '../../common/date'
import { readBlock } from '../../common/file'
import { Digest } from '@yeying-community/yeying-web3'
import { computeHash } from '../../common/crypto'
import { encodeHex } from '../../common/codec'
import { convertChunkMetadataFromBlock, getDigitalFormatByName } from '../../common/message'
import { AssetMetadata } from '../../yeying/api/asset/asset_pb'

// 发送资产的SOP是：
// 1、分块
// 2、读第一块
// 3、哈希
// 4、加密（可选）
// 5、检查是否块是否全部发送
// 6、否，读下一块
// 7、循环直到全部发送
// 8、签名

export class Uploader {
    blockProvider: BlockProvider
    assetCipher: AssetCipher
    chunkSize: number

    constructor(blockProvider: BlockProvider, assetCipher: AssetCipher) {
        this.blockProvider = blockProvider
        this.assetCipher = assetCipher
        this.chunkSize = 1024 * 1024
    }

    upload(
        file: File,
        uid: string,
        version: number = 0,
        encrypted: boolean = true,
        parent: string = '',
        description: string = '',
        extend: string = ''
    ) {
        return new Promise<AssetMetadata>(async (resolve, reject) => {
            try {
                const asset = new AssetMetadata()
                asset.setOwner(this.blockProvider.getOwner())
                asset.setParenthash(parent)
                asset.setVersion(version)
                asset.setUid(uid)
                asset.setName(file.name)
                asset.setFormat(getDigitalFormatByName(file.name))
                const lastModified = formatDateTime(
                    convertToUtcDateTime(convertDateToDateTime(new Date(file.lastModified)))
                )
                asset.setCreated(lastModified)
                asset.setCheckpoint(getCurrentUtcString())
                console.log(`File last modified time=${file.lastModified}`)
                asset.setDescription(description)
                asset.setExtend(extend)
                asset.setTotal(Math.ceil(file.size / this.chunkSize))
                asset.setBlock(this.chunkSize)
                asset.setEncrypted(encrypted)
                const assetDigest = new Digest()
                const mergeDigest = new Digest()
                const chunkList = new Array(asset.getTotal())

                // 按顺序发送请求
                const uploadChunk = async (index: number) => {
                    const start = index * this.chunkSize
                    const end = Math.min(file.size, start + this.chunkSize)
                    console.log(`Try to read the index=${index} chunk, size=${end - start}`)
                    let data = await readBlock(file, start, end)
                    assetDigest.update(data)

                    if (encrypted) {
                        // 加密
                        data = await this.assetCipher.encrypt(data)
                    }

                    const chunkHash = await computeHash(data)
                    mergeDigest.update(chunkHash)

                    const block = await this.blockProvider.put(encodeHex(chunkHash), data.length, data)
                    chunkList[index] = convertChunkMetadataFromBlock(index, block)

                    if (index === asset.getTotal() - 1) {
                        asset.setChunksList(chunkList)
                        asset.setContenthash(encodeHex(assetDigest.sum()))
                        asset.setMergedhash(encodeHex(mergeDigest.sum()))
                        return
                    }

                    await uploadChunk(index + 1)
                }
                await uploadChunk(0)
                resolve(asset)
            } catch (err) {
                console.error(`Fail to upload the file=${file.name}`, err)
                return reject(err)
            }
        })
    }
}
