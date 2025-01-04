// source: yeying/api/test/test.proto
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

var yeying_api_common_message_pb = require('../../../yeying/api/common/message_pb.js');
goog.object.extend(proto, yeying_api_common_message_pb);
var yeying_api_common_code_pb = require('../../../yeying/api/common/code_pb.js');
goog.object.extend(proto, yeying_api_common_code_pb);
goog.exportSymbol('proto.yeying.api.test.EchoRequest', null, global);
goog.exportSymbol('proto.yeying.api.test.EchoRequestBody', null, global);
goog.exportSymbol('proto.yeying.api.test.EchoResponse', null, global);
goog.exportSymbol('proto.yeying.api.test.EchoResponseBody', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yeying.api.test.EchoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yeying.api.test.EchoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yeying.api.test.EchoRequest.displayName = 'proto.yeying.api.test.EchoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yeying.api.test.EchoRequestBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yeying.api.test.EchoRequestBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yeying.api.test.EchoRequestBody.displayName = 'proto.yeying.api.test.EchoRequestBody';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yeying.api.test.EchoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yeying.api.test.EchoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yeying.api.test.EchoResponse.displayName = 'proto.yeying.api.test.EchoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yeying.api.test.EchoResponseBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yeying.api.test.EchoResponseBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yeying.api.test.EchoResponseBody.displayName = 'proto.yeying.api.test.EchoResponseBody';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yeying.api.test.EchoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yeying.api.test.EchoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yeying.api.test.EchoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.test.EchoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
header: (f = msg.getHeader()) && yeying_api_common_message_pb.MessageHeader.toObject(includeInstance, f),
body: (f = msg.getBody()) && proto.yeying.api.test.EchoRequestBody.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yeying.api.test.EchoRequest}
 */
proto.yeying.api.test.EchoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yeying.api.test.EchoRequest;
  return proto.yeying.api.test.EchoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yeying.api.test.EchoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yeying.api.test.EchoRequest}
 */
proto.yeying.api.test.EchoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yeying_api_common_message_pb.MessageHeader;
      reader.readMessage(value,yeying_api_common_message_pb.MessageHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.yeying.api.test.EchoRequestBody;
      reader.readMessage(value,proto.yeying.api.test.EchoRequestBody.deserializeBinaryFromReader);
      msg.setBody(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yeying.api.test.EchoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yeying.api.test.EchoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yeying.api.test.EchoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.test.EchoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yeying_api_common_message_pb.MessageHeader.serializeBinaryToWriter
    );
  }
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yeying.api.test.EchoRequestBody.serializeBinaryToWriter
    );
  }
};


/**
 * optional yeying.api.common.MessageHeader header = 1;
 * @return {?proto.yeying.api.common.MessageHeader}
 */
proto.yeying.api.test.EchoRequest.prototype.getHeader = function() {
  return /** @type{?proto.yeying.api.common.MessageHeader} */ (
    jspb.Message.getWrapperField(this, yeying_api_common_message_pb.MessageHeader, 1));
};


/**
 * @param {?proto.yeying.api.common.MessageHeader|undefined} value
 * @return {!proto.yeying.api.test.EchoRequest} returns this
*/
proto.yeying.api.test.EchoRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yeying.api.test.EchoRequest} returns this
 */
proto.yeying.api.test.EchoRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yeying.api.test.EchoRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional EchoRequestBody body = 2;
 * @return {?proto.yeying.api.test.EchoRequestBody}
 */
proto.yeying.api.test.EchoRequest.prototype.getBody = function() {
  return /** @type{?proto.yeying.api.test.EchoRequestBody} */ (
    jspb.Message.getWrapperField(this, proto.yeying.api.test.EchoRequestBody, 2));
};


/**
 * @param {?proto.yeying.api.test.EchoRequestBody|undefined} value
 * @return {!proto.yeying.api.test.EchoRequest} returns this
*/
proto.yeying.api.test.EchoRequest.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yeying.api.test.EchoRequest} returns this
 */
proto.yeying.api.test.EchoRequest.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yeying.api.test.EchoRequest.prototype.hasBody = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yeying.api.test.EchoRequestBody.prototype.toObject = function(opt_includeInstance) {
  return proto.yeying.api.test.EchoRequestBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yeying.api.test.EchoRequestBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.test.EchoRequestBody.toObject = function(includeInstance, msg) {
  var f, obj = {
message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yeying.api.test.EchoRequestBody}
 */
proto.yeying.api.test.EchoRequestBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yeying.api.test.EchoRequestBody;
  return proto.yeying.api.test.EchoRequestBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yeying.api.test.EchoRequestBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yeying.api.test.EchoRequestBody}
 */
proto.yeying.api.test.EchoRequestBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yeying.api.test.EchoRequestBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yeying.api.test.EchoRequestBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yeying.api.test.EchoRequestBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.test.EchoRequestBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.yeying.api.test.EchoRequestBody.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yeying.api.test.EchoRequestBody} returns this
 */
proto.yeying.api.test.EchoRequestBody.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yeying.api.test.EchoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yeying.api.test.EchoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yeying.api.test.EchoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.test.EchoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
header: (f = msg.getHeader()) && yeying_api_common_message_pb.MessageHeader.toObject(includeInstance, f),
body: (f = msg.getBody()) && proto.yeying.api.test.EchoResponseBody.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yeying.api.test.EchoResponse}
 */
proto.yeying.api.test.EchoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yeying.api.test.EchoResponse;
  return proto.yeying.api.test.EchoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yeying.api.test.EchoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yeying.api.test.EchoResponse}
 */
proto.yeying.api.test.EchoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yeying_api_common_message_pb.MessageHeader;
      reader.readMessage(value,yeying_api_common_message_pb.MessageHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.yeying.api.test.EchoResponseBody;
      reader.readMessage(value,proto.yeying.api.test.EchoResponseBody.deserializeBinaryFromReader);
      msg.setBody(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yeying.api.test.EchoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yeying.api.test.EchoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yeying.api.test.EchoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.test.EchoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yeying_api_common_message_pb.MessageHeader.serializeBinaryToWriter
    );
  }
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yeying.api.test.EchoResponseBody.serializeBinaryToWriter
    );
  }
};


/**
 * optional yeying.api.common.MessageHeader header = 1;
 * @return {?proto.yeying.api.common.MessageHeader}
 */
proto.yeying.api.test.EchoResponse.prototype.getHeader = function() {
  return /** @type{?proto.yeying.api.common.MessageHeader} */ (
    jspb.Message.getWrapperField(this, yeying_api_common_message_pb.MessageHeader, 1));
};


/**
 * @param {?proto.yeying.api.common.MessageHeader|undefined} value
 * @return {!proto.yeying.api.test.EchoResponse} returns this
*/
proto.yeying.api.test.EchoResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yeying.api.test.EchoResponse} returns this
 */
proto.yeying.api.test.EchoResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yeying.api.test.EchoResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional EchoResponseBody body = 2;
 * @return {?proto.yeying.api.test.EchoResponseBody}
 */
proto.yeying.api.test.EchoResponse.prototype.getBody = function() {
  return /** @type{?proto.yeying.api.test.EchoResponseBody} */ (
    jspb.Message.getWrapperField(this, proto.yeying.api.test.EchoResponseBody, 2));
};


/**
 * @param {?proto.yeying.api.test.EchoResponseBody|undefined} value
 * @return {!proto.yeying.api.test.EchoResponse} returns this
*/
proto.yeying.api.test.EchoResponse.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yeying.api.test.EchoResponse} returns this
 */
proto.yeying.api.test.EchoResponse.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yeying.api.test.EchoResponse.prototype.hasBody = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yeying.api.test.EchoResponseBody.prototype.toObject = function(opt_includeInstance) {
  return proto.yeying.api.test.EchoResponseBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yeying.api.test.EchoResponseBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.test.EchoResponseBody.toObject = function(includeInstance, msg) {
  var f, obj = {
status: (f = msg.getStatus()) && yeying_api_common_message_pb.ResponseStatus.toObject(includeInstance, f),
message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yeying.api.test.EchoResponseBody}
 */
proto.yeying.api.test.EchoResponseBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yeying.api.test.EchoResponseBody;
  return proto.yeying.api.test.EchoResponseBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yeying.api.test.EchoResponseBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yeying.api.test.EchoResponseBody}
 */
proto.yeying.api.test.EchoResponseBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yeying_api_common_message_pb.ResponseStatus;
      reader.readMessage(value,yeying_api_common_message_pb.ResponseStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yeying.api.test.EchoResponseBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yeying.api.test.EchoResponseBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yeying.api.test.EchoResponseBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.test.EchoResponseBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yeying_api_common_message_pb.ResponseStatus.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional yeying.api.common.ResponseStatus status = 1;
 * @return {?proto.yeying.api.common.ResponseStatus}
 */
proto.yeying.api.test.EchoResponseBody.prototype.getStatus = function() {
  return /** @type{?proto.yeying.api.common.ResponseStatus} */ (
    jspb.Message.getWrapperField(this, yeying_api_common_message_pb.ResponseStatus, 1));
};


/**
 * @param {?proto.yeying.api.common.ResponseStatus|undefined} value
 * @return {!proto.yeying.api.test.EchoResponseBody} returns this
*/
proto.yeying.api.test.EchoResponseBody.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yeying.api.test.EchoResponseBody} returns this
 */
proto.yeying.api.test.EchoResponseBody.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yeying.api.test.EchoResponseBody.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yeying.api.test.EchoResponseBody.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yeying.api.test.EchoResponseBody} returns this
 */
proto.yeying.api.test.EchoResponseBody.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.yeying.api.test);
