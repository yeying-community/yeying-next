import * as jspb from 'google-protobuf'

import * as yeying_api_common_message_pb from '../../../yeying/api/common/message_pb'; // proto import: "yeying/api/common/message.proto"


export class EventMetadata extends jspb.Message {
  getUid(): string;
  setUid(value: string): EventMetadata;

  getType(): EventTypeEnum;
  setType(value: EventTypeEnum): EventMetadata;

  getProducersList(): Array<string>;
  setProducersList(value: Array<string>): EventMetadata;
  clearProducersList(): EventMetadata;
  addProducers(value: string, index?: number): EventMetadata;

  getConsumersList(): Array<string>;
  setConsumersList(value: Array<string>): EventMetadata;
  clearConsumersList(): EventMetadata;
  addConsumers(value: string, index?: number): EventMetadata;

  getSignature(): EventSignature | undefined;
  setSignature(value?: EventSignature): EventMetadata;
  hasSignature(): boolean;
  clearSignature(): EventMetadata;

  getExtend(): string;
  setExtend(value: string): EventMetadata;

  getCreated(): string;
  setCreated(value: string): EventMetadata;

  getProcessed(): string;
  setProcessed(value: string): EventMetadata;

  getNotifycontent(): NotifyContent | undefined;
  setNotifycontent(value?: NotifyContent): EventMetadata;
  hasNotifycontent(): boolean;
  clearNotifycontent(): EventMetadata;

  getApplycontent(): ApplyContent | undefined;
  setApplycontent(value?: ApplyContent): EventMetadata;
  hasApplycontent(): boolean;
  clearApplycontent(): EventMetadata;

  getCustomcontent(): CustomContent | undefined;
  setCustomcontent(value?: CustomContent): EventMetadata;
  hasCustomcontent(): boolean;
  clearCustomcontent(): EventMetadata;

  getNotifyopinion(): NotifyOpinion | undefined;
  setNotifyopinion(value?: NotifyOpinion): EventMetadata;
  hasNotifyopinion(): boolean;
  clearNotifyopinion(): EventMetadata;

  getApplyopinion(): ApplyOpinion | undefined;
  setApplyopinion(value?: ApplyOpinion): EventMetadata;
  hasApplyopinion(): boolean;
  clearApplyopinion(): EventMetadata;

  getCustomopinion(): CustomOpinion | undefined;
  setCustomopinion(value?: CustomOpinion): EventMetadata;
  hasCustomopinion(): boolean;
  clearCustomopinion(): EventMetadata;

  getContentCase(): EventMetadata.ContentCase;

  getOpinionCase(): EventMetadata.OpinionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: EventMetadata): EventMetadata.AsObject;
  static serializeBinaryToWriter(message: EventMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventMetadata;
  static deserializeBinaryFromReader(message: EventMetadata, reader: jspb.BinaryReader): EventMetadata;
}

export namespace EventMetadata {
  export type AsObject = {
    uid: string,
    type: EventTypeEnum,
    producersList: Array<string>,
    consumersList: Array<string>,
    signature?: EventSignature.AsObject,
    extend: string,
    created: string,
    processed: string,
    notifycontent?: NotifyContent.AsObject,
    applycontent?: ApplyContent.AsObject,
    customcontent?: CustomContent.AsObject,
    notifyopinion?: NotifyOpinion.AsObject,
    applyopinion?: ApplyOpinion.AsObject,
    customopinion?: CustomOpinion.AsObject,
  }

  export enum ContentCase { 
    CONTENT_NOT_SET = 0,
    NOTIFYCONTENT = 9,
    APPLYCONTENT = 10,
    CUSTOMCONTENT = 11,
  }

  export enum OpinionCase { 
    OPINION_NOT_SET = 0,
    NOTIFYOPINION = 12,
    APPLYOPINION = 13,
    CUSTOMOPINION = 14,
  }
}

export class SignatureObject extends jspb.Message {
  getUid(): string;
  setUid(value: string): SignatureObject;

  getType(): EventTypeEnum;
  setType(value: EventTypeEnum): SignatureObject;

  getProducersList(): Array<string>;
  setProducersList(value: Array<string>): SignatureObject;
  clearProducersList(): SignatureObject;
  addProducers(value: string, index?: number): SignatureObject;

  getConsumersList(): Array<string>;
  setConsumersList(value: Array<string>): SignatureObject;
  clearConsumersList(): SignatureObject;
  addConsumers(value: string, index?: number): SignatureObject;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): SignatureObject;

  getExtend(): string;
  setExtend(value: string): SignatureObject;

  getCreated(): string;
  setCreated(value: string): SignatureObject;

  getProcessed(): string;
  setProcessed(value: string): SignatureObject;

  getOpinion(): Uint8Array | string;
  getOpinion_asU8(): Uint8Array;
  getOpinion_asB64(): string;
  setOpinion(value: Uint8Array | string): SignatureObject;

  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): SignatureObject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignatureObject.AsObject;
  static toObject(includeInstance: boolean, msg: SignatureObject): SignatureObject.AsObject;
  static serializeBinaryToWriter(message: SignatureObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignatureObject;
  static deserializeBinaryFromReader(message: SignatureObject, reader: jspb.BinaryReader): SignatureObject;
}

export namespace SignatureObject {
  export type AsObject = {
    uid: string,
    type: EventTypeEnum,
    producersList: Array<string>,
    consumersList: Array<string>,
    signature: Uint8Array | string,
    extend: string,
    created: string,
    processed: string,
    opinion: Uint8Array | string,
    content: Uint8Array | string,
  }
}

export class EventSignature extends jspb.Message {
  getProducersList(): Array<string>;
  setProducersList(value: Array<string>): EventSignature;
  clearProducersList(): EventSignature;
  addProducers(value: string, index?: number): EventSignature;

  getConsumersList(): Array<string>;
  setConsumersList(value: Array<string>): EventSignature;
  clearConsumersList(): EventSignature;
  addConsumers(value: string, index?: number): EventSignature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSignature.AsObject;
  static toObject(includeInstance: boolean, msg: EventSignature): EventSignature.AsObject;
  static serializeBinaryToWriter(message: EventSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSignature;
  static deserializeBinaryFromReader(message: EventSignature, reader: jspb.BinaryReader): EventSignature;
}

export namespace EventSignature {
  export type AsObject = {
    producersList: Array<string>,
    consumersList: Array<string>,
  }
}

export class CustomContent extends jspb.Message {
  getName(): string;
  setName(value: string): CustomContent;

  getObject(): string;
  setObject(value: string): CustomContent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomContent.AsObject;
  static toObject(includeInstance: boolean, msg: CustomContent): CustomContent.AsObject;
  static serializeBinaryToWriter(message: CustomContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomContent;
  static deserializeBinaryFromReader(message: CustomContent, reader: jspb.BinaryReader): CustomContent;
}

export namespace CustomContent {
  export type AsObject = {
    name: string,
    object: string,
  }
}

export class ApplyContent extends jspb.Message {
  getApplier(): string;
  setApplier(value: string): ApplyContent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyContent.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyContent): ApplyContent.AsObject;
  static serializeBinaryToWriter(message: ApplyContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyContent;
  static deserializeBinaryFromReader(message: ApplyContent, reader: jspb.BinaryReader): ApplyContent;
}

export namespace ApplyContent {
  export type AsObject = {
    applier: string,
  }
}

export class NotifyContent extends jspb.Message {
  getName(): string;
  setName(value: string): NotifyContent;

  getItemsList(): Array<NotifyItem>;
  setItemsList(value: Array<NotifyItem>): NotifyContent;
  clearItemsList(): NotifyContent;
  addItems(value?: NotifyItem, index?: number): NotifyItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotifyContent.AsObject;
  static toObject(includeInstance: boolean, msg: NotifyContent): NotifyContent.AsObject;
  static serializeBinaryToWriter(message: NotifyContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotifyContent;
  static deserializeBinaryFromReader(message: NotifyContent, reader: jspb.BinaryReader): NotifyContent;
}

export namespace NotifyContent {
  export type AsObject = {
    name: string,
    itemsList: Array<NotifyItem.AsObject>,
  }
}

export class NotifyItem extends jspb.Message {
  getUid(): string;
  setUid(value: string): NotifyItem;

  getAction(): NotifyActionEnum;
  setAction(value: NotifyActionEnum): NotifyItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotifyItem.AsObject;
  static toObject(includeInstance: boolean, msg: NotifyItem): NotifyItem.AsObject;
  static serializeBinaryToWriter(message: NotifyItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotifyItem;
  static deserializeBinaryFromReader(message: NotifyItem, reader: jspb.BinaryReader): NotifyItem;
}

export namespace NotifyItem {
  export type AsObject = {
    uid: string,
    action: NotifyActionEnum,
  }
}

export class ProduceRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): ProduceRequest;
  hasHeader(): boolean;
  clearHeader(): ProduceRequest;

  getBody(): ProduceRequestBody | undefined;
  setBody(value?: ProduceRequestBody): ProduceRequest;
  hasBody(): boolean;
  clearBody(): ProduceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProduceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProduceRequest): ProduceRequest.AsObject;
  static serializeBinaryToWriter(message: ProduceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProduceRequest;
  static deserializeBinaryFromReader(message: ProduceRequest, reader: jspb.BinaryReader): ProduceRequest;
}

export namespace ProduceRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: ProduceRequestBody.AsObject,
  }
}

export class ProduceRequestBody extends jspb.Message {
  getEvent(): EventMetadata | undefined;
  setEvent(value?: EventMetadata): ProduceRequestBody;
  hasEvent(): boolean;
  clearEvent(): ProduceRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProduceRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: ProduceRequestBody): ProduceRequestBody.AsObject;
  static serializeBinaryToWriter(message: ProduceRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProduceRequestBody;
  static deserializeBinaryFromReader(message: ProduceRequestBody, reader: jspb.BinaryReader): ProduceRequestBody;
}

export namespace ProduceRequestBody {
  export type AsObject = {
    event?: EventMetadata.AsObject,
  }
}

export class ProduceResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): ProduceResponse;
  hasHeader(): boolean;
  clearHeader(): ProduceResponse;

  getBody(): ProduceResponseBody | undefined;
  setBody(value?: ProduceResponseBody): ProduceResponse;
  hasBody(): boolean;
  clearBody(): ProduceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProduceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProduceResponse): ProduceResponse.AsObject;
  static serializeBinaryToWriter(message: ProduceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProduceResponse;
  static deserializeBinaryFromReader(message: ProduceResponse, reader: jspb.BinaryReader): ProduceResponse;
}

export namespace ProduceResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: ProduceResponseBody.AsObject,
  }
}

export class ProduceResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): ProduceResponseBody;
  hasStatus(): boolean;
  clearStatus(): ProduceResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProduceResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: ProduceResponseBody): ProduceResponseBody.AsObject;
  static serializeBinaryToWriter(message: ProduceResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProduceResponseBody;
  static deserializeBinaryFromReader(message: ProduceResponseBody, reader: jspb.BinaryReader): ProduceResponseBody;
}

export namespace ProduceResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export class ConsumeRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): ConsumeRequest;
  hasHeader(): boolean;
  clearHeader(): ConsumeRequest;

  getBody(): ConsumeRequestBody | undefined;
  setBody(value?: ConsumeRequestBody): ConsumeRequest;
  hasBody(): boolean;
  clearBody(): ConsumeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConsumeRequest): ConsumeRequest.AsObject;
  static serializeBinaryToWriter(message: ConsumeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsumeRequest;
  static deserializeBinaryFromReader(message: ConsumeRequest, reader: jspb.BinaryReader): ConsumeRequest;
}

export namespace ConsumeRequest {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: ConsumeRequestBody.AsObject,
  }
}

export class ConsumeRequestBody extends jspb.Message {
  getMetadata(): EventMetadata | undefined;
  setMetadata(value?: EventMetadata): ConsumeRequestBody;
  hasMetadata(): boolean;
  clearMetadata(): ConsumeRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumeRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: ConsumeRequestBody): ConsumeRequestBody.AsObject;
  static serializeBinaryToWriter(message: ConsumeRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsumeRequestBody;
  static deserializeBinaryFromReader(message: ConsumeRequestBody, reader: jspb.BinaryReader): ConsumeRequestBody;
}

export namespace ConsumeRequestBody {
  export type AsObject = {
    metadata?: EventMetadata.AsObject,
  }
}

export class NotifyOpinion extends jspb.Message {
  getProcessed(): string;
  setProcessed(value: string): NotifyOpinion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotifyOpinion.AsObject;
  static toObject(includeInstance: boolean, msg: NotifyOpinion): NotifyOpinion.AsObject;
  static serializeBinaryToWriter(message: NotifyOpinion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotifyOpinion;
  static deserializeBinaryFromReader(message: NotifyOpinion, reader: jspb.BinaryReader): NotifyOpinion;
}

export namespace NotifyOpinion {
  export type AsObject = {
    processed: string,
  }
}

export class ApplyOpinion extends jspb.Message {
  getAction(): ApplyActionEnum;
  setAction(value: ApplyActionEnum): ApplyOpinion;

  getCause(): string;
  setCause(value: string): ApplyOpinion;

  getProcessed(): string;
  setProcessed(value: string): ApplyOpinion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyOpinion.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyOpinion): ApplyOpinion.AsObject;
  static serializeBinaryToWriter(message: ApplyOpinion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyOpinion;
  static deserializeBinaryFromReader(message: ApplyOpinion, reader: jspb.BinaryReader): ApplyOpinion;
}

export namespace ApplyOpinion {
  export type AsObject = {
    action: ApplyActionEnum,
    cause: string,
    processed: string,
  }
}

export class CustomOpinion extends jspb.Message {
  getName(): string;
  setName(value: string): CustomOpinion;

  getObject(): string;
  setObject(value: string): CustomOpinion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomOpinion.AsObject;
  static toObject(includeInstance: boolean, msg: CustomOpinion): CustomOpinion.AsObject;
  static serializeBinaryToWriter(message: CustomOpinion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomOpinion;
  static deserializeBinaryFromReader(message: CustomOpinion, reader: jspb.BinaryReader): CustomOpinion;
}

export namespace CustomOpinion {
  export type AsObject = {
    name: string,
    object: string,
  }
}

export class ConsumeResponse extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): ConsumeResponse;
  hasHeader(): boolean;
  clearHeader(): ConsumeResponse;

  getBody(): ConsumeResponseBody | undefined;
  setBody(value?: ConsumeResponseBody): ConsumeResponse;
  hasBody(): boolean;
  clearBody(): ConsumeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConsumeResponse): ConsumeResponse.AsObject;
  static serializeBinaryToWriter(message: ConsumeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsumeResponse;
  static deserializeBinaryFromReader(message: ConsumeResponse, reader: jspb.BinaryReader): ConsumeResponse;
}

export namespace ConsumeResponse {
  export type AsObject = {
    header?: yeying_api_common_message_pb.MessageHeader.AsObject,
    body?: ConsumeResponseBody.AsObject,
  }
}

export class ConsumeResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): ConsumeResponseBody;
  hasStatus(): boolean;
  clearStatus(): ConsumeResponseBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumeResponseBody.AsObject;
  static toObject(includeInstance: boolean, msg: ConsumeResponseBody): ConsumeResponseBody.AsObject;
  static serializeBinaryToWriter(message: ConsumeResponseBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsumeResponseBody;
  static deserializeBinaryFromReader(message: ConsumeResponseBody, reader: jspb.BinaryReader): ConsumeResponseBody;
}

export namespace ConsumeResponseBody {
  export type AsObject = {
    status?: yeying_api_common_message_pb.ResponseStatus.AsObject,
  }
}

export enum EventTypeEnum { 
  EVENT_TYPE_UNKNOWN = 0,
  EVENT_TYPE_REMIND = 1,
  EVENT_TYPE_NOTIFY = 2,
  EVENT_TYPE_APPLY = 3,
  EVENT_TYPE_CUSTOM = 4,
}
export enum ApplyActionEnum { 
  APPLY_ACTION_UNKNOWN = 0,
  APPLY_ACTION_PASSED = 1,
  APPLY_ACTION_REFUSED = 2,
}
export enum NotifyActionEnum { 
  NOTIFY_ACTION_UNKNOWN = 0,
  NOTIFY_ACTION_ADD = 1,
  NOTIFY_ACTION_DEL = 2,
  NOTIFY_ACTION_MOD = 3,
}
