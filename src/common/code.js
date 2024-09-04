import code_pkg from '../yeying/api/common/code_pb.cjs'
const {AuthenticateTypeEnum, CategoryCodeEnum, ServiceCodeEnum, ApiCodeEnum, AccountCodeEnum, CipherTypeEnum, ApplicationCodeEnum} = code_pkg

export function getAppIdentityCode() {
  return ApplicationCodeEnum.APPLICATION_CODE_IDENTITY
}

export function getServiceMessageBoxCode() {
  return ServiceCodeEnum.SERVICE_CODE_MESSAGEBOX
}

export function getServiceNodeCode() {
  return ServiceCodeEnum.SERVICE_CODE_NODE
}

export function getServiceAgentCode() {
  return ServiceCodeEnum.SERVICE_CODE_AGENT
}

export function getServiceStoreCode() {
  return ServiceCodeEnum.SERVICE_CODE_STORE
}

export function fromStrToAuthenticateType(str) {
  if (str === undefined) {
    return undefined
  }
  const value = AuthenticateTypeEnum[str.toUpperCase()]
  return value === AuthenticateTypeEnum.AUTHENTICATE_TYPE_UNKNOWN ? undefined : value
}

export function fromAuthenticateTypeToStr(authenticateType) {
  if (authenticateType === undefined || authenticateType === AuthenticateTypeEnum.AUTHENTICATE_TYPE_UNKNOWN) {
    return undefined
  }

  return Object.keys(AuthenticateTypeEnum).find(s => AuthenticateTypeEnum[s] === authenticateType)
}


export function fromStrToCategoryCode(str) {
  if (str === undefined) {
    return undefined
  }
  const value = CategoryCodeEnum[str]
  return value === CategoryCodeEnum.CATEGORY_CODE_UNKNOWN ? undefined : value
}

export function listCategoryCode() {
  return Object.keys(CategoryCodeEnum).filter(s => CategoryCodeEnum[s] > 0)
}

export function fromCategoryCodeToStr(category) {
  if (category === undefined || category === CategoryCodeEnum.CATEGORY_CODE_UNKNOWN) {
    return undefined
  }

  return Object.keys(CategoryCodeEnum).find(s => CategoryCodeEnum[s] === category)
}

export function fromStrToServiceCode(str) {
  if (str === undefined) {
    return undefined
  }
  const value = ServiceCodeEnum[str.toUpperCase()]
  return value === ServiceCodeEnum.SERVICE_CODE_UNKNOWN ? undefined : value
}

export function getApiCodeListByServiceCode(serviceCodeStr) {
  const serviceCode = fromStrToServiceCode(serviceCodeStr)
  switch (serviceCode) {
    case ServiceCodeEnum.SERVICE_CODE_NODE:
      return [ApiCodeEnum.API_CODE_USER, ApiCodeEnum.API_CODE_IDENTITY, ApiCodeEnum.API_CODE_CERTIFICATE]
    case ServiceCodeEnum.SERVICE_CODE_AGENT:
      return [ApiCodeEnum.API_CODE_USER, ApiCodeEnum.API_CODE_LLM]
    case ServiceCodeEnum.SERVICE_CODE_STORE:
      return [ApiCodeEnum.API_CODE_USER, ApiCodeEnum.API_CODE_ASSET, ApiCodeEnum.API_CODE_STORAGE]
    default:
      return listApiCode()
  }
}

export function listServiceCode() {
  return Object.keys(ServiceCodeEnum).filter(s => ServiceCodeEnum[s] > 0)
}

export function fromServiceCodeToStr(serviceCode) {
  if (serviceCode === undefined || serviceCode === ServiceCodeEnum.SERVICE_CODE_UNKNOWN) {
    return undefined
  }

  return Object.keys(ServiceCodeEnum).find(s => ServiceCodeEnum[s] === serviceCode)
}


export function fromStrToAccountCode(str) {
  if (str === undefined) {
    return undefined
  }
  const value = AccountCodeEnum[str]
  return value === AccountCodeEnum.ACCOUNT_CODE_UNKNOWN ? undefined : value
}

export function listAccountCode() {
  return Object.keys(AccountCodeEnum).filter(s => AccountCodeEnum[s] > 0)
}

export function fromAccountCodeToStr(accountCode) {
  if (accountCode === undefined || accountCode === AccountCodeEnum.ACCOUNT_CODE_UNKNOWN) {
    return undefined
  }

  return Object.keys(AccountCodeEnum).find(s => AccountCodeEnum[s] === accountCode)
}

export function fromStrToApiCode(str) {
  if (str === undefined) {
    return undefined
  }
  const value = ApiCodeEnum[str]
  return value === ApiCodeEnum.API_CODE_UNKNOWN ? undefined : value
}

export function listApiCode() {
  return Object.keys(ApiCodeEnum).filter(s => ApiCodeEnum[s] > 0)
}

export function fromApiCodeToStr(apiCode) {
  if (apiCode === undefined || apiCode === ApiCodeEnum.API_CODE_UNKNOWN) {
    return undefined
  }

  return Object.keys(ApiCodeEnum).find(s => ApiCodeEnum[s] === apiCode)
}

export function fromStrToCipherType(str) {
  if (str === undefined) {
    return undefined
  }
  const value = CipherTypeEnum[str.toUpperCase()]
  return value === CipherTypeEnum.CIPHER_TYPE_UNKNOWN ? undefined : value
}

export function fromCipherTypeToStr(cipherType) {
  if (cipherType === undefined || cipherType === CipherTypeEnum.CIPHER_TYPE_UNKNOWN) {
    return undefined
  }

  return Object.keys(CipherTypeEnum).find(s => CipherTypeEnum[s] === cipherType)
}