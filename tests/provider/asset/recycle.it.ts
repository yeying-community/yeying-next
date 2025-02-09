import {DigitalFormatEnum, ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {createTestFile, getBlockAddress, getProviderProxy, getSecurityAlgorithm} from "../common/common";
import {AssetProvider} from "../../../src/provider/warehouse/asset";
import {Uploader} from "../../../src/provider/warehouse/uploader";
import {SearchAssetCondition} from "../../../src/yeying/api/asset/asset_pb";
import {ProviderOption} from "../../../src";
import {toJson} from "@bufbuild/protobuf";
import {NamespaceProvider} from "../../../src/provider/warehouse/namespace";
import {RecycleProvider} from "../../../src/provider/warehouse/recycle";
import {DeletedAssetMetadataSchema} from "../../../src/yeying/api/asset/recycle_pb";

// @ts-ignore
let assetProvider: AssetProvider = undefined
// @ts-ignore
let recycleProvider: RecycleProvider = undefined
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

    file = createTestFile("recycle.txt", 1024 * 1024 + 1)
    recycleProvider = new RecycleProvider(provider)
    namespaceProvider = new NamespaceProvider(provider)
    assetProvider = new AssetProvider(provider)

    const namespaceId: string = '7227c65a-cdf5-41b5-864a-dd92151b0e97'
    await namespaceProvider.create("recycle_test", "test", namespaceId)
    const uploader: Uploader = new Uploader(provider, getSecurityAlgorithm())
    asset = await uploader.upload(namespaceId, file, false)
    await assetProvider.delete(asset.namespaceId, asset.hash)
});

describe('Recycle', () => {
    it('search from trash', async () => {
        const condition: Partial<SearchAssetCondition> = {
            format: DigitalFormatEnum.DIGITAL_FORMAT_TEXT,
            namespaceId: asset.namespaceId,
        }

        const deletedAssets = await recycleProvider.search(condition, 1, 10)
        console.log(`Success to search deleted assets=${deletedAssets.length} from trash`)
        deletedAssets.forEach(a => {
            console.log(`deleted asset=${JSON.stringify(toJson(DeletedAssetMetadataSchema, a))}`)
        })
    })

    it('recover from trash', async () => {
        await recycleProvider.recover(asset.namespaceId, asset.hash)
        console.log(`Success to recover from trash, namespaceId=${asset.namespaceId}, hash=${asset.hash}`)
    })

    it('remove from trash', async () => {
        await assetProvider.delete(asset.namespaceId, asset.hash)
        await recycleProvider.remove(asset.namespaceId, asset.hash)
        console.log(`Success to remove from trash, namespaceId=${asset.namespaceId}, hash=${asset.hash}`)
    })
})