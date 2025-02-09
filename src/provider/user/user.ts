import {
    AddUserRequestBodySchema,
    AddUserRequestSchema,
    AddUserResponseBody,
    AddUserResponseBodySchema,
    DeleteUserRequestSchema,
    DeleteUserResponseBody,
    DeleteUserResponseBodySchema,
    UpdateUserRequestBodySchema,
    UpdateUserRequestSchema,
    UpdateUserResponseBodySchema,
    User,
    UserDetailRequestSchema,
    UserDetailResponseBody,
    UserDetailResponseBodySchema,
    UserMetadata,
    UserMetadataSchema
} from '../../yeying/api/user/user_pb'
import { getCurrentUtcString } from '../../common/date'
import { Authenticate } from '../common/authenticate'
import { MessageHeader } from '../../yeying/api/common/message_pb'
import { ProviderOption } from '../common/model'
import { create, toBinary } from '@bufbuild/protobuf'
import { createGrpcWebTransport } from '@connectrpc/connect-web'
import { Client, createClient } from '@connectrpc/connect'

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
        this.client = createClient(
            User,
            createGrpcWebTransport({
                baseUrl: option.proxy,
                useBinaryFormat: true
            })
        )
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
                updatedAt: getCurrentUtcString()
            })

            const body = create(AddUserRequestBodySchema, { user: user })
            let header: MessageHeader
            try {
                user.signature = await this.authenticate.sign(toBinary(UserMetadataSchema, user))
                header = await this.authenticate.createHeader(toBinary(AddUserRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for adding user', err)
                return reject(err)
            }

            const request = create(AddUserRequestSchema, { header: header, body: body })
            try {
                const res = await this.client.add(request)
                await this.authenticate.doResponse(res, AddUserResponseBodySchema)
                const resBody = res.body as AddUserResponseBody
                if (await this.verifyUserMetadata(resBody.user as UserMetadata)) {
                    resolve(resBody)
                } else {
                    reject(new Error('invalid user metadata!'))
                }
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
     * userProvider.detail()
     *   .then(user => console.log(user))
     *   .catch(err => console.error(err));
     * ```
     */
    detail() {
        return new Promise<UserDetailResponseBody>(async (resolve, reject) => {
            let header
            try {
                header = await this.authenticate.createHeader()
            } catch (err) {
                console.error('Fail to create header for getting user', err)
                return reject(err)
            }

            const request = create(UserDetailRequestSchema, { header: header })
            try {
                const res = await this.client.detail(request)
                await this.authenticate.doResponse(res, UserDetailResponseBodySchema)
                const resBody = res.body as UserDetailResponseBody
                if (await this.verifyUserMetadata(resBody.user)) {
                    resolve(resBody)
                } else {
                    reject(new Error('invalid user metadata!'))
                }
            } catch (err) {
                console.error('Fail to get user', err)
                return reject(err)
            }
        })
    }

    private async verifyUserMetadata(user?: UserMetadata) {
        if (user === undefined) {
            return false
        }

        const signature = user.signature
        try {
            user.signature = ''
            return await this.authenticate.verify(user.did, toBinary(UserMetadataSchema, user), signature)
        } finally {
            user.signature = signature
        }
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
    update(user: UserMetadata): Promise<UserMetadata> {
        return new Promise<UserMetadata>(async (resolve, reject) => {
            const body = create(UpdateUserRequestBodySchema, {})
            let header
            try {
                body.user = await this.signUserMetadata(user)
                header = await this.authenticate.createHeader(toBinary(UpdateUserRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for modifying user', err)
                return reject(err)
            }

            const request = create(UpdateUserRequestSchema, { header: header, body: body })
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

            const request = create(DeleteUserRequestSchema, { header: header })
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

    private async signUserMetadata(user: UserMetadata) {
        user.updatedAt = getCurrentUtcString()
        user.signature = ''
        user.signature = await this.authenticate.sign(toBinary(UserMetadataSchema, user))
        return user
    }
}
