import {Authenticate} from "../common/authenticate";
import {Client, createClient} from "@connectrpc/connect";
import {ProviderOption} from "../common/model";
import {createGrpcWebTransport} from "@connectrpc/connect-web";
import {create, toBinary, toJson} from "@bufbuild/protobuf";
import {generateUuid} from "../../common/string";
import {getCurrentUtcString} from "../../common/date";
import {signSessionMetadata, verifySessionMetadata} from "../model/model";
import {isDeleted} from "../../common/status";
import {
    CreateSessionRequestBodySchema,
    CreateSessionRequestSchema,
    CreateSessionResponseBodySchema,
    DeleteSessionRequestBodySchema,
    DeleteSessionRequestSchema,
    DeleteSessionResponseBodySchema,
    SearchSessionConditionSchema,
    SearchSessionRequestBodySchema,
    SearchSessionRequestSchema,
    SearchSessionResponseBodySchema,
    Session,
    SessionDetail,
    SessionDetailRequestBodySchema,
    SessionDetailRequestSchema,
    SessionDetailResponseBodySchema,
    SessionMetadata,
    SessionMetadataSchema,
    UpdateSessionRequestBodySchema,
    UpdateSessionRequestSchema,
    UpdateSessionResponseBodySchema
} from "../../yeying/api/session/session_pb";
import {RequestPageSchema} from "../../yeying/api/common/message_pb";

/**
 * 会话提供商，增加配置创建和查询邀请码。
 *
 */
export class SessionProvider {
    /**
     * 认证实例，用于进行身份验证。
     *
     * @private
     */
    private readonly authenticate: Authenticate
    private client: Client<typeof Session>

    /**
     * 构造大模型供应商。
     *
     * @param option - 提供商配置，包括代理设置。
     * @example
     * ```ts
     * const option = { proxy: <proxy url>, blockAddress: <your block address> };
     * const sessionProvider = new SessionProvider(providerOption);
     * ```
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(
            Session,
            createGrpcWebTransport({
                baseUrl: option.proxy,
                useBinaryFormat: true
            })
        )
    }

    create(name: string, templateId?: string, description?: string, uid?: string) {
        return new Promise<SessionMetadata>(async (resolve, reject) => {
            const session = create(SessionMetadataSchema, {
                owner: this.authenticate.getDid(),
                name: name,
                uid: uid ? uid : generateUuid(),
                description: description,
                config: JSON.stringify({"templateId": templateId}),
                createdAt: getCurrentUtcString(),
                updatedAt: getCurrentUtcString(),
            })

            const body = create(CreateSessionRequestBodySchema, {session: session})
            let header
            try {
                await signSessionMetadata(this.authenticate, session)
                header = await this.authenticate.createHeader(toBinary(CreateSessionRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for creating session.', err)
                return reject(err)
            }


            const request = create(CreateSessionRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.create(request)
                await this.authenticate.doResponse(res, CreateSessionResponseBodySchema)
                await verifySessionMetadata(this.authenticate, res.body?.session)
                resolve(res.body?.session as SessionMetadata)
            } catch (err) {
                console.error('Fail to create session.', err)
                return reject(err)
            }
        })
    }

    search(page: number = 1, pageSize: number = 10, uid?: string, name?: string) {
        return new Promise<SessionMetadata[]>(async (resolve, reject) => {
            const body = create(SearchSessionRequestBodySchema, {
                condition: create(SearchSessionConditionSchema, {
                    uid: uid,
                    name: name,
                }),
                page: create(RequestPageSchema, {
                    page: page,
                    pageSize: pageSize,
                })
            })

            let header
            try {
                header = await this.authenticate.createHeader(toBinary(SearchSessionRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for searching session.', err)
                return reject(err)
            }

            const request = create(SearchSessionRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.search(request)
                await this.authenticate.doResponse(res, SearchSessionResponseBodySchema)
                const sessions: SessionMetadata[] = []
                if (res.body?.sessions !== undefined) {
                    for (const session of res.body.sessions) {
                        try {
                            await verifySessionMetadata(this.authenticate, session)
                            sessions.push(session)
                        } catch (err) {
                            console.error(`Fail to verify session=${toJson(SessionMetadataSchema, session)} when searching session`, err)
                        }
                    }
                }
                resolve(sessions)
            } catch (err) {
                console.error('Fail to search session.', err)
                return reject(err)
            }
        })
    }

    delete(uid: string) {
        return new Promise<void>(async (resolve, reject) => {
            const body = create(DeleteSessionRequestBodySchema, {uid: uid})
            let header
            try {
                header = await this.authenticate.createHeader(toBinary(DeleteSessionRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for deleting session.', err)
                return reject(err)
            }

            const request = create(DeleteSessionRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.delete(request)
                await this.authenticate.doResponse(res, DeleteSessionResponseBodySchema, isDeleted)
                resolve()
            } catch (err) {
                console.error('Fail to delete session.', err)
                return reject(err)
            }
        })
    }

    detail(uid: string) {
        return new Promise<SessionDetail>(async (resolve, reject) => {
            const body = create(SessionDetailRequestBodySchema, {uid: uid})
            let header
            try {
                header = await this.authenticate.createHeader(toBinary(SessionDetailRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for getting session detail.', err)
                return reject(err)
            }

            const request = create(SessionDetailRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.detail(request)
                await this.authenticate.doResponse(res, SessionDetailResponseBodySchema)
                const detail = res.body?.detail as SessionDetail
                await verifySessionMetadata(this.authenticate, detail.session)
                resolve(detail)
            } catch (err) {
                console.error('Fail to get session detail.', err)
                return reject(err)
            }
        })
    }

    update(session: SessionMetadata) {
        return new Promise<SessionMetadata>(async (resolve, reject) => {
            const body = create(UpdateSessionRequestBodySchema, {session: session})
            let header
            try {
                session.updatedAt = getCurrentUtcString()
                await signSessionMetadata(this.authenticate, session)
                header = await this.authenticate.createHeader(toBinary(UpdateSessionRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for updating session.', err)
                return reject(err)
            }


            const request = create(UpdateSessionRequestSchema, {header: header, body: body})
            try {
                const res = await this.client.update(request)
                await this.authenticate.doResponse(res, UpdateSessionResponseBodySchema)
                await verifySessionMetadata(this.authenticate, res.body?.session)
                resolve(res.body?.session as SessionMetadata)
            } catch (err) {
                console.error('Fail to update session.', err)
                return reject(err)
            }
        })
    }
}