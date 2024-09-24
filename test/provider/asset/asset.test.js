import {Authenticate} from '../../../src/identity/authenticate.js'
import {AssetProvider} from '../../../src/provider/asset/asset.js'
import {Uploader} from '../../../src/provider/asset/uploader.js'
import {Downloader} from '../../../src/provider/asset/downloader.js'

const identity = {
  blockAddress: {
    mnemonic: {
      phrase: 'limb potato can before risk miracle radio voice wheat silly column lend stomach exile guess tornado neck hen',
      path: 'm/44\'/60\'/0\'/0/0',
      locale: 'en'
    },
    privateKey: '0x1b8b419505748c88071b8d28caafa4a74bcdc4a540542e7b4514b13a3f35c96c',
    identifier: 'did:ethr:0x7e4:0x0396be3542029111627e1d08c65a740fcda7b8a341a618ebfe92bace61c0fd5506',
    publicKey: '0x0396be3542029111627e1d08c65a740fcda7b8a341a618ebfe92bace61c0fd5506',
    address: '0x6256583430f59D8d526a0a694e7d37ea1956d0AC',
  },
  extend: {
    securityConfig: {
      algorithm: {
        iv: 'Go7wkZBxhF2r5ThC', name: 'CIPHER_TYPE_AES_GCM_256',
      }
    }
  }
}

const provider = {proxy: 'http://localhost:8641'}


describe('Asset', () => {
  it('search', async () => {
    const assetProvider = new AssetProvider(new Authenticate(identity), provider)
    const assets = await assetProvider.search('DIGITAL_FORMAT_OTHER', 1, 10)
    console.log(`Success to search assets=${assets.length}`)
    assets.forEach(asset => {
      console.log(`asset=${asset.getName()}`)
    })
  })

  it('upload', async () => {
    const assetProvider = new AssetProvider(new Authenticate(identity), provider)
    const assetId = 'fbfe2701-3fc9-4e88-a1b5-e660d1bef159'
    const name = 'test'
    const blob = new Blob(['hello, yeying community!'], {type: 'text/plain'})
    const file = new File([blob], name, {type: 'text/plain'})
    const uploader = new Uploader(assetProvider, assetId, file, true)
    const asset = await uploader.upload('ASSET_ACTION_APPEND')
    console.log(`Success to put a asset, id=${assetId}, hash=${asset.getHash()}, mergedHash=${asset.getMergedhash()}`)
  })

  it('download', async () => {
    const assetProvider = new AssetProvider(new Authenticate(identity), provider)
    const assetId = 'fbfe2701-3fc9-4e88-a1b5-e660d1bef159'
    const downloader = new Downloader(assetProvider, assetId)
    const blob = await downloader.download()
    console.log(`Success to download assetId=${assetId}, blob=${blob}`)
  })

  it('del', async () => {
    const assetProvider = new AssetProvider(new Authenticate(identity), provider)
    const assetId ='fbfe2701-3fc9-4e88-a1b5-e660d1bef159'
    const version = 0
    await assetProvider.remove(assetId, version)
    console.log(`Success to del asset=${assetId}, version=${version}`)
  })
})