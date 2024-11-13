import invitation_pkg from '../../yeying/api/invitation/invitation_pb.cjs'

const {InvitationSceneEnum} = invitation_pkg

export function fromStrInvitationScene(str) {
  if (str === undefined) {
    return undefined
  }
  const value = InvitationSceneEnum[str.toUpperCase()]
  return value === InvitationSceneEnum.INVITATION_SCENE_UNKNOWN ? undefined : value
}

export function getRegisterScene() {
  return InvitationSceneEnum.INVITATION_SCENE_REGISTER
}

export function froInvitationSceneToStr(invitationCode) {
  if (invitationCode === undefined || invitationCode === InvitationSceneEnum.INVITATION_SCENE_UNKNOWN) {
    return undefined
  }

  return Object.keys(InvitationSceneEnum).find(s => InvitationSceneEnum[s] === invitationCode)
}