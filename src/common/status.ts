// import code_pkg from '../yeying/api/common/code_pb.cjs'
// import {AlreadyExist, NetworkDown, NotFound, NotTrust, ServiceUnavailable} from './error.js'
//
// const {ResponseCodeEnum} = code_pkg

import { ResponseStatus } from '../yeying/api/common/message_pb'
import { ResponseCodeEnum } from '../yeying/api/common/code_pb'

export function convertResponseStatusToError(status: ResponseStatus) {
    // switch (status.getCode()) {
    //     case ResponseCodeEnum.OK:
    //         return undefined
    //     case ResponseCodeEnum.ALREADY_EXISTS:
    //         return new AlreadyExist(status.getMessage())
    //     case ResponseCodeEnum.INVALID_ARGUMENT:
    //         return new InvalidArgument(status.getMessage())
    //     case ResponseCodeEnum.NOT_FOUND:
    //         return new NotFound(status.getMessage())
    //     default:
    //         return new UnknownError(status.getMessage())
    // }
}

// export function doError(err, reject, extend) {
//   if (err) {
//     console.error(`Network error, code=${err.code} message=${err.message}`)
//     if (err.code === 2) {
//       reject(new NotTrust(err.message, extend))
//     } else if (err.code === 14) {
//       reject(new ServiceUnavailable('Service unavailable!', extend))
//     } else {
//       reject(new NetworkDown('Network down!', extend))
//     }
//     return true
//   } else {
//     return false
//   }
// }
//
// export function doStatuses(statuses, resolve, reject, extend, isSuccess) {
//   isSuccess = isSuccess === undefined ? isOk : isSuccess
//   const status = statuses.find(s => !isSuccess(s.getCode()))
//   if (status === undefined) {
//     resolve()
//   } else {
//     console.error(`Service error, code=${status.getCode()}, message=${status.getMessage()}`)
//     reject(convertResponseStatusToError(status.getCode(), status.getMessage(), extend))
//   }
// }
//
// export function doStatus(status, resolve, reject, extend, isSuccess) {
//   isSuccess = isSuccess === undefined ? isOk : isSuccess
//   if (isSuccess(status.getCode())) {
//     resolve()
//   } else {
//     console.error(`Service error, code=${status.getCode()}, message=${status.getMessage()}`)
//     reject(convertResponseStatusToError(status.getCode(), status.getMessage(), extend))
//   }
// }
//
// export function convertResponseStatusToError(code, message, serviceMetadata) {
//   switch (code) {
//     case ResponseCodeEnum.ALREADY_EXISTS:
//       return new AlreadyExist(message, serviceMetadata)
//     case ResponseCodeEnum.INVALID_ARGUMENT:
//       return new AlreadyExist(message, serviceMetadata)
//     case ResponseCodeEnum.NOT_FOUND:
//       return new NotFound(message, serviceMetadata)
//     default:
//       return new Error('Unknown error!')
//   }
// }
//
export function isOk(status?: ResponseStatus) {
    return status && status.code === ResponseCodeEnum.OK
}

export function isExisted(status?: ResponseStatus) {
    return status && (status.code === ResponseCodeEnum.OK || status.code === ResponseCodeEnum.ALREADY_EXISTS)
}

export function isDeleted(status?: ResponseStatus) {
    return status && (status.code === ResponseCodeEnum.OK || status.code === ResponseCodeEnum.NOT_FOUND)
}
