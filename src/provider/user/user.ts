import {
    AddRequest,
    AddRequestBody, DeleteRequest,
    GetRequest,
    GetResponseBody, StateResponseBody, UpdateRequest, UpdateRequestBody,
    UserMetadata
} from '../../yeying/api/user/user_pb'
import { getCurrentUtcString } from '../../common/date'
import { Authenticate } from '../common/authenticate'
import { UserClient } from '../../yeying/api/user/UserServiceClientPb'
import { MessageHeader } from '../../yeying/api/common/message_pb'
import { ProviderOption } from '../common/model'
import { isValidString } from '../../common/string'

/**
 * 代表了一个用户节点提供商，提供对用户的增、删、改、查操作。
 *
 * @class
 * @example
 * ```ts
 * const authenticate = new Authenticate(blockAddress);
 * const providerOption: ProviderOption = { proxy: 'http://example.com' };
 * const userProvider = new UserProvider(authenticate, providerOption);
 * ```
 */
export class UserProvider {
    private authenticate: Authenticate
    private client: UserClient

    /**
     * 构造函数，用于初始化 `UserProvider` 类。
     *
     * @param authenticate - 认证实例，用于进行身份验证。
     * @param option - 提供商配置，包括代理设置。
     * @example
     * ```ts
     * const userProvider = new UserProvider(authenticate, { proxy: 'http://example.com' });
     * ```
     */
    constructor(authenticate: Authenticate, option: ProviderOption) {
        this.authenticate = authenticate
        this.client = new UserClient(option.proxy)
    }

    /**
     * 成为用户。
     *
     * @param name - 用户名称。
     * @param avatar - 用户头像。
     * @returns 返回添加用户的结果。
     * @throws 错误时抛出 `Error`。
     * @example
     * ```ts
     * userProvider.add('John Doe', 'avatar.png')
     *   .then(result => console.log(result))
     *   .catch(err => console.error(err));
     * ```
     */
    add(name: string, avatar: string) {
        return new Promise(async (resolve, reject) => {
            const user = new UserMetadata()
            user.setDid(this.authenticate.getDid())
            user.setName(name)
            user.setAvatar(avatar)
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
                this.authenticate.doResponse(err, res).then((body) => resolve(body), reject)
            })
        })
    }

    /**
     * 修改用户信息。
     *
     * @param dict - 需要修改的用户信息，目前支持修改avatar、name等。
     * @returns 返回修改用户信息的结果。
     * @throws 错误时抛出 `Error`。
     * @example
     * ```ts
     * userProvider.update({name: 'Jane Doe', avatar: 'avatar2.png'})
     *   .then(result => console.log(result))
     *   .catch(err => console.error(err));
     * ```
     */
    update(dict: { [key: string]: any }) {
        return new Promise(async (resolve, reject) => {
            const responseBody = await this.get()
            const user = responseBody.getUser()
            if (user === undefined) {
                return
            }
            let changed = false
            if (dict.name) {
                user.setName(dict.name)
                changed = true
            }

            if (dict.avatar) {
                user.setAvatar(dict.avatar)
                changed = true
            }

            if (!changed) {
                return
            }

            user.setCheckpoint(getCurrentUtcString())
            user.setSignature('')

            const body = new UpdateRequestBody()
            let header
            try {
                user.setSignature(await this.authenticate.sign(user.serializeBinary()))
                body.setUser(user)
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error('Fail to create header for modifying user', err)
                return reject(err)
            }

            const request = new UpdateRequest()
            request.setHeader(header)
            request.setBody(body)
            this.client.update(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then((body) => resolve(body), reject)
            })
        })
    }

    /**
     * 获取用户信息。
     *
     * @returns 返回用户信息。
     * @throws 错误时抛出 `Error`。
     * @example
     * ```ts
     * userProvider.get()
     *   .then(user => console.log(user))
     *   .catch(err => console.error(err));
     * ```
     */
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
                this.authenticate.doResponse(err, res).then((body) => resolve(body), reject)
            })
        })
    }

    /**
     * 获取用户状态。
     *
     * @returns 返回用户状态。
     * @throws 错误时抛出 `Error`。
     * @example
     * ```ts
     * userProvider.state()
     *   .then(user => console.log(user))
     *   .catch(err => console.error(err));
     * ```
     */
    state() {
        return new Promise<StateResponseBody>(async (resolve, reject) => {
            let header
            try {
                header = await this.authenticate.createHeader()
            } catch (err) {
                console.error('Fail to create header for getting user state.', err)
                return reject(err)
            }

            const request = new GetRequest()
            request.setHeader(header)
            this.client.state(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then((body) => resolve(body), reject)
            })
        })
    }

    /**
     * 删除用户。
     *
     * @returns 返回删除用户的结果。
     * @throws 错误时抛出 `Error`。
     * @example
     * ```ts
     * userProvider.delete()
     *   .then(result => console.log(result))
     *   .catch(err => console.error(err));
     * ```
     */
    delete() {
        return new Promise(async (resolve, reject) => {
            let header
            try {
                header = await this.authenticate.createHeader()
            } catch (err) {
                console.error('Fail to create header for deleting user', err)
                return reject(err)
            }

            const request = new DeleteRequest()
            request.setHeader(header)
            this.client.delete(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then((body) => resolve(body), reject)
            })
        })
    }
}
