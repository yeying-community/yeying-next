export function encodeString(s: string) {
    return new TextEncoder().encode(s)
}

export function decodeString(bytes: Uint8Array | ArrayBuffer): string {
    return new TextDecoder().decode(bytes)
}

export function encodeBase64(bytes: ArrayBuffer | Uint8Array) {
    return Buffer.from(bytes).toString('base64')
}

export function decodeBase64(str: string) {
    return Buffer.from(str, 'base64')
}

export function encodeHex(bytes: ArrayBuffer | Uint8Array) {
    return Buffer.from(bytes).toString('hex')
}

export function decodeHex(str: string) {
    return Buffer.from(str, 'hex')
}
