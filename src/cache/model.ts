export interface Index {
    // 索引名称
    name: string
    // 列名
    keyPath: string
    // 是否唯一
    unique: boolean
}

export interface Table {
    // 表名
    name: string
    // 主键
    key?: string
    // 主键是否自增
    autoIncrement?: boolean
    // 索引列
    indexes: Index[]
}