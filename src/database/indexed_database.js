export function IndexedDatabase(dbName, version = 1) {
  //  兼容浏览器
  this.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
  // 数据库实例
  this.instance = undefined
  this.dbName = dbName
  this.version = version
}

IndexedDatabase.prototype.open = function (tables) {
  return new Promise((resolve, reject) => {
    // 打开数据库，若没有则会创建
    const request = this.indexedDB.open(this.dbName, this.version)
    // 数据库打开成功回调
    request.onsuccess = (e) => {
      this.instance = e.target.result // 数据库对象
      console.log(`Success open database=${this.dbName}`)
      resolve(e)
    }

    // 数据库打开失败的回调
    request.onerror = (e) => {
      const message = `Fail to open database=${this.dbName}`
      console.error(message, e.target.error)
      reject(new Error(message))
    }

    // 数据库有更新时候的回调
    request.onupgradeneeded = (event) => {
      // 数据库创建或升级的时候会触发
      console.log(`Try to upgrade the database=${this.dbName}`, event)
      this.instance = event.target.result // 数据库对象
      let objectStore = undefined
      tables.forEach(t => {
        if (!this.instance.objectStoreNames.contains(t.name)) {
          // 创建表并指定主键
          const option = {keyPath: t.keyPath, autoIncrement: t.autoIncrement}
          console.log(`Create new table=${t.name}`)
          objectStore = this.instance.createObjectStore(t.name, option)
        }

        if (objectStore === undefined) {
          objectStore = event.target.transaction.objectStore(t.name)
        }

        // 创建表的索引
        t.indexColumns.forEach(c => {
          if (!objectStore.indexNames.contains(c.name)) {
            console.log(`Create new index=${c.name} for table=${t.name}`)
            objectStore.createIndex(c.name, c.keyPath, {unique: c.unique})
          }
        })
      })
    }
  })
}

/**
 * 新增记录, 返回的是Key
 *
 * @param {string} tableName 表名
 * @param {string} data 数据
 */
IndexedDatabase.prototype.insert = function (tableName, data) {
  return new Promise((resolve, reject) => {
    // 事务对象 指定表格名称和操作模式（"只读"或"读写"）
    let request = this.instance.transaction(tableName, 'readwrite').objectStore(tableName).add(data)
    request.onsuccess = (e) => {
      console.log(`Success to add table=${tableName} record=${e.target.result}`)
      resolve(e.target.result)
    }

    request.onerror = function (e) {
      const message = `Fail to add table=${tableName} record=${JSON.stringify(data)}`
      console.error(message, e.target.error)
      reject(new Error(message))
    }
  })
}

/**
 * 通过游标遍历全表
 *
 * @param {string} tableName 表名
 */
IndexedDatabase.prototype.cursor = function (tableName, callback) {
  return new Promise((resolve, reject) => {
    let store = this.instance.transaction(tableName, 'readwrite').objectStore(tableName)
    let request = store.openCursor() // 指针对象
    // 游标开启成功，逐行读数据
    request.onsuccess = (e) => {
      let cursor = e.target.result
      if (cursor) {
        // 必须要检查
        callback(cursor.value)
        cursor.continue() // 遍历了存储对象中的所有内容
      } else {
        console.log(`Finished, read store=${tableName}`)
        resolve()
      }
    }

    request.onerror = (e) => {
      const message = `Fail to cursor table=${tableName}`
      console.error(message, e.target.error)
      reject(new Error(message))
    }
  })
}

/**
 * 基于索引的值读取满足条件的第一条记录, 需要说明的是，在建表时基于参数中的列创建了索引或者指定为主键，才可以使用这个函数.
 *
 * @param {string} tableName 表名
 * @param {string} indexName 索引名称
 * @param {string} indexValue 索引值
 */
IndexedDatabase.prototype.index = function (tableName, indexName, indexValue) {
  return new Promise((resolve, reject) => {
    let store = this.instance.transaction(tableName, 'readwrite').objectStore(tableName)
    let request = store.index(indexName).get(indexValue)
    request.onerror = (e) => {
      const message = `Fail to index=${tableName}:${indexName}:${indexValue}`
      console.error(message, e.target.error)
      reject(new Error(message))
    }

    request.onsuccess = (e) => {
      console.log(`Success to index=${tableName}, column=${indexName}, value=${indexValue}`)
      resolve(e.target.result)
    }
  })
}

/**
 * 基于索引的值读取所有满足条件的记录, 需要说明的是，在建表时基于参数中的列创建了索引或者指定为主键，才可以使用这个函数.
 *
 * @param {string} tableName 表名
 * @param {string} indexName 索引名称
 * @param {string} indexValue 索引值
 */
IndexedDatabase.prototype.indexAll = function (tableName, indexName, indexValue) {
  return new Promise((resolve, reject) => {
    let store = this.instance.transaction(tableName, 'readwrite').objectStore(tableName)
    let request = store.index(indexName).getAll(indexValue)
    request.onerror = (e) => {
      const message = `Fail to index all=${tableName}:${indexName}:${indexValue}`
      console.error(message, e.target.error)
      reject(new Error(message))
    }

    request.onsuccess = (e) => {
      console.log(`Success to index all=${tableName}, column=${indexName}, value=${indexValue}`)
      resolve(e.target.result)
    }
  })
}

/**
 * 基于索引和游标遍历所有满足条件的记录，需要说明的是，在建表时基于参数中的列创建了索引或者指定为主键，才可以使用这个函数.
 *
 * @param {string} tableName 表名
 * @param {string} indexName 索引名称
 * @param {string} indexValue 索引值
 */
IndexedDatabase.prototype.cursorIndex = function (tableName, indexName, indexValue, direction, callback) {
  return new Promise((resolve, reject) => {
    const store = this.instance.transaction(tableName, 'readwrite').objectStore(tableName) // 仓库对象
    const range = indexValue ? IDBKeyRange.only(indexValue) : undefined
    const request = store.index(indexName).openCursor(range, direction)
    request.onsuccess = (e) => {
      let cursor = e.target.result
      // 必须要检查
      if (cursor) {
        callback(cursor.value)
        cursor.continue() // 遍历了存储对象中的所有内容
      } else {
        console.log(`Finished, cursor=${tableName}, index=${indexName}:${indexValue}`)
        resolve()
      }
    }

    request.onerror = (e) => {
      const message = `Fail to cursor=${tableName} and index=${indexName}:${indexValue}`
      console.error(message, e.target.error)
      reject(new Error(message))
    }
  })
}

/**
 * 通过索引和游标分页查询所有满足条件的记录，需要说明的是，在创建表的时候基于查询列创建了索引或者指定为主键，才可以使用这个函数.
 *
 * @param {string} tableName 表名
 * @param {string} indexName 索引名称
 * @param {string} indexValue 索引值
 * @param {number} page 页码
 * @param {number} pageSize 查询条数
 */
IndexedDatabase.prototype.cursorIndexByPage = function (tableName, indexName, indexValue, page, pageSize) {
  return new Promise((resolve, reject) => {
    let counter = 0 // 计数器
    let advanced = true // 是否跳过多少条查询
    let store = this.instance.transaction(tableName, 'readwrite').objectStore(tableName) // 仓库对象
    let list = []

    let request = store.index(indexName).openCursor(IDBKeyRange.only(indexValue))
    request.onsuccess = (e) => {
      let cursor = e.target.result
      if (page > 1 && advanced) {
        advanced = false
        cursor.advance((page - 1) * pageSize) // 跳过多少条
        return
      }

      if (cursor) {
        // 必须要检查
        list.push(cursor.value)
        counter++
        if (counter < pageSize) {
          cursor.continue() // 遍历了存储对象中的所有内容
          return
        }
      }

      console.log(`Finished, cursor=${tableName}, index=${indexName}:${indexValue}, page=${page}:${pageSize}, counter=${counter}`)
      resolve(list)
    }

    request.onerror = (e) => {
      const message = `Fail to cursor=${tableName}, index=${indexName}:${indexValue}, page=${page}:${pageSize}, counter=${counter}`
      console.error(message, e.target.error)
      reject(new Error(message))
    }
  })
}

/**
 * 基于唯一索引更新记录，如果唯一索引不存在，则插入一条新的记录
 *
 * @param {string} tableName 表名
 * @param {string} indexName 索引名称
 */
IndexedDatabase.prototype.updateByIndex = function (tableName, indexName, data) {
  return new Promise((resolve, reject) => {
    const objectStore = this.instance.transaction([tableName], 'readwrite').objectStore(tableName)
    let request = objectStore.index(indexName).getKey(data[indexName])
    request.onsuccess = (e) => {
      const key = e.target.result
      if (key) data.id = key
      const putRequest = objectStore.put(data)
      putRequest.onsuccess = (e) => {
        console.log(`Success to update table=${tableName} by index=${indexName}`)
        resolve(e.target.result)
      }

      putRequest.onerror = (e) => {
        const message = `Fail to put table=${tableName} record=${JSON.stringify(data)} by index=${indexName}`
        console.error(message, e.target.error)
        reject(new Error(message))
      }
    }

    request.onerror = (e) => {
      const message = `Fail to update table=${tableName} record=${JSON.stringify(data)} by index=${indexName}`
      console.error(message, e.target.error)
      reject(new Error(message))
    }
  })
}

/**
 * 基于主键查询某条记录
 *
 * @param {string} tableName 表名
 * @param {string} key 数据
 */
IndexedDatabase.prototype.getByKey = function (tableName, key) {
  return new Promise((resolve, reject) => {
    let request = this.instance.transaction([tableName], 'readwrite').objectStore(tableName).get(key)

    request.onsuccess = (e) => {
      console.log(`Success to query table=${tableName} by key=${key}`)
      resolve(e.target.result)
    }

    request.onerror = (e) => {
      const message = `Fail to query table=${tableName} by key=${key}`
      console.error(message, e.target.error)
      reject(new Error(message))
    }
  })
}

/**
 * 基于主键更新记录，如果不存在该主键，则插入一条新的记录
 * @param {string} tableName 表名
 * @param {object} data 数据
 */
IndexedDatabase.prototype.updateByKey = function (tableName, data) {
  return new Promise((resolve, reject) => {
    let request = this.instance.transaction([tableName], 'readwrite').objectStore(tableName).put(data)

    request.onsuccess = (e) => {
      console.log(`Success to update table=${tableName}`)
      resolve(e.target.result)
    }

    request.onerror = (e) => {
      const message = `Fail to update table=${tableName} record=${JSON.stringify(data)}`
      console.error(message, e.target.error)
      reject(new Error(message))
    }
  })
}

/**
 * 基于索引删除满足条件的第一条记录，需要说明的是，在建表时基于参数中的列创建了索引或者指定为主键，才可以使用这个函数.
 *
 * @param {string} tableName 表名
 * @param {string} indexName 索引列名
 * @param {object} indexValue 索引值
 *
 */
IndexedDatabase.prototype.deleteByIndex = function (tableName, indexName, indexValue) {
  return new Promise((resolve, reject) => {
    const transaction = this.instance.transaction([tableName], 'readwrite')
    const objectStore = transaction.objectStore(tableName)
    let index = objectStore.index(indexName)
    const request = index.getKey(indexValue)
    request.onsuccess = (e) => {
      const key = e.target.result
      if (key) {
        const deleteRequest = objectStore.delete(key)
        deleteRequest.onerror = (e) => {
          console.error(`Fail to delete, key=${key}, index=${indexName}, value=${indexValue} from table=${tableName}`, e.target.error)
          reject(e.target.error)
        }

        deleteRequest.onsuccess = (e) => {
          console.log(`Success to delete, key=${key}, index=${indexName}, value=${indexValue} from table=${tableName}`)
          resolve(e.target.result)
        }
      } else {
        console.log(`There is no such record, index=${indexName}, value=${indexValue} from table=${tableName}`)
        resolve(key)
      }
    }
    request.onerror = (e) => {
      const message = `Fail to get key by index=${indexName}=${indexValue} from table=${tableName}, err=${request.error}`
      console.error(message, e.target.error)
      reject(new Error(message))
    }
  })
}

/**
 * 基于索引删除满足条件的所有记录，需要说明的是，在建表时基于参数中的列创建了索引或者指定为主键，才可以使用这个函数.
 *
 * @param {string} tableName 表名
 * @param {string} indexName 索引列名
 * @param {object} indexValue 索引值
 *
 */
IndexedDatabase.prototype.deleteAllByIndex = function (tableName, indexName, indexValue) {
  return new Promise((resolve, reject) => {
    const transaction = this.instance.transaction([tableName], 'readwrite')
    const objectStore = transaction.objectStore(tableName)
    let index = objectStore.index(indexName)
    const request = index.getAllKeys(indexValue)
    request.onsuccess = (e) => {
      const keys = e.target.result
      if (keys === undefined || keys.length <= 0) {
        console.log(`There are no keys, index=${indexName}, value=${indexValue} from table=${tableName}`)
        resolve([])
        return
      }

      keys.forEach(key => {
        const deleteRequest = objectStore.delete(key)
        deleteRequest.onerror = (e) => {
          console.error(`Fail to delete all, key=${key}, index=${indexName}, value=${indexValue} from table=${tableName}`, e.target.error)
        }

        deleteRequest.onsuccess = (e) => {
          console.log(`Success to delete all, key=${key}, index=${indexName}, value=${indexValue} from table=${tableName}`)
        }
      })
      resolve(keys)
      console.log(`Success to delete keys=${JSON.stringify(keys)} by index=${indexName}, value=${indexValue} from table=${tableName}`)
    }

    request.onerror = (e) => {
      const message = `Fail to get key by index=${indexName}=${indexValue} from table=${tableName}, err=${request.error}`
      console.error(message, e.target.error)
      reject(new Error(message))
    }
  })
}

/**
 * 基于主键删除某条满足条件的记录
 *
 * @param {string} tableName 表名
 * @param {object} keyValue 主键值
 */
IndexedDatabase.prototype.deleteByKey = function (tableName, keyValue) {
  return new Promise((resolve, reject) => {
    let request = this.instance.transaction([tableName], 'readwrite').objectStore(tableName).delete(keyValue)
    request.onsuccess = (e) => {
      console.log(`Success to delete table=${tableName} record=${keyValue}`)
      resolve(e.target.result)
    }

    request.onerror = (e) => {
      const message = `Fail to delete table=${tableName} record=${keyValue}`
      console.error(message, e.target.error)
      reject(new Error(message))
    }
  })
}

/**
 * 基于索引和游标遍历删除满足条件的记录，需要说明的是，在建表时基于参数中的列创建了索引或者指定为主键，才可以使用这个函数.
 *
 * @param {string} tableName 表名
 * @param {string} indexName 索引列名
 * @param {object} indexValue 索引值
 */
IndexedDatabase.prototype.deleteByCursorIndex = function (tableName, indexName, indexValue, callback) {
  return new Promise((resolve, reject) => {
    let store = this.instance.transaction(tableName, 'readwrite').objectStore(tableName)
    let request = store.index(indexName).openCursor(IDBKeyRange.only(indexValue))
    request.onsuccess = (e) => {
      let cursor = e.target.result
      let deleteRequest
      if (cursor === undefined) {
        resolve()
        return
      }

      let data = cursor.value
      // 请求删除当前项
      deleteRequest = cursor.delete()
      deleteRequest.onsuccess = (e) => {
        console.log(`success to delete table=${tableName} record=${data} by cursor`, e)
        callback(data)
      }
      deleteRequest.onerror = (e) => {
        console.log(`Fail to delete table=${tableName} record=${JSON.stringify(data)} by cursor`, e)
      }
      cursor.continue()
    }

    request.onerror = (e) => {
      const message = `Fail to delete by index=${tableName}:${indexName}:${indexValue}`
      console.log(message, e.target.error)
      reject(new Error(message))
    }
  })
}

/**
 * 删除数据库
 */
IndexedDatabase.prototype.deleteDatabase = function () {
  return new Promise((resolve, reject) => {
    console.log(`Delete dbName=${this.dbName}`)
    let request = this.indexedDB.deleteDatabase(this.dbName)
    request.onerror = (e) => {
      const message = `Fail to delete database=${this.dbName}`
      console.error(message, e.target.error)
      reject(new Error(message))
    }

    request.onsuccess = (e) => {
      console.log(`Success to delete database=${this.dbName}`)
      resolve(e.target.result)
    }
  })
}

/**
 * 关闭数据库
 */
IndexedDatabase.prototype.close = function () {
  if (this.instance !== undefined) {
    this.instance.close()
    this.instance = undefined
  }

  console.log(`Success to close db=${this.dbName}`)
}