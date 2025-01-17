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
     * 添加新用户。
     *
     * @param name - 用户名称。
     * @param telephone - 用户电话。
     * @param email - 用户电子邮件。
     * @param avatar - 用户头像。
     * @returns 返回添加用户的结果。
     * @throws 错误时抛出 `Error`。
     * @example
     * ```ts
     * userProvider.add('John Doe', '1234567890', 'john.doe@example.com', 'avatar.png')
     *   .then(result => console.log(result))
     *   .catch(err => console.error(err));
     * ```
     */
    add(name: string, telephone: string, email: string, avatar: string) {
        return new Promise(async (resolve, reject) => {
            const user = new UserMetadata()
            user.setDid(this.authenticate.getDid())
            user.setName(name)
            user.setAvatar(avatar)
            user.setExtend(JSON.stringify({ telephone: telephone, email: email }))
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
     * @param name - 新的用户名称（可选）。
     * @param avatar - 新的用户头像（可选）。
     * @param extend - 新的扩展信息（可选）。
     * @returns 返回修改用户信息的结果。
     * @throws 错误时抛出 `Error`。
     * @example
     * ```ts
     * userProvider.mod('Jane Doe', 'avatar2.png', '{"email": "jane.doe@example.com"}')
     *   .then(result => console.log(result))
     *   .catch(err => console.error(err));
     * ```
     */
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
     * 删除用户。
     *
     * @returns 返回删除用户的结果。
     * @throws 错误时抛出 `Error`。
     * @example
     * ```ts
     * userProvider.del()
     *   .then(result => console.log(result))
     *   .catch(err => console.error(err));
     * ```
     */
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
                this.authenticate.doResponse(err, res).then((body) => resolve(body), reject)
            })
        })
    }
}
