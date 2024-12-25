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
  getFormat(): yeying_api_common_code_pb.DigitalFormatEnum;
  setFormat(value: yeying_api_common_code_pb.DigitalFormatEnum): SearchRequestBody;

  getAssethash(): string;
  setAssethash(value: string): SearchRequestBody;

  getPage(): number;
  setPage(value: number): SearchRequestBody;

  getPagesize(): number;
  setPagesize(value: number): SearchRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequestBody): SearchRequestBody.AsObject;
  static serializeBinaryToWriter(message: SearchRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequestBody;
  static deserializeBinaryFromReader(message: SearchRequestBody, reader: jspb.BinaryReader): SearchRequestBody;
}

export namespace SearchRequestBody {
  export type AsObject = {
    format: yeying_api_common_code_pb.DigitalFormatEnum,
    assethash: string,
    page: number,
    pagesize: number,
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

  getAssetsList(): Array<AssetMetadata>;
  setAssetsList(value: Array<AssetMetadata>): SearchResponseBody;
  clearAssetsList(): SearchResponseBody;
  addAssets(value?: AssetMetadata, index?: number): AssetMetadata;

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
    assetsList: Array<AssetMetadata.AsObject>,
  }
}

export class StreamPutRequest extends jspb.Message {
  getContenttag(): yeying_api_common_code_pb.StreamDataTagEnum;
  setContenttag(value: yeying_api_common_code_pb.StreamDataTagEnum): StreamPutRequest;

  getHead(): StreamPutRequestHead | undefined;
  setHead(value?: StreamPutRequestHead): StreamPutRequest;
  hasHead(): boolean;
  clearHead(): StreamPutRequest;

  getBody(): StreamPutRequestBody | undefined;
  setBody(value?: StreamPutRequestBody): StreamPutRequest;
  hasBody(): boolean;
  clearBody(): StreamPutRequest;

  getTail(): StreamPutRequestTail | undefined;
  setTail(value?: StreamPutRequestTail): StreamPutRequest;
  hasTail(): boolean;
  clearTail(): StreamPutRequest;

  getDataCase(): StreamPutRequest.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamPutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamPutRequest): StreamPutRequest.AsObject;
  static serializeBinaryToWriter(message: StreamPutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamPutRequest;
  static deserializeBinaryFromReader(message: StreamPutRequest, reader: jspb.BinaryReader): StreamPutRequest;
}

export namespace StreamPutRequest {
  export type AsObject = {
    contenttag: yeying_api_common_code_pb.StreamDataTagEnum,
    head?: StreamPutRequestHead.AsObject,
    body?: StreamPutRequestBody.AsObject,
    tail?: StreamPutRequestTail.AsObject,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    HEAD = 2,
    BODY = 3,
    TAIL = 4,
  }
}

export class StreamPutRequestHead extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): StreamPutRequestHead;
  hasHeader(): boolean;
  clearHeader(): StreamPutRequestHead;

  getBody(): StreamPutRequestHeadBody | undefined;
  setBody(value?: StreamPutRequestHeadBody): StreamPutRequestHead;
  hasBody(): boolean;
  clearBody(): StreamPutRequestHead;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamPutRequestHead.AsObject;
  static toObject(includeInstance: boolean, msg: StreamPutRequestHead): StreamPutRequestHead.AsObject;
  static serializeBinaryToWriter(message: StreamPutRequestHead, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamPutRequestHead;
  static deserializeBinaryFromReader(message: StreamPutRequestHead, reader: jspb.BinaryReader): StreamPutRequestHead;
}

export namespace StreamPutRequestHead {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: StreamPutRequestHeadBody.AsObject,
  }
}

export class StreamPutRequestHeadBody extends jspb.Message {
  getAssetid(): string;
  setAssetid(value: string): StreamPutRequestHeadBody;

  getVersion(): number;
  setVersion(value: number): StreamPutRequestHeadBody;

  getChunkhash(): string;
  setChunkhash(value: string): StreamPutRequestHeadBody;

  getChunksize(): number;
  setChunksize(value: number): StreamPutRequestHeadBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamPutRequestHeadBody.AsObject;
  static toObject(includeInstance: boolean, msg: StreamPutRequestHeadBody): StreamPutRequestHeadBody.AsObject;
  static serializeBinaryToWriter(message: StreamPutRequestHeadBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamPutRequestHeadBody;
  static deserializeBinaryFromReader(message: StreamPutRequestHeadBody, reader: jspb.BinaryReader): StreamPutRequestHeadBody;
}

export namespace StreamPutRequestHeadBody {
  export type AsObject = {
    assetid: string,
    version: number,
    chunkhash: string,
    chunksize: number,
  }
}

export class StreamPutRequestBody extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): StreamPutRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamPutRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: StreamPutRequestBody): StreamPutRequestBody.AsObject;
  static serializeBinaryToWriter(message: StreamPutRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamPutRequestBody;
  static deserializeBinaryFromReader(message: StreamPutRequestBody, reader: jspb.BinaryReader): StreamPutRequestBody;
}

export namespace StreamPutRequestBody {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

export class StreamPutRequestTail extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): StreamPutRequestTail;
  hasHeader(): boolean;
  clearHeader(): StreamPutRequestTail;

  getBody(): StreamPutRequestTailBody | undefined;
  setBody(value?: StreamPutRequestTailBody): StreamPutRequestTail;
  hasBody(): boolean;
  clearBody(): StreamPutRequestTail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamPutRequestTail.AsObject;
  static toObject(includeInstance: boolean, msg: StreamPutRequestTail): StreamPutRequestTail.AsObject;
  static serializeBinaryToWriter(message: StreamPutRequestTail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamPutRequestTail;
  static deserializeBinaryFromReader(message: StreamPutRequestTail, reader: jspb.BinaryReader): StreamPutRequestTail;
}

export namespace StreamPutRequestTail {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: StreamPutRequestTailBody.AsObject,
  }
}

export class StreamPutRequestTailBody extends jspb.Message {
  getChunkhash(): string;
  setChunkhash(value: string): StreamPutRequestTailBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamPutRequestTailBody.AsObject;
  static toObject(includeInstance: boolean, msg: StreamPutRequestTailBody): StreamPutRequestTailBody.AsObject;
  static serializeBinaryToWriter(message: StreamPutRequestTailBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamPutRequestTailBody;
  static deserializeBinaryFromReader(message: StreamPutRequestTailBody, reader: jspb.BinaryReader): StreamPutRequestTailBody;
}

export namespace StreamPutRequestTailBody {
  export type AsObject = {
    chunkhash: string,
  }
}

export class PutRequestBody extends jspb.Message {
  getAssetid(): string;
  setAssetid(value: string): PutRequestBody;

  getVersion(): number;
  setVersion(value: number): PutRequestBody;

  getChunkhash(): string;
  setChunkhash(value: string): PutRequestBody;

  getChunksize(): number;
  setChunksize(value: number): PutRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: PutRequestBody): PutRequestBody.AsObject;
  static serializeBinaryToWriter(message: PutRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutRequestBody;
  static deserializeBinaryFromReader(message: PutRequestBody, reader: jspb.BinaryReader): PutRequestBody;
}

export namespace PutRequestBody {
  export type AsObject = {
    assetid: string,
    version: number,
    chunkhash: string,
    chunksize: number,
  }
}

export class PutRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): PutRequest;
  hasHeader(): boolean;
  clearHeader(): PutRequest;

  getBody(): PutRequestBody | undefined;
  setBody(value?: PutRequestBody): PutRequest;
  hasBody(): boolean;
  clearBody(): PutRequest;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): PutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutRequest): PutRequest.AsObject;
  static serializeBinaryToWriter(message: PutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutRequest;
  static deserializeBinaryFromReader(message: PutRequest, reader: jspb.BinaryReader): PutRequest;
}

export namespace PutRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: PutRequestBody.AsObject,
    data: Uint8Array | string,
  }
}

export class PutResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): PutResponse;
  hasHeader(): boolean;
  clearHeader(): PutResponse;

  getBody(): PutResponseBody | undefined;
  setBody(value?: PutResponseBody): PutResponse;
  hasBody(): boolean;
  clearBody(): PutResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutResponse): PutResponse.AsObject;
  static serializeBinaryToWriter(message: PutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutResponse;
  static deserializeBinaryFromReader(message: PutResponse, reader: jspb.BinaryReader): PutResponse;
}

export namespace PutResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: PutResponseBody.AsObject,
  }
}

export class PutResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): PutResponseBody;
  hasStatus(): boolean;
  clearStatus(): PutResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: PutResponseBody): PutResponseBody.AsObject;
  static serializeBinaryToWriter(message: PutResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutResponseBody;
  static deserializeBinaryFromReader(message: PutResponseBody, reader: jspb.BinaryReader): PutResponseBody;
}

export namespace PutResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class SignRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): SignRequest;
  hasHeader(): boolean;
  clearHeader(): SignRequest;

  getBody(): SignRequestBody | undefined;
  setBody(value?: SignRequestBody): SignRequest;
  hasBody(): boolean;
  clearBody(): SignRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignRequest): SignRequest.AsObject;
  static serializeBinaryToWriter(message: SignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignRequest;
  static deserializeBinaryFromReader(message: SignRequest, reader: jspb.BinaryReader): SignRequest;
}

export namespace SignRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: SignRequestBody.AsObject,
  }
}

export class SignRequestBody extends jspb.Message {
  getAction(): AssetActionEnum;
  setAction(value: AssetActionEnum): SignRequestBody;

  getAsset(): AssetMetadata | undefined;
  setAsset(value?: AssetMetadata): SignRequestBody;
  hasAsset(): boolean;
  clearAsset(): SignRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: SignRequestBody): SignRequestBody.AsObject;
  static serializeBinaryToWriter(message: SignRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignRequestBody;
  static deserializeBinaryFromReader(message: SignRequestBody, reader: jspb.BinaryReader): SignRequestBody;
}

export namespace SignRequestBody {
  export type AsObject = {
    action: AssetActionEnum,
    asset?: AssetMetadata.AsObject,
  }
}

export class SignResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): SignResponse;
  hasHeader(): boolean;
  clearHeader(): SignResponse;

  getBody(): SignResponseBody | undefined;
  setBody(value?: SignResponseBody): SignResponse;
  hasBody(): boolean;
  clearBody(): SignResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignResponse): SignResponse.AsObject;
  static serializeBinaryToWriter(message: SignResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignResponse;
  static deserializeBinaryFromReader(message: SignResponse, reader: jspb.BinaryReader): SignResponse;
}

export namespace SignResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: SignResponseBody.AsObject,
  }
}

export class SignResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): SignResponseBody;
  hasStatus(): boolean;
  clearStatus(): SignResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: SignResponseBody): SignResponseBody.AsObject;
  static serializeBinaryToWriter(message: SignResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignResponseBody;
  static deserializeBinaryFromReader(message: SignResponseBody, reader: jspb.BinaryReader): SignResponseBody;
}

export namespace SignResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class VersionRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): VersionRequest;
  hasHeader(): boolean;
  clearHeader(): VersionRequest;

  getBody(): VersionRequestBody | undefined;
  setBody(value?: VersionRequestBody): VersionRequest;
  hasBody(): boolean;
  clearBody(): VersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VersionRequest): VersionRequest.AsObject;
  static serializeBinaryToWriter(message: VersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionRequest;
  static deserializeBinaryFromReader(message: VersionRequest, reader: jspb.BinaryReader): VersionRequest;
}

export namespace VersionRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: VersionRequestBody.AsObject,
  }
}

export class VersionRequestBody extends jspb.Message {
  getAssetid(): string;
  setAssetid(value: string): VersionRequestBody;

  getPage(): number;
  setPage(value: number): VersionRequestBody;

  getPagesize(): number;
  setPagesize(value: number): VersionRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: VersionRequestBody): VersionRequestBody.AsObject;
  static serializeBinaryToWriter(message: VersionRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionRequestBody;
  static deserializeBinaryFromReader(message: VersionRequestBody, reader: jspb.BinaryReader): VersionRequestBody;
}

export namespace VersionRequestBody {
  export type AsObject = {
    assetid: string,
    page: number,
    pagesize: number,
  }
}

export class VersionResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): VersionResponse;
  hasHeader(): boolean;
  clearHeader(): VersionResponse;

  getBody(): VersionResponseBody | undefined;
  setBody(value?: VersionResponseBody): VersionResponse;
  hasBody(): boolean;
  clearBody(): VersionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VersionResponse): VersionResponse.AsObject;
  static serializeBinaryToWriter(message: VersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionResponse;
  static deserializeBinaryFromReader(message: VersionResponse, reader: jspb.BinaryReader): VersionResponse;
}

export namespace VersionResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: VersionResponseBody.AsObject,
  }
}

export class VersionResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): VersionResponseBody;
  hasStatus(): boolean;
  clearStatus(): VersionResponseBody;

  getAssetsList(): Array<AssetMetadata>;
  setAssetsList(value: Array<AssetMetadata>): VersionResponseBody;
  clearAssetsList(): VersionResponseBody;
  addAssets(value?: AssetMetadata, index?: number): AssetMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: VersionResponseBody): VersionResponseBody.AsObject;
  static serializeBinaryToWriter(message: VersionResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionResponseBody;
  static deserializeBinaryFromReader(message: VersionResponseBody, reader: jspb.BinaryReader): VersionResponseBody;
}

export namespace VersionResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
    assetsList: Array<AssetMetadata.AsObject>,
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
  getAssetid(): string;
  setAssetid(value: string): DetailRequestBody;

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
    assetid: string,
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

  getAsset(): AssetMetadata | undefined;
  setAsset(value?: AssetMetadata): DetailResponseBody;
  hasAsset(): boolean;
  clearAsset(): DetailResponseBody;

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
    asset?: AssetMetadata.AsObject,
  }
}

export class GetRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): GetRequest;
  hasHeader(): boolean;
  clearHeader(): GetRequest;

  getBody(): GetRequestBody | undefined;
  setBody(value?: GetRequestBody): GetRequest;
  hasBody(): boolean;
  clearBody(): GetRequest;

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
    body?: GetRequestBody.AsObject,
  }
}

export class GetRequestBody extends jspb.Message {
  getAssetid(): string;
  setAssetid(value: string): GetRequestBody;

  getVersion(): number;
  setVersion(value: number): GetRequestBody;

  getHash(): string;
  setHash(value: string): GetRequestBody;

  getIndex(): number;
  setIndex(value: number): GetRequestBody;

  getChunkCase(): GetRequestBody.ChunkCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequestBody): GetRequestBody.AsObject;
  static serializeBinaryToWriter(message: GetRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequestBody;
  static deserializeBinaryFromReader(message: GetRequestBody, reader: jspb.BinaryReader): GetRequestBody;
}

export namespace GetRequestBody {
  export type AsObject = {
    assetid: string,
    version: number,
    hash: string,
    index: number,
  }

  export enum ChunkCase { 
    CHUNK_NOT_SET = 0,
    HASH = 3,
    INDEX = 4,
  }
}

export class StreamGetResponse extends jspb.Message {
  getContenttag(): yeying_api_common_code_pb.StreamDataTagEnum;
  setContenttag(value: yeying_api_common_code_pb.StreamDataTagEnum): StreamGetResponse;

  getHead(): StreamGetResponseHead | undefined;
  setHead(value?: StreamGetResponseHead): StreamGetResponse;
  hasHead(): boolean;
  clearHead(): StreamGetResponse;

  getBody(): StreamGetResponseBody | undefined;
  setBody(value?: StreamGetResponseBody): StreamGetResponse;
  hasBody(): boolean;
  clearBody(): StreamGetResponse;

  getTail(): StreamGetResponseTail | undefined;
  setTail(value?: StreamGetResponseTail): StreamGetResponse;
  hasTail(): boolean;
  clearTail(): StreamGetResponse;

  getDataCase(): StreamGetResponse.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamGetResponse): StreamGetResponse.AsObject;
  static serializeBinaryToWriter(message: StreamGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamGetResponse;
  static deserializeBinaryFromReader(message: StreamGetResponse, reader: jspb.BinaryReader): StreamGetResponse;
}

export namespace StreamGetResponse {
  export type AsObject = {
    contenttag: yeying_api_common_code_pb.StreamDataTagEnum,
    head?: StreamGetResponseHead.AsObject,
    body?: StreamGetResponseBody.AsObject,
    tail?: StreamGetResponseTail.AsObject,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    HEAD = 2,
    BODY = 3,
    TAIL = 4,
  }
}

export class StreamGetResponseHead extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): StreamGetResponseHead;
  hasHeader(): boolean;
  clearHeader(): StreamGetResponseHead;

  getBody(): StreamGetResponseHeadBody | undefined;
  setBody(value?: StreamGetResponseHeadBody): StreamGetResponseHead;
  hasBody(): boolean;
  clearBody(): StreamGetResponseHead;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamGetResponseHead.AsObject;
  static toObject(includeInstance: boolean, msg: StreamGetResponseHead): StreamGetResponseHead.AsObject;
  static serializeBinaryToWriter(message: StreamGetResponseHead, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamGetResponseHead;
  static deserializeBinaryFromReader(message: StreamGetResponseHead, reader: jspb.BinaryReader): StreamGetResponseHead;
}

export namespace StreamGetResponseHead {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: StreamGetResponseHeadBody.AsObject,
  }
}

export class StreamGetResponseHeadBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): StreamGetResponseHeadBody;
  hasStatus(): boolean;
  clearStatus(): StreamGetResponseHeadBody;

  getChunk(): ChunkMetadata | undefined;
  setChunk(value?: ChunkMetadata): StreamGetResponseHeadBody;
  hasChunk(): boolean;
  clearChunk(): StreamGetResponseHeadBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamGetResponseHeadBody.AsObject;
  static toObject(includeInstance: boolean, msg: StreamGetResponseHeadBody): StreamGetResponseHeadBody.AsObject;
  static serializeBinaryToWriter(message: StreamGetResponseHeadBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamGetResponseHeadBody;
  static deserializeBinaryFromReader(message: StreamGetResponseHeadBody, reader: jspb.BinaryReader): StreamGetResponseHeadBody;
}

export namespace StreamGetResponseHeadBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
    chunk?: ChunkMetadata.AsObject,
  }
}

export class StreamGetResponseBody extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): StreamGetResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamGetResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: StreamGetResponseBody): StreamGetResponseBody.AsObject;
  static serializeBinaryToWriter(message: StreamGetResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamGetResponseBody;
  static deserializeBinaryFromReader(message: StreamGetResponseBody, reader: jspb.BinaryReader): StreamGetResponseBody;
}

export namespace StreamGetResponseBody {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

export class StreamGetResponseTail extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): StreamGetResponseTail;
  hasHeader(): boolean;
  clearHeader(): StreamGetResponseTail;

  getBody(): StreamGetResponseTailBody | undefined;
  setBody(value?: StreamGetResponseTailBody): StreamGetResponseTail;
  hasBody(): boolean;
  clearBody(): StreamGetResponseTail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamGetResponseTail.AsObject;
  static toObject(includeInstance: boolean, msg: StreamGetResponseTail): StreamGetResponseTail.AsObject;
  static serializeBinaryToWriter(message: StreamGetResponseTail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamGetResponseTail;
  static deserializeBinaryFromReader(message: StreamGetResponseTail, reader: jspb.BinaryReader): StreamGetResponseTail;
}

export namespace StreamGetResponseTail {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: StreamGetResponseTailBody.AsObject,
  }
}

export class StreamGetResponseTailBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): StreamGetResponseTailBody;
  hasStatus(): boolean;
  clearStatus(): StreamGetResponseTailBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamGetResponseTailBody.AsObject;
  static toObject(includeInstance: boolean, msg: StreamGetResponseTailBody): StreamGetResponseTailBody.AsObject;
  static serializeBinaryToWriter(message: StreamGetResponseTailBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamGetResponseTailBody;
  static deserializeBinaryFromReader(message: StreamGetResponseTailBody, reader: jspb.BinaryReader): StreamGetResponseTailBody;
}

export namespace StreamGetResponseTailBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class GetResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): GetResponseBody;
  hasStatus(): boolean;
  clearStatus(): GetResponseBody;

  getChunk(): ChunkMetadata | undefined;
  setChunk(value?: ChunkMetadata): GetResponseBody;
  hasChunk(): boolean;
  clearChunk(): GetResponseBody;

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
    chunk?: ChunkMetadata.AsObject,
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

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): GetResponse;

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
    data: Uint8Array | string,
  }
}

export class RemoveRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): RemoveRequest;
  hasHeader(): boolean;
  clearHeader(): RemoveRequest;

  getBody(): RemoveRequestBody | undefined;
  setBody(value?: RemoveRequestBody): RemoveRequest;
  hasBody(): boolean;
  clearBody(): RemoveRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRequest): RemoveRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRequest;
  static deserializeBinaryFromReader(message: RemoveRequest, reader: jspb.BinaryReader): RemoveRequest;
}

export namespace RemoveRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: RemoveRequestBody.AsObject,
  }
}

export class RemoveRequestBody extends jspb.Message {
  getAssetid(): string;
  setAssetid(value: string): RemoveRequestBody;

  getVersion(): number;
  setVersion(value: number): RemoveRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRequestBody): RemoveRequestBody.AsObject;
  static serializeBinaryToWriter(message: RemoveRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRequestBody;
  static deserializeBinaryFromReader(message: RemoveRequestBody, reader: jspb.BinaryReader): RemoveRequestBody;
}

export namespace RemoveRequestBody {
  export type AsObject = {
    assetid: string,
    version: number,
  }
}

export class RemoveResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): RemoveResponse;
  hasHeader(): boolean;
  clearHeader(): RemoveResponse;

  getBody(): RemoveResponseBody | undefined;
  setBody(value?: RemoveResponseBody): RemoveResponse;
  hasBody(): boolean;
  clearBody(): RemoveResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveResponse): RemoveResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveResponse;
  static deserializeBinaryFromReader(message: RemoveResponse, reader: jspb.BinaryReader): RemoveResponse;
}

export namespace RemoveResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: RemoveResponseBody.AsObject,
  }
}

export class RemoveResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): RemoveResponseBody;
  hasStatus(): boolean;
  clearStatus(): RemoveResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveResponseBody): RemoveResponseBody.AsObject;
  static serializeBinaryToWriter(message: RemoveResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveResponseBody;
  static deserializeBinaryFromReader(message: RemoveResponseBody, reader: jspb.BinaryReader): RemoveResponseBody;
}

export namespace RemoveResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class ChunkMetadata extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): ChunkMetadata;

  getHash(): string;
  setHash(value: string): ChunkMetadata;

  getSize(): number;
  setSize(value: number): ChunkMetadata;

  getExtend(): string;
  setExtend(value: string): ChunkMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChunkMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ChunkMetadata): ChunkMetadata.AsObject;
  static serializeBinaryToWriter(message: ChunkMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChunkMetadata;
  static deserializeBinaryFromReader(message: ChunkMetadata, reader: jspb.BinaryReader): ChunkMetadata;
}

export namespace ChunkMetadata {
  export type AsObject = {
    index: number,
    hash: string,
    size: number,
    extend: string,
  }
}

export class AssetMetadata extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): AssetMetadata;

  getVersion(): number;
  setVersion(value: number): AssetMetadata;

  getUid(): string;
  setUid(value: string): AssetMetadata;

  getName(): string;
  setName(value: string): AssetMetadata;

  getParenthash(): string;
  setParenthash(value: string): AssetMetadata;

  getHash(): string;
  setHash(value: string): AssetMetadata;

  getMergedhash(): string;
  setMergedhash(value: string): AssetMetadata;

  getDescription(): string;
  setDescription(value: string): AssetMetadata;

  getFormat(): yeying_api_common_code_pb.DigitalFormatEnum;
  setFormat(value: yeying_api_common_code_pb.DigitalFormatEnum): AssetMetadata;

  getSize(): number;
  setSize(value: number): AssetMetadata;

  getCreated(): string;
  setCreated(value: string): AssetMetadata;

  getCheckpoint(): string;
  setCheckpoint(value: string): AssetMetadata;

  getTotal(): number;
  setTotal(value: number): AssetMetadata;

  getBlock(): number;
  setBlock(value: number): AssetMetadata;

  getEncrypted(): boolean;
  setEncrypted(value: boolean): AssetMetadata;

  getExtend(): string;
  setExtend(value: string): AssetMetadata;

  getChunksList(): Array<ChunkMetadata>;
  setChunksList(value: Array<ChunkMetadata>): AssetMetadata;
  clearChunksList(): AssetMetadata;
  addChunks(value?: ChunkMetadata, index?: number): ChunkMetadata;

  getSignature(): string;
  setSignature(value: string): AssetMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: AssetMetadata): AssetMetadata.AsObject;
  static serializeBinaryToWriter(message: AssetMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetMetadata;
  static deserializeBinaryFromReader(message: AssetMetadata, reader: jspb.BinaryReader): AssetMetadata;
}

export namespace AssetMetadata {
  export type AsObject = {
    owner: string,
    version: number,
    uid: string,
    name: string,
    parenthash: string,
    hash: string,
    mergedhash: string,
    description: string,
    format: yeying_api_common_code_pb.DigitalFormatEnum,
    size: number,
    created: string,
    checkpoint: string,
    total: number,
    block: number,
    encrypted: boolean,
    extend: string,
    chunksList: Array<ChunkMetadata.AsObject>,
    signature: string,
  }
}

export enum AssetActionEnum { 
  ASSET_ACTION_UNKNOWN = 0,
  ASSET_ACTION_OVERWRITE = 1,
  ASSET_ACTION_APPEND = 2,
}
