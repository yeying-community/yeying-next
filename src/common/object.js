/**
 * 通用格式化函数，将多个基本类型拼接为一个字符串。
 * @param  {...any} args - 多个基本类型的参数。
 * @returns {Uint8Array} - 拼接后的字符串。
 */
export function concat(...args) {
  // 使用数组的 join 方法将参数拼接为字符串
  return new TextEncoder().encode(args.join(''))
}

// 深度克隆
export function cloneObject(object) {
  return structuredClone(object)
}

// 深度合并
export function deepMerge(oldObject, newObject) {
  // 遍历源对象中的每一个键
  for (const key in newObject) {
    // 如果源对象的值是对象，并且目标对象中对应的键也是对象，则递归合并
    if (newObject[key] && typeof newObject[key] === 'object') {
      if (!oldObject[key] || typeof oldObject[key] !== 'object') {
        oldObject[key] = {}
      }
      deepMerge(oldObject[key], newObject[key])
    } else {
      // 如果源对象中的值不是对象，或目标对象中对应的键不是对象，则用源对象中的值覆盖目标对象中的值
      oldObject[key] = newObject[key]
    }
  }

  // 返回合并后的目标对象
  return oldObject
}

/**
 * 将多个 Uint8Array 拼接成一个大的 Uint8Array
 * @param {Uint8Array[]} arrays - 多个 Uint8Array 的数组
 * @returns {Uint8Array} 拼接后的 Uint8Array
 */
export function composite(...args) {
  // 计算总长度
  const totalLength = args.reduce((acc, arr) => acc + arr.length, 0)

  // 记录当前的偏移量
  const result = new Uint8Array(totalLength)
  let offset = 0
  for (const arg of args) {
    result.set(arg, offset)
    offset += arg.length
  }

  return result
}

// 按照key的字母顺序排序，并且剔除value为null或者undefined的key
export function sortKeys(obj) {
  if (Array.isArray(obj)) {
    return obj.map(sortKeys)
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).sort().reduce((result, key) => {
      result[key] = sortKeys(obj[key])
      return result
    }, {})
  } else if (obj === null) {
    return undefined
  }
  return obj
}

export function convertBlobToString(blob) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = (event) => resolve(event.target.result)
    fileReader.onerror = reject
    fileReader.readAsText(blob)
  })
}

export function updateNestedObject(target, updates) {
  for (const key in updates) {
    if (updates.hasOwnProperty(key)) {
      if (typeof updates[key] === 'object' && updates[key] !== null) {
        if (!target.hasOwnProperty(key) || typeof target[key] !== 'object' || target[key] === null) {
          target[key] = {}
        }
        updateNestedObject(target[key], updates[key])
      } else {
        target[key] = updates[key]
      }
    }
  }
}