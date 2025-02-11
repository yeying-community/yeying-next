export class NetworkError extends Error {
    constructor(message?: string, options?: ErrorOptions) {
        super(message, options)
    }
}

export class SignError extends Error {
    constructor(message?: string, options?: ErrorOptions) {
        super(message, options)
    }
}

export class ServiceUnavailable extends Error {
    constructor(message: string, options: ErrorOptions) {
        super(message, options)
    }
}

export class NotTrust extends Error {
    constructor(message: string, options: ErrorOptions) {
        super(message, options)
    }
}

export class NotSupported extends Error {
    constructor(message: string, options: ErrorOptions) {
        super(message, options)
    }
}

export class ResourceUsing extends Error {
    constructor(message: string, options: ErrorOptions) {
        super(message, options)
    }
}

export class AlreadyExist extends Error {
    constructor(message: string, options?: ErrorOptions) {
        super(message, options)
    }
}

export class InvalidStatus extends Error {
    constructor(message: string, options: ErrorOptions) {
        super(message, options)
    }
}

export class InvalidArgument extends Error {
    constructor(message: string, options?: ErrorOptions) {
        super(message, options)
    }
}

export class NotFound extends Error {
    constructor(message?: string, options?: ErrorOptions) {
        super(message, options)
    }
}

export class UnknownError extends Error {
    constructor(message: string, options?: ErrorOptions) {
        super(message, options)
    }
}

export class Cancelled extends Error {
    constructor(message: string, options: ErrorOptions) {
        super(message, options)
    }
}

export class InvalidPassword extends Error {
    constructor(message?: string, options?: ErrorOptions) {
        super(message, options)
    }
}

// 数据篡改
export class DataTampering extends Error {
    constructor(message?: string, options?: ErrorOptions) {
        super(message, options)
    }
}

// 数据伪造
export class DataForgery extends Error {
    constructor(message: string, options?: ErrorOptions) {
        super(message, options)
    }
}

// 没有权限
export class NoPermission extends Error {
    constructor(message?: string, options?: ErrorOptions) {
        super(message, options)
    }
}
