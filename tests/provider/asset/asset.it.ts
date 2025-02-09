import {CipherTypeEnum, DigitalFormatEnum, ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {getBlockAddress, getProviderProxy} from "../common/common";
import {AssetProvider} from "../../../src/provider/warehouse/asset";
import {Uploader} from "../../../src/provider/warehouse/uploader";
import {Downloader} from "../../../src/provider/warehouse/downloader";
import {SecurityAlgorithm} from "@yeying-community/yeying-web3";
import {convertCipherTypeTo} from "../../../src/common/message";
import {readFile, ResultDataType} from "../../../src/common/file";
import {AssetMetadataSchema, SearchAssetCondition} from "../../../src/yeying/api/asset/asset_pb";
import {ProviderOption} from "../../../src";
import {toJson} from "@bufbuild/protobuf";
import {isOk} from "../../../src/common/status";
import {NamespaceProvider} from "../../../src/provider/warehouse/namespace";
import {computeHash} from "../../../src/common/crypto";
import {encodeHex, encodeString} from "../../../src/common/codec";
import {RecycleProvider} from "../../../src/provider/warehouse/recycle";
import {DeletedAssetMetadataSchema} from "../../../src/yeying/api/asset/recycle_pb";

const provider: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_WAREHOUSE),
    blockAddress: getBlockAddress(),
}

const securityAlgorithm = SecurityAlgorithm.create({
    name: convertCipherTypeTo(CipherTypeEnum.CIPHER_TYPE_AES_GCM_256),
    iv: "58719a06cac813e279f24c5e",
})
const content = "hello, yeying community!"
const namespaceId = '96274d7e-0aae-4736-8f34-940a26f2f92a'

const hash = encodeHex(await computeHash(encodeString(content)))

async function createNamespace() {
    const uploader = new NamespaceProvider(provider)
    await uploader.create("default", "test", namespaceId)
}

describe('Asset', () => {
    it('upload', async () => {
        await createNamespace()

        const uploader = new Uploader(provider, securityAlgorithm)
        const name = 'test'
        const blob = new Blob([content], {type: 'text/plain'})
        const file = new File([blob], name, {type: 'text/plain'})
        try {
            const asset = await uploader.upload(namespaceId, file, true)
            assert.isDefined(asset)
            console.log(`Success to put asset, hash=${asset.hash}, chunk count=${asset.chunks.length}`)
        } catch (err) {
            console.error('Fail to upload', err)
            assert.isTrue(false)
        }
    })

    it('search', async () => {
        const assetProvider = new AssetProvider(provider)
        const condition: Partial<SearchAssetCondition> = {
            format: DigitalFormatEnum.DIGITAL_FORMAT_OTHER,
        }

        const body = await assetProvider.search(condition, 1, 10)
        console.log(`Success to search assets=${body.assets.length}`)
        body.assets.forEach(a => {
            console.log(`asset=${JSON.stringify(toJson(AssetMetadataSchema, a))}`)
        })

        assert.isTrue(isOk(body.status))
    })

    it('download', async () => {
        await createNamespace()
        const downloader = new Downloader(provider, securityAlgorithm)
        const blob = await downloader.download(namespaceId, hash)
        const text = await readFile(blob as Blob, ResultDataType.Text)
        assert.equal(text as string, content)
        console.log(`Success to download asset, hash=${hash}, text=${text}`)
    })

    it('get detail', async () => {
        const assetProvider = new AssetProvider(provider)
        const asset = await assetProvider.detail(namespaceId, hash)
        console.log(`Success to get detail, hash=${hash}, version=${asset.version}, asset=${asset}`)
        assert.equal(asset.name, "test")
    })

    // it('create share link', async () => {
    //     const linkProvider = new LinkProvider(provider)
    //     const assetProvider = new AssetProvider(provider)
    //     const uid = 'fbfe2701-3fc9-4e88-a1b5-e660d1bef159'
    //     const version = 0
    //     const asset = await assetProvider.detail(uid, version, false)
    //     const linkBody = await linkProvider.create(asset.contentHash, 24 * 3600, LinkStatusEnum.LINK_STATUS_PUBLIC)
    // })
    it('delete', async () => {
        const assetProvider = new AssetProvider(provider)
        const body = await assetProvider.delete(namespaceId, hash)
        assert.isTrue(isOk(body.status))
        console.log(`Success to delete asset, hash=${hash}, body=${body}`)
    })

    it('search from trash', async () => {
        const recycleProvider = new RecycleProvider(provider)
        const condition: Partial<SearchAssetCondition> = {
            format: DigitalFormatEnum.DIGITAL_FORMAT_OTHER,
            namespaceId: namespaceId,
        }

        const body = await recycleProvider.search(condition, 1, 10)
        console.log(`Success to search deleted assets=${body.assets.length} from trash`)
        body.assets.forEach(a => {
            console.log(`asset=${JSON.stringify(toJson(DeletedAssetMetadataSchema, a))}`)
        })
    })

    it('remove from trash', async () => {
        const recycleProvider = new RecycleProvider(provider)
        const body = await recycleProvider.remove(namespaceId, hash)
        console.log(`Success to remove from trash, hash=${hash}, body=${body}`)
        assert.isTrue(isOk(body.status))
    })

    // it('get detail from trash', async () => {
    //     const assetProvider = new AssetProvider(provider)
    //     const uid = 'fbfe2701-3fc9-4e88-a1b5-e660d1bef159'
    //     const version = 0
    //     const asset = await assetProvider.detail(uid, version, true)
    //     console.log(`Success to get detail from trash, asset=${uid}, version=${version}, asset=${asset}`)
    //     assert.equal(asset.name, "test")
    // })
    //

})