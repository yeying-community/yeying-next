import { DateTime, Duration } from 'luxon'

export function isExpired(datetime: DateTime, durationSecond: number) {
    return DateTime.now().diff(datetime).valueOf() > durationSecond * 1000
}

/**
 * 获得当前ISO UTC时间
 * @returns {string} 时间字符串
 */
export function getCurrentUtcString(): string {
    return formatDateTime(getCurrentUtcDateTime())
}

export function getCurrentUtcDateTime() {
    return DateTime.utc()
}

export function convertToUtcDateTime(datetime: DateTime) {
    return datetime.toUTC()
}

export function formatDateTime(datetime: DateTime) {
    const s = datetime.toISO()
    return s === null ? '' : s
}

export function parseDateTime(s: string) {
    return DateTime.fromISO(s)
}

export function convertDateTimeToDate(datetime: DateTime) {
    return datetime.toJSDate()
}

export function convertDateToDateTime(date: Date) {
    return DateTime.fromJSDate(date)
}

export function convertDateTimeToLocal(datetime: DateTime) {
    return datetime.toLocal()
}

export function plusSecond(datetime: DateTime, seconds: number) {
    return datetime.plus(Duration.fromObject({ seconds: seconds }))
}
