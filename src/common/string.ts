export function isValidString(s: any) {
    return s !== undefined && s !== null && typeof s === 'string'
}

// export function isBlank(str) {
//   // 白空格字符: 空格(" "), Tab制表符(\t), 空操作符(\0), 垂直制表符(\v), 换页符(\f)
//   // 行结束符: 换行符(\n), 回车符(\r)
//   return str === undefined || str === null || str.trim().length === 0
// }
//
// export function encodeString(str) {
//   return new TextEncoder().encode(str)
// }
//
// export function decodeString(bytes) {
//   return new TextDecoder().decode(bytes)
// }
//
export function generateRandomString(length: number = 17) {
    let randomString = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return randomString
}

// export function generateShortUuid() {
//   const uuid = generateUuid()
//   const base62Characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   const hex = uuid.replace(/-/g, '') // Remove dashes
//   let num = BigInt('0x' + hex)
//   let result = ''
//   while (num > 0) {
//     result = base62Characters[num % 62n] + result
//     num /= 62n
//   }
//   return result
// }

export function generateUuid() {
    // 创建一个 16 字节的随机数组缓冲区
    const buffer = new Uint8Array(16)
    crypto.getRandomValues(buffer)

    // 将缓冲区转换为 UUID 的格式
    buffer[6] &= 0x0f
    buffer[6] |= 0x40
    buffer[8] &= 0x3f
    buffer[8] |= 0x80

    const hex = Array.from(new Uint8Array(buffer))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('')
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
}

// export function trimLeft(str, trim = '0x') {
//   if (str === undefined || str === null) {
//     return str
//   }
//
//   return str.startsWith(trim) ? str.substring(trim.length) : str
// }
//
// export function createMsgId(sessionId, type, index) {
//   return `${sessionId}-${type}-${index}`
// }
//
// export function getParameterByUrlAndName(url, name) {
//   name = name.replace(/[\[\]]/g, '\\$&')
//   let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
//   let results = regex.exec(url)
//   if (!results) return null
//   if (!results[2]) return ''
//   return decodeURIComponent(results[2].replace(/\+/g, ' '))
// }
//
// export function capitalizeFirstLetter(word) {
//   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
// }
//
// // 获得下划线连接的字符串中最后一个子串
// export function splitByUnderlineAndGetLastString(str) {
//   const match = str.match(/[^_]*$/)
//   return match ? match[0] : ''
// }
//
// export function splitByColonAndGetLastString(str) {
//   const match = str.match(/[^:]*$/)
//   return match ? match[0] : ''
// }
//
// export function isNumeric(str) {
//   return /^[+-]?\d+(\.\d+)?$/.test(str);
// }
