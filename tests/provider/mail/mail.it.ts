import {Authenticate} from "../../../src/provider/common/authenticate";
import {getBlockAddress, getProvider} from "../common/common";
import {ProviderOption} from "../../../src/provider/common/model";
import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {MailProvider} from "../../../src/provider/mail/mail";

const blockAddress = getBlockAddress()
const provider: ProviderOption = getProvider(ServiceCodeEnum.SERVICE_CODE_NODE)

describe('Mail', () => {
    it('send', async () => {
        const mailProvider = new MailProvider(new Authenticate(blockAddress), provider)
        const toMail = "mock@mail.com"
        const body = await mailProvider.send(toMail)
        // @ts-ignore
        console.log(`Success to mail send body=${body}`)
    })
    it('verify', async () => {
        const mailProvider = new MailProvider(new Authenticate(blockAddress), provider)
        const toMail = "mock@mail.com"
        console.log("start verify email:", toMail)
        const body = await mailProvider.verify(toMail, "mockCode")
        // @ts-ignore
        console.log(`Verify result body=${body}`)
    })
})
