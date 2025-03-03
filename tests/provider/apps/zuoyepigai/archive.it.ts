import {getBlockAddress, getProviderProxy} from "../../common/common";
import {ProviderOption} from "../../../../src/provider/common/model";
import {ServiceCodeEnum} from "../../../../src/yeying/api/common/code_pb";
import {ArchiveProvider} from "../../../../src/provider/apps/zuoyepigai/archive";
import {isOk} from "../../../../src/common/status";

const provider: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_AI),
    blockAddress: getBlockAddress(),
}

// @ts-ignore
describe('Archive', () => {
    // @ts-ignore
    it('detail', async () => {
        console.log(provider.proxy)
        const archiveProvider = new ArchiveProvider(provider)
        const body = await archiveProvider.detail("19313383-c311-45ed-bdfb-657b9f992606")
        // @ts-ignore
        console.log(`Success to detail archive body=${body}`)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })
    // @ts-ignore
    it('list', async () => {
        console.log(provider.proxy)
        const archiveProvider = new ArchiveProvider(provider)
        const body = await archiveProvider.list("19313383-c311-45ed-bdfb-657b9f992606")
        // @ts-ignore
        console.log(`Success to list archive body=${body.status}`)
        console.log(`Success to list archive body=${body.list}`)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })
})