import {IdentityState} from '../../state/identity.js'
import {ApplicationState} from '../../state/application.js'
import {AccountManager} from '../../account/manager.js'

export class NodeApplication {
  constructor(identity) {
    this.accountManager = new AccountManager()
    this.identityState = new IdentityState(identity)
    this.applicationState = new ApplicationState(identity, )
  }

  initialize() {
    // find store service and load the state
  }

  getAccountManager() {
    return this.accountManager
  }

  getApplicationState() {
    return this.applicationState.current()
  }

  getIdentityState() {
    return this.identityState.current()
  }
}