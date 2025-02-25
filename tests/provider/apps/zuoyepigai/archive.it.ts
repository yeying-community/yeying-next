import {getBlockAddress, getProviderProxy} from "../../common/common";
import {ProviderOption} from "../../../../src/provider/common/model";
import {ServiceCodeEnum} from "../../../../src/yeying/api/common/code_pb";
import {ArchiveProvider} from "../../../../src/provider/apps/zuoyepigai/archive";
import {isOk} from "../../../../src/common/status";

const provider: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_AI),
    blockAddress: getBlockAddress(),
}

describe('Archive', () => {
    it('list', async () => {
        const archiveProvider = new ArchiveProvider(provider)
        const body = await archiveProvider.list("1")
        // @ts-ignore
        console.log(`Success to list archive body=${body}`)
        assert.isTrue(isOk(body.status))
    })
})
