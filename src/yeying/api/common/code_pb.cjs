// source: yeying/api/common/code.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.yeying.api.common.ApiCodeEnum', null, global);
goog.exportSymbol('proto.yeying.api.common.ApplicationCodeEnum', null, global);
goog.exportSymbol('proto.yeying.api.common.ApplicationStatusEnum', null, global);
goog.exportSymbol('proto.yeying.api.common.AuthenticateTypeEnum', null, global);
goog.exportSymbol('proto.yeying.api.common.CipherTypeEnum', null, global);
goog.exportSymbol('proto.yeying.api.common.ContentFormatEnum', null, global);
goog.exportSymbol('proto.yeying.api.common.ContractStatusEnum', null, global);
goog.exportSymbol('proto.yeying.api.common.DigitalFormatEnum', null, global);
goog.exportSymbol('proto.yeying.api.common.IdentityCodeEnum', null, global);
goog.exportSymbol('proto.yeying.api.common.ImageFormatEnum', null, global);
goog.exportSymbol('proto.yeying.api.common.LanguageCodeEnum', null, global);
goog.exportSymbol('proto.yeying.api.common.ParticipantTypeEnum', null, global);
goog.exportSymbol('proto.yeying.api.common.ResponseCodeEnum', null, global);
goog.exportSymbol('proto.yeying.api.common.ServiceCodeEnum', null, global);
goog.exportSymbol('proto.yeying.api.common.SessionRoleEnum', null, global);
goog.exportSymbol('proto.yeying.api.common.SessionSceneEnum', null, global);
goog.exportSymbol('proto.yeying.api.common.StreamDataTagEnum', null, global);
/**
 * @enum {number}
 */
proto.yeying.api.common.ResponseCodeEnum = {
  RESPONSE_CODE_UNKNOWN: 0,
  OK: 1,
  INVALID_ARGUMENT: 2,
  UNAUTHENTICATED: 3,
  PERMISSION_DENIED: 4,
  NOT_FOUND: 5,
  ALREADY_EXISTS: 6,
  LIMIT_EXCEEDED: 7,
  UNAVAILABLE: 8,
  UNKNOWN_ERROR: 9,
  NETWORK_ERROR: 10,
  INVALID_CERT: 11,
  NOT_SUPPORTED: 12
};

/**
 * @enum {number}
 */
proto.yeying.api.common.ContractStatusEnum = {
  CONTRACT_STATUS_UNKNOWN: 0,
  CONTRACT_STATUS_INACTIVATED: 1,
  CONTRACT_STATUS_ACTIVATED: 2,
  CONTRACT_STATUS_EXPIRED: 3,
  CONTRACT_STATUS_CANCELED: 4
};

/**
 * @enum {number}
 */
proto.yeying.api.common.LanguageCodeEnum = {
  LANGUAGE_CODE_UNKNOWN: 0,
  LANGUAGE_CODE_ZH_CH: 1,
  LANGUAGE_CODE_EN_US: 2
};

/**
 * @enum {number}
 */
proto.yeying.api.common.ApiCodeEnum = {
  API_CODE_UNKNOWN: 0,
  API_CODE_USER: 1,
  API_CODE_IDENTITY: 2,
  API_CODE_LLM: 3,
  API_CODE_ASSET: 4,
  API_CODE_CERTIFICATE: 5,
  API_CODE_STORAGE: 6,
  API_CODE_APPLICATION: 7,
  API_CODE_EVENT: 8,
  API_CODE_INVITATION: 9,
  API_CODE_SERVICE: 10
};

/**
 * @enum {number}
 */
proto.yeying.api.common.ServiceCodeEnum = {
  SERVICE_CODE_UNKNOWN: 0,
  SERVICE_CODE_NODE: 1,
  SERVICE_CODE_WAREHOUSE: 2,
  SERVICE_CODE_AGENT: 3
};

/**
 * @enum {number}
 */
proto.yeying.api.common.IdentityCodeEnum = {
  IDENTITY_CODE_UNKNOWN: 0,
  IDENTITY_CODE_PERSONAL: 1,
  IDENTITY_CODE_ORGANIZATION: 2,
  IDENTITY_CODE_SERVICE: 3,
  IDENTITY_CODE_APPLICATION: 4,
  IDENTITY_CODE_ASSET: 5
};

/**
 * @enum {number}
 */
proto.yeying.api.common.ImageFormatEnum = {
  IMAGE_FORMAT_UNKNOWN: 0,
  IMAGE_FORMAT_PNG: 1
};

/**
 * @enum {number}
 */
proto.yeying.api.common.DigitalFormatEnum = {
  DIGITAL_FORMAT_UNKNOWN: 0,
  DIGITAL_FORMAT_TEXT: 1,
  DIGITAL_FORMAT_IMAGE: 2,
  DIGITAL_FORMAT_VIDEO: 3,
  DIGITAL_FORMAT_AUDIO: 4,
  DIGITAL_FORMAT_APP: 5,
  DIGITAL_FORMAT_OTHER: 10000
};

/**
 * @enum {number}
 */
proto.yeying.api.common.ContentFormatEnum = {
  CONTENT_FORMAT_UNKNOWN: 0,
  CONTENT_FORMAT_URL: 1,
  CONTENT_FORMAT_BASE64: 2
};

/**
 * @enum {number}
 */
proto.yeying.api.common.SessionSceneEnum = {
  SESSION_SCENE_UNKNOWN: 0,
  SESSION_SCENE_DIALOGUE: 1,
  SESSION_SCENE_DRAWING: 2,
  SESSION_SCENE_TRANSLATION: 3
};

/**
 * @enum {number}
 */
proto.yeying.api.common.SessionRoleEnum = {
  SESSION_ROLE_UNKNOWN: 0,
  SESSION_ROLE_PARTICIPANT: 1,
  SESSION_ROLE_ADMIN: 2
};

/**
 * @enum {number}
 */
proto.yeying.api.common.ParticipantTypeEnum = {
  PARTICIPANT_TYPE_UNKNOWN: 0,
  PARTICIPANT_TYPE_SERVICE: 1,
  PARTICIPANT_TYPE_PEOPLE: 2
};

/**
 * @enum {number}
 */
proto.yeying.api.common.ApplicationStatusEnum = {
  APPLICATION_STATUS_UNKNOWN: 0,
  APPLICATION_STATUS_CREATED: 1,
  APPLICATION_STATUS_AUDITED: 2,
  APPLICATION_STATUS_REFUSED: 3
};

/**
 * @enum {number}
 */
proto.yeying.api.common.ApplicationCodeEnum = {
  APPLICATION_CODE_UNKNOWN: 0,
  APPLICATION_CODE_PORTAL: 1,
  APPLICATION_CODE_STORE: 2,
  APPLICATION_CODE_KNOWLEDGE: 3,
  APPLICATION_CODE_WAREHOUSE: 4,
  APPLICATION_CODE_KEEPER: 5,
  APPLICATION_CODE_SOCIAL: 6,
  APPLICATION_CODE_WORKBENCH: 7
};

/**
 * @enum {number}
 */
proto.yeying.api.common.CipherTypeEnum = {
  CIPHER_TYPE_UNKNOWN: 0,
  CIPHER_TYPE_AES_GCM_256: 1
};

/**
 * @enum {number}
 */
proto.yeying.api.common.AuthenticateTypeEnum = {
  AUTHENTICATE_TYPE_UNKNOWN: 0,
  AUTHENTICATE_TYPE_CERT: 1,
  AUTHENTICATE_TYPE_TOKEN: 2
};

/**
 * @enum {number}
 */
proto.yeying.api.common.StreamDataTagEnum = {
  STREAM_DATA_TAG_HEAD: 0,
  STREAM_DATA_TAG_BODY: 1,
  STREAM_DATA_TAG_TAIL: 2
};

goog.object.extend(exports, proto.yeying.api.common);
