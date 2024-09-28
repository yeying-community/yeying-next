import pkg from '../../yeying/api/asset/asset_pb.cjs'
import {AssetClient} from '../../yeying/api/asset/asset_grpc_web_pb.cjs'
import {doError, doStatus, isDeleted, isExisted} from '../../common/status.js'
import {convertDigitalFormatFrom} from '../../common/common.js'
import {convertAssetTo} from './model.js'

const {
  VersionRequest,
  VersionRequestBody,
  SignRequest,
  SignRequestBody,
  GetRequest,
  GetRequestBody,
  PutRequest,
  PutRequestBody,
  SearchRequest,
  SearchRequestBody,
  DetailRequest,
  DetailRequestBody,
  RemoveRequest,
  RemoveRequestBody,
} = pkg

export class AssetProvider {
  constructor(authenticate, provider, identityCipher) {
    this.authenticate = authenticate
    this.provider = provider
    this.client = new AssetClient(this.provider.proxy)
    this.identityCipher = identityCipher
  }

  getDid() {
    return this.authenticate.getDid()
  }

  getIdentityCipher() {
    return this.identityCipher
  }

  search(format, page, pageSize) {
    return new Promise(async (resolve, reject) => {
      const method = '/yeying.api.asset.Asset/Search'
      const body = new SearchRequestBody()
      body.setFormat(typeof format === 'string' ? convertDigitalFormatFrom(format) : format)
      body.setPage(page)
      body.setPagesize(pageSize)

      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for searching asset', err)
        return reject(err)
      }

      const request = new SearchRequest()
      request.setHeader(header)
      request.setBody(body)

      this.client.search(request, undefined, (err, res) => {
        this.doSearchResponse(method, err, res, resolve, reject)
      })
    })
  }

  doSearchResponse(method, err, res, resolve, reject) {
    if (doError(err, reject, this.provider)) {
      return
    }

    const body = res.getBody()
    this.authenticate.verifyHeader(method, res.getHeader(), body).then(() => {
      doStatus(body.getStatus(), () => resolve(body.getAssetsList().map(a => convertAssetTo(a))), reject, this.provider)
    }, e => reject(e))
  }

  version(assetId, pageIndex, pageSize) {
    return new Promise(async (resolve, reject) => {
      const method = '/yeying.api.asset.Asset/Version'
      const body = new VersionRequestBody()
      body.setAssetid(assetId)
      body.setPage(pageIndex)
      body.setPagesize(pageSize)
      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for getting asset version', err)
        return reject(err)
      }

      const request = new VersionRequest()
      request.setHeader(header)
      request.setBody(body)
      this.client.version(request, undefined, (err, res) => {
        this.doVersionResponse(method, err, res, resolve, reject)
      })
    })
  }

  doVersionResponse(method, err, res, resolve, reject) {
    if (doError(err, reject, this.provider)) {
      console.log('Fail to get asset Version')
      return
    }

    const body = res.getBody()
    this.authenticate.verifyHeader(method, res.getHeader(), body).then(() => {
      doStatus(body.getStatus(), () => resolve(body.getAssetsList().map(a => convertAssetTo(a))), reject, this.provider)
    }, e => reject(e))
  }

  detail(assetId, version) {
    return new Promise(async (resolve, reject) => {
      const method = '/yeying.api.asset.Asset/Detail'
      const body = new DetailRequestBody()
      body.setAssetid(assetId)
      body.setVersion(version)
      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for getting asset detail', err)
        return reject(err)
      }

      const request = new DetailRequest()
      request.setHeader(header)
      request.setBody(body)

      this.client.detail(request, undefined, (err, res) => {
        this.doDetailResponse(method, err, res, resolve, reject)
      })
    })
  }

  doDetailResponse(method, err, res, resolve, reject) {
    if (doError(err, reject, this.provider)) {
      console.log('Fail to get asset detail.')
      return
    }

    const body = res.getBody()
    this.authenticate.verifyHeader(method, res.getHeader(), body).then(() => {
      doStatus(body.getStatus(), () => resolve(convertAssetTo(body.getAsset())), reject, this.provider)
    }, e => reject(e))
  }

  remove(assetId, version) {
    return new Promise(async (resolve, reject) => {
      const method = '/yeying.api.asset.Asset/Remove'
      const body = new RemoveRequestBody()
      body.setAssetid(assetId)
      body.setVersion(version)
      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for removing asset', err)
        return reject(err)
      }

      const request = new RemoveRequest()
      request.setHeader(header)
      request.setBody(body)

      this.client.remove(request, undefined, (err, res) => {
        this.doRemoveResponse(method, err, res, resolve, reject)
      })
    })
  }

  doRemoveResponse(method, err, res, resolve, reject) {
    if (doError(err, reject, this.provider)) {
      console.log('Fail to remove asset')
      return
    }

    const body = res.getBody()
    this.authenticate.verifyHeader(method, res.getHeader(), body).then(() => {
      doStatus(body.getStatus(), resolve, reject, this.provider, isDeleted)
    }, e => reject(e))
  }

  sign(action, asset) {
    return new Promise(async (resolve, reject) => {
      const method = '/yeying.api.asset.Asset/Sign'
      const body = new SignRequestBody()
      body.setAction(action)
      body.setAsset(asset)
      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for signing asset', err)
        return reject(err)
      }

      const request = new SignRequest()
      request.setHeader(header)
      request.setBody(body)
      this.client.sign(request, undefined, (err, res) => {
        this.doSignResponse(method, err, res, resolve, reject)
      })
    })
  }

  doSignResponse(method, err, res, resolve, reject) {
    if (doError(err, reject, this.provider)) {
      console.log('Fail to sign asset')
      return
    }

    const body = res.getBody()
    this.authenticate.verifyHeader(method, res.getHeader(), body).then(() => {
      doStatus(body.getStatus(), resolve, reject, this.provider, isExisted)
    }, e => reject(e))
  }

  get(assetId, version, index) {
    return new Promise(async (resolve, reject) => {
      const method = '/yeying.api.asset.Asset/Get'
      const body = new GetRequestBody()
      body.setAssetid(assetId)
      body.setVersion(version)
      body.setIndex(index)
      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for getting chunk content', err)
        return reject(err)
      }

      const request = new GetRequest()
      request.setHeader(header)
      request.setBody(body)
      this.client.get(request, undefined, (err, res) => {
        this.doGetResponse(method, err, res, resolve, reject)
      })
    })
  }

  doGetResponse(method, err, res, resolve, reject) {
    if (doError(err, reject, this.provider)) {
      console.log('Fail to get chunk data!')
      return
    }

    const body = res.getBody()
    this.authenticate.verifyHeader(method, res.getHeader(), body).then(() => {
      doStatus(body.getStatus(), () => resolve(res.getData()), reject, this.provider)
    }, e => reject(e))
  }

  put(assetId, version, hash, data) {
    return new Promise(async (resolve, reject) => {
      const method = '/yeying.api.asset.Asset/Put'
      const body = new PutRequestBody()
      body.setAssetid(assetId)
      body.setVersion(version)
      body.setChunkhash(hash)
      body.setChunksize(data.byteLength)
      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for putting chunk content', err)
        return reject(err)
      }

      const request = new PutRequest()
      request.setHeader(header)
      request.setBody(body)
      request.setData(data)
      this.client.put(request, undefined, (err, res) => {
        this.doPutResponse(method, err, res, resolve, reject)
      })
    })
  }

  doPutResponse(method, err, res, resolve, reject) {
    if (doError(err, reject, this.provider)) {
      console.log('Fail to get chunk data!')
      return
    }

    const body = res.getBody()
    this.authenticate.verifyHeader(method, res.getHeader(), body).then(() => {
      doStatus(body.getStatus(), resolve, reject, this.provider, isExisted)
    }, e => reject(e))
  }
}














