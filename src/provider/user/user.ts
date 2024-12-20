import {AddRequest, AddRequestBody, AddResponse, GetRequest, GetResponse} from "../../yeying/api/user/user_pb";
import {getCurrentUtcString} from "../../common/date";
import {Authenticate} from "../common/authenticate";
import {UserClient} from "../../yeying/api/user/UserServiceClientPb";
import {MessageHeader} from "../../yeying/api/common/message_pb";
import {RpcError} from "grpc-web";
import {NetworkDown} from "../../common/error";
import {convertResponseStatusToError} from "../../common/status";
import {Provider} from "../common/model";


/**
 * 代表了一个节点，夜莺社区提供了默认的节点，也可以选择其他社区的节点，以及使用该节点的生态应用
 */

export class UserProvider {
    private authenticate: Authenticate
    private client: UserClient

    constructor(authenticate: Authenticate, provider: Provider) {
        this.authenticate = authenticate
        this.client = new UserClient(provider.proxy)
    }

    add(name: string, telephone: string, email: string, avatar: string) {
        return new Promise<void>(async (resolve, reject) => {
            const body = new AddRequestBody()
            body.setName(name)
            body.setExtend(JSON.stringify({telephone: telephone, email: email}))
            body.setAvatar(avatar)
            body.setCreated(getCurrentUtcString())
            body.setCheckpoint(getCurrentUtcString())
            let header: MessageHeader
            try {
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error('Fail to create header for adding user', err)
                return reject(err)
            }

            const request = new AddRequest()
            request.setHeader(header)
            request.setBody(body)

            this.client.add(request, null, (err, res) => {
                this.doAddResponse(err, res).then(() => resolve()).catch(err => reject(err))
            })
        })
    }

    //
    // mod(newName, newExtend) {
    //   return new Promise(async (resolve, reject) => {
    //     const method = '/yeying.api.user.User/Mod'
    //     const body = new ModRequestBody()
    //     body.setName(newName)
    //     body.setExtend(newExtend)
    //     let header
    //     try {
    //       header = await this.authenticate.createHeader(method, body)
    //     } catch (err) {
    //       console.error('Fail to create header for modifying user', err)
    //       return reject(err)
    //     }
    //
    //     const request = new ModRequest()
    //     request.setHeader(header)
    //     request.setBody(body)
    //     this.client.mod(request, undefined, (err, res) => {
    //       this.doModResponse(method, err, res, resolve, reject)
    //     })
    //   })
    // }
    //
    get() {
      return new Promise(async (resolve, reject) => {
        let header
        try {
          header = await this.authenticate.createHeader()
        } catch (err) {
          console.error('Fail to create header for getting user', err)
          return reject(err)
        }

        const request = new GetRequest()
        request.setHeader(header)
        this.client.get(request, null, (err, res) => {
          this.doGetResponse(err, res).then((data) => resolve(data)).catch(err => reject(err))
        })
      })
    }
    //
    // del() {
    //   return new Promise(async (resolve, reject) => {
    //     const method = '/yeying.api.user.User/Del'
    //     let header
    //     try {
    //       header = await this.authenticate.createHeader(method)
    //     } catch (err) {
    //       console.error('Fail to create header for deleting user', err)
    //       return reject(err)
    //     }
    //
    //     const request = new DelRequest()
    //     request.setHeader(header)
    //     this.client.del(request, undefined, (err, res) => {
    //       this.doDelResponse(method, err, res, resolve, reject)
    //     })
    //   })
    // }
    //
    async doAddResponse(err: RpcError, res: AddResponse) {
        const header = res.getHeader()
        const body = res.getBody()
        const status = body?.getStatus()
        if (err === undefined || header === undefined || body === undefined || status === undefined) {
            throw new NetworkDown("Fail to add")
        }

        const error = convertResponseStatusToError(status)
        if (error !== undefined) {
            throw error
        }

        await this.authenticate.verifyHeader(header, body?.serializeBinary())
    }

    //
    // doModResponse(method, err, res, resolve, reject) {
    //   if (doError(err, reject, this.provider)) {
    //     return
    //   }
    //
    //   const body = res.getBody()
    //   this.authenticate.verifyHeader(method, res.getHeader(), body).then(() => {
    //     doStatus(body.getStatus(), resolve, reject, this.provider, isOk)
    //   }, e => reject(e))
    // }
    //
    async doGetResponse(err: RpcError, res: GetResponse) {
        const header = res.getHeader()
        const body = res.getBody()
        const status = body?.getStatus()
        if (err === undefined || header === undefined || body === undefined || status === undefined) {
            throw new NetworkDown("Fail to get")
        }

        const error = convertResponseStatusToError(status)
        if (error !== undefined) {
            throw error
        }

        await this.authenticate.verifyHeader(header, body?.serializeBinary())
        return res.getBody()?.getUser()
    }
    //
    // doDelResponse(method, err, res, resolve, reject) {
    //   if (doError(err, reject, this.provider)) {
    //     return
    //   }
    //
    //   const body = res.getBody()
    //   this.authenticate.verifyHeader(method, res.getHeader(), body).then(r => {
    //     doStatus(body.getStatus(), resolve, reject, this.provider, isDeleted)
    //   }, e => reject(e))
    // }
}













