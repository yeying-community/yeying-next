// 存储目标：大量结构化数据。
// 容量限制：大量数据存储，通常可达几百MB甚至更多，具体取决于用户设备和浏览器实现。
// 持久性：长期存储，数据不会因为浏览器关闭而删除。
// 特点：是一个低级API，可以存储大量复杂的数据结构；适用于需要存储大量数据和实现复杂查询操作的应用；异步操作，性能优越，但较为复杂，需要处理回调或Promise。
import { Table } from './model'

export class IndexedCache {
    private readonly databaseName: string
    private readonly version: number
    private factory: IDBFactory
    private instance: IDBDatabase | undefined

    constructor(databaseName: string, version: number = 1) {
        //  兼容浏览器
        this.factory = window.indexedDB
        this.databaseName = databaseName
        this.version = version
    }

    open(tables: Table[]) {
        return new Promise((resolve, reject) => {
            // 打开数据库，若没有则会创建
            const request = this.factory.open(this.databaseName, this.version)
            // 数据库打开成功回调
            request.onsuccess = (e) => {
                this.instance = (e.target as IDBOpenDBRequest).result // 数据库对象
                console.log(`Success open database=${this.databaseName}`)
                resolve(e)
            }

            // 数据库打开失败的回调
            request.onerror = (e) => {
                const message = `Fail to open database=${this.databaseName}`
                console.error(message, (e.target as IDBOpenDBRequest).error)
                reject(new Error(message))
            }

            // 数据库有更新时候的回调
            request.onupgradeneeded = (e) => {
                // 数据库创建或升级的时候会触发
                console.log(`Try to upgrade the database=${this.databaseName}`)
                const request = e.target as IDBOpenDBRequest
                const instance = request.result as IDBDatabase
                tables.forEach((t) => {
                    // 是否创建了表
                    let objectStore = undefined
                    if (!instance.objectStoreNames.contains(t.name)) {
                        // 创建表并指定主键
                        const option = { keyPath: t.key, autoIncrement: t.autoIncrement }
                        console.log(`Create new table=${t.name}`)
                        objectStore = instance.createObjectStore(t.name, option)
                    }

                    if (request.transaction === null || request.transaction.mode !== 'versionchange') {
                        console.log(`There is no transaction, mode=${request.transaction?.mode}`)
                        return
                    }

                    objectStore = request.transaction.objectStore(t.name)

                    // 创建表的索引
                    t.indexes.forEach((c) => {
                        if (!objectStore.indexNames.contains(c.name)) {
                            console.log(`Create new index=${c.name} for table=${t.name} when upgrading`)
                            objectStore.createIndex(c.name, c.keyPath, { unique: c.unique })
                        }
                    })
                })
            }
        })
    }

    /**
     * 新增记录, 返回的是Key
     */
    insert(table: string, record: any) {
        return new Promise((resolve, reject) => {
            // 事务对象 指定表格名称和操作模式（"只读"或"读写"）
            let request = (this.instance as IDBDatabase).transaction(table, 'readwrite').objectStore(table).add(record)
            request.onsuccess = () => {
                console.log(`Success to add table=${table} record=${request.result}`)
                resolve(request.result)
            }

            request.onerror = () => {
                const message = `Fail to add table=${table} with record=${JSON.stringify(record)}`
                console.error(message, request.error)
                reject(new Error(message))
            }
        })
    }

    /**
     * 通过游标遍历全表
     */
    cursor(table: string, callback: (record: any) => void) {
        return new Promise<void>((resolve, reject) => {
            let store = (this.instance as IDBDatabase).transaction(table, 'readwrite').objectStore(table)
            let request = store.openCursor() // 指针对象
            // 游标开启成功，逐行读数据
            request.onsuccess = () => {
                let cursor = request.result
                if (cursor) {
                    // 必须要检查
                    callback(cursor.value)
                    cursor.continue() // 遍历了存储对象中的所有内容
                } else {
                    console.log(`Finished, read store=${table}`)
                    resolve()
                }
            }

            request.onerror = () => {
                const message = `Fail to cursor table=${table}`
                console.error(message, request.error)
                reject(new Error(message))
            }
        })
    }

    /**
     * 基于索引的值读取满足条件的第一条记录, 需要说明的是，在建表时基于参数中的列创建了索引或者指定为主键，才可以使用这个函数.
     */
    index(table: string, index: string, value: string) {
        return new Promise((resolve, reject) => {
            let store = (this.instance as IDBDatabase).transaction(table, 'readwrite').objectStore(table)
            let request = store.index(index).get(value)
            request.onerror = () => {
                const message = `Fail to index=${table}:${index}:${value}`
                console.error(message, request.error)
                reject(new Error(message))
            }

            request.onsuccess = () => {
                console.log(`Success to index=${table}, column=${index}, value=${value}`)
                resolve(request.result)
            }
        })
    }

    /**
     * 基于索引的值读取所有满足条件的记录, 需要说明的是，在建表时基于参数中的列创建了索引或者指定为主键，才可以使用这个函数.
     */
    indexAll(table: string, index: string, value: string) {
        return new Promise((resolve, reject) => {
            let store = (this.instance as IDBDatabase).transaction(table, 'readwrite').objectStore(table)
            let request = store.index(index).getAll(value)
            request.onerror = () => {
                const message = `Fail to index all=${table}:${index}:${value}`
                console.error(message, request.error)
                reject(new Error(message))
            }

            request.onsuccess = () => {
                console.log(`Success to index all=${table}, index=${index}, value=${value}`)
                resolve(request.result)
            }
        })
    }

    /**
     * 基于索引和游标遍历所有满足条件的记录，需要说明的是，在建表时基于参数中的列创建了索引或者指定为主键，才可以使用这个函数.
     */
    cursorIndex(
        table: string,
        index: string,
        value: string,
        callback: (record: any) => void,
        direction: IDBCursorDirection = 'next'
    ) {
        return new Promise<void>((resolve, reject) => {
            const store = (this.instance as IDBDatabase).transaction(table, 'readwrite').objectStore(table) // 仓库对象
            const range = value ? IDBKeyRange.only(value) : undefined
            const request = store.index(index).openCursor(range, direction)
            request.onsuccess = () => {
                let cursor = request.result
                // 必须要检查
                if (cursor) {
                    callback(cursor.value)
                    cursor.continue() // 遍历了存储对象中的所有内容
                } else {
                    console.log(`Finished, cursor=${table}, index=${index}:${value}`)
                    resolve()
                }
            }

            request.onerror = () => {
                const message = `Fail to cursor table=${table} with index=${index}:${value}`
                console.error(message, request.error)
                reject(new Error(message))
            }
        })
    }

    /**
     * 通过索引和游标分页查询所有满足条件的记录，需要说明的是，在创建表的时候基于查询列创建了索引或者指定为主键，才可以使用这个函数.
     */
    cursorIndexByPage(
        table: string,
        index: string,
        value: string,
        page: number,
        pageSize: number,
        direction: IDBCursorDirection = 'next'
    ) {
        return new Promise((resolve, reject) => {
            let counter = 0 // 计数器
            let advanced = true // 是否跳过多少条查询
            let store = (this.instance as IDBDatabase).transaction(table, 'readwrite').objectStore(table) // 仓库对象
            let list = []

            let request = store.index(index).openCursor(IDBKeyRange.only(value), direction)
            request.onsuccess = () => {
                let cursor = request.result
                if (cursor !== null && page > 1 && advanced) {
                    advanced = false
                    cursor.advance((page - 1) * pageSize) // 跳过多少条
                    return
                }

                if (cursor !== null) {
                    // 必须要检查
                    list.push(cursor.value)
                    counter++
                    if (counter < pageSize) {
                        cursor.continue() // 遍历了存储对象中的所有内容
                        return
                    }
                }

                console.log(
                    `Finished, cursor=${table}, index=${index}:${value}, page=${page}:${pageSize}, counter=${counter}`
                )
                resolve(list)
            }

            request.onerror = () => {
                const message = `Fail to cursor=${table}, index=${index}:${value}, page=${page}:${pageSize}, counter=${counter}`
                console.error(message, request.error)
                reject(new Error(message))
            }
        })
    }

    /**
     * 基于唯一索引更新记录，如果唯一索引不存在，则插入一条新的记录
     *
     * @param {string} table 表名
     * @param {string} index 索引名称
     */
    updateByIndex(table: string, index: string, record: any) {
        return new Promise((resolve, reject) => {
            const objectStore = (this.instance as IDBDatabase).transaction(table, 'readwrite').objectStore(table)
            let request = objectStore.index(index).getKey(record[index])
            request.onsuccess = () => {
                const putRequest = objectStore.put(record)
                putRequest.onsuccess = (e) => {
                    console.log(`Success to update table=${table} by index=${index}`)
                    resolve(request.result)
                }

                putRequest.onerror = () => {
                    const message = `Fail to put table=${table} record=${JSON.stringify(record)} by index=${index}`
                    console.error(message, request.error)
                    reject(new Error(message))
                }
            }

            request.onerror = () => {
                const message = `Fail to update table=${table} record=${JSON.stringify(record)} by index=${index}`
                console.error(message, request.error)
                reject(new Error(message))
            }
        })
    }

    /**
     * 基于主键查询某条记录
     *
     * @param {string} table 表名
     * @param {string} key 数据
     */
    getByKey(table: string, key: string) {
        return new Promise((resolve, reject) => {
            let request = (this.instance as IDBDatabase).transaction(table, 'readwrite').objectStore(table).get(key)

            request.onsuccess = () => {
                console.log(`Success to query table=${table} with key=${key}`)
                resolve(request.result)
            }

            request.onerror = () => {
                const message = `Fail to query table=${table} with key=${key}`
                console.error(message, request.error)
                reject(new Error(message))
            }
        })
    }

    /**
     * 基于主键更新记录，如果不存在该主键，则插入一条新的记录
     * @param {string} table 表名
     * @param {object} record 数据
     */
    updateByKey(table: string, record: any) {
        return new Promise((resolve, reject) => {
            let request = (this.instance as IDBDatabase)
                .transaction([table], 'readwrite')
                .objectStore(table)
                .put(record)
            request.onsuccess = () => {
                console.log(`Success to update table=${table}`)
                resolve(request.result)
            }

            request.onerror = () => {
                const message = `Fail to update table=${table} record=${JSON.stringify(record)}`
                console.error(message, request.error)
                reject(new Error(message))
            }
        })
    }

    /**
     * 基于索引删除满足条件的第一条记录，需要说明的是，在建表时基于参数中的列创建了索引或者指定为主键，才可以使用这个函数.
     *
     * @param {string} table 表名
     * @param {string} indexName 索引列名
     * @param {object} indexValue 索引值
     *
     */
    deleteByIndex(table: string, index: string, value: string) {
        return new Promise((resolve, reject) => {
            const transaction = (this.instance as IDBDatabase).transaction([table], 'readwrite')
            const objectStore = transaction.objectStore(table)
            const request = objectStore.index(index).getKey(value)
            request.onsuccess = () => {
                const key = request.result
                if (key === undefined) {
                    console.log(`There is no such record, index=${index}, value=${value} from table=${table}`)
                    return resolve(key)
                }

                const deleteRequest = objectStore.delete(key)
                deleteRequest.onerror = () => {
                    console.error(
                        `Fail to delete, key=${key}, index=${index}, value=${value} from table=${table}`,
                        request.error
                    )
                    reject(request.error)
                }

                deleteRequest.onsuccess = () => {
                    console.log(`Success to delete, key=${key}, index=${index}, value=${index} from table=${table}`)
                    resolve(request.result)
                }
            }
            request.onerror = () => {
                const message = `Fail to get key by index=${index}=${value} from table=${table}, err=${request.error}`
                console.error(message, request.error)
                reject(new Error(message))
            }
        })
    }

    /**
     * 基于索引删除满足条件的所有记录，需要说明的是，在建表时基于参数中的列创建了索引或者指定为主键，才可以使用这个函数.
     *

     *
     */
    deleteAllByIndex(table: string, index: string, value: any) {
        return new Promise((resolve, reject) => {
            const transaction = (this.instance as IDBDatabase).transaction([table], 'readwrite')
            const objectStore = transaction.objectStore(table)
            const request = objectStore.index(index).getAllKeys(value)
            request.onsuccess = () => {
                const keys = request.result
                if (keys === undefined || keys.length <= 0) {
                    console.log(`There are no keys, index=${index}, value=${value} from table=${table}`)
                    return resolve([])
                }

                const results = []
                keys.forEach((key) => {
                    const deleteRequest = objectStore.delete(key)
                    deleteRequest.onerror = (e) => {
                        results.push(deleteRequest.result)
                        console.error(
                            `Fail to delete index=${index}, value=${value} from table=${table} with key=${key}`,
                            request.error
                        )
                        if (keys.length === results.length) {
                            resolve(keys)
                        }
                    }

                    deleteRequest.onsuccess = () => {
                        results.push(deleteRequest.result)
                        console.log(
                            `Success to delete, index=${index}, value=${value} from table=${table} with key=${key}`
                        )
                        if (keys.length === results.length) {
                            resolve(keys)
                        }
                    }
                })
            }

            request.onerror = (e) => {
                const message = `Fail to get key by index=${index}=${value} from table=${table}, err=${request.error}`
                console.error(message, request.error)
                reject(new Error(message))
            }
        })
    }

    /**
     * 基于主键删除某条满足条件的记录
     */
    deleteByKey(table: string, value: any) {
        return new Promise((resolve, reject) => {
            let request = (this.instance as IDBDatabase)
                .transaction([table], 'readwrite')
                .objectStore(table)
                .delete(value)
            request.onsuccess = () => {
                console.log(`Success to delete table=${table} with key value=${value}`)
                resolve(request.result)
            }

            request.onerror = () => {
                const message = `Fail to delete table=${table} with key value=${value}`
                console.error(message, request.error)
                reject(new Error(message))
            }
        })
    }

    /**
     * 基于索引和游标遍历删除满足条件的记录，需要说明的是，在建表时基于参数中的列创建了索引或者指定为主键，才可以使用这个函数.
     *
     * @param {string} table 表名
     * @param {string} index 索引列名
     * @param {object} value 索引值
     */
    deleteByCursorIndex(table: string, index: string, value: any, callback: (record: any) => void) {
        return new Promise<void>((resolve, reject) => {
            let store = (this.instance as IDBDatabase).transaction(table, 'readwrite').objectStore(table)
            let request = store.index(index).openCursor(IDBKeyRange.only(value))
            request.onsuccess = (e) => {
                const cursor = request.result
                if (cursor === null) {
                    return resolve()
                }

                const data = cursor.value
                // 请求删除当前项
                const deleteRequest = cursor.delete()
                deleteRequest.onsuccess = (e) => {
                    console.log(`success to delete table=${table} record=${data} by cursor`, e)
                    callback(data)
                }

                deleteRequest.onerror = (e) => {
                    console.log(`Fail to delete table=${table} record=${JSON.stringify(data)} by cursor`, e)
                }
                cursor.continue()
            }

            request.onerror = (e) => {
                const message = `Fail to delete table=${table} with index=${index}:${value}`
                console.log(message, request.error)
                reject(new Error(message))
            }
        })
    }

    /**
     * 删除数据库
     */
    deleteDatabase() {
        return new Promise((resolve, reject) => {
            console.log(`Delete dbName=${this.databaseName}`)
            let request = this.factory.deleteDatabase(this.databaseName)
            request.onerror = () => {
                const message = `Fail to delete database=${this.databaseName}`
                console.error(message, request.error)
                reject(new Error(message))
            }

            request.onsuccess = () => {
                console.log(`Success to delete database=${this.databaseName}`)
                resolve(request.result)
            }
        })
    }

    /**
     * 关闭数据库
     */
    close() {
        if (this.instance !== undefined) {
            this.instance.close()
        }

        console.log(`Success to close db=${this.databaseName}`)
    }
}
