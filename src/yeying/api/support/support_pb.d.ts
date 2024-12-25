import * as jspb from 'google-protobuf'

import * as yeying_api_common_message_pb from '../../../yeying/api/common/message_pb'; // proto import: "yeying/api/common/message.proto"


export class CollectRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): CollectRequest;
  hasHeader(): boolean;
  clearHeader(): CollectRequest;

  getBody(): CollectRequestBody | undefined;
  setBody(value?: CollectRequestBody): CollectRequest;
  hasBody(): boolean;
  clearBody(): CollectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CollectRequest): CollectRequest.AsObject;
  static serializeBinaryToWriter(message: CollectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectRequest;
  static deserializeBinaryFromReader(message: CollectRequest, reader: jspb.BinaryReader): CollectRequest;
}

export namespace CollectRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: CollectRequestBody.AsObject,
  }
}

export class CollectRequestBody extends jspb.Message {
  getCode(): SupportCodeEnum;
  setCode(value: SupportCodeEnum): CollectRequestBody;

  getFaq(): FaqMetadata | undefined;
  setFaq(value?: FaqMetadata): CollectRequestBody;
  hasFaq(): boolean;
  clearFaq(): CollectRequestBody;

  getDataCase(): CollectRequestBody.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: CollectRequestBody): CollectRequestBody.AsObject;
  static serializeBinaryToWriter(message: CollectRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectRequestBody;
  static deserializeBinaryFromReader(message: CollectRequestBody, reader: jspb.BinaryReader): CollectRequestBody;
}

export namespace CollectRequestBody {
  export type AsObject = {
    code: SupportCodeEnum,
    faq?: FaqMetadata.AsObject,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    FAQ = 3,
  }
}

export class FaqMetadata extends jspb.Message {
  getDid(): string;
  setDid(value: string): FaqMetadata;

  getEmail(): string;
  setEmail(value: string): FaqMetadata;

  getType(): string;
  setType(value: string): FaqMetadata;

  getDescription(): string;
  setDescription(value: string): FaqMetadata;

  getCreated(): string;
  setCreated(value: string): FaqMetadata;

  getSignature(): string;
  setSignature(value: string): FaqMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaqMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: FaqMetadata): FaqMetadata.AsObject;
  static serializeBinaryToWriter(message: FaqMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaqMetadata;
  static deserializeBinaryFromReader(message: FaqMetadata, reader: jspb.BinaryReader): FaqMetadata;
}

export namespace FaqMetadata {
  export type AsObject = {
    did: string,
    email: string,
    type: string,
    description: string,
    created: string,
    signature: string,
  }
}

export class CollectResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): CollectResponse;
  hasHeader(): boolean;
  clearHeader(): CollectResponse;

  getBody(): CollectResponseBody | undefined;
  setBody(value?: CollectResponseBody): CollectResponse;
  hasBody(): boolean;
  clearBody(): CollectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CollectResponse): CollectResponse.AsObject;
  static serializeBinaryToWriter(message: CollectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectResponse;
  static deserializeBinaryFromReader(message: CollectResponse, reader: jspb.BinaryReader): CollectResponse;
}

export namespace CollectResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: CollectResponseBody.AsObject,
  }
}

export class CollectResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): CollectResponseBody;
  hasStatus(): boolean;
  clearStatus(): CollectResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: CollectResponseBody): CollectResponseBody.AsObject;
  static serializeBinaryToWriter(message: CollectResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectResponseBody;
  static deserializeBinaryFromReader(message: CollectResponseBody, reader: jspb.BinaryReader): CollectResponseBody;
}

export namespace CollectResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export enum SupportCodeEnum { 
  SUPPORT_CODE_FAQ = 0,
  SUPPORT_CODE_CSR = 1,
  SUPPORT_CODE_IVR = 2,
}
