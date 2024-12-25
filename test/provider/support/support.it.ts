import {Authenticate} from "../../../src/provider/common/authenticate";
import {SupportProvider} from "../../../src/provider/support/support";
import {getBlockAddress, getProvider} from "../common/common";
import {Provider} from "../../../src/provider/common/model";
import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";

const blockAddress = getBlockAddress()
const provider: Provider = getProvider(ServiceCodeEnum.SERVICE_CODE_NODE)

describe('Support', () => {
    it('faq', async () => {
        const supportProvider = new SupportProvider(new Authenticate(blockAddress), provider)
        await supportProvider.collectFaq("feature", 'test@gmail.com', "for test.")
        console.log(`Success to collect faq=${blockAddress.getIdentifier()}`)
    })
})