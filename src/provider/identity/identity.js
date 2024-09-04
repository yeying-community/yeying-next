import {IdentityClient} from '../../yeying/api/identity/identity_grpc_web_pb.cjs'
import identity_pkg from '../../yeying/api/identity/identity_pb.cjs'
import {fromStrToCategoryCode} from '../../common/code.js'
import {doError, doStatus, isCreated, isDeleted} from '../../common/status.js'

const {
  RegisterRequest, RegisterRequestBody, IdentityMetadata, UnregisterRequest, UnregisterRequestBody, SearchRequest, SearchRequestBody,
} = identity_pkg

export function IdentityProvider(authenticate, provider) {
  this.authenticate = authenticate
  this.provider = provider
  this.client = new IdentityClient(this.provider.metadata.extend.proxy, null, {
    'grpc.max_receive_message_length': 1024 * 1024 * 64 // 64MB
  })
}

IdentityProvider.prototype.register = function (identity) {
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
      throw err
    }

    const request = new RegisterRequest()
    request.setHeader(header)
    request.setBody(body)
    this.client.register(request, undefined, (err, res) => {
      this.doRegisterResponse(method, err, res, resolve, reject)
    })
  })
}

IdentityProvider.prototype.unregister = function (did) {
  return new Promise(async (resolve, reject) => {
    const method = '/yeying.api.identity.Identity/Unregister'
    const body = new UnregisterRequestBody()
    body.setDid(did)

    let header
    try {
      header = await this.authenticate.createHeader(method, body)
    } catch (err) {
      console.error('Fail to create header for unregister identity', err)
      throw err
    }

    const request = new UnregisterRequest()
    request.setHeader(header)
    request.setBody(body)

    this.client.unregister(request, undefined, (err, res) => {
      this.doUnregisterResponse(method, err, res, resolve, reject)
    })
  })
}

IdentityProvider.prototype.search = function (serviceCode) {
  return new Promise(async (resolve, reject) => {
    const method = '/yeying.api.identity.Identity/Search'
    const body = new SearchRequestBody()
    body.setServicecode(serviceCode)
    let header
    try {
      header = await this.authenticate.createHeader(method, body)
    } catch (err) {
      console.error('Fail to create header for searching identity', err)
      throw err
    }

    const request = new SearchRequest()
    request.setHeader(header)
    request.setBody(body)
    this.client.search(request, undefined, (err, res) => {
      this.doSearchResponse(method, err, res, resolve, reject)
    })
  })
}

IdentityProvider.prototype.doRegisterResponse = function (method, err, res, resolve, reject) {
  if (doError(err, reject, this.provider)) {
    return
  }

  const body = res.getBody()
  this.authenticate.verifyHeader(method, res.getHeader(), body).then(() => {
    doStatus(body.getStatus(), resolve, reject, this.provider, isCreated)
  }, e => reject(e))
}

IdentityProvider.prototype.doUnregisterResponse = function (method, err, res, resolve, reject) {
  if (doError(err, reject, this.provider)) {
    return
  }

  const body = res.getBody()
  this.authenticate.verifyHeader(method, res.getHeader(), body).then(() => {
    doStatus(body.getStatus(), resolve, reject, this.provider, isDeleted)
  }, e => reject(e))
}

IdentityProvider.prototype.doSearchResponse = function (method, err, res, resolve, reject) {
  if (doError(err, reject, this.provider)) {
    return
  }

  const body = res.getBody()
  this.authenticate.verifyHeader(method, res.getHeader(), body).then(() => {
    doStatus(body.getStatus(), () => resolve(body.getIdentitiesList()), reject, this.provider)
  }, e => reject(e))
}