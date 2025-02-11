import {getBlockAddress, getProviderProxy} from "../common/common";
import {ProviderOption} from "../../../src/provider/common/model";
import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {NodeProvider} from "../../../src/provider/node/node";
import {toJson} from "@bufbuild/protobuf";
import {NodeMetadataSchema} from "../../../src";

const provider: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_NODE),
    blockAddress: getBlockAddress(),
}

describe('Node', () => {
    it('whoami', async () => {
        const nodeProvider = new NodeProvider(provider)
        const node = await nodeProvider.whoami()
        assert.isDefined(node)
        console.log(`whoami=${JSON.stringify(toJson(NodeMetadataSchema, node), null, 2)}`)
    })

    it('health check', async () => {
        const nodeProvider = new NodeProvider(provider)
        await nodeProvider.healthCheck()
    })
})