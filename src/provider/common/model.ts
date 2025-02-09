import { AuthenticateTypeEnum } from '../../yeying/api/common/code_pb'
import { BlockAddress } from '@yeying-community/yeying-web3'

/**
 * 提供商选项接口，包含代理配置。
 *
 * @interface
 * @example
 * ```ts
 * const providerOption: ProviderOption = { proxy: 'http://example.com' };
 * ```
 */
export interface ProviderOption {
    /**
     * 代理服务器的 URL 地址。
     *
     * @example
     * 'http://example.com'
     */
    proxy: string

    /**
     * 区块链地址。
     */
    blockAddress: BlockAddress
}

/**
 * 将字符串类型的认证类型转换为对应的枚举值。
 *
 * @param type - 字符串类型的认证类型。
 * @returns 返回对应的 `AuthenticateTypeEnum` 枚举值，如果字符串无法转换，则返回 `AuthenticateTypeEnum.AUTHENTICATE_TYPE_UNKNOWN`。
 * @example
 * ```ts
 * const authenticateType = convertAuthenticateTypeFrom('AUTHENTICATE_TYPE_CERT');
 * console.log(authenticateType); // 输出对应的 AuthenticateTypeEnum 枚举值
 * ```
 */
export function convertAuthenticateTypeFrom(type: string) {
    const v = AuthenticateTypeEnum[type as keyof typeof AuthenticateTypeEnum]
    return v !== undefined ? v : AuthenticateTypeEnum.AUTHENTICATE_TYPE_UNKNOWN
}

/**
 * 将认证类型枚举值转换为字符串。
 *
 * @param type - 认证类型枚举值。
 * @returns 返回对应的字符串类型认证值，如果传入值无效，则返回 `AuthenticateTypeEnum.AUTHENTICATE_TYPE_UNKNOWN`。
 * @example
 * ```ts
 * const authenticateString = convertAuthenticateTypeTo(AuthenticateTypeEnum.AUTHENTICATE_TYPE_CERT);
 * console.log(authenticateString); // 输出字符串 'AUTHENTICATE_TYPE_CERT'
 * ```
 */
export function convertAuthenticateTypeTo(type: AuthenticateTypeEnum) {
    return AuthenticateTypeEnum[type] || AuthenticateTypeEnum[AuthenticateTypeEnum.AUTHENTICATE_TYPE_UNKNOWN]
}
