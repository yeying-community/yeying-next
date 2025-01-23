import {getBlockAddress, getProviderProxy} from "../common/common";
import {ProviderOption} from "../../../src/provider/common/model";
import {LanguageCodeEnum, ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {BulletinProvider} from "../../../src/provider/bulletin/bulletin";
import {isOk} from "../../../src/common/status";
import {ListResponseBodySchema} from "../../../src/yeying/api/bulletin/bulletin_pb";
import {toJson} from "@bufbuild/protobuf";

const provider: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_NODE),
    blockAddress: getBlockAddress(),
}

describe('Bulletin', () => {
    it('solution list', async () => {
        const bulletinProvider = new BulletinProvider(provider)
        const body = await bulletinProvider.list(LanguageCodeEnum.LANGUAGE_CODE_ZH_CH, 1, 10)
        console.log(`Success to list solution, page=${JSON.stringify(toJson(ListResponseBodySchema, body))}`)
        assert.isTrue(isOk(body.status))
    })
})