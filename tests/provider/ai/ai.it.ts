import {getBlockAddress, getProviderProxy} from "../common/common";
import {ProviderOption} from "../../../src/provider/common/model";
import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";

const provider: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_AI),
    blockAddress: getBlockAddress(),
}

describe('AI', () => {
    it('call', async () => {
        // @ts-ignore
        // const aiProvider = new AIProvider(provider)
        // const body = await aiProvider.call("https://www.eggplantai.tech/public-bucket/1840039927406964736/1880263125872156672_a.jpg")
        // // @ts-ignore
        // console.log(`Success to ai call body=${body.result}`)
        // assert.isTrue(isOk(body.status))
    })
})
