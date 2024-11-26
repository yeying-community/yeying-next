
export function decodeHex(hex) {
  if (hex === undefined || hex === null) {
    return hex
  }

  const length = hex.length / 2
  const byteArray = new Uint8Array(length)
  for (let i = 0; i < length; i++) {
    byteArray[i] = parseInt(hex.slice(i * 2, (i + 1) * 2), 16)
  }
  return byteArray
}

export function encodeHex(byte) {
  if (byte === undefined || byte === null) {
    return byte
  }

  return Array.from(new Uint8Array(byte)).map(b => b.toString(16).padStart(2, '0')).join('')
}

export function encodeBase64(bytes) {
  return Buffer.from(bytes).toString('base64')
}

export function decodeBase64(text) {
  return Buffer.from(text, 'base64')
}


