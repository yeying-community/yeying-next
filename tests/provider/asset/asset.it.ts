import {CipherTypeEnum, DigitalFormatEnum, ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {getBlockAddress, getProviderProxy} from "../common/common";
import {AssetProvider} from "../../../src/provider/warehouse/asset";
import {Uploader} from "../../../src/provider/warehouse/uploader";
import {Downloader} from "../../../src/provider/warehouse/downloader";
import {AssetCipher} from "../../../src/provider/warehouse/cipher";
import {SecurityAlgorithm} from "@yeying-community/yeying-web3";
import {convertCipherTypeTo} from "../../../src/common/message";
import {BlockProvider} from "../../../src/provider/warehouse/block";
import {readFile, ResultDataType} from "../../../src/common/file";
import {AssetMetadata, AssetMetadataSchema, SearchAssetCondition} from "../../../src/yeying/api/asset/asset_pb";
import {ProviderOption} from "../../../src";
import {toJson} from "@bufbuild/protobuf";
import {isOk} from "../../../src/common/status";

const provider: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_WAREHOUSE),
    blockAddress: getBlockAddress(),
}

const securityAlgorithm = SecurityAlgorithm.create({
    name: convertCipherTypeTo(CipherTypeEnum.CIPHER_TYPE_AES_GCM_256),
    iv: "58719a06cac813e279f24c5e",
})
const content = "hello, yeying community!"

describe('Asset', () => {
    it('upload', async () => {
        const blockProvider = new BlockProvider(provider)
        const assetProvider = new AssetProvider(provider)
        const uploader = new Uploader(blockProvider, new AssetCipher(provider.blockAddress, securityAlgorithm))
        const uid = 'fbfe2701-3fc9-4e88-a1b5-e660d1bef159'
        const name = 'test'
        const blob = new Blob([content], {type: 'text/plain'})
        const file = new File([blob], name, {type: 'text/plain'})
        const version = 0
        const asset = await uploader.upload(file, uid, version, true)
        const body = await assetProvider.sign(asset)
        assert.isTrue(isOk(body.status))
        console.log(`Success to put a asset, id=${uid}, hash=${asset.contentHash}, mergedHash=${asset.mergedHash}`)
    })

    it('search', async () => {
        const assetProvider = new AssetProvider(provider)
        const condition: Partial<SearchAssetCondition> = {
            format: DigitalFormatEnum.DIGITAL_FORMAT_OTHER,
            trash: false,
        }

        const body = await assetProvider.search(condition, 1, 10)
        console.log(`Success to search assets=${body.assets.length}`)
        body.assets.forEach(a => {
            console.log(`asset=${JSON.stringify(toJson(AssetMetadataSchema, a))}`)
        })

        assert.isTrue(isOk(body.status))
    })

    it('download', async () => {
        const assetProvider = new AssetProvider(provider)
        const blockProvider = new BlockProvider(provider)
        const uid = 'fbfe2701-3fc9-4e88-a1b5-e660d1bef159'
        const version = 0
        const body = await assetProvider.detail(uid, version, false)
        const downloader = new Downloader(blockProvider, new AssetCipher(provider.blockAddress, securityAlgorithm))
        const blob = await downloader.download(body.asset as AssetMetadata)
        const text = await readFile(blob as Blob, ResultDataType.Text)
        assert.equal(text as string, content)
        console.log(`Success to download uid=${uid}, text=${text}`)
    })

    it('get detail', async () => {
        const assetProvider = new AssetProvider(provider)
        const uid = 'fbfe2701-3fc9-4e88-a1b5-e660d1bef159'
        const version = 0
        const body = await assetProvider.detail(uid, version, false)
        console.log(`Success to get detail, asset=${uid}, version=${version}, body=${body}`)
        assert.isTrue(isOk(body.status))
        assert.equal(body?.asset?.name, "test")
    })

    it('move to trash', async () => {
        const assetProvider = new AssetProvider(provider)
        const uid = 'fbfe2701-3fc9-4e88-a1b5-e660d1bef159'
        const version = 0
        const body = await assetProvider.moveToTrash(uid, version)
        console.log(`Success to move to trash, asset=${uid}, version=${version}, body=${body}`)
        assert.isTrue(isOk(body.status))
    })

    it('search from trash', async () => {
        const assetProvider = new AssetProvider(provider)
        const condition: Partial<SearchAssetCondition> = {
            format: DigitalFormatEnum.DIGITAL_FORMAT_OTHER,
            trash: true,
        }

        const body = await assetProvider.search(condition, 1, 10)
        console.log(`Success to search assets=${body.assets.length} from trash`)
        body.assets.forEach(a => {
            console.log(`asset=${JSON.stringify(toJson(AssetMetadataSchema, a))}`)
        })
    })

    it('get detail from trash', async () => {
        const assetProvider = new AssetProvider(provider)
        const uid = 'fbfe2701-3fc9-4e88-a1b5-e660d1bef159'
        const version = 0
        const body = await assetProvider.detail(uid, version, true)
        console.log(`Success to get detail from trash, asset=${uid}, version=${version}, body=${body}`)
        assert.isTrue(isOk(body.status))
        assert.equal(body?.asset?.name, "test")
    })

    it('delete', async () => {
        const assetProvider = new AssetProvider(provider)
        const uid = 'fbfe2701-3fc9-4e88-a1b5-e660d1bef159'
        const version = 0
        const body = await assetProvider.remove(uid, version)
        assert.isTrue(isOk(body.status))
        console.log(`Success to del asset=${uid}, version=${version}, body=${body}`)
    })
})