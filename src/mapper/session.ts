/**
 * 1、向indexedDB添加一条新的消息记录会增加一个id字段，因为id字段是自增主键，所以新添加的记录其id字段会递增；
 * 2、当用户在不同的端上打开会话，并新增了消息，就需要进行会话合并，按照消息的timestamp递增进行有序合并，形成一份新的会话；
 * 3、更新本地会话，删除所有老的会话，然后按序插入合并后的会话；
 */
import { Index, Table } from '../cache/model'
import { IndexedCache } from '../cache/indexed'
import { isBlank } from '../common/string'

export class SessionMapper {
    tableName: string = 'session-message'
    sessionIdIndexColumn: Index
    timestampIndexColumn: Index
    typeIndexColumn: Index
    formatIndexColumn: Index
    referenceIdIndexColumn: Index
    tableSchema: Table
    instance: IndexedCache

    constructor(instance: IndexedCache) {
        this.sessionIdIndexColumn = { name: 'sessionId', keyPath: 'sessionId', unique: false }
        this.timestampIndexColumn = { name: 'timestamp', keyPath: 'timestamp', unique: false }
        this.typeIndexColumn = { name: 'type', keyPath: 'type', unique: false }
        this.formatIndexColumn = { name: 'format', keyPath: 'format', unique: false }
        this.referenceIdIndexColumn = { name: 'referenceId', keyPath: 'referenceId', unique: false }
        const indexes = [
            this.sessionIdIndexColumn,
            this.typeIndexColumn,
            this.formatIndexColumn,
            this.timestampIndexColumn,
            this.referenceIdIndexColumn
        ]
        this.tableSchema = { name: this.tableName, key: 'id', autoIncrement: false, indexes: indexes }
        this.instance = instance
    }

    getTableSchema() {
        return this.tableSchema
    }

    open() {
        return this.instance.open([this.tableSchema])
    }

    cursorBySession(sessionId: string, callback: (record: any) => void) {
        return this.instance.cursorIndex(
            this.tableSchema.name,
            this.sessionIdIndexColumn.keyPath,
            sessionId,
            callback,
            'next'
        )
    }

    cursorByTimestamp(direction: IDBCursorDirection = 'next', callback: (record: any) => void) {
        return this.instance.cursorIndex(
            this.tableSchema.name,
            this.timestampIndexColumn.keyPath,
            '',
            callback,
            direction
        )
    }

    getByMessageId(id: string) {
        return this.instance.index(this.tableSchema.name, this.tableSchema.name, id)
    }

    deleteBySessionId(sessionId: string) {
        return new Promise((resolve, reject) => {
            this.instance
                .deleteByIndex(this.tableSchema.name, this.sessionIdIndexColumn.keyPath, sessionId)
                .then((data) => resolve(data), reject)
        })
    }
    updateByMessageId(message: string) {
        return new Promise((resolve, reject) => {
            return this.instance.updateByKey(this.tableSchema.name, message).then((data) => resolve(data), reject)
        })
    }

    insert(message: string) {
        return new Promise((resolve, reject) => {
            this.instance.insert(this.tableSchema.name, message).then((data) => resolve(data), reject)
        })
    }

    deleteByReferenceId(referenceId: string) {
        if (isBlank(referenceId)) {
            return
        }

        return new Promise((resolve, reject) => {
            this.instance
                .deleteAllByIndex(this.tableSchema.name, this.referenceIdIndexColumn.keyPath, referenceId)
                .then((data) => resolve(data), reject)
        })
    }

    deleteByMessageId(id: string) {
        return new Promise((resolve, reject) => {
            this.instance.deleteByKey(this.tableSchema.name, id).then((data) => resolve(data), reject)
        })
    }
}
