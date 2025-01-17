import {ServiceProvider} from '../../../src/provider/service/service.js'
import {getBlockAddress, getProvider} from "../common/common";
import {ProviderOption} from "../../../src/provider/common/model";
import {ResponseCodeEnum, ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {Authenticate} from "../../../src/provider/common/authenticate";

const blockAddress = getBlockAddress()
const provider: ProviderOption = getProvider(ServiceCodeEnum.SERVICE_CODE_NODE)

describe('Service', () => {
    // it('register', async () => {
    //     const serviceProvider = new ServiceProvider(new Authenticate(identity), provider)
    //     await serviceProvider.register(software)
    //     console.log(`Success to register identity=${software.blockAddress.identifier}`)
    // })
    //
    // it('search', async () => {
    //     const serviceProvider = new ServiceProvider(new Authenticate(identity.blockAddress), provider)
    //     const identities1 = await serviceProvider.search(getServiceMessageBoxCode())
    //     identities1.forEach(i => console.log(`Success to get node identity=${i.getName()}, did=${i.getDid()}`))
    //     const identities2 = await serviceProvider.search(getServiceAgentCode())
    //     identities2.forEach(i => console.log(`Success to get agent identity=${i.getName()}, did=${i.getDid()}`))
    //     const identities3 = await serviceProvider.search(getServiceStoreCode())
    //     identities3.forEach(i => console.log(`Success to get store identity=${i.getName()}, did=${i.getDid()}`))
    // })
    //
    // it('unregister', async () => {
    //     const serviceProvider = new ServiceProvider(new Authenticate(identity.blockAddress), provider)
    //     await serviceProvider.unregister(software.metadata.did)
    //     console.log(`Success to mod user=${identity.blockAddress.identifier}`)
    // })
})