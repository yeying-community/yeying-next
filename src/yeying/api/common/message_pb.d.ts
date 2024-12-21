import * as jspb from 'google-protobuf'

import * as yeying_api_common_code_pb from '../../../yeying/api/common/code_pb'; // proto import: "yeying/api/common/code.proto"


export class MessageHeader extends jspb.Message {
  getDid(): string;
  setDid(value: string): MessageHeader;

  getAuthtype(): yeying_api_common_code_pb.AuthenticateTypeEnum;
  setAuthtype(value: yeying_api_common_code_pb.AuthenticateTypeEnum): MessageHeader;

  getAuthcontent(): string;
  setAuthcontent(value: string): MessageHeader;

  getNonce(): string;
  setNonce(value: string): MessageHeader;

  getTimestamp(): string;
  setTimestamp(value: string): MessageHeader;

  getVersion(): number;
  setVersion(value: number): MessageHeader;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageHeader.AsObject;
  static toObject(includeInstance: boolean, msg: MessageHeader): MessageHeader.AsObject;
  static serializeBinaryToWriter(message: MessageHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageHeader;
  static deserializeBinaryFromReader(message: MessageHeader, reader: jspb.BinaryReader): MessageHeader;
}

export namespace MessageHeader {
  export type AsObject = {
    did: string,
    authtype: yeying_api_common_code_pb.AuthenticateTypeEnum,
    authcontent: string,
    nonce: string,
    timestamp: string,
    version: number,
  }
}

export class ResponseStatus extends jspb.Message {
  getCode(): yeying_api_common_code_pb.ResponseCodeEnum;
  setCode(value: yeying_api_common_code_pb.ResponseCodeEnum): ResponseStatus;

  getMessage(): string;
  setMessage(value: string): ResponseStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseStatus): ResponseStatus.AsObject;
  static serializeBinaryToWriter(message: ResponseStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseStatus;
  static deserializeBinaryFromReader(message: ResponseStatus, reader: jspb.BinaryReader): ResponseStatus;
}

export namespace ResponseStatus {
  export type AsObject = {
    code: yeying_api_common_code_pb.ResponseCodeEnum,
    message: string,
  }
}

export class ResponsePage extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): ResponsePage;

  getPage(): number;
  setPage(value: number): ResponsePage;

  getPagesize(): number;
  setPagesize(value: number): ResponsePage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponsePage.AsObject;
  static toObject(includeInstance: boolean, msg: ResponsePage): ResponsePage.AsObject;
  static serializeBinaryToWriter(message: ResponsePage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponsePage;
  static deserializeBinaryFromReader(message: ResponsePage, reader: jspb.BinaryReader): ResponsePage;
}

export namespace ResponsePage {
  export type AsObject = {
    total: number,
    page: number,
    pagesize: number,
  }
}

export class RequestPage extends jspb.Message {
  getPage(): number;
  setPage(value: number): RequestPage;

  getPagesize(): number;
  setPagesize(value: number): RequestPage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestPage.AsObject;
  static toObject(includeInstance: boolean, msg: RequestPage): RequestPage.AsObject;
  static serializeBinaryToWriter(message: RequestPage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestPage;
  static deserializeBinaryFromReader(message: RequestPage, reader: jspb.BinaryReader): RequestPage;
}

export namespace RequestPage {
  export type AsObject = {
    page: number,
    pagesize: number,
  }
}

export class IdentityMetadata extends jspb.Message {
  getParent(): string;
  setParent(value: string): IdentityMetadata;

  getNetwork(): yeying_api_common_code_pb.NetworkTypeEnum;
  setNetwork(value: yeying_api_common_code_pb.NetworkTypeEnum): IdentityMetadata;

  getDid(): string;
  setDid(value: string): IdentityMetadata;

  getVersion(): number;
  setVersion(value: number): IdentityMetadata;

  getAddress(): string;
  setAddress(value: string): IdentityMetadata;

  getName(): string;
  setName(value: string): IdentityMetadata;

  getDescription(): string;
  setDescription(value: string): IdentityMetadata;

  getCode(): yeying_api_common_code_pb.IdentityCodeEnum;
  setCode(value: yeying_api_common_code_pb.IdentityCodeEnum): IdentityMetadata;

  getAvatar(): string;
  setAvatar(value: string): IdentityMetadata;

  getCreated(): string;
  setCreated(value: string): IdentityMetadata;

  getCheckpoint(): string;
  setCheckpoint(value: string): IdentityMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityMetadata): IdentityMetadata.AsObject;
  static serializeBinaryToWriter(message: IdentityMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityMetadata;
  static deserializeBinaryFromReader(message: IdentityMetadata, reader: jspb.BinaryReader): IdentityMetadata;
}

export namespace IdentityMetadata {
  export type AsObject = {
    parent: string,
    network: yeying_api_common_code_pb.NetworkTypeEnum,
    did: string,
    version: number,
    address: string,
    name: string,
    description: string,
    code: yeying_api_common_code_pb.IdentityCodeEnum,
    avatar: string,
    created: string,
    checkpoint: string,
  }
}

export class BlockAddress extends jspb.Message {
  getIdentifier(): string;
  setIdentifier(value: string): BlockAddress;

  getAddress(): string;
  setAddress(value: string): BlockAddress;

  getPrivatekey(): string;
  setPrivatekey(value: string): BlockAddress;

  getPublickey(): string;
  setPublickey(value: string): BlockAddress;

  getMnemonic(): Mnemonic | undefined;
  setMnemonic(value?: Mnemonic): BlockAddress;
  hasMnemonic(): boolean;
  clearMnemonic(): BlockAddress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockAddress.AsObject;
  static toObject(includeInstance: boolean, msg: BlockAddress): BlockAddress.AsObject;
  static serializeBinaryToWriter(message: BlockAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockAddress;
  static deserializeBinaryFromReader(message: BlockAddress, reader: jspb.BinaryReader): BlockAddress;
}

export namespace BlockAddress {
  export type AsObject = {
    identifier: string,
    address: string,
    privatekey: string,
    publickey: string,
    mnemonic?: Mnemonic.AsObject,
  }
}

export class Mnemonic extends jspb.Message {
  getPhrase(): string;
  setPhrase(value: string): Mnemonic;

  getPath(): string;
  setPath(value: string): Mnemonic;

  getLocale(): string;
  setLocale(value: string): Mnemonic;

  getPassword(): string;
  setPassword(value: string): Mnemonic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mnemonic.AsObject;
  static toObject(includeInstance: boolean, msg: Mnemonic): Mnemonic.AsObject;
  static serializeBinaryToWriter(message: Mnemonic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mnemonic;
  static deserializeBinaryFromReader(message: Mnemonic, reader: jspb.BinaryReader): Mnemonic;
}

export namespace Mnemonic {
  export type AsObject = {
    phrase: string,
    path: string,
    locale: string,
    password: string,
  }
}

export class IdentityServiceExtend extends jspb.Message {
  getCode(): yeying_api_common_code_pb.ServiceCodeEnum;
  setCode(value: yeying_api_common_code_pb.ServiceCodeEnum): IdentityServiceExtend;

  getApis(): string;
  setApis(value: string): IdentityServiceExtend;

  getProxy(): string;
  setProxy(value: string): IdentityServiceExtend;

  getGrpc(): string;
  setGrpc(value: string): IdentityServiceExtend;

  getSecurityconfig(): SecurityConfig | undefined;
  setSecurityconfig(value?: SecurityConfig): IdentityServiceExtend;
  hasSecurityconfig(): boolean;
  clearSecurityconfig(): IdentityServiceExtend;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityServiceExtend.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityServiceExtend): IdentityServiceExtend.AsObject;
  static serializeBinaryToWriter(message: IdentityServiceExtend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityServiceExtend;
  static deserializeBinaryFromReader(message: IdentityServiceExtend, reader: jspb.BinaryReader): IdentityServiceExtend;
}

export namespace IdentityServiceExtend {
  export type AsObject = {
    code: yeying_api_common_code_pb.ServiceCodeEnum,
    apis: string,
    proxy: string,
    grpc: string,
    securityconfig?: SecurityConfig.AsObject,
  }
}

export class IdentityOrganizationExtend extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): IdentityOrganizationExtend;

  getCode(): string;
  setCode(value: string): IdentityOrganizationExtend;

  getSecurityconfig(): SecurityConfig | undefined;
  setSecurityconfig(value?: SecurityConfig): IdentityOrganizationExtend;
  hasSecurityconfig(): boolean;
  clearSecurityconfig(): IdentityOrganizationExtend;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityOrganizationExtend.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityOrganizationExtend): IdentityOrganizationExtend.AsObject;
  static serializeBinaryToWriter(message: IdentityOrganizationExtend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityOrganizationExtend;
  static deserializeBinaryFromReader(message: IdentityOrganizationExtend, reader: jspb.BinaryReader): IdentityOrganizationExtend;
}

export namespace IdentityOrganizationExtend {
  export type AsObject = {
    address: string,
    code: string,
    securityconfig?: SecurityConfig.AsObject,
  }
}

export class IdentityPersonalExtend extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): IdentityPersonalExtend;

  getTelephone(): string;
  setTelephone(value: string): IdentityPersonalExtend;

  getSecurityconfig(): SecurityConfig | undefined;
  setSecurityconfig(value?: SecurityConfig): IdentityPersonalExtend;
  hasSecurityconfig(): boolean;
  clearSecurityconfig(): IdentityPersonalExtend;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityPersonalExtend.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityPersonalExtend): IdentityPersonalExtend.AsObject;
  static serializeBinaryToWriter(message: IdentityPersonalExtend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityPersonalExtend;
  static deserializeBinaryFromReader(message: IdentityPersonalExtend, reader: jspb.BinaryReader): IdentityPersonalExtend;
}

export namespace IdentityPersonalExtend {
  export type AsObject = {
    email: string,
    telephone: string,
    securityconfig?: SecurityConfig.AsObject,
  }
}

export class IdentityApplicationExtend extends jspb.Message {
  getCode(): yeying_api_common_code_pb.ApplicationCodeEnum;
  setCode(value: yeying_api_common_code_pb.ApplicationCodeEnum): IdentityApplicationExtend;

  getServicecodesList(): Array<yeying_api_common_code_pb.ServiceCodeEnum>;
  setServicecodesList(value: Array<yeying_api_common_code_pb.ServiceCodeEnum>): IdentityApplicationExtend;
  clearServicecodesList(): IdentityApplicationExtend;
  addServicecodes(value: yeying_api_common_code_pb.ServiceCodeEnum, index?: number): IdentityApplicationExtend;

  getLocation(): string;
  setLocation(value: string): IdentityApplicationExtend;

  getHash(): string;
  setHash(value: string): IdentityApplicationExtend;

  getSecurityconfig(): SecurityConfig | undefined;
  setSecurityconfig(value?: SecurityConfig): IdentityApplicationExtend;
  hasSecurityconfig(): boolean;
  clearSecurityconfig(): IdentityApplicationExtend;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityApplicationExtend.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityApplicationExtend): IdentityApplicationExtend.AsObject;
  static serializeBinaryToWriter(message: IdentityApplicationExtend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityApplicationExtend;
  static deserializeBinaryFromReader(message: IdentityApplicationExtend, reader: jspb.BinaryReader): IdentityApplicationExtend;
}

export namespace IdentityApplicationExtend {
  export type AsObject = {
    code: yeying_api_common_code_pb.ApplicationCodeEnum,
    servicecodesList: Array<yeying_api_common_code_pb.ServiceCodeEnum>,
    location: string,
    hash: string,
    securityconfig?: SecurityConfig.AsObject,
  }
}

export class SecurityConfig extends jspb.Message {
  getAlgorithm(): SecurityAlgorithm | undefined;
  setAlgorithm(value?: SecurityAlgorithm): SecurityConfig;
  hasAlgorithm(): boolean;
  clearAlgorithm(): SecurityConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityConfig): SecurityConfig.AsObject;
  static serializeBinaryToWriter(message: SecurityConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityConfig;
  static deserializeBinaryFromReader(message: SecurityConfig, reader: jspb.BinaryReader): SecurityConfig;
}

export namespace SecurityConfig {
  export type AsObject = {
    algorithm?: SecurityAlgorithm.AsObject,
  }
}

export class SecurityAlgorithm extends jspb.Message {
  getType(): yeying_api_common_code_pb.CipherTypeEnum;
  setType(value: yeying_api_common_code_pb.CipherTypeEnum): SecurityAlgorithm;

  getIv(): string;
  setIv(value: string): SecurityAlgorithm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityAlgorithm.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityAlgorithm): SecurityAlgorithm.AsObject;
  static serializeBinaryToWriter(message: SecurityAlgorithm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityAlgorithm;
  static deserializeBinaryFromReader(message: SecurityAlgorithm, reader: jspb.BinaryReader): SecurityAlgorithm;
}

export namespace SecurityAlgorithm {
  export type AsObject = {
    type: yeying_api_common_code_pb.CipherTypeEnum,
    iv: string,
  }
}

