import { AssetMetadata, AssetMetadataSchema } from '../../yeying/api/asset/asset_pb'
import { toBinary } from '@bufbuild/protobuf'
import { DataTampering } from '../../common/error'
import { Authenticate } from '../common/authenticate'
import { ConfigMetadata, ConfigMetadataSchema } from '../../yeying/api/config/config_pb'
import { NamespaceMetadata, NamespaceMetadataSchema } from '../../yeying/api/asset/namespace_pb'
import { BlockMetadata, BlockMetadataSchema } from '../../yeying/api/asset/block_pb'
import {UserMetadata, UserMetadataSchema, UserState, UserStateSchema} from "../../yeying/api/user/user_pb";
import {InvitationMetadata, InvitationMetadataSchema} from "../../yeying/api/invitation/invitation_pb";

/**
 * 对资产元数据进行签名，并更新元数据的`signature`字段。
 *
 * @param authenticate 用于签名的认证对象
 * @param asset 资产元数据
 *
 * @returns 无返回
 *
 */
export async function signAssetMetadata(authenticate: Authenticate, asset: AssetMetadata) {
    asset.signature = ''
    asset.signature = await authenticate.sign(toBinary(AssetMetadataSchema, asset))
}

/**
 * 验证资产元数据的签名是否有效
 *
 * @param authenticate 用于验签的认证对象
 * @param asset 资产元数据
 *
 * @returns 无返回
 *
 * @throws DataTampering 元数据被篡改
 *
 */
export async function verifyAssetMetadata(authenticate: Authenticate, asset?: AssetMetadata) {
    if (asset === undefined) {
        throw new DataTampering('empty asset.')
    }

    const signature = asset.signature
    try {
        asset.signature = ''
        if (!(await authenticate.verify(asset.owner, toBinary(AssetMetadataSchema, asset), signature))) {
            throw new DataTampering('invalid asset.')
        }
    } finally {
        asset.signature = signature
    }
}

/**
 * 对配置元数据进行签名，并更新元数据的`signature`字段。
 *
 * @param authenticate 用于验签的认证对象
 * @param config 配置元数据
 *
 * @returns 无返回
 *
 */
export async function signConfigMetadata(authenticate: Authenticate, config: ConfigMetadata) {
    config.signature = ''
    config.signature = await authenticate.sign(toBinary(ConfigMetadataSchema, config))
}

/**
 * 验证配置元数据的签名是否有效
 *
 * @param authenticate 用于验签的认证对象
 * @param config 配置元数据
 *
 * @returns 无返回
 *
 * @throws DataTampering 元数据被篡改
 *
 */
export async function verifyConfigMetadata(authenticate: Authenticate, config?: ConfigMetadata) {
    if (config === undefined) {
        throw new DataTampering('empty config')
    }

    const signature = config.signature
    try {
        config.signature = ''
        if (!(await authenticate.verify(config.owner, toBinary(ConfigMetadataSchema, config), signature))) {
            throw new DataTampering('invalid config')
        }
    } finally {
        config.signature = signature
    }
}

/**
 * 对命名空间元数据进行签名，并更新元数据的`signature`字段。
 *
 * @param authenticate 用于验签的认证对象
 * @param namespace 命名空间元数据
 *
 * @returns 无返回
 *
 */
export async function signNamespaceMetadata(authenticate: Authenticate, namespace: NamespaceMetadata) {
    namespace.signature = ''
    namespace.signature = await authenticate.sign(toBinary(NamespaceMetadataSchema, namespace))
}

/**
 * 验证命名空间元数据的签名是否有效
 *
 * @param authenticate 用于验签的认证对象
 * @param namespace 命名空间元数据
 *
 * @returns 无返回
 *
 * @throws DataTampering 元数据被篡改
 *
 */
export async function verifyNamespaceMetadata(authenticate: Authenticate, namespace?: NamespaceMetadata) {
    if (namespace === undefined) {
        throw new DataTampering('empty namespace')
    }

    const signature = namespace.signature
    try {
        namespace.signature = ''
        if (!(await authenticate.verify(namespace.owner, toBinary(NamespaceMetadataSchema, namespace), signature))) {
            throw new DataTampering('invalid namespace')
        }
    } finally {
        namespace.signature = signature
    }
}

/**
 * 对资产块元数据进行签名，并更新元数据的`signature`字段。
 *
 * @param authenticate 用于验签的认证对象
 * @param namespace 命名空间元数据
 *
 * @returns 无返回
 */
export async function signBlockMetadata(authenticate: Authenticate, block: BlockMetadata) {
    block.signature = await authenticate.sign(toBinary(BlockMetadataSchema, block))
}

/**
 * 验证块元数据的签名是否有效
 *
 * @param authenticate 用于验签的认证对象
 * @param block 资产块元信息
 *
 * @returns 无返回
 *
 * @throws DataTampering 元数据被篡改
 *
 */
export async function verifyBlockMetadata(authenticate: Authenticate, block?: BlockMetadata) {
    if (block === undefined) {
        throw new DataTampering('empty block')
    }

    const signature = block.signature
    try {
        block.signature = ''
        if (!(await authenticate.verify(block.owner, toBinary(BlockMetadataSchema, block), signature))) {
            throw new DataTampering('invalid block')
        }
    } finally {
        block.signature = signature
    }
}

/**
 * 对用户元数据进行签名，并更新元数据的`signature`字段。
 *
 * @param authenticate 用于验签的认证对象
 * @param user 用户元数据
 *
 * @returns 无返回
 */
export async function signUserMetadata(authenticate: Authenticate, user: UserMetadata) {
    user.signature = ''
    user.signature = await authenticate.sign(toBinary(UserMetadataSchema, user))
}

/**
 * 验证用户元数据的签名是否有效
 *
 * @param authenticate 用于验签的认证对象
 * @param user 用户元数据对象
 *
 * @returns 无返回
 *
 * @throws DataTampering 元数据被篡改
 */
export async function verifyUserMetadata(authenticate: Authenticate, user?: UserMetadata) {
    if (user === undefined) {
        throw new DataTampering('empty user.')
    }

    const signature = user.signature
    try {
        user.signature = ''
        if (! await authenticate.verify(user.did, toBinary(UserMetadataSchema, user), signature)) {
            throw new DataTampering('invalid user.')
        }
    } finally {
        user.signature = signature
    }
}


/**
 * 验证用户状态元数据的签名是否有效
 *
 * @param authenticate 用于验签的认证对象
 * @param user 用户状态元数据对象
 *
 * @returns 无返回
 *
 * @throws DataTampering 元数据被篡改
 */
export async function verifyUserState(authenticate: Authenticate, state?: UserState) {
    if (state === undefined) {
        throw new DataTampering('empty user state.')
    }

    const signature = state.signature
    try {
        state.signature = ''
        if (! await authenticate.verify(state.owner, toBinary(UserStateSchema, state), signature)) {
            throw new DataTampering('invalid user state.')
        }
    } finally {
        state.signature = signature
    }
}

/**
 * 对邀请码元数据进行签名，并更新元数据的`signature`字段。
 *
 * @param authenticate 用于验签的认证对象
 * @param user 邀请码元数据
 *
 * @returns 无返回
 */
export async function signInvitationMetadata(authenticate: Authenticate, invitation: InvitationMetadata) {
    invitation.signature = ''
    invitation.signature = await authenticate.sign(toBinary(InvitationMetadataSchema, invitation))
}

/**
 * 验证邀请码元数据的签名是否有效
 *
 * @param authenticate 用于验签的认证对象
 * @param invitation 邀请码元数据对象
 *
 * @returns 无返回
 *
 * @throws DataTampering 元数据被篡改
 */
export async function verifyInvitationMetadata(authenticate: Authenticate, invitation?: InvitationMetadata) {
    if (invitation === undefined) {
        throw new DataTampering('empty invitation.')
    }

    const signature = invitation.signature
    try {
        invitation.signature = ''
        if (! await authenticate.verify(invitation.inviter, toBinary(InvitationMetadataSchema, invitation), signature)) {
            throw new DataTampering('invalid invitation.')
        }
    } finally {
        invitation.signature = signature
    }
}