import * as jspb from 'google-protobuf'

import * as yeying_api_common_message_pb from '../../../yeying/api/common/message_pb'; // proto import: "yeying/api/common/message.proto"
import * as yeying_api_common_code_pb from '../../../yeying/api/common/code_pb'; // proto import: "yeying/api/common/code.proto"


export class StreamPutRequest extends jspb.Message {
  getDatatag(): yeying_api_common_code_pb.StreamDataTagEnum;
  setDatatag(value: yeying_api_common_code_pb.StreamDataTagEnum): StreamPutRequest;

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
    datatag: yeying_api_common_code_pb.StreamDataTagEnum,
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

  getBody(): StreamPutHeadBody | undefined;
  setBody(value?: StreamPutHeadBody): StreamPutRequestHead;
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
    body?: StreamPutHeadBody.AsObject,
  }
}

export class StreamPutHeadBody extends jspb.Message {
  getHash(): string;
  setHash(value: string): StreamPutHeadBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamPutHeadBody.AsObject;
  static toObject(includeInstance: boolean, msg: StreamPutHeadBody): StreamPutHeadBody.AsObject;
  static serializeBinaryToWriter(message: StreamPutHeadBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamPutHeadBody;
  static deserializeBinaryFromReader(message: StreamPutHeadBody, reader: jspb.BinaryReader): StreamPutHeadBody;
}

export namespace StreamPutHeadBody {
  export type AsObject = {
    hash: string,
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

  getBody(): StreamPutTailBody | undefined;
  setBody(value?: StreamPutTailBody): StreamPutRequestTail;
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
    body?: StreamPutTailBody.AsObject,
  }
}

export class StreamPutTailBody extends jspb.Message {
  getBlock(): BlockMetadata | undefined;
  setBlock(value?: BlockMetadata): StreamPutTailBody;
  hasBlock(): boolean;
  clearBlock(): StreamPutTailBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamPutTailBody.AsObject;
  static toObject(includeInstance: boolean, msg: StreamPutTailBody): StreamPutTailBody.AsObject;
  static serializeBinaryToWriter(message: StreamPutTailBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamPutTailBody;
  static deserializeBinaryFromReader(message: StreamPutTailBody, reader: jspb.BinaryReader): StreamPutTailBody;
}

export namespace StreamPutTailBody {
  export type AsObject = {
    block?: BlockMetadata.AsObject,
  }
}

export class PutRequestBody extends jspb.Message {
  getBlock(): BlockMetadata | undefined;
  setBlock(value?: BlockMetadata): PutRequestBody;
  hasBlock(): boolean;
  clearBlock(): PutRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: PutRequestBody): PutRequestBody.AsObject;
  static serializeBinaryToWriter(message: PutRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutRequestBody;
  static deserializeBinaryFromReader(message: PutRequestBody, reader: jspb.BinaryReader): PutRequestBody;
}

export namespace PutRequestBody {
  export type AsObject = {
    block?: BlockMetadata.AsObject,
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
  getHash(): string;
  setHash(value: string): GetRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequestBody): GetRequestBody.AsObject;
  static serializeBinaryToWriter(message: GetRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequestBody;
  static deserializeBinaryFromReader(message: GetRequestBody, reader: jspb.BinaryReader): GetRequestBody;
}

export namespace GetRequestBody {
  export type AsObject = {
    hash: string,
  }
}

export class StreamGetResponse extends jspb.Message {
  getDatatag(): yeying_api_common_code_pb.StreamDataTagEnum;
  setDatatag(value: yeying_api_common_code_pb.StreamDataTagEnum): StreamGetResponse;

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
    datatag: yeying_api_common_code_pb.StreamDataTagEnum,
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

  getBody(): StreamGetHeadBody | undefined;
  setBody(value?: StreamGetHeadBody): StreamGetResponseHead;
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
    body?: StreamGetHeadBody.AsObject,
  }
}

export class StreamGetHeadBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): StreamGetHeadBody;
  hasStatus(): boolean;
  clearStatus(): StreamGetHeadBody;

  getBlock(): BlockMetadata | undefined;
  setBlock(value?: BlockMetadata): StreamGetHeadBody;
  hasBlock(): boolean;
  clearBlock(): StreamGetHeadBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamGetHeadBody.AsObject;
  static toObject(includeInstance: boolean, msg: StreamGetHeadBody): StreamGetHeadBody.AsObject;
  static serializeBinaryToWriter(message: StreamGetHeadBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamGetHeadBody;
  static deserializeBinaryFromReader(message: StreamGetHeadBody, reader: jspb.BinaryReader): StreamGetHeadBody;
}

export namespace StreamGetHeadBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
    block?: BlockMetadata.AsObject,
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

  getBody(): StreamGetTailBody | undefined;
  setBody(value?: StreamGetTailBody): StreamGetResponseTail;
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
    body?: StreamGetTailBody.AsObject,
  }
}

export class StreamGetTailBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): StreamGetTailBody;
  hasStatus(): boolean;
  clearStatus(): StreamGetTailBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamGetTailBody.AsObject;
  static toObject(includeInstance: boolean, msg: StreamGetTailBody): StreamGetTailBody.AsObject;
  static serializeBinaryToWriter(message: StreamGetTailBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamGetTailBody;
  static deserializeBinaryFromReader(message: StreamGetTailBody, reader: jspb.BinaryReader): StreamGetTailBody;
}

export namespace StreamGetTailBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class GetResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): GetResponseBody;
  hasStatus(): boolean;
  clearStatus(): GetResponseBody;

  getBlock(): BlockMetadata | undefined;
  setBlock(value?: BlockMetadata): GetResponseBody;
  hasBlock(): boolean;
  clearBlock(): GetResponseBody;

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
    block?: BlockMetadata.AsObject,
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

export class BlockMetadata extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): BlockMetadata;

  getHash(): string;
  setHash(value: string): BlockMetadata;

  getSize(): number;
  setSize(value: number): BlockMetadata;

  getCreated(): string;
  setCreated(value: string): BlockMetadata;

  getSignature(): string;
  setSignature(value: string): BlockMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: BlockMetadata): BlockMetadata.AsObject;
  static serializeBinaryToWriter(message: BlockMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockMetadata;
  static deserializeBinaryFromReader(message: BlockMetadata, reader: jspb.BinaryReader): BlockMetadata;
}

export namespace BlockMetadata {
  export type AsObject = {
    owner: string,
    hash: string,
    size: number,
    created: string,
    signature: string,
  }
}

