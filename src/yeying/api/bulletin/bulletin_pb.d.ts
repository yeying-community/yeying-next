import * as jspb from 'google-protobuf'

import * as yeying_api_common_message_pb from '../../../yeying/api/common/message_pb'; // proto import: "yeying/api/common/message.proto"
import * as yeying_api_common_code_pb from '../../../yeying/api/common/code_pb'; // proto import: "yeying/api/common/code.proto"


export class ListRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): ListRequest;
  hasHeader(): boolean;
  clearHeader(): ListRequest;

  getBody(): ListRequestBody | undefined;
  setBody(value?: ListRequestBody): ListRequest;
  hasBody(): boolean;
  clearBody(): ListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: ListRequestBody.AsObject,
  }
}

export class ListRequestBody extends jspb.Message {
  getBulletincode(): BulletinCodeEnum;
  setBulletincode(value: BulletinCodeEnum): ListRequestBody;

  getLanguagecode(): yeying_api_common_code_pb.LanguageCodeEnum;
  setLanguagecode(value: yeying_api_common_code_pb.LanguageCodeEnum): ListRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequestBody): ListRequestBody.AsObject;
  static serializeBinaryToWriter(message: ListRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequestBody;
  static deserializeBinaryFromReader(message: ListRequestBody, reader: jspb.BinaryReader): ListRequestBody;
}

export namespace ListRequestBody {
  export type AsObject = {
    bulletincode: BulletinCodeEnum,
    languagecode: yeying_api_common_code_pb.LanguageCodeEnum,
  }
}

export class ListResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): ListResponse;
  hasHeader(): boolean;
  clearHeader(): ListResponse;

  getBody(): ListResponseBody | undefined;
  setBody(value?: ListResponseBody): ListResponse;
  hasBody(): boolean;
  clearBody(): ListResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: ListResponseBody.AsObject,
  }
}

export class ListResponseBody extends jspb.Message {
  getSolutionsList(): Array<SolutionMetadata>;
  setSolutionsList(value: Array<SolutionMetadata>): ListResponseBody;
  clearSolutionsList(): ListResponseBody;
  addSolutions(value?: SolutionMetadata, index?: number): SolutionMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponseBody): ListResponseBody.AsObject;
  static serializeBinaryToWriter(message: ListResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponseBody;
  static deserializeBinaryFromReader(message: ListResponseBody, reader: jspb.BinaryReader): ListResponseBody;
}

export namespace ListResponseBody {
  export type AsObject = {
    solutionsList: Array<SolutionMetadata.AsObject>,
  }
}

export class SolutionMetadata extends jspb.Message {
  getName(): string;
  setName(value: string): SolutionMetadata;

  getDescription(): string;
  setDescription(value: string): SolutionMetadata;

  getCardsList(): Array<string>;
  setCardsList(value: Array<string>): SolutionMetadata;
  clearCardsList(): SolutionMetadata;
  addCards(value: string, index?: number): SolutionMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SolutionMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: SolutionMetadata): SolutionMetadata.AsObject;
  static serializeBinaryToWriter(message: SolutionMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SolutionMetadata;
  static deserializeBinaryFromReader(message: SolutionMetadata, reader: jspb.BinaryReader): SolutionMetadata;
}

export namespace SolutionMetadata {
  export type AsObject = {
    name: string,
    description: string,
    cardsList: Array<string>,
  }
}

export enum BulletinCodeEnum { 
  BULLETIN_CODE_SOLUTION = 0,
}
