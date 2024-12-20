import * as jspb from 'google-protobuf'

import * as yeying_api_common_message_pb from '../../../yeying/api/common/message_pb'; // proto import: "yeying/api/common/message.proto"
import * as yeying_api_common_code_pb from '../../../yeying/api/common/code_pb'; // proto import: "yeying/api/common/code.proto"


export class DelLlmRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): DelLlmRequest;
  hasHeader(): boolean;
  clearHeader(): DelLlmRequest;

  getBody(): DelLlmRequestBody | undefined;
  setBody(value?: DelLlmRequestBody): DelLlmRequest;
  hasBody(): boolean;
  clearBody(): DelLlmRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelLlmRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DelLlmRequest): DelLlmRequest.AsObject;
  static serializeBinaryToWriter(message: DelLlmRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelLlmRequest;
  static deserializeBinaryFromReader(message: DelLlmRequest, reader: jspb.BinaryReader): DelLlmRequest;
}

export namespace DelLlmRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: DelLlmRequestBody.AsObject,
  }
}

export class GetLlmRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): GetLlmRequest;
  hasHeader(): boolean;
  clearHeader(): GetLlmRequest;

  getBody(): GetLlmRequestBody | undefined;
  setBody(value?: GetLlmRequestBody): GetLlmRequest;
  hasBody(): boolean;
  clearBody(): GetLlmRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmRequest): GetLlmRequest.AsObject;
  static serializeBinaryToWriter(message: GetLlmRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmRequest;
  static deserializeBinaryFromReader(message: GetLlmRequest, reader: jspb.BinaryReader): GetLlmRequest;
}

export namespace GetLlmRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: GetLlmRequestBody.AsObject,
  }
}

export class DelLlmResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): DelLlmResponse;
  hasHeader(): boolean;
  clearHeader(): DelLlmResponse;

  getBody(): DelLlmResponseBody | undefined;
  setBody(value?: DelLlmResponseBody): DelLlmResponse;
  hasBody(): boolean;
  clearBody(): DelLlmResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelLlmResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DelLlmResponse): DelLlmResponse.AsObject;
  static serializeBinaryToWriter(message: DelLlmResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelLlmResponse;
  static deserializeBinaryFromReader(message: DelLlmResponse, reader: jspb.BinaryReader): DelLlmResponse;
}

export namespace DelLlmResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: DelLlmResponseBody.AsObject,
  }
}

export class GetLlmResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): GetLlmResponse;
  hasHeader(): boolean;
  clearHeader(): GetLlmResponse;

  getBody(): GetLlmResponseBody | undefined;
  setBody(value?: GetLlmResponseBody): GetLlmResponse;
  hasBody(): boolean;
  clearBody(): GetLlmResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmResponse): GetLlmResponse.AsObject;
  static serializeBinaryToWriter(message: GetLlmResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmResponse;
  static deserializeBinaryFromReader(message: GetLlmResponse, reader: jspb.BinaryReader): GetLlmResponse;
}

export namespace GetLlmResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: GetLlmResponseBody.AsObject,
  }
}

export class GetLlmResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): GetLlmResponseBody;
  hasStatus(): boolean;
  clearStatus(): GetLlmResponseBody;

  getLlmsList(): Array<LlmMetadata>;
  setLlmsList(value: Array<LlmMetadata>): GetLlmResponseBody;
  clearLlmsList(): GetLlmResponseBody;
  addLlms(value?: LlmMetadata, index?: number): LlmMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmResponseBody): GetLlmResponseBody.AsObject;
  static serializeBinaryToWriter(message: GetLlmResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmResponseBody;
  static deserializeBinaryFromReader(message: GetLlmResponseBody, reader: jspb.BinaryReader): GetLlmResponseBody;
}

export namespace GetLlmResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
    llmsList: Array<LlmMetadata.AsObject>,
  }
}

export class GetLlmRequestBody extends jspb.Message {
  getLlmid(): string;
  setLlmid(value: string): GetLlmRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmRequestBody): GetLlmRequestBody.AsObject;
  static serializeBinaryToWriter(message: GetLlmRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmRequestBody;
  static deserializeBinaryFromReader(message: GetLlmRequestBody, reader: jspb.BinaryReader): GetLlmRequestBody;
}

export namespace GetLlmRequestBody {
  export type AsObject = {
    llmid: string,
  }
}

export class DelLlmRequestBody extends jspb.Message {
  getLlmid(): string;
  setLlmid(value: string): DelLlmRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelLlmRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: DelLlmRequestBody): DelLlmRequestBody.AsObject;
  static serializeBinaryToWriter(message: DelLlmRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelLlmRequestBody;
  static deserializeBinaryFromReader(message: DelLlmRequestBody, reader: jspb.BinaryReader): DelLlmRequestBody;
}

export namespace DelLlmRequestBody {
  export type AsObject = {
    llmid: string,
  }
}

export class DelLlmResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): DelLlmResponseBody;
  hasStatus(): boolean;
  clearStatus(): DelLlmResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelLlmResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: DelLlmResponseBody): DelLlmResponseBody.AsObject;
  static serializeBinaryToWriter(message: DelLlmResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelLlmResponseBody;
  static deserializeBinaryFromReader(message: DelLlmResponseBody, reader: jspb.BinaryReader): DelLlmResponseBody;
}

export namespace DelLlmResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class AddLlmRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): AddLlmRequest;
  hasHeader(): boolean;
  clearHeader(): AddLlmRequest;

  getBody(): AddLlmRequestBody | undefined;
  setBody(value?: AddLlmRequestBody): AddLlmRequest;
  hasBody(): boolean;
  clearBody(): AddLlmRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddLlmRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddLlmRequest): AddLlmRequest.AsObject;
  static serializeBinaryToWriter(message: AddLlmRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddLlmRequest;
  static deserializeBinaryFromReader(message: AddLlmRequest, reader: jspb.BinaryReader): AddLlmRequest;
}

export namespace AddLlmRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: AddLlmRequestBody.AsObject,
  }
}

export class AddLlmRequestBody extends jspb.Message {
  getLlmid(): string;
  setLlmid(value: string): AddLlmRequestBody;

  getName(): string;
  setName(value: string): AddLlmRequestBody;

  getCode(): LlmCodeEnum;
  setCode(value: LlmCodeEnum): AddLlmRequestBody;

  getKey(): string;
  setKey(value: string): AddLlmRequestBody;

  getExtend(): string;
  setExtend(value: string): AddLlmRequestBody;

  getCreated(): string;
  setCreated(value: string): AddLlmRequestBody;

  getCheckpoint(): string;
  setCheckpoint(value: string): AddLlmRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddLlmRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: AddLlmRequestBody): AddLlmRequestBody.AsObject;
  static serializeBinaryToWriter(message: AddLlmRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddLlmRequestBody;
  static deserializeBinaryFromReader(message: AddLlmRequestBody, reader: jspb.BinaryReader): AddLlmRequestBody;
}

export namespace AddLlmRequestBody {
  export type AsObject = {
    llmid: string,
    name: string,
    code: LlmCodeEnum,
    key: string,
    extend: string,
    created: string,
    checkpoint: string,
  }
}

export class AddLlmResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): AddLlmResponse;
  hasHeader(): boolean;
  clearHeader(): AddLlmResponse;

  getBody(): AddLlmResponseBody | undefined;
  setBody(value?: AddLlmResponseBody): AddLlmResponse;
  hasBody(): boolean;
  clearBody(): AddLlmResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddLlmResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddLlmResponse): AddLlmResponse.AsObject;
  static serializeBinaryToWriter(message: AddLlmResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddLlmResponse;
  static deserializeBinaryFromReader(message: AddLlmResponse, reader: jspb.BinaryReader): AddLlmResponse;
}

export namespace AddLlmResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: AddLlmResponseBody.AsObject,
  }
}

export class AddLlmResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): AddLlmResponseBody;
  hasStatus(): boolean;
  clearStatus(): AddLlmResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddLlmResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: AddLlmResponseBody): AddLlmResponseBody.AsObject;
  static serializeBinaryToWriter(message: AddLlmResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddLlmResponseBody;
  static deserializeBinaryFromReader(message: AddLlmResponseBody, reader: jspb.BinaryReader): AddLlmResponseBody;
}

export namespace AddLlmResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class LlmMetadata extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): LlmMetadata;

  getLlmid(): string;
  setLlmid(value: string): LlmMetadata;

  getName(): string;
  setName(value: string): LlmMetadata;

  getCode(): LlmCodeEnum;
  setCode(value: LlmCodeEnum): LlmMetadata;

  getStatus(): LlmStatusEnum;
  setStatus(value: LlmStatusEnum): LlmMetadata;

  getExtend(): string;
  setExtend(value: string): LlmMetadata;

  getCreated(): string;
  setCreated(value: string): LlmMetadata;

  getCheckpoint(): string;
  setCheckpoint(value: string): LlmMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LlmMetadata): LlmMetadata.AsObject;
  static serializeBinaryToWriter(message: LlmMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmMetadata;
  static deserializeBinaryFromReader(message: LlmMetadata, reader: jspb.BinaryReader): LlmMetadata;
}

export namespace LlmMetadata {
  export type AsObject = {
    owner: string,
    llmid: string,
    name: string,
    code: LlmCodeEnum,
    status: LlmStatusEnum,
    extend: string,
    created: string,
    checkpoint: string,
  }
}

export class CompleteRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): CompleteRequest;
  hasHeader(): boolean;
  clearHeader(): CompleteRequest;

  getBody(): CompleteRequestBody | undefined;
  setBody(value?: CompleteRequestBody): CompleteRequest;
  hasBody(): boolean;
  clearBody(): CompleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteRequest): CompleteRequest.AsObject;
  static serializeBinaryToWriter(message: CompleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteRequest;
  static deserializeBinaryFromReader(message: CompleteRequest, reader: jspb.BinaryReader): CompleteRequest;
}

export namespace CompleteRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: CompleteRequestBody.AsObject,
  }
}

export class CompleteRequestBody extends jspb.Message {
  getLlmid(): string;
  setLlmid(value: string): CompleteRequestBody;

  getModel(): string;
  setModel(value: string): CompleteRequestBody;

  getStream(): boolean;
  setStream(value: boolean): CompleteRequestBody;

  getPromptsList(): Array<Prompt>;
  setPromptsList(value: Array<Prompt>): CompleteRequestBody;
  clearPromptsList(): CompleteRequestBody;
  addPrompts(value?: Prompt, index?: number): Prompt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteRequestBody): CompleteRequestBody.AsObject;
  static serializeBinaryToWriter(message: CompleteRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteRequestBody;
  static deserializeBinaryFromReader(message: CompleteRequestBody, reader: jspb.BinaryReader): CompleteRequestBody;
}

export namespace CompleteRequestBody {
  export type AsObject = {
    llmid: string,
    model: string,
    stream: boolean,
    promptsList: Array<Prompt.AsObject>,
  }
}

export class Prompt extends jspb.Message {
  getRole(): MessageRoleEnum;
  setRole(value: MessageRoleEnum): Prompt;

  getContent(): string;
  setContent(value: string): Prompt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Prompt.AsObject;
  static toObject(includeInstance: boolean, msg: Prompt): Prompt.AsObject;
  static serializeBinaryToWriter(message: Prompt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Prompt;
  static deserializeBinaryFromReader(message: Prompt, reader: jspb.BinaryReader): Prompt;
}

export namespace Prompt {
  export type AsObject = {
    role: MessageRoleEnum,
    content: string,
  }
}

export class Answer extends jspb.Message {
  getModel(): string;
  setModel(value: string): Answer;

  getId(): string;
  setId(value: string): Answer;

  getCreated(): number;
  setCreated(value: number): Answer;

  getChoicesList(): Array<Choice>;
  setChoicesList(value: Array<Choice>): Answer;
  clearChoicesList(): Answer;
  addChoices(value?: Choice, index?: number): Choice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Answer.AsObject;
  static toObject(includeInstance: boolean, msg: Answer): Answer.AsObject;
  static serializeBinaryToWriter(message: Answer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Answer;
  static deserializeBinaryFromReader(message: Answer, reader: jspb.BinaryReader): Answer;
}

export namespace Answer {
  export type AsObject = {
    model: string,
    id: string,
    created: number,
    choicesList: Array<Choice.AsObject>,
  }
}

export class CompleteResponse extends jspb.Message {
  getContenttag(): yeying_api_common_code_pb.StreamDataTagEnum;
  setContenttag(value: yeying_api_common_code_pb.StreamDataTagEnum): CompleteResponse;

  getHead(): CompleteResponseHead | undefined;
  setHead(value?: CompleteResponseHead): CompleteResponse;
  hasHead(): boolean;
  clearHead(): CompleteResponse;

  getBody(): CompleteResponseBody | undefined;
  setBody(value?: CompleteResponseBody): CompleteResponse;
  hasBody(): boolean;
  clearBody(): CompleteResponse;

  getTail(): CompleteResponseTail | undefined;
  setTail(value?: CompleteResponseTail): CompleteResponse;
  hasTail(): boolean;
  clearTail(): CompleteResponse;

  getDataCase(): CompleteResponse.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteResponse): CompleteResponse.AsObject;
  static serializeBinaryToWriter(message: CompleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteResponse;
  static deserializeBinaryFromReader(message: CompleteResponse, reader: jspb.BinaryReader): CompleteResponse;
}

export namespace CompleteResponse {
  export type AsObject = {
    contenttag: yeying_api_common_code_pb.StreamDataTagEnum,
    head?: CompleteResponseHead.AsObject,
    body?: CompleteResponseBody.AsObject,
    tail?: CompleteResponseTail.AsObject,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    HEAD = 2,
    BODY = 3,
    TAIL = 4,
  }
}

export class CompleteResponseHead extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): CompleteResponseHead;
  hasHeader(): boolean;
  clearHeader(): CompleteResponseHead;

  getBody(): CompleteResponseHeadBody | undefined;
  setBody(value?: CompleteResponseHeadBody): CompleteResponseHead;
  hasBody(): boolean;
  clearBody(): CompleteResponseHead;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteResponseHead.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteResponseHead): CompleteResponseHead.AsObject;
  static serializeBinaryToWriter(message: CompleteResponseHead, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteResponseHead;
  static deserializeBinaryFromReader(message: CompleteResponseHead, reader: jspb.BinaryReader): CompleteResponseHead;
}

export namespace CompleteResponseHead {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: CompleteResponseHeadBody.AsObject,
  }
}

export class CompleteResponseHeadBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): CompleteResponseHeadBody;
  hasStatus(): boolean;
  clearStatus(): CompleteResponseHeadBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteResponseHeadBody.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteResponseHeadBody): CompleteResponseHeadBody.AsObject;
  static serializeBinaryToWriter(message: CompleteResponseHeadBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteResponseHeadBody;
  static deserializeBinaryFromReader(message: CompleteResponseHeadBody, reader: jspb.BinaryReader): CompleteResponseHeadBody;
}

export namespace CompleteResponseHeadBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class CompleteResponseBody extends jspb.Message {
  getAnswer(): Answer | undefined;
  setAnswer(value?: Answer): CompleteResponseBody;
  hasAnswer(): boolean;
  clearAnswer(): CompleteResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteResponseBody): CompleteResponseBody.AsObject;
  static serializeBinaryToWriter(message: CompleteResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteResponseBody;
  static deserializeBinaryFromReader(message: CompleteResponseBody, reader: jspb.BinaryReader): CompleteResponseBody;
}

export namespace CompleteResponseBody {
  export type AsObject = {
    answer?: Answer.AsObject,
  }
}

export class CompleteResponseTail extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): CompleteResponseTail;
  hasHeader(): boolean;
  clearHeader(): CompleteResponseTail;

  getBody(): CompleteResponseTailBody | undefined;
  setBody(value?: CompleteResponseTailBody): CompleteResponseTail;
  hasBody(): boolean;
  clearBody(): CompleteResponseTail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteResponseTail.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteResponseTail): CompleteResponseTail.AsObject;
  static serializeBinaryToWriter(message: CompleteResponseTail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteResponseTail;
  static deserializeBinaryFromReader(message: CompleteResponseTail, reader: jspb.BinaryReader): CompleteResponseTail;
}

export namespace CompleteResponseTail {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: CompleteResponseTailBody.AsObject,
  }
}

export class CompleteResponseTailBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): CompleteResponseTailBody;
  hasStatus(): boolean;
  clearStatus(): CompleteResponseTailBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteResponseTailBody.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteResponseTailBody): CompleteResponseTailBody.AsObject;
  static serializeBinaryToWriter(message: CompleteResponseTailBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteResponseTailBody;
  static deserializeBinaryFromReader(message: CompleteResponseTailBody, reader: jspb.BinaryReader): CompleteResponseTailBody;
}

export namespace CompleteResponseTailBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
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
  getLlmid(): string;
  setLlmid(value: string): GenerateRequestBody;

  getModel(): string;
  setModel(value: string): GenerateRequestBody;

  getPrompt(): string;
  setPrompt(value: string): GenerateRequestBody;

  getResponsecontentformat(): yeying_api_common_code_pb.ContentFormatEnum;
  setResponsecontentformat(value: yeying_api_common_code_pb.ContentFormatEnum): GenerateRequestBody;

  getCount(): number;
  setCount(value: number): GenerateRequestBody;

  getSize(): string;
  setSize(value: string): GenerateRequestBody;

  getQuality(): string;
  setQuality(value: string): GenerateRequestBody;

  getStyle(): string;
  setStyle(value: string): GenerateRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateRequestBody): GenerateRequestBody.AsObject;
  static serializeBinaryToWriter(message: GenerateRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateRequestBody;
  static deserializeBinaryFromReader(message: GenerateRequestBody, reader: jspb.BinaryReader): GenerateRequestBody;
}

export namespace GenerateRequestBody {
  export type AsObject = {
    llmid: string,
    model: string,
    prompt: string,
    responsecontentformat: yeying_api_common_code_pb.ContentFormatEnum,
    count: number,
    size: string,
    quality: string,
    style: string,
  }
}

export class GenerateResponse extends jspb.Message {
  getContenttag(): yeying_api_common_code_pb.StreamDataTagEnum;
  setContenttag(value: yeying_api_common_code_pb.StreamDataTagEnum): GenerateResponse;

  getHead(): GenerateResponseHead | undefined;
  setHead(value?: GenerateResponseHead): GenerateResponse;
  hasHead(): boolean;
  clearHead(): GenerateResponse;

  getBody(): GenerateResponseBody | undefined;
  setBody(value?: GenerateResponseBody): GenerateResponse;
  hasBody(): boolean;
  clearBody(): GenerateResponse;

  getTail(): GenerateResponseTail | undefined;
  setTail(value?: GenerateResponseTail): GenerateResponse;
  hasTail(): boolean;
  clearTail(): GenerateResponse;

  getDataCase(): GenerateResponse.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateResponse): GenerateResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateResponse;
  static deserializeBinaryFromReader(message: GenerateResponse, reader: jspb.BinaryReader): GenerateResponse;
}

export namespace GenerateResponse {
  export type AsObject = {
    contenttag: yeying_api_common_code_pb.StreamDataTagEnum,
    head?: GenerateResponseHead.AsObject,
    body?: GenerateResponseBody.AsObject,
    tail?: GenerateResponseTail.AsObject,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    HEAD = 2,
    BODY = 3,
    TAIL = 4,
  }
}

export class GenerateResponseHead extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): GenerateResponseHead;
  hasHeader(): boolean;
  clearHeader(): GenerateResponseHead;

  getBody(): GenerateResponseHeadBody | undefined;
  setBody(value?: GenerateResponseHeadBody): GenerateResponseHead;
  hasBody(): boolean;
  clearBody(): GenerateResponseHead;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateResponseHead.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateResponseHead): GenerateResponseHead.AsObject;
  static serializeBinaryToWriter(message: GenerateResponseHead, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateResponseHead;
  static deserializeBinaryFromReader(message: GenerateResponseHead, reader: jspb.BinaryReader): GenerateResponseHead;
}

export namespace GenerateResponseHead {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: GenerateResponseHeadBody.AsObject,
  }
}

export class GenerateResponseHeadBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): GenerateResponseHeadBody;
  hasStatus(): boolean;
  clearStatus(): GenerateResponseHeadBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateResponseHeadBody.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateResponseHeadBody): GenerateResponseHeadBody.AsObject;
  static serializeBinaryToWriter(message: GenerateResponseHeadBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateResponseHeadBody;
  static deserializeBinaryFromReader(message: GenerateResponseHeadBody, reader: jspb.BinaryReader): GenerateResponseHeadBody;
}

export namespace GenerateResponseHeadBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class GenerateResponseBody extends jspb.Message {
  getData(): string;
  setData(value: string): GenerateResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateResponseBody): GenerateResponseBody.AsObject;
  static serializeBinaryToWriter(message: GenerateResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateResponseBody;
  static deserializeBinaryFromReader(message: GenerateResponseBody, reader: jspb.BinaryReader): GenerateResponseBody;
}

export namespace GenerateResponseBody {
  export type AsObject = {
    data: string,
  }
}

export class GenerateResponseTail extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): GenerateResponseTail;
  hasHeader(): boolean;
  clearHeader(): GenerateResponseTail;

  getBody(): GenerateResponseTailBody | undefined;
  setBody(value?: GenerateResponseTailBody): GenerateResponseTail;
  hasBody(): boolean;
  clearBody(): GenerateResponseTail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateResponseTail.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateResponseTail): GenerateResponseTail.AsObject;
  static serializeBinaryToWriter(message: GenerateResponseTail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateResponseTail;
  static deserializeBinaryFromReader(message: GenerateResponseTail, reader: jspb.BinaryReader): GenerateResponseTail;
}

export namespace GenerateResponseTail {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: GenerateResponseTailBody.AsObject,
  }
}

export class GenerateResponseTailBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): GenerateResponseTailBody;
  hasStatus(): boolean;
  clearStatus(): GenerateResponseTailBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateResponseTailBody.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateResponseTailBody): GenerateResponseTailBody.AsObject;
  static serializeBinaryToWriter(message: GenerateResponseTailBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateResponseTailBody;
  static deserializeBinaryFromReader(message: GenerateResponseTailBody, reader: jspb.BinaryReader): GenerateResponseTailBody;
}

export namespace GenerateResponseTailBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class TextPrompt extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): TextPrompt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextPrompt.AsObject;
  static toObject(includeInstance: boolean, msg: TextPrompt): TextPrompt.AsObject;
  static serializeBinaryToWriter(message: TextPrompt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextPrompt;
  static deserializeBinaryFromReader(message: TextPrompt, reader: jspb.BinaryReader): TextPrompt;
}

export namespace TextPrompt {
  export type AsObject = {
    message: string,
  }
}

export class ImagePrompt extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ImagePrompt;

  getMask(): Uint8Array | string;
  getMask_asU8(): Uint8Array;
  getMask_asB64(): string;
  setMask(value: Uint8Array | string): ImagePrompt;

  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): ImagePrompt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImagePrompt.AsObject;
  static toObject(includeInstance: boolean, msg: ImagePrompt): ImagePrompt.AsObject;
  static serializeBinaryToWriter(message: ImagePrompt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImagePrompt;
  static deserializeBinaryFromReader(message: ImagePrompt, reader: jspb.BinaryReader): ImagePrompt;
}

export namespace ImagePrompt {
  export type AsObject = {
    message: string,
    mask: Uint8Array | string,
    image: Uint8Array | string,
  }
}

export class ImageResult extends jspb.Message {
  getResponsecontentformat(): yeying_api_common_code_pb.ContentFormatEnum;
  setResponsecontentformat(value: yeying_api_common_code_pb.ContentFormatEnum): ImageResult;

  getCount(): number;
  setCount(value: number): ImageResult;

  getSize(): string;
  setSize(value: string): ImageResult;

  getQuality(): string;
  setQuality(value: string): ImageResult;

  getStyle(): string;
  setStyle(value: string): ImageResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageResult.AsObject;
  static toObject(includeInstance: boolean, msg: ImageResult): ImageResult.AsObject;
  static serializeBinaryToWriter(message: ImageResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageResult;
  static deserializeBinaryFromReader(message: ImageResult, reader: jspb.BinaryReader): ImageResult;
}

export namespace ImageResult {
  export type AsObject = {
    responsecontentformat: yeying_api_common_code_pb.ContentFormatEnum,
    count: number,
    size: string,
    quality: string,
    style: string,
  }
}

export class EditRequest extends jspb.Message {
  getDid(): string;
  setDid(value: string): EditRequest;

  getLlmid(): string;
  setLlmid(value: string): EditRequest;

  getModel(): string;
  setModel(value: string): EditRequest;

  getSrctype(): yeying_api_common_code_pb.DigitalFormatEnum;
  setSrctype(value: yeying_api_common_code_pb.DigitalFormatEnum): EditRequest;

  getDestype(): yeying_api_common_code_pb.DigitalFormatEnum;
  setDestype(value: yeying_api_common_code_pb.DigitalFormatEnum): EditRequest;

  getTextprompt(): TextPrompt | undefined;
  setTextprompt(value?: TextPrompt): EditRequest;
  hasTextprompt(): boolean;
  clearTextprompt(): EditRequest;

  getImageprompt(): ImagePrompt | undefined;
  setImageprompt(value?: ImagePrompt): EditRequest;
  hasImageprompt(): boolean;
  clearImageprompt(): EditRequest;

  getImageresult(): ImageResult | undefined;
  setImageresult(value?: ImageResult): EditRequest;
  hasImageresult(): boolean;
  clearImageresult(): EditRequest;

  getPromptCase(): EditRequest.PromptCase;

  getResultCase(): EditRequest.ResultCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditRequest): EditRequest.AsObject;
  static serializeBinaryToWriter(message: EditRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditRequest;
  static deserializeBinaryFromReader(message: EditRequest, reader: jspb.BinaryReader): EditRequest;
}

export namespace EditRequest {
  export type AsObject = {
    did: string,
    llmid: string,
    model: string,
    srctype: yeying_api_common_code_pb.DigitalFormatEnum,
    destype: yeying_api_common_code_pb.DigitalFormatEnum,
    textprompt?: TextPrompt.AsObject,
    imageprompt?: ImagePrompt.AsObject,
    imageresult?: ImageResult.AsObject,
  }

  export enum PromptCase { 
    PROMPT_NOT_SET = 0,
    TEXTPROMPT = 7,
    IMAGEPROMPT = 8,
  }

  export enum ResultCase { 
    RESULT_NOT_SET = 0,
    IMAGERESULT = 9,
  }
}

export class EditResponse extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): EditResponse;
  hasStatus(): boolean;
  clearStatus(): EditResponse;

  getBase64(): string;
  setBase64(value: string): EditResponse;

  getBytes(): Uint8Array | string;
  getBytes_asU8(): Uint8Array;
  getBytes_asB64(): string;
  setBytes(value: Uint8Array | string): EditResponse;

  getDataCase(): EditResponse.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EditResponse): EditResponse.AsObject;
  static serializeBinaryToWriter(message: EditResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditResponse;
  static deserializeBinaryFromReader(message: EditResponse, reader: jspb.BinaryReader): EditResponse;
}

export namespace EditResponse {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
    base64: string,
    bytes: Uint8Array | string,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    BASE64 = 2,
    BYTES = 3,
  }
}

export class TranslateRequest extends jspb.Message {
  getDid(): string;
  setDid(value: string): TranslateRequest;

  getLlmid(): string;
  setLlmid(value: string): TranslateRequest;

  getInstance(): string;
  setInstance(value: string): TranslateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TranslateRequest): TranslateRequest.AsObject;
  static serializeBinaryToWriter(message: TranslateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslateRequest;
  static deserializeBinaryFromReader(message: TranslateRequest, reader: jspb.BinaryReader): TranslateRequest;
}

export namespace TranslateRequest {
  export type AsObject = {
    did: string,
    llmid: string,
    instance: string,
  }
}

export class TranslateResponse extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): TranslateResponse;
  hasStatus(): boolean;
  clearStatus(): TranslateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TranslateResponse): TranslateResponse.AsObject;
  static serializeBinaryToWriter(message: TranslateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslateResponse;
  static deserializeBinaryFromReader(message: TranslateResponse, reader: jspb.BinaryReader): TranslateResponse;
}

export namespace TranslateResponse {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class ConvertRequest extends jspb.Message {
  getDid(): string;
  setDid(value: string): ConvertRequest;

  getLlmid(): string;
  setLlmid(value: string): ConvertRequest;

  getInstance(): string;
  setInstance(value: string): ConvertRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConvertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConvertRequest): ConvertRequest.AsObject;
  static serializeBinaryToWriter(message: ConvertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConvertRequest;
  static deserializeBinaryFromReader(message: ConvertRequest, reader: jspb.BinaryReader): ConvertRequest;
}

export namespace ConvertRequest {
  export type AsObject = {
    did: string,
    llmid: string,
    instance: string,
  }
}

export class ConvertResponse extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): ConvertResponse;
  hasStatus(): boolean;
  clearStatus(): ConvertResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConvertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConvertResponse): ConvertResponse.AsObject;
  static serializeBinaryToWriter(message: ConvertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConvertResponse;
  static deserializeBinaryFromReader(message: ConvertResponse, reader: jspb.BinaryReader): ConvertResponse;
}

export namespace ConvertResponse {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class Choice extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): Choice;

  getRole(): MessageRoleEnum;
  setRole(value: MessageRoleEnum): Choice;

  getContent(): string;
  setContent(value: string): Choice;

  getFinishreason(): string;
  setFinishreason(value: string): Choice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Choice.AsObject;
  static toObject(includeInstance: boolean, msg: Choice): Choice.AsObject;
  static serializeBinaryToWriter(message: Choice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Choice;
  static deserializeBinaryFromReader(message: Choice, reader: jspb.BinaryReader): Choice;
}

export namespace Choice {
  export type AsObject = {
    index: number,
    role: MessageRoleEnum,
    content: string,
    finishreason: string,
  }
}

export class SpeechRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SpeechRequest): SpeechRequest.AsObject;
  static serializeBinaryToWriter(message: SpeechRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeechRequest;
  static deserializeBinaryFromReader(message: SpeechRequest, reader: jspb.BinaryReader): SpeechRequest;
}

export namespace SpeechRequest {
  export type AsObject = {
  }
}

export class SpeechResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SpeechResponse): SpeechResponse.AsObject;
  static serializeBinaryToWriter(message: SpeechResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeechResponse;
  static deserializeBinaryFromReader(message: SpeechResponse, reader: jspb.BinaryReader): SpeechResponse;
}

export namespace SpeechResponse {
  export type AsObject = {
  }
}

export enum MessageRoleEnum { 
  MESSAGE_ROLE_UNKNOWN = 0,
  MESSAGE_ROLE_ASSISTANT = 1,
  MESSAGE_ROLE_USER = 2,
  MESSAGE_ROLE_SYSTEM = 3,
}
export enum LlmCodeEnum { 
  LLM_CODE_UNKNOWN = 0,
  LLM_CODE_OPENAI = 1,
  LLM_CODE_GEMINI = 2,
  LLM_CODE_ZHIPUAI = 3,
}
export enum LlmStatusEnum { 
  LLM_STATUS_UNKNOWN = 0,
  LLM_STATUS_DEACTIVATED = 1,
  LLM_STATUS_ACTIVATED = 2,
}
