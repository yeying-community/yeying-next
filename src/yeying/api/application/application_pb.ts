// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file yeying/api/application/application.proto (package yeying.api.application, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { MessageHeader, RequestPage, ResponsePage, ResponseStatus } from "../common/message_pb";
import { file_yeying_api_common_message } from "../common/message_pb";
import type { ApplicationCodeEnum, ApplicationStatusEnum } from "../common/code_pb";
import { file_yeying_api_common_code } from "../common/code_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file yeying/api/application/application.proto.
 */
export const file_yeying_api_application_application: GenFile = /*@__PURE__*/
  fileDesc("Cih5ZXlpbmcvYXBpL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLnByb3RvEhZ5ZXlpbmcuYXBpLmFwcGxpY2F0aW9uIpABChhTZWFyY2hBcHBsaWNhdGlvblJlcXVlc3QSMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchJCCgRib2R5GAIgASgLMjQueWV5aW5nLmFwaS5hcHBsaWNhdGlvbi5TZWFyY2hBcHBsaWNhdGlvblJlcXVlc3RCb2R5IogBChxTZWFyY2hBcHBsaWNhdGlvblJlcXVlc3RCb2R5EjoKCWNvbmRpdGlvbhgBIAEoCzInLnlleWluZy5hcGkuYXBwbGljYXRpb24uU2VhcmNoQ29uZGl0aW9uEiwKBHBhZ2UYAiABKAsyHi55ZXlpbmcuYXBpLmNvbW1vbi5SZXF1ZXN0UGFnZSKQAQoPU2VhcmNoQ29uZGl0aW9uEjQKBGNvZGUYASABKA4yJi55ZXlpbmcuYXBpLmNvbW1vbi5BcHBsaWNhdGlvbkNvZGVFbnVtEjgKBnN0YXR1cxgCIAEoDjIoLnlleWluZy5hcGkuY29tbW9uLkFwcGxpY2F0aW9uU3RhdHVzRW51bRINCgVvd25lchgDIAEoCSKSAQoZU2VhcmNoQXBwbGljYXRpb25SZXNwb25zZRIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEkMKBGJvZHkYAiABKAsyNS55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLlNlYXJjaEFwcGxpY2F0aW9uUmVzcG9uc2VCb2R5IsQBCh1TZWFyY2hBcHBsaWNhdGlvblJlc3BvbnNlQm9keRIxCgZzdGF0dXMYASABKAsyIS55ZXlpbmcuYXBpLmNvbW1vbi5SZXNwb25zZVN0YXR1cxJBCgxhcHBsaWNhdGlvbnMYAiADKAsyKy55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLkFwcGxpY2F0aW9uTWV0YWRhdGESLQoEcGFnZRgDIAEoCzIfLnlleWluZy5hcGkuY29tbW9uLlJlc3BvbnNlUGFnZSKQAQoYQ3JlYXRlQXBwbGljYXRpb25SZXF1ZXN0EjAKBmhlYWRlchgBIAEoCzIgLnlleWluZy5hcGkuY29tbW9uLk1lc3NhZ2VIZWFkZXISQgoEYm9keRgCIAEoCzI0LnlleWluZy5hcGkuYXBwbGljYXRpb24uQ3JlYXRlQXBwbGljYXRpb25SZXF1ZXN0Qm9keSJgChxDcmVhdGVBcHBsaWNhdGlvblJlcXVlc3RCb2R5EkAKC2FwcGxpY2F0aW9uGAEgASgLMisueWV5aW5nLmFwaS5hcHBsaWNhdGlvbi5BcHBsaWNhdGlvbk1ldGFkYXRhIpIBChlDcmVhdGVBcHBsaWNhdGlvblJlc3BvbnNlEjAKBmhlYWRlchgBIAEoCzIgLnlleWluZy5hcGkuY29tbW9uLk1lc3NhZ2VIZWFkZXISQwoEYm9keRgCIAEoCzI1LnlleWluZy5hcGkuYXBwbGljYXRpb24uQ3JlYXRlQXBwbGljYXRpb25SZXNwb25zZUJvZHkiUgodQ3JlYXRlQXBwbGljYXRpb25SZXNwb25zZUJvZHkSMQoGc3RhdHVzGAEgASgLMiEueWV5aW5nLmFwaS5jb21tb24uUmVzcG9uc2VTdGF0dXMikAEKGEFwcGxpY2F0aW9uRGV0YWlsUmVxdWVzdBIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEkIKBGJvZHkYAiABKAsyNC55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLkFwcGxpY2F0aW9uRGV0YWlsUmVxdWVzdEJvZHkiPAocQXBwbGljYXRpb25EZXRhaWxSZXF1ZXN0Qm9keRILCgNkaWQYASABKAkSDwoHdmVyc2lvbhgCIAEoDSKSAQoZQXBwbGljYXRpb25EZXRhaWxSZXNwb25zZRIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEkMKBGJvZHkYAiABKAsyNS55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLkFwcGxpY2F0aW9uRGV0YWlsUmVzcG9uc2VCb2R5ItEBCh1BcHBsaWNhdGlvbkRldGFpbFJlc3BvbnNlQm9keRIxCgZzdGF0dXMYASABKAsyIS55ZXlpbmcuYXBpLmNvbW1vbi5SZXNwb25zZVN0YXR1cxI7CglhcHBTdGF0dXMYAyABKA4yKC55ZXlpbmcuYXBpLmNvbW1vbi5BcHBsaWNhdGlvblN0YXR1c0VudW0SQAoLYXBwbGljYXRpb24YAiABKAsyKy55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLkFwcGxpY2F0aW9uTWV0YWRhdGEikgEKGU9mZmxpbmVBcHBsaWNhdGlvblJlcXVlc3QSMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchJDCgRib2R5GAIgASgLMjUueWV5aW5nLmFwaS5hcHBsaWNhdGlvbi5PZmZsaW5lQXBwbGljYXRpb25SZXF1ZXN0Qm9keSI9Ch1PZmZsaW5lQXBwbGljYXRpb25SZXF1ZXN0Qm9keRILCgNkaWQYASABKAkSDwoHdmVyc2lvbhgCIAEoDSKUAQoaT2ZmbGluZUFwcGxpY2F0aW9uUmVzcG9uc2USMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchJECgRib2R5GAIgASgLMjYueWV5aW5nLmFwaS5hcHBsaWNhdGlvbi5PZmZsaW5lQXBwbGljYXRpb25SZXNwb25zZUJvZHkiUwoeT2ZmbGluZUFwcGxpY2F0aW9uUmVzcG9uc2VCb2R5EjEKBnN0YXR1cxgBIAEoCzIhLnlleWluZy5hcGkuY29tbW9uLlJlc3BvbnNlU3RhdHVzIpABChhPbmxpbmVBcHBsaWNhdGlvblJlcXVlc3QSMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchJCCgRib2R5GAIgASgLMjQueWV5aW5nLmFwaS5hcHBsaWNhdGlvbi5PbmxpbmVBcHBsaWNhdGlvblJlcXVlc3RCb2R5IjwKHE9ubGluZUFwcGxpY2F0aW9uUmVxdWVzdEJvZHkSCwoDZGlkGAEgASgJEg8KB3ZlcnNpb24YAiABKA0ikgEKGU9ubGluZUFwcGxpY2F0aW9uUmVzcG9uc2USMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchJDCgRib2R5GAIgASgLMjUueWV5aW5nLmFwaS5hcHBsaWNhdGlvbi5PbmxpbmVBcHBsaWNhdGlvblJlc3BvbnNlQm9keSJSCh1PbmxpbmVBcHBsaWNhdGlvblJlc3BvbnNlQm9keRIxCgZzdGF0dXMYASABKAsyIS55ZXlpbmcuYXBpLmNvbW1vbi5SZXNwb25zZVN0YXR1cyJRChFBcHBsaWNhdGlvbkV4dGVuZBI8Cghjb21tZW50cxgBIAMoCzIqLnlleWluZy5hcGkuYXBwbGljYXRpb24uQXBwbGljYXRpb25Db21tZW50IlkKEkFwcGxpY2F0aW9uQ29tbWVudBIPCgdhdWRpdG9yGAEgASgJEg8KB2NvbW1lbnQYAiABKAkSDgoGcGFzc2VkGAMgASgIEhEKCXNpZ25hdHVyZRgEIAEoCSLMAgoTQXBwbGljYXRpb25NZXRhZGF0YRINCgVvd25lchgBIAEoCRIPCgduZXR3b3JrGAIgASgJEg8KB2FkZHJlc3MYAyABKAkSCwoDZGlkGAQgASgJEg8KB3ZlcnNpb24YBSABKA0SDAoEaGFzaBgGIAEoCRIMCgRuYW1lGAcgASgJEjQKBGNvZGUYCCABKA4yJi55ZXlpbmcuYXBpLmNvbW1vbi5BcHBsaWNhdGlvbkNvZGVFbnVtEhMKC2Rlc2NyaXB0aW9uGAkgASgJEhAKCGxvY2F0aW9uGAogASgJEhQKDHNlcnZpY2VDb2RlcxgLIAEoCRIOCgZhdmF0YXIYDCABKAkSDgoGZXh0ZW5kGA0gASgJEhEKCWNyZWF0ZWRBdBgOIAEoCRIRCgl1cGRhdGVkQXQYDyABKAkSEQoJc2lnbmF0dXJlGBAgASgJIpABChhEZWxldGVBcHBsaWNhdGlvblJlcXVlc3QSMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchJCCgRib2R5GAIgASgLMjQueWV5aW5nLmFwaS5hcHBsaWNhdGlvbi5EZWxldGVBcHBsaWNhdGlvblJlcXVlc3RCb2R5IjwKHERlbGV0ZUFwcGxpY2F0aW9uUmVxdWVzdEJvZHkSCwoDZGlkGAEgASgJEg8KB3ZlcnNpb24YAiABKA0ikgEKGURlbGV0ZUFwcGxpY2F0aW9uUmVzcG9uc2USMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchJDCgRib2R5GAIgASgLMjUueWV5aW5nLmFwaS5hcHBsaWNhdGlvbi5EZWxldGVBcHBsaWNhdGlvblJlc3BvbnNlQm9keSJSCh1EZWxldGVBcHBsaWNhdGlvblJlc3BvbnNlQm9keRIxCgZzdGF0dXMYASABKAsyIS55ZXlpbmcuYXBpLmNvbW1vbi5SZXNwb25zZVN0YXR1cyKOAQoXQXVkaXRBcHBsaWNhdGlvblJlcXVlc3QSMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchJBCgRib2R5GAIgASgLMjMueWV5aW5nLmFwaS5hcHBsaWNhdGlvbi5BdWRpdEFwcGxpY2F0aW9uUmVxdWVzdEJvZHkiWgobQXVkaXRBcHBsaWNhdGlvblJlcXVlc3RCb2R5EjsKB2NvbW1lbnQYASABKAsyKi55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLkFwcGxpY2F0aW9uQ29tbWVudCJNChhBdWRpdEFwcGxpY2F0aW9uUmVzcG9uc2USMQoGc3RhdHVzGAEgASgLMiEueWV5aW5nLmFwaS5jb21tb24uUmVzcG9uc2VTdGF0dXMypAYKC0FwcGxpY2F0aW9uEm8KBlNlYXJjaBIwLnlleWluZy5hcGkuYXBwbGljYXRpb24uU2VhcmNoQXBwbGljYXRpb25SZXF1ZXN0GjEueWV5aW5nLmFwaS5hcHBsaWNhdGlvbi5TZWFyY2hBcHBsaWNhdGlvblJlc3BvbnNlIgASbAoFQXVkaXQSLy55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLkF1ZGl0QXBwbGljYXRpb25SZXF1ZXN0GjAueWV5aW5nLmFwaS5hcHBsaWNhdGlvbi5BdWRpdEFwcGxpY2F0aW9uUmVzcG9uc2UiABJvCgZDcmVhdGUSMC55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLkNyZWF0ZUFwcGxpY2F0aW9uUmVxdWVzdBoxLnlleWluZy5hcGkuYXBwbGljYXRpb24uQ3JlYXRlQXBwbGljYXRpb25SZXNwb25zZSIAEm8KBkRldGFpbBIwLnlleWluZy5hcGkuYXBwbGljYXRpb24uQXBwbGljYXRpb25EZXRhaWxSZXF1ZXN0GjEueWV5aW5nLmFwaS5hcHBsaWNhdGlvbi5BcHBsaWNhdGlvbkRldGFpbFJlc3BvbnNlIgAScgoHT2ZmbGluZRIxLnlleWluZy5hcGkuYXBwbGljYXRpb24uT2ZmbGluZUFwcGxpY2F0aW9uUmVxdWVzdBoyLnlleWluZy5hcGkuYXBwbGljYXRpb24uT2ZmbGluZUFwcGxpY2F0aW9uUmVzcG9uc2UiABJvCgZPbmxpbmUSMC55ZXlpbmcuYXBpLmFwcGxpY2F0aW9uLk9ubGluZUFwcGxpY2F0aW9uUmVxdWVzdBoxLnlleWluZy5hcGkuYXBwbGljYXRpb24uT25saW5lQXBwbGljYXRpb25SZXNwb25zZSIAEm8KBkRlbGV0ZRIwLnlleWluZy5hcGkuYXBwbGljYXRpb24uRGVsZXRlQXBwbGljYXRpb25SZXF1ZXN0GjEueWV5aW5nLmFwaS5hcHBsaWNhdGlvbi5EZWxldGVBcHBsaWNhdGlvblJlc3BvbnNlIgBCGFoWeWV5aW5nL2FwaS9hcHBsaWNhdGlvbmIGcHJvdG8z", [file_yeying_api_common_message, file_yeying_api_common_code]);

/**
 * @generated from message yeying.api.application.SearchApplicationRequest
 */
export type SearchApplicationRequest = Message<"yeying.api.application.SearchApplicationRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.SearchApplicationRequestBody body = 2;
   */
  body?: SearchApplicationRequestBody;
};

/**
 * Describes the message yeying.api.application.SearchApplicationRequest.
 * Use `create(SearchApplicationRequestSchema)` to create a new message.
 */
export const SearchApplicationRequestSchema: GenMessage<SearchApplicationRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 0);

/**
 * @generated from message yeying.api.application.SearchApplicationRequestBody
 */
export type SearchApplicationRequestBody = Message<"yeying.api.application.SearchApplicationRequestBody"> & {
  /**
   * @generated from field: yeying.api.application.SearchCondition condition = 1;
   */
  condition?: SearchCondition;

  /**
   * @generated from field: yeying.api.common.RequestPage page = 2;
   */
  page?: RequestPage;
};

/**
 * Describes the message yeying.api.application.SearchApplicationRequestBody.
 * Use `create(SearchApplicationRequestBodySchema)` to create a new message.
 */
export const SearchApplicationRequestBodySchema: GenMessage<SearchApplicationRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 1);

/**
 * @generated from message yeying.api.application.SearchCondition
 */
export type SearchCondition = Message<"yeying.api.application.SearchCondition"> & {
  /**
   * @generated from field: yeying.api.common.ApplicationCodeEnum code = 1;
   */
  code: ApplicationCodeEnum;

  /**
   * @generated from field: yeying.api.common.ApplicationStatusEnum status = 2;
   */
  status: ApplicationStatusEnum;

  /**
   * @generated from field: string owner = 3;
   */
  owner: string;
};

/**
 * Describes the message yeying.api.application.SearchCondition.
 * Use `create(SearchConditionSchema)` to create a new message.
 */
export const SearchConditionSchema: GenMessage<SearchCondition> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 2);

/**
 * @generated from message yeying.api.application.SearchApplicationResponse
 */
export type SearchApplicationResponse = Message<"yeying.api.application.SearchApplicationResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.SearchApplicationResponseBody body = 2;
   */
  body?: SearchApplicationResponseBody;
};

/**
 * Describes the message yeying.api.application.SearchApplicationResponse.
 * Use `create(SearchApplicationResponseSchema)` to create a new message.
 */
export const SearchApplicationResponseSchema: GenMessage<SearchApplicationResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 3);

/**
 * @generated from message yeying.api.application.SearchApplicationResponseBody
 */
export type SearchApplicationResponseBody = Message<"yeying.api.application.SearchApplicationResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * @generated from field: repeated yeying.api.application.ApplicationMetadata applications = 2;
   */
  applications: ApplicationMetadata[];

  /**
   * @generated from field: yeying.api.common.ResponsePage page = 3;
   */
  page?: ResponsePage;
};

/**
 * Describes the message yeying.api.application.SearchApplicationResponseBody.
 * Use `create(SearchApplicationResponseBodySchema)` to create a new message.
 */
export const SearchApplicationResponseBodySchema: GenMessage<SearchApplicationResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 4);

/**
 * @generated from message yeying.api.application.CreateApplicationRequest
 */
export type CreateApplicationRequest = Message<"yeying.api.application.CreateApplicationRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.CreateApplicationRequestBody body = 2;
   */
  body?: CreateApplicationRequestBody;
};

/**
 * Describes the message yeying.api.application.CreateApplicationRequest.
 * Use `create(CreateApplicationRequestSchema)` to create a new message.
 */
export const CreateApplicationRequestSchema: GenMessage<CreateApplicationRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 5);

/**
 * @generated from message yeying.api.application.CreateApplicationRequestBody
 */
export type CreateApplicationRequestBody = Message<"yeying.api.application.CreateApplicationRequestBody"> & {
  /**
   * @generated from field: yeying.api.application.ApplicationMetadata application = 1;
   */
  application?: ApplicationMetadata;
};

/**
 * Describes the message yeying.api.application.CreateApplicationRequestBody.
 * Use `create(CreateApplicationRequestBodySchema)` to create a new message.
 */
export const CreateApplicationRequestBodySchema: GenMessage<CreateApplicationRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 6);

/**
 * @generated from message yeying.api.application.CreateApplicationResponse
 */
export type CreateApplicationResponse = Message<"yeying.api.application.CreateApplicationResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.CreateApplicationResponseBody body = 2;
   */
  body?: CreateApplicationResponseBody;
};

/**
 * Describes the message yeying.api.application.CreateApplicationResponse.
 * Use `create(CreateApplicationResponseSchema)` to create a new message.
 */
export const CreateApplicationResponseSchema: GenMessage<CreateApplicationResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 7);

/**
 * @generated from message yeying.api.application.CreateApplicationResponseBody
 */
export type CreateApplicationResponseBody = Message<"yeying.api.application.CreateApplicationResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.application.CreateApplicationResponseBody.
 * Use `create(CreateApplicationResponseBodySchema)` to create a new message.
 */
export const CreateApplicationResponseBodySchema: GenMessage<CreateApplicationResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 8);

/**
 * @generated from message yeying.api.application.ApplicationDetailRequest
 */
export type ApplicationDetailRequest = Message<"yeying.api.application.ApplicationDetailRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.ApplicationDetailRequestBody body = 2;
   */
  body?: ApplicationDetailRequestBody;
};

/**
 * Describes the message yeying.api.application.ApplicationDetailRequest.
 * Use `create(ApplicationDetailRequestSchema)` to create a new message.
 */
export const ApplicationDetailRequestSchema: GenMessage<ApplicationDetailRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 9);

/**
 * @generated from message yeying.api.application.ApplicationDetailRequestBody
 */
export type ApplicationDetailRequestBody = Message<"yeying.api.application.ApplicationDetailRequestBody"> & {
  /**
   * @generated from field: string did = 1;
   */
  did: string;

  /**
   * @generated from field: uint32 version = 2;
   */
  version: number;
};

/**
 * Describes the message yeying.api.application.ApplicationDetailRequestBody.
 * Use `create(ApplicationDetailRequestBodySchema)` to create a new message.
 */
export const ApplicationDetailRequestBodySchema: GenMessage<ApplicationDetailRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 10);

/**
 * @generated from message yeying.api.application.ApplicationDetailResponse
 */
export type ApplicationDetailResponse = Message<"yeying.api.application.ApplicationDetailResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.ApplicationDetailResponseBody body = 2;
   */
  body?: ApplicationDetailResponseBody;
};

/**
 * Describes the message yeying.api.application.ApplicationDetailResponse.
 * Use `create(ApplicationDetailResponseSchema)` to create a new message.
 */
export const ApplicationDetailResponseSchema: GenMessage<ApplicationDetailResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 11);

/**
 * @generated from message yeying.api.application.ApplicationDetailResponseBody
 */
export type ApplicationDetailResponseBody = Message<"yeying.api.application.ApplicationDetailResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * @generated from field: yeying.api.common.ApplicationStatusEnum appStatus = 3;
   */
  appStatus: ApplicationStatusEnum;

  /**
   * @generated from field: yeying.api.application.ApplicationMetadata application = 2;
   */
  application?: ApplicationMetadata;
};

/**
 * Describes the message yeying.api.application.ApplicationDetailResponseBody.
 * Use `create(ApplicationDetailResponseBodySchema)` to create a new message.
 */
export const ApplicationDetailResponseBodySchema: GenMessage<ApplicationDetailResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 12);

/**
 * @generated from message yeying.api.application.OfflineApplicationRequest
 */
export type OfflineApplicationRequest = Message<"yeying.api.application.OfflineApplicationRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.OfflineApplicationRequestBody body = 2;
   */
  body?: OfflineApplicationRequestBody;
};

/**
 * Describes the message yeying.api.application.OfflineApplicationRequest.
 * Use `create(OfflineApplicationRequestSchema)` to create a new message.
 */
export const OfflineApplicationRequestSchema: GenMessage<OfflineApplicationRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 13);

/**
 * @generated from message yeying.api.application.OfflineApplicationRequestBody
 */
export type OfflineApplicationRequestBody = Message<"yeying.api.application.OfflineApplicationRequestBody"> & {
  /**
   * @generated from field: string did = 1;
   */
  did: string;

  /**
   * @generated from field: uint32 version = 2;
   */
  version: number;
};

/**
 * Describes the message yeying.api.application.OfflineApplicationRequestBody.
 * Use `create(OfflineApplicationRequestBodySchema)` to create a new message.
 */
export const OfflineApplicationRequestBodySchema: GenMessage<OfflineApplicationRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 14);

/**
 * @generated from message yeying.api.application.OfflineApplicationResponse
 */
export type OfflineApplicationResponse = Message<"yeying.api.application.OfflineApplicationResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.OfflineApplicationResponseBody body = 2;
   */
  body?: OfflineApplicationResponseBody;
};

/**
 * Describes the message yeying.api.application.OfflineApplicationResponse.
 * Use `create(OfflineApplicationResponseSchema)` to create a new message.
 */
export const OfflineApplicationResponseSchema: GenMessage<OfflineApplicationResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 15);

/**
 * @generated from message yeying.api.application.OfflineApplicationResponseBody
 */
export type OfflineApplicationResponseBody = Message<"yeying.api.application.OfflineApplicationResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.application.OfflineApplicationResponseBody.
 * Use `create(OfflineApplicationResponseBodySchema)` to create a new message.
 */
export const OfflineApplicationResponseBodySchema: GenMessage<OfflineApplicationResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 16);

/**
 * @generated from message yeying.api.application.OnlineApplicationRequest
 */
export type OnlineApplicationRequest = Message<"yeying.api.application.OnlineApplicationRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.OnlineApplicationRequestBody body = 2;
   */
  body?: OnlineApplicationRequestBody;
};

/**
 * Describes the message yeying.api.application.OnlineApplicationRequest.
 * Use `create(OnlineApplicationRequestSchema)` to create a new message.
 */
export const OnlineApplicationRequestSchema: GenMessage<OnlineApplicationRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 17);

/**
 * @generated from message yeying.api.application.OnlineApplicationRequestBody
 */
export type OnlineApplicationRequestBody = Message<"yeying.api.application.OnlineApplicationRequestBody"> & {
  /**
   * @generated from field: string did = 1;
   */
  did: string;

  /**
   * @generated from field: uint32 version = 2;
   */
  version: number;
};

/**
 * Describes the message yeying.api.application.OnlineApplicationRequestBody.
 * Use `create(OnlineApplicationRequestBodySchema)` to create a new message.
 */
export const OnlineApplicationRequestBodySchema: GenMessage<OnlineApplicationRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 18);

/**
 * @generated from message yeying.api.application.OnlineApplicationResponse
 */
export type OnlineApplicationResponse = Message<"yeying.api.application.OnlineApplicationResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.OnlineApplicationResponseBody body = 2;
   */
  body?: OnlineApplicationResponseBody;
};

/**
 * Describes the message yeying.api.application.OnlineApplicationResponse.
 * Use `create(OnlineApplicationResponseSchema)` to create a new message.
 */
export const OnlineApplicationResponseSchema: GenMessage<OnlineApplicationResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 19);

/**
 * @generated from message yeying.api.application.OnlineApplicationResponseBody
 */
export type OnlineApplicationResponseBody = Message<"yeying.api.application.OnlineApplicationResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.application.OnlineApplicationResponseBody.
 * Use `create(OnlineApplicationResponseBodySchema)` to create a new message.
 */
export const OnlineApplicationResponseBodySchema: GenMessage<OnlineApplicationResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 20);

/**
 * @generated from message yeying.api.application.ApplicationExtend
 */
export type ApplicationExtend = Message<"yeying.api.application.ApplicationExtend"> & {
  /**
   * 审批意见 
   *
   * @generated from field: repeated yeying.api.application.ApplicationComment comments = 1;
   */
  comments: ApplicationComment[];
};

/**
 * Describes the message yeying.api.application.ApplicationExtend.
 * Use `create(ApplicationExtendSchema)` to create a new message.
 */
export const ApplicationExtendSchema: GenMessage<ApplicationExtend> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 21);

/**
 * @generated from message yeying.api.application.ApplicationComment
 */
export type ApplicationComment = Message<"yeying.api.application.ApplicationComment"> & {
  /**
   * 审批人 
   *
   * @generated from field: string auditor = 1;
   */
  auditor: string;

  /**
   * 审批意见 
   *
   * @generated from field: string comment = 2;
   */
  comment: string;

  /**
   * 是否通过 
   *
   * @generated from field: bool passed = 3;
   */
  passed: boolean;

  /**
   * 审批人签名 
   *
   * @generated from field: string signature = 4;
   */
  signature: string;
};

/**
 * Describes the message yeying.api.application.ApplicationComment.
 * Use `create(ApplicationCommentSchema)` to create a new message.
 */
export const ApplicationCommentSchema: GenMessage<ApplicationComment> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 22);

/**
 * @generated from message yeying.api.application.ApplicationMetadata
 */
export type ApplicationMetadata = Message<"yeying.api.application.ApplicationMetadata"> & {
  /**
   * 应用所有者 
   *
   * @generated from field: string owner = 1;
   */
  owner: string;

  /**
   * 身份所在网络 
   *
   * @generated from field: string network = 2;
   */
  network: string;

  /**
   * 身份地址 
   *
   * @generated from field: string address = 3;
   */
  address: string;

  /**
   * 应用身份 
   *
   * @generated from field: string did = 4;
   */
  did: string;

  /**
   * 应用版本 
   *
   * @generated from field: uint32 version = 5;
   */
  version: number;

  /**
   * 应用哈希 
   *
   * @generated from field: string hash = 6;
   */
  hash: string;

  /**
   * 应用名称 
   *
   * @generated from field: string name = 7;
   */
  name: string;

  /**
   * 应用编号 
   *
   * @generated from field: yeying.api.common.ApplicationCodeEnum code = 8;
   */
  code: ApplicationCodeEnum;

  /**
   * 应用描述 
   *
   * @generated from field: string description = 9;
   */
  description: string;

  /**
   * 访问路径 
   *
   * @generated from field: string location = 10;
   */
  location: string;

  /**
   * 应用依赖的服务编码，用,隔开 
   *
   * @generated from field: string serviceCodes = 11;
   */
  serviceCodes: string;

  /**
   * 应用头像 
   *
   * @generated from field: string avatar = 12;
   */
  avatar: string;

  /**
   * 应用扩展信息 
   *
   * @generated from field: string extend = 13;
   */
  extend: string;

  /**
   * 应用创建时间 
   *
   * @generated from field: string createdAt = 14;
   */
  createdAt: string;

  /**
   * 应用更新时间 
   *
   * @generated from field: string updatedAt = 15;
   */
  updatedAt: string;

  /**
   * 签名
   *
   * @generated from field: string signature = 16;
   */
  signature: string;
};

/**
 * Describes the message yeying.api.application.ApplicationMetadata.
 * Use `create(ApplicationMetadataSchema)` to create a new message.
 */
export const ApplicationMetadataSchema: GenMessage<ApplicationMetadata> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 23);

/**
 * @generated from message yeying.api.application.DeleteApplicationRequest
 */
export type DeleteApplicationRequest = Message<"yeying.api.application.DeleteApplicationRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.DeleteApplicationRequestBody body = 2;
   */
  body?: DeleteApplicationRequestBody;
};

/**
 * Describes the message yeying.api.application.DeleteApplicationRequest.
 * Use `create(DeleteApplicationRequestSchema)` to create a new message.
 */
export const DeleteApplicationRequestSchema: GenMessage<DeleteApplicationRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 24);

/**
 * @generated from message yeying.api.application.DeleteApplicationRequestBody
 */
export type DeleteApplicationRequestBody = Message<"yeying.api.application.DeleteApplicationRequestBody"> & {
  /**
   * @generated from field: string did = 1;
   */
  did: string;

  /**
   * @generated from field: uint32 version = 2;
   */
  version: number;
};

/**
 * Describes the message yeying.api.application.DeleteApplicationRequestBody.
 * Use `create(DeleteApplicationRequestBodySchema)` to create a new message.
 */
export const DeleteApplicationRequestBodySchema: GenMessage<DeleteApplicationRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 25);

/**
 * @generated from message yeying.api.application.DeleteApplicationResponse
 */
export type DeleteApplicationResponse = Message<"yeying.api.application.DeleteApplicationResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.DeleteApplicationResponseBody body = 2;
   */
  body?: DeleteApplicationResponseBody;
};

/**
 * Describes the message yeying.api.application.DeleteApplicationResponse.
 * Use `create(DeleteApplicationResponseSchema)` to create a new message.
 */
export const DeleteApplicationResponseSchema: GenMessage<DeleteApplicationResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 26);

/**
 * @generated from message yeying.api.application.DeleteApplicationResponseBody
 */
export type DeleteApplicationResponseBody = Message<"yeying.api.application.DeleteApplicationResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.application.DeleteApplicationResponseBody.
 * Use `create(DeleteApplicationResponseBodySchema)` to create a new message.
 */
export const DeleteApplicationResponseBodySchema: GenMessage<DeleteApplicationResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 27);

/**
 * @generated from message yeying.api.application.AuditApplicationRequest
 */
export type AuditApplicationRequest = Message<"yeying.api.application.AuditApplicationRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.application.AuditApplicationRequestBody body = 2;
   */
  body?: AuditApplicationRequestBody;
};

/**
 * Describes the message yeying.api.application.AuditApplicationRequest.
 * Use `create(AuditApplicationRequestSchema)` to create a new message.
 */
export const AuditApplicationRequestSchema: GenMessage<AuditApplicationRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 28);

/**
 * @generated from message yeying.api.application.AuditApplicationRequestBody
 */
export type AuditApplicationRequestBody = Message<"yeying.api.application.AuditApplicationRequestBody"> & {
  /**
   * @generated from field: yeying.api.application.ApplicationComment comment = 1;
   */
  comment?: ApplicationComment;
};

/**
 * Describes the message yeying.api.application.AuditApplicationRequestBody.
 * Use `create(AuditApplicationRequestBodySchema)` to create a new message.
 */
export const AuditApplicationRequestBodySchema: GenMessage<AuditApplicationRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 29);

/**
 * @generated from message yeying.api.application.AuditApplicationResponse
 */
export type AuditApplicationResponse = Message<"yeying.api.application.AuditApplicationResponse"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.application.AuditApplicationResponse.
 * Use `create(AuditApplicationResponseSchema)` to create a new message.
 */
export const AuditApplicationResponseSchema: GenMessage<AuditApplicationResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_application_application, 30);

/**
 * *
 * 节点自带的应用和后面发布的应用，夜莺社区提供一个节点和一组组网协议。当然其他的社团或者个人，也可以基于源代码，发布自己的节点和一组组网协议，当然
 * 也可以加入到夜莺社区的网络。
 *
 * @generated from service yeying.api.application.Application
 */
export const Application: GenService<{
  /**
   * 搜索应用 
   *
   * @generated from rpc yeying.api.application.Application.Search
   */
  search: {
    methodKind: "unary";
    input: typeof SearchApplicationRequestSchema;
    output: typeof SearchApplicationResponseSchema;
  },
  /**
   * 应用审计 
   *
   * @generated from rpc yeying.api.application.Application.Audit
   */
  audit: {
    methodKind: "unary";
    input: typeof AuditApplicationRequestSchema;
    output: typeof AuditApplicationResponseSchema;
  },
  /**
   * 创建应用 
   *
   * @generated from rpc yeying.api.application.Application.Create
   */
  create: {
    methodKind: "unary";
    input: typeof CreateApplicationRequestSchema;
    output: typeof CreateApplicationResponseSchema;
  },
  /**
   * 应用详情 
   *
   * @generated from rpc yeying.api.application.Application.Detail
   */
  detail: {
    methodKind: "unary";
    input: typeof ApplicationDetailRequestSchema;
    output: typeof ApplicationDetailResponseSchema;
  },
  /**
   * 下架应用 
   *
   * @generated from rpc yeying.api.application.Application.Offline
   */
  offline: {
    methodKind: "unary";
    input: typeof OfflineApplicationRequestSchema;
    output: typeof OfflineApplicationResponseSchema;
  },
  /**
   * 上架应用 
   *
   * @generated from rpc yeying.api.application.Application.Online
   */
  online: {
    methodKind: "unary";
    input: typeof OnlineApplicationRequestSchema;
    output: typeof OnlineApplicationResponseSchema;
  },
  /**
   * 删除应用 
   *
   * @generated from rpc yeying.api.application.Application.Delete
   */
  delete: {
    methodKind: "unary";
    input: typeof DeleteApplicationRequestSchema;
    output: typeof DeleteApplicationResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_yeying_api_application_application, 0);

