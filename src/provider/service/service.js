import {ServiceClient} from '../../yeying/api/service/service_grpc_web_pb.cjs'
import service_pkg from '../../yeying/api/service/service_pb.cjs'
import {
  convertApiCodeFrom,
  convertIdentityCodeTo,
  convertServiceCodeFrom,
  isServiceIdentity
} from '../../tool/code.js'
import {doError, doStatus, isExisted, isDeleted} from '../../tool/status.js'
import {convertServiceTo} from './model.js'
import {InvalidArgument} from '../../tool/error.js'

const {
  RegisterRequest, WhoamiRequest, RegisterRequestBody, ServiceMetadata, UnregisterRequest, UnregisterRequestBody, SearchRequest, SearchRequestBody,
} = service_pkg

export class ServiceProvider {
  constructor(authenticate, provider) {
    this.authenticate = authenticate
    this.provider = provider
    this.client = new ServiceClient(this.provider.proxy)
  }

  whoami() {
    return new Promise((resolve, reject) => {
      this.client.whoami(new WhoamiRequest(), undefined, (err, res) => {
        if (doError(err, reject, this.provider)) {
          return
        }
        resolve(convertServiceTo(res.getService()))
      })
    })
  }

  register(identity) {
    return new Promise(async (resolve, reject) => {
      const method = '/yeying.api.service.Service/Register'
      if (!isServiceIdentity(identity.metadata.code)) {
        return reject(new InvalidArgument(`Mismatch identity=${identity.metadata.code}`))
      }

      const metadata = new ServiceMetadata()
      metadata.setDid(identity.metadata.did)
      metadata.setNetwork(identity.metadata.network)
      metadata.setAddress(identity.blockAddress.address)
      metadata.setOwner(identity.metadata.parent)
      metadata.setVersion(identity.metadata.version)
      metadata.setName(identity.metadata.name)
      metadata.setAvatar(identity.metadata.avatar)
      metadata.setCreated(identity.metadata.created)
      metadata.setCheckpoint(identity.metadata.checkpoint)

      metadata.setCode(convertServiceCodeFrom(identity.extend.code))
      metadata.setApisList(identity.extend.apis.map(a => convertApiCodeFrom(a)))
      metadata.setProxy(identity.extend.proxy)
      metadata.setGrpc(identity.extend.grpc)

      const body = new RegisterRequestBody()
      body.setService(metadata)

      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for register service', err)
        return reject(err)
      }

      const request = new RegisterRequest()
      request.setHeader(header)
      request.setBody(body)
      this.client.register(request, undefined, (err, res) => {
        this.doRegisterResponse(method, err, res, resolve, reject)
      })
    })
  }

  unregister(did) {
    return new Promise(async (resolve, reject) => {
      const method = '/yeying.api.service.Service/Unregister'
      const body = new UnregisterRequestBody()
      body.setDid(did)

      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for unregister service', err)
        return reject(err)
      }

      const request = new UnregisterRequest()
      request.setHeader(header)
      request.setBody(body)

      this.client.unregister(request, undefined, (err, res) => {
        this.doUnregisterResponse(method, err, res, resolve, reject)
      })
    })
  }

  search(serviceCode) {
    return new Promise(async (resolve, reject) => {
      const method = '/yeying.api.service.Service/Search'
      const body = new SearchRequestBody()
      body.setServicecode(serviceCode)
      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for searching service', err)
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

  doRegisterResponse(method, err, res, resolve, reject) {
    if (doError(err, reject, this.provider)) {
      return
    }

    const body = res.getBody()
    this.authenticate.verifyHeader(method, res.getHeader(), body).then(() => {
      doStatus(body.getStatus(), resolve, reject, this.provider, isExisted)
    }, e => reject(e))
  }

  doUnregisterResponse(method, err, res, resolve, reject) {
    if (doError(err, reject, this.provider)) {
      return
    }

    const body = res.getBody()
    this.authenticate.verifyHeader(method, res.getHeader(), body).then(() => {
      doStatus(body.getStatus(), resolve, reject, this.provider, isDeleted)
    }, e => reject(e))
  }

  doSearchResponse(method, err, res, resolve, reject) {
    if (doError(err, reject, this.provider)) {
      return
    }

    const body = res.getBody()
    this.authenticate.verifyHeader(method, res.getHeader(), body).then(() => {
      doStatus(body.getStatus(), () => resolve(body.getServicesList().map(s => convertServiceTo(s))), reject, this.provider)
    }, e => reject(e))
  }
}







