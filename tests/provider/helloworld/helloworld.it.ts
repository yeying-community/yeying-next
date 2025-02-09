import {getBlockAddress, getProviderProxy} from "../common/common";
import {ProviderOption} from "../../../src/provider/common/model";
import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";

const provider: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_AI),
    blockAddress: getBlockAddress(),
}

describe('Hello', () => {
    it('sayHello', async () => {
        // @ts-ignore
        // const helloProvider = new HelloProvider(provider)
        // const body = await helloProvider.sayHello("Jack")
        // // @ts-ignore
        // console.log(`Success to ai call body=${body.message}`)
        // // @ts-ignore
        // const code = body.status.code
        // console.log(`body.status ${code}`)
        // assert.isTrue(isOk(body.status))
    })
})
