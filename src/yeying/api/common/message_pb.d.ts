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

export class ServiceMetadata extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): ServiceMetadata;

  getNetwork(): number;
  setNetwork(value: number): ServiceMetadata;

  getAddress(): string;
  setAddress(value: string): ServiceMetadata;

  getDid(): string;
  setDid(value: string): ServiceMetadata;

  getVersion(): number;
  setVersion(value: number): ServiceMetadata;

  getName(): string;
  setName(value: string): ServiceMetadata;

  getDescription(): string;
  setDescription(value: string): ServiceMetadata;

  getCode(): yeying_api_common_code_pb.ServiceCodeEnum;
  setCode(value: yeying_api_common_code_pb.ServiceCodeEnum): ServiceMetadata;

  getApisList(): Array<yeying_api_common_code_pb.ApiCodeEnum>;
  setApisList(value: Array<yeying_api_common_code_pb.ApiCodeEnum>): ServiceMetadata;
  clearApisList(): ServiceMetadata;
  addApis(value: yeying_api_common_code_pb.ApiCodeEnum, index?: number): ServiceMetadata;

  getProxy(): string;
  setProxy(value: string): ServiceMetadata;

  getGrpc(): string;
  setGrpc(value: string): ServiceMetadata;

  getAvatar(): string;
  setAvatar(value: string): ServiceMetadata;

  getCreated(): string;
  setCreated(value: string): ServiceMetadata;

  getCheckpoint(): string;
  setCheckpoint(value: string): ServiceMetadata;

  getSignature(): string;
  setSignature(value: string): ServiceMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceMetadata): ServiceMetadata.AsObject;
  static serializeBinaryToWriter(message: ServiceMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceMetadata;
  static deserializeBinaryFromReader(message: ServiceMetadata, reader: jspb.BinaryReader): ServiceMetadata;
}

export namespace ServiceMetadata {
  export type AsObject = {
    owner: string,
    network: number,
    address: string,
    did: string,
    version: number,
    name: string,
    description: string,
    code: yeying_api_common_code_pb.ServiceCodeEnum,
    apisList: Array<yeying_api_common_code_pb.ApiCodeEnum>,
    proxy: string,
    grpc: string,
    avatar: string,
    created: string,
    checkpoint: string,
    signature: string,
  }
}

