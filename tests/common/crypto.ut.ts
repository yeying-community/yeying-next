import {decryptString, encryptString} from "../../src/common/crypto";
import {encodeBase64, generateIv} from "@yeying-community/yeying-web3";
import {SecurityAlgorithm} from "@yeying-community/yeying-web3/dist/yeying/api/web3/web3";
import {expect} from "vitest";

describe("Crypto", () => {
    it("encrypt and decrypt", async function () {
        const securityAlgorithm: SecurityAlgorithm = {
            iv:  encodeBase64(generateIv()),
            name: "AES-GCM",
        }

        const password = '123456'
        const content = 'test'
        const cipher = await encryptString(securityAlgorithm, password, content)
        const plain = await decryptString(securityAlgorithm, password, cipher)
        expect(plain).equal(content)
    })
})