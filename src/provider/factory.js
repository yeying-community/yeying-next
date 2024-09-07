import {convertApiCodeFrom} from '../common/common.js'
import code_pkg from '../yeying/api/common/code_pb.cjs'
import {UserProvider} from './user/user.js'
import {Authenticate} from '../authenticate/authenticate.js'
import {IdentityProvider} from './identity/identity.js'
import {ApplicationProvider} from './application/application.js'
import {CertificateProvider} from './certificate/certificate.js'
import {InvitationProvider} from './invitation/invitation.js'

const {ApiCodeEnum} = code_pkg

export class ProviderFactory {
  constructor(identity, provider) {
    this.identity = identity
    this.provider = provider
  }

  get(apiCode) {
    const code = convertApiCodeFrom(apiCode)
    switch (code) {
      case ApiCodeEnum.API_CODE_USER:
        return new UserProvider(new Authenticate(this.identity), this.provider)
      case ApiCodeEnum.API_CODE_INVITATION:
        return new InvitationProvider(new Authenticate(this.identity), this.provider)
      case ApiCodeEnum.API_CODE_APPLICATION:
        return new ApplicationProvider(new Authenticate(this.identity), this.provider)
      case ApiCodeEnum.API_CODE_CERTIFICATE:
        return new CertificateProvider(new Authenticate(this.identity), this.provider)
      case ApiCodeEnum.API_CODE_IDENTITY:
        return new IdentityProvider(new Authenticate(this.identity), this.provider)
      default:
        return new Error(`Not supported api code=${apiCode}`)
    }
  }
}