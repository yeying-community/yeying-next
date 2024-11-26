import {DateTime, Duration} from 'luxon'

export function isExpired(datetime, durationSecond) {
  return DateTime.now().diff(datetime).valueOf() > durationSecond * 1000
}

export function getCurrentUtcString() {
  return formatDateTime(getCurrentUtcDateTime())
}

export function getCurrentUtcDateTime() {
  return DateTime.utc()
}

export function convertToUtcDateTime(datetime) {
  return datetime.toUTC()
}

export function formatDateTime(datetime) {
  return datetime.toISO()
}

export function parseDateTime(str) {
  return DateTime.fromISO(str)
}

export function convertDateTimeToDate(datetime) {
  return datetime.toJSDate()
}

export function convertDateToDateTime(date) {
  return DateTime.fromJSDate(date)
}

export function convertDateTimeToLocal(datetime) {
  return datetime.toLocal()
}

export function plusSecond(datetime, seconds) {
  return datetime.plus(Duration.fromObject({seconds: seconds}))
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}