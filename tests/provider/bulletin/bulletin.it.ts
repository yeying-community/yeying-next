import {Authenticate} from "../../../src/provider/common/authenticate";
import {getBlockAddress, getProvider} from "../common/common";
import {ProviderOption} from "../../../src/provider/common/model";
import {LanguageCodeEnum, ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {BulletinProvider} from "../../../src/provider/bulletin/bulletin";

const blockAddress = getBlockAddress()
const provider: ProviderOption = getProvider(ServiceCodeEnum.SERVICE_CODE_NODE)

describe('Bulletin', () => {
    it('solution list', async () => {
        const bulletinProvider = new BulletinProvider(new Authenticate(blockAddress), provider)
        const body = await bulletinProvider.list(LanguageCodeEnum.LANGUAGE_CODE_ZH_CH, 1, 10)
        console.log(`Success to list solution, page=${body.getPage()?.getPage()}, pageSize=${body.getPage()?.getPagesize()}, total=${body.getPage()?.getTotal()}`)
    })
})