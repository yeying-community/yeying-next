import {
    AddRequest,
    AddRequestBody,
    DelRequest,
    GetRequest,
    GetResponseBody,
    ModRequest,
    ModRequestBody,
    UserMetadata
} from '../../yeying/api/user/user_pb'
import {getCurrentUtcString} from '../../common/date'
import {Authenticate} from '../common/authenticate'
import {UserClient} from '../../yeying/api/user/UserServiceClientPb'
import {MessageHeader} from '../../yeying/api/common/message_pb'
import {Provider} from '../common/model'
import {isValidString} from '../../common/string'

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
        return new Promise(async (resolve, reject) => {
            const user = new UserMetadata()
            user.setDid(this.authenticate.getDid())
            user.setName(name)
            user.setAvatar(avatar)
            user.setExtend(JSON.stringify({telephone: telephone, email: email}))
            user.setCreated(getCurrentUtcString())
            user.setCheckpoint(getCurrentUtcString())
            const body = new AddRequestBody()
            let header: MessageHeader
            try {
                user.setSignature(await this.authenticate.sign(user.serializeBinary()))
                body.setUser(user)
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error('Fail to create header for adding user', err)
                return reject(err)
            }

            const request = new AddRequest()
            request.setHeader(header)
            request.setBody(body)

            this.client.add(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).catch(reject).then((body) => resolve(body))
            })
        })
    }

    mod(name?: string, avatar?: string, extend?: string) {
        return new Promise(async (resolve, reject) => {
            const isValidAvatar = isValidString(avatar)
            const isValidExtend = isValidString(extend)
            const isValidName = isValidString(name)

            if (!isValidName && !isValidAvatar && !isValidExtend) {
                return reject(new Error('invalid parameter'))
            }

            const responseBody = await this.get()
            const user = responseBody.getUser()
            if (user === undefined) {
                return
            }

            if (isValidName) {
                user.setName(name)
            }

            if (isValidAvatar) {
                user.setAvatar(avatar)
            }

            if (isValidExtend) {
                user.setExtend(extend)
            }

            user.setCheckpoint(getCurrentUtcString())
            user.setSignature('')

            const body = new ModRequestBody()
            let header
            try {
                user.setSignature(await this.authenticate.sign(user.serializeBinary()))
                body.setUser(user)
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error('Fail to create header for modifying user', err)
                return reject(err)
            }

            const request = new ModRequest()
            request.setHeader(header)
            request.setBody(body)
            this.client.mod(request, null, (err, res) => {
                this.authenticate.doResponse(err, res)
                    .catch(reject)
                    .then((body) => resolve(body))
            })
        })
    }

    get() {
        return new Promise<GetResponseBody>(async (resolve, reject) => {
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
                this.authenticate.doResponse(err, res)
                    .catch(reject)
                    .then((body) => resolve(body))
            })
        })
    }

    del() {
        return new Promise(async (resolve, reject) => {
            let header
            try {
                header = await this.authenticate.createHeader()
            } catch (err) {
                console.error('Fail to create header for deleting user', err)
                return reject(err)
            }

            const request = new DelRequest()
            request.setHeader(header)
            this.client.del(request, null, (err, res) => {
                this.authenticate.doResponse(err, res)
                    .catch(reject)
                    .then((body) => resolve(body))
            })
        })
    }
}
