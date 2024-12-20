// source: yeying/api/support/support.proto
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
goog.exportSymbol('proto.yeying.api.support.SaveFaqRequest', null, global);
goog.exportSymbol('proto.yeying.api.support.SaveFaqRequestBody', null, global);
goog.exportSymbol('proto.yeying.api.support.SaveFaqResponse', null, global);
goog.exportSymbol('proto.yeying.api.support.SupportCodeEnum', null, global);
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
proto.yeying.api.support.SaveFaqRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yeying.api.support.SaveFaqRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yeying.api.support.SaveFaqRequest.displayName = 'proto.yeying.api.support.SaveFaqRequest';
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
proto.yeying.api.support.SaveFaqRequestBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yeying.api.support.SaveFaqRequestBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yeying.api.support.SaveFaqRequestBody.displayName = 'proto.yeying.api.support.SaveFaqRequestBody';
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
proto.yeying.api.support.SaveFaqResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yeying.api.support.SaveFaqResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yeying.api.support.SaveFaqResponse.displayName = 'proto.yeying.api.support.SaveFaqResponse';
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
proto.yeying.api.support.SaveFaqRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yeying.api.support.SaveFaqRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yeying.api.support.SaveFaqRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.support.SaveFaqRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && yeying_api_common_message_pb.MessageHeader.toObject(includeInstance, f),
    body: (f = msg.getBody()) && proto.yeying.api.support.SaveFaqRequestBody.toObject(includeInstance, f)
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
 * @return {!proto.yeying.api.support.SaveFaqRequest}
 */
proto.yeying.api.support.SaveFaqRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yeying.api.support.SaveFaqRequest;
  return proto.yeying.api.support.SaveFaqRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yeying.api.support.SaveFaqRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yeying.api.support.SaveFaqRequest}
 */
proto.yeying.api.support.SaveFaqRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yeying.api.support.SaveFaqRequestBody;
      reader.readMessage(value,proto.yeying.api.support.SaveFaqRequestBody.deserializeBinaryFromReader);
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
proto.yeying.api.support.SaveFaqRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yeying.api.support.SaveFaqRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yeying.api.support.SaveFaqRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.support.SaveFaqRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.yeying.api.support.SaveFaqRequestBody.serializeBinaryToWriter
    );
  }
};


/**
 * optional yeying.api.common.MessageHeader header = 1;
 * @return {?proto.yeying.api.common.MessageHeader}
 */
proto.yeying.api.support.SaveFaqRequest.prototype.getHeader = function() {
  return /** @type{?proto.yeying.api.common.MessageHeader} */ (
    jspb.Message.getWrapperField(this, yeying_api_common_message_pb.MessageHeader, 1));
};


/**
 * @param {?proto.yeying.api.common.MessageHeader|undefined} value
 * @return {!proto.yeying.api.support.SaveFaqRequest} returns this
*/
proto.yeying.api.support.SaveFaqRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yeying.api.support.SaveFaqRequest} returns this
 */
proto.yeying.api.support.SaveFaqRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yeying.api.support.SaveFaqRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SaveFaqRequestBody body = 2;
 * @return {?proto.yeying.api.support.SaveFaqRequestBody}
 */
proto.yeying.api.support.SaveFaqRequest.prototype.getBody = function() {
  return /** @type{?proto.yeying.api.support.SaveFaqRequestBody} */ (
    jspb.Message.getWrapperField(this, proto.yeying.api.support.SaveFaqRequestBody, 2));
};


/**
 * @param {?proto.yeying.api.support.SaveFaqRequestBody|undefined} value
 * @return {!proto.yeying.api.support.SaveFaqRequest} returns this
*/
proto.yeying.api.support.SaveFaqRequest.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yeying.api.support.SaveFaqRequest} returns this
 */
proto.yeying.api.support.SaveFaqRequest.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yeying.api.support.SaveFaqRequest.prototype.hasBody = function() {
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
proto.yeying.api.support.SaveFaqRequestBody.prototype.toObject = function(opt_includeInstance) {
  return proto.yeying.api.support.SaveFaqRequestBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yeying.api.support.SaveFaqRequestBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.support.SaveFaqRequestBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yeying.api.support.SaveFaqRequestBody}
 */
proto.yeying.api.support.SaveFaqRequestBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yeying.api.support.SaveFaqRequestBody;
  return proto.yeying.api.support.SaveFaqRequestBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yeying.api.support.SaveFaqRequestBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yeying.api.support.SaveFaqRequestBody}
 */
proto.yeying.api.support.SaveFaqRequestBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
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
proto.yeying.api.support.SaveFaqRequestBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yeying.api.support.SaveFaqRequestBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yeying.api.support.SaveFaqRequestBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.support.SaveFaqRequestBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.yeying.api.support.SaveFaqRequestBody.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yeying.api.support.SaveFaqRequestBody} returns this
 */
proto.yeying.api.support.SaveFaqRequestBody.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.yeying.api.support.SaveFaqRequestBody.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yeying.api.support.SaveFaqRequestBody} returns this
 */
proto.yeying.api.support.SaveFaqRequestBody.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.yeying.api.support.SaveFaqRequestBody.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yeying.api.support.SaveFaqRequestBody} returns this
 */
proto.yeying.api.support.SaveFaqRequestBody.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.yeying.api.support.SaveFaqResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yeying.api.support.SaveFaqResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yeying.api.support.SaveFaqResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.support.SaveFaqResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && yeying_api_common_message_pb.MessageHeader.toObject(includeInstance, f)
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
 * @return {!proto.yeying.api.support.SaveFaqResponse}
 */
proto.yeying.api.support.SaveFaqResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yeying.api.support.SaveFaqResponse;
  return proto.yeying.api.support.SaveFaqResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yeying.api.support.SaveFaqResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yeying.api.support.SaveFaqResponse}
 */
proto.yeying.api.support.SaveFaqResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yeying.api.support.SaveFaqResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yeying.api.support.SaveFaqResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yeying.api.support.SaveFaqResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.support.SaveFaqResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      yeying_api_common_message_pb.MessageHeader.serializeBinaryToWriter
    );
  }
};


/**
 * optional yeying.api.common.MessageHeader header = 1;
 * @return {?proto.yeying.api.common.MessageHeader}
 */
proto.yeying.api.support.SaveFaqResponse.prototype.getHeader = function() {
  return /** @type{?proto.yeying.api.common.MessageHeader} */ (
    jspb.Message.getWrapperField(this, yeying_api_common_message_pb.MessageHeader, 1));
};


/**
 * @param {?proto.yeying.api.common.MessageHeader|undefined} value
 * @return {!proto.yeying.api.support.SaveFaqResponse} returns this
*/
proto.yeying.api.support.SaveFaqResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yeying.api.support.SaveFaqResponse} returns this
 */
proto.yeying.api.support.SaveFaqResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yeying.api.support.SaveFaqResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * @enum {number}
 */
proto.yeying.api.support.SupportCodeEnum = {
  SUPPORT_CODE_FAQ: 0,
  SUPPORT_CODE_CSR: 1,
  SUPPORT_CODE_IVR: 2
};

goog.object.extend(exports, proto.yeying.api.support);
