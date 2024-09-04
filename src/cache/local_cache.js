export function LocalCache() {
  this.instance = window.localStorage
}

LocalCache.prototype.getItem = function (key, defaultValue) {
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

LocalCache.prototype.setItem = function (key, value) {
  if (key === undefined) {
    console.error('Invalid key(undefined)')
  } else {
    this.instance.setItem(key, JSON.stringify(value))
  }
}

LocalCache.prototype.removeItem = function (key) {
  this.instance.removeItem(key)
}