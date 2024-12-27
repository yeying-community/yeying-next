// source: yeying/api/common/message.proto
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

var yeying_api_common_code_pb = require('../../../yeying/api/common/code_pb.js');
goog.object.extend(proto, yeying_api_common_code_pb);
goog.exportSymbol('proto.yeying.api.common.MessageHeader', null, global);
goog.exportSymbol('proto.yeying.api.common.RequestPage', null, global);
goog.exportSymbol('proto.yeying.api.common.ResponsePage', null, global);
goog.exportSymbol('proto.yeying.api.common.ResponseStatus', null, global);
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
proto.yeying.api.common.MessageHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yeying.api.common.MessageHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yeying.api.common.MessageHeader.displayName = 'proto.yeying.api.common.MessageHeader';
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
proto.yeying.api.common.ResponseStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yeying.api.common.ResponseStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yeying.api.common.ResponseStatus.displayName = 'proto.yeying.api.common.ResponseStatus';
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
proto.yeying.api.common.ResponsePage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yeying.api.common.ResponsePage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yeying.api.common.ResponsePage.displayName = 'proto.yeying.api.common.ResponsePage';
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
proto.yeying.api.common.RequestPage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yeying.api.common.RequestPage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yeying.api.common.RequestPage.displayName = 'proto.yeying.api.common.RequestPage';
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
proto.yeying.api.common.MessageHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.yeying.api.common.MessageHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yeying.api.common.MessageHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.common.MessageHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
did: jspb.Message.getFieldWithDefault(msg, 1, ""),
authtype: jspb.Message.getFieldWithDefault(msg, 2, 0),
authcontent: jspb.Message.getFieldWithDefault(msg, 3, ""),
nonce: jspb.Message.getFieldWithDefault(msg, 4, ""),
timestamp: jspb.Message.getFieldWithDefault(msg, 5, ""),
version: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.yeying.api.common.MessageHeader}
 */
proto.yeying.api.common.MessageHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yeying.api.common.MessageHeader;
  return proto.yeying.api.common.MessageHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yeying.api.common.MessageHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yeying.api.common.MessageHeader}
 */
proto.yeying.api.common.MessageHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDid(value);
      break;
    case 2:
      var value = /** @type {!proto.yeying.api.common.AuthenticateTypeEnum} */ (reader.readEnum());
      msg.setAuthtype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthcontent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNonce(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestamp(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
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
proto.yeying.api.common.MessageHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yeying.api.common.MessageHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yeying.api.common.MessageHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.common.MessageHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthtype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getAuthcontent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNonce();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional string did = 1;
 * @return {string}
 */
proto.yeying.api.common.MessageHeader.prototype.getDid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yeying.api.common.MessageHeader} returns this
 */
proto.yeying.api.common.MessageHeader.prototype.setDid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AuthenticateTypeEnum authType = 2;
 * @return {!proto.yeying.api.common.AuthenticateTypeEnum}
 */
proto.yeying.api.common.MessageHeader.prototype.getAuthtype = function() {
  return /** @type {!proto.yeying.api.common.AuthenticateTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.yeying.api.common.AuthenticateTypeEnum} value
 * @return {!proto.yeying.api.common.MessageHeader} returns this
 */
proto.yeying.api.common.MessageHeader.prototype.setAuthtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string authContent = 3;
 * @return {string}
 */
proto.yeying.api.common.MessageHeader.prototype.getAuthcontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yeying.api.common.MessageHeader} returns this
 */
proto.yeying.api.common.MessageHeader.prototype.setAuthcontent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string nonce = 4;
 * @return {string}
 */
proto.yeying.api.common.MessageHeader.prototype.getNonce = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yeying.api.common.MessageHeader} returns this
 */
proto.yeying.api.common.MessageHeader.prototype.setNonce = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string timestamp = 5;
 * @return {string}
 */
proto.yeying.api.common.MessageHeader.prototype.getTimestamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yeying.api.common.MessageHeader} returns this
 */
proto.yeying.api.common.MessageHeader.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 version = 6;
 * @return {number}
 */
proto.yeying.api.common.MessageHeader.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.yeying.api.common.MessageHeader} returns this
 */
proto.yeying.api.common.MessageHeader.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
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
proto.yeying.api.common.ResponseStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.yeying.api.common.ResponseStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yeying.api.common.ResponseStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.common.ResponseStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
code: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.yeying.api.common.ResponseStatus}
 */
proto.yeying.api.common.ResponseStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yeying.api.common.ResponseStatus;
  return proto.yeying.api.common.ResponseStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yeying.api.common.ResponseStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yeying.api.common.ResponseStatus}
 */
proto.yeying.api.common.ResponseStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.yeying.api.common.ResponseCodeEnum} */ (reader.readEnum());
      msg.setCode(value);
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
proto.yeying.api.common.ResponseStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yeying.api.common.ResponseStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yeying.api.common.ResponseStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.common.ResponseStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
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
 * optional ResponseCodeEnum code = 1;
 * @return {!proto.yeying.api.common.ResponseCodeEnum}
 */
proto.yeying.api.common.ResponseStatus.prototype.getCode = function() {
  return /** @type {!proto.yeying.api.common.ResponseCodeEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.yeying.api.common.ResponseCodeEnum} value
 * @return {!proto.yeying.api.common.ResponseStatus} returns this
 */
proto.yeying.api.common.ResponseStatus.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yeying.api.common.ResponseStatus.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yeying.api.common.ResponseStatus} returns this
 */
proto.yeying.api.common.ResponseStatus.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.yeying.api.common.ResponsePage.prototype.toObject = function(opt_includeInstance) {
  return proto.yeying.api.common.ResponsePage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yeying.api.common.ResponsePage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.common.ResponsePage.toObject = function(includeInstance, msg) {
  var f, obj = {
total: jspb.Message.getFieldWithDefault(msg, 1, 0),
page: jspb.Message.getFieldWithDefault(msg, 3, 0),
pagesize: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.yeying.api.common.ResponsePage}
 */
proto.yeying.api.common.ResponsePage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yeying.api.common.ResponsePage;
  return proto.yeying.api.common.ResponsePage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yeying.api.common.ResponsePage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yeying.api.common.ResponsePage}
 */
proto.yeying.api.common.ResponsePage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotal(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPagesize(value);
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
proto.yeying.api.common.ResponsePage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yeying.api.common.ResponsePage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yeying.api.common.ResponsePage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.common.ResponsePage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPagesize();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional uint32 total = 1;
 * @return {number}
 */
proto.yeying.api.common.ResponsePage.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yeying.api.common.ResponsePage} returns this
 */
proto.yeying.api.common.ResponsePage.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 page = 3;
 * @return {number}
 */
proto.yeying.api.common.ResponsePage.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yeying.api.common.ResponsePage} returns this
 */
proto.yeying.api.common.ResponsePage.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 pageSize = 4;
 * @return {number}
 */
proto.yeying.api.common.ResponsePage.prototype.getPagesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yeying.api.common.ResponsePage} returns this
 */
proto.yeying.api.common.ResponsePage.prototype.setPagesize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.yeying.api.common.RequestPage.prototype.toObject = function(opt_includeInstance) {
  return proto.yeying.api.common.RequestPage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yeying.api.common.RequestPage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.common.RequestPage.toObject = function(includeInstance, msg) {
  var f, obj = {
page: jspb.Message.getFieldWithDefault(msg, 1, 0),
pagesize: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.yeying.api.common.RequestPage}
 */
proto.yeying.api.common.RequestPage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yeying.api.common.RequestPage;
  return proto.yeying.api.common.RequestPage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yeying.api.common.RequestPage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yeying.api.common.RequestPage}
 */
proto.yeying.api.common.RequestPage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPagesize(value);
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
proto.yeying.api.common.RequestPage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yeying.api.common.RequestPage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yeying.api.common.RequestPage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yeying.api.common.RequestPage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPage();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPagesize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 page = 1;
 * @return {number}
 */
proto.yeying.api.common.RequestPage.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yeying.api.common.RequestPage} returns this
 */
proto.yeying.api.common.RequestPage.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 pageSize = 2;
 * @return {number}
 */
proto.yeying.api.common.RequestPage.prototype.getPagesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yeying.api.common.RequestPage} returns this
 */
proto.yeying.api.common.RequestPage.prototype.setPagesize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.yeying.api.common);
