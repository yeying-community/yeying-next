import { Authenticate } from '../common/authenticate'
import { Client, createClient } from '@connectrpc/connect'
import {
    CreateLinkRequestBodySchema,
    CreateLinkRequestSchema,
    CreateLinkResponseBodySchema,
    Link,
    LinkMetadata,
    LinkMetadataSchema,
    LinkTypeEnum,
    UrlMetadata
} from '../../yeying/api/asset/link_pb'
import { ProviderOption } from '../common/model'
import { createGrpcWebTransport } from '@connectrpc/connect-web'
import { create, toBinary } from '@bufbuild/protobuf'
import { generateUuid } from '../../common/string'
import { formatDateTime, getCurrentUtcDateTime, getCurrentUtcString, plusSecond } from '../../common/date'

/**
 * LinkProvider 类提供对资产分享链接的管理
 */
export class LinkProvider {
    private authenticate: Authenticate
    private client: Client<typeof Link>

    /**
     * 创建 AssetProvider 实例。
     * @param option - 提供者选项，包括代理设置等。
     * @example
     * const providerOption = { proxy: <proxy url>, blockAddress: <your block address> };
     * const linkProvider = new LinkProvider(providerOption);
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(
            Link,
            createGrpcWebTransport({
                baseUrl: option.proxy,
                useBinaryFormat: true
            })
        )
    }

    /**
     * 创建资产分享链接
     *
     * @param namespaceId 资产命名空间
     * @param hash 要分享的资产哈希值
     * @param duration 分享链接有效时长，单位是秒
     * @param type 分享链接类型
     * @param visitors 指定具体的访问者
     *
     * @returns Promise 创建资产分享链接的状态和元信息
     *
     * @example
     * linkProvider.create(assetMetadata).then(response => { console.log(response); });
     */
    create(namespaceId: string, hash: string, duration: number, type: LinkTypeEnum, visitors: string[] = []) {
        return new Promise<[LinkMetadata, UrlMetadata]>(async (resolve, reject) => {
            const link = create(LinkMetadataSchema, {
                namespaceId: namespaceId,
                owner: this.authenticate.getDid(),
                uid: generateUuid(),
                createdAt: getCurrentUtcString(),
                expiredAt: formatDateTime(plusSecond(getCurrentUtcDateTime(), duration)),
                hash: hash,
                type: type,
                visitors: visitors && visitors.length > 0 ? visitors.join(',') : undefined
            })

            const body = create(CreateLinkRequestBodySchema, {
                link: link
            })

            let header
            try {
                link.signature = await this.authenticate.sign(toBinary(LinkMetadataSchema, link))
                header = await this.authenticate.createHeader(toBinary(CreateLinkRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header when creating link for asset', err)
                return reject(err)
            }

            const request = create(CreateLinkRequestSchema, {
                header: header,
                body: body
            })

            try {
                const res = await this.client.create(request)
                await this.authenticate.doResponse(res, CreateLinkResponseBodySchema)
                resolve([res?.body?.link as LinkMetadata, res?.body?.url as UrlMetadata])
            } catch (err) {
                console.error('Fail to create link for asset', err)
                return reject(err)
            }
        })
    }
}
