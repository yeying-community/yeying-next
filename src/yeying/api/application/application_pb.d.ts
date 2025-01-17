import * as jspb from 'google-protobuf'

import * as yeying_api_common_message_pb from '../../../yeying/api/common/message_pb'; // proto import: "yeying/api/common/message.proto"
import * as yeying_api_common_code_pb from '../../../yeying/api/common/code_pb'; // proto import: "yeying/api/common/code.proto"


export class SearchRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): SearchRequest;
  hasHeader(): boolean;
  clearHeader(): SearchRequest;

  getBody(): SearchRequestBody | undefined;
  setBody(value?: SearchRequestBody): SearchRequest;
  hasBody(): boolean;
  clearBody(): SearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
  static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequest;
  static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: SearchRequestBody.AsObject,
  }
}

export class SearchRequestBody extends jspb.Message {
  getCondition(): SearchCondition | undefined;
  setCondition(value?: SearchCondition): SearchRequestBody;
  hasCondition(): boolean;
  clearCondition(): SearchRequestBody;

  getPage(): yeying_api_common_message_pb.RequestPage | undefined;
  setPage(value?: yeying_api_common_message_pb.RequestPage): SearchRequestBody;
  hasPage(): boolean;
  clearPage(): SearchRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequestBody): SearchRequestBody.AsObject;
  static serializeBinaryToWriter(message: SearchRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequestBody;
  static deserializeBinaryFromReader(message: SearchRequestBody, reader: jspb.BinaryReader): SearchRequestBody;
}

export namespace SearchRequestBody {
  export type AsObject = {
    condition?: SearchCondition.AsObject,
    page?: yeying_api_common_message_pb.RequestPage.AsObject,
  }
}

export class SearchCondition extends jspb.Message {
  getCode(): yeying_api_common_code_pb.ApplicationCodeEnum;
  setCode(value: yeying_api_common_code_pb.ApplicationCodeEnum): SearchCondition;

  getStatus(): yeying_api_common_code_pb.ApplicationStatusEnum;
  setStatus(value: yeying_api_common_code_pb.ApplicationStatusEnum): SearchCondition;

  getOwner(): string;
  setOwner(value: string): SearchCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchCondition.AsObject;
  static toObject(includeInstance: boolean, msg: SearchCondition): SearchCondition.AsObject;
  static serializeBinaryToWriter(message: SearchCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchCondition;
  static deserializeBinaryFromReader(message: SearchCondition, reader: jspb.BinaryReader): SearchCondition;
}

export namespace SearchCondition {
  export type AsObject = {
    code: yeying_api_common_code_pb.ApplicationCodeEnum,
    status: yeying_api_common_code_pb.ApplicationStatusEnum,
    owner: string,
  }
}

export class SearchResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): SearchResponse;
  hasHeader(): boolean;
  clearHeader(): SearchResponse;

  getBody(): SearchResponseBody | undefined;
  setBody(value?: SearchResponseBody): SearchResponse;
  hasBody(): boolean;
  clearBody(): SearchResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchResponse): SearchResponse.AsObject;
  static serializeBinaryToWriter(message: SearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchResponse;
  static deserializeBinaryFromReader(message: SearchResponse, reader: jspb.BinaryReader): SearchResponse;
}

export namespace SearchResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: SearchResponseBody.AsObject,
  }
}

export class SearchResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): SearchResponseBody;
  hasStatus(): boolean;
  clearStatus(): SearchResponseBody;

  getApplicationsList(): Array<ApplicationMetadata>;
  setApplicationsList(value: Array<ApplicationMetadata>): SearchResponseBody;
  clearApplicationsList(): SearchResponseBody;
  addApplications(value?: ApplicationMetadata, index?: number): ApplicationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: SearchResponseBody): SearchResponseBody.AsObject;
  static serializeBinaryToWriter(message: SearchResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchResponseBody;
  static deserializeBinaryFromReader(message: SearchResponseBody, reader: jspb.BinaryReader): SearchResponseBody;
}

export namespace SearchResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
    applicationsList: Array<ApplicationMetadata.AsObject>,
  }
}

export class CreateRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): CreateRequest;
  hasHeader(): boolean;
  clearHeader(): CreateRequest;

  getBody(): CreateRequestBody | undefined;
  setBody(value?: CreateRequestBody): CreateRequest;
  hasBody(): boolean;
  clearBody(): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: CreateRequestBody.AsObject,
  }
}

export class CreateRequestBody extends jspb.Message {
  getApplication(): ApplicationMetadata | undefined;
  setApplication(value?: ApplicationMetadata): CreateRequestBody;
  hasApplication(): boolean;
  clearApplication(): CreateRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequestBody): CreateRequestBody.AsObject;
  static serializeBinaryToWriter(message: CreateRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequestBody;
  static deserializeBinaryFromReader(message: CreateRequestBody, reader: jspb.BinaryReader): CreateRequestBody;
}

export namespace CreateRequestBody {
  export type AsObject = {
    application?: ApplicationMetadata.AsObject,
  }
}

export class CreateResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): CreateResponse;
  hasHeader(): boolean;
  clearHeader(): CreateResponse;

  getBody(): CreateResponseBody | undefined;
  setBody(value?: CreateResponseBody): CreateResponse;
  hasBody(): boolean;
  clearBody(): CreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
  static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponse;
  static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: CreateResponseBody.AsObject,
  }
}

export class CreateResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): CreateResponseBody;
  hasStatus(): boolean;
  clearStatus(): CreateResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponseBody): CreateResponseBody.AsObject;
  static serializeBinaryToWriter(message: CreateResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponseBody;
  static deserializeBinaryFromReader(message: CreateResponseBody, reader: jspb.BinaryReader): CreateResponseBody;
}

export namespace CreateResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class ApplicationExtend extends jspb.Message {
  getCommentsList(): Array<ApplicationComment>;
  setCommentsList(value: Array<ApplicationComment>): ApplicationExtend;
  clearCommentsList(): ApplicationExtend;
  addComments(value?: ApplicationComment, index?: number): ApplicationComment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationExtend.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationExtend): ApplicationExtend.AsObject;
  static serializeBinaryToWriter(message: ApplicationExtend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationExtend;
  static deserializeBinaryFromReader(message: ApplicationExtend, reader: jspb.BinaryReader): ApplicationExtend;
}

export namespace ApplicationExtend {
  export type AsObject = {
    commentsList: Array<ApplicationComment.AsObject>,
  }
}

export class ApplicationComment extends jspb.Message {
  getAuditorList(): Array<string>;
  setAuditorList(value: Array<string>): ApplicationComment;
  clearAuditorList(): ApplicationComment;
  addAuditor(value: string, index?: number): ApplicationComment;

  getComment(): string;
  setComment(value: string): ApplicationComment;

  getPassed(): boolean;
  setPassed(value: boolean): ApplicationComment;

  getSignature(): string;
  setSignature(value: string): ApplicationComment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationComment.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationComment): ApplicationComment.AsObject;
  static serializeBinaryToWriter(message: ApplicationComment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationComment;
  static deserializeBinaryFromReader(message: ApplicationComment, reader: jspb.BinaryReader): ApplicationComment;
}

export namespace ApplicationComment {
  export type AsObject = {
    auditorList: Array<string>,
    comment: string,
    passed: boolean,
    signature: string,
  }
}

export class ApplicationMetadata extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): ApplicationMetadata;

  getNetwork(): string;
  setNetwork(value: string): ApplicationMetadata;

  getAddress(): string;
  setAddress(value: string): ApplicationMetadata;

  getDid(): string;
  setDid(value: string): ApplicationMetadata;

  getHash(): string;
  setHash(value: string): ApplicationMetadata;

  getVersion(): number;
  setVersion(value: number): ApplicationMetadata;

  getName(): string;
  setName(value: string): ApplicationMetadata;

  getCode(): yeying_api_common_code_pb.ApplicationCodeEnum;
  setCode(value: yeying_api_common_code_pb.ApplicationCodeEnum): ApplicationMetadata;

  getDescription(): string;
  setDescription(value: string): ApplicationMetadata;

  getStatus(): yeying_api_common_code_pb.ApplicationStatusEnum;
  setStatus(value: yeying_api_common_code_pb.ApplicationStatusEnum): ApplicationMetadata;

  getLocation(): string;
  setLocation(value: string): ApplicationMetadata;

  getPath(): string;
  setPath(value: string): ApplicationMetadata;

  getServices(): string;
  setServices(value: string): ApplicationMetadata;

  getAvatar(): string;
  setAvatar(value: string): ApplicationMetadata;

  getExtend(): string;
  setExtend(value: string): ApplicationMetadata;

  getCreated(): string;
  setCreated(value: string): ApplicationMetadata;

  getCheckpoint(): string;
  setCheckpoint(value: string): ApplicationMetadata;

  getSignature(): string;
  setSignature(value: string): ApplicationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationMetadata): ApplicationMetadata.AsObject;
  static serializeBinaryToWriter(message: ApplicationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationMetadata;
  static deserializeBinaryFromReader(message: ApplicationMetadata, reader: jspb.BinaryReader): ApplicationMetadata;
}

export namespace ApplicationMetadata {
  export type AsObject = {
    owner: string,
    network: string,
    address: string,
    did: string,
    hash: string,
    version: number,
    name: string,
    code: yeying_api_common_code_pb.ApplicationCodeEnum,
    description: string,
    status: yeying_api_common_code_pb.ApplicationStatusEnum,
    location: string,
    path: string,
    services: string,
    avatar: string,
    extend: string,
    created: string,
    checkpoint: string,
    signature: string,
  }
}

export class DeleteRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): DeleteRequest;
  hasHeader(): boolean;
  clearHeader(): DeleteRequest;

  getBody(): DeleteRequestBody | undefined;
  setBody(value?: DeleteRequestBody): DeleteRequest;
  hasBody(): boolean;
  clearBody(): DeleteRequest;

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
    body?: DeleteRequestBody.AsObject,
  }
}

export class DeleteRequestBody extends jspb.Message {
  getAppid(): string;
  setAppid(value: string): DeleteRequestBody;

  getVersion(): number;
  setVersion(value: number): DeleteRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequestBody): DeleteRequestBody.AsObject;
  static serializeBinaryToWriter(message: DeleteRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequestBody;
  static deserializeBinaryFromReader(message: DeleteRequestBody, reader: jspb.BinaryReader): DeleteRequestBody;
}

export namespace DeleteRequestBody {
  export type AsObject = {
    appid: string,
    version: number,
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

export class AuditRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): AuditRequest;
  hasHeader(): boolean;
  clearHeader(): AuditRequest;

  getBody(): AuditRequestBody | undefined;
  setBody(value?: AuditRequestBody): AuditRequest;
  hasBody(): boolean;
  clearBody(): AuditRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuditRequest): AuditRequest.AsObject;
  static serializeBinaryToWriter(message: AuditRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditRequest;
  static deserializeBinaryFromReader(message: AuditRequest, reader: jspb.BinaryReader): AuditRequest;
}

export namespace AuditRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: AuditRequestBody.AsObject,
  }
}

export class AuditRequestBody extends jspb.Message {
  getAppid(): string;
  setAppid(value: string): AuditRequestBody;

  getVersion(): number;
  setVersion(value: number): AuditRequestBody;

  getComment(): string;
  setComment(value: string): AuditRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: AuditRequestBody): AuditRequestBody.AsObject;
  static serializeBinaryToWriter(message: AuditRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditRequestBody;
  static deserializeBinaryFromReader(message: AuditRequestBody, reader: jspb.BinaryReader): AuditRequestBody;
}

export namespace AuditRequestBody {
  export type AsObject = {
    appid: string,
    version: number,
    comment: string,
  }
}

export class AuditResponse extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): AuditResponse;
  hasStatus(): boolean;
  clearStatus(): AuditResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuditResponse): AuditResponse.AsObject;
  static serializeBinaryToWriter(message: AuditResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditResponse;
  static deserializeBinaryFromReader(message: AuditResponse, reader: jspb.BinaryReader): AuditResponse;
}

export namespace AuditResponse {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

