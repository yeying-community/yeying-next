import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {createTestFile, getIdentity, getNamespace, getProviderProxy} from "../common/common";
import {ProviderOption, Uploader, UserProvider} from "../../../src";
import {NamespaceProvider} from "../../../src/provider/warehouse/namespace";
import {LinkProvider} from "../../../src/provider/warehouse/link";
import {LinkMetadataSchema, LinkTypeEnum} from "../../../src/yeying/api/asset/link_pb";
import {toJson} from "@bufbuild/protobuf";

const namespace = getNamespace()
const identity = getIdentity()
const providerOption: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_WAREHOUSE),
    blockAddress: identity.blockAddress,
}

const file: File = createTestFile("link.txt", 1024 * 1024 + 1)

beforeAll(async () => {
    const userProvider = new UserProvider(providerOption)
    await userProvider.add(identity.metadata.name, identity.metadata.avatar)

    const namespaceProvider = new NamespaceProvider(providerOption)
    await namespaceProvider.create(namespace.name, "", namespace.uid)
});

afterAll(() => {

})

describe('Link', () => {
    it('create', async () => {
        const uploader = new Uploader(providerOption, identity.securityConfig.algorithm)
        const asset = await uploader.upload(namespace.uid, file, false)

        const linkProvider = new LinkProvider(providerOption)
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