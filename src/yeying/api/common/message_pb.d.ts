import * as jspb from 'google-protobuf'

import * as yeying_api_common_code_pb from '../../../yeying/api/common/code_pb'; // proto import: "yeying/api/common/code.proto"


export class MessageHeader extends jspb.Message {
  getDid(): string;
  setDid(value: string): MessageHeader;

  getAuthtype(): yeying_api_common_code_pb.AuthenticateTypeEnum;
  setAuthtype(value: yeying_api_common_code_pb.AuthenticateTypeEnum): MessageHeader;

  getAuthcontent(): string;
  setAuthcontent(value: string): MessageHeader;

  getNonce(): string;
  setNonce(value: string): MessageHeader;

  getTimestamp(): string;
  setTimestamp(value: string): MessageHeader;

  getVersion(): number;
  setVersion(value: number): MessageHeader;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageHeader.AsObject;
  static toObject(includeInstance: boolean, msg: MessageHeader): MessageHeader.AsObject;
  static serializeBinaryToWriter(message: MessageHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageHeader;
  static deserializeBinaryFromReader(message: MessageHeader, reader: jspb.BinaryReader): MessageHeader;
}

export namespace MessageHeader {
  export type AsObject = {
    did: string,
    authtype: yeying_api_common_code_pb.AuthenticateTypeEnum,
    authcontent: string,
    nonce: string,
    timestamp: string,
    version: number,
  }
}

export class ResponseStatus extends jspb.Message {
  getCode(): yeying_api_common_code_pb.ResponseCodeEnum;
  setCode(value: yeying_api_common_code_pb.ResponseCodeEnum): ResponseStatus;

  getMessage(): string;
  setMessage(value: string): ResponseStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseStatus): ResponseStatus.AsObject;
  static serializeBinaryToWriter(message: ResponseStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseStatus;
  static deserializeBinaryFromReader(message: ResponseStatus, reader: jspb.BinaryReader): ResponseStatus;
}

export namespace ResponseStatus {
  export type AsObject = {
    code: yeying_api_common_code_pb.ResponseCodeEnum,
    message: string,
  }
}

export class ResponsePage extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): ResponsePage;

  getPage(): number;
  setPage(value: number): ResponsePage;

  getPagesize(): number;
  setPagesize(value: number): ResponsePage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponsePage.AsObject;
  static toObject(includeInstance: boolean, msg: ResponsePage): ResponsePage.AsObject;
  static serializeBinaryToWriter(message: ResponsePage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponsePage;
  static deserializeBinaryFromReader(message: ResponsePage, reader: jspb.BinaryReader): ResponsePage;
}

export namespace ResponsePage {
  export type AsObject = {
    total: number,
    page: number,
    pagesize: number,
  }
}

export class RequestPage extends jspb.Message {
  getPage(): number;
  setPage(value: number): RequestPage;

  getPagesize(): number;
  setPagesize(value: number): RequestPage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestPage.AsObject;
  static toObject(includeInstance: boolean, msg: RequestPage): RequestPage.AsObject;
  static serializeBinaryToWriter(message: RequestPage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestPage;
  static deserializeBinaryFromReader(message: RequestPage, reader: jspb.BinaryReader): RequestPage;
}

export namespace RequestPage {
  export type AsObject = {
    page: number,
    pagesize: number,
  }
}

