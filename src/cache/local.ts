// 存储目标：键值对数据。
// 容量限制：大多数浏览器在5-10MB之间。
// 持久性：长期存储，数据不会随着浏览器关闭而删除，除非手动清除。
// 特点：只能在客户端使用，不能用于服务器通信；易于操作且性能较好，但不适合存储敏感数据。
export class LocalCache {
    private storage: Storage

    constructor() {
        this.storage = window.localStorage
    }

    get(key: string) {
        return this.storage.getItem(key)
    }

    set(key: string, value: any) {
        this.storage.setItem(key, value)
    }

    remove(key: string) {
        this.storage.removeItem(key)
    }
}
