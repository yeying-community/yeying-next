import * as jspb from 'google-protobuf'

import * as yeying_api_common_message_pb from '../../../yeying/api/common/message_pb'; // proto import: "yeying/api/common/message.proto"


export class UserMetadata extends jspb.Message {
  getName(): string;
  setName(value: string): UserMetadata;

  getAvatar(): string;
  setAvatar(value: string): UserMetadata;

  getDid(): string;
  setDid(value: string): UserMetadata;

  getRole(): UserRoleEnum;
  setRole(value: UserRoleEnum): UserMetadata;

  getExtend(): string;
  setExtend(value: string): UserMetadata;

  getStatus(): UserStatusEnum;
  setStatus(value: UserStatusEnum): UserMetadata;

  getCreated(): string;
  setCreated(value: string): UserMetadata;

  getCheckpoint(): string;
  setCheckpoint(value: string): UserMetadata;

  getSignature(): string;
  setSignature(value: string): UserMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: UserMetadata): UserMetadata.AsObject;
  static serializeBinaryToWriter(message: UserMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserMetadata;
  static deserializeBinaryFromReader(message: UserMetadata, reader: jspb.BinaryReader): UserMetadata;
}

export namespace UserMetadata {
  export type AsObject = {
    name: string,
    avatar: string,
    did: string,
    role: UserRoleEnum,
    extend: string,
    status: UserStatusEnum,
    created: string,
    checkpoint: string,
    signature: string,
  }
}

export class AddRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): AddRequest;
  hasHeader(): boolean;
  clearHeader(): AddRequest;

  getBody(): AddRequestBody | undefined;
  setBody(value?: AddRequestBody): AddRequest;
  hasBody(): boolean;
  clearBody(): AddRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddRequest): AddRequest.AsObject;
  static serializeBinaryToWriter(message: AddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRequest;
  static deserializeBinaryFromReader(message: AddRequest, reader: jspb.BinaryReader): AddRequest;
}

export namespace AddRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: AddRequestBody.AsObject,
  }
}

export class AddRequestBody extends jspb.Message {
  getName(): string;
  setName(value: string): AddRequestBody;

  getAvatar(): string;
  setAvatar(value: string): AddRequestBody;

  getExtend(): string;
  setExtend(value: string): AddRequestBody;

  getCreated(): string;
  setCreated(value: string): AddRequestBody;

  getCheckpoint(): string;
  setCheckpoint(value: string): AddRequestBody;

  getSignature(): string;
  setSignature(value: string): AddRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: AddRequestBody): AddRequestBody.AsObject;
  static serializeBinaryToWriter(message: AddRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRequestBody;
  static deserializeBinaryFromReader(message: AddRequestBody, reader: jspb.BinaryReader): AddRequestBody;
}

export namespace AddRequestBody {
  export type AsObject = {
    name: string,
    avatar: string,
    extend: string,
    created: string,
    checkpoint: string,
    signature: string,
  }
}

export class AddResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): AddResponse;
  hasHeader(): boolean;
  clearHeader(): AddResponse;

  getBody(): AddResponseBody | undefined;
  setBody(value?: AddResponseBody): AddResponse;
  hasBody(): boolean;
  clearBody(): AddResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddResponse): AddResponse.AsObject;
  static serializeBinaryToWriter(message: AddResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddResponse;
  static deserializeBinaryFromReader(message: AddResponse, reader: jspb.BinaryReader): AddResponse;
}

export namespace AddResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: AddResponseBody.AsObject,
  }
}

export class AddResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): AddResponseBody;
  hasStatus(): boolean;
  clearStatus(): AddResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: AddResponseBody): AddResponseBody.AsObject;
  static serializeBinaryToWriter(message: AddResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddResponseBody;
  static deserializeBinaryFromReader(message: AddResponseBody, reader: jspb.BinaryReader): AddResponseBody;
}

export namespace AddResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class ModRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): ModRequest;
  hasHeader(): boolean;
  clearHeader(): ModRequest;

  getBody(): ModRequestBody | undefined;
  setBody(value?: ModRequestBody): ModRequest;
  hasBody(): boolean;
  clearBody(): ModRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModRequest): ModRequest.AsObject;
  static serializeBinaryToWriter(message: ModRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModRequest;
  static deserializeBinaryFromReader(message: ModRequest, reader: jspb.BinaryReader): ModRequest;
}

export namespace ModRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: ModRequestBody.AsObject,
  }
}

export class ModRequestBody extends jspb.Message {
  getName(): string;
  setName(value: string): ModRequestBody;

  getAvatar(): string;
  setAvatar(value: string): ModRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: ModRequestBody): ModRequestBody.AsObject;
  static serializeBinaryToWriter(message: ModRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModRequestBody;
  static deserializeBinaryFromReader(message: ModRequestBody, reader: jspb.BinaryReader): ModRequestBody;
}

export namespace ModRequestBody {
  export type AsObject = {
    name: string,
    avatar: string,
  }
}

export class ModResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): ModResponse;
  hasHeader(): boolean;
  clearHeader(): ModResponse;

  getBody(): ModResponseBody | undefined;
  setBody(value?: ModResponseBody): ModResponse;
  hasBody(): boolean;
  clearBody(): ModResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModResponse): ModResponse.AsObject;
  static serializeBinaryToWriter(message: ModResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModResponse;
  static deserializeBinaryFromReader(message: ModResponse, reader: jspb.BinaryReader): ModResponse;
}

export namespace ModResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: ModResponseBody.AsObject,
  }
}

export class ModResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): ModResponseBody;
  hasStatus(): boolean;
  clearStatus(): ModResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: ModResponseBody): ModResponseBody.AsObject;
  static serializeBinaryToWriter(message: ModResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModResponseBody;
  static deserializeBinaryFromReader(message: ModResponseBody, reader: jspb.BinaryReader): ModResponseBody;
}

export namespace ModResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class DelRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): DelRequest;
  hasHeader(): boolean;
  clearHeader(): DelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DelRequest): DelRequest.AsObject;
  static serializeBinaryToWriter(message: DelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelRequest;
  static deserializeBinaryFromReader(message: DelRequest, reader: jspb.BinaryReader): DelRequest;
}

export namespace DelRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
  }
}

export class DelResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): DelResponse;
  hasHeader(): boolean;
  clearHeader(): DelResponse;

  getBody(): DelResponseBody | undefined;
  setBody(value?: DelResponseBody): DelResponse;
  hasBody(): boolean;
  clearBody(): DelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DelResponse): DelResponse.AsObject;
  static serializeBinaryToWriter(message: DelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelResponse;
  static deserializeBinaryFromReader(message: DelResponse, reader: jspb.BinaryReader): DelResponse;
}

export namespace DelResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: DelResponseBody.AsObject,
  }
}

export class DelResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): DelResponseBody;
  hasStatus(): boolean;
  clearStatus(): DelResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: DelResponseBody): DelResponseBody.AsObject;
  static serializeBinaryToWriter(message: DelResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelResponseBody;
  static deserializeBinaryFromReader(message: DelResponseBody, reader: jspb.BinaryReader): DelResponseBody;
}

export namespace DelResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class GetRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): GetRequest;
  hasHeader(): boolean;
  clearHeader(): GetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
  }
}

export class GetResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): GetResponse;
  hasHeader(): boolean;
  clearHeader(): GetResponse;

  getBody(): GetResponseBody | undefined;
  setBody(value?: GetResponseBody): GetResponse;
  hasBody(): boolean;
  clearBody(): GetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: GetResponseBody.AsObject,
  }
}

export class GetResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): GetResponseBody;
  hasStatus(): boolean;
  clearStatus(): GetResponseBody;

  getUser(): UserMetadata | undefined;
  setUser(value?: UserMetadata): GetResponseBody;
  hasUser(): boolean;
  clearUser(): GetResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponseBody): GetResponseBody.AsObject;
  static serializeBinaryToWriter(message: GetResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponseBody;
  static deserializeBinaryFromReader(message: GetResponseBody, reader: jspb.BinaryReader): GetResponseBody;
}

export namespace GetResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
    user?: UserMetadata.AsObject,
  }
}

export enum UserStatusEnum { 
  USER_STATUS_UNKNOWN = 0,
  USER_STATUS_ACTIVE = 1,
  USER_STATUS_OFFLINE = 2,
  USER_STATUS_DISABLE = 3,
  USER_STATUS_LOCK = 4,
  USER_STATUS_UNVERIFIED = 5,
  USER_STATUS_DELETED = 6,
  USER_STATUS_DORMANT = 7,
  USER_STATUS_FREEZE = 8,
  USER_STATUS_AUDIT = 9,
  USER_STATUS_REFUSED = 10,
}
export enum UserRoleEnum { 
  USER_ROLE_UNKNOWN = 0,
  USER_ROLE_OWNER = 1,
  USER_ROLE_NORMAL = 2,
}
