import { UserProvider } from './provider/user/user'
import { BulletinProvider } from './provider/bulletin/bulletin'
import { SupportProvider } from './provider/support/support'
import { AccountManager } from './account/manager'

export { IdentityCodeEnum, NetworkTypeEnum } from './yeying/api/common/code_pb'

export const Manager = {
    AccountManager
}

export const Provider = {
    UserProvider,
    BulletinProvider,
    SupportProvider
}
