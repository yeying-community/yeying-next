import {DigitalFormatEnum, ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {getBlockAddress, getProviderProxy, getSecurityAlgorithm} from "../common/common";
import {AssetProvider} from "../../../src/provider/warehouse/asset";
import {Uploader} from "../../../src/provider/warehouse/uploader";
import {Downloader} from "../../../src/provider/warehouse/downloader";
import {readFile, ResultDataType} from "../../../src/common/file";
import {AssetMetadataSchema} from "../../../src/yeying/api/asset/asset_pb";
import {ProviderOption} from "../../../src";
import {toJson} from "@bufbuild/protobuf";
import {NamespaceProvider} from "../../../src/provider/warehouse/namespace";
import {computeHash} from "../../../src/common/crypto";
import {encodeHex, encodeString} from "../../../src/common/codec";


const content: string = "hello, yeying community!"
const namespaceId: string = '96274d7e-0aae-4736-8f34-940a26f2f92a'
const hash: string = encodeHex(await computeHash(encodeString(content)))

// @ts-ignore
let assetProvider: AssetProvider = undefined
// @ts-ignore
let uploader: Uploader = undefined
// @ts-ignore
let downloader: Downloader = undefined
// @ts-ignore
let namespaceProvider: NamespaceProvider = undefined

beforeAll(async () => {
    console.log("start")
    const provider: ProviderOption = {
        proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_WAREHOUSE),
        blockAddress: getBlockAddress(),
    }

    downloader = new Downloader(provider, getSecurityAlgorithm())
    uploader = new Uploader(provider, getSecurityAlgorithm())
    assetProvider = new AssetProvider(provider)
    namespaceProvider = new NamespaceProvider(provider)
    await namespaceProvider.create("default", "test", namespaceId)
})

describe('Asset', () => {
    it('upload', async () => {
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
        const assets = await assetProvider.search({
            format: DigitalFormatEnum.DIGITAL_FORMAT_OTHER,
        }, 1, 10)

        console.log(`Success to search assets=${assets.length}`)
        assets.forEach(a => {
            console.log(`asset=${JSON.stringify(toJson(AssetMetadataSchema, a))}`)
        })
    })

    it('download', async () => {
        const blob = await downloader.download(namespaceId, hash)
        const text = await readFile(blob as Blob, ResultDataType.Text)
        assert.equal(text as string, content)
        console.log(`Success to download asset, hash=${hash}, text=${text}`)
    })

    it('get detail', async () => {
        const asset = await assetProvider.detail(namespaceId, hash)
        console.log(`Success to get detail, hash=${hash}, version=${asset.version}, asset=${asset}`)
        assert.equal(asset.name, "test")
    })

    it('delete', async () => {
        await assetProvider.delete(namespaceId, hash)
        console.log(`Success to delete asset, namespaceId=${namespaceId}, hash=${hash}`)
    })
})