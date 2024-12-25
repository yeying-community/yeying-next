export function computeHash(m: Uint8Array | ArrayBuffer) {
    return crypto.subtle.digest('SHA-256', m)
}
