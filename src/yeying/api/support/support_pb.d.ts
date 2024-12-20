import * as jspb from 'google-protobuf'

import * as yeying_api_common_message_pb from '../../../yeying/api/common/message_pb'; // proto import: "yeying/api/common/message.proto"


export class SaveFaqRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): SaveFaqRequest;
  hasHeader(): boolean;
  clearHeader(): SaveFaqRequest;

  getBody(): SaveFaqRequestBody | undefined;
  setBody(value?: SaveFaqRequestBody): SaveFaqRequest;
  hasBody(): boolean;
  clearBody(): SaveFaqRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveFaqRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveFaqRequest): SaveFaqRequest.AsObject;
  static serializeBinaryToWriter(message: SaveFaqRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveFaqRequest;
  static deserializeBinaryFromReader(message: SaveFaqRequest, reader: jspb.BinaryReader): SaveFaqRequest;
}

export namespace SaveFaqRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: SaveFaqRequestBody.AsObject,
  }
}

export class SaveFaqRequestBody extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): SaveFaqRequestBody;

  getType(): string;
  setType(value: string): SaveFaqRequestBody;

  getDescription(): string;
  setDescription(value: string): SaveFaqRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveFaqRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: SaveFaqRequestBody): SaveFaqRequestBody.AsObject;
  static serializeBinaryToWriter(message: SaveFaqRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveFaqRequestBody;
  static deserializeBinaryFromReader(message: SaveFaqRequestBody, reader: jspb.BinaryReader): SaveFaqRequestBody;
}

export namespace SaveFaqRequestBody {
  export type AsObject = {
    email: string,
    type: string,
    description: string,
  }
}

export class SaveFaqResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): SaveFaqResponse;
  hasHeader(): boolean;
  clearHeader(): SaveFaqResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveFaqResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SaveFaqResponse): SaveFaqResponse.AsObject;
  static serializeBinaryToWriter(message: SaveFaqResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveFaqResponse;
  static deserializeBinaryFromReader(message: SaveFaqResponse, reader: jspb.BinaryReader): SaveFaqResponse;
}

export namespace SaveFaqResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
  }
}

export enum SupportCodeEnum { 
  SUPPORT_CODE_FAQ = 0,
  SUPPORT_CODE_CSR = 1,
  SUPPORT_CODE_IVR = 2,
}
