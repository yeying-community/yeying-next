import { Authenticate } from '../common/authenticate'
import { BulletinClient } from '../../yeying/api/bulletin/BulletinServiceClientPb'
import { Provider } from '../common/model'
import { LanguageCodeEnum } from '../../yeying/api/common/code_pb'
import { BulletinCodeEnum, ListRequest, ListRequestBody, ListResponseBody } from '../../yeying/api/bulletin/bulletin_pb'
import { MessageHeader, RequestPage } from '../../yeying/api/common/message_pb'
import {ServiceMetadata} from "../../yeying/api/service/service_pb";
import {computeHash} from "../../common/crypto";
import {fromDidToPublicKey, verifyHashBytes} from "@yeying-community/yeying-web3";
import {DataForgery} from "../../common/error";
import {FaqMetadata} from "../../yeying/api/support/support_pb";

export class BulletinProvider {
    private authenticate: Authenticate
    private client: BulletinClient

    constructor(authenticate: Authenticate, provider: Provider) {
        this.authenticate = authenticate
        this.client = new BulletinClient(provider.proxy)
    }

    async list(language: LanguageCodeEnum, page: number, pageSize: number) {
        return new Promise<ListResponseBody>(async (resolve, reject) => {
            const requestPage = new RequestPage()
            requestPage.setPage(page)
            requestPage.setPagesize(pageSize)

            const body = new ListRequestBody()
            body.setLanguage(language)
            body.setCode(BulletinCodeEnum.BULLETIN_CODE_SOLUTION)
            body.setPage(requestPage)

            let header: MessageHeader
            try {
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error('Fail to create header for listing solutions', err)
                return err
            }

            const request = new ListRequest()
            request.setHeader(header)
            request.setBody(body)

            this.client.list(request, null, (err, res) => {
                this.authenticate.doResponse(err, res)
                    .catch((err) => reject(err))
                    .then(async (body) => {
                        // 检查解决方案信息是否有效
                        for (let solutionMetadata of body.getSolutionsList()) {
                            const signature = solutionMetadata.getSignature()
                            solutionMetadata.setSignature('')
                            const passed = await this.authenticate.verify(solutionMetadata.getPublisher(), solutionMetadata.serializeBinary(), signature)
                            if (passed) {
                                solutionMetadata.setSignature(signature)
                            } else {
                                return reject(new DataForgery('invalid signature!'))
                            }
                        }

                        resolve(res.getBody() as ListResponseBody)
                    })
            })
        })
    }
}
