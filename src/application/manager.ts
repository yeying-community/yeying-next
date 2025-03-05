import {fromBinary, fromJson} from "@bufbuild/protobuf";
import {decodeBase64} from "../common/codec";
import {verifyApplicationMetadata} from "../provider/model/model";
import {
    ApplicationMetadata,
    ApplicationMetadataSchema,
    ServiceMetadata,
    ServiceMetadataSchema
} from "../yeying/api/common/model_pb";

export class ApplicationManager {
    // 前端域名
    domain: string

    constructor(domain?: string) {
        this.domain = domain ? domain : window.location.protocol + '//' + window.location.host
    }

    async whoami(): Promise<ApplicationMetadata> {
        const whoamiUrl = this.domain + '/whoami'
        const response = await fetch(whoamiUrl)
        const result = await response.json()
        const application = fromJson(ApplicationMetadataSchema, result)
        await verifyApplicationMetadata(application)
        return application
    }

    async registry(): Promise<ServiceMetadata[]> {
        const registryUrl = this.domain + '/registry'
        const response = await fetch(registryUrl)
        const registry = await response.json()
        const services: ServiceMetadata[] = []
        for (const node of registry.nodes) {
            const service = fromBinary(ServiceMetadataSchema, decodeBase64(node))
            services.push(service)
        }
        return services;
    }
}
