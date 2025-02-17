import { AuthenticateTypeEnum } from '../../yeying/api/common/code_pb'
import { BlockAddress } from '@yeying-community/yeying-web3'

/**
 * 提供商选项接口，包含代理配置
 */
export interface ProviderOption {
    /**
     * 代理服务器的 URL 地址
     */
    proxy: string

    /**
     * 区块链地址
     */
    blockAddress: BlockAddress
}

/**
 * 将字符串类型的认证类型转换为对应的枚举值
 * @param type - 字符串类型的认证类型
 * @returns 转换后的 AuthenticateTypeEnum
 * @example
 * ```ts
 * const authType = convertAuthenticateTypeFrom('AUTHENTICATE_TYPE_CERT')
 * ```
 */
export function convertAuthenticateTypeFrom(type: string) {
    const v = AuthenticateTypeEnum[type as keyof typeof AuthenticateTypeEnum]
    return v !== undefined ? v : AuthenticateTypeEnum.AUTHENTICATE_TYPE_UNKNOWN
}

/**
 * 将认证类型枚举值转换为字符串
 * @param type - 认证类型枚举值
 * @returns 转换后的 AuthenticateTypeEnum
 * @example
 * ```ts
 * const authenticateString = convertAuthenticateTypeTo(AuthenticateTypeEnum.AUTHENTICATE_TYPE_CERT);
 * ```
 */
export function convertAuthenticateTypeTo(type: AuthenticateTypeEnum) {
    return AuthenticateTypeEnum[type] || AuthenticateTypeEnum[AuthenticateTypeEnum.AUTHENTICATE_TYPE_UNKNOWN]
}
