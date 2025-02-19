import {getBlockAddress, getProviderProxy} from "../common/common";
import {ProviderOption} from "../../../src/provider/common/model";
import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {toJson} from "@bufbuild/protobuf";
import {ConfigProvider} from "../../../src/provider/config/config";
import {ConfigMetadataSchema, ConfigTypeEnum} from "../../../src/yeying/api/config/config_pb";

const provider: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_WAREHOUSE),
    blockAddress: getBlockAddress(),
}

describe('Config', () => {
    it('get chunk size', async () => {
        const configProvider = new ConfigProvider(provider)
        const metadata = await configProvider.get('chunk.size', ConfigTypeEnum.CONFIG_TYPE_SYSTEM)
        console.log(`Success to get config, page=${JSON.stringify(toJson(ConfigMetadataSchema, metadata))}`)
        assert.equal(metadata.value, "16777216")
    })
})