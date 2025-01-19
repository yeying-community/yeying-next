import * as jspb from 'google-protobuf'

import * as yeying_api_common_message_pb from '../../../yeying/api/common/message_pb'; // proto import: "yeying/api/common/message.proto"
import * as yeying_api_common_code_pb from '../../../yeying/api/common/code_pb'; // proto import: "yeying/api/common/code.proto"


export class RegisterRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): RegisterRequest;
  hasHeader(): boolean;
  clearHeader(): RegisterRequest;

  getBody(): RegisterRequestBody | undefined;
  setBody(value?: RegisterRequestBody): RegisterRequest;
  hasBody(): boolean;
  clearBody(): RegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: RegisterRequestBody.AsObject,
  }
}

export class RegisterRequestBody extends jspb.Message {
  getService(): yeying_api_common_message_pb.ServiceMetadata | undefined;
  setService(value?: yeying_api_common_message_pb.ServiceMetadata): RegisterRequestBody;
  hasService(): boolean;
  clearService(): RegisterRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequestBody): RegisterRequestBody.AsObject;
  static serializeBinaryToWriter(message: RegisterRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequestBody;
  static deserializeBinaryFromReader(message: RegisterRequestBody, reader: jspb.BinaryReader): RegisterRequestBody;
}

export namespace RegisterRequestBody {
  export type AsObject = {
    service?: yeying_api_common_message_pb.ServiceMetadata.AsObject,
  }
}

export class RegisterResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): RegisterResponse;
  hasHeader(): boolean;
  clearHeader(): RegisterResponse;

  getBody(): RegisterResponseBody | undefined;
  setBody(value?: RegisterResponseBody): RegisterResponse;
  hasBody(): boolean;
  clearBody(): RegisterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: RegisterResponseBody.AsObject,
  }
}

export class RegisterResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): RegisterResponseBody;
  hasStatus(): boolean;
  clearStatus(): RegisterResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponseBody): RegisterResponseBody.AsObject;
  static serializeBinaryToWriter(message: RegisterResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponseBody;
  static deserializeBinaryFromReader(message: RegisterResponseBody, reader: jspb.BinaryReader): RegisterResponseBody;
}

export namespace RegisterResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class SearchRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): SearchRequest;
  hasHeader(): boolean;
  clearHeader(): SearchRequest;

  getBody(): SearchRequestBody | undefined;
  setBody(value?: SearchRequestBody): SearchRequest;
  hasBody(): boolean;
  clearBody(): SearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
  static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequest;
  static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: SearchRequestBody.AsObject,
  }
}

export class SearchRequestBody extends jspb.Message {
  getCondition(): SearchCondition | undefined;
  setCondition(value?: SearchCondition): SearchRequestBody;
  hasCondition(): boolean;
  clearCondition(): SearchRequestBody;

  getPage(): yeying_api_common_message_pb.RequestPage | undefined;
  setPage(value?: yeying_api_common_message_pb.RequestPage): SearchRequestBody;
  hasPage(): boolean;
  clearPage(): SearchRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequestBody): SearchRequestBody.AsObject;
  static serializeBinaryToWriter(message: SearchRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequestBody;
  static deserializeBinaryFromReader(message: SearchRequestBody, reader: jspb.BinaryReader): SearchRequestBody;
}

export namespace SearchRequestBody {
  export type AsObject = {
    condition?: SearchCondition.AsObject,
    page?: yeying_api_common_message_pb.RequestPage.AsObject,
  }
}

export class SearchCondition extends jspb.Message {
  getCode(): yeying_api_common_code_pb.ServiceCodeEnum;
  setCode(value: yeying_api_common_code_pb.ServiceCodeEnum): SearchCondition;

  getOwner(): string;
  setOwner(value: string): SearchCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchCondition.AsObject;
  static toObject(includeInstance: boolean, msg: SearchCondition): SearchCondition.AsObject;
  static serializeBinaryToWriter(message: SearchCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchCondition;
  static deserializeBinaryFromReader(message: SearchCondition, reader: jspb.BinaryReader): SearchCondition;
}

export namespace SearchCondition {
  export type AsObject = {
    code: yeying_api_common_code_pb.ServiceCodeEnum,
    owner: string,
  }
}

export class SearchResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): SearchResponse;
  hasHeader(): boolean;
  clearHeader(): SearchResponse;

  getBody(): SearchResponseBody | undefined;
  setBody(value?: SearchResponseBody): SearchResponse;
  hasBody(): boolean;
  clearBody(): SearchResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchResponse): SearchResponse.AsObject;
  static serializeBinaryToWriter(message: SearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchResponse;
  static deserializeBinaryFromReader(message: SearchResponse, reader: jspb.BinaryReader): SearchResponse;
}

export namespace SearchResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: SearchResponseBody.AsObject,
  }
}

export class SearchResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): SearchResponseBody;
  hasStatus(): boolean;
  clearStatus(): SearchResponseBody;

  getServicesList(): Array<yeying_api_common_message_pb.ServiceMetadata>;
  setServicesList(value: Array<yeying_api_common_message_pb.ServiceMetadata>): SearchResponseBody;
  clearServicesList(): SearchResponseBody;
  addServices(value?: yeying_api_common_message_pb.ServiceMetadata, index?: number): yeying_api_common_message_pb.ServiceMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: SearchResponseBody): SearchResponseBody.AsObject;
  static serializeBinaryToWriter(message: SearchResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchResponseBody;
  static deserializeBinaryFromReader(message: SearchResponseBody, reader: jspb.BinaryReader): SearchResponseBody;
}

export namespace SearchResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
    servicesList: Array<yeying_api_common_message_pb.ServiceMetadata.AsObject>,
  }
}

export class UnregisterRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): UnregisterRequest;
  hasHeader(): boolean;
  clearHeader(): UnregisterRequest;

  getBody(): UnregisterRequestBody | undefined;
  setBody(value?: UnregisterRequestBody): UnregisterRequest;
  hasBody(): boolean;
  clearBody(): UnregisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnregisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnregisterRequest): UnregisterRequest.AsObject;
  static serializeBinaryToWriter(message: UnregisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnregisterRequest;
  static deserializeBinaryFromReader(message: UnregisterRequest, reader: jspb.BinaryReader): UnregisterRequest;
}

export namespace UnregisterRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: UnregisterRequestBody.AsObject,
  }
}

export class UnregisterRequestBody extends jspb.Message {
  getDid(): string;
  setDid(value: string): UnregisterRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnregisterRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: UnregisterRequestBody): UnregisterRequestBody.AsObject;
  static serializeBinaryToWriter(message: UnregisterRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnregisterRequestBody;
  static deserializeBinaryFromReader(message: UnregisterRequestBody, reader: jspb.BinaryReader): UnregisterRequestBody;
}

export namespace UnregisterRequestBody {
  export type AsObject = {
    did: string,
  }
}

export class UnregisterResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): UnregisterResponse;
  hasHeader(): boolean;
  clearHeader(): UnregisterResponse;

  getBody(): UnregisterResponseBody | undefined;
  setBody(value?: UnregisterResponseBody): UnregisterResponse;
  hasBody(): boolean;
  clearBody(): UnregisterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnregisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnregisterResponse): UnregisterResponse.AsObject;
  static serializeBinaryToWriter(message: UnregisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnregisterResponse;
  static deserializeBinaryFromReader(message: UnregisterResponse, reader: jspb.BinaryReader): UnregisterResponse;
}

export namespace UnregisterResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: UnregisterResponseBody.AsObject,
  }
}

export class UnregisterResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): UnregisterResponseBody;
  hasStatus(): boolean;
  clearStatus(): UnregisterResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnregisterResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: UnregisterResponseBody): UnregisterResponseBody.AsObject;
  static serializeBinaryToWriter(message: UnregisterResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnregisterResponseBody;
  static deserializeBinaryFromReader(message: UnregisterResponseBody, reader: jspb.BinaryReader): UnregisterResponseBody;
}

export namespace UnregisterResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

