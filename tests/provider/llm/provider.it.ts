import {getBlockAddress, getProviderProxy} from "../common/common";
import {ProviderOption} from "../../../src/provider/common/model";
import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {ProviderProvider} from "../../../src/provider/llm/provider";
import {toJson} from "@bufbuild/protobuf";
import {
    ModelMetadataSchema,
    ProviderCodeEnum,
    ProviderDescriptionSchema,
    ProviderMetadata,
    ProviderMetadataSchema,
    ProviderState,
    ProviderStateSchema
} from "../../../src/yeying/api/llm/provider_pb";

const provider: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_AGENT),
    blockAddress: getBlockAddress(),
}

const providerId = "333422fc-a425-4937-b2d9-5584a9bf6346"

describe('Provider', () => {
    it('descriptions', async () => {
        const llmProvider = new ProviderProvider(provider)
        const descriptions = await llmProvider.descriptions()
        for (const description of descriptions) {
            console.log(`Success to list provider description=${JSON.stringify(toJson(ProviderDescriptionSchema, description))}`)
        }
    })

    it('models', async () => {
        const providerProvider = new ProviderProvider(provider)
        const models = await providerProvider.models()
        for (const model of models) {
            console.log(`Success to list llm providers=${JSON.stringify(toJson(ModelMetadataSchema, model))}`)
        }
    })

    it('add', async () => {
        const providerProvider = new ProviderProvider(provider)
        const metadata = await providerProvider.add("test1", ProviderCodeEnum.PROVIDER_CODE_OPENAI, "key1", providerId)
        console.log(`Success to add provider=${JSON.stringify(toJson(ProviderMetadataSchema, metadata))}`)
        assert.isDefined(metadata)
    })

    it('detail', async () => {
        const providerProvider = new ProviderProvider(provider)
        const detail = await providerProvider.detail(providerId)
        console.log(`Success to get provider detail, provider=${JSON.stringify(toJson(ProviderMetadataSchema, detail.provider as ProviderMetadata))}`)
        console.log(`Success to get provider detail, state=${JSON.stringify(toJson(ProviderStateSchema, detail.state as ProviderState))}`)
        assert.isDefined(detail)
    })

    it('search', async () => {
        const providerProvider = new ProviderProvider(provider)
        const providers = await providerProvider.search(1, 10, ProviderCodeEnum.PROVIDER_CODE_OPENAI)
        for (const provider of providers) {
            console.log(`Success to list provider=${JSON.stringify(toJson(ProviderMetadataSchema, provider))}`)
        }

        assert.isAtLeast(providers.length, 1)
    })

    it('delete', async () => {
        const providerProvider = new ProviderProvider(provider)
        await providerProvider.delete(providerId)
        console.log(`Success to delete provider=${providerId}`)
    })
})
