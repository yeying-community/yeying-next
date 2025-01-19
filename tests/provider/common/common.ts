import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {BlockAddress} from "@yeying-community/yeying-web3";


export function getBlockAddress(): BlockAddress {
    return BlockAddress.create({
        privateKey: '0x1b8b419505748c88071b8d28caafa4a74bcdc4a540542e7b4514b13a3f35c96c',
        identifier: 'did:ethr:0x7e4:0x0396be3542029111627e1d08c65a740fcda7b8a341a618ebfe92bace61c0fd5506',
        publicKey: '0x0396be3542029111627e1d08c65a740fcda7b8a341a618ebfe92bace61c0fd5506',
        address: '0x6256583430f59D8d526a0a694e7d37ea1956d0AC',
    })
}

export function getProvider(code: ServiceCodeEnum) {
    switch (code) {
        case ServiceCodeEnum.SERVICE_CODE_NODE:
            return {proxy: process.env.YEYING_NODE_URL ? process.env.YEYING_NODE_URL as string : "http://localhost:8441"}
        case ServiceCodeEnum.SERVICE_CODE_AGENT:
            return {proxy: process.env.YEYING_AGENT_URL ? process.env.YEYING_AGENT_URL as string : "http://localhost:8541"}
        case ServiceCodeEnum.SERVICE_CODE_WAREHOUSE:
            return {proxy: process.env.YEYING_WAREHOUSE_URL ? process.env.YEYING_WAREHOUSE_URL as string : "http://localhost:8641"}
        default:
            throw new Error(`Unknown provider=${code}`)
    }
}