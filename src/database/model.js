export function IndexColumn(name, keyPath, unique) {
  this.name = name
  this.keyPath = keyPath
  this.unique = unique
}

export function TableSchema(name, keyPath, autoIncrement, indexColumns) {
  this.name = name
  this.keyPath = keyPath
  this.autoIncrement = autoIncrement
  this.indexColumns = indexColumns
}

export function getShareDbName() {
  return 'db-common'
}