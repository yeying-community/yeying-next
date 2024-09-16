import {Authenticate} from '../../../src/identity/authenticate.js'
import {ApplicationProvider} from '../../../src/provider/application/application.js'
import {getAppIdentityCode} from '../../../src/common/common.js'

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

const provider = {
  metadata: {extend: {proxy: 'http://localhost:8441'}},
}

describe('Application', () => {
  it('search', async () => {
    const applicationProvider = new ApplicationProvider(new Authenticate(identity), provider)
    const applications = await applicationProvider.search(getAppIdentityCode(), 1, 10)
    console.log(`Success to search application with owner=${identity.blockAddress.identifier}`)
    applications.map(i => console.log(`application, name=${i.getName()}, code=${i.getCode()}`))
  })
})