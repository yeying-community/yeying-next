import {ApplicationCodeEnum} from "@yeying-community/yeying-client-ts";
import {BlockAddress} from "@yeying-community/yeying-web3";

export function getBlockAddress(): BlockAddress {
    return {
        privateKey: '0x1b8b419505748c88071b8d28caafa4a74bcdc4a540542e7b4514b13a3f35c96c',
        identifier: 'did:ethr:0x7e4:0x0396be3542029111627e1d08c65a740fcda7b8a341a618ebfe92bace61c0fd5506',
        publicKey: '0x0396be3542029111627e1d08c65a740fcda7b8a341a618ebfe92bace61c0fd5506',
        address: '0x6256583430f59D8d526a0a694e7d37ea1956d0AC',
        mnemonic: undefined
    }
}

export function getApplicationAddress(code: ApplicationCodeEnum) {
    switch (code) {
        case ApplicationCodeEnum.APPLICATION_CODE_MARKET:
            return process.env.YEYING_PORTAL_URL ? process.env.YEYING_PORTAL_URL as string : "http://localhost:8451"
        default:
            throw new Error(`Unknown application=${code}`)
    }
}