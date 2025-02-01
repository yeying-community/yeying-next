import {
    AddUserRequestBodySchema,
    AddUserRequestSchema,
    AddUserResponseBody,
    AddUserResponseBodySchema,
    DeleteUserRequestSchema,
    DeleteUserResponseBody,
    DeleteUserResponseBodySchema,
    GetUserRequestSchema,
    GetUserResponseBody,
    GetUserResponseBodySchema,
    UserStateRequestSchema,
    UserStateResponseBody,
    UserStateResponseBodySchema,
    UpdateUserRequestBodySchema,
    UpdateUserRequestSchema,
    UpdateUserResponseBodySchema,
    User,
    UserMetadata,
    UserMetadataSchema
} from '../../yeying/api/user/user_pb'
import {getCurrentUtcString} from '../../common/date'
import {Authenticate} from '../common/authenticate'
import {MessageHeader} from '../../yeying/api/common/message_pb'
import {ProviderOption} from '../common/model'
import {create, toBinary} from "@bufbuild/protobuf";
import {createGrpcWebTransport} from "@connectrpc/connect-web";
import {Client, createClient} from '@connectrpc/connect'
import {NotFound} from "../../common/error";

/**
 * 代表了一个用户节点提供商，提供对用户的增、删、改、查操作。
 *
 * @class
 */
export class UserProvider {
    /**
     * 认证实例，用于进行身份验证。
     *
     * @private
     */
    private authenticate: Authenticate
    private client: Client<typeof User>

    /**
     * 构造函数，用于初始化 `UserProvider` 类。
     *
     * @param option - 提供商配置，包括代理设置。
     * @example
     * ```ts
     * const providerOption = { proxy: <proxy url>, blockAddress: <your block address> };
     * const userProvider = new UserProvider(providerOption);
     * ```
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(User, createGrpcWebTransport({
            baseUrl: option.proxy,
            useBinaryFormat: true,
        }));
    }

    /**
     * 成为供应商的用户。
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
        return new Promise<AddUserResponseBody>(async (resolve, reject) => {
            const user: UserMetadata = create(UserMetadataSchema, {
                did: this.authenticate.getDid(),
                name: name,
                avatar: avatar,
                createdAt: getCurrentUtcString(),
                updatedAt: getCurrentUtcString(),
            });

            const body = create(AddUserRequestBodySchema, {user: user})
            let header: MessageHeader
            try {
                user.signature = await this.authenticate.sign(toBinary(UserMetadataSchema, user))
                header = await this.authenticate.createHeader(toBinary(AddUserRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for adding user', err)
                return reject(err)
            }

            const request = create(AddUserRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.add(request)
                await this.authenticate.doResponse(res, AddUserResponseBodySchema)
                resolve(res.body as AddUserResponseBody)
            } catch (err) {
                console.error('Fail to add user', err)
                return reject(err)
            }
        })
    }


    /**
     * 从用户供应商获得存储的用户详情。
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
        return new Promise<GetUserResponseBody>(async (resolve, reject) => {
            let header
            try {
                header = await this.authenticate.createHeader()
            } catch (err) {
                console.error('Fail to create header for getting user', err)
                return reject(err)
            }

            const request = create(GetUserRequestSchema, {header: header})
            try {
                const res = await this.client.get(request)
                await this.authenticate.doResponse(res, GetUserResponseBodySchema)
                resolve(res.body as GetUserResponseBody)
            } catch (err) {
                console.error('Fail to get user', err)
                return reject(err)
            }
        })
    }

    /**
     * 修改用户信息。
     *
     * @param attributes - 需要修改的用户信息，目前支持修改avatar、name等。
     * @returns {Promise<UserMetadata>} 返回修改后的用户信息。
     * @throws 错误时抛出 `Error`。
     * @example
     * ```ts
     * userProvider.update({name: 'Jane Doe', avatar: 'avatar2.png'})
     *   .then(result => console.log(result))
     *   .catch(err => console.error(err));
     * ```
     */
    update(attributes: { [key: string]: any }): Promise<UserMetadata> {
        return new Promise<UserMetadata>(async (resolve, reject) => {
            const responseBody = await this.get()
            const user = responseBody.user
            if (user === undefined) {
                return reject(new NotFound('Not found user'))
            }

            let changed = false
            if (attributes.name) {
                user.name = attributes.name
                changed = true
            }

            if (attributes.avatar) {
                user.avatar = attributes.avatar
                changed = true
            }

            if (!changed) {
                return resolve(user)
            }

            user.updatedAt = getCurrentUtcString()
            user.signature = ''

            const body = create(UpdateUserRequestBodySchema, {})
            let header
            try {
                user.signature = await this.authenticate.sign(toBinary(UserMetadataSchema, user))
                body.user = user
                header = await this.authenticate.createHeader(toBinary(UpdateUserRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for modifying user', err)
                return reject(err)
            }

            const request = create(UpdateUserRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.update(request)
                await this.authenticate.doResponse(res, UpdateUserResponseBodySchema)
                resolve(user)
            } catch (err) {
                console.error('Fail to update user', err)
                return reject(err)
            }
        })
    }


    /**
     * 从当前供应商获取用户状态信息。
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
        return new Promise<UserStateResponseBody>(async (resolve, reject) => {
            let header
            try {
                header = await this.authenticate.createHeader()
            } catch (err) {
                console.error('Fail to create header for getting user state.', err)
                return reject(err)
            }

            const request = create(UserStateRequestSchema, {header: header})
            try {
                const res = await this.client.state(request)
                await this.authenticate.doResponse(res, UserStateResponseBodySchema)
                resolve(res.body as UserStateResponseBody)
            } catch (err) {
                console.error('Fail to get user state', err)
                return reject(err)
            }
        })
    }

    /**
     * 从当前供应商删除用户。
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
        return new Promise<DeleteUserResponseBody>(async (resolve, reject) => {
            let header
            try {
                header = await this.authenticate.createHeader()
            } catch (err) {
                console.error('Fail to create header for deleting user', err)
                return reject(err)
            }

            const request = create(DeleteUserRequestSchema, {header: header})
            try {
                const res = await this.client.delete(request)
                await this.authenticate.doResponse(res, DeleteUserResponseBodySchema)
                resolve(res.body as DeleteUserResponseBody)
            } catch (err) {
                console.error('Fail to get user state', err)
                return reject(err)
            }
        })
    }
}
