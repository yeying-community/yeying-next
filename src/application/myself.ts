import {
    ApplicationMetadata,
    ApplicationMetadataSchema,
    ServiceMetadata,
    ServiceMetadataSchema,
    verifyApplicationMetadata,
    verifyServiceMetadata
} from '@yeying-community/yeying-client-ts'
import { fromBinary, fromJson, toJson } from '@bufbuild/protobuf'
import { decodeBase64 } from '@yeying-community/yeying-web3'

export class Myself {
    // 前端域名
    domain: string = window.location.protocol + '//' + window.location.host
    constructor(domain?: string) {
        if (domain) {
            this.domain = domain
        }
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
            try {
                await verifyServiceMetadata(service)
                services.push(service)
            } catch (err) {
                console.error(
                    `Invalid service metadata=${JSON.stringify(toJson(ServiceMetadataSchema, service))} when getting registry.`,
                    err
                )
            }
        }
        return services
    }
}
