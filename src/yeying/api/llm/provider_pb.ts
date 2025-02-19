// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file yeying/api/llm/provider.proto (package yeying.api.llm, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { MessageHeader, ResponseStatus } from "../common/message_pb";
import { file_yeying_api_common_message } from "../common/message_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file yeying/api/llm/provider.proto.
 */
export const file_yeying_api_llm_provider: GenFile = /*@__PURE__*/
  fileDesc("Ch15ZXlpbmcvYXBpL2xsbS9wcm92aWRlci5wcm90bxIOeWV5aW5nLmFwaS5sbG0iZwoQUHJvdmlkZXJNZXRhZGF0YRIMCgRuYW1lGAEgASgJEg0KBWxhYmVsGAIgASgJEjYKD3N1cHBvcnRlZE1vZGVscxgDIAMoDjIdLnlleWluZy5hcGkubGxtLk1vZGVsVHlwZUVudW0ifgoNTW9kZWxNZXRhZGF0YRIMCgRuYW1lGAEgASgJEisKBHR5cGUYAiABKA4yHS55ZXlpbmcuYXBpLmxsbS5Nb2RlbFR5cGVFbnVtEjIKCGZlYXR1cmVzGAMgAygOMiAueWV5aW5nLmFwaS5sbG0uTW9kZWxGZWF0dXJlRW51bSKCAQoVRGVsZXRlUHJvdmlkZXJSZXF1ZXN0EjAKBmhlYWRlchgBIAEoCzIgLnlleWluZy5hcGkuY29tbW9uLk1lc3NhZ2VIZWFkZXISNwoEYm9keRgCIAEoCzIpLnlleWluZy5hcGkubGxtLkRlbGV0ZVByb3ZpZGVyUmVxdWVzdEJvZHkifgoTTGlzdFByb3ZpZGVyUmVxdWVzdBIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjUKBGJvZHkYAiABKAsyJy55ZXlpbmcuYXBpLmxsbS5MaXN0UHJvdmlkZXJSZXF1ZXN0Qm9keSKEAQoWRGVsZXRlUHJvdmlkZXJSZXNwb25zZRIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjgKBGJvZHkYAiABKAsyKi55ZXlpbmcuYXBpLmxsbS5EZWxldGVQcm92aWRlclJlc3BvbnNlQm9keSIqChlEZWxldGVQcm92aWRlclJlcXVlc3RCb2R5Eg0KBWxsbUlkGAEgASgJIk8KGkRlbGV0ZVByb3ZpZGVyUmVzcG9uc2VCb2R5EjEKBnN0YXR1cxgBIAEoCzIhLnlleWluZy5hcGkuY29tbW9uLlJlc3BvbnNlU3RhdHVzIoABChRMaXN0UHJvdmlkZXJSZXNwb25zZRIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjYKBGJvZHkYAiABKAsyKC55ZXlpbmcuYXBpLmxsbS5MaXN0UHJvdmlkZXJSZXNwb25zZUJvZHkieAoYTGlzdFByb3ZpZGVyUmVzcG9uc2VCb2R5EjEKBnN0YXR1cxgBIAEoCzIhLnlleWluZy5hcGkuY29tbW9uLlJlc3BvbnNlU3RhdHVzEikKBGxsbXMYAiADKAsyGy55ZXlpbmcuYXBpLmxsbS5MbG1NZXRhZGF0YSIoChdMaXN0UHJvdmlkZXJSZXF1ZXN0Qm9keRINCgVsbG1JZBgBIAEoCSJ8ChJBZGRQcm92aWRlclJlcXVlc3QSMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchI0CgRib2R5GAIgASgLMiYueWV5aW5nLmFwaS5sbG0uQWRkUHJvdmlkZXJSZXF1ZXN0Qm9keSKjAQoWQWRkUHJvdmlkZXJSZXF1ZXN0Qm9keRINCgVsbG1JZBgBIAEoCRIMCgRuYW1lGAIgASgJEikKBGNvZGUYAyABKA4yGy55ZXlpbmcuYXBpLmxsbS5MbG1Db2RlRW51bRILCgNrZXkYBCABKAkSDgoGZXh0ZW5kGAUgASgJEhEKCWNyZWF0ZWRBdBgGIAEoCRIRCgl1cGRhdGVkQXQYByABKAkifgoTQWRkUHJvdmlkZXJSZXNwb25zZRIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjUKBGJvZHkYAiABKAsyJy55ZXlpbmcuYXBpLmxsbS5BZGRQcm92aWRlclJlc3BvbnNlQm9keSJMChdBZGRQcm92aWRlclJlc3BvbnNlQm9keRIxCgZzdGF0dXMYASABKAsyIS55ZXlpbmcuYXBpLmNvbW1vbi5SZXNwb25zZVN0YXR1cyLJAQoLTGxtTWV0YWRhdGESDQoFb3duZXIYASABKAkSDQoFbGxtSWQYAiABKAkSDAoEbmFtZRgDIAEoCRIpCgRjb2RlGAQgASgOMhsueWV5aW5nLmFwaS5sbG0uTGxtQ29kZUVudW0SLQoGc3RhdHVzGAUgASgOMh0ueWV5aW5nLmFwaS5sbG0uTGxtU3RhdHVzRW51bRIOCgZleHRlbmQYBiABKAkSEQoJY3JlYXRlZEF0GAcgASgJEhEKCXVwZGF0ZWRBdBgIIAEoCSrEAQoNTW9kZWxUeXBlRW51bRIWChJNT0RFTF9UWVBFX1VOS05PV04QABISCg5NT0RFTF9UWVBFX0xMTRABEh0KGU1PREVMX1RZUEVfVEVYVF9FTUJFRERJTkcQAhIVChFNT0RFTF9UWVBFX1JFUkFOSxADEhoKFk1PREVMX1RZUEVfU1BFRUNIMlRFWFQQBBIaChZNT0RFTF9UWVBFX1RFWFQyU1BFRUNIEAUSGQoVTU9ERUxfVFlQRV9NT0RFUkFUSU9OEAYqsQEKEE1vZGVsRmVhdHVyZUVudW0SHwobTU9ERUxfRkVBVFVSRV9BR0VOVF9USE9VR0hUEAASGAoUTU9ERUxfRkVBVFVSRV9WSVNJT04QAhIbChdNT0RFTF9GRUFUVVJFX1RPT0xfQ0FMTBADEiEKHU1PREVMX0ZFQVRVUkVfTVVMVElfVE9PTF9DQUxMEAQSIgoeTU9ERUxfRkVBVFVSRV9TVFJFQU1fVE9PTF9DQUxMEAUqdwoPTWVzc2FnZVJvbGVFbnVtEhgKFE1FU1NBR0VfUk9MRV9VTktOT1dOEAASGgoWTUVTU0FHRV9ST0xFX0FTU0lTVEFOVBABEhUKEU1FU1NBR0VfUk9MRV9VU0VSEAISFwoTTUVTU0FHRV9ST0xFX1NZU1RFTRADKmMKC0xsbUNvZGVFbnVtEhQKEExMTV9DT0RFX1VOS05PV04QABITCg9MTE1fQ09ERV9PUEVOQUkQARITCg9MTE1fQ09ERV9HRU1JTkkQAhIUChBMTE1fQ09ERV9aSElQVUFJEAMqXQoNTGxtU3RhdHVzRW51bRIWChJMTE1fU1RBVFVTX1VOS05PV04QABIaChZMTE1fU1RBVFVTX0RFQUNUSVZBVEVEEAESGAoUTExNX1NUQVRVU19BQ1RJVkFURUQQAjKMAgoIUHJvdmlkZXISUAoDQWRkEiIueWV5aW5nLmFwaS5sbG0uQWRkUHJvdmlkZXJSZXF1ZXN0GiMueWV5aW5nLmFwaS5sbG0uQWRkUHJvdmlkZXJSZXNwb25zZSIAElkKBkRlbGV0ZRIlLnlleWluZy5hcGkubGxtLkRlbGV0ZVByb3ZpZGVyUmVxdWVzdBomLnlleWluZy5hcGkubGxtLkRlbGV0ZVByb3ZpZGVyUmVzcG9uc2UiABJTCgRMaXN0EiMueWV5aW5nLmFwaS5sbG0uTGlzdFByb3ZpZGVyUmVxdWVzdBokLnlleWluZy5hcGkubGxtLkxpc3RQcm92aWRlclJlc3BvbnNlIgBCEFoOeWV5aW5nL2FwaS9sbG1iBnByb3RvMw", [file_yeying_api_common_message]);

/**
 * @generated from message yeying.api.llm.ProviderMetadata
 */
export type ProviderMetadata = Message<"yeying.api.llm.ProviderMetadata"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string label = 2;
   */
  label: string;

  /**
   * @generated from field: repeated yeying.api.llm.ModelTypeEnum supportedModels = 3;
   */
  supportedModels: ModelTypeEnum[];
};

/**
 * Describes the message yeying.api.llm.ProviderMetadata.
 * Use `create(ProviderMetadataSchema)` to create a new message.
 */
export const ProviderMetadataSchema: GenMessage<ProviderMetadata> = /*@__PURE__*/
  messageDesc(file_yeying_api_llm_provider, 0);

/**
 * @generated from message yeying.api.llm.ModelMetadata
 */
export type ModelMetadata = Message<"yeying.api.llm.ModelMetadata"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: yeying.api.llm.ModelTypeEnum type = 2;
   */
  type: ModelTypeEnum;

  /**
   * @generated from field: repeated yeying.api.llm.ModelFeatureEnum features = 3;
   */
  features: ModelFeatureEnum[];
};

/**
 * Describes the message yeying.api.llm.ModelMetadata.
 * Use `create(ModelMetadataSchema)` to create a new message.
 */
export const ModelMetadataSchema: GenMessage<ModelMetadata> = /*@__PURE__*/
  messageDesc(file_yeying_api_llm_provider, 1);

/**
 * @generated from message yeying.api.llm.DeleteProviderRequest
 */
export type DeleteProviderRequest = Message<"yeying.api.llm.DeleteProviderRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.llm.DeleteProviderRequestBody body = 2;
   */
  body?: DeleteProviderRequestBody;
};

/**
 * Describes the message yeying.api.llm.DeleteProviderRequest.
 * Use `create(DeleteProviderRequestSchema)` to create a new message.
 */
export const DeleteProviderRequestSchema: GenMessage<DeleteProviderRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_llm_provider, 2);

/**
 * @generated from message yeying.api.llm.ListProviderRequest
 */
export type ListProviderRequest = Message<"yeying.api.llm.ListProviderRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.llm.ListProviderRequestBody body = 2;
   */
  body?: ListProviderRequestBody;
};

/**
 * Describes the message yeying.api.llm.ListProviderRequest.
 * Use `create(ListProviderRequestSchema)` to create a new message.
 */
export const ListProviderRequestSchema: GenMessage<ListProviderRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_llm_provider, 3);

/**
 * @generated from message yeying.api.llm.DeleteProviderResponse
 */
export type DeleteProviderResponse = Message<"yeying.api.llm.DeleteProviderResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.llm.DeleteProviderResponseBody body = 2;
   */
  body?: DeleteProviderResponseBody;
};

/**
 * Describes the message yeying.api.llm.DeleteProviderResponse.
 * Use `create(DeleteProviderResponseSchema)` to create a new message.
 */
export const DeleteProviderResponseSchema: GenMessage<DeleteProviderResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_llm_provider, 4);

/**
 * @generated from message yeying.api.llm.DeleteProviderRequestBody
 */
export type DeleteProviderRequestBody = Message<"yeying.api.llm.DeleteProviderRequestBody"> & {
  /**
   * @generated from field: string llmId = 1;
   */
  llmId: string;
};

/**
 * Describes the message yeying.api.llm.DeleteProviderRequestBody.
 * Use `create(DeleteProviderRequestBodySchema)` to create a new message.
 */
export const DeleteProviderRequestBodySchema: GenMessage<DeleteProviderRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_llm_provider, 5);

/**
 * @generated from message yeying.api.llm.DeleteProviderResponseBody
 */
export type DeleteProviderResponseBody = Message<"yeying.api.llm.DeleteProviderResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.llm.DeleteProviderResponseBody.
 * Use `create(DeleteProviderResponseBodySchema)` to create a new message.
 */
export const DeleteProviderResponseBodySchema: GenMessage<DeleteProviderResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_llm_provider, 6);

/**
 * @generated from message yeying.api.llm.ListProviderResponse
 */
export type ListProviderResponse = Message<"yeying.api.llm.ListProviderResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.llm.ListProviderResponseBody body = 2;
   */
  body?: ListProviderResponseBody;
};

/**
 * Describes the message yeying.api.llm.ListProviderResponse.
 * Use `create(ListProviderResponseSchema)` to create a new message.
 */
export const ListProviderResponseSchema: GenMessage<ListProviderResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_llm_provider, 7);

/**
 * @generated from message yeying.api.llm.ListProviderResponseBody
 */
export type ListProviderResponseBody = Message<"yeying.api.llm.ListProviderResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * @generated from field: repeated yeying.api.llm.LlmMetadata llms = 2;
   */
  llms: LlmMetadata[];
};

/**
 * Describes the message yeying.api.llm.ListProviderResponseBody.
 * Use `create(ListProviderResponseBodySchema)` to create a new message.
 */
export const ListProviderResponseBodySchema: GenMessage<ListProviderResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_llm_provider, 8);

/**
 * @generated from message yeying.api.llm.ListProviderRequestBody
 */
export type ListProviderRequestBody = Message<"yeying.api.llm.ListProviderRequestBody"> & {
  /**
   * @generated from field: string llmId = 1;
   */
  llmId: string;
};

/**
 * Describes the message yeying.api.llm.ListProviderRequestBody.
 * Use `create(ListProviderRequestBodySchema)` to create a new message.
 */
export const ListProviderRequestBodySchema: GenMessage<ListProviderRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_llm_provider, 9);

/**
 * @generated from message yeying.api.llm.AddProviderRequest
 */
export type AddProviderRequest = Message<"yeying.api.llm.AddProviderRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.llm.AddProviderRequestBody body = 2;
   */
  body?: AddProviderRequestBody;
};

/**
 * Describes the message yeying.api.llm.AddProviderRequest.
 * Use `create(AddProviderRequestSchema)` to create a new message.
 */
export const AddProviderRequestSchema: GenMessage<AddProviderRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_llm_provider, 10);

/**
 * @generated from message yeying.api.llm.AddProviderRequestBody
 */
export type AddProviderRequestBody = Message<"yeying.api.llm.AddProviderRequestBody"> & {
  /**
   * @generated from field: string llmId = 1;
   */
  llmId: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: yeying.api.llm.LlmCodeEnum code = 3;
   */
  code: LlmCodeEnum;

  /**
   * @generated from field: string key = 4;
   */
  key: string;

  /**
   * @generated from field: string extend = 5;
   */
  extend: string;

  /**
   * @generated from field: string createdAt = 6;
   */
  createdAt: string;

  /**
   * @generated from field: string updatedAt = 7;
   */
  updatedAt: string;
};

/**
 * Describes the message yeying.api.llm.AddProviderRequestBody.
 * Use `create(AddProviderRequestBodySchema)` to create a new message.
 */
export const AddProviderRequestBodySchema: GenMessage<AddProviderRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_llm_provider, 11);

/**
 * @generated from message yeying.api.llm.AddProviderResponse
 */
export type AddProviderResponse = Message<"yeying.api.llm.AddProviderResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.llm.AddProviderResponseBody body = 2;
   */
  body?: AddProviderResponseBody;
};

/**
 * Describes the message yeying.api.llm.AddProviderResponse.
 * Use `create(AddProviderResponseSchema)` to create a new message.
 */
export const AddProviderResponseSchema: GenMessage<AddProviderResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_llm_provider, 12);

/**
 * @generated from message yeying.api.llm.AddProviderResponseBody
 */
export type AddProviderResponseBody = Message<"yeying.api.llm.AddProviderResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.llm.AddProviderResponseBody.
 * Use `create(AddProviderResponseBodySchema)` to create a new message.
 */
export const AddProviderResponseBodySchema: GenMessage<AddProviderResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_llm_provider, 13);

/**
 * @generated from message yeying.api.llm.LlmMetadata
 */
export type LlmMetadata = Message<"yeying.api.llm.LlmMetadata"> & {
  /**
   * @generated from field: string owner = 1;
   */
  owner: string;

  /**
   * @generated from field: string llmId = 2;
   */
  llmId: string;

  /**
   * @generated from field: string name = 3;
   */
  name: string;

  /**
   * @generated from field: yeying.api.llm.LlmCodeEnum code = 4;
   */
  code: LlmCodeEnum;

  /**
   * @generated from field: yeying.api.llm.LlmStatusEnum status = 5;
   */
  status: LlmStatusEnum;

  /**
   * @generated from field: string extend = 6;
   */
  extend: string;

  /**
   * @generated from field: string createdAt = 7;
   */
  createdAt: string;

  /**
   * @generated from field: string updatedAt = 8;
   */
  updatedAt: string;
};

/**
 * Describes the message yeying.api.llm.LlmMetadata.
 * Use `create(LlmMetadataSchema)` to create a new message.
 */
export const LlmMetadataSchema: GenMessage<LlmMetadata> = /*@__PURE__*/
  messageDesc(file_yeying_api_llm_provider, 14);

/**
 * @generated from enum yeying.api.llm.ModelTypeEnum
 */
export enum ModelTypeEnum {
  /**
   * @generated from enum value: MODEL_TYPE_UNKNOWN = 0;
   */
  MODEL_TYPE_UNKNOWN = 0,

  /**
   * 文本生成模型
   *
   * @generated from enum value: MODEL_TYPE_LLM = 1;
   */
  MODEL_TYPE_LLM = 1,

  /**
   * 文本 Embedding 模型
   *
   * @generated from enum value: MODEL_TYPE_TEXT_EMBEDDING = 2;
   */
  MODEL_TYPE_TEXT_EMBEDDING = 2,

  /**
   * Rerank 模型
   *
   * @generated from enum value: MODEL_TYPE_RERANK = 3;
   */
  MODEL_TYPE_RERANK = 3,

  /**
   * 语音转文字
   *
   * @generated from enum value: MODEL_TYPE_SPEECH2TEXT = 4;
   */
  MODEL_TYPE_SPEECH2TEXT = 4,

  /**
   * 文字转语音
   *
   * @generated from enum value: MODEL_TYPE_TEXT2SPEECH = 5;
   */
  MODEL_TYPE_TEXT2SPEECH = 5,

  /**
   * 审查
   *
   * @generated from enum value: MODEL_TYPE_MODERATION = 6;
   */
  MODEL_TYPE_MODERATION = 6,
}

/**
 * Describes the enum yeying.api.llm.ModelTypeEnum.
 */
export const ModelTypeEnumSchema: GenEnum<ModelTypeEnum> = /*@__PURE__*/
  enumDesc(file_yeying_api_llm_provider, 0);

/**
 * @generated from enum yeying.api.llm.ModelFeatureEnum
 */
export enum ModelFeatureEnum {
  /**
   * 推理，一般超过 70B 有思维链能力。
   *
   * @generated from enum value: MODEL_FEATURE_AGENT_THOUGHT = 0;
   */
  MODEL_FEATURE_AGENT_THOUGHT = 0,

  /**
   * 视觉，即：图像理解。
   *
   * @generated from enum value: MODEL_FEATURE_VISION = 2;
   */
  MODEL_FEATURE_VISION = 2,

  /**
   * 工具调用
   *
   * @generated from enum value: MODEL_FEATURE_TOOL_CALL = 3;
   */
  MODEL_FEATURE_TOOL_CALL = 3,

  /**
   * 多工具调用
   *
   * @generated from enum value: MODEL_FEATURE_MULTI_TOOL_CALL = 4;
   */
  MODEL_FEATURE_MULTI_TOOL_CALL = 4,

  /**
   * 流式工具调用
   *
   * @generated from enum value: MODEL_FEATURE_STREAM_TOOL_CALL = 5;
   */
  MODEL_FEATURE_STREAM_TOOL_CALL = 5,
}

/**
 * Describes the enum yeying.api.llm.ModelFeatureEnum.
 */
export const ModelFeatureEnumSchema: GenEnum<ModelFeatureEnum> = /*@__PURE__*/
  enumDesc(file_yeying_api_llm_provider, 1);

/**
 * 消息角色，在大模型进行推理时，涉及到多个系统组件的配合，有设定场景的，有理解意图的，有给出答案的等等。
 *
 * @generated from enum yeying.api.llm.MessageRoleEnum
 */
export enum MessageRoleEnum {
  /**
   * 未知编码，是一种占位符
   *
   * @generated from enum value: MESSAGE_ROLE_UNKNOWN = 0;
   */
  MESSAGE_ROLE_UNKNOWN = 0,

  /**
   * 对话系统的回复内容，模型将会根据前面的对话历史和用户的输入生成相应的回复
   *
   * @generated from enum value: MESSAGE_ROLE_ASSISTANT = 1;
   */
  MESSAGE_ROLE_ASSISTANT = 1,

  /**
   * 用于用户输入的对话内容，当用户想要与对话模型交互时
   *
   * @generated from enum value: MESSAGE_ROLE_USER = 2;
   */
  MESSAGE_ROLE_USER = 2,

  /**
   * 用于系统级别的提示和指导，比如问候、提示用户进行某项操作或介绍对话规则等
   *
   * @generated from enum value: MESSAGE_ROLE_SYSTEM = 3;
   */
  MESSAGE_ROLE_SYSTEM = 3,
}

/**
 * Describes the enum yeying.api.llm.MessageRoleEnum.
 */
export const MessageRoleEnumSchema: GenEnum<MessageRoleEnum> = /*@__PURE__*/
  enumDesc(file_yeying_api_llm_provider, 2);

/**
 * @generated from enum yeying.api.llm.LlmCodeEnum
 */
export enum LlmCodeEnum {
  /**
   * @generated from enum value: LLM_CODE_UNKNOWN = 0;
   */
  LLM_CODE_UNKNOWN = 0,

  /**
   * @generated from enum value: LLM_CODE_OPENAI = 1;
   */
  LLM_CODE_OPENAI = 1,

  /**
   * @generated from enum value: LLM_CODE_GEMINI = 2;
   */
  LLM_CODE_GEMINI = 2,

  /**
   * @generated from enum value: LLM_CODE_ZHIPUAI = 3;
   */
  LLM_CODE_ZHIPUAI = 3,
}

/**
 * Describes the enum yeying.api.llm.LlmCodeEnum.
 */
export const LlmCodeEnumSchema: GenEnum<LlmCodeEnum> = /*@__PURE__*/
  enumDesc(file_yeying_api_llm_provider, 3);

/**
 * @generated from enum yeying.api.llm.LlmStatusEnum
 */
export enum LlmStatusEnum {
  /**
   * 未知编码，是一种占位符
   *
   * @generated from enum value: LLM_STATUS_UNKNOWN = 0;
   */
  LLM_STATUS_UNKNOWN = 0,

  /**
   * 供应商未激活状态
   *
   * @generated from enum value: LLM_STATUS_DEACTIVATED = 1;
   */
  LLM_STATUS_DEACTIVATED = 1,

  /**
   * 供应商激活状态
   *
   * @generated from enum value: LLM_STATUS_ACTIVATED = 2;
   */
  LLM_STATUS_ACTIVATED = 2,
}

/**
 * Describes the enum yeying.api.llm.LlmStatusEnum.
 */
export const LlmStatusEnumSchema: GenEnum<LlmStatusEnum> = /*@__PURE__*/
  enumDesc(file_yeying_api_llm_provider, 4);

/**
 * @generated from service yeying.api.llm.Provider
 */
export const Provider: GenService<{
  /**
   * 添加供应商
   *
   * @generated from rpc yeying.api.llm.Provider.Add
   */
  add: {
    methodKind: "unary";
    input: typeof AddProviderRequestSchema;
    output: typeof AddProviderResponseSchema;
  },
  /**
   * 删除供应商
   *
   * @generated from rpc yeying.api.llm.Provider.Delete
   */
  delete: {
    methodKind: "unary";
    input: typeof DeleteProviderRequestSchema;
    output: typeof DeleteProviderResponseSchema;
  },
  /**
   * 获得供应商列表
   *
   * @generated from rpc yeying.api.llm.Provider.List
   */
  list: {
    methodKind: "unary";
    input: typeof ListProviderRequestSchema;
    output: typeof ListProviderResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_yeying_api_llm_provider, 0);

