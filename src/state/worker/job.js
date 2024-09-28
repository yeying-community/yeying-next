import {StateOperator, StatusCode, WorkerResult, WorkerStatus,} from '../worker/model.js'
import {MerkleTree} from '../../state/merkle.js'
import {sortKeys} from '../../tool/object.js'
import {convertCryptoAlgorithmFromAlgorithm, deriveRawKeyFromBlockAddress} from '../../identity/model.js'
import {IdentityCipher} from '../../identity/cipher.js'
import {AssetProvider} from '../../provider/asset/asset.js'
import {Authenticate} from '../../identity/authenticate.js'
import {Downloader} from '../../provider/asset/downloader.js'
import {cloneObject, convertBlobToString, deepMerge} from '../../common/object.js'
import {computeHash} from '../../common/digest.js'
import {sign, verify} from '../../common/signature.js'
import {Metadata, State} from '../model.js'
import {Uploader} from '../../provider/asset/uploader.js'

self.onmessage = async (event) => {
  const message = event.data
  try {
    await process(message)
  } catch (e) {
    console.error(`Fail to process state with message=${JSON.stringify(message)}`, e)
    self.postMessage(new WorkerResult(new WorkerStatus(StatusCode.FAILURE, "Unknown error!")))
    return
  }
}

async function process(message) {
  const algorithm = convertCryptoAlgorithmFromAlgorithm(message.algorithm)
  const identityCipher = new IdentityCipher(algorithm, deriveRawKeyFromBlockAddress(message.blockAddress))
  const provider = new AssetProvider(new Authenticate(message.blockAddress), message.store, identityCipher)
  const assetId = message.assetId
  const currentState = message.state

  // 当前状态元信息
  const currentMetadata = currentState.metadata ? currentState.metadata : {}
  const currentMerkleRoot = currentMetadata.merkleTree ? currentMetadata.merkleTree[0][0] : undefined

  // 考虑用户有多个登陆设备，使用不同的设备工作产生数据，需要及时同步到后端，同时切换设备工作时，及时感知状态的变化，并进行合并，确保当前设备的
  // 保存的身份状态的基线和服务器上存储的身份状态是一致的。
  const assets = await this.provider.version(assetId, 1, 1)
  let operator = undefined
  let latestMetadata = undefined
  let latestState = undefined

  if (assets.length > 0) {
    const asset = assets[0]
    const extend = JSON.parse(asset.extend)
    if (currentMetadata.version === undefined) {
      // 首次在当前设备上使用，需要从后端store服务中加载状态数据，并初始化环境。
      operator = StateOperator.OVERWRITE
    } else if (currentMetadata.version < asset.version) {
      operator = StateOperator.MERGE
    } else if (currentMetadata.version === asset.version) {
      if (extend.merkleRoot !== currentMerkleRoot) {
        self.postMessage(new WorkerResult(new WorkerStatus(StatusCode.FAILURE, "Mismatch content!")))
        return
      }

      operator = StateOperator.CREATE
    } else {
      console.log(`change service, version=${currentMetadata.version}, store service latest version=${asset.version}`)
      self.postMessage(new WorkerResult(new WorkerStatus(StatusCode.FAILURE, "Invalid version!")))
      return
    }

    if (operator === StateOperator.MERGE || operator === StateOperator.OVERWRITE) {
      // 从服务器下载状态数据，在本地执行合并，对齐本地的基线和服务器的版本，并上传
      console.log(`The state baseline fall behind!`)
      const downloader = new Downloader(provider, assetId, asset.version)
      const blob = await downloader.download()
      latestState = JSON.parse(await blob.text())

      // 验证内容有没有篡改
      const merkleTree = new MerkleTree(Object.values(sortKeys(latestState.data)).map(v => JSON.stringify(v)))
      const merkleRoot = latestState.metadata.merkleTree[0][0]
      if (merkleRoot !== merkleTree.getRoot()) {
        console.log(`Invalid state from backend, The merkle root is not right!`)
        self.postMessage(new WorkerResult(new WorkerStatus(StatusCode.FAILURE, "Invalid content!")))
        return
      }

      // 验证内容是不是自己的
      const isPassed = await verifyState(message.blockAddress.publicKey, latestState.metadata)
      if (!isPassed) {
        console.log(`Something is wrong, The state from backend is not mine!`)
        self.postMessage(new WorkerResult(new WorkerStatus(StatusCode.FAILURE, "Not owner!")))
        return
      }

      // 合并是一个很复杂的过程，当前的实现逻辑就是校验状态的合法性，然后执行覆盖，如果状态信息有删除，则可能会把之前删除的信息代入到当前状态，
      // 和数字仓库，先追平基线，然后在同步最新状态
      console.log(`merge, local=${JSON.stringify(currentState)}, service=${JSON.stringify(latestState)}`)
      const data = deepMerge(currentState.data, latestState.data)
      self.postMessage(new WorkerResult(success(), operator, new State(latestState.metadata, data)))
      return
    }
  } else {
    operator = StateOperator.MERGE
  }

  // 新增版本，要么服务器上没有版本，要么服务器上的版本和当前版本一致
  // 1, 计算当前身份状态的默克尔树
  const data = sortKeys(currentState.data)
  const merkleTree = new MerkleTree(Object.values(data).map(v => JSON.stringify(v)))

  // 检查身份状态没有发生变化
  if (currentMerkleRoot === merkleTree.getRoot()) {
    console.log(`The state is unchanged.`)
    self.postMessage(new WorkerResult(success(), StateOperator.SKIP))
    return
  }

  const newVersion = currentMetadata.version ? currentMetadata.version + 1 : 1
  const metadata = new Metadata(currentMerkleRoot, assetId, newVersion, merkleTree.getTreeArray())
  metadata.signature = await signState(message.blockAddress.privateKey, metadata)
  const newState = new State(metadata, latestState.data)

  // 写入后端服务
  const blob = new Blob([JSON.stringify(newState)], {type: 'text/plain'})
  const name = currentState.data.metadata.name
  const file = new File([blob], name, {type: 'text/plain'})
  console.log(`Sync new state=${name}`)

  const parentHash = assets.length > 0 ? assets[0].hash : undefined
  const uploader = new Uploader(provider, assetId, file, true, newVersion, parentHash)
  const extend = {merkleRoot: merkleTree.getRoot()}

  const newAsset = await uploader.upload('ASSET_ACTION_APPEND', '', JSON.stringify(extend))
  console.log(`Success, upload state=${newAsset.id}`)
  self.postMessage(new WorkerResult(success(), operator, newState))
}

export async function verifyState(publicKey, metadata) {
  const copy = cloneObject(metadata)
  copy.signature = undefined
  const hashBytes = await computeHash(new TextEncoder().encode(JSON.stringify(sortKeys(copy))))
  return verify(publicKey, hashBytes, metadata.signature)
}

export async function signState(privateKey, metadata) {
  const hashBytes = await computeHash(new TextEncoder().encode(JSON.stringify(sortKeys(metadata))))
  return sign(privateKey, hashBytes)
}