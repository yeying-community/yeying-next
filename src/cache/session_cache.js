export function SessionCache() {
  this.instance = window.sessionStorage
}

SessionCache.prototype.getItem = function (key, defaultValue) {
  if (key === undefined) {
    return defaultValue
  } else {
    const value = this.instance.getItem(key)
    if (value === null) {
      return defaultValue
    } else {
      return JSON.parse(value)
    }
  }
}

SessionCache.prototype.setItem = function (key, value) {
  if (key === undefined) {
    console.error('Invalid key(undefined)')
  } else {
    this.instance.setItem(key, value)
  }
}