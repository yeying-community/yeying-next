//*
// 为了方便拦截处理，以及统一安全规范，夜莺社区提供的消息定义，遵循几个约定：
// 1、所有消息都有通用部分，叫基础消息，其定义是BaseMessage
// 2、基础消息在消息体中的定义，其变量名约定为base
// 3、消息分为流式消息和非流式消息，流式消息，其消息体里面必须要有变量header，而base变量在header变量里面；非流式消息base变量在消息体里面即可
// 4、时间字段请务必转化为UTC支付串，统一使用这种格式：2024-07-19T06:38:38.332Z
// 5、版本字段，用于标识消息体如何解析

// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file yeying/api/common/message.proto (package yeying.api.common, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { AuthenticateTypeEnum, ResponseCodeEnum } from "./code_pb";
import { file_yeying_api_common_code } from "./code_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file yeying/api/common/message.proto.
 */
export const file_yeying_api_common_message: GenFile = /*@__PURE__*/
  fileDesc("Ch95ZXlpbmcvYXBpL2NvbW1vbi9tZXNzYWdlLnByb3RvEhF5ZXlpbmcuYXBpLmNvbW1vbiKfAQoNTWVzc2FnZUhlYWRlchILCgNkaWQYASABKAkSOQoIYXV0aFR5cGUYAiABKA4yJy55ZXlpbmcuYXBpLmNvbW1vbi5BdXRoZW50aWNhdGVUeXBlRW51bRITCgthdXRoQ29udGVudBgDIAEoCRINCgVub25jZRgEIAEoCRIRCgl0aW1lc3RhbXAYBSABKAkSDwoHdmVyc2lvbhgGIAEoDSJUCg5SZXNwb25zZVN0YXR1cxIxCgRjb2RlGAEgASgOMiMueWV5aW5nLmFwaS5jb21tb24uUmVzcG9uc2VDb2RlRW51bRIPCgdtZXNzYWdlGAIgASgJIj0KDFJlc3BvbnNlUGFnZRINCgV0b3RhbBgBIAEoDRIMCgRwYWdlGAMgASgNEhAKCHBhZ2VTaXplGAQgASgNIi0KC1JlcXVlc3RQYWdlEgwKBHBhZ2UYASABKA0SEAoIcGFnZVNpemUYAiABKA1CE1oReWV5aW5nL2FwaS9jb21tb25iBnByb3RvMw", [file_yeying_api_common_code]);

/**
 * @generated from message yeying.api.common.MessageHeader
 */
export type MessageHeader = Message<"yeying.api.common.MessageHeader"> & {
  /**
   * @generated from field: string did = 1;
   */
  did: string;

  /**
   * @generated from field: yeying.api.common.AuthenticateTypeEnum authType = 2;
   */
  authType: AuthenticateTypeEnum;

  /**
   * @generated from field: string authContent = 3;
   */
  authContent: string;

  /**
   * @generated from field: string nonce = 4;
   */
  nonce: string;

  /**
   * @generated from field: string timestamp = 5;
   */
  timestamp: string;

  /**
   * @generated from field: uint32 version = 6;
   */
  version: number;
};

/**
 * Describes the message yeying.api.common.MessageHeader.
 * Use `create(MessageHeaderSchema)` to create a new message.
 */
export const MessageHeaderSchema: GenMessage<MessageHeader> = /*@__PURE__*/
  messageDesc(file_yeying_api_common_message, 0);

/**
 * @generated from message yeying.api.common.ResponseStatus
 */
export type ResponseStatus = Message<"yeying.api.common.ResponseStatus"> & {
  /**
   * 响应状态码
   *
   * @generated from field: yeying.api.common.ResponseCodeEnum code = 1;
   */
  code: ResponseCodeEnum;

  /**
   * 可读的消息
   *
   * @generated from field: string message = 2;
   */
  message: string;
};

/**
 * Describes the message yeying.api.common.ResponseStatus.
 * Use `create(ResponseStatusSchema)` to create a new message.
 */
export const ResponseStatusSchema: GenMessage<ResponseStatus> = /*@__PURE__*/
  messageDesc(file_yeying_api_common_message, 1);

/**
 * @generated from message yeying.api.common.ResponsePage
 */
export type ResponsePage = Message<"yeying.api.common.ResponsePage"> & {
  /**
   * 总的记录数
   *
   * @generated from field: uint32 total = 1;
   */
  total: number;

  /**
   * 页面索引，从1开始
   *
   * @generated from field: uint32 page = 3;
   */
  page: number;

  /**
   * 页面大小
   *
   * @generated from field: uint32 pageSize = 4;
   */
  pageSize: number;
};

/**
 * Describes the message yeying.api.common.ResponsePage.
 * Use `create(ResponsePageSchema)` to create a new message.
 */
export const ResponsePageSchema: GenMessage<ResponsePage> = /*@__PURE__*/
  messageDesc(file_yeying_api_common_message, 2);

/**
 * @generated from message yeying.api.common.RequestPage
 */
export type RequestPage = Message<"yeying.api.common.RequestPage"> & {
  /**
   * 页面索引，从1开始
   *
   * @generated from field: uint32 page = 1;
   */
  page: number;

  /**
   * 页面大小
   *
   * @generated from field: uint32 pageSize = 2;
   */
  pageSize: number;
};

/**
 * Describes the message yeying.api.common.RequestPage.
 * Use `create(RequestPageSchema)` to create a new message.
 */
export const RequestPageSchema: GenMessage<RequestPage> = /*@__PURE__*/
  messageDesc(file_yeying_api_common_message, 3);

