// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file yeying/api/node/node.proto (package yeying.api.node, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { MessageHeader, ResponseStatus } from "../common/message_pb";
import { file_yeying_api_common_message } from "../common/message_pb";
import type { ApiCodeEnum, ServiceCodeEnum } from "../common/code_pb";
import { file_yeying_api_common_code } from "../common/code_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file yeying/api/node/node.proto.
 */
export const file_yeying_api_node_node: GenFile = /*@__PURE__*/
  fileDesc("Chp5ZXlpbmcvYXBpL25vZGUvbm9kZS5wcm90bxIPeWV5aW5nLmFwaS5ub2RlIkYKEkhlYWx0aENoZWNrUmVxdWVzdBIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyIn8KE0hlYWx0aENoZWNrUmVzcG9uc2USMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchI2CgRib2R5GAIgASgLMigueWV5aW5nLmFwaS5ub2RlLkhlYWx0aENoZWNrUmVzcG9uc2VCb2R5IkwKF0hlYWx0aENoZWNrUmVzcG9uc2VCb2R5EjEKBnN0YXR1cxgBIAEoCzIhLnlleWluZy5hcGkuY29tbW9uLlJlc3BvbnNlU3RhdHVzIkEKDVdob2FtaVJlcXVlc3QSMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlciJ1Cg5XaG9hbWlSZXNwb25zZRIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEjEKBGJvZHkYAiABKAsyIy55ZXlpbmcuYXBpLm5vZGUuV2hvYW1pUmVzcG9uc2VCb2R5InQKEldob2FtaVJlc3BvbnNlQm9keRIxCgZzdGF0dXMYASABKAsyIS55ZXlpbmcuYXBpLmNvbW1vbi5SZXNwb25zZVN0YXR1cxIrCgRub2RlGAIgASgLMh0ueWV5aW5nLmFwaS5ub2RlLk5vZGVNZXRhZGF0YSLFAgoMTm9kZU1ldGFkYXRhEg0KBW93bmVyGAEgASgJEg8KB25ldHdvcmsYAiABKA0SDwoHYWRkcmVzcxgDIAEoCRILCgNkaWQYBCABKAkSDwoHdmVyc2lvbhgFIAEoDRIMCgRuYW1lGAYgASgJEhMKC2Rlc2NyaXB0aW9uGAcgASgJEjAKBGNvZGUYCCABKA4yIi55ZXlpbmcuYXBpLmNvbW1vbi5TZXJ2aWNlQ29kZUVudW0SLAoEYXBpcxgJIAMoDjIeLnlleWluZy5hcGkuY29tbW9uLkFwaUNvZGVFbnVtEg0KBXByb3h5GAogASgJEgwKBGdycGMYCyABKAkSDgoGYXZhdGFyGAwgASgJEg8KB2NyZWF0ZWQYDSABKAkSEgoKY2hlY2twb2ludBgOIAEoCRIRCglzaWduYXR1cmUYDyABKAkyrwEKBE5vZGUSWgoLSGVhbHRoQ2hlY2sSIy55ZXlpbmcuYXBpLm5vZGUuSGVhbHRoQ2hlY2tSZXF1ZXN0GiQueWV5aW5nLmFwaS5ub2RlLkhlYWx0aENoZWNrUmVzcG9uc2UiABJLCgZXaG9hbWkSHi55ZXlpbmcuYXBpLm5vZGUuV2hvYW1pUmVxdWVzdBofLnlleWluZy5hcGkubm9kZS5XaG9hbWlSZXNwb25zZSIAQhFaD3lleWluZy9hcGkvbm9kZWIGcHJvdG8z", [file_yeying_api_common_message, file_yeying_api_common_code]);

/**
 * @generated from message yeying.api.node.HealthCheckRequest
 */
export type HealthCheckRequest = Message<"yeying.api.node.HealthCheckRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;
};

/**
 * Describes the message yeying.api.node.HealthCheckRequest.
 * Use `create(HealthCheckRequestSchema)` to create a new message.
 */
export const HealthCheckRequestSchema: GenMessage<HealthCheckRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_node_node, 0);

/**
 * @generated from message yeying.api.node.HealthCheckResponse
 */
export type HealthCheckResponse = Message<"yeying.api.node.HealthCheckResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.node.HealthCheckResponseBody body = 2;
   */
  body?: HealthCheckResponseBody;
};

/**
 * Describes the message yeying.api.node.HealthCheckResponse.
 * Use `create(HealthCheckResponseSchema)` to create a new message.
 */
export const HealthCheckResponseSchema: GenMessage<HealthCheckResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_node_node, 1);

/**
 * @generated from message yeying.api.node.HealthCheckResponseBody
 */
export type HealthCheckResponseBody = Message<"yeying.api.node.HealthCheckResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;
};

/**
 * Describes the message yeying.api.node.HealthCheckResponseBody.
 * Use `create(HealthCheckResponseBodySchema)` to create a new message.
 */
export const HealthCheckResponseBodySchema: GenMessage<HealthCheckResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_node_node, 2);

/**
 * @generated from message yeying.api.node.WhoamiRequest
 */
export type WhoamiRequest = Message<"yeying.api.node.WhoamiRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;
};

/**
 * Describes the message yeying.api.node.WhoamiRequest.
 * Use `create(WhoamiRequestSchema)` to create a new message.
 */
export const WhoamiRequestSchema: GenMessage<WhoamiRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_node_node, 3);

/**
 * @generated from message yeying.api.node.WhoamiResponse
 */
export type WhoamiResponse = Message<"yeying.api.node.WhoamiResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.node.WhoamiResponseBody body = 2;
   */
  body?: WhoamiResponseBody;
};

/**
 * Describes the message yeying.api.node.WhoamiResponse.
 * Use `create(WhoamiResponseSchema)` to create a new message.
 */
export const WhoamiResponseSchema: GenMessage<WhoamiResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_node_node, 4);

/**
 * @generated from message yeying.api.node.WhoamiResponseBody
 */
export type WhoamiResponseBody = Message<"yeying.api.node.WhoamiResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * @generated from field: yeying.api.node.NodeMetadata node = 2;
   */
  node?: NodeMetadata;
};

/**
 * Describes the message yeying.api.node.WhoamiResponseBody.
 * Use `create(WhoamiResponseBodySchema)` to create a new message.
 */
export const WhoamiResponseBodySchema: GenMessage<WhoamiResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_node_node, 5);

/**
 * @generated from message yeying.api.node.NodeMetadata
 */
export type NodeMetadata = Message<"yeying.api.node.NodeMetadata"> & {
  /**
   * 服务所有者 
   *
   * @generated from field: string owner = 1;
   */
  owner: string;

  /**
   * 服务所在网络 
   *
   * @generated from field: uint32 network = 2;
   */
  network: number;

  /**
   * 服务所在网络地址 
   *
   * @generated from field: string address = 3;
   */
  address: string;

  /**
   * 服务身份 
   *
   * @generated from field: string did = 4;
   */
  did: string;

  /**
   * 服务版本 
   *
   * @generated from field: uint32 version = 5;
   */
  version: number;

  /**
   * 服务名称 
   *
   * @generated from field: string name = 6;
   */
  name: string;

  /**
   * 服务名称 
   *
   * @generated from field: string description = 7;
   */
  description: string;

  /**
   * 服务编码 
   *
   * @generated from field: yeying.api.common.ServiceCodeEnum code = 8;
   */
  code: ServiceCodeEnum;

  /**
   * 服务apis 
   *
   * @generated from field: repeated yeying.api.common.ApiCodeEnum apis = 9;
   */
  apis: ApiCodeEnum[];

  /**
   * 服务代理 
   *
   * @generated from field: string proxy = 10;
   */
  proxy: string;

  /**
   * 服务grpc地址 
   *
   * @generated from field: string grpc = 11;
   */
  grpc: string;

  /**
   * 服务头像 
   *
   * @generated from field: string avatar = 12;
   */
  avatar: string;

  /**
   * 服务创建时间点 
   *
   * @generated from field: string created = 13;
   */
  created: string;

  /**
   * 服务修改时间点 
   *
   * @generated from field: string checkpoint = 14;
   */
  checkpoint: string;

  /**
   * 签名
   *
   * @generated from field: string signature = 15;
   */
  signature: string;
};

/**
 * Describes the message yeying.api.node.NodeMetadata.
 * Use `create(NodeMetadataSchema)` to create a new message.
 */
export const NodeMetadataSchema: GenMessage<NodeMetadata> = /*@__PURE__*/
  messageDesc(file_yeying_api_node_node, 6);

/**
 * *
 * 节点提供服务登记、注销和查询的服务。每个服务都有一个身份，实际向节点登记的是身份信息。构建自己的服务，除了事先开发服务意外，需要以下几件事：
 * 1、创建服务身份
 * 2、使用身份启动服务
 * 3、选择节点登记服务
 * 4、应用绑定该服务
 *
 * @generated from service yeying.api.node.Node
 */
export const Node: GenService<{
  /**
   * @generated from rpc yeying.api.node.Node.HealthCheck
   */
  healthCheck: {
    methodKind: "unary";
    input: typeof HealthCheckRequestSchema;
    output: typeof HealthCheckResponseSchema;
  },
  /**
   * @generated from rpc yeying.api.node.Node.Whoami
   */
  whoami: {
    methodKind: "unary";
    input: typeof WhoamiRequestSchema;
    output: typeof WhoamiResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_yeying_api_node_node, 0);

