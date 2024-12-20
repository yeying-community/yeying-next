import {Authenticate} from "../common/authenticate";
import {BulletinClient} from "../../yeying/api/bulletin/BulletinServiceClientPb";
import {Provider} from "../common/model";

export class BulletinProvider {
    private authenticate: Authenticate
    private client: BulletinClient

    constructor(authenticate: Authenticate, provider: Provider) {
        this.authenticate = authenticate
        this.client = new BulletinClient(provider.proxy)
    }


}