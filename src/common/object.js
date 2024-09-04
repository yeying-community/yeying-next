/**
 * 通用格式化函数，将多个基本类型拼接为一个字符串。
 * @param  {...any} args - 多个基本类型的参数。
 * @returns {Uint8Array} - 拼接后的字符串。
 */
export function concat(...args) {
  // 使用数组的 join 方法将参数拼接为字符串
  return new TextEncoder().encode(args.join(''))
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