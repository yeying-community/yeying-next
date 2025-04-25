import { CipherTypeEnum, DigitalFormatEnum } from '@yeying-community/yeying-client-ts'

export function convertCipherTypeFrom(s: string): CipherTypeEnum {
    const ff = s as keyof typeof CipherTypeEnum
    const v = CipherTypeEnum[ff]
    return v !== undefined ? v : CipherTypeEnum.CIPHER_TYPE_UNKNOWN
}

export function convertCipherTypeTo(code?: CipherTypeEnum) {
    return CipherTypeEnum[code === undefined ? CipherTypeEnum.CIPHER_TYPE_UNKNOWN : code]
}

export function getDigitalFormatByName(name: string) {
    const digitalFormat = Object.values(DigitalFormatEnum).find((t) => {
        const extList = getExtListByDigitalFormat(t as DigitalFormatEnum)
        const exist = extList.find((e) => name !== undefined && name.endsWith(e))
        return exist !== undefined
    })
    return digitalFormat === undefined ? DigitalFormatEnum.DIGITAL_FORMAT_OTHER : (digitalFormat as DigitalFormatEnum)
}

export function getExtListByDigitalFormat(format: DigitalFormatEnum) {
    switch (format) {
        case DigitalFormatEnum.DIGITAL_FORMAT_IMAGE:
            return ['.jpg', 'jpeg', '.gif', '.png', 'webp']
        case DigitalFormatEnum.DIGITAL_FORMAT_VIDEO:
            return ['.mp4', '.avi', '.mov', '.flv']
        case DigitalFormatEnum.DIGITAL_FORMAT_AUDIO:
            return ['.mp3', '.wav', '.ogg']
        case DigitalFormatEnum.DIGITAL_FORMAT_TEXT:
            return ['.txt', '.csv', '.html', '.css']
        case DigitalFormatEnum.DIGITAL_FORMAT_APP:
            return ['.id', '.session', '.app', '.metadata', '.state', '.prompt']
        case DigitalFormatEnum.DIGITAL_FORMAT_OTHER:
            return []
        default:
            return []
    }
}
