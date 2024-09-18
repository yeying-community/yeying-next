import {ChunkReader} from './chunk/reader.js'
import {computeHash, Digest} from '../../common/digest.js'
import {decodeHex, encodeHex} from '../../common/codec.js'
import {ConvertAssetActionFrom, getDigitalFormatByName} from './model.js'
import pkg from '../../yeying/api/asset/asset_pb.cjs'
import {convertDateToDateTime, convertToUtcDateTime, formatDateTime, getCurrentUtcString} from '../../common/date.js'

const {ChunkMetadata, AssetMetadata, AssetActionEnum} = pkg

// 发送资产的SOP是：
// 1、分块
// 2、读第一块
// 3、哈希
// 4、加密（可选）
// 5、检查是否块是否全部发送
// 6、否，读下一块
// 7、循环直到全部发送
// 8、签名

export class ChunkSender {
  constructor(provider, identityCipher) {
    this.provider = provider
    this.identityCipher = identityCipher
  }

  send(assetId, version, index, encrypted, data) {
    return new Promise(async (resolve, reject) => {
      try {
        if (encrypted) {
          data = await this.identityCipher.encrypt(data, undefined, r => new Uint8Array(r))
        }

        const hash = encodeHex(await computeHash(data))
        await this.provider.put(assetId, version, hash, data)
        const chunk = new ChunkMetadata()
        chunk.setIndex(index)
        chunk.setHash(hash)
        chunk.setSize(data.byteLength)
        chunk.setExtend('')
        resolve(chunk)
      } catch (e) {
        console.error('Fail to send chunk', e)
        reject(e)
      }
    })
  }
}

export class Uploader {
  constructor(provider, assetId, file, encrypted, chunkSize = 16 * 1024 * 1024, sender = undefined) {
    this.provider = provider
    this.sender = sender === undefined ? new ChunkSender(provider, provider.getIdentityCipher()) : sender
    this.chunkSize = chunkSize
    this.assetId = assetId
    this.file = file
    this.encrypted = encrypted
    this.chunkList = []
    this.chunks = []
    this.total = Math.ceil(file.size / chunkSize)
    this.digest = new Digest()
  }

  upload(action, description, extend) {
    return new Promise(async (resolve, reject) => {
      action = typeof action === 'string' ? ConvertAssetActionFrom(action) : action
      // 获得资产版本信息
      const assets = await this.provider.version(this.assetId, 1, 1)
      const asset = new AssetMetadata()
      let version = 0
      let parentHash = ''
      if (assets.length > 0) {
        version = assets[0].getVersion() + 1
        if (action === AssetActionEnum.ASSET_ACTION_OVERWRITE) {
          parentHash = assets[0].getParent()
        } else {
          parentHash = assets[0].getHash()
        }
      }

      asset.setOwner(this.provider.getDid())
      asset.setParenthash(parentHash)
      asset.setVersion(version)
      asset.setId(this.assetId)
      asset.setName(this.file.name)
      asset.setFormat(getDigitalFormatByName(this.file.name))
      const lastModified = formatDateTime(convertToUtcDateTime(convertDateToDateTime(new Date(this.file.lastModified))))
      asset.setCreated(lastModified)
      asset.setCheckpoint(getCurrentUtcString())
      console.log(`File last modified time=${this.file.lastModified}`)
      asset.setDescription(description)
      asset.setExtend(extend)
      asset.setTotal(this.total)
      asset.setBlock(this.chunkSize)
      asset.setEncrypted(this.encrypted)

      // 按顺序发送请求
      const uploadChunk = index => {
        const reader = new ChunkReader(this.file, index, this.chunkSize)
        reader.read().then(data => {
          this.digest.update(data)
          this.sender.send(this.assetId, version, index, this.encrypted, data).then(chunk => {
            this.chunkList[index] = chunk
            if (index === this.total - 1) {
              const chunkDigest = new Digest()
              let size = 0
              this.chunkList.forEach(c => {
                size = size + c.getSize()
                chunkDigest.update(decodeHex(c.getHash()))
              })

              asset.setMergedhash(chunkDigest.sum())
              asset.setHash(this.digest.sum())
              asset.setSize(size)
              asset.setChunksList(this.chunkList)
              this.provider.sign(action, asset).then(() => resolve(asset)).catch(e => reject(e))
            } else {
              uploadChunk(index + 1)
            }
          }, e => reject(e))
        }, e => reject(e))
      }
      uploadChunk(0)
    })
  }
}