import {AuthenticateTypeEnum} from "../../yeying/api/common/code_pb";

export interface Provider {
    proxy: string
}

export function convertAuthenticateTypeFrom(type: string) {
    const v = AuthenticateTypeEnum[type as keyof typeof AuthenticateTypeEnum];
    return v !== undefined ? v : AuthenticateTypeEnum.AUTHENTICATE_TYPE_UNKNOWN
}

export function convertAuthenticateTypeTo(type: AuthenticateTypeEnum) {
    return AuthenticateTypeEnum[type] || AuthenticateTypeEnum[AuthenticateTypeEnum.AUTHENTICATE_TYPE_UNKNOWN]
}