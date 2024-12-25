import * as jspb from 'google-protobuf'

import * as yeying_api_common_message_pb from '../../../yeying/api/common/message_pb'; // proto import: "yeying/api/common/message.proto"


export class InvitationMetadata extends jspb.Message {
  getScene(): string;
  setScene(value: string): InvitationMetadata;

  getCode(): string;
  setCode(value: string): InvitationMetadata;

  getExpiredtime(): string;
  setExpiredtime(value: string): InvitationMetadata;

  getInviter(): string;
  setInviter(value: string): InvitationMetadata;

  getInvitee(): string;
  setInvitee(value: string): InvitationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvitationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: InvitationMetadata): InvitationMetadata.AsObject;
  static serializeBinaryToWriter(message: InvitationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvitationMetadata;
  static deserializeBinaryFromReader(message: InvitationMetadata, reader: jspb.BinaryReader): InvitationMetadata;
}

export namespace InvitationMetadata {
  export type AsObject = {
    scene: string,
    code: string,
    expiredtime: string,
    inviter: string,
    invitee: string,
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

export class InputRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): InputRequest;
  hasHeader(): boolean;
  clearHeader(): InputRequest;

  getBody(): InputRequestBody | undefined;
  setBody(value?: InputRequestBody): InputRequest;
  hasBody(): boolean;
  clearBody(): InputRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InputRequest): InputRequest.AsObject;
  static serializeBinaryToWriter(message: InputRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputRequest;
  static deserializeBinaryFromReader(message: InputRequest, reader: jspb.BinaryReader): InputRequest;
}

export namespace InputRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: InputRequestBody.AsObject,
  }
}

export class InputRequestBody extends jspb.Message {
  getCode(): string;
  setCode(value: string): InputRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: InputRequestBody): InputRequestBody.AsObject;
  static serializeBinaryToWriter(message: InputRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputRequestBody;
  static deserializeBinaryFromReader(message: InputRequestBody, reader: jspb.BinaryReader): InputRequestBody;
}

export namespace InputRequestBody {
  export type AsObject = {
    code: string,
  }
}

export class InputResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): InputResponse;
  hasHeader(): boolean;
  clearHeader(): InputResponse;

  getBody(): InputResponseBody | undefined;
  setBody(value?: InputResponseBody): InputResponse;
  hasBody(): boolean;
  clearBody(): InputResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InputResponse): InputResponse.AsObject;
  static serializeBinaryToWriter(message: InputResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputResponse;
  static deserializeBinaryFromReader(message: InputResponse, reader: jspb.BinaryReader): InputResponse;
}

export namespace InputResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: InputResponseBody.AsObject,
  }
}

export class InputResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): InputResponseBody;
  hasStatus(): boolean;
  clearStatus(): InputResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: InputResponseBody): InputResponseBody.AsObject;
  static serializeBinaryToWriter(message: InputResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputResponseBody;
  static deserializeBinaryFromReader(message: InputResponseBody, reader: jspb.BinaryReader): InputResponseBody;
}

export namespace InputResponseBody {
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
  INVITATION_SCENE_REGISTER = 1,
}
