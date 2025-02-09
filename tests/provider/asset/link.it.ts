import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {createTestFile, getBlockAddress, getProviderProxy, getSecurityAlgorithm} from "../common/common";
import {AssetMetadata, ProviderOption, Uploader} from "../../../src";
import {NamespaceProvider} from "../../../src/provider/warehouse/namespace";
import {LinkProvider} from "../../../src/provider/warehouse/link";
import {LinkMetadataSchema, LinkTypeEnum} from "../../../src/yeying/api/asset/link_pb";
import {toJson} from "@bufbuild/protobuf";


// @ts-ignore
let linkProvider: LinkProvider = undefined
// @ts-ignore
let namespaceProvider: NamespaceProvider = undefined
// @ts-ignore
let file: File = undefined
// @ts-ignore
let asset: AssetMetadata = undefined

beforeAll(async () => {
    console.log("start")
    const provider: ProviderOption = {
        proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_WAREHOUSE),
        blockAddress: getBlockAddress(),
    }

    file = createTestFile("link.txt", 1024 * 1024 + 1)
    linkProvider = new LinkProvider(provider)
    namespaceProvider = new NamespaceProvider(provider)
    const namespaceId = '952399be-acd5-47f5-94a1-2b84a324e3c4'

    await namespaceProvider.create("link_test", "test", namespaceId)
    const uploader = new Uploader(provider, getSecurityAlgorithm())
    asset = await uploader.upload(namespaceId, file, false)
});

afterAll(() => {

})

describe('Link', () => {
    it('create', async () => {
        console.log(`Try to create link for asset=${asset.hash}`)
        const [link, url] = await linkProvider.create(
            asset.namespaceId,
            asset.hash,
            24 * 3600,
            LinkTypeEnum.LINK_STATUS_PUBLIC)
        console.log(`Success to get link=${JSON.stringify(toJson(LinkMetadataSchema, link))}`)
        console.log(`Success to get url=${url.url}`)
    })
})