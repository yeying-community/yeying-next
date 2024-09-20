// 存储目标：存储键值对数据
// 容量限制：与LocalStorage类似，大多数浏览器在5-10MB之间。
// 持久性：仅在单个浏览器会话中有效，浏览器窗口或标签页关闭后即被删除。
// 特点：操作及用法和LocalStorage相似；对于会话级数据更为适合，如单个会话的临时状态保存。
export class SessionCache {
  constructor() {
    this.instance = window.sessionStorage
  }

  get(key, defaultValue) {
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

  set(key, value) {
    if (key === undefined) {
      console.error('Invalid key(undefined)')
    } else {
      this.instance.setItem(key, JSON.stringify(value))
    }
  }

  remove(key) {
    this.instance.removeItem(key)
  }
}