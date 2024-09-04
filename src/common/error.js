export class NetworkDown extends Error {
  constructor(message, extend) {
    super(message)
    this.name = this.constructor.name
    this.extend = extend
  }
}

export class ServiceUnavailable extends Error {
  constructor(message, extend) {
    super(message)
    this.name = this.constructor.name
    this.extend = extend
  }
}

export class NotTrust extends Error {
  constructor(message, extend) {
    super(message)
    this.name = this.constructor.name
    this.extend = extend
  }
}

export class NotSupported extends Error {
  constructor(message, extend) {
    super(message)
    this.name = this.constructor.name
    this.extend = extend
  }
}

export class ResourceUsing extends Error {
  constructor(message, extend) {
    super(message)
    this.name = this.constructor.name
    this.extend = extend
  }
}

export class AlreadyExist extends Error {
  constructor(message, extend) {
    super(message)
    this.name = this.constructor.name
    this.extend = extend
  }
}

export class InvalidStatus extends Error {
  constructor(message, extend) {
    super(message)
    this.name = this.constructor.name
    this.extend = extend
  }
}

export class InvalidArgument extends Error {
  constructor(message, extend) {
    super(message)
    this.name = this.constructor.name
    this.extend = extend
  }
}

export class NotFound extends Error {
  constructor(message, extend) {
    super(message)
    this.name = this.constructor.name
    this.extend = extend
  }
}

export class Cancelled extends Error {
  constructor(message, extend) {
    super(message)
    this.name = this.constructor.name
    this.extend = extend
  }
}

export class InvalidPassword extends Error {
  constructor(message, extend) {
    super(message)
    this.name = this.constructor.name
    this.extend = extend
  }
}

// 数据篡改
export class DataTampering extends Error {
  constructor(message, extend) {
    super(message)
    this.name = this.constructor.name
    this.extend = extend
  }
}

// 数据伪造
export class DataForgery extends Error {
  constructor(message, extend) {
    super(message)
    this.name = this.constructor.name
    this.extend = extend
  }
}

// 没有权限
export class NoPermission extends Error {
  constructor(message, extend) {
    super(message)
    this.name = this.constructor.name
    this.extend = extend
  }
}