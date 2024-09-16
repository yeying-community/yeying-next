export class ChunkReceiver {
  constructor(provider, identityCipher) {
    this.provider = provider
    this.identityCipher = identityCipher
  }

  recv(assetId, version, index, encrypted) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await this.provider.get(assetId, version, index)
        resolve(encrypted ? await this.identityCipher.decrypt(data, undefined, r => new Uint8Array(r)) : data)
      } catch (e) {
        console.error('Fail to recv chunk', e)
        reject(e)
      }
    })
  }
}

export class Downloader {
  constructor(provider, assetId, version = undefined, receiver = undefined) {
    this.provider = provider
    this.assetId = assetId
    this.version = version
    this.receiver = receiver === undefined ? new ChunkReceiver(provider, provider.getIdentityCipher()) : receiver
    this.chunkBlobs = undefined
  }

  download() {
    return new Promise(async (resolve, reject) => {
      try {
        if (this.version === undefined) {
          const assets = await this.provider.version(this.assetId, 1, 1)
          this.version = assets.length > 0 ? assets[0].version : 0
        }

        const asset = await this.provider.detail(this.assetId, this.version)
        console.log(`Try to download asset=${asset.getHash()} chunks`)
        this.chunkBlobs = new Array(asset.getTotal()).fill(undefined)
        const downloadChunk = (index) => {
          this.receiver.recv(this.assetId, this.version, index).then(data => {
            this.chunkBlobs[index] = new Blob([data], {type: 'application/octet-stream'})
            if (index === this.chunkBlobs.length - 1) {
              resolve(new Blob(this.chunkBlobs, {type: 'application/octet-stream'}))
            } else {
              downloadChunk(index + 1)
            }
          }).catch(e => reject(e))
        }
        downloadChunk(0)
      } catch (e) {
        console.log(`Fail to get asset detail with hash=${hash}`, e)
        return reject(e)
      }
    })
  }
}