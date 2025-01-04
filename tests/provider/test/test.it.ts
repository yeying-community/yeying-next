import {Authenticate} from "../../../src/provider/common/authenticate";
import {getBlockAddress, getProvider} from "../common/common";
import {ProviderOption} from "../../../src/provider/common/model";
import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {TestProvider} from "../../../src/provider/test/test";

const blockAddress = getBlockAddress()
const provider: ProviderOption = getProvider(ServiceCodeEnum.SERVICE_CODE_NODE)

describe('Test', () => {
    it('echo', async () => {
        const testProvider = new TestProvider(new Authenticate(blockAddress), provider)
        const message = "hello world!"
        const body = await testProvider.echo(message)
        console.log(`Success to echo=${body.getMessage()}`)
    })
})