import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {BlockAddress, SecurityAlgorithm} from "@yeying-community/yeying-web3";

export function getDefaultNamespace(): string {
    return "da75961a-df9e-4cca-a14a-d2a9c6ec561e"
}

export function getBlockAddress(): BlockAddress {
    return {
        privateKey: '0x1b8b419505748c88071b8d28caafa4a74bcdc4a540542e7b4514b13a3f35c96c',
        identifier: 'did:ethr:0x7e4:0x0396be3542029111627e1d08c65a740fcda7b8a341a618ebfe92bace61c0fd5506',
        publicKey: '0x0396be3542029111627e1d08c65a740fcda7b8a341a618ebfe92bace61c0fd5506',
        address: '0x6256583430f59D8d526a0a694e7d37ea1956d0AC',
        mnemonic: undefined
    }
}

export function getSecurityAlgorithm(): SecurityAlgorithm {
    return {
        name: 'CIPHER_TYPE_AES_GCM_256',
        iv: "58719a06cac813e279f24c5e",
    }
}

export function getProviderProxy(code: ServiceCodeEnum) {
    switch (code) {
        case ServiceCodeEnum.SERVICE_CODE_NODE:
            return process.env.YEYING_NODE_URL ? process.env.YEYING_NODE_URL as string : "http://localhost:8441"
        case ServiceCodeEnum.SERVICE_CODE_WAREHOUSE:
            return process.env.YEYING_WAREHOUSE_URL ? process.env.YEYING_WAREHOUSE_URL as string : "http://localhost:8641"
        case ServiceCodeEnum.SERVICE_CODE_AGENT:
            return process.env.YEYING_AGENT_URL ? process.env.YEYING_AGENT_URL as string : "http://localhost:8541"
        case ServiceCodeEnum.SERVICE_CODE_AI:
            return process.env.YEYING_AI_URL ? process.env.YEYING_AI_URL as string : "http://localhost:8741"
        default:
            throw new Error(`Unknown provider=${code}`)
    }
}

export function createTestFile(fileName: string, size: number): File {
    const array = new Uint8Array(size);
    for (let i = 0; i < size; i++) {
        array[i] = i % 256; // 简单的数据填充逻辑，可以根据需要修改
    }

    return new File([array], fileName, {type: 'text/plain'});
}
