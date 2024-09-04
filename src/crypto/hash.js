
/**
 * 计算消息的哈希值
 *
 * @param {Uint8Array|ArrayBuffer} m
 * @returns {Promise<ArrayBuffer>}
 */
export function computeHash(m) {
  return crypto.subtle.digest('SHA-256', m)
}
