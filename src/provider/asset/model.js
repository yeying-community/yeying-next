import code_pkg from '../../yeying/api/common/code_pb.cjs'
import pkg from '../../yeying/api/asset/asset_pb.cjs'
import {convertDigitalFormatTo} from '../../tool/code.js'

const {DigitalFormatEnum} = code_pkg
const {AssetActionEnum} = pkg

export class Asset {
  constructor(owner, version, uid, name, parentHash, hash, mergedHash, description, format, size, created, checkpoint, total, block, encrypted, extend, chunks) {
    this.owner = owner
    this.uid = uid
    this.name = name
    this.parentHash = parentHash
    this.hash = hash
    this.mergedHash = mergedHash
    this.description = description
    this.format = format
    this.size = size
    this.created = created
    this.checkpoint = checkpoint
    // 资产内容分成多少块
    this.total = total
    // 资产块的大小
    this.block = block
    this.encrypted = encrypted
    this.extend = extend
    this.chunks = chunks
  }
}

export class Chunk {
  constructor(index, hash, size, extend) {
    // 块在资产中的索引
    this.index = index
    this.hash = hash
    // 明文块大小
    this.size = size
    // 块的扩展信息
    this.extend = extend
  }
}

export function convertAssetTo(a) {
  if (a === undefined) {
    return undefined
  }

  return new Asset(
    a.getOwner(),
    a.getVersion(),
    a.getUid(),
    a.getName(),
    a.getParenthash(),
    a.getHash(),
    a.getMergedhash(),
    a.getDescription(),
    convertDigitalFormatTo(a.getFormat()),
    a.getSize(),
    a.getCreated(),
    a.getCheckpoint(),
    a.getTotal(),
    a.getBlock(),
    a.getEncrypted(),
    a.getExtend(),
    a.getChunksList().map(c => convertChunkTo(c)),
  )
}

export function convertChunkTo(c) {
  if (c === undefined) {
    return undefined
  }

  return new Chunk(
    c.getIndex(),
    c.getHash(),
    c.getSize(),
    c.getExtend(),
  )
}

export function getDigitalFormatByName(name) {
  const digitalFormat = Object.values(DigitalFormatEnum).find(t => {
    const extList = getExtListByDigitalFormat(t)
    const exist = extList.find(e => name !== undefined && name.endsWith(e))
    return exist !== undefined
  })
  return digitalFormat === undefined ? DigitalFormatEnum.DIGITAL_FORMAT_OTHER : digitalFormat
}

export function getExtListByDigitalFormat(digitalFormat) {
  switch (digitalFormat) {
    case DigitalFormatEnum.DIGITAL_FORMAT_IMAGE:
      return ['.jpg', 'jpeg', '.gif', '.png', 'webp']
    case DigitalFormatEnum.DIGITAL_FORMAT_VIDEO:
      return ['.mp4', '.avi', '.mov', '.flv']
    case DigitalFormatEnum.DIGITAL_FORMAT_AUDIO:
      return ['.mp3', '.wav', '.ogg']
    case DigitalFormatEnum.DIGITAL_FORMAT_TEXT:
      return ['.txt', '.csv', '.html', '.css']
    case DigitalFormatEnum.DIGITAL_FORMAT_APP:
      return ['.id', '.session', '.app', '.metadata', '.state', '.prompt']
    case DigitalFormatEnum.DIGITAL_FORMAT_OTHER:
      return []
    default:
      return []
  }
}

export function ConvertAssetActionFrom(str) {
  if (str === undefined) {
    return undefined
  }
  const value = AssetActionEnum[str]
  return value === AssetActionEnum.ASSET_ACTION_UNKNOWN ? undefined : value
}

export function convertAssetActionTo(assetAction) {
  if (assetAction === undefined || assetAction === AssetActionEnum.ASSET_ACTION_UNKNOWN) {
    return undefined
  }

  return Object.keys(AssetActionEnum).find(s => AssetActionEnum[s] === assetAction)
}