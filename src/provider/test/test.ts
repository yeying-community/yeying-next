import {Authenticate} from '../common/authenticate'
import {MessageHeader} from '../../yeying/api/common/message_pb'
import {ProviderOption} from '../common/model'
import {TestClient} from "../../yeying/api/test/TestServiceClientPb";
import {EchoRequest, EchoRequestBody} from "../../yeying/api/test/test_pb";

/**
 * 代表了一个节点，夜莺社区提供了默认的节点，也可以选择其他社区的节点，以及使用该节点的生态应用
 */

export class TestProvider {
    private authenticate: Authenticate
    private client: TestClient

    constructor(authenticate: Authenticate, option: ProviderOption) {
        this.authenticate = authenticate
        this.client = new TestClient(option.proxy)
    }

    echo(message: string) {
        return new Promise(async (resolve, reject) => {
            const body = new EchoRequestBody()
            body.setMessage(message)
            let header: MessageHeader
            try {
                header = await this.authenticate.createHeader(body.serializeBinary())
            } catch (err) {
                console.error('Fail to create header for echo', err)
                return reject(err)
            }

            const request = new EchoRequest()
            request.setHeader(header)
            request.setBody(body)

            this.client.echo(request, null, (err, res) => {
                this.authenticate.doResponse(err, res).then((body) => resolve(body), reject)
            })
        })
    }
}