import {getIdentity, getProviderProxy} from "../common/common";
import {ProviderOption} from "../../../src/provider/common/model";
import {LanguageCodeEnum, ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {BulletinProvider} from "../../../src/provider/bulletin/bulletin";
import {isOk} from "../../../src/common/status";
import {BulletinListResponseBodySchema, SolutionMetadataSchema} from "../../../src/yeying/api/bulletin/bulletin_pb";
import {toJson} from "@bufbuild/protobuf";
import {UserProvider} from "../../../src";

const identity = getIdentity()
const providerOption: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_NODE),
    blockAddress: identity.blockAddress,
}

beforeAll(async () => {
    const userProvider = new UserProvider(providerOption)
    await userProvider.add(identity.metadata.name, identity.metadata.avatar)
})

describe('Bulletin', () => {
    it('solution list', async () => {
        const bulletinProvider = new BulletinProvider(providerOption)
        const solutions = await bulletinProvider.list(LanguageCodeEnum.LANGUAGE_CODE_ZH_CH, 1, 10)
        for (const solution of solutions) {
            console.log(`Success to list solution, page=${JSON.stringify(toJson(SolutionMetadataSchema, solution))}`)
        }
    })
})