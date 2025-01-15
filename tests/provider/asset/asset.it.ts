import {
    CipherTypeEnum,
    DigitalFormatEnum,
    ResponseCodeEnum,
    ServiceCodeEnum
} from "../../../src/yeying/api/common/code_pb";
import {getBlockAddress, getProvider} from "../common/common";
import {AssetProvider} from "../../../src/provider/warehouse/asset";
import {Authenticate} from "../../../src/provider/common/authenticate";
import {Uploader} from "../../../src/provider/warehouse/uploader";
import {Downloader} from "../../../src/provider/warehouse/downloader";
import {AssetCipher} from "../../../src/provider/warehouse/cipher";
import {SecurityAlgorithm} from "@yeying-community/yeying-web3";
import {convertCipherTypeTo} from "../../../src/common/message";
import {BlockProvider} from "../../../src/provider/warehouse/block";
import {readFile, ResultDataType} from "../../../src/common/file";
import {SearchCondition} from "../../../src/yeying/api/asset/asset_pb";

const blockAddress = getBlockAddress()
const provider = getProvider(ServiceCodeEnum.SERVICE_CODE_WAREHOUSE)
const securityAlgorithm = SecurityAlgorithm.create({
    name: convertCipherTypeTo(CipherTypeEnum.CIPHER_TYPE_AES_GCM_256),
    iv: "58719a06cac813e279f24c5e",
})
const content = "hello, yeying community!"

describe('Asset', () => {
    it('upload', async () => {
        const blockProvider = new BlockProvider(new Authenticate(blockAddress), provider)
        const assetProvider = new AssetProvider(new Authenticate(blockAddress), provider)
        const uploader = new Uploader(blockProvider, new AssetCipher(blockAddress, securityAlgorithm))
        const uid = 'fbfe2701-3fc9-4e88-a1b5-e660d1bef159'
        const name = 'test'
        const blob = new Blob([content], {type: 'text/plain'})
        const file = new File([blob], name, {type: 'text/plain'})
        const version = 0
        const asset = await uploader.upload(file, uid, version, true)
        const result = await assetProvider.sign(asset)
        // @ts-ignore
        assert.equal(result.getStatus().getCode(), ResponseCodeEnum.OK)
        console.log(`Success to put a asset, id=${uid}, hash=${asset.getContenthash()}, mergedHash=${asset.getMergedhash()}`)
    })

    it('search', async () => {
        const assetProvider = new AssetProvider(new Authenticate(blockAddress), provider)
        const condition = new SearchCondition()
        condition.setFormat(DigitalFormatEnum.DIGITAL_FORMAT_OTHER)
        condition.setTrash(false)
        const searchResponseBody = await assetProvider.search(condition, 1, 10)
        console.log(`Success to search assets=${searchResponseBody.getAssetsList()}`)
        searchResponseBody.getAssetsList().forEach(a => {
            console.log(`asset=${a.getName()}`)
        })

        // @ts-ignore
        assert.equal(searchResponseBody.getStatus().getCode(), ResponseCodeEnum.OK)
    })

    it('download', async () => {
        const assetProvider = new AssetProvider(new Authenticate(blockAddress), provider)
        const blockProvider = new BlockProvider(new Authenticate(blockAddress), provider)
        const uid = 'fbfe2701-3fc9-4e88-a1b5-e660d1bef159'
        const version = 0
        const asset = await assetProvider.detail(uid, version, false)
        const downloader = new Downloader(blockProvider, new AssetCipher(blockAddress, securityAlgorithm))
        const blob = await downloader.download(asset)
        const text = await readFile(blob as Blob, ResultDataType.Text)
        assert.equal(text as string, content)
        console.log(`Success to download uid=${uid}, text=${text}`)
    })

    it('get detail', async () => {
        const assetProvider = new AssetProvider(new Authenticate(blockAddress), provider)
        const uid = 'fbfe2701-3fc9-4e88-a1b5-e660d1bef159'
        const version = 0
        const result1 = await assetProvider.detail(uid, version, false)
        console.log(`Success to get detail, asset=${uid}, version=${version}, body=${result1}`)
        assert.equal(result1.getName(), "test")
    })

    it('move to trash', async () => {
        const assetProvider = new AssetProvider(new Authenticate(blockAddress), provider)
        const uid = 'fbfe2701-3fc9-4e88-a1b5-e660d1bef159'
        const version = 0
        const result1 = await assetProvider.moveToTrash(uid, version)
        console.log(`Success to move to trash, asset=${uid}, version=${version}, body=${result1}`)
        // @ts-ignore
        assert.equal(result1.getStatus().getCode(), ResponseCodeEnum.OK)
    })

    it('search from trash', async () => {
        const assetProvider = new AssetProvider(new Authenticate(blockAddress), provider)
        const condition = new SearchCondition()
        condition.setFormat(DigitalFormatEnum.DIGITAL_FORMAT_OTHER)
        condition.setTrash(true)
        const searchResponseBody = await assetProvider.search(condition, 1, 10)
        console.log(`Success to search assets=${searchResponseBody.getAssetsList()} from trash`)
        searchResponseBody.getAssetsList().forEach(a => {
            console.log(`asset=${a.getName()}`)
        })
    })

    it('get detail from trash', async () => {
        const assetProvider = new AssetProvider(new Authenticate(blockAddress), provider)
        const uid = 'fbfe2701-3fc9-4e88-a1b5-e660d1bef159'
        const version = 0
        const result1 = await assetProvider.detail(uid, version, true)
        console.log(`Success to get detail from trash, asset=${uid}, version=${version}, body=${result1}`)
        assert.equal(result1.getName(), "test")
    })

    it('delete', async () => {
        const assetProvider = new AssetProvider(new Authenticate(blockAddress), provider)
        const uid = 'fbfe2701-3fc9-4e88-a1b5-e660d1bef159'
        const version = 0
        const result2 = await assetProvider.remove(uid, version)
        // @ts-ignore
        assert.equal(result2.getStatus().getCode(), ResponseCodeEnum.OK)
        console.log(`Success to del asset=${uid}, version=${version}, body=${result2}`)
    })
})