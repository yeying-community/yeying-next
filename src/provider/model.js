import {IdentityProvider} from './identity/identity.js'
import {UserProvider} from './user/user.js'
import {LlmAdaptor} from './llm/llm.js'
import {AssetAdaptor} from './asset/asset.js'
import {CertificateProvider} from './certificate/certificate.js'
import code_pkg from '../yeying/api/common/code_pb.cjs'
import {fromApiCodeToStr, fromStrToApiCode,} from '../domain/model/identity/model.js'
import {ApplicationProvider} from './application/application.js'

const {ApiCodeEnum} = code_pkg


export function ServiceMetadata(name, code, did, proxy, apis) {
  this.name = name
  this.code = code
  this.did = did
  this.proxy = proxy
  this.apis = apis
}

export function convertServiceMetadataFrom(identityMetadata) {
  return new ServiceMetadata(
    identityMetadata.name,
    identityMetadata.code,
    identityMetadata.did,
    identityMetadata.extend.proxy,
    identityMetadata.extend.apis.map(m => fromStrToApiCode(m))
  )
}

export function Signer(blockAddress) {
  this.blockAddress = blockAddress
}

export function isSupported(serviceMetadata, apiCode) {
  const serviceName = serviceMetadata.apis.find(s => s === apiCode)
  if (serviceName !== undefined) {
    return true
  }

  console.log(`Not support the api code=${fromApiCodeToStr(apiCode)} with did=${serviceMetadata.did}`)
  return false
}

export function getStoreAdaptor(storeMetadata, signer) {
  const serviceMetadata = convertServiceMetadataFrom(storeMetadata)
  if (!isSupported(serviceMetadata, ApiCodeEnum.API_CODE_ASSET)) {
    return undefined
  } else {
    return new AssetAdaptor(serviceMetadata, signer)
  }
}

export function getLlmAdaptor(agentMetadata, signer) {
  const serviceMetadata = convertServiceMetadataFrom(agentMetadata)
  if (!isSupported(serviceMetadata, ApiCodeEnum.API_CODE_LLM)) {
    return undefined
  } else {
    return new LlmAdaptor(serviceMetadata, signer)
  }
}

export function getIdentityAdaptor(nodeMetadata, signer) {
  const serviceMetadata = convertServiceMetadataFrom(nodeMetadata)
  if (!isSupported(serviceMetadata, ApiCodeEnum.API_CODE_IDENTITY)) {
    return undefined
  } else {
    return new IdentityProvider(serviceMetadata, signer)
  }
}

export function getUserAdaptor(identityMetadata, signer) {
  const serviceMetadata = convertServiceMetadataFrom(identityMetadata)
  if (!isSupported(serviceMetadata, ApiCodeEnum.API_CODE_USER)) {
    return undefined
  } else {
    return new UserProvider(serviceMetadata, signer)
  }
}

export function getApplicationAdaptor(nodeMetadata, signer) {
  const serviceMetadata = convertServiceMetadataFrom(nodeMetadata)
  if (!isSupported(serviceMetadata, ApiCodeEnum.API_CODE_APPLICATION)) {
    return undefined
  } else {
    return new ApplicationProvider(serviceMetadata, signer)
  }
}

export function getCertificateAdaptor(nodeMetadata, signer) {
  const serviceMetadata = convertServiceMetadataFrom(nodeMetadata)
  if (!isSupported(serviceMetadata, ApiCodeEnum.API_CODE_CERTIFICATE)) {
    return undefined
  } else {
    return new CertificateProvider(serviceMetadata, signer)
  }
}

export function getAdaptor(apiCode, serviceMetadata, signer) {
  if (!isSupported(serviceMetadata, apiCode)) {
    return undefined
  }

  switch (apiCode) {
    case ApiCodeEnum.API_CODE_IDENTITY:
      return new IdentityProvider(serviceMetadata, signer)
    case ApiCodeEnum.API_CODE_APPLICATION:
      return new ApplicationProvider(serviceMetadata, signer)
    case ApiCodeEnum.API_CODE_USER:
      return new UserProvider(serviceMetadata, signer)
    case ApiCodeEnum.API_CODE_LLM:
      return new LlmAdaptor(serviceMetadata, signer)
    case ApiCodeEnum.API_CODE_ASSET:
      return new AssetAdaptor(serviceMetadata, signer)
    case ApiCodeEnum.API_CODE_CERTIFICATE:
      return new CertificateProvider(serviceMetadata, signer)
    default:
      console.log(`Not support ${fromApiCodeToStr(apiCode)} with provider=${serviceMetadata.did}`)
      return undefined
  }
}