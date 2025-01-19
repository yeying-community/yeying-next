import * as jspb from 'google-protobuf'

import * as yeying_api_common_message_pb from '../../../yeying/api/common/message_pb'; // proto import: "yeying/api/common/message.proto"


export class UserMetadata extends jspb.Message {
  getDid(): string;
  setDid(value: string): UserMetadata;

  getName(): string;
  setName(value: string): UserMetadata;

  getAvatar(): string;
  setAvatar(value: string): UserMetadata;

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
    did: string,
    name: string,
    avatar: string,
    created: string,
    checkpoint: string,
    signature: string,
  }
}

export class StateMetadata extends jspb.Message {
  getDid(): string;
  setDid(value: string): StateMetadata;

  getRole(): UserRoleEnum;
  setRole(value: UserRoleEnum): StateMetadata;

  getStatus(): UserStatusEnum;
  setStatus(value: UserStatusEnum): StateMetadata;

  getCreated(): string;
  setCreated(value: string): StateMetadata;

  getCheckpoint(): string;
  setCheckpoint(value: string): StateMetadata;

  getSignature(): string;
  setSignature(value: string): StateMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: StateMetadata): StateMetadata.AsObject;
  static serializeBinaryToWriter(message: StateMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateMetadata;
  static deserializeBinaryFromReader(message: StateMetadata, reader: jspb.BinaryReader): StateMetadata;
}

export namespace StateMetadata {
  export type AsObject = {
    did: string,
    role: UserRoleEnum,
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
  getUser(): UserMetadata | undefined;
  setUser(value?: UserMetadata): AddRequestBody;
  hasUser(): boolean;
  clearUser(): AddRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: AddRequestBody): AddRequestBody.AsObject;
  static serializeBinaryToWriter(message: AddRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRequestBody;
  static deserializeBinaryFromReader(message: AddRequestBody, reader: jspb.BinaryReader): AddRequestBody;
}

export namespace AddRequestBody {
  export type AsObject = {
    user?: UserMetadata.AsObject,
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

export class UpdateRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): UpdateRequest;
  hasHeader(): boolean;
  clearHeader(): UpdateRequest;

  getBody(): UpdateRequestBody | undefined;
  setBody(value?: UpdateRequestBody): UpdateRequest;
  hasBody(): boolean;
  clearBody(): UpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequest;
  static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: UpdateRequestBody.AsObject,
  }
}

export class UpdateRequestBody extends jspb.Message {
  getUser(): UserMetadata | undefined;
  setUser(value?: UserMetadata): UpdateRequestBody;
  hasUser(): boolean;
  clearUser(): UpdateRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequestBody): UpdateRequestBody.AsObject;
  static serializeBinaryToWriter(message: UpdateRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequestBody;
  static deserializeBinaryFromReader(message: UpdateRequestBody, reader: jspb.BinaryReader): UpdateRequestBody;
}

export namespace UpdateRequestBody {
  export type AsObject = {
    user?: UserMetadata.AsObject,
  }
}

export class UpdateResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): UpdateResponse;
  hasHeader(): boolean;
  clearHeader(): UpdateResponse;

  getBody(): UpdateResponseBody | undefined;
  setBody(value?: UpdateResponseBody): UpdateResponse;
  hasBody(): boolean;
  clearBody(): UpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResponse;
  static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: UpdateResponseBody.AsObject,
  }
}

export class UpdateResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): UpdateResponseBody;
  hasStatus(): boolean;
  clearStatus(): UpdateResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResponseBody): UpdateResponseBody.AsObject;
  static serializeBinaryToWriter(message: UpdateResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResponseBody;
  static deserializeBinaryFromReader(message: UpdateResponseBody, reader: jspb.BinaryReader): UpdateResponseBody;
}

export namespace UpdateResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class DeleteRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): DeleteRequest;
  hasHeader(): boolean;
  clearHeader(): DeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
  }
}

export class DeleteResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): DeleteResponse;
  hasHeader(): boolean;
  clearHeader(): DeleteResponse;

  getBody(): DeleteResponseBody | undefined;
  setBody(value?: DeleteResponseBody): DeleteResponse;
  hasBody(): boolean;
  clearBody(): DeleteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: DeleteResponseBody.AsObject,
  }
}

export class DeleteResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): DeleteResponseBody;
  hasStatus(): boolean;
  clearStatus(): DeleteResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponseBody): DeleteResponseBody.AsObject;
  static serializeBinaryToWriter(message: DeleteResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponseBody;
  static deserializeBinaryFromReader(message: DeleteResponseBody, reader: jspb.BinaryReader): DeleteResponseBody;
}

export namespace DeleteResponseBody {
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

export class StateRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): StateRequest;
  hasHeader(): boolean;
  clearHeader(): StateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StateRequest): StateRequest.AsObject;
  static serializeBinaryToWriter(message: StateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateRequest;
  static deserializeBinaryFromReader(message: StateRequest, reader: jspb.BinaryReader): StateRequest;
}

export namespace StateRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
  }
}

export class StateResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): StateResponse;
  hasHeader(): boolean;
  clearHeader(): StateResponse;

  getBody(): StateResponseBody | undefined;
  setBody(value?: StateResponseBody): StateResponse;
  hasBody(): boolean;
  clearBody(): StateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StateResponse): StateResponse.AsObject;
  static serializeBinaryToWriter(message: StateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateResponse;
  static deserializeBinaryFromReader(message: StateResponse, reader: jspb.BinaryReader): StateResponse;
}

export namespace StateResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: StateResponseBody.AsObject,
  }
}

export class StateResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): StateResponseBody;
  hasStatus(): boolean;
  clearStatus(): StateResponseBody;

  getState(): StateMetadata | undefined;
  setState(value?: StateMetadata): StateResponseBody;
  hasState(): boolean;
  clearState(): StateResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: StateResponseBody): StateResponseBody.AsObject;
  static serializeBinaryToWriter(message: StateResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateResponseBody;
  static deserializeBinaryFromReader(message: StateResponseBody, reader: jspb.BinaryReader): StateResponseBody;
}

export namespace StateResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
    state?: StateMetadata.AsObject,
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
