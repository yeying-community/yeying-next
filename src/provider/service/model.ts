import {Identity, IdentityCodeEnum} from "@yeying-community/yeying-web3";
import {create} from "@bufbuild/protobuf";
import {ApiCodeEnum, ServiceCodeEnum} from "../../yeying/api/common/code_pb";
import {ServiceMetadataSchema} from "../../yeying/api/service/service_pb";

export function convertServiceMetadataFromIdentity(identity: Identity) {
    const metadata = identity.metadata
    if (metadata === undefined) {
        throw new Error("invalid identity metadata!")
    }

    if (metadata.code !== IdentityCodeEnum.IDENTITY_CODE_SERVICE) {
        throw new Error(`invalid identity code=${IdentityCodeEnum[metadata.code]}`)
    }

    const extend = identity.serviceExtend
    if (extend === undefined) {
        throw new Error("invalid identity extend!")
    }

    return create(ServiceMetadataSchema, {
        network: metadata.network,
        owner: metadata.parent,
        address: metadata.address,
        name: metadata.name,
        description: metadata.description,
        did: metadata.did,
        version: metadata.version,
        code: ServiceCodeEnum[extend.code as keyof typeof ServiceCodeEnum],
        apis: extend.apis.split(',').map((a) => ApiCodeEnum[a as keyof typeof ApiCodeEnum]),
        proxy: extend.proxy,
        grpc: extend.grpc,
        avatar: metadata.avatar,
        created: metadata.created,
        checkpoint: metadata.checkpoint
    })
}