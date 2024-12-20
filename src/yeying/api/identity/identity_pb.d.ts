import * as jspb from 'google-protobuf'

import * as yeying_api_common_message_pb from '../../../yeying/api/common/message_pb'; // proto import: "yeying/api/common/message.proto"
import * as yeying_api_common_code_pb from '../../../yeying/api/common/code_pb'; // proto import: "yeying/api/common/code.proto"


export class DepositRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): DepositRequest;
  hasHeader(): boolean;
  clearHeader(): DepositRequest;

  getBody(): DepositRequestBody | undefined;
  setBody(value?: DepositRequestBody): DepositRequest;
  hasBody(): boolean;
  clearBody(): DepositRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DepositRequest): DepositRequest.AsObject;
  static serializeBinaryToWriter(message: DepositRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositRequest;
  static deserializeBinaryFromReader(message: DepositRequest, reader: jspb.BinaryReader): DepositRequest;
}

export namespace DepositRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: DepositRequestBody.AsObject,
  }
}

export class DepositRequestBody extends jspb.Message {
  getCipher(): string;
  setCipher(value: string): DepositRequestBody;

  getProtocol(): string;
  setProtocol(value: string): DepositRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: DepositRequestBody): DepositRequestBody.AsObject;
  static serializeBinaryToWriter(message: DepositRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositRequestBody;
  static deserializeBinaryFromReader(message: DepositRequestBody, reader: jspb.BinaryReader): DepositRequestBody;
}

export namespace DepositRequestBody {
  export type AsObject = {
    cipher: string,
    protocol: string,
  }
}

export class DepositResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): DepositResponse;
  hasHeader(): boolean;
  clearHeader(): DepositResponse;

  getBody(): DepositResponseBody | undefined;
  setBody(value?: DepositResponseBody): DepositResponse;
  hasBody(): boolean;
  clearBody(): DepositResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DepositResponse): DepositResponse.AsObject;
  static serializeBinaryToWriter(message: DepositResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositResponse;
  static deserializeBinaryFromReader(message: DepositResponse, reader: jspb.BinaryReader): DepositResponse;
}

export namespace DepositResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: DepositResponseBody.AsObject,
  }
}

export class DepositResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): DepositResponseBody;
  hasStatus(): boolean;
  clearStatus(): DepositResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: DepositResponseBody): DepositResponseBody.AsObject;
  static serializeBinaryToWriter(message: DepositResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositResponseBody;
  static deserializeBinaryFromReader(message: DepositResponseBody, reader: jspb.BinaryReader): DepositResponseBody;
}

export namespace DepositResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class RetrieveRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): RetrieveRequest;
  hasHeader(): boolean;
  clearHeader(): RetrieveRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveRequest): RetrieveRequest.AsObject;
  static serializeBinaryToWriter(message: RetrieveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveRequest;
  static deserializeBinaryFromReader(message: RetrieveRequest, reader: jspb.BinaryReader): RetrieveRequest;
}

export namespace RetrieveRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
  }
}

export class RetrieveResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): RetrieveResponse;
  hasHeader(): boolean;
  clearHeader(): RetrieveResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveResponse): RetrieveResponse.AsObject;
  static serializeBinaryToWriter(message: RetrieveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveResponse;
  static deserializeBinaryFromReader(message: RetrieveResponse, reader: jspb.BinaryReader): RetrieveResponse;
}

export namespace RetrieveResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
  }
}

export class ShareRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): ShareRequest;
  hasHeader(): boolean;
  clearHeader(): ShareRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShareRequest): ShareRequest.AsObject;
  static serializeBinaryToWriter(message: ShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareRequest;
  static deserializeBinaryFromReader(message: ShareRequest, reader: jspb.BinaryReader): ShareRequest;
}

export namespace ShareRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
  }
}

export class ShareResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): ShareResponse;
  hasHeader(): boolean;
  clearHeader(): ShareResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShareResponse): ShareResponse.AsObject;
  static serializeBinaryToWriter(message: ShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareResponse;
  static deserializeBinaryFromReader(message: ShareResponse, reader: jspb.BinaryReader): ShareResponse;
}

export namespace ShareResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
  }
}

export class QueryRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): QueryRequest;
  hasHeader(): boolean;
  clearHeader(): QueryRequest;

  getBody(): QueryRequestBody | undefined;
  setBody(value?: QueryRequestBody): QueryRequest;
  hasBody(): boolean;
  clearBody(): QueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequest): QueryRequest.AsObject;
  static serializeBinaryToWriter(message: QueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequest;
  static deserializeBinaryFromReader(message: QueryRequest, reader: jspb.BinaryReader): QueryRequest;
}

export namespace QueryRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: QueryRequestBody.AsObject,
  }
}

export class QueryRequestBody extends jspb.Message {
  getServicecode(): yeying_api_common_code_pb.ServiceCodeEnum;
  setServicecode(value: yeying_api_common_code_pb.ServiceCodeEnum): QueryRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequestBody): QueryRequestBody.AsObject;
  static serializeBinaryToWriter(message: QueryRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequestBody;
  static deserializeBinaryFromReader(message: QueryRequestBody, reader: jspb.BinaryReader): QueryRequestBody;
}

export namespace QueryRequestBody {
  export type AsObject = {
    servicecode: yeying_api_common_code_pb.ServiceCodeEnum,
  }
}

export class QueryResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): QueryResponse;
  hasHeader(): boolean;
  clearHeader(): QueryResponse;

  getBody(): QueryResponseBody | undefined;
  setBody(value?: QueryResponseBody): QueryResponse;
  hasBody(): boolean;
  clearBody(): QueryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryResponse): QueryResponse.AsObject;
  static serializeBinaryToWriter(message: QueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryResponse;
  static deserializeBinaryFromReader(message: QueryResponse, reader: jspb.BinaryReader): QueryResponse;
}

export namespace QueryResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: QueryResponseBody.AsObject,
  }
}

export class QueryResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): QueryResponseBody;
  hasStatus(): boolean;
  clearStatus(): QueryResponseBody;

  getCipher(): string;
  setCipher(value: string): QueryResponseBody;

  getProtocol(): string;
  setProtocol(value: string): QueryResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: QueryResponseBody): QueryResponseBody.AsObject;
  static serializeBinaryToWriter(message: QueryResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryResponseBody;
  static deserializeBinaryFromReader(message: QueryResponseBody, reader: jspb.BinaryReader): QueryResponseBody;
}

export namespace QueryResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
    cipher: string,
    protocol: string,
  }
}

export class CancelRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): CancelRequest;
  hasHeader(): boolean;
  clearHeader(): CancelRequest;

  getBody(): CancelRequestBody | undefined;
  setBody(value?: CancelRequestBody): CancelRequest;
  hasBody(): boolean;
  clearBody(): CancelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelRequest): CancelRequest.AsObject;
  static serializeBinaryToWriter(message: CancelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelRequest;
  static deserializeBinaryFromReader(message: CancelRequest, reader: jspb.BinaryReader): CancelRequest;
}

export namespace CancelRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: CancelRequestBody.AsObject,
  }
}

export class CancelRequestBody extends jspb.Message {
  getDid(): string;
  setDid(value: string): CancelRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: CancelRequestBody): CancelRequestBody.AsObject;
  static serializeBinaryToWriter(message: CancelRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelRequestBody;
  static deserializeBinaryFromReader(message: CancelRequestBody, reader: jspb.BinaryReader): CancelRequestBody;
}

export namespace CancelRequestBody {
  export type AsObject = {
    did: string,
  }
}

export class CancelResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): CancelResponse;
  hasHeader(): boolean;
  clearHeader(): CancelResponse;

  getBody(): CancelResponseBody | undefined;
  setBody(value?: CancelResponseBody): CancelResponse;
  hasBody(): boolean;
  clearBody(): CancelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelResponse): CancelResponse.AsObject;
  static serializeBinaryToWriter(message: CancelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelResponse;
  static deserializeBinaryFromReader(message: CancelResponse, reader: jspb.BinaryReader): CancelResponse;
}

export namespace CancelResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: CancelResponseBody.AsObject,
  }
}

export class CancelResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): CancelResponseBody;
  hasStatus(): boolean;
  clearStatus(): CancelResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: CancelResponseBody): CancelResponseBody.AsObject;
  static serializeBinaryToWriter(message: CancelResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelResponseBody;
  static deserializeBinaryFromReader(message: CancelResponseBody, reader: jspb.BinaryReader): CancelResponseBody;
}

export namespace CancelResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

