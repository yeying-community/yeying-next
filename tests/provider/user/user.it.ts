import {UserProvider} from '../../../src/provider/user/user'
import {Authenticate} from "../../../src/provider/common/authenticate";
import {getBlockAddress, getProvider} from "../common/common";
import {ResponseCodeEnum, ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {ProviderOption} from "../../../src/provider/common/model";

const blockAddress = getBlockAddress()
const provider: ProviderOption = getProvider(ServiceCodeEnum.SERVICE_CODE_NODE)


describe('User', () => {
    it('delete', async () => {
        const userProvider = new UserProvider(new Authenticate(blockAddress), provider)
        const body = await userProvider.delete()
        console.log(`Success to del user=${blockAddress.identifier}`)
        // @ts-ignore
        assert.equal(body.getStatus().getCode(), ResponseCodeEnum.OK)
    })

    it('add', async () => {
        const userProvider = new UserProvider(new Authenticate(blockAddress), provider)
        const body = await userProvider.add('test1', "avatar1")
        console.log(`Success to add new user=${JSON.stringify(body)}`)
        // @ts-ignore
        assert.equal(body.getStatus().getCode(), ResponseCodeEnum.OK)
    })

    it('get', async () => {
        const userProvider = new UserProvider(new Authenticate(blockAddress), provider)
        const body = await userProvider.get()
        console.log(`Success to get user=${JSON.stringify(body)}`)
        // @ts-ignore
        assert.equal(body.getStatus().getCode(), ResponseCodeEnum.OK)
    })

    it('state', async () => {
        const userProvider = new UserProvider(new Authenticate(blockAddress), provider)
        const body = await userProvider.state()
        console.log(`Success to get user=${JSON.stringify(body)}`)
        // @ts-ignore
        assert.equal(body.getStatus().getCode(), ResponseCodeEnum.OK)
    })

    it('update', async () => {
        const userProvider = new UserProvider(new Authenticate(blockAddress), provider)
        const body = await userProvider.update({name: "test2"})
        console.log(`Success to mod user=${blockAddress.identifier}`)
        // @ts-ignore
        assert.equal(body.getStatus().getCode(), ResponseCodeEnum.OK)
    })
})