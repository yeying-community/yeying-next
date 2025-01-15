import { CipherTypeEnum, DigitalFormatEnum, LanguageCodeEnum } from '../yeying/api/common/code_pb'
import { BlockMetadata } from '../yeying/api/asset/block_pb'
import { ChunkMetadata } from '../yeying/api/asset/asset_pb'
import { index } from 'typedoc/dist/lib/output/themes/default/partials'

export function convertLanguageCodeFrom(s: string) {
    // @ts-ignore
    return CipherTypeEnum[s.toUpperCase()]
}

export function convertLanguageCodeTo(code: LanguageCodeEnum): string {
    // @ts-ignore
    return Object.keys(LanguageCodeEnum).find((s) => LanguageCodeEnum[s] === code)
}

export function convertCipherTypeFrom(s: string): CipherTypeEnum {
    // @ts-ignore
    return CipherTypeEnum[s.toUpperCase()]
}

export function convertCipherTypeTo(code: CipherTypeEnum) {
    // @ts-ignore
    return Object.keys(CipherTypeEnum).find((s) => CipherTypeEnum[s] === code)
}

export function convertChunkMetadataFromBlock(index: number, block: BlockMetadata): ChunkMetadata {
    const chunk = new ChunkMetadata()
    chunk.setSize(block.getSize())
    chunk.setIndex(index)
    chunk.setHash(block.getHash())
    return chunk
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
