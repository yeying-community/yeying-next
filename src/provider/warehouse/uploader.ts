import { BlockProvider } from './block'
import { AssetCipher } from './cipher'
import { convertDateToDateTime, convertToUtcDateTime, formatDateTime, getCurrentUtcString } from '../../common/date'
import { readBlock } from '../../common/file'
import { Digest } from '@yeying-community/yeying-web3'
import { computeHash } from '../../common/crypto'
import { encodeHex } from '../../common/codec'
import { convertChunkMetadataFromBlock, getDigitalFormatByName } from '../../common/message'
import { AssetMetadata } from '../../yeying/api/asset/asset_pb'

/**
 * 该类用于上传资产文件，通过将文件分块后上传，每个块加密（可选）并生成哈希值，最后对整个资产进行签名。
 * 
 * 发送资产的SOP是：
 * 1、分块
 * 2、读第一块
 * 3、哈希
 * 4、加密（可选）
 * 5、检查是否块是否全部发送
 * 6、否，读下一块
 * 7、循环直到全部发送
 * 8、签名
 * 
 * @example
 * ```ts
 * const uploader = new Uploader(blockProvider, assetCipher);
 * uploader.upload(file, "uid1234").then(asset => {
 *   console.log('Asset uploaded successfully:', asset);
 * }).catch(err => {
 *   console.error('Upload failed:', err);
 * });
 * ```
 */
export class Uploader {
    blockProvider: BlockProvider
    assetCipher: AssetCipher
    chunkSize: number

    /**
     * 创建一个上传器实例，用于文件的分块上传。
     * 
     * @param blockProvider - 处理区块存储的提供者。
     * @param assetCipher - 用于加密资产的加密器。
     * @example
     * ```ts
     * const uploader = new Uploader(blockProvider, assetCipher);
     * ```
     */
    constructor(blockProvider: BlockProvider, assetCipher: AssetCipher) {
        this.blockProvider = blockProvider
        this.assetCipher = assetCipher
        this.chunkSize = 1024 * 1024 // 默认每块大小为1MB
    }

    /**
     * 上传文件并返回文件的资产元数据。
     * 
     * @param file - 要上传的文件。
     * @param uid - 文件的唯一标识符。
     * @param version - 文件的版本号，默认值为 0。
     * @param encrypted - 是否对文件进行加密，默认值为 `true`。
     * @param parent - 文件的父哈希，默认为空字符串。
     * @param description - 文件的描述，默认为空字符串。
     * @param extend - 额外的扩展信息，默认为空字符串。
     * @returns 返回一个 Promise，解析为文件上传后生成的资产元数据。
     * 
     * @example
     * ```ts
     * uploader.upload(file, "uid1234", 1, true, "", "File description").then(asset => {
     *   console.log('Asset uploaded:', asset);
     * }).catch(err => {
     *   console.error('Upload failed:', err);
     * });
     * ```
     */
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
                asset.setOwner(this.blockProvider.getOwner())  // 设置资产拥有者
                asset.setParenthash(parent)  // 设置父哈希
                asset.setVersion(version)  // 设置版本号
                asset.setUid(uid)  // 设置文件唯一标识符
                asset.setName(file.name)  // 设置文件名称
                asset.setFormat(getDigitalFormatByName(file.name))  // 获取文件格式
                const lastModified = formatDateTime(
                    convertToUtcDateTime(convertDateToDateTime(new Date(file.lastModified)))
                )
                asset.setCreated(lastModified)  // 设置创建时间
                asset.setCheckpoint(getCurrentUtcString())  // 设置检查点时间
                console.log(`File last modified time=${file.lastModified}`)
                asset.setDescription(description)  // 设置文件描述
                asset.setExtend(extend)  // 设置扩展信息
                asset.setTotal(Math.ceil(file.size / this.chunkSize))  // 计算文件分块总数
                asset.setBlock(this.chunkSize)  // 设置每块大小
                asset.setEncrypted(encrypted)  // 设置是否加密
                const assetDigest = new Digest()
                const mergeDigest = new Digest()
                const chunkList = new Array(asset.getTotal())  // 用于存储每个块的元数据

                // 按顺序上传文件的每一块
                const uploadChunk = async (index: number) => {
                    const start = index * this.chunkSize
                    const end = Math.min(file.size, start + this.chunkSize)
                    console.log(`Try to read the index=${index} chunk, size=${end - start}`)
                    let data = await readBlock(file, start, end)  // 读取文件块
                    assetDigest.update(data)  // 更新资产的哈希

                    if (encrypted) {
                        // 对数据进行加密（可选）
                        data = await this.assetCipher.encrypt(data)
                    }

                    const chunkHash = await computeHash(data)  // 计算块的哈希值
                    mergeDigest.update(chunkHash)  // 更新合并哈希

                    // 上传块数据到区块存储
                    const block = await this.blockProvider.put(encodeHex(chunkHash), data.length, data)
                    chunkList[index] = convertChunkMetadataFromBlock(index, block)

                    // 如果是最后一个块，设置资产的所有信息
                    if (index === asset.getTotal() - 1) {
                        asset.setChunksList(chunkList)  // 设置块的元数据
                        asset.setContenthash(encodeHex(assetDigest.sum()))  // 设置资产哈希
                        asset.setMergedhash(encodeHex(mergeDigest.sum()))  // 设置合并哈希
                        return
                    }

                    // 递归上传下一个块
                    await uploadChunk(index + 1)
                }
                await uploadChunk(0)  // 从第一个块开始上传
                resolve(asset)  // 上传成功，返回资产元数据
            } catch (err) {
                console.error(`Fail to upload the file=${file.name}`, err)
                return reject(err)  // 上传失败，返回错误
            }
        })
    }
}
