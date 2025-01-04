import * as jspb from 'google-protobuf'

import * as yeying_api_common_message_pb from '../../../yeying/api/common/message_pb'; // proto import: "yeying/api/common/message.proto"
import * as yeying_api_common_code_pb from '../../../yeying/api/common/code_pb'; // proto import: "yeying/api/common/code.proto"


export class EchoRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): EchoRequest;
  hasHeader(): boolean;
  clearHeader(): EchoRequest;

  getBody(): EchoRequestBody | undefined;
  setBody(value?: EchoRequestBody): EchoRequest;
  hasBody(): boolean;
  clearBody(): EchoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EchoRequest): EchoRequest.AsObject;
  static serializeBinaryToWriter(message: EchoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoRequest;
  static deserializeBinaryFromReader(message: EchoRequest, reader: jspb.BinaryReader): EchoRequest;
}

export namespace EchoRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: EchoRequestBody.AsObject,
  }
}

export class EchoRequestBody extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): EchoRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: EchoRequestBody): EchoRequestBody.AsObject;
  static serializeBinaryToWriter(message: EchoRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoRequestBody;
  static deserializeBinaryFromReader(message: EchoRequestBody, reader: jspb.BinaryReader): EchoRequestBody;
}

export namespace EchoRequestBody {
  export type AsObject = {
    message: string,
  }
}

export class EchoResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): EchoResponse;
  hasHeader(): boolean;
  clearHeader(): EchoResponse;

  getBody(): EchoResponseBody | undefined;
  setBody(value?: EchoResponseBody): EchoResponse;
  hasBody(): boolean;
  clearBody(): EchoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EchoResponse): EchoResponse.AsObject;
  static serializeBinaryToWriter(message: EchoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoResponse;
  static deserializeBinaryFromReader(message: EchoResponse, reader: jspb.BinaryReader): EchoResponse;
}

export namespace EchoResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: EchoResponseBody.AsObject,
  }
}

export class EchoResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): EchoResponseBody;
  hasStatus(): boolean;
  clearStatus(): EchoResponseBody;

  getMessage(): string;
  setMessage(value: string): EchoResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: EchoResponseBody): EchoResponseBody.AsObject;
  static serializeBinaryToWriter(message: EchoResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoResponseBody;
  static deserializeBinaryFromReader(message: EchoResponseBody, reader: jspb.BinaryReader): EchoResponseBody;
}

export namespace EchoResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
    message: string,
  }
}

