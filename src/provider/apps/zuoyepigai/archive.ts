import { Authenticate } from '../../common/authenticate'
import { MessageHeader } from '../../../yeying/api/common/message_pb'
import { ProviderOption } from '../../common/model'
import { Archive, ArchiveListRequestBodySchema, ArchiveListRequestSchema, ArchiveListResponseBody, ArchiveListResponseBodySchema,
    ArchiveDetailRequestSchema, ArchiveDetailRequestBodySchema, ArchiveDetailResponseSchema, ArchiveDetailResponseBodySchema,
    ArchiveDetailResponseBody
 } from '../../../yeying/api/apps/zuoyepigai/archive_pb'
import { Client, createClient } from '@connectrpc/connect'
import { createGrpcWebTransport } from '@connectrpc/connect-web'
import { create, toBinary } from '@bufbuild/protobuf'

/**
 * 学生档案
 */
export class ArchiveProvider {
    private authenticate: Authenticate
    private client: Client<typeof Archive>

    /**
     * 构造函数
     * @param option - 提供者选项，如代理设置
     * @example
     * ```ts
     * const providerOption = { proxy: <proxy url>, blockAddress: <your block address> };
     * const archiveProvider = new ArchiveProvider(providerOption);
     * ```
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(
            Archive,
            createGrpcWebTransport({
                baseUrl: option.proxy,
                useBinaryFormat: true
            })
        )
    }

    /**
     * 学生档案列表
     * @param userUid 
     * @returns 
     */
    list(userUid: string) {
        return new Promise<ArchiveListResponseBody>(async (resolve, reject) => {
            const body = create(ArchiveListRequestBodySchema, {
                userUid: userUid
            })

            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(toBinary(ArchiveListRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for list Archive', err)
                return reject(err)
            }

            const request = create(ArchiveListRequestSchema, { header: header, body: body })
            console.log("获取 request")
            console.log(request)
            try {
                const res = await this.client.list(request)
                await this.authenticate.doResponse(res, ArchiveListResponseBodySchema)
                resolve(res.body as ArchiveListResponseBody)
            } catch (err) {
                console.error('Fail to get archive list', err)
                return reject(err)
            }
        })
    }

    /**
     * 学生档案详情
     * @param uid 
     * @returns 
     */
    detail(uid: string) {
        return new Promise<ArchiveDetailResponseBody>(async (resolve, reject) => {
            const body = create(ArchiveDetailRequestBodySchema, {
                uid: uid
            })

            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(toBinary(ArchiveDetailRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for detail Archive', err)
                return reject(err)
            }

            const request = create(ArchiveDetailRequestSchema, { header: header, body: body })
            console.log("获取 request")
            console.log(request)
            try {
                const res = await this.client.detail(request)
                await this.authenticate.doResponse(res, ArchiveDetailResponseBodySchema)
                resolve(res.body as ArchiveDetailResponseBody)
            } catch (err) {
                console.error('Fail to get archive detail', err)
                return reject(err)
            }
        })
    }
}