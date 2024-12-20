import * as jspb from 'google-protobuf'

import * as yeying_api_common_message_pb from '../../../yeying/api/common/message_pb'; // proto import: "yeying/api/common/message.proto"


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
  getDomain(): string;
  setDomain(value: string): SignRequestBody;

  getCsr(): string;
  setCsr(value: string): SignRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: SignRequestBody): SignRequestBody.AsObject;
  static serializeBinaryToWriter(message: SignRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignRequestBody;
  static deserializeBinaryFromReader(message: SignRequestBody, reader: jspb.BinaryReader): SignRequestBody;
}

export namespace SignRequestBody {
  export type AsObject = {
    domain: string,
    csr: string,
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

export class CertificateMetadata extends jspb.Message {
  getCrt(): string;
  setCrt(value: string): CertificateMetadata;

  getCa(): string;
  setCa(value: string): CertificateMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CertificateMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CertificateMetadata): CertificateMetadata.AsObject;
  static serializeBinaryToWriter(message: CertificateMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CertificateMetadata;
  static deserializeBinaryFromReader(message: CertificateMetadata, reader: jspb.BinaryReader): CertificateMetadata;
}

export namespace CertificateMetadata {
  export type AsObject = {
    crt: string,
    ca: string,
  }
}

export class SignResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): SignResponseBody;
  hasStatus(): boolean;
  clearStatus(): SignResponseBody;

  getCertificate(): CertificateMetadata | undefined;
  setCertificate(value?: CertificateMetadata): SignResponseBody;
  hasCertificate(): boolean;
  clearCertificate(): SignResponseBody;

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
    certificate?: CertificateMetadata.AsObject,
  }
}

export class GetRequest extends jspb.Message {
  getHeader(): yeying_api_common_message_pb.MessageHeader | undefined;
  setHeader(value?: yeying_api_common_message_pb.MessageHeader): GetRequest;
  hasHeader(): boolean;
  clearHeader(): GetRequest;

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
  }
}

export class GetResponseBody extends jspb.Message {
  getStatus(): yeying_api_common_message_pb.ResponseStatus | undefined;
  setStatus(value?: yeying_api_common_message_pb.ResponseStatus): GetResponseBody;
  hasStatus(): boolean;
  clearStatus(): GetResponseBody;

  getCertificate(): CertificateMetadata | undefined;
  setCertificate(value?: CertificateMetadata): GetResponseBody;
  hasCertificate(): boolean;
  clearCertificate(): GetResponseBody;

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
    certificate?: CertificateMetadata.AsObject,
  }
}

