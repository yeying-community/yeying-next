import user_pkg from '../../yeying/api/user/user_pb.cjs'

const {UserRoleEnum, UserStatusEnum} = user_pkg

export class User {
  constructor(name, did, status, role, extend, checkpoint, created) {
    this.name = name
    this.did = did
    this.status = status
    this.role = role
    this.extend = extend
    this.checkpoint = checkpoint
    this.created = created
  }
}

export function convertUserTo(u) {
  if (u === undefined) {
    return undefined
  }

  return new User(u.getName(), u.getDid(), convertUserStatusTo(u.getStatus()), convertUserRoleTo(u.getRole()), u.getExtend(), u.getCheckpoint(), u.getCreated(),)
}

export function convertUserRoleFrom(str) {
  if (str === undefined) {
    return undefined
  }
  const value = UserRoleEnum[str.toUpperCase()]
  return value === UserRoleEnum.USER_ROLE_UNKNOWN ? undefined : value
}

export function convertUserRoleTo(role) {
  if (role === undefined || role === UserRoleEnum.USER_ROLE_UNKNOWN) {
    return undefined
  }

  return Object.keys(UserRoleEnum).find(s => UserRoleEnum[s] === role)
}

export function convertUserStatusTo(status) {
  if (status === undefined || status === UserStatusEnum.USER_STATUS_UNKNOWN) {
    return undefined
  }

  return Object.keys(UserStatusEnum).find(s => UserStatusEnum[s] === status)
}

export function convertUserStatusFrom(str) {
  if (str === undefined) {
    return undefined
  }

  const value = UserStatusEnum[str.toUpperCase()]
  return value === UserStatusEnum.USER_STATUS_UNKNOWN ? undefined : value
}
