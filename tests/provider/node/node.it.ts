import {getBlockAddress, getProvider} from "../common/common";
import {ProviderOption} from "../../../src/provider/common/model";
import {ResponseCodeEnum, ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {Authenticate} from "../../../src/provider/common/authenticate";
import {NodeProvider} from "../../../src/provider/node/node";

const blockAddress = getBlockAddress()
const provider: ProviderOption = getProvider(ServiceCodeEnum.SERVICE_CODE_NODE)

describe('Node', () => {
    it('whoami', async () => {
        const nodeProvider = new NodeProvider(new Authenticate(blockAddress), provider)
        const node = await nodeProvider.whoami()
        console.log(`whoami=${JSON.stringify(node.toObject(), null, 2)}`)
        assert.isDefined(node.getService())
    })

    it('health check', async () => {
        const nodeProvider = new NodeProvider(new Authenticate(blockAddress), provider)
        const response = await nodeProvider.healthCheck()
        // @ts-ignore
        assert.equal(response.getStatus().getCode(), ResponseCodeEnum.OK)
    })
})