import {Authenticate} from "../common/authenticate";
import {Provider} from "../common/model";
import {ServiceClient} from "../../yeying/api/service/ServiceServiceClientPb";

export class ServiceProvider {
    private authenticate: Authenticate
    private client: ServiceClient

    constructor(authenticate: Authenticate, provider: Provider) {
        this.authenticate = authenticate
        this.client = new ServiceClient(provider.proxy)
    }
}