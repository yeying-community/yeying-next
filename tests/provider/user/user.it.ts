import {UserProvider} from '../../../src/provider/user/user'
import {getBlockAddress, getProviderProxy} from "../common/common";
import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {ProviderOption} from "../../../src/provider/common/model";
import {toJson} from "@bufbuild/protobuf";
import {UserDetailSchema, UserMetadata, UserMetadataSchema,} from "../../../src/yeying/api/user/user_pb";

const provider: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_WAREHOUSE),
    blockAddress: getBlockAddress(),
}

describe('User', () => {
    it('delete', async () => {
        const userProvider = new UserProvider(provider)
        await userProvider.delete()
    })

    it('add', async () => {
        const userProvider = new UserProvider(provider)
        const user = await userProvider.add('test1', "avatar1")
        console.log(`Success to add new user=${JSON.stringify(toJson(UserMetadataSchema, user))}`)
    })

    it('detail', async () => {
        const userProvider = new UserProvider(provider)
        const detail = await userProvider.detail()
        console.log(`Success to get user=${JSON.stringify(toJson(UserDetailSchema, detail))}`)
    })

    it('update', async () => {
        const userProvider = new UserProvider(provider)
        const detail = await userProvider.detail()
        const user1 = detail.user as UserMetadata

        user1.name = "test2"
        const user2 = await userProvider.update(user1)

        console.log(`Success to update user=${JSON.stringify(toJson(UserMetadataSchema, user2))}`)
        assert.equal(user2.name, user1.name)
    })
})