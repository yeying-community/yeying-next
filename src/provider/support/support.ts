import {BulletinClient} from "../../yeying/api/bulletin/BulletinServiceClientPb";
import {Provider} from "../common/model";
import {Authenticate} from "../common/authenticate";

export class BulletinProvider {
    private authenticate: Authenticate
    private client: BulletinClient

    constructor(authenticate: Authenticate, provider: Provider) {
        this.authenticate = authenticate
        this.client = new BulletinClient(provider.proxy)
    }


}