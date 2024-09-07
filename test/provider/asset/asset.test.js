import {UserProvider} from '../../../src/provider/user/user.js'
import {Authenticate} from '../../../src/authenticate/authenticate.js'
import {AssetProvider} from '../../../src/provider/asset/asset.js'

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
  }
}

const provider = {extend: {proxy: 'http://localhost:8541'}}


describe('User', () => {
  it('add', async () => {
    const assetProvider = new AssetProvider(new Authenticate(identity), provider)
    await assetProvider.search('test1', '13584001111', 'yeying.community@gmail.com')
    console.log(`Success to add new user=${identity.blockAddress.identifier}`)
  })

  it('get', async () => {
    const userProvider = new UserProvider(new Authenticate(identity), provider)
    const user = await userProvider.get(identity.blockAddress.identifier)
    console.log(`Success to get user=${JSON.stringify(user)}`)
  })

  it('mod', async () => {
    const userProvider = new UserProvider(new Authenticate(identity), provider)
    await userProvider.mod('test2')
    console.log(`Success to mod user=${identity.blockAddress.identifier}`)
  })

  it('del', async () => {
    const userProvider = new UserProvider(new Authenticate(identity), provider)
    await userProvider.del(identity.blockAddress.identifier)
    console.log(`Success to del user=${identity.blockAddress.identifier}`)
  })
})