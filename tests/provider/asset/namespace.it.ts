import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {getBlockAddress, getDefaultNamespace, getProviderProxy} from "../common/common";
import {ProviderOption} from "../../../src";
import {NamespaceProvider} from "../../../src/provider/warehouse/namespace";


// @ts-ignore
let namespaceProvider: NamespaceProvider = undefined

beforeAll(async () => {
    console.log("start")
    const provider: ProviderOption = {
        proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_WAREHOUSE),
        blockAddress: getBlockAddress(),
    }

    namespaceProvider = new NamespaceProvider(provider)
});

afterAll(() => {

})

describe('Namespace', () => {
    it('default namespace', async () => {
        const defaultNamespaceId: string = getDefaultNamespace()
        let namespaceId = await namespaceProvider.getDefaultNamespace()
        if (namespaceId) {
            // 已存在默认命名空间
            assert.equal(namespaceId, defaultNamespaceId)
        } else {
            // 创建命名空间
            const namespaceMetadata = await namespaceProvider.create("default", "test", defaultNamespaceId)
            assert.equal(namespaceMetadata.uid, defaultNamespaceId)
            // 设置默认命名空间
            await namespaceProvider.setDefaultNamespace(namespaceMetadata.uid)
            // 获得默认命名空间
            namespaceId = await namespaceProvider.getDefaultNamespace()
            assert.equal(namespaceId, defaultNamespaceId)
        }
    })
})