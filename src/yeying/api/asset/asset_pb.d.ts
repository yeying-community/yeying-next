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
  getFormat(): yeying_api_common_code_pb.DigitalFormatEnum;
  setFormat(value: yeying_api_common_code_pb.DigitalFormatEnum): SearchCondition;

  getContenthash(): string;
  setContenthash(value: string): SearchCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchCondition.AsObject;
  static toObject(includeInstance: boolean, msg: SearchCondition): SearchCondition.AsObject;
  static serializeBinaryToWriter(message: SearchCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchCondition;
  static deserializeBinaryFromReader(message: SearchCondition, reader: jspb.BinaryReader): SearchCondition;
}

export namespace SearchCondition {
  export type AsObject = {
    format: yeying_api_common_code_pb.DigitalFormatEnum,
    contenthash: string,
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
  getUid(): string;
  setUid(value: string): VersionRequestBody;

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
    uid: string,
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
  getUid(): string;
  setUid(value: string): DetailRequestBody;

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
    uid: string,
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
  getUid(): string;
  setUid(value: string): RemoveRequestBody;

  getVersion(): number;
  setVersion(value: number): RemoveRequestBody;

  getHard(): boolean;
  setHard(value: boolean): RemoveRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRequestBody): RemoveRequestBody.AsObject;
  static serializeBinaryToWriter(message: RemoveRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRequestBody;
  static deserializeBinaryFromReader(message: RemoveRequestBody, reader: jspb.BinaryReader): RemoveRequestBody;
}

export namespace RemoveRequestBody {
  export type AsObject = {
    uid: string,
    version: number,
    hard: boolean,
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

  getContenthash(): string;
  setContenthash(value: string): AssetMetadata;

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

  getDeleted(): string;
  setDeleted(value: string): AssetMetadata;

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
    contenthash: string,
    mergedhash: string,
    description: string,
    format: yeying_api_common_code_pb.DigitalFormatEnum,
    size: number,
    created: string,
    checkpoint: string,
    deleted: string,
    total: number,
    block: number,
    encrypted: boolean,
    extend: string,
    chunksList: Array<ChunkMetadata.AsObject>,
    signature: string,
  }
}

