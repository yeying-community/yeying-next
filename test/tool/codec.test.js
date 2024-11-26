import {computeHash, Digest} from '../../src/tool/digest.js'
import {encodeString} from '../../src/tool/string.js'
import {encodeHex} from '../../src/tool/codec.js'

describe('Codec', () => {
  it('Hex', async () => {
    const data = "hello world!"
    const bytes = encodeString(data)
    const hex = await computeHash(bytes)
    const hex1  = encodeHex(hex)
    console.log(hex1)
    const digest = new Digest()
    digest.update(bytes)
    const hex2 = digest.sum()
    expect(hex1).toStrictEqual(hex2)
  })
})