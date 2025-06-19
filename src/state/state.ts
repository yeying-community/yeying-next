import { LocalCache } from '../cache/local'

export abstract class State {
    stateId: string
    data: any
    storage: LocalCache

    protected constructor(stateId: string) {
        this.stateId = stateId
        this.storage = new LocalCache()
        this.data = {}
    }

    abstract getStorageKey(key: string): string

    /**
     * 状态记录的配置信息
     *
     * @param key
     * @param value
     */
    setConfig(key: string, value: any): void {
        this.setDict('config', key, value)
    }

    clearConfig(): void {
        this.clearDict('config')
    }

    getConfig(key: string): any {
        return this.getDict('config', key)
    }

    /**
     * 状态本身的元信息
     *
     * @param key 元信息的属性
     * @param value 元信息属性对应的值
     */
    setMetadata(key: string, value: any): void {
        this.setDict('metadata', key, value)
    }

    clearMetadata(): void {
        this.clearDict('metadata')
    }

    getMetadata(key: string): any {
        return this.getDict('metadata', key)
    }

    /**
     * 状态记录的数据信息
     *
     * @param key
     * @param value
     */
    setData(key: string, value: any): void {
        this.setDict('data', key, value)
    }

    getData(key: string): any {
        return this.getDict('data', key)
    }

    clearData(): void {
        this.clearDict('data')
    }

    /**
     * 状态记录的通用信息
     *
     * @param key
     * @param value
     */
    setExtend(key: string, value: any): void {
        this.setDict('extend', key, value)
    }

    getExtend(key: string): any {
        return this.getDict('extend', key)
    }

    clearExtend(): void {
        this.clearDict('extend')
    }

    protected setList(field: string, value: any[]): void {
        this.data[field] = value
        this.storage.set(this.getStorageKey(field), JSON.stringify(this.data[field]))
    }

    protected getList(field: string): any[] {
        if (this.data[field] === undefined) {
            const data = this.storage.get(this.getStorageKey(field))
            if (data !== undefined && data !== null) {
                this.data[field] = JSON.parse(data)
            }
        }
        return this.data[field]
    }

    protected setDict(field: string, key: string, value: any): void {
        if (this.data[field] === undefined) {
            this.data[field] = {}
        }

        this.data[field][key] = value
        this.storage.set(this.getStorageKey(field), JSON.stringify(this.data[field]))
    }

    protected clearDict(field: string): void {
        delete this.data[field]
        this.storage.remove(this.getStorageKey(field))
    }

    protected getDict(field: string, key: string): any {
        if (this.data[field] === undefined) {
            const data = this.storage.get(this.getStorageKey(field))
            if (data !== undefined && data !== null) {
                this.data[field] = JSON.parse(data)
            }
        }

        if (this.data[field]) {
            return this.data[field][key]
        }
    }
}
