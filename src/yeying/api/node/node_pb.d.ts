import * as jspb from 'google-protobuf'

import * as yeying_api_common_message_pb from '../../../yeying/api/common/message_pb'; // proto import: "yeying/api/common/message.proto"


export class HealthCheckRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): HealthCheckRequest;
  hasHeader(): boolean;
  clearHeader(): HealthCheckRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheckRequest): HealthCheckRequest.AsObject;
  static serializeBinaryToWriter(message: HealthCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheckRequest;
  static deserializeBinaryFromReader(message: HealthCheckRequest, reader: jspb.BinaryReader): HealthCheckRequest;
}

export namespace HealthCheckRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
  }
}

export class HealthCheckResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): HealthCheckResponse;
  hasHeader(): boolean;
  clearHeader(): HealthCheckResponse;

  getBody(): HealthCheckResponseBody | undefined;
  setBody(value?: HealthCheckResponseBody): HealthCheckResponse;
  hasBody(): boolean;
  clearBody(): HealthCheckResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheckResponse): HealthCheckResponse.AsObject;
  static serializeBinaryToWriter(message: HealthCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheckResponse;
  static deserializeBinaryFromReader(message: HealthCheckResponse, reader: jspb.BinaryReader): HealthCheckResponse;
}

export namespace HealthCheckResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: HealthCheckResponseBody.AsObject,
  }
}

export class HealthCheckResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): HealthCheckResponseBody;
  hasStatus(): boolean;
  clearStatus(): HealthCheckResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheckResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheckResponseBody): HealthCheckResponseBody.AsObject;
  static serializeBinaryToWriter(message: HealthCheckResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheckResponseBody;
  static deserializeBinaryFromReader(message: HealthCheckResponseBody, reader: jspb.BinaryReader): HealthCheckResponseBody;
}

export namespace HealthCheckResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class WhoamiRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): WhoamiRequest;
  hasHeader(): boolean;
  clearHeader(): WhoamiRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhoamiRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WhoamiRequest): WhoamiRequest.AsObject;
  static serializeBinaryToWriter(message: WhoamiRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhoamiRequest;
  static deserializeBinaryFromReader(message: WhoamiRequest, reader: jspb.BinaryReader): WhoamiRequest;
}

export namespace WhoamiRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
  }
}

export class WhoamiResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): WhoamiResponse;
  hasHeader(): boolean;
  clearHeader(): WhoamiResponse;

  getBody(): WhoamiResponseBody | undefined;
  setBody(value?: WhoamiResponseBody): WhoamiResponse;
  hasBody(): boolean;
  clearBody(): WhoamiResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhoamiResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WhoamiResponse): WhoamiResponse.AsObject;
  static serializeBinaryToWriter(message: WhoamiResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhoamiResponse;
  static deserializeBinaryFromReader(message: WhoamiResponse, reader: jspb.BinaryReader): WhoamiResponse;
}

export namespace WhoamiResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: WhoamiResponseBody.AsObject,
  }
}

export class WhoamiResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): WhoamiResponseBody;
  hasStatus(): boolean;
  clearStatus(): WhoamiResponseBody;

  getNode(): NodeMetadata | undefined;
  setNode(value?: NodeMetadata): WhoamiResponseBody;
  hasNode(): boolean;
  clearNode(): WhoamiResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhoamiResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: WhoamiResponseBody): WhoamiResponseBody.AsObject;
  static serializeBinaryToWriter(message: WhoamiResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhoamiResponseBody;
  static deserializeBinaryFromReader(message: WhoamiResponseBody, reader: jspb.BinaryReader): WhoamiResponseBody;
}

export namespace WhoamiResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
    node?: NodeMetadata.AsObject,
  }
}

export class NodeMetadata extends jspb.Message {
  getService(): yeying_api_common_message_pb.ServiceMetadata | undefined;
  setService(value?: yeying_api_common_message_pb.ServiceMetadata): NodeMetadata;
  hasService(): boolean;
  clearService(): NodeMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: NodeMetadata): NodeMetadata.AsObject;
  static serializeBinaryToWriter(message: NodeMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeMetadata;
  static deserializeBinaryFromReader(message: NodeMetadata, reader: jspb.BinaryReader): NodeMetadata;
}

export namespace NodeMetadata {
  export type AsObject = {
    service?: yeying_api_common_message_pb.ServiceMetadata.AsObject,
  }
}

