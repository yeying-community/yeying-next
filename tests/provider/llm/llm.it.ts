import {getBlockAddress, getProviderProxy} from "../common/common";
import {ProviderOption} from "../../../src/provider/common/model";
import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {MailProvider} from "../../../src/provider/mail/mail";
import {isOk} from "../../../src/common/status";
import {LlmProvider} from "../../../src/provider/llm/provider";
import {toJson} from "@bufbuild/protobuf";
import {ProviderDescriptionSchema} from "../../../src/yeying/api/llm/provider_pb";

const provider: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_AGENT),
    blockAddress: getBlockAddress(),
}

describe('Llm', () => {
    it('list', async () => {
        const mailProvider = new LlmProvider(provider)
        const providers = await mailProvider.list()
        for (const provider of providers) {
            console.log(`Success to list llm providers=${JSON.stringify(toJson(ProviderDescriptionSchema, provider))}`)
        }
    })
})
