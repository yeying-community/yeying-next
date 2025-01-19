import * as jspb from 'google-protobuf'

import * as yeying_api_common_message_pb from '../../../yeying/api/common/message_pb'; // proto import: "yeying/api/common/message.proto"


export class InvitationMetadata extends jspb.Message {
  getScene(): InvitationSceneEnum;
  setScene(value: InvitationSceneEnum): InvitationMetadata;

  getCode(): string;
  setCode(value: string): InvitationMetadata;

  getCreated(): string;
  setCreated(value: string): InvitationMetadata;

  getExpired(): string;
  setExpired(value: string): InvitationMetadata;

  getUsed(): string;
  setUsed(value: string): InvitationMetadata;

  getInviter(): string;
  setInviter(value: string): InvitationMetadata;

  getInvitee(): string;
  setInvitee(value: string): InvitationMetadata;

  getSignature(): string;
  setSignature(value: string): InvitationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvitationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: InvitationMetadata): InvitationMetadata.AsObject;
  static serializeBinaryToWriter(message: InvitationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvitationMetadata;
  static deserializeBinaryFromReader(message: InvitationMetadata, reader: jspb.BinaryReader): InvitationMetadata;
}

export namespace InvitationMetadata {
  export type AsObject = {
    scene: InvitationSceneEnum,
    code: string,
    created: string,
    expired: string,
    used: string,
    inviter: string,
    invitee: string,
    signature: string,
  }
}

export class GenerateRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): GenerateRequest;
  hasHeader(): boolean;
  clearHeader(): GenerateRequest;

  getBody(): GenerateRequestBody | undefined;
  setBody(value?: GenerateRequestBody): GenerateRequest;
  hasBody(): boolean;
  clearBody(): GenerateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateRequest): GenerateRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateRequest;
  static deserializeBinaryFromReader(message: GenerateRequest, reader: jspb.BinaryReader): GenerateRequest;
}

export namespace GenerateRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: GenerateRequestBody.AsObject,
  }
}

export class GenerateRequestBody extends jspb.Message {
  getScene(): InvitationSceneEnum;
  setScene(value: InvitationSceneEnum): GenerateRequestBody;

  getCount(): number;
  setCount(value: number): GenerateRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateRequestBody): GenerateRequestBody.AsObject;
  static serializeBinaryToWriter(message: GenerateRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateRequestBody;
  static deserializeBinaryFromReader(message: GenerateRequestBody, reader: jspb.BinaryReader): GenerateRequestBody;
}

export namespace GenerateRequestBody {
  export type AsObject = {
    scene: InvitationSceneEnum,
    count: number,
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

export class GenerateResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): GenerateResponse;
  hasHeader(): boolean;
  clearHeader(): GenerateResponse;

  getBody(): GenerateResponseBody | undefined;
  setBody(value?: GenerateResponseBody): GenerateResponse;
  hasBody(): boolean;
  clearBody(): GenerateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateResponse): GenerateResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateResponse;
  static deserializeBinaryFromReader(message: GenerateResponse, reader: jspb.BinaryReader): GenerateResponse;
}

export namespace GenerateResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: GenerateResponseBody.AsObject,
  }
}

export class GenerateResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): GenerateResponseBody;
  hasStatus(): boolean;
  clearStatus(): GenerateResponseBody;

  getInvitationsList(): Array<InvitationMetadata>;
  setInvitationsList(value: Array<InvitationMetadata>): GenerateResponseBody;
  clearInvitationsList(): GenerateResponseBody;
  addInvitations(value?: InvitationMetadata, index?: number): InvitationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateResponseBody): GenerateResponseBody.AsObject;
  static serializeBinaryToWriter(message: GenerateResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateResponseBody;
  static deserializeBinaryFromReader(message: GenerateResponseBody, reader: jspb.BinaryReader): GenerateResponseBody;
}

export namespace GenerateResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
    invitationsList: Array<InvitationMetadata.AsObject>,
  }
}

export enum InvitationSceneEnum { 
  INVITATION_SCENE_UNKNOWN = 0,
  INVITATION_SCENE_USER = 1,
}
