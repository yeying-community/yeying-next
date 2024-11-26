import {convertApiCodeFrom} from '../tool/code.js'
import code_pkg from '../yeying/api/common/code_pb.cjs'
import {UserProvider} from './user/user.js'
import {Authenticate} from '../identity/authenticate.js'
import {IdentityProvider} from './identity/identity.js'
import {ApplicationProvider} from './application/application.js'
import {CertificateProvider} from './certificate/certificate.js'
import {InvitationProvider} from './invitation/invitation.js'
import {AssetProvider} from './asset/asset.js'
import {ServiceProvider} from './service/service.js'
import {IdentityCipher} from '../identity/cipher.js'
import {convertCryptoAlgorithmFromIdentity, deriveRawKeyFromBlockAddress} from '../identity/model.js'

const {ApiCodeEnum} = code_pkg

export class ProviderFactory {
  constructor(identity, provider) {
    this.identity = identity
    this.provider = provider
  }

  get(code) {
    code = typeof code === 'string' ? convertApiCodeFrom(code) : code
    const blockAddress = this.identity.blockAddress

    switch (code) {
      case ApiCodeEnum.API_CODE_USER:
        return new UserProvider(new Authenticate(blockAddress), this.provider)
      case ApiCodeEnum.API_CODE_INVITATION:
        return new InvitationProvider(new Authenticate(blockAddress), this.provider)
      case ApiCodeEnum.API_CODE_APPLICATION:
        return new ApplicationProvider(new Authenticate(blockAddress), this.provider)
      case ApiCodeEnum.API_CODE_CERTIFICATE:
        return new CertificateProvider(new Authenticate(blockAddress), this.provider)
      case ApiCodeEnum.API_CODE_IDENTITY:
        return new IdentityProvider(new Authenticate(blockAddress), this.provider)
      case ApiCodeEnum.API_CODE_ASSET:
        const algorithm = convertCryptoAlgorithmFromIdentity(this.identity)
        const rawKey = deriveRawKeyFromBlockAddress(blockAddress)
        return new AssetProvider(new Authenticate(blockAddress), this.provider, new IdentityCipher(algorithm, rawKey))
      case ApiCodeEnum.API_CODE_SERVICE:
        return new ServiceProvider(new Authenticate(blockAddress), this.provider)
      default:
        return new Error(`Not supported api code=${code}`)
    }
  }
}