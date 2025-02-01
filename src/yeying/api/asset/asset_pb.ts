// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file yeying/api/asset/asset.proto (package yeying.api.asset, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { MessageHeader, RequestPage, ResponseStatus } from "../common/message_pb";
import { file_yeying_api_common_message } from "../common/message_pb";
import type { DigitalFormatEnum } from "../common/code_pb";
import { file_yeying_api_common_code } from "../common/code_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file yeying/api/asset/asset.proto.
 */
export const file_yeying_api_asset_asset: GenFile = /*@__PURE__*/
  fileDesc("Chx5ZXlpbmcvYXBpL2Fzc2V0L2Fzc2V0LnByb3RvEhB5ZXlpbmcuYXBpLmFzc2V0In4KElNlYXJjaEFzc2V0UmVxdWVzdBIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjYKBGJvZHkYAiABKAsyKC55ZXlpbmcuYXBpLmFzc2V0LlNlYXJjaEFzc2V0UmVxdWVzdEJvZHkigQEKFlNlYXJjaEFzc2V0UmVxdWVzdEJvZHkSOQoJY29uZGl0aW9uGAEgASgLMiYueWV5aW5nLmFwaS5hc3NldC5TZWFyY2hBc3NldENvbmRpdGlvbhIsCgRwYWdlGAIgASgLMh4ueWV5aW5nLmFwaS5jb21tb24uUmVxdWVzdFBhZ2UicAoUU2VhcmNoQXNzZXRDb25kaXRpb24SNAoGZm9ybWF0GAEgASgOMiQueWV5aW5nLmFwaS5jb21tb24uRGlnaXRhbEZvcm1hdEVudW0SEwoLY29udGVudEhhc2gYAiABKAkSDQoFdHJhc2gYAyABKAgigAEKE1NlYXJjaEFzc2V0UmVzcG9uc2USMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchI3CgRib2R5GAIgASgLMikueWV5aW5nLmFwaS5hc3NldC5TZWFyY2hBc3NldFJlc3BvbnNlQm9keSJ9ChdTZWFyY2hBc3NldFJlc3BvbnNlQm9keRIxCgZzdGF0dXMYASABKAsyIS55ZXlpbmcuYXBpLmNvbW1vbi5SZXNwb25zZVN0YXR1cxIvCgZhc3NldHMYAiADKAsyHy55ZXlpbmcuYXBpLmFzc2V0LkFzc2V0TWV0YWRhdGEiegoQU2lnbkFzc2V0UmVxdWVzdBIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjQKBGJvZHkYAiABKAsyJi55ZXlpbmcuYXBpLmFzc2V0LlNpZ25Bc3NldFJlcXVlc3RCb2R5IkYKFFNpZ25Bc3NldFJlcXVlc3RCb2R5Ei4KBWFzc2V0GAEgASgLMh8ueWV5aW5nLmFwaS5hc3NldC5Bc3NldE1ldGFkYXRhInwKEVNpZ25Bc3NldFJlc3BvbnNlEjAKBmhlYWRlchgBIAEoCzIgLnlleWluZy5hcGkuY29tbW9uLk1lc3NhZ2VIZWFkZXISNQoEYm9keRgCIAEoCzInLnlleWluZy5hcGkuYXNzZXQuU2lnbkFzc2V0UmVzcG9uc2VCb2R5IkoKFVNpZ25Bc3NldFJlc3BvbnNlQm9keRIxCgZzdGF0dXMYASABKAsyIS55ZXlpbmcuYXBpLmNvbW1vbi5SZXNwb25zZVN0YXR1cyKAAQoTQXNzZXRWZXJzaW9uUmVxdWVzdBIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjcKBGJvZHkYAiABKAsyKS55ZXlpbmcuYXBpLmFzc2V0LkFzc2V0VmVyc2lvblJlcXVlc3RCb2R5IlQKF0Fzc2V0VmVyc2lvblJlcXVlc3RCb2R5EgsKA3VpZBgBIAEoCRIsCgRwYWdlGAIgASgLMh4ueWV5aW5nLmFwaS5jb21tb24uUmVxdWVzdFBhZ2UiggEKFEFzc2V0VmVyc2lvblJlc3BvbnNlEjAKBmhlYWRlchgBIAEoCzIgLnlleWluZy5hcGkuY29tbW9uLk1lc3NhZ2VIZWFkZXISOAoEYm9keRgCIAEoCzIqLnlleWluZy5hcGkuYXNzZXQuQXNzZXRWZXJzaW9uUmVzcG9uc2VCb2R5In4KGEFzc2V0VmVyc2lvblJlc3BvbnNlQm9keRIxCgZzdGF0dXMYASABKAsyIS55ZXlpbmcuYXBpLmNvbW1vbi5SZXNwb25zZVN0YXR1cxIvCgZhc3NldHMYAiADKAsyHy55ZXlpbmcuYXBpLmFzc2V0LkFzc2V0TWV0YWRhdGEifgoSQXNzZXREZXRhaWxSZXF1ZXN0EjAKBmhlYWRlchgBIAEoCzIgLnlleWluZy5hcGkuY29tbW9uLk1lc3NhZ2VIZWFkZXISNgoEYm9keRgCIAEoCzIoLnlleWluZy5hcGkuYXNzZXQuQXNzZXREZXRhaWxSZXF1ZXN0Qm9keSJFChZBc3NldERldGFpbFJlcXVlc3RCb2R5EgsKA3VpZBgBIAEoCRIPCgd2ZXJzaW9uGAIgASgNEg0KBXRyYXNoGAMgASgIIoABChNBc3NldERldGFpbFJlc3BvbnNlEjAKBmhlYWRlchgBIAEoCzIgLnlleWluZy5hcGkuY29tbW9uLk1lc3NhZ2VIZWFkZXISNwoEYm9keRgCIAEoCzIpLnlleWluZy5hcGkuYXNzZXQuQXNzZXREZXRhaWxSZXNwb25zZUJvZHkifAoXQXNzZXREZXRhaWxSZXNwb25zZUJvZHkSMQoGc3RhdHVzGAEgASgLMiEueWV5aW5nLmFwaS5jb21tb24uUmVzcG9uc2VTdGF0dXMSLgoFYXNzZXQYAiABKAsyHy55ZXlpbmcuYXBpLmFzc2V0LkFzc2V0TWV0YWRhdGEifgoSUmVtb3ZlQXNzZXRSZXF1ZXN0EjAKBmhlYWRlchgBIAEoCzIgLnlleWluZy5hcGkuY29tbW9uLk1lc3NhZ2VIZWFkZXISNgoEYm9keRgCIAEoCzIoLnlleWluZy5hcGkuYXNzZXQuUmVtb3ZlQXNzZXRSZXF1ZXN0Qm9keSJEChZSZW1vdmVBc3NldFJlcXVlc3RCb2R5EgsKA3VpZBgBIAEoCRIPCgd2ZXJzaW9uGAIgASgNEgwKBGhhcmQYAyABKAgigAEKE1JlbW92ZUFzc2V0UmVzcG9uc2USMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchI3CgRib2R5GAIgASgLMikueWV5aW5nLmFwaS5hc3NldC5SZW1vdmVBc3NldFJlc3BvbnNlQm9keSJMChdSZW1vdmVBc3NldFJlc3BvbnNlQm9keRIxCgZzdGF0dXMYASABKAsyIS55ZXlpbmcuYXBpLmNvbW1vbi5SZXNwb25zZVN0YXR1cyI6Cg1DaHVua01ldGFkYXRhEg0KBWluZGV4GAEgASgNEgwKBGhhc2gYAiABKAkSDAoEc2l6ZRgDIAEoBCKpAwoNQXNzZXRNZXRhZGF0YRINCgVvd25lchgBIAEoCRIPCgd2ZXJzaW9uGAIgASgNEgsKA3VpZBgDIAEoCRIMCgRuYW1lGAQgASgJEhIKCnBhcmVudEhhc2gYBSABKAkSEwoLY29udGVudEhhc2gYBiABKAkSEgoKbWVyZ2VkSGFzaBgHIAEoCRITCgtkZXNjcmlwdGlvbhgIIAEoCRI0CgZmb3JtYXQYCSABKA4yJC55ZXlpbmcuYXBpLmNvbW1vbi5EaWdpdGFsRm9ybWF0RW51bRIMCgRzaXplGAogASgEEhEKCWNyZWF0ZWRBdBgLIAEoCRIRCgl1cGRhdGVkQXQYDCABKAkSEQoJZGVsZXRlZEF0GA0gASgJEhIKCmNodW5rQ291bnQYDiABKA0SEQoJY2h1bmtTaXplGA8gASgNEhMKC2lzRW5jcnlwdGVkGBAgASgIEg4KBmV4dGVuZBgRIAEoCRIvCgZjaHVua3MYEiADKAsyHy55ZXlpbmcuYXBpLmFzc2V0LkNodW5rTWV0YWRhdGESEQoJc2lnbmF0dXJlGBMgASgJMsEDCgVBc3NldBJXCgZTZWFyY2gSJC55ZXlpbmcuYXBpLmFzc2V0LlNlYXJjaEFzc2V0UmVxdWVzdBolLnlleWluZy5hcGkuYXNzZXQuU2VhcmNoQXNzZXRSZXNwb25zZSIAElEKBFNpZ24SIi55ZXlpbmcuYXBpLmFzc2V0LlNpZ25Bc3NldFJlcXVlc3QaIy55ZXlpbmcuYXBpLmFzc2V0LlNpZ25Bc3NldFJlc3BvbnNlIgASWgoHVmVyc2lvbhIlLnlleWluZy5hcGkuYXNzZXQuQXNzZXRWZXJzaW9uUmVxdWVzdBomLnlleWluZy5hcGkuYXNzZXQuQXNzZXRWZXJzaW9uUmVzcG9uc2UiABJXCgZEZXRhaWwSJC55ZXlpbmcuYXBpLmFzc2V0LkFzc2V0RGV0YWlsUmVxdWVzdBolLnlleWluZy5hcGkuYXNzZXQuQXNzZXREZXRhaWxSZXNwb25zZSIAElcKBlJlbW92ZRIkLnlleWluZy5hcGkuYXNzZXQuUmVtb3ZlQXNzZXRSZXF1ZXN0GiUueWV5aW5nLmFwaS5hc3NldC5SZW1vdmVBc3NldFJlc3BvbnNlIgBCEloQeWV5aW5nL2FwaS9hc3NldGIGcHJvdG8z", [file_yeying_api_common_message, file_yeying_api_common_code]);

/**
 * @generated from message yeying.api.asset.SearchAssetRequest
 */
export type SearchAssetRequest = Message<"yeying.api.asset.SearchAssetRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.asset.SearchAssetRequestBody body = 2;
   */
  body?: SearchAssetRequestBody;
};

/**
 * Describes the message yeying.api.asset.SearchAssetRequest.
 * Use `create(SearchAssetRequestSchema)` to create a new message.
 */
export const SearchAssetRequestSchema: GenMessage<SearchAssetRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 0);

/**
 * @generated from message yeying.api.asset.SearchAssetRequestBody
 */
export type SearchAssetRequestBody = Message<"yeying.api.asset.SearchAssetRequestBody"> & {
  /**
   * @generated from field: yeying.api.asset.SearchAssetCondition condition = 1;
   */
  condition?: SearchAssetCondition;

  /**
   * @generated from field: yeying.api.common.RequestPage page = 2;
   */
  page?: RequestPage;
};

/**
 * Describes the message yeying.api.asset.SearchAssetRequestBody.
 * Use `create(SearchAssetRequestBodySchema)` to create a new message.
 */
export const SearchAssetRequestBodySchema: GenMessage<SearchAssetRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 1);

/**
 * @generated from message yeying.api.asset.SearchAssetCondition
 */
export type SearchAssetCondition = Message<"yeying.api.asset.SearchAssetCondition"> & {
  /**
   * 资产内容格式
   *
   * @generated from field: yeying.api.common.DigitalFormatEnum format = 1;
   */
  format: DigitalFormatEnum;

  /**
   * 内容哈希值
   *
   * @generated from field: string contentHash = 2;
   */
  contentHash: string;

  /**
   * 是否在回收站里搜索
   *
   * @generated from field: bool trash = 3;
   */
  trash: boolean;
};

/**
 * Describes the message yeying.api.asset.SearchAssetCondition.
 * Use `create(SearchAssetConditionSchema)` to create a new message.
 */
export const SearchAssetConditionSchema: GenMessage<SearchAssetCondition> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 2);

/**
 * @generated from message yeying.api.asset.SearchAssetResponse
 */
export type SearchAssetResponse = Message<"yeying.api.asset.SearchAssetResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.asset.SearchAssetResponseBody body = 2;
   */
  body?: SearchAssetResponseBody;
};

/**
 * Describes the message yeying.api.asset.SearchAssetResponse.
 * Use `create(SearchAssetResponseSchema)` to create a new message.
 */
export const SearchAssetResponseSchema: GenMessage<SearchAssetResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 3);

/**
 * @generated from message yeying.api.asset.SearchAssetResponseBody
 */
export type SearchAssetResponseBody = Message<"yeying.api.asset.SearchAssetResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * @generated from field: repeated yeying.api.asset.AssetMetadata assets = 2;
   */
  assets: AssetMetadata[];
};

/**
 * Describes the message yeying.api.asset.SearchAssetResponseBody.
 * Use `create(SearchAssetResponseBodySchema)` to create a new message.
 */
export const SearchAssetResponseBodySchema: GenMessage<SearchAssetResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 4);

/**
 * @generated from message yeying.api.asset.SignAssetRequest
 */
export type SignAssetRequest = Message<"yeying.api.asset.SignAssetRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.asset.SignAssetRequestBody body = 2;
   */
  body?: SignAssetRequestBody;
};

/**
 * Describes the message yeying.api.asset.SignAssetRequest.
 * Use `create(SignAssetRequestSchema)` to create a new message.
 */
export const SignAssetRequestSchema: GenMessage<SignAssetRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 5);

/**
 * 版本统一由后端服务器来生成或者变更，和仓库签约的资产版本，必须是最新的版本号
 *
 * @generated from message yeying.api.asset.SignAssetRequestBody
 */
export type SignAssetRequestBody = Message<"yeying.api.asset.SignAssetRequestBody"> & {
  /**
   * 资产信息
   *
   * @generated from field: yeying.api.asset.AssetMetadata asset = 1;
   */
  asset?: AssetMetadata;
};

/**
 * Describes the message yeying.api.asset.SignAssetRequestBody.
 * Use `create(SignAssetRequestBodySchema)` to create a new message.
 */
export const SignAssetRequestBodySchema: GenMessage<SignAssetRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 6);

/**
 * @generated from message yeying.api.asset.SignAssetResponse
 */
export type SignAssetResponse = Message<"yeying.api.asset.SignAssetResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.asset.SignAssetResponseBody body = 2;
   */
  body?: SignAssetResponseBody;
};

/**
 * Describes the message yeying.api.asset.SignAssetResponse.
 * Use `create(SignAssetResponseSchema)` to create a new message.
 */
export const SignAssetResponseSchema: GenMessage<SignAssetResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 7);

/**
 * @generated from message yeying.api.asset.SignAssetResponseBody
 */
export type SignAssetResponseBody = Message<"yeying.api.asset.SignAssetResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.asset.SignAssetResponseBody.
 * Use `create(SignAssetResponseBodySchema)` to create a new message.
 */
export const SignAssetResponseBodySchema: GenMessage<SignAssetResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 8);

/**
 * @generated from message yeying.api.asset.AssetVersionRequest
 */
export type AssetVersionRequest = Message<"yeying.api.asset.AssetVersionRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.asset.AssetVersionRequestBody body = 2;
   */
  body?: AssetVersionRequestBody;
};

/**
 * Describes the message yeying.api.asset.AssetVersionRequest.
 * Use `create(AssetVersionRequestSchema)` to create a new message.
 */
export const AssetVersionRequestSchema: GenMessage<AssetVersionRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 9);

/**
 * @generated from message yeying.api.asset.AssetVersionRequestBody
 */
export type AssetVersionRequestBody = Message<"yeying.api.asset.AssetVersionRequestBody"> & {
  /**
   * 资产ID
   *
   * @generated from field: string uid = 1;
   */
  uid: string;

  /**
   * @generated from field: yeying.api.common.RequestPage page = 2;
   */
  page?: RequestPage;
};

/**
 * Describes the message yeying.api.asset.AssetVersionRequestBody.
 * Use `create(AssetVersionRequestBodySchema)` to create a new message.
 */
export const AssetVersionRequestBodySchema: GenMessage<AssetVersionRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 10);

/**
 * @generated from message yeying.api.asset.AssetVersionResponse
 */
export type AssetVersionResponse = Message<"yeying.api.asset.AssetVersionResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.asset.AssetVersionResponseBody body = 2;
   */
  body?: AssetVersionResponseBody;
};

/**
 * Describes the message yeying.api.asset.AssetVersionResponse.
 * Use `create(AssetVersionResponseSchema)` to create a new message.
 */
export const AssetVersionResponseSchema: GenMessage<AssetVersionResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 11);

/**
 * @generated from message yeying.api.asset.AssetVersionResponseBody
 */
export type AssetVersionResponseBody = Message<"yeying.api.asset.AssetVersionResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * 返回的资产按照版本从大到小排列
   *
   * @generated from field: repeated yeying.api.asset.AssetMetadata assets = 2;
   */
  assets: AssetMetadata[];
};

/**
 * Describes the message yeying.api.asset.AssetVersionResponseBody.
 * Use `create(AssetVersionResponseBodySchema)` to create a new message.
 */
export const AssetVersionResponseBodySchema: GenMessage<AssetVersionResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 12);

/**
 * @generated from message yeying.api.asset.AssetDetailRequest
 */
export type AssetDetailRequest = Message<"yeying.api.asset.AssetDetailRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.asset.AssetDetailRequestBody body = 2;
   */
  body?: AssetDetailRequestBody;
};

/**
 * Describes the message yeying.api.asset.AssetDetailRequest.
 * Use `create(AssetDetailRequestSchema)` to create a new message.
 */
export const AssetDetailRequestSchema: GenMessage<AssetDetailRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 13);

/**
 * @generated from message yeying.api.asset.AssetDetailRequestBody
 */
export type AssetDetailRequestBody = Message<"yeying.api.asset.AssetDetailRequestBody"> & {
  /**
   * 资产哈希值
   *
   * @generated from field: string uid = 1;
   */
  uid: string;

  /**
   * @generated from field: uint32 version = 2;
   */
  version: number;

  /**
   * @generated from field: bool trash = 3;
   */
  trash: boolean;
};

/**
 * Describes the message yeying.api.asset.AssetDetailRequestBody.
 * Use `create(AssetDetailRequestBodySchema)` to create a new message.
 */
export const AssetDetailRequestBodySchema: GenMessage<AssetDetailRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 14);

/**
 * @generated from message yeying.api.asset.AssetDetailResponse
 */
export type AssetDetailResponse = Message<"yeying.api.asset.AssetDetailResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.asset.AssetDetailResponseBody body = 2;
   */
  body?: AssetDetailResponseBody;
};

/**
 * Describes the message yeying.api.asset.AssetDetailResponse.
 * Use `create(AssetDetailResponseSchema)` to create a new message.
 */
export const AssetDetailResponseSchema: GenMessage<AssetDetailResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 15);

/**
 * @generated from message yeying.api.asset.AssetDetailResponseBody
 */
export type AssetDetailResponseBody = Message<"yeying.api.asset.AssetDetailResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * @generated from field: yeying.api.asset.AssetMetadata asset = 2;
   */
  asset?: AssetMetadata;
};

/**
 * Describes the message yeying.api.asset.AssetDetailResponseBody.
 * Use `create(AssetDetailResponseBodySchema)` to create a new message.
 */
export const AssetDetailResponseBodySchema: GenMessage<AssetDetailResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 16);

/**
 * @generated from message yeying.api.asset.RemoveAssetRequest
 */
export type RemoveAssetRequest = Message<"yeying.api.asset.RemoveAssetRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.asset.RemoveAssetRequestBody body = 2;
   */
  body?: RemoveAssetRequestBody;
};

/**
 * Describes the message yeying.api.asset.RemoveAssetRequest.
 * Use `create(RemoveAssetRequestSchema)` to create a new message.
 */
export const RemoveAssetRequestSchema: GenMessage<RemoveAssetRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 17);

/**
 * @generated from message yeying.api.asset.RemoveAssetRequestBody
 */
export type RemoveAssetRequestBody = Message<"yeying.api.asset.RemoveAssetRequestBody"> & {
  /**
   * @generated from field: string uid = 1;
   */
  uid: string;

  /**
   * @generated from field: uint32 version = 2;
   */
  version: number;

  /**
   * @generated from field: bool hard = 3;
   */
  hard: boolean;
};

/**
 * Describes the message yeying.api.asset.RemoveAssetRequestBody.
 * Use `create(RemoveAssetRequestBodySchema)` to create a new message.
 */
export const RemoveAssetRequestBodySchema: GenMessage<RemoveAssetRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 18);

/**
 * @generated from message yeying.api.asset.RemoveAssetResponse
 */
export type RemoveAssetResponse = Message<"yeying.api.asset.RemoveAssetResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.asset.RemoveAssetResponseBody body = 2;
   */
  body?: RemoveAssetResponseBody;
};

/**
 * Describes the message yeying.api.asset.RemoveAssetResponse.
 * Use `create(RemoveAssetResponseSchema)` to create a new message.
 */
export const RemoveAssetResponseSchema: GenMessage<RemoveAssetResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 19);

/**
 * @generated from message yeying.api.asset.RemoveAssetResponseBody
 */
export type RemoveAssetResponseBody = Message<"yeying.api.asset.RemoveAssetResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.asset.RemoveAssetResponseBody.
 * Use `create(RemoveAssetResponseBodySchema)` to create a new message.
 */
export const RemoveAssetResponseBodySchema: GenMessage<RemoveAssetResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 20);

/**
 * 资产块信息
 *
 * @generated from message yeying.api.asset.ChunkMetadata
 */
export type ChunkMetadata = Message<"yeying.api.asset.ChunkMetadata"> & {
  /**
   * 块在资产中的索引
   *
   * @generated from field: uint32 index = 1;
   */
  index: number;

  /**
   * 资产块哈希值，可能是加密后的哈希值，也可能是明文的哈希值，同一个资产种，不同的两块哈希值可能一样
   *
   * @generated from field: string hash = 2;
   */
  hash: string;

  /**
   * 资产块大小，可能是密文块的大小，也可能是明文块的大小
   *
   * @generated from field: uint64 size = 3;
   */
  size: bigint;
};

/**
 * Describes the message yeying.api.asset.ChunkMetadata.
 * Use `create(ChunkMetadataSchema)` to create a new message.
 */
export const ChunkMetadataSchema: GenMessage<ChunkMetadata> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 21);

/**
 * 资产定义
 *
 * @generated from message yeying.api.asset.AssetMetadata
 */
export type AssetMetadata = Message<"yeying.api.asset.AssetMetadata"> & {
  /**
   * 资产所有者
   *
   * @generated from field: string owner = 1;
   */
  owner: string;

  /**
   * 资产版本
   *
   * @generated from field: uint32 version = 2;
   */
  version: number;

  /**
   * 资产唯一ID
   *
   * @generated from field: string uid = 3;
   */
  uid: string;

  /**
   * 资产名称
   *
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * 上一个版本的资产内容哈希值
   *
   * @generated from field: string parentHash = 5;
   */
  parentHash: string;

  /**
   * 资产内容哈希值
   *
   * @generated from field: string contentHash = 6;
   */
  contentHash: string;

  /**
   * 资产块哈希值合并后计算的哈希值，验证数据一致性，如果资产内容小于块的大小
   *
   * @generated from field: string mergedHash = 7;
   */
  mergedHash: string;

  /**
   * 资产描述
   *
   * @generated from field: string description = 8;
   */
  description: string;

  /**
   * 资产类型
   *
   * @generated from field: yeying.api.common.DigitalFormatEnum format = 9;
   */
  format: DigitalFormatEnum;

  /**
   * 明文资产的大小
   *
   * @generated from field: uint64 size = 10;
   */
  size: bigint;

  /**
   * 资产创建时间
   *
   * @generated from field: string createdAt = 11;
   */
  createdAt: string;

  /**
   * 资产更新时间点
   *
   * @generated from field: string updatedAt = 12;
   */
  updatedAt: string;

  /**
   * 资产删除时间
   *
   * @generated from field: string deletedAt = 13;
   */
  deletedAt: string;

  /**
   * 资产块数量
   *
   * @generated from field: uint32 chunkCount = 14;
   */
  chunkCount: number;

  /**
   * 资产块大小
   *
   * @generated from field: uint32 chunkSize = 15;
   */
  chunkSize: number;

  /**
   * 是否加密
   *
   * @generated from field: bool isEncrypted = 16;
   */
  isEncrypted: boolean;

  /**
   * 资产扩展信息
   *
   * @generated from field: string extend = 17;
   */
  extend: string;

  /**
   * 资产块信息
   *
   * @generated from field: repeated yeying.api.asset.ChunkMetadata chunks = 18;
   */
  chunks: ChunkMetadata[];

  /**
   * 资产元信息的签名
   *
   * @generated from field: string signature = 19;
   */
  signature: string;
};

/**
 * Describes the message yeying.api.asset.AssetMetadata.
 * Use `create(AssetMetadataSchema)` to create a new message.
 */
export const AssetMetadataSchema: GenMessage<AssetMetadata> = /*@__PURE__*/
  messageDesc(file_yeying_api_asset_asset, 22);

/**
 * *
 * 开放的分散式仓库网络的接口设计，参考了现实世界中的仓库，逻辑如下：
 * 1、数字资产有两个标识，一个是数字资产的身份标识，可以是分布式数字身份，也可以是用户自定义的身份ID，另一个是数字资产内容的哈希值；
 * 2、数字资产入库，发送到指定存储网络中的节点，可以指定副本数量，一方面保证内容不会因为单个节点故障而丢失，另外也保证内容的可访问性；
 * 3、存储复用，如果两份资产哈希值一样，分两种情况来看，如果资产的所有者一样，则仓库会主动告知身份持有者存在重复，如果资产的所有者不同，会增加引用；
 * 4、授权数字资产，所有者和使用者立交易关系，确保使用者根据指定的策略访问数据，仓库会统计数字资产的使用情况，比如统计内容取（浏览）的次数评估内容热度
 * ，或者统计内容存的次数（收藏）评估内容质量，目的是更好的分配存储资源；
 *
 * 分散式存储网络的使用场景：
 * 1、创作场景，知识产权证明
 * 2、代码包分发场景，比如软件包，模型包等
 * 3、数字资产，类似nft等
 *
 * @generated from service yeying.api.asset.Asset
 */
export const Asset: GenService<{
  /**
   * *
   * 检索数字内容，基于数字内容的元信息检索，比如哈希值、时间、类型、名称等, 如果什么条件都不传入，则按照默认的排序顺序，返回第一个10条记录。
   *
   * @generated from rpc yeying.api.asset.Asset.Search
   */
  search: {
    methodKind: "unary";
    input: typeof SearchAssetRequestSchema;
    output: typeof SearchAssetResponseSchema;
  },
  /**
   * *
   * 以事务的形式和存储供应商签订协议并入库，当所有资产块入库成功后，资产的信息发送到后端服务签字确认，涵盖了新的资产和新的版本入库；
   * 1、根据规则，自动生成新的版本，资产身份不变，但是资产内容的哈希值会变
   *
   * @generated from rpc yeying.api.asset.Asset.Sign
   */
  sign: {
    methodKind: "unary";
    input: typeof SignAssetRequestSchema;
    output: typeof SignAssetResponseSchema;
  },
  /**
   * *
   * 查看某个资产的版本
   *
   * @generated from rpc yeying.api.asset.Asset.Version
   */
  version: {
    methodKind: "unary";
    input: typeof AssetVersionRequestSchema;
    output: typeof AssetVersionResponseSchema;
  },
  /**
   * *
   * 获得资产详细信息，提供该接口是为了更灵活处理资产信息，资产信息的复杂主要是几个方面：
   * 1、资产分块，资产的块信息可能会很大
   * 2、多版本，资产描述信息也会很大
   * 3、分散存储，如果资产过大，可能会被存储到不同的供应商
   *
   * @generated from rpc yeying.api.asset.Asset.Detail
   */
  detail: {
    methodKind: "unary";
    input: typeof AssetDetailRequestSchema;
    output: typeof AssetDetailResponseSchema;
  },
  /**
   * *
   * 从当前仓储网络移除掉数字内容；
   *
   * @generated from rpc yeying.api.asset.Asset.Remove
   */
  remove: {
    methodKind: "unary";
    input: typeof RemoveAssetRequestSchema;
    output: typeof RemoveAssetResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_yeying_api_asset_asset, 0);

