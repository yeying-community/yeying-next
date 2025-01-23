import {SupportProvider} from "../../../src/provider/support/support";
import {getBlockAddress, getProviderProxy} from "../common/common";
import {ProviderOption} from "../../../src/provider/common/model";
import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {CollectResponseBodySchema} from "../../../src/yeying/api/support/support_pb";
import {toJson} from "@bufbuild/protobuf";
import {isOk} from "../../../src/common/status";

const provider: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_NODE),
    blockAddress: getBlockAddress(),
}

describe('Support', () => {
    it('faq', async () => {
        const supportProvider = new SupportProvider(provider)
        const body = await supportProvider.collectFaq("feature", 'test@gmail.com', "for test.")
        console.log(`Success to collect faq=${JSON.stringify(toJson(CollectResponseBodySchema, body))}`)
        assert.isTrue(isOk(body.status))
    })
})