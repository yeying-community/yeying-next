import {getDigitalFormatByName} from "../../src/common/message";
import {DigitalFormatEnum} from "../../src";

describe('Message', () => {
    it('digital format', async () => {
        const name1 = "audio.wav"
        const format1 = getDigitalFormatByName(name1)
        assert.equal(format1, DigitalFormatEnum.DIGITAL_FORMAT_AUDIO)
        const name2 = "audio"
        const format2 = getDigitalFormatByName(name2)
        assert.equal(format2, DigitalFormatEnum.DIGITAL_FORMAT_OTHER)
    })
})