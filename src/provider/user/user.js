import {UserClient} from '../../yeying/api/user/user_grpc_web_pb.cjs'
import user_pkg from '../../yeying/api/user/user_pb.cjs'
import {doError, doStatus, isCreated, isDeleted, isOk} from '../../common/status.js'
import {getCurrentUtcString} from '../../common/date.js'

const {AddRequest, AddRequestBody, DelRequest, GetRequest, ModRequest, ModRequestBody} = user_pkg

/**
 * 代表了一个节点，夜莺社区提供了默认的节点，也可以选择其他社区的节点，以及使用该节点的生态应用
 */

export class UserProvider {
  constructor(authenticate, provider) {
    this.authenticate = authenticate
    this.provider = provider
    this.client = new UserClient(this.provider.metadata.extend.proxy)
  }
}

UserProvider.prototype.addUser = function (name, telephone, email, avatar) {
  return new Promise(async (resolve, reject) => {
    const method = '/yeying.api.user.User/Add'
    const body = new AddRequestBody()
    body.setName(name)
    body.setExtend(JSON.stringify({telephone: telephone, email: email, avatar: avatar}))
    body.setCreated(getCurrentUtcString())
    body.setCheckpoint(getCurrentUtcString())
    let header
    try {
      header = await this.authenticate.createHeader(method, body)
    } catch (err) {
      console.error('Fail to create header for adding user', err)
      throw err
    }

    const request = new AddRequest()
    request.setHeader(header)
    request.setBody(body)
    this.client.add(request, undefined, (err, res) => {
      this.doAddResponse(method, err, res, resolve, reject)
    })
  })
}

UserProvider.prototype.doAddResponse = function (method, err, res, resolve, reject) {
  if (doError(err, reject, this.provider)) {
    return
  }

  const body = res.getBody()
  this.authenticate.verifyHeader(method, res.getHeader(), body).then(r => {
    doStatus(body.getStatus(), resolve, reject, this.provider, isCreated)
  }, e => reject(e))
}

UserProvider.prototype.modUser = function (newName, newExtend) {
  return new Promise(async (resolve, reject) => {
    const method = '/yeying.api.user.User/Mod'
    const body = new ModRequestBody()
    body.setName(newName)
    body.setExtend(newExtend)
    let header
    try {
      header = await this.authenticate.createHeader(method, body)
    } catch (err) {
      console.error('Fail to create header for modifying user', err)
      throw err
    }

    const request = new ModRequest()
    request.setHeader(header)
    request.setBody(body)
    this.client.mod(request, undefined, (err, res) => {
      this.doModResponse(method, err, res, resolve, reject)
    })
  })
}

UserProvider.prototype.doModResponse = function (method, err, res, resolve, reject) {
  if (doError(err, reject, this.provider)) {
    return
  }

  const body = res.getBody()
  this.authenticate.verifyHeader(method, res.getHeader(), body).then(() => {
    doStatus(body.getStatus(), resolve, reject, this.provider, isOk)
  }, e => reject(e))
}

UserProvider.prototype.getUser = function () {
  return new Promise(async (resolve, reject) => {
    const method = '/yeying.api.user.User/Get'
    let header
    try {
      header = await this.authenticate.createHeader(method)
    } catch (err) {
      console.error('Fail to create header for getting user', err)
      throw err
    }

    const request = new GetRequest()
    request.setHeader(header)
    this.client.get(request, undefined, (err, res) => {
      this.doGetResponse(method, err, res, resolve, reject)
    })
  })
}

UserProvider.prototype.doGetResponse = function (method, err, res, resolve, reject) {
  if (doError(err, reject, this.provider)) {
    return
  }

  const body = res.getBody()
  this.authenticate.verifyHeader(method, res.getHeader(), body).then(() => {
    doStatus(body.getStatus(), () => resolve(body.getUser()), reject, this.provider, isCreated)
  }, e => reject(e))
}

UserProvider.prototype.delUser = function () {
  return new Promise(async (resolve, reject) => {
    const method = '/yeying.api.user.User/Del'
    let header
    try {
      header = await this.authenticate.createHeader(method)
    } catch (err) {
      console.error('Fail to create header for deleting user', err)
      throw err
    }

    const request = new DelRequest()
    request.setHeader(header)
    this.client.del(request, undefined, (err, res) => {
      this.doDelResponse(method, err, res, resolve, reject)
    })
  })
}

UserProvider.prototype.doDelResponse = function (method, err, res, resolve, reject) {
  if (doError(err, reject, this.provider)) {
    return
  }

  const body = res.getBody()
  this.authenticate.verifyHeader(method, res.getHeader(), body).then(r => {
    doStatus(body.getStatus(), resolve, reject, this.provider, isDeleted)
  }, e => reject(e))
}