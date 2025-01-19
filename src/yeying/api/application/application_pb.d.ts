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

  getPage(): yeying_api_common_message_pb.ResponsePage | undefined;
  setPage(value?: yeying_api_common_message_pb.ResponsePage): SearchResponseBody;
  hasPage(): boolean;
  clearPage(): SearchResponseBody;

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
    page?: yeying_api_common_message_pb.ResponsePage.AsObject,
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

export class DetailRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): DetailRequest;
  hasHeader(): boolean;
  clearHeader(): DetailRequest;

  getBody(): DetailRequestBody | undefined;
  setBody(value?: DetailRequestBody): DetailRequest;
  hasBody(): boolean;
  clearBody(): DetailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DetailRequest): DetailRequest.AsObject;
  static serializeBinaryToWriter(message: DetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetailRequest;
  static deserializeBinaryFromReader(message: DetailRequest, reader: jspb.BinaryReader): DetailRequest;
}

export namespace DetailRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: DetailRequestBody.AsObject,
  }
}

export class DetailRequestBody extends jspb.Message {
  getDid(): string;
  setDid(value: string): DetailRequestBody;

  getVersion(): number;
  setVersion(value: number): DetailRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetailRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: DetailRequestBody): DetailRequestBody.AsObject;
  static serializeBinaryToWriter(message: DetailRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetailRequestBody;
  static deserializeBinaryFromReader(message: DetailRequestBody, reader: jspb.BinaryReader): DetailRequestBody;
}

export namespace DetailRequestBody {
  export type AsObject = {
    did: string,
    version: number,
  }
}

export class DetailResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): DetailResponse;
  hasHeader(): boolean;
  clearHeader(): DetailResponse;

  getBody(): DetailResponseBody | undefined;
  setBody(value?: DetailResponseBody): DetailResponse;
  hasBody(): boolean;
  clearBody(): DetailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DetailResponse): DetailResponse.AsObject;
  static serializeBinaryToWriter(message: DetailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetailResponse;
  static deserializeBinaryFromReader(message: DetailResponse, reader: jspb.BinaryReader): DetailResponse;
}

export namespace DetailResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: DetailResponseBody.AsObject,
  }
}

export class DetailResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): DetailResponseBody;
  hasStatus(): boolean;
  clearStatus(): DetailResponseBody;

  getAppstatus(): yeying_api_common_code_pb.ApplicationStatusEnum;
  setAppstatus(value: yeying_api_common_code_pb.ApplicationStatusEnum): DetailResponseBody;

  getApplication(): ApplicationMetadata | undefined;
  setApplication(value?: ApplicationMetadata): DetailResponseBody;
  hasApplication(): boolean;
  clearApplication(): DetailResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetailResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: DetailResponseBody): DetailResponseBody.AsObject;
  static serializeBinaryToWriter(message: DetailResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetailResponseBody;
  static deserializeBinaryFromReader(message: DetailResponseBody, reader: jspb.BinaryReader): DetailResponseBody;
}

export namespace DetailResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
    appstatus: yeying_api_common_code_pb.ApplicationStatusEnum,
    application?: ApplicationMetadata.AsObject,
  }
}

export class OfflineRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): OfflineRequest;
  hasHeader(): boolean;
  clearHeader(): OfflineRequest;

  getBody(): OfflineRequestBody | undefined;
  setBody(value?: OfflineRequestBody): OfflineRequest;
  hasBody(): boolean;
  clearBody(): OfflineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfflineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OfflineRequest): OfflineRequest.AsObject;
  static serializeBinaryToWriter(message: OfflineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfflineRequest;
  static deserializeBinaryFromReader(message: OfflineRequest, reader: jspb.BinaryReader): OfflineRequest;
}

export namespace OfflineRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: OfflineRequestBody.AsObject,
  }
}

export class OfflineRequestBody extends jspb.Message {
  getDid(): string;
  setDid(value: string): OfflineRequestBody;

  getVersion(): number;
  setVersion(value: number): OfflineRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfflineRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: OfflineRequestBody): OfflineRequestBody.AsObject;
  static serializeBinaryToWriter(message: OfflineRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfflineRequestBody;
  static deserializeBinaryFromReader(message: OfflineRequestBody, reader: jspb.BinaryReader): OfflineRequestBody;
}

export namespace OfflineRequestBody {
  export type AsObject = {
    did: string,
    version: number,
  }
}

export class OfflineResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): OfflineResponse;
  hasHeader(): boolean;
  clearHeader(): OfflineResponse;

  getBody(): OfflineResponseBody | undefined;
  setBody(value?: OfflineResponseBody): OfflineResponse;
  hasBody(): boolean;
  clearBody(): OfflineResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfflineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OfflineResponse): OfflineResponse.AsObject;
  static serializeBinaryToWriter(message: OfflineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfflineResponse;
  static deserializeBinaryFromReader(message: OfflineResponse, reader: jspb.BinaryReader): OfflineResponse;
}

export namespace OfflineResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: OfflineResponseBody.AsObject,
  }
}

export class OfflineResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): OfflineResponseBody;
  hasStatus(): boolean;
  clearStatus(): OfflineResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfflineResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: OfflineResponseBody): OfflineResponseBody.AsObject;
  static serializeBinaryToWriter(message: OfflineResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfflineResponseBody;
  static deserializeBinaryFromReader(message: OfflineResponseBody, reader: jspb.BinaryReader): OfflineResponseBody;
}

export namespace OfflineResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class OnlineRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): OnlineRequest;
  hasHeader(): boolean;
  clearHeader(): OnlineRequest;

  getBody(): OnlineRequestBody | undefined;
  setBody(value?: OnlineRequestBody): OnlineRequest;
  hasBody(): boolean;
  clearBody(): OnlineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OnlineRequest): OnlineRequest.AsObject;
  static serializeBinaryToWriter(message: OnlineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlineRequest;
  static deserializeBinaryFromReader(message: OnlineRequest, reader: jspb.BinaryReader): OnlineRequest;
}

export namespace OnlineRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: OnlineRequestBody.AsObject,
  }
}

export class OnlineRequestBody extends jspb.Message {
  getDid(): string;
  setDid(value: string): OnlineRequestBody;

  getVersion(): number;
  setVersion(value: number): OnlineRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlineRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: OnlineRequestBody): OnlineRequestBody.AsObject;
  static serializeBinaryToWriter(message: OnlineRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlineRequestBody;
  static deserializeBinaryFromReader(message: OnlineRequestBody, reader: jspb.BinaryReader): OnlineRequestBody;
}

export namespace OnlineRequestBody {
  export type AsObject = {
    did: string,
    version: number,
  }
}

export class OnlineResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): OnlineResponse;
  hasHeader(): boolean;
  clearHeader(): OnlineResponse;

  getBody(): OnlineResponseBody | undefined;
  setBody(value?: OnlineResponseBody): OnlineResponse;
  hasBody(): boolean;
  clearBody(): OnlineResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OnlineResponse): OnlineResponse.AsObject;
  static serializeBinaryToWriter(message: OnlineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlineResponse;
  static deserializeBinaryFromReader(message: OnlineResponse, reader: jspb.BinaryReader): OnlineResponse;
}

export namespace OnlineResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: OnlineResponseBody.AsObject,
  }
}

export class OnlineResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): OnlineResponseBody;
  hasStatus(): boolean;
  clearStatus(): OnlineResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlineResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: OnlineResponseBody): OnlineResponseBody.AsObject;
  static serializeBinaryToWriter(message: OnlineResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlineResponseBody;
  static deserializeBinaryFromReader(message: OnlineResponseBody, reader: jspb.BinaryReader): OnlineResponseBody;
}

export namespace OnlineResponseBody {
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
  getAuditor(): string;
  setAuditor(value: string): ApplicationComment;

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
    auditor: string,
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

  getVersion(): number;
  setVersion(value: number): ApplicationMetadata;

  getHash(): string;
  setHash(value: string): ApplicationMetadata;

  getName(): string;
  setName(value: string): ApplicationMetadata;

  getCode(): yeying_api_common_code_pb.ApplicationCodeEnum;
  setCode(value: yeying_api_common_code_pb.ApplicationCodeEnum): ApplicationMetadata;

  getDescription(): string;
  setDescription(value: string): ApplicationMetadata;

  getLocation(): string;
  setLocation(value: string): ApplicationMetadata;

  getServicecodes(): string;
  setServicecodes(value: string): ApplicationMetadata;

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
    version: number,
    hash: string,
    name: string,
    code: yeying_api_common_code_pb.ApplicationCodeEnum,
    description: string,
    location: string,
    servicecodes: string,
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
  getDid(): string;
  setDid(value: string): DeleteRequestBody;

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
    did: string,
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
  getComment(): ApplicationComment | undefined;
  setComment(value?: ApplicationComment): AuditRequestBody;
  hasComment(): boolean;
  clearComment(): AuditRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: AuditRequestBody): AuditRequestBody.AsObject;
  static serializeBinaryToWriter(message: AuditRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditRequestBody;
  static deserializeBinaryFromReader(message: AuditRequestBody, reader: jspb.BinaryReader): AuditRequestBody;
}

export namespace AuditRequestBody {
  export type AsObject = {
    comment?: ApplicationComment.AsObject,
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

