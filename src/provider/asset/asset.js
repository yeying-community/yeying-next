import pkg from '../../yeying/api/asset/asset_pb.cjs'
import {AssetClient} from '../../yeying/api/asset/asset_grpc_web_pb.cjs'
import {doResponse, isCreated, isDeleted} from '../tool/status.js'
import {createMetadata} from '../tool/auth/auth.js'

const {
  VersionRequest, SignRequest, GetRequest, PutRequest, SearchRequest, DetailRequest, RemoveRequest, PutHeader,
} = pkg

export function AssetAdaptor(serviceMetadata, signer) {
  // 后面还会用于验证签名
  this.serviceMetadata = serviceMetadata
  this.signer = signer
  this.client = new AssetClient(this.serviceMetadata.proxy, undefined, undefined)
}

AssetAdaptor.prototype.search = function (condition) {
  return new Promise(async (resolve, reject) => {
    const request = new SearchRequest()
    if (condition && condition.format) {
      request.setFormat(condition.format)
    }

    const method = '/yeying.api.asset.Asset/Search'
    const metadata = await createMetadata(this.signer.blockAddress, method, request.serializeBinary())
    this.client.search(request, metadata, (err, response) => {
      doResponse(this.serviceMetadata, () => resolve(response.getAssetsList()), reject, err, response)
    })
  })
}

AssetAdaptor.prototype.version = function (assetId) {
  return new Promise(async (resolve, reject) => {
    const request = new VersionRequest()
    request.setAssetid(assetId)

    const metadata = await createMetadata(this.signer.blockAddress, '/yeying.api.asset.Asset/Version', request.serializeBinary())
    this.client.version(request, metadata, (err, response) => {
      doResponse(this.serviceMetadata, () => resolve(response.getAssetsList()), reject, err, response)
    })
  })
}

AssetAdaptor.prototype.detail = function (hash) {
  return new Promise(async (resolve, reject) => {
    const request = new DetailRequest()
    request.setAssethash(hash)

    const metadata = await createMetadata(this.signer.blockAddress, '/yeying.api.asset.Asset/Detail', request.serializeBinary())
    this.client.detail(request, metadata, (err, response) => {
      doResponse(this.serviceMetadata, () => resolve(response.getAsset()), reject, err, response)
    })
  })
}

AssetAdaptor.prototype.remove = function (hash) {
  return new Promise(async (resolve, reject) => {
    const request = new RemoveRequest()
    request.setAssethash(hash)

    const metadata = await createMetadata(this.signer.blockAddress, '/yeying.api.asset.Asset/Remove', request.serializeBinary())
    this.client.remove(request, metadata, (err, response) => {
      doResponse(this.serviceMetadata, () => resolve(response.getAsset()), reject, err, response, isDeleted)
    })
  })
}

AssetAdaptor.prototype.sign = function (asset, action) {
  return new Promise(async (resolve, reject) => {
    const request = new SignRequest()
    request.setAsset(asset)
    request.setAction(action)

    const metadata = await createMetadata(this.signer.blockAddress, '/yeying.api.asset.Asset/Sign', request.serializeBinary())
    this.client.sign(request, metadata, (err, response) => {
      doResponse(this.serviceMetadata, () => resolve(response.getAsset()), reject, err, response, isCreated)
    })
  })
}

AssetAdaptor.prototype.get = async function (mergedHash, hash) {
  return new Promise(async (resolve, reject) => {
    const request = new GetRequest()
    request.setAssetmergedhash(mergedHash)
    request.setChunkhash(hash)

    const metadata = await createMetadata(this.signer.blockAddress, '/yeying.api.asset.Asset/Get', request.serializeBinary())
    this.client.get(request, metadata, (err, response) => {
      doResponse(this.serviceMetadata, () => resolve(response), reject, err, response)
    })
  })
}

AssetAdaptor.prototype.put = function (assetId, chunk, data) {
  return new Promise(async (resolve, reject) => {
    const header = new PutHeader()
    header.setAssetid(assetId)
    header.setChunk(chunk)

    const metadata = await createMetadata(this.signer.blockAddress, '/yeying.api.asset.Asset/Put', header.serializeBinary())
    const request = new PutRequest()
    request.setHeader(header)
    request.setBody(data)
    this.client.put(request, metadata, (err, res) => {
      doResponse(this.serviceMetadata, () => resolve(res.getChunk()), reject, err, res)
    })
  })
}
