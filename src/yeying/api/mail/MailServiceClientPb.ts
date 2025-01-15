/**
 * @fileoverview gRPC-Web generated client stub for yeying.api.mail
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.29.3
// source: yeying/api/mail/mail.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as yeying_api_mail_mail_pb from '../../../yeying/api/mail/mail_pb'; // proto import: "yeying/api/mail/mail.proto"


export class MailClient {
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

  methodDescriptorSend = new grpcWeb.MethodDescriptor(
    '/yeying.api.mail.Mail/Send',
    grpcWeb.MethodType.UNARY,
    yeying_api_mail_mail_pb.SendRequest,
    yeying_api_mail_mail_pb.SendResponse,
    (request: yeying_api_mail_mail_pb.SendRequest) => {
      return request.serializeBinary();
    },
    yeying_api_mail_mail_pb.SendResponse.deserializeBinary
  );

  send(
    request: yeying_api_mail_mail_pb.SendRequest,
    metadata?: grpcWeb.Metadata | null): Promise<yeying_api_mail_mail_pb.SendResponse>;

  send(
    request: yeying_api_mail_mail_pb.SendRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: yeying_api_mail_mail_pb.SendResponse) => void): grpcWeb.ClientReadableStream<yeying_api_mail_mail_pb.SendResponse>;

  send(
    request: yeying_api_mail_mail_pb.SendRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: yeying_api_mail_mail_pb.SendResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/yeying.api.mail.Mail/Send',
        request,
        metadata || {},
        this.methodDescriptorSend,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/yeying.api.mail.Mail/Send',
    request,
    metadata || {},
    this.methodDescriptorSend);
  }

  methodDescriptorVerify = new grpcWeb.MethodDescriptor(
    '/yeying.api.mail.Mail/Verify',
    grpcWeb.MethodType.UNARY,
    yeying_api_mail_mail_pb.VerifyRequest,
    yeying_api_mail_mail_pb.VerifyResponse,
    (request: yeying_api_mail_mail_pb.VerifyRequest) => {
      return request.serializeBinary();
    },
    yeying_api_mail_mail_pb.VerifyResponse.deserializeBinary
  );

  verify(
    request: yeying_api_mail_mail_pb.VerifyRequest,
    metadata?: grpcWeb.Metadata | null): Promise<yeying_api_mail_mail_pb.VerifyResponse>;

  verify(
    request: yeying_api_mail_mail_pb.VerifyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: yeying_api_mail_mail_pb.VerifyResponse) => void): grpcWeb.ClientReadableStream<yeying_api_mail_mail_pb.VerifyResponse>;

  verify(
    request: yeying_api_mail_mail_pb.VerifyRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: yeying_api_mail_mail_pb.VerifyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/yeying.api.mail.Mail/Verify',
        request,
        metadata || {},
        this.methodDescriptorVerify,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/yeying.api.mail.Mail/Verify',
    request,
    metadata || {},
    this.methodDescriptorVerify);
  }

}

