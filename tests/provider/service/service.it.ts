import {getProviderProxy} from "../common/common";
import {ProviderOption} from "../../../src/provider/common/model";
import {LanguageCodeEnum, ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {ServiceProvider} from "../../../src/provider/service/service";
import {UserProvider} from "../../../src/provider/user/user";
import {IdentityManager} from "../../../src/identity/manager";
import {toJson} from "@bufbuild/protobuf";
import {IdentityCodeEnum, IdentityMetadata, NetworkTypeEnum, SecurityAlgorithm} from "@yeying-community/yeying-web3";
import {convertServiceMetadataFromIdentity} from "../../../src/identity/model";
import {ServiceMetadata, ServiceMetadataSchema} from "../../../src/yeying/api/common/model_pb";
import {signServiceMetadata} from "../../../src/provider/model/model";
import {decryptBlockAddress} from "../../../src/common/crypto";
import {Authenticate} from "../../../src/provider/common/authenticate";

let providerOption: ProviderOption | undefined

const serviceTemplate = {
    language: LanguageCodeEnum[LanguageCodeEnum.LANGUAGE_CODE_ZH_CH],
    parent: "",
    network: NetworkTypeEnum.NETWORK_TYPE_YEYING,
    name: "mcp",
    description: "The network mcp service of YeYing community.",
    code: IdentityCodeEnum.IDENTITY_CODE_SERVICE,
    avatar: "",
    extend: {
        "code": "SERVICE_CODE_MCP",
        "proxy": "http://localhost:8741",
        "grpc": "localhost:9401",
        "apiCodes": "API_CODE_USER,API_CODE_LLM_SERVICE"
    }
}

let serviceMetadata: ServiceMetadata | undefined

beforeAll(async () => {
    const identityManager = new IdentityManager()
    const password = "123456"
    const serviceIdentity = await identityManager.createIdentity(password, serviceTemplate)
    serviceMetadata = convertServiceMetadataFromIdentity(serviceIdentity)

    const identityMetadata = serviceIdentity.metadata as IdentityMetadata
    const blockAddress = await decryptBlockAddress(
        serviceIdentity.blockAddress,
        serviceIdentity.securityConfig?.algorithm as SecurityAlgorithm,
        password
    )

    providerOption = {
        proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_NODE),
        blockAddress: blockAddress,
    }

    const userProvider = new UserProvider(providerOption)
    await userProvider.add(identityMetadata.name, identityMetadata.avatar)

    await signServiceMetadata(new Authenticate(blockAddress), serviceMetadata)
})

describe('Service', () => {
    it('register', async () => {
        const serviceProvider = new ServiceProvider(providerOption as ProviderOption)
        const service = await serviceProvider.register(serviceMetadata as ServiceMetadata)
        console.log(`Success to register identity=${JSON.stringify(toJson(ServiceMetadataSchema, service))}`)
        assert.isDefined(service)
    })

    it('search', async () => {
        const service = serviceMetadata as ServiceMetadata
        const serviceProvider = new ServiceProvider(providerOption as ProviderOption)
        const services = await serviceProvider.search({code: ServiceCodeEnum.SERVICE_CODE_MCP}, 1, 10)
        assert.isTrue(services.length > 0)
        const existing = services.find(i => {
            console.log(`Success to get node identity=${i.name}, did=${i.did}`)
            return service.did === i.did
        })
        assert.isDefined(existing)
    })

    it('unregister', async () => {
        const service = serviceMetadata as ServiceMetadata
        const serviceProvider = new ServiceProvider(providerOption as ProviderOption)
        await serviceProvider.unregister(service.did, service.version)
        console.log(`Success to unregister service=${service.did}`)
    })
})