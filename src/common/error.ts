export class NetworkDown extends Error {
  constructor(message: string, cause?: ErrorOptions) {
    super(message, cause)
  }
}

export class ServiceUnavailable extends Error {
  constructor(message: string, cause: ErrorOptions) {
    super(message, cause)
  }
}

export class NotTrust extends Error {
  constructor(message: string, cause: ErrorOptions) {
    super(message, cause)
  }
}

export class NotSupported extends Error {
  constructor(message: string, cause: ErrorOptions) {
    super(message, cause)
  }
}

export class ResourceUsing extends Error {
  constructor(message: string, cause: ErrorOptions) {
    super(message, cause)
  }
}

export class AlreadyExist extends Error {
  constructor(message: string, cause?: ErrorOptions) {
    super(message, cause)
  }
}

export class InvalidStatus extends Error {
  constructor(message: string, cause: ErrorOptions) {
    super(message, cause)
  }
}

export class InvalidArgument extends Error {
  constructor(message: string, cause?: ErrorOptions) {
    super(message, cause)
  }
}

export class NotFound extends Error {
  constructor(message: string, cause?: ErrorOptions) {
    super(message, cause)
  }
}

export class UnknownError extends Error {
  constructor(message: string, cause?: ErrorOptions) {
    super(message, cause)
  }
}

export class Cancelled extends Error {
  constructor(message: string, cause: ErrorOptions) {
    super(message, cause)
  }
}

export class InvalidPassword extends Error {
  constructor(message: string, cause: ErrorOptions) {
    super(message, cause)
  }
}

// 数据篡改
export class DataTampering extends Error {
  constructor(message: string, cause: ErrorOptions) {
    super(message, cause)
  }
}

// 数据伪造
export class DataForgery extends Error {
  constructor(message: string, cause: ErrorOptions) {
    super(message, cause)
  }
}

// 没有权限
export class NoPermission extends Error {
  constructor(message: string, cause?: ErrorOptions) {
    super(message, cause)
  }
}