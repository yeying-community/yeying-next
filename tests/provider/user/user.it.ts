import {UserProvider} from '../../../src/provider/user/user'
import {getBlockAddress, getProviderProxy} from "../common/common";
import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {ProviderOption} from "../../../src/provider/common/model";
import {toJson} from "@bufbuild/protobuf";
import {
    AddUserResponseBodySchema,
    UserDetailResponseBodySchema,
    UserMetadata,
    UserMetadataSchema,
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
        console.log(`Success to add new user=${JSON.stringify(toJson(AddUserResponseBodySchema, body))}`)
        assert.isTrue(isExisted(body.status))
    })

    it('detail', async () => {
        const userProvider = new UserProvider(provider)
        const body = await userProvider.detail()
        console.log(`Success to get user=${JSON.stringify(toJson(UserDetailResponseBodySchema, body))}`)
        assert.isTrue(isOk(body.status))
    })

    it('update', async () => {
        const userProvider = new UserProvider(provider)
        const body = await userProvider.detail()
        assert.isTrue(isOk(body.status))
        const user = body.user as UserMetadata
        user.name = "test2"
        const resUser = await userProvider.update(user)
        console.log(`Success to update user=${JSON.stringify(toJson(UserMetadataSchema, resUser))}`)
        assert.equal(user.name, resUser.name)
    })
})