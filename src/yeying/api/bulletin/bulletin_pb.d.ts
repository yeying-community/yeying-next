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
  getCode(): BulletinCodeEnum;
  setCode(value: BulletinCodeEnum): ListRequestBody;

  getLanguage(): yeying_api_common_code_pb.LanguageCodeEnum;
  setLanguage(value: yeying_api_common_code_pb.LanguageCodeEnum): ListRequestBody;

  getPage(): yeying_api_common_message_pb.RequestPage | undefined;
  setPage(value?: yeying_api_common_message_pb.RequestPage): ListRequestBody;
  hasPage(): boolean;
  clearPage(): ListRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequestBody): ListRequestBody.AsObject;
  static serializeBinaryToWriter(message: ListRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequestBody;
  static deserializeBinaryFromReader(message: ListRequestBody, reader: jspb.BinaryReader): ListRequestBody;
}

export namespace ListRequestBody {
  export type AsObject = {
    code: BulletinCodeEnum,
    language: yeying_api_common_code_pb.LanguageCodeEnum,
    page?: yeying_api_common_message_pb.RequestPage.AsObject,
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
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): ListResponseBody;
  hasStatus(): boolean;
  clearStatus(): ListResponseBody;

  getSolutionsList(): Array<SolutionMetadata>;
  setSolutionsList(value: Array<SolutionMetadata>): ListResponseBody;
  clearSolutionsList(): ListResponseBody;
  addSolutions(value?: SolutionMetadata, index?: number): SolutionMetadata;

  getPage(): yeying_api_common_message_pb.ResponsePage | undefined;
  setPage(value?: yeying_api_common_message_pb.ResponsePage): ListResponseBody;
  hasPage(): boolean;
  clearPage(): ListResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponseBody): ListResponseBody.AsObject;
  static serializeBinaryToWriter(message: ListResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponseBody;
  static deserializeBinaryFromReader(message: ListResponseBody, reader: jspb.BinaryReader): ListResponseBody;
}

export namespace ListResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
    solutionsList: Array<SolutionMetadata.AsObject>,
    page?: yeying_api_common_message_pb.ResponsePage.AsObject,
  }
}

export class SolutionMetadata extends jspb.Message {
  getLanguage(): yeying_api_common_code_pb.LanguageCodeEnum;
  setLanguage(value: yeying_api_common_code_pb.LanguageCodeEnum): SolutionMetadata;

  getName(): string;
  setName(value: string): SolutionMetadata;

  getDescription(): string;
  setDescription(value: string): SolutionMetadata;

  getCardsList(): Array<SolutionCard>;
  setCardsList(value: Array<SolutionCard>): SolutionMetadata;
  clearCardsList(): SolutionMetadata;
  addCards(value?: SolutionCard, index?: number): SolutionCard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SolutionMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: SolutionMetadata): SolutionMetadata.AsObject;
  static serializeBinaryToWriter(message: SolutionMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SolutionMetadata;
  static deserializeBinaryFromReader(message: SolutionMetadata, reader: jspb.BinaryReader): SolutionMetadata;
}

export namespace SolutionMetadata {
  export type AsObject = {
    language: yeying_api_common_code_pb.LanguageCodeEnum,
    name: string,
    description: string,
    cardsList: Array<SolutionCard.AsObject>,
  }
}

export class SolutionCard extends jspb.Message {
  getName(): string;
  setName(value: string): SolutionCard;

  getPrice(): string;
  setPrice(value: string): SolutionCard;

  getVariables(): string;
  setVariables(value: string): SolutionCard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SolutionCard.AsObject;
  static toObject(includeInstance: boolean, msg: SolutionCard): SolutionCard.AsObject;
  static serializeBinaryToWriter(message: SolutionCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SolutionCard;
  static deserializeBinaryFromReader(message: SolutionCard, reader: jspb.BinaryReader): SolutionCard;
}

export namespace SolutionCard {
  export type AsObject = {
    name: string,
    price: string,
    variables: string,
  }
}

export enum BulletinCodeEnum { 
  BULLETIN_CODE_SOLUTION = 0,
}
