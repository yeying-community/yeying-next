import * as jspb from 'google-protobuf'

import * as yeying_api_common_message_pb from '../../../yeying/api/common/message_pb'; // proto import: "yeying/api/common/message.proto"


export class SendRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): SendRequest;
  hasHeader(): boolean;
  clearHeader(): SendRequest;

  getBody(): SendRequestBody | undefined;
  setBody(value?: SendRequestBody): SendRequest;
  hasBody(): boolean;
  clearBody(): SendRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendRequest): SendRequest.AsObject;
  static serializeBinaryToWriter(message: SendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendRequest;
  static deserializeBinaryFromReader(message: SendRequest, reader: jspb.BinaryReader): SendRequest;
}

export namespace SendRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: SendRequestBody.AsObject,
  }
}

export class SendRequestBody extends jspb.Message {
  getTomail(): string;
  setTomail(value: string): SendRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: SendRequestBody): SendRequestBody.AsObject;
  static serializeBinaryToWriter(message: SendRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendRequestBody;
  static deserializeBinaryFromReader(message: SendRequestBody, reader: jspb.BinaryReader): SendRequestBody;
}

export namespace SendRequestBody {
  export type AsObject = {
    tomail: string,
  }
}

export class SendResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): SendResponse;
  hasHeader(): boolean;
  clearHeader(): SendResponse;

  getBody(): SendResponseBody | undefined;
  setBody(value?: SendResponseBody): SendResponse;
  hasBody(): boolean;
  clearBody(): SendResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendResponse): SendResponse.AsObject;
  static serializeBinaryToWriter(message: SendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendResponse;
  static deserializeBinaryFromReader(message: SendResponse, reader: jspb.BinaryReader): SendResponse;
}

export namespace SendResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: SendResponseBody.AsObject,
  }
}

export class SendResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): SendResponseBody;
  hasStatus(): boolean;
  clearStatus(): SendResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: SendResponseBody): SendResponseBody.AsObject;
  static serializeBinaryToWriter(message: SendResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendResponseBody;
  static deserializeBinaryFromReader(message: SendResponseBody, reader: jspb.BinaryReader): SendResponseBody;
}

export namespace SendResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class VerifyRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): VerifyRequest;
  hasHeader(): boolean;
  clearHeader(): VerifyRequest;

  getBody(): VerifyRequestBody | undefined;
  setBody(value?: VerifyRequestBody): VerifyRequest;
  hasBody(): boolean;
  clearBody(): VerifyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyRequest): VerifyRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyRequest;
  static deserializeBinaryFromReader(message: VerifyRequest, reader: jspb.BinaryReader): VerifyRequest;
}

export namespace VerifyRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: VerifyRequestBody.AsObject,
  }
}

export class VerifyRequestBody extends jspb.Message {
  getTomail(): string;
  setTomail(value: string): VerifyRequestBody;

  getCode(): string;
  setCode(value: string): VerifyRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyRequestBody): VerifyRequestBody.AsObject;
  static serializeBinaryToWriter(message: VerifyRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyRequestBody;
  static deserializeBinaryFromReader(message: VerifyRequestBody, reader: jspb.BinaryReader): VerifyRequestBody;
}

export namespace VerifyRequestBody {
  export type AsObject = {
    tomail: string,
    code: string,
  }
}

export class VerifyResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): VerifyResponse;
  hasHeader(): boolean;
  clearHeader(): VerifyResponse;

  getBody(): VerifyResponseBody | undefined;
  setBody(value?: VerifyResponseBody): VerifyResponse;
  hasBody(): boolean;
  clearBody(): VerifyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyResponse): VerifyResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyResponse;
  static deserializeBinaryFromReader(message: VerifyResponse, reader: jspb.BinaryReader): VerifyResponse;
}

export namespace VerifyResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: VerifyResponseBody.AsObject,
  }
}

export class VerifyResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): VerifyResponseBody;
  hasStatus(): boolean;
  clearStatus(): VerifyResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyResponseBody): VerifyResponseBody.AsObject;
  static serializeBinaryToWriter(message: VerifyResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyResponseBody;
  static deserializeBinaryFromReader(message: VerifyResponseBody, reader: jspb.BinaryReader): VerifyResponseBody;
}

export namespace VerifyResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

