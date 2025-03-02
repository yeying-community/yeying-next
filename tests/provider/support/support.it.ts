import {SupportProvider} from "../../../src/provider/support/support";
import {getBlockAddress, getIdentity, getProviderProxy} from "../common/common";
import {ProviderOption} from "../../../src/provider/common/model";
import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {CollectSupportResponseBodySchema} from "../../../src/yeying/api/support/support_pb";
import {toJson} from "@bufbuild/protobuf";
import {isOk} from "../../../src/common/status";
import {UserProvider} from "../../../src";

const identity = getIdentity()
const providerOption: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_NODE),
    blockAddress: identity.blockAddress,
}

beforeAll(async () => {
    const userProvider = new UserProvider(providerOption)
    await userProvider.add(identity.metadata.name, identity.metadata.avatar)
})

describe('Support', () => {
    it('faq', async () => {
        const supportProvider = new SupportProvider(providerOption)
        const body = await supportProvider.collectFaq("feature", 'test@gmail.com', "for test.")
        console.log(`Success to collect faq=${JSON.stringify(toJson(CollectSupportResponseBodySchema, body))}`)
        assert.isTrue(isOk(body.status))
    })
})