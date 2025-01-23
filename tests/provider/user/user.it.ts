import {UserProvider} from '../../../src/provider/user/user'
import {getBlockAddress, getProviderProxy} from "../common/common";
import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {ProviderOption} from "../../../src/provider/common/model";
import {toJson} from "@bufbuild/protobuf";
import {
    AddResponseBodySchema,
    GetResponseBodySchema,
    StateResponseBodySchema, UserMetadataSchema
} from "../../../src/yeying/api/user/user_pb";
import {isDeleted, isExisted, isOk} from "../../../src/common/status";

const provider: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_NODE),
    blockAddress: getBlockAddress(),
}

describe('User', () => {
    it('delete', async () => {
        const userProvider = new UserProvider(provider)
        const body = await userProvider.delete()
        console.log(`Success to delete user=${provider.blockAddress.identifier}`)
        assert.isTrue(isDeleted(body.status))
    })

    it('add', async () => {
        const userProvider = new UserProvider(provider)
        const body = await userProvider.add('test1', "avatar1")
        console.log(`Success to add new user=${JSON.stringify(toJson(AddResponseBodySchema, body))}`)
        assert.isTrue(isExisted(body.status))
    })

    it('get', async () => {
        const userProvider = new UserProvider(provider)
        const body = await userProvider.get()
        console.log(`Success to get user=${JSON.stringify(toJson(GetResponseBodySchema, body))}`)
        assert.isTrue(isOk(body.status))
    })

    it('state', async () => {
        const userProvider = new UserProvider(provider)
        const body = await userProvider.state()
        console.log(`Success to get user=${JSON.stringify(toJson(StateResponseBodySchema, body))}`)
        assert.isTrue(isOk(body.status))
    })

    it('update', async () => {
        const userProvider = new UserProvider(provider)
        const name = "test2"
        const user = await userProvider.update({name: name})
        console.log(`Success to update user=${JSON.stringify(toJson(UserMetadataSchema, user))}`)
        assert.equal(user.name, name)
    })
})