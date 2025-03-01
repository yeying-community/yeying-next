// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file yeying/api/apps/zuoyepigai/task.proto (package yeying.api.apps.zuoyepigai, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { MessageHeader, ResponseStatus } from "../../common/message_pb";
import { file_yeying_api_common_message } from "../../common/message_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file yeying/api/apps/zuoyepigai/task.proto.
 */
export const file_yeying_api_apps_zuoyepigai_task: GenFile = /*@__PURE__*/
  fileDesc("CiV5ZXlpbmcvYXBpL2FwcHMvenVveWVwaWdhaS90YXNrLnByb3RvEhp5ZXlpbmcuYXBpLmFwcHMuenVveWVwaWdhaSKUAQoIVGFza01ldGESCwoDdWlkGAEgASgJEgwKBG5hbWUYAiABKAkSEwoLZGVzY3JpcHRpb24YAyABKAkSDgoGdGFnVWlkGAQgASgJEg8KB3VzZXJVaWQYBSABKAkSEQoJY3JlYXRlZEF0GAYgASgDEhEKCXVwZGF0ZWRBdBgHIAEoAxIRCglpc0RlbGV0ZWQYCCABKAgigAEKDkFkZFRhc2tSZXF1ZXN0EjAKBmhlYWRlchgBIAEoCzIgLnlleWluZy5hcGkuY29tbW9uLk1lc3NhZ2VIZWFkZXISPAoEYm9keRgCIAEoCzIuLnlleWluZy5hcGkuYXBwcy56dW95ZXBpZ2FpLkFkZFRhc2tSZXF1ZXN0Qm9keSJIChJBZGRUYXNrUmVxdWVzdEJvZHkSMgoEbWV0YRgBIAEoCzIkLnlleWluZy5hcGkuYXBwcy56dW95ZXBpZ2FpLlRhc2tNZXRhIlAKD0FkZFRhc2tSZXNwb25zZRI9CgRib2R5GAEgASgLMi8ueWV5aW5nLmFwaS5hcHBzLnp1b3llcGlnYWkuQWRkVGFza1Jlc3BvbnNlQm9keSJ8ChNBZGRUYXNrUmVzcG9uc2VCb2R5EjEKBnN0YXR1cxgBIAEoCzIhLnlleWluZy5hcGkuY29tbW9uLlJlc3BvbnNlU3RhdHVzEjIKBG1ldGEYAiABKAsyJC55ZXlpbmcuYXBpLmFwcHMuenVveWVwaWdhaS5UYXNrTWV0YSKGAQoRRGV0YWlsVGFza1JlcXVlc3QSMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchI/CgRib2R5GAIgASgLMjEueWV5aW5nLmFwaS5hcHBzLnp1b3llcGlnYWkuRGV0YWlsVGFza1JlcXVlc3RCb2R5IiQKFURldGFpbFRhc2tSZXF1ZXN0Qm9keRILCgN1aWQYASABKAkiVgoSRGV0YWlsVGFza1Jlc3BvbnNlEkAKBGJvZHkYASABKAsyMi55ZXlpbmcuYXBpLmFwcHMuenVveWVwaWdhaS5EZXRhaWxUYXNrUmVzcG9uc2VCb2R5In8KFkRldGFpbFRhc2tSZXNwb25zZUJvZHkSMQoGc3RhdHVzGAEgASgLMiEueWV5aW5nLmFwaS5jb21tb24uUmVzcG9uc2VTdGF0dXMSMgoEbWV0YRgCIAEoCzIkLnlleWluZy5hcGkuYXBwcy56dW95ZXBpZ2FpLlRhc2tNZXRhIoIBCg9MaXN0VGFza1JlcXVlc3QSMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchI9CgRib2R5GAIgASgLMi8ueWV5aW5nLmFwaS5hcHBzLnp1b3llcGlnYWkuTGlzdFRhc2tSZXF1ZXN0Qm9keSImChNMaXN0VGFza1JlcXVlc3RCb2R5Eg8KB3VzZXJVaWQYASABKAkiUgoQTGlzdFRhc2tSZXNwb25zZRI+CgRib2R5GAEgASgLMjAueWV5aW5nLmFwaS5hcHBzLnp1b3llcGlnYWkuTGlzdFRhc2tSZXNwb25zZUJvZHkifQoUTGlzdFRhc2tSZXNwb25zZUJvZHkSMQoGc3RhdHVzGAEgASgLMiEueWV5aW5nLmFwaS5jb21tb24uUmVzcG9uc2VTdGF0dXMSMgoEbGlzdBgCIAMoCzIkLnlleWluZy5hcGkuYXBwcy56dW95ZXBpZ2FpLlRhc2tNZXRhIoYBChFVcGRhdGVUYXNrUmVxdWVzdBIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEj8KBGJvZHkYAiABKAsyMS55ZXlpbmcuYXBpLmFwcHMuenVveWVwaWdhaS5VcGRhdGVUYXNrUmVxdWVzdEJvZHkiSwoVVXBkYXRlVGFza1JlcXVlc3RCb2R5EjIKBG1ldGEYASABKAsyJC55ZXlpbmcuYXBpLmFwcHMuenVveWVwaWdhaS5UYXNrTWV0YSJWChJVcGRhdGVUYXNrUmVzcG9uc2USQAoEYm9keRgBIAEoCzIyLnlleWluZy5hcGkuYXBwcy56dW95ZXBpZ2FpLlVwZGF0ZVRhc2tSZXNwb25zZUJvZHkifwoWVXBkYXRlVGFza1Jlc3BvbnNlQm9keRIxCgZzdGF0dXMYASABKAsyIS55ZXlpbmcuYXBpLmNvbW1vbi5SZXNwb25zZVN0YXR1cxIyCgRtZXRhGAIgASgLMiQueWV5aW5nLmFwaS5hcHBzLnp1b3llcGlnYWkuVGFza01ldGEihgEKEURlbGV0ZVRhc2tSZXF1ZXN0EjAKBmhlYWRlchgBIAEoCzIgLnlleWluZy5hcGkuY29tbW9uLk1lc3NhZ2VIZWFkZXISPwoEYm9keRgCIAEoCzIxLnlleWluZy5hcGkuYXBwcy56dW95ZXBpZ2FpLkRlbGV0ZVRhc2tSZXF1ZXN0Qm9keSIkChVEZWxldGVUYXNrUmVxdWVzdEJvZHkSCwoDdWlkGAEgASgJIlYKEkRlbGV0ZVRhc2tSZXNwb25zZRJACgRib2R5GAEgASgLMjIueWV5aW5nLmFwaS5hcHBzLnp1b3llcGlnYWkuRGVsZXRlVGFza1Jlc3BvbnNlQm9keSJ/ChZEZWxldGVUYXNrUmVzcG9uc2VCb2R5EjEKBnN0YXR1cxgBIAEoCzIhLnlleWluZy5hcGkuY29tbW9uLlJlc3BvbnNlU3RhdHVzEjIKBG1ldGEYAiABKAsyJC55ZXlpbmcuYXBpLmFwcHMuenVveWVwaWdhaS5UYXNrTWV0YTKOBAoEVGFzaxJgCgNBZGQSKi55ZXlpbmcuYXBpLmFwcHMuenVveWVwaWdhaS5BZGRUYXNrUmVxdWVzdBorLnlleWluZy5hcGkuYXBwcy56dW95ZXBpZ2FpLkFkZFRhc2tSZXNwb25zZSIAEmkKBkRldGFpbBItLnlleWluZy5hcGkuYXBwcy56dW95ZXBpZ2FpLkRldGFpbFRhc2tSZXF1ZXN0Gi4ueWV5aW5nLmFwaS5hcHBzLnp1b3llcGlnYWkuRGV0YWlsVGFza1Jlc3BvbnNlIgASYwoETGlzdBIrLnlleWluZy5hcGkuYXBwcy56dW95ZXBpZ2FpLkxpc3RUYXNrUmVxdWVzdBosLnlleWluZy5hcGkuYXBwcy56dW95ZXBpZ2FpLkxpc3RUYXNrUmVzcG9uc2UiABJpCgZVcGRhdGUSLS55ZXlpbmcuYXBpLmFwcHMuenVveWVwaWdhaS5VcGRhdGVUYXNrUmVxdWVzdBouLnlleWluZy5hcGkuYXBwcy56dW95ZXBpZ2FpLlVwZGF0ZVRhc2tSZXNwb25zZSIAEmkKBkRlbGV0ZRItLnlleWluZy5hcGkuYXBwcy56dW95ZXBpZ2FpLkRlbGV0ZVRhc2tSZXF1ZXN0Gi4ueWV5aW5nLmFwaS5hcHBzLnp1b3llcGlnYWkuRGVsZXRlVGFza1Jlc3BvbnNlIgBCHFoaeWV5aW5nL2FwaS9hcHBzL3p1b3llcGlnYWliBnByb3RvMw", [file_yeying_api_common_message]);

/**
 * @generated from message yeying.api.apps.zuoyepigai.TaskMeta
 */
export type TaskMeta = Message<"yeying.api.apps.zuoyepigai.TaskMeta"> & {
  /**
   * ID 唯一标识
   *
   * @generated from field: string uid = 1;
   */
  uid: string;

  /**
   * 任务名称
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * 描述
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * 标签
   *
   * @generated from field: string tagUid = 4;
   */
  tagUid: string;

  /**
   * 用户uId
   *
   * @generated from field: string userUid = 5;
   */
  userUid: string;

  /**
   * 创建时间
   *
   * @generated from field: int64 createdAt = 6;
   */
  createdAt: bigint;

  /**
   * 修改时间
   *
   * @generated from field: int64 updatedAt = 7;
   */
  updatedAt: bigint;

  /**
   * 是否删除
   *
   * @generated from field: bool isDeleted = 8;
   */
  isDeleted: boolean;
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.TaskMeta.
 * Use `create(TaskMetaSchema)` to create a new message.
 */
export const TaskMetaSchema: GenMessage<TaskMeta> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 0);

/**
 * Add
 *
 * @generated from message yeying.api.apps.zuoyepigai.AddTaskRequest
 */
export type AddTaskRequest = Message<"yeying.api.apps.zuoyepigai.AddTaskRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.apps.zuoyepigai.AddTaskRequestBody body = 2;
   */
  body?: AddTaskRequestBody;
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.AddTaskRequest.
 * Use `create(AddTaskRequestSchema)` to create a new message.
 */
export const AddTaskRequestSchema: GenMessage<AddTaskRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 1);

/**
 * @generated from message yeying.api.apps.zuoyepigai.AddTaskRequestBody
 */
export type AddTaskRequestBody = Message<"yeying.api.apps.zuoyepigai.AddTaskRequestBody"> & {
  /**
   * @generated from field: yeying.api.apps.zuoyepigai.TaskMeta meta = 1;
   */
  meta?: TaskMeta;
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.AddTaskRequestBody.
 * Use `create(AddTaskRequestBodySchema)` to create a new message.
 */
export const AddTaskRequestBodySchema: GenMessage<AddTaskRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 2);

/**
 * @generated from message yeying.api.apps.zuoyepigai.AddTaskResponse
 */
export type AddTaskResponse = Message<"yeying.api.apps.zuoyepigai.AddTaskResponse"> & {
  /**
   * @generated from field: yeying.api.apps.zuoyepigai.AddTaskResponseBody body = 1;
   */
  body?: AddTaskResponseBody;
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.AddTaskResponse.
 * Use `create(AddTaskResponseSchema)` to create a new message.
 */
export const AddTaskResponseSchema: GenMessage<AddTaskResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 3);

/**
 * @generated from message yeying.api.apps.zuoyepigai.AddTaskResponseBody
 */
export type AddTaskResponseBody = Message<"yeying.api.apps.zuoyepigai.AddTaskResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * @generated from field: yeying.api.apps.zuoyepigai.TaskMeta meta = 2;
   */
  meta?: TaskMeta;
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.AddTaskResponseBody.
 * Use `create(AddTaskResponseBodySchema)` to create a new message.
 */
export const AddTaskResponseBodySchema: GenMessage<AddTaskResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 4);

/**
 * Detail
 *
 * @generated from message yeying.api.apps.zuoyepigai.DetailTaskRequest
 */
export type DetailTaskRequest = Message<"yeying.api.apps.zuoyepigai.DetailTaskRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.apps.zuoyepigai.DetailTaskRequestBody body = 2;
   */
  body?: DetailTaskRequestBody;
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.DetailTaskRequest.
 * Use `create(DetailTaskRequestSchema)` to create a new message.
 */
export const DetailTaskRequestSchema: GenMessage<DetailTaskRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 5);

/**
 * @generated from message yeying.api.apps.zuoyepigai.DetailTaskRequestBody
 */
export type DetailTaskRequestBody = Message<"yeying.api.apps.zuoyepigai.DetailTaskRequestBody"> & {
  /**
   * @generated from field: string uid = 1;
   */
  uid: string;
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.DetailTaskRequestBody.
 * Use `create(DetailTaskRequestBodySchema)` to create a new message.
 */
export const DetailTaskRequestBodySchema: GenMessage<DetailTaskRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 6);

/**
 * @generated from message yeying.api.apps.zuoyepigai.DetailTaskResponse
 */
export type DetailTaskResponse = Message<"yeying.api.apps.zuoyepigai.DetailTaskResponse"> & {
  /**
   * @generated from field: yeying.api.apps.zuoyepigai.DetailTaskResponseBody body = 1;
   */
  body?: DetailTaskResponseBody;
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.DetailTaskResponse.
 * Use `create(DetailTaskResponseSchema)` to create a new message.
 */
export const DetailTaskResponseSchema: GenMessage<DetailTaskResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 7);

/**
 * @generated from message yeying.api.apps.zuoyepigai.DetailTaskResponseBody
 */
export type DetailTaskResponseBody = Message<"yeying.api.apps.zuoyepigai.DetailTaskResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * @generated from field: yeying.api.apps.zuoyepigai.TaskMeta meta = 2;
   */
  meta?: TaskMeta;
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.DetailTaskResponseBody.
 * Use `create(DetailTaskResponseBodySchema)` to create a new message.
 */
export const DetailTaskResponseBodySchema: GenMessage<DetailTaskResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 8);

/**
 * List
 *
 * @generated from message yeying.api.apps.zuoyepigai.ListTaskRequest
 */
export type ListTaskRequest = Message<"yeying.api.apps.zuoyepigai.ListTaskRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.apps.zuoyepigai.ListTaskRequestBody body = 2;
   */
  body?: ListTaskRequestBody;
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.ListTaskRequest.
 * Use `create(ListTaskRequestSchema)` to create a new message.
 */
export const ListTaskRequestSchema: GenMessage<ListTaskRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 9);

/**
 * @generated from message yeying.api.apps.zuoyepigai.ListTaskRequestBody
 */
export type ListTaskRequestBody = Message<"yeying.api.apps.zuoyepigai.ListTaskRequestBody"> & {
  /**
   * @generated from field: string userUid = 1;
   */
  userUid: string;
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.ListTaskRequestBody.
 * Use `create(ListTaskRequestBodySchema)` to create a new message.
 */
export const ListTaskRequestBodySchema: GenMessage<ListTaskRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 10);

/**
 * @generated from message yeying.api.apps.zuoyepigai.ListTaskResponse
 */
export type ListTaskResponse = Message<"yeying.api.apps.zuoyepigai.ListTaskResponse"> & {
  /**
   * @generated from field: yeying.api.apps.zuoyepigai.ListTaskResponseBody body = 1;
   */
  body?: ListTaskResponseBody;
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.ListTaskResponse.
 * Use `create(ListTaskResponseSchema)` to create a new message.
 */
export const ListTaskResponseSchema: GenMessage<ListTaskResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 11);

/**
 * @generated from message yeying.api.apps.zuoyepigai.ListTaskResponseBody
 */
export type ListTaskResponseBody = Message<"yeying.api.apps.zuoyepigai.ListTaskResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * repeated 表示 List
   *
   * @generated from field: repeated yeying.api.apps.zuoyepigai.TaskMeta list = 2;
   */
  list: TaskMeta[];
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.ListTaskResponseBody.
 * Use `create(ListTaskResponseBodySchema)` to create a new message.
 */
export const ListTaskResponseBodySchema: GenMessage<ListTaskResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 12);

/**
 * Update
 *
 * @generated from message yeying.api.apps.zuoyepigai.UpdateTaskRequest
 */
export type UpdateTaskRequest = Message<"yeying.api.apps.zuoyepigai.UpdateTaskRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.apps.zuoyepigai.UpdateTaskRequestBody body = 2;
   */
  body?: UpdateTaskRequestBody;
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.UpdateTaskRequest.
 * Use `create(UpdateTaskRequestSchema)` to create a new message.
 */
export const UpdateTaskRequestSchema: GenMessage<UpdateTaskRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 13);

/**
 * @generated from message yeying.api.apps.zuoyepigai.UpdateTaskRequestBody
 */
export type UpdateTaskRequestBody = Message<"yeying.api.apps.zuoyepigai.UpdateTaskRequestBody"> & {
  /**
   * @generated from field: yeying.api.apps.zuoyepigai.TaskMeta meta = 1;
   */
  meta?: TaskMeta;
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.UpdateTaskRequestBody.
 * Use `create(UpdateTaskRequestBodySchema)` to create a new message.
 */
export const UpdateTaskRequestBodySchema: GenMessage<UpdateTaskRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 14);

/**
 * @generated from message yeying.api.apps.zuoyepigai.UpdateTaskResponse
 */
export type UpdateTaskResponse = Message<"yeying.api.apps.zuoyepigai.UpdateTaskResponse"> & {
  /**
   * @generated from field: yeying.api.apps.zuoyepigai.UpdateTaskResponseBody body = 1;
   */
  body?: UpdateTaskResponseBody;
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.UpdateTaskResponse.
 * Use `create(UpdateTaskResponseSchema)` to create a new message.
 */
export const UpdateTaskResponseSchema: GenMessage<UpdateTaskResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 15);

/**
 * @generated from message yeying.api.apps.zuoyepigai.UpdateTaskResponseBody
 */
export type UpdateTaskResponseBody = Message<"yeying.api.apps.zuoyepigai.UpdateTaskResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * @generated from field: yeying.api.apps.zuoyepigai.TaskMeta meta = 2;
   */
  meta?: TaskMeta;
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.UpdateTaskResponseBody.
 * Use `create(UpdateTaskResponseBodySchema)` to create a new message.
 */
export const UpdateTaskResponseBodySchema: GenMessage<UpdateTaskResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 16);

/**
 * Delete
 *
 * @generated from message yeying.api.apps.zuoyepigai.DeleteTaskRequest
 */
export type DeleteTaskRequest = Message<"yeying.api.apps.zuoyepigai.DeleteTaskRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.apps.zuoyepigai.DeleteTaskRequestBody body = 2;
   */
  body?: DeleteTaskRequestBody;
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.DeleteTaskRequest.
 * Use `create(DeleteTaskRequestSchema)` to create a new message.
 */
export const DeleteTaskRequestSchema: GenMessage<DeleteTaskRequest> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 17);

/**
 * @generated from message yeying.api.apps.zuoyepigai.DeleteTaskRequestBody
 */
export type DeleteTaskRequestBody = Message<"yeying.api.apps.zuoyepigai.DeleteTaskRequestBody"> & {
  /**
   * @generated from field: string uid = 1;
   */
  uid: string;
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.DeleteTaskRequestBody.
 * Use `create(DeleteTaskRequestBodySchema)` to create a new message.
 */
export const DeleteTaskRequestBodySchema: GenMessage<DeleteTaskRequestBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 18);

/**
 * @generated from message yeying.api.apps.zuoyepigai.DeleteTaskResponse
 */
export type DeleteTaskResponse = Message<"yeying.api.apps.zuoyepigai.DeleteTaskResponse"> & {
  /**
   * @generated from field: yeying.api.apps.zuoyepigai.DeleteTaskResponseBody body = 1;
   */
  body?: DeleteTaskResponseBody;
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.DeleteTaskResponse.
 * Use `create(DeleteTaskResponseSchema)` to create a new message.
 */
export const DeleteTaskResponseSchema: GenMessage<DeleteTaskResponse> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 19);

/**
 * @generated from message yeying.api.apps.zuoyepigai.DeleteTaskResponseBody
 */
export type DeleteTaskResponseBody = Message<"yeying.api.apps.zuoyepigai.DeleteTaskResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * @generated from field: yeying.api.apps.zuoyepigai.TaskMeta meta = 2;
   */
  meta?: TaskMeta;
};

/**
 * Describes the message yeying.api.apps.zuoyepigai.DeleteTaskResponseBody.
 * Use `create(DeleteTaskResponseBodySchema)` to create a new message.
 */
export const DeleteTaskResponseBodySchema: GenMessage<DeleteTaskResponseBody> = /*@__PURE__*/
  messageDesc(file_yeying_api_apps_zuoyepigai_task, 20);

/**
 * *
 * 老师教学任务管理
 * 对应的 DB 表：zuoyepigai.teaching_tasks
 *
 * @generated from service yeying.api.apps.zuoyepigai.Task
 */
export const Task: GenService<{
  /**
   * 创建任务：由老师负创建教学任务
   *
   * @generated from rpc yeying.api.apps.zuoyepigai.Task.Add
   */
  add: {
    methodKind: "unary";
    input: typeof AddTaskRequestSchema;
    output: typeof AddTaskResponseSchema;
  },
  /**
   * 任务详情
   *
   * @generated from rpc yeying.api.apps.zuoyepigai.Task.Detail
   */
  detail: {
    methodKind: "unary";
    input: typeof DetailTaskRequestSchema;
    output: typeof DetailTaskResponseSchema;
  },
  /**
   * 任务列表
   *
   * @generated from rpc yeying.api.apps.zuoyepigai.Task.List
   */
  list: {
    methodKind: "unary";
    input: typeof ListTaskRequestSchema;
    output: typeof ListTaskResponseSchema;
  },
  /**
   * 更新任务
   *
   * @generated from rpc yeying.api.apps.zuoyepigai.Task.Update
   */
  update: {
    methodKind: "unary";
    input: typeof UpdateTaskRequestSchema;
    output: typeof UpdateTaskResponseSchema;
  },
  /**
   * 删除任务
   *
   * @generated from rpc yeying.api.apps.zuoyepigai.Task.Delete
   */
  delete: {
    methodKind: "unary";
    input: typeof DeleteTaskRequestSchema;
    output: typeof DeleteTaskResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_yeying_api_apps_zuoyepigai_task, 0);

