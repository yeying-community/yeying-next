import {getBlockAddress, getProviderProxy} from "../common/common";
import {ProviderOption} from "../../../src/provider/common/model";
import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {MailProvider} from "../../../src/provider/mail/mail";
import {isOk} from "../../../src/common/status";

const provider: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_NODE),
    blockAddress: getBlockAddress(),
}

describe('Mail', () => {
    it('send', async () => {
        const mailProvider = new MailProvider(provider)
        const body = await mailProvider.send("mock@mail.com")
        // @ts-ignore
        console.log(`Success to mail send body=${body}`)
        assert.isTrue(isOk(body.status))
    })

    it('verify', async () => {
        const mailProvider = new MailProvider(provider)
        const toMail = "mock@mail.com"
        console.log("start verify email:", toMail)
        const body = await mailProvider.verify(toMail, "mockCode")
        console.log(`Verify result body=${body}`)
        assert.isTrue(isOk(body.status))
    })
})
