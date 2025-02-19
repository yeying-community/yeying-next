import {BlockProvider} from './block'
import {AssetCipher} from './cipher'
import {convertDateToDateTime, convertToUtcDateTime, formatDateTime, getCurrentUtcString} from '../../common/date'
import {readBlock} from '../../common/file'
import {Digest, SecurityAlgorithm} from '@yeying-community/yeying-web3'
import {decodeHex, encodeHex} from '../../common/codec'
import {getDigitalFormatByName} from '../../common/message'
import {AssetMetadata, AssetMetadataSchema} from '../../yeying/api/asset/asset_pb'
import {create} from '@bufbuild/protobuf'
import {isExisted} from '../../common/status'
import {ProviderOption} from '../common/model'
import {AssetProvider} from './asset'
import {ConfigProvider} from "../config/config";
import {ConfigTypeEnum} from "../../yeying/api/config/config_pb";

/**
 * 该类用于上传资产文件，通过将文件分块后上传，每个块加密（可选）并生成哈希值，最后对整个资产进行签名
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
 */
export class Uploader {
    blockProvider: BlockProvider
    assetProvider: AssetProvider
    assetCipher: AssetCipher
    configProvider: ConfigProvider;
    chunkSize?: number

    /**
     * 构造函数
     * @param option - 包含代理地址和区块地址信息的配置选项
     * @param securityAlgorithm - 安全算法配置，包含算法名称和 IV
     * @example
     * ```ts
     * const option = { proxy: 'http://proxy.example.com', blockAddress: { identifier: 'example-did', privateKey: 'example-private-key' } }
     * const securityAlgorithm = { name: 'AES-GCM', iv: 'base64-encoded-iv' }
     * const uploader = new Uploader(option, securityAlgorithm)
     * ```
     */
    constructor(option: ProviderOption, securityAlgorithm: SecurityAlgorithm) {
        this.configProvider = new ConfigProvider(option)
        this.blockProvider = new BlockProvider(option)
        this.assetProvider = new AssetProvider(option)
        this.assetCipher = new AssetCipher(option.blockAddress, securityAlgorithm)
    }

    /**
     * 上传文件,将文件分块处理，加密（可选），并逐块上传到区块链网络中
     * @param namespaceId - 命名空间 ID
     * @param file - 要上传的文件对象
     * @param encrypted - 是否对文件进行加密（默认为 true）
     * @param parentHash - 父资产的哈希值（可选）
     * @param description - 资产描述（可选）
     * @returns 返回生成的资产元数据
     * @example
     * ```ts
     * const file = new File(['Hello, world!'], 'example.txt', { type: 'text/plain' })
     * uploader.upload('example-namespace', file)
     *   .then(assetMetadata => console.log(assetMetadata))
     *   .catch(err => console.error(err))
     * ```
     */
    upload(
        namespaceId: string,
        file: File,
        encrypted: boolean = true,
        parentHash?: string,
        description?: string
    ): Promise<AssetMetadata> {
        return new Promise<AssetMetadata>(async (resolve, reject) => {
            try {
                if (this.chunkSize === undefined) {
                    const metadata = await this.configProvider.get("chunk.size", ConfigTypeEnum.CONFIG_TYPE_SYSTEM)
                    this.chunkSize = parseInt(metadata.value)
                }

                const asset = create(AssetMetadataSchema, {
                    namespaceId: namespaceId,
                    owner: this.blockProvider.getOwner(), // 设置资产拥有者
                    parentHash: parentHash, // 设置父哈希
                    name: file.name, // 设置文件名称
                    format: getDigitalFormatByName(file.name), // 获取文件格式
                    createdAt: formatDateTime(convertToUtcDateTime(convertDateToDateTime(new Date(file.lastModified)))),
                    updatedAt: getCurrentUtcString(),
                    description: description,
                    size: BigInt(file.size),
                    chunkCount: Math.ceil(file.size / this.chunkSize),
                    chunkSize: this.chunkSize,
                    isEncrypted: encrypted
                })

                if (parentHash) {
                    const parent = await this.assetProvider.detail(namespaceId, parentHash)
                    asset.version = parent.version + 1
                }

                console.log(`File last modified time=${file.lastModified}`)

                const assetDigest = new Digest()
                const mergeDigest = new Digest()
                const chunkList = new Array(asset.chunkCount) // 用于存储每个块的元数据

                // 按顺序上传文件的每一块
                for (let i = 0; i < asset.chunkCount; i++) {
                    const start = i * this.chunkSize
                    const end = Math.min(file.size, start + this.chunkSize)
                    console.log(`Try to read the index=${i} chunk, size=${end - start}`)
                    let data = await readBlock(file, start, end) // 读取文件块
                    assetDigest.update(data) // 更新资产的哈希

                    if (encrypted) {
                        // 对数据进行加密（可选）
                        data = await this.assetCipher.encrypt(data)
                    }

                    const block = await this.blockProvider.createBlockMetadata(namespaceId, data)
                    mergeDigest.update(decodeHex(block.hash)) // 更新合并哈希

                    const confirmBody = await this.blockProvider.confirm(block)
                    if (confirmBody.block) {
                        // 已经存在，无需上传这个block
                        console.log(`skip the block=${i}, hash=${block.hash}`)
                        chunkList[i] = confirmBody.block.hash
                        continue
                    }

                    // 上传块数据到区块存储
                    const body = await this.blockProvider.put(block, data)
                    if (!isExisted(body?.status)) {
                        return reject(new Error(`Fail to put block=${block}`))
                    }

                    chunkList[i] = body.block?.hash
                }

                asset.chunks = chunkList // 资产块的元数据
                asset.hash = encodeHex(assetDigest.sum()) // 资产哈希

                resolve(await this.assetProvider.sign(asset)) // 上传成功，返回资产元数据
            } catch (err) {
                console.error(`Fail to upload the file=${file.name}`, err)
                return reject(err) // 上传失败，返回错误
            }
        })
    }
}
