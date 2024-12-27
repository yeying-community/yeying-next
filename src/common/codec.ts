import {CipherTypeEnum, LanguageCodeEnum} from "../yeying/api/common/code_pb";

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

export function convertLanguageCodeFrom(type: string) {
    const v = LanguageCodeEnum[type as keyof typeof LanguageCodeEnum]
    return v !== undefined ? v : LanguageCodeEnum.LANGUAGE_CODE_UNKNOWN
}

export function convertLanguageCodeTo(code: LanguageCodeEnum) {
    return LanguageCodeEnum[code] || LanguageCodeEnum[LanguageCodeEnum.LANGUAGE_CODE_UNKNOWN]
}

export function convertCipherTypeFrom(type: string) {
    const v = CipherTypeEnum[type as keyof typeof CipherTypeEnum]
    return v !== undefined ? v : CipherTypeEnum.CIPHER_TYPE_UNKNOWN
}

export function convertCipherTypeTo(code: CipherTypeEnum) {
    return CipherTypeEnum[code] || CipherTypeEnum[CipherTypeEnum.CIPHER_TYPE_UNKNOWN]
}