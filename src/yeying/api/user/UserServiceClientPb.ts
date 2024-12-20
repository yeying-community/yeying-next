/**
 * @fileoverview gRPC-Web generated client stub for yeying.api.user
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v4.25.0
// source: yeying/api/user/user.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as yeying_api_user_user_pb from '../../../yeying/api/user/user_pb'; // proto import: "yeying/api/user/user.proto"


export class UserClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorAdd = new grpcWeb.MethodDescriptor(
    '/yeying.api.user.User/Add',
    grpcWeb.MethodType.UNARY,
    yeying_api_user_user_pb.AddRequest,
    yeying_api_user_user_pb.AddResponse,
    (request: yeying_api_user_user_pb.AddRequest) => {
      return request.serializeBinary();
    },
    yeying_api_user_user_pb.AddResponse.deserializeBinary
  );

  add(
    request: yeying_api_user_user_pb.AddRequest,
    metadata?: grpcWeb.Metadata | null): Promise<yeying_api_user_user_pb.AddResponse>;

  add(
    request: yeying_api_user_user_pb.AddRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: yeying_api_user_user_pb.AddResponse) => void): grpcWeb.ClientReadableStream<yeying_api_user_user_pb.AddResponse>;

  add(
    request: yeying_api_user_user_pb.AddRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: yeying_api_user_user_pb.AddResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/yeying.api.user.User/Add',
        request,
        metadata || {},
        this.methodDescriptorAdd,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/yeying.api.user.User/Add',
    request,
    metadata || {},
    this.methodDescriptorAdd);
  }

  methodDescriptorGet = new grpcWeb.MethodDescriptor(
    '/yeying.api.user.User/Get',
    grpcWeb.MethodType.UNARY,
    yeying_api_user_user_pb.GetRequest,
    yeying_api_user_user_pb.GetResponse,
    (request: yeying_api_user_user_pb.GetRequest) => {
      return request.serializeBinary();
    },
    yeying_api_user_user_pb.GetResponse.deserializeBinary
  );

  get(
    request: yeying_api_user_user_pb.GetRequest,
    metadata?: grpcWeb.Metadata | null): Promise<yeying_api_user_user_pb.GetResponse>;

  get(
    request: yeying_api_user_user_pb.GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: yeying_api_user_user_pb.GetResponse) => void): grpcWeb.ClientReadableStream<yeying_api_user_user_pb.GetResponse>;

  get(
    request: yeying_api_user_user_pb.GetRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: yeying_api_user_user_pb.GetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/yeying.api.user.User/Get',
        request,
        metadata || {},
        this.methodDescriptorGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/yeying.api.user.User/Get',
    request,
    metadata || {},
    this.methodDescriptorGet);
  }

  methodDescriptorDel = new grpcWeb.MethodDescriptor(
    '/yeying.api.user.User/Del',
    grpcWeb.MethodType.UNARY,
    yeying_api_user_user_pb.DelRequest,
    yeying_api_user_user_pb.DelResponse,
    (request: yeying_api_user_user_pb.DelRequest) => {
      return request.serializeBinary();
    },
    yeying_api_user_user_pb.DelResponse.deserializeBinary
  );

  del(
    request: yeying_api_user_user_pb.DelRequest,
    metadata?: grpcWeb.Metadata | null): Promise<yeying_api_user_user_pb.DelResponse>;

  del(
    request: yeying_api_user_user_pb.DelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: yeying_api_user_user_pb.DelResponse) => void): grpcWeb.ClientReadableStream<yeying_api_user_user_pb.DelResponse>;

  del(
    request: yeying_api_user_user_pb.DelRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: yeying_api_user_user_pb.DelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/yeying.api.user.User/Del',
        request,
        metadata || {},
        this.methodDescriptorDel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/yeying.api.user.User/Del',
    request,
    metadata || {},
    this.methodDescriptorDel);
  }

  methodDescriptorMod = new grpcWeb.MethodDescriptor(
    '/yeying.api.user.User/Mod',
    grpcWeb.MethodType.UNARY,
    yeying_api_user_user_pb.ModRequest,
    yeying_api_user_user_pb.ModResponse,
    (request: yeying_api_user_user_pb.ModRequest) => {
      return request.serializeBinary();
    },
    yeying_api_user_user_pb.ModResponse.deserializeBinary
  );

  mod(
    request: yeying_api_user_user_pb.ModRequest,
    metadata?: grpcWeb.Metadata | null): Promise<yeying_api_user_user_pb.ModResponse>;

  mod(
    request: yeying_api_user_user_pb.ModRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: yeying_api_user_user_pb.ModResponse) => void): grpcWeb.ClientReadableStream<yeying_api_user_user_pb.ModResponse>;

  mod(
    request: yeying_api_user_user_pb.ModRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: yeying_api_user_user_pb.ModResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/yeying.api.user.User/Mod',
        request,
        metadata || {},
        this.methodDescriptorMod,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/yeying.api.user.User/Mod',
    request,
    metadata || {},
    this.methodDescriptorMod);
  }

}
