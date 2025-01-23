import {getBlockAddress, getProviderProxy} from "../common/common";
import {ProviderOption} from "../../../src/provider/common/model";
import {ResponseCodeEnum, ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {NodeProvider} from "../../../src/provider/node/node";
import {toJson} from "@bufbuild/protobuf";
import {ServiceMetadata, ServiceMetadataSchema} from "../../../src";
import {isOk} from "../../../src/common/status";

const provider: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_NODE),
    blockAddress: getBlockAddress(),
}

describe('Node', () => {
    it('whoami', async () => {
        const nodeProvider = new NodeProvider(provider)
        const body = await nodeProvider.whoami()
        assert.isDefined(body.node)
        assert.isDefined(body.node?.service)
        console.log(`whoami=${JSON.stringify(toJson(ServiceMetadataSchema, body.node?.service as ServiceMetadata), null, 2)}`)

    })

    it('health check', async () => {
        const nodeProvider = new NodeProvider(provider)
        const response = await nodeProvider.healthCheck()
        assert.isTrue(isOk(response.status))
    })
})