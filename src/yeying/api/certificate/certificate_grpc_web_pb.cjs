/**
 * @fileoverview gRPC-Web generated client stub for yeying.api.certificate
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v4.25.0
// source: yeying/api/certificate/certificate.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var yeying_api_common_message_pb = require('../../../yeying/api/common/message_pb.cjs')
const proto = {};
proto.yeying = {};
proto.yeying.api = {};
proto.yeying.api.certificate = require('./certificate_pb.cjs');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.yeying.api.certificate.CertificateClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.yeying.api.certificate.CertificatePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yeying.api.certificate.SignRequest,
 *   !proto.yeying.api.certificate.SignResponse>}
 */
const methodDescriptor_Certificate_Sign = new grpc.web.MethodDescriptor(
  '/yeying.api.certificate.Certificate/Sign',
  grpc.web.MethodType.UNARY,
  proto.yeying.api.certificate.SignRequest,
  proto.yeying.api.certificate.SignResponse,
  /**
   * @param {!proto.yeying.api.certificate.SignRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yeying.api.certificate.SignResponse.deserializeBinary
);


/**
 * @param {!proto.yeying.api.certificate.SignRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yeying.api.certificate.SignResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yeying.api.certificate.SignResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yeying.api.certificate.CertificateClient.prototype.sign =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yeying.api.certificate.Certificate/Sign',
      request,
      metadata || {},
      methodDescriptor_Certificate_Sign,
      callback);
};


/**
 * @param {!proto.yeying.api.certificate.SignRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yeying.api.certificate.SignResponse>}
 *     Promise that resolves to the response
 */
proto.yeying.api.certificate.CertificatePromiseClient.prototype.sign =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yeying.api.certificate.Certificate/Sign',
      request,
      metadata || {},
      methodDescriptor_Certificate_Sign);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.yeying.api.certificate.GetRequest,
 *   !proto.yeying.api.certificate.GetResponse>}
 */
const methodDescriptor_Certificate_Get = new grpc.web.MethodDescriptor(
  '/yeying.api.certificate.Certificate/Get',
  grpc.web.MethodType.UNARY,
  proto.yeying.api.certificate.GetRequest,
  proto.yeying.api.certificate.GetResponse,
  /**
   * @param {!proto.yeying.api.certificate.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.yeying.api.certificate.GetResponse.deserializeBinary
);


/**
 * @param {!proto.yeying.api.certificate.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.yeying.api.certificate.GetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.yeying.api.certificate.GetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.yeying.api.certificate.CertificateClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/yeying.api.certificate.Certificate/Get',
      request,
      metadata || {},
      methodDescriptor_Certificate_Get,
      callback);
};


/**
 * @param {!proto.yeying.api.certificate.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.yeying.api.certificate.GetResponse>}
 *     Promise that resolves to the response
 */
proto.yeying.api.certificate.CertificatePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/yeying.api.certificate.Certificate/Get',
      request,
      metadata || {},
      methodDescriptor_Certificate_Get);
};


module.exports = proto.yeying.api.certificate;

