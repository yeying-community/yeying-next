class NodeAdaptor {
  constructor() {
    this.domain = window.location.protocol + '//' + window.location.host
    this.nodeUrl = this.domain + '/node'
    console.log(`domain=${this.domain}, node url=${this.nodeUrl}`)
  }

  getNodeMetadata() {
    return new Promise(async (resolve) => {
      try {
        const response = await fetch(this.nodeUrl)
        const nodeMetadata = await response.json()
        nodeMetadata.extend = JSON.parse(nodeMetadata.extend)
        resolve(nodeMetadata)
      } catch (err) {
        console.error(`Fail to get current node metadata from url=${this.nodeUrl}`, err)
        resolve(undefined)
      }
    })
  }
}

export const nodeAdaptor = new NodeAdaptor()