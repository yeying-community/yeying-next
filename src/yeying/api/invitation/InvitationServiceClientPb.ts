/**
 * @fileoverview gRPC-Web generated client stub for yeying.api.invitation
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.29.2
// source: yeying/api/invitation/invitation.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as yeying_api_invitation_invitation_pb from '../../../yeying/api/invitation/invitation_pb'; // proto import: "yeying/api/invitation/invitation.proto"


export class InvitationClient {
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

  methodDescriptorInput = new grpcWeb.MethodDescriptor(
    '/yeying.api.invitation.Invitation/Input',
    grpcWeb.MethodType.UNARY,
    yeying_api_invitation_invitation_pb.InputRequest,
    yeying_api_invitation_invitation_pb.InputResponse,
    (request: yeying_api_invitation_invitation_pb.InputRequest) => {
      return request.serializeBinary();
    },
    yeying_api_invitation_invitation_pb.InputResponse.deserializeBinary
  );

  input(
    request: yeying_api_invitation_invitation_pb.InputRequest,
    metadata?: grpcWeb.Metadata | null): Promise<yeying_api_invitation_invitation_pb.InputResponse>;

  input(
    request: yeying_api_invitation_invitation_pb.InputRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: yeying_api_invitation_invitation_pb.InputResponse) => void): grpcWeb.ClientReadableStream<yeying_api_invitation_invitation_pb.InputResponse>;

  input(
    request: yeying_api_invitation_invitation_pb.InputRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: yeying_api_invitation_invitation_pb.InputResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/yeying.api.invitation.Invitation/Input',
        request,
        metadata || {},
        this.methodDescriptorInput,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/yeying.api.invitation.Invitation/Input',
    request,
    metadata || {},
    this.methodDescriptorInput);
  }

  methodDescriptorGenerate = new grpcWeb.MethodDescriptor(
    '/yeying.api.invitation.Invitation/Generate',
    grpcWeb.MethodType.UNARY,
    yeying_api_invitation_invitation_pb.GenerateRequest,
    yeying_api_invitation_invitation_pb.GenerateResponse,
    (request: yeying_api_invitation_invitation_pb.GenerateRequest) => {
      return request.serializeBinary();
    },
    yeying_api_invitation_invitation_pb.GenerateResponse.deserializeBinary
  );

  generate(
    request: yeying_api_invitation_invitation_pb.GenerateRequest,
    metadata?: grpcWeb.Metadata | null): Promise<yeying_api_invitation_invitation_pb.GenerateResponse>;

  generate(
    request: yeying_api_invitation_invitation_pb.GenerateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: yeying_api_invitation_invitation_pb.GenerateResponse) => void): grpcWeb.ClientReadableStream<yeying_api_invitation_invitation_pb.GenerateResponse>;

  generate(
    request: yeying_api_invitation_invitation_pb.GenerateRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: yeying_api_invitation_invitation_pb.GenerateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/yeying.api.invitation.Invitation/Generate',
        request,
        metadata || {},
        this.methodDescriptorGenerate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/yeying.api.invitation.Invitation/Generate',
    request,
    metadata || {},
    this.methodDescriptorGenerate);
  }

}

