export function ChunkReader(file, index, chunkSize) {
  this.file = file
  this.chunkSize = chunkSize
  this.index = index
}

ChunkReader.prototype.read = function () {
  return new Promise((resolve, reject) => {
    let start = this.index * this.chunkSize
    let end = Math.min(this.file.size, start + this.chunkSize)
    const blob = this.file.slice(start, end)
    console.log(`Try to read the index=${this.index} chunk, size=${end - start}`)
    const fileReader = new FileReader()

    // 箭头函数不会创建自己的`this`值，而是从外部函数继承其上下文
    fileReader.onload = (e) => resolve(new Uint8Array(e.target.result))
    fileReader.onerror = (e) => reject(e.target.error)
    fileReader.readAsArrayBuffer(blob)
  })
}