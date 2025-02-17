/**
 * 网络错误，表示与网络相关的异常情况。
 */
export class NetworkError extends Error {
    /**
     * 构造函数。
     * @param message - 错误消息。
     * @param options - 错误选项。
     */
    constructor(message?: string, options?: ErrorOptions) {
        super(message, options);
    }
}

/**
 * 签名错误，表示签名相关操作失败。
 */
export class SignError extends Error {
    /**
     * 构造函数。
     * @param message - 错误消息。
     * @param options - 错误选项。
     */
    constructor(message?: string, options?: ErrorOptions) {
        super(message, options);
    }
}

/**
 * 服务不可用错误，表示服务当前无法使用。
 */
export class ServiceUnavailable extends Error {
    /**
     * 构造函数。
     * @param message - 错误消息。
     * @param options - 错误选项。
     */
    constructor(message: string, options: ErrorOptions) {
        super(message, options);
    }
}

/**
 * 不可信错误，表示操作涉及不可信的实体或数据。
 */
export class NotTrust extends Error {
    /**
     * 构造函数。
     * @param message - 错误消息。
     * @param options - 错误选项。
     */
    constructor(message: string, options: ErrorOptions) {
        super(message, options);
    }
}

/**
 * 不支持错误，表示操作或功能不被支持。
 */
export class NotSupported extends Error {
    /**
     * 构造函数。
     * @param message - 错误消息。
     * @param options - 错误选项。
     */
    constructor(message: string, options: ErrorOptions) {
        super(message, options);
    }
}

/**
 * 资源正在使用错误，表示目标资源正在被使用。
 */
export class ResourceUsing extends Error {
    /**
     * 构造函数。
     * @param message - 错误消息。
     * @param options - 错误选项。
     */
    constructor(message: string, options: ErrorOptions) {
        super(message, options);
    }
}

/**
 * 已存在错误，表示目标实体或资源已存在。
 */
export class AlreadyExist extends Error {
    /**
     * 构造函数。
     * @param message - 错误消息。
     * @param options - 错误选项。
     */
    constructor(message: string, options?: ErrorOptions) {
        super(message, options);
    }
}

/**
 * 无效状态错误，表示操作涉及无效的状态。
 */
export class InvalidStatus extends Error {
    /**
     * 构造函数。
     * @param message - 错误消息。
     * @param options - 错误选项。
     */
    constructor(message: string, options: ErrorOptions) {
        super(message, options);
    }
}

/**
 * 无效参数错误，表示传入的参数无效。
 */
export class InvalidArgument extends Error {
    /**
     * 构造函数。
     * @param message - 错误消息。
     * @param options - 错误选项。
     */
    constructor(message: string, options?: ErrorOptions) {
        super(message, options);
    }
}

/**
 * 未找到错误，表示目标实体或资源未找到。
 */
export class NotFound extends Error {
    /**
     * 构造函数。
     * @param message - 错误消息。
     * @param options - 错误选项。
     */
    constructor(message?: string, options?: ErrorOptions) {
        super(message, options);
    }
}

/**
 * 未知错误，表示无法识别的错误情况。
 */
export class UnknownError extends Error {
    /**
     * 构造函数。
     * @param message - 错误消息。
     * @param options - 错误选项。
     */
    constructor(message: string, options?: ErrorOptions) {
        super(message, options);
    }
}

/**
 * 已取消错误，表示操作已被取消。
 */
export class Cancelled extends Error {
    /**
     * 构造函数。
     * @param message - 错误消息。
     * @param options - 错误选项。
     */
    constructor(message: string, options: ErrorOptions) {
        super(message, options);
    }
}

/**
 * 无效密码错误，表示提供的密码无效。
 */
export class InvalidPassword extends Error {
    /**
     * 构造函数。
     * @param message - 错误消息。
     * @param options - 错误选项。
     */
    constructor(message?: string, options?: ErrorOptions) {
        super(message, options);
    }
}

/**
 * 数据篡改错误，表示数据被篡改。
 */
export class DataTampering extends Error {
    /**
     * 构造函数。
     * @param message - 错误消息。
     * @param options - 错误选项。
     */
    constructor(message?: string, options?: ErrorOptions) {
        super(message, options);
    }
}

/**
 * 数据伪造错误，表示数据被伪造。
 */
export class DataForgery extends Error {
    /**
     * 构造函数。
     * @param message - 错误消息。
     * @param options - 错误选项。
     */
    constructor(message: string, options?: ErrorOptions) {
        super(message, options);
    }
}

/**
 * 无权限错误，表示当前用户或实体没有足够的权限。
 */
export class NoPermission extends Error {
    /**
     * 构造函数。
     * @param message - 错误消息。
     * @param options - 错误选项。
     */
    constructor(message?: string, options?: ErrorOptions) {
        super(message, options);
    }
}