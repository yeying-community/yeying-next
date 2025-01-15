import {getBlockAddress} from "../common/common";
import {SecurityAlgorithm} from "@yeying-community/yeying-web3";
import {convertCipherTypeTo} from "../../../src/common/message";
import {CipherTypeEnum} from "../../../src";
import {decodeString, encodeHex, encodeString} from "../../../src/common/codec";
import {generateIv} from "../../../src/common/crypto";
import {AssetCipher} from "../../../src/provider/warehouse/cipher";
import {as} from "vitest/dist/chunks/reporters.D7Jzd9GS";

describe('Cipher', () => {
    it('encrypt and decrypt', async () => {
        const blockAddress = getBlockAddress()
        const securityAlgorithm = SecurityAlgorithm.create({
            name: convertCipherTypeTo(CipherTypeEnum.CIPHER_TYPE_AES_GCM_256),
            iv: encodeHex(generateIv())
        })

        const message = "hello yeying community!"
        const assetCipher = new AssetCipher(blockAddress, securityAlgorithm)
        const cipher = await assetCipher.encrypt(encodeString(message))
        const plain = await assetCipher.decrypt(cipher)
        assert.equal(decodeString(plain), message)
    })
})