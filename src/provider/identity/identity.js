import {IdentityClient} from '../../yeying/api/identity/identity_grpc_web_pb.cjs'
import identity_pkg from '../../yeying/api/identity/identity_pb.cjs'
import {fromStrToCategoryCode} from '../../common/common.js'
import {doError, doStatus, isCreated, isDeleted} from '../../common/status.js'

const {
  RegisterRequest, RegisterRequestBody, IdentityMetadata, UnregisterRequest, UnregisterRequestBody, SearchRequest, SearchRequestBody,
} = identity_pkg

export class IdentityProvider {
  constructor(authenticate, provider) {
    this.authenticate = authenticate
    this.provider = provider
    this.client = new IdentityClient(this.provider.extend.proxy)
  }

  register(identity) {
    return new Promise(async (resolve, reject) => {
      const method = '/yeying.api.identity.Identity/Register'
      const metadata = new IdentityMetadata()
      metadata.setDid(identity.metadata.did)
      metadata.setNetwork(identity.metadata.network)
      metadata.setAddress(identity.blockAddress.address)
      metadata.setParent(identity.metadata.parent)
      metadata.setCategory(fromStrToCategoryCode(identity.metadata.category))
      metadata.setCode(identity.metadata.code)
      metadata.setName(identity.metadata.name)
      metadata.setExtend(identity.metadata.extend)
      metadata.setCreated(identity.metadata.created)
      metadata.setCheckpoint(identity.metadata.checkpoint)
      const body = new RegisterRequestBody()
      body.setIdentity(metadata)

      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for register identity', err)
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
      const method = '/yeying.api.identity.Identity/Unregister'
      const body = new UnregisterRequestBody()
      body.setDid(did)

      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for unregister identity', err)
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
      const method = '/yeying.api.identity.Identity/Search'
      const body = new SearchRequestBody()
      body.setServicecode(serviceCode)
      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for searching identity', err)
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
      doStatus(body.getStatus(), resolve, reject, this.provider, isCreated)
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
      doStatus(body.getStatus(), () => resolve(body.getIdentitiesList()), reject, this.provider)
    }, e => reject(e))
  }
}







