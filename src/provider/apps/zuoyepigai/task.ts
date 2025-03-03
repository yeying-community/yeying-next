import { Authenticate } from '../../common/authenticate'
import { MessageHeader } from '../../../yeying/api/common/message_pb'
import { ProviderOption } from '../../common/model'
import { Task, AddTaskRequestBodySchema, AddTaskRequestSchema, AddTaskResponseBody, AddTaskResponseBodySchema,
    DetailTaskRequestSchema, DetailTaskRequestBodySchema, DetailTaskResponseBodySchema, DetailTaskResponseBody,
    ListTaskRequestSchema, ListTaskRequestBodySchema, ListTaskResponseBodySchema, ListTaskResponseBody,
    UpdateTaskRequestSchema, UpdateTaskRequestBodySchema, UpdateTaskResponseBodySchema, UpdateTaskResponseBody,
    DeleteTaskRequestSchema, DeleteTaskRequestBodySchema, DeleteTaskResponseBodySchema, DeleteTaskResponseBody,
    TaskMeta
 } from '../../../yeying/api/apps/zuoyepigai/task_pb'
import { Client, createClient } from '@connectrpc/connect'
import { createGrpcWebTransport } from '@connectrpc/connect-web'
import { create, toBinary } from '@bufbuild/protobuf'

/**
 * 学生档案
 */
export class TaskProvider {
    private authenticate: Authenticate
    private client: Client<typeof Task>

    /**
     * 构造函数
     * @param option - 提供者选项，如代理设置
     * @example
     * ```ts
     * const providerOption = { proxy: <proxy url>, blockAddress: <your block address> };
     * const taskProvider = new TaskProvider(providerOption);
     * ```
     */
    constructor(option: ProviderOption) {
        this.authenticate = new Authenticate(option.blockAddress)
        this.client = createClient(
            Task,
            createGrpcWebTransport({
                baseUrl: option.proxy,
                useBinaryFormat: true
            })
        )
    }

    /**
     * 教学任务列表
     * @param userUid 
     * @returns 
     */
    list(userUid: string) {
        return new Promise<ListTaskResponseBody>(async (resolve, reject) => {
            const body = create(ListTaskRequestBodySchema, {
                userUid: userUid
            })

            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(toBinary(ListTaskRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for list task', err)
                return reject(err)
            }

            const request = create(ListTaskRequestSchema, { header: header, body: body })
            console.log("获取 request")
            console.log(request)
            try {
                const res = await this.client.list(request)
                await this.authenticate.doResponse(res, ListTaskResponseBodySchema)
                resolve(res.body as ListTaskResponseBody)
            } catch (err) {
                console.error('Fail to get task list', err)
                return reject(err)
            }
        })
    }

    /**
     * 教学任务详情
     * @param uid 
     * @returns 
     */
    detail(uid: string) {
        return new Promise<DetailTaskResponseBody>(async (resolve, reject) => {
            const body = create(DetailTaskRequestBodySchema, {
                uid: uid
            })

            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(toBinary(DetailTaskRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for detail task', err)
                return reject(err)
            }

            const request = create(DetailTaskRequestSchema, { header: header, body: body })
            console.log("获取 request")
            console.log(request)
            try {
                const res = await this.client.detail(request)
                await this.authenticate.doResponse(res, DetailTaskResponseBodySchema)
                resolve(res.body as DetailTaskResponseBody)
            } catch (err) {
                console.error('Fail to get task detail', err)
                return reject(err)
            }
        })
    }

    /**
     * 添加
     * @param uid 
     * @returns 
     */
    add(meta: TaskMeta) {
        return new Promise<AddTaskResponseBody>(async (resolve, reject) => {
            
            const body = create(AddTaskRequestBodySchema, {
                meta: meta
            })

            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(toBinary(AddTaskRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for task Add', err)
                return reject(err)
            }

            const request = create(AddTaskRequestSchema, { header: header, body: body })
            console.log("获取 request")
            console.log(request)
            try {
                const res = await this.client.add(request)
                await this.authenticate.doResponse(res, AddTaskResponseBodySchema)
                resolve(res.body as AddTaskResponseBody)
            } catch (err) {
                console.error('Fail to get task Add', err)
                return reject(err)
            }
        })
    }

    /**
     * 教学任务更新
     * @param uid 
     * @returns 
     */
    update(meta: TaskMeta) {
        return new Promise<UpdateTaskResponseBody>(async (resolve, reject) => {
            const body = create(UpdateTaskRequestBodySchema, {
                meta: meta
            })

            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(toBinary(UpdateTaskRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for Update task', err)
                return reject(err)
            }

            const request = create(UpdateTaskRequestSchema, { header: header, body: body })
            console.log("获取 request")
            console.log(request)
            try {
                const res = await this.client.update(request)
                await this.authenticate.doResponse(res, UpdateTaskResponseBodySchema)
                resolve(res.body as UpdateTaskResponseBody)
            } catch (err) {
                console.error('Fail to get task Update', err)
                return reject(err)
            }
        })
    }

    /**
     * 教学任务删除
     * @param uid 
     * @returns 
     */
    delete(uid: string) {
        return new Promise<DeleteTaskResponseBody>(async (resolve, reject) => {
            const body = create(DeleteTaskRequestBodySchema, {
                uid: uid
            })

            let header: MessageHeader
            try {
                // 创建消息头
                header = await this.authenticate.createHeader(toBinary(DeleteTaskRequestBodySchema, body))
            } catch (err) {
                console.error('Fail to create header for Delete task', err)
                return reject(err)
            }

            const request = create(DeleteTaskRequestSchema, { header: header, body: body })
            console.log("获取 request")
            console.log(request)
            try {
                const res = await this.client.delete(request)
                await this.authenticate.doResponse(res, DeleteTaskResponseBodySchema)
                resolve(res.body as DeleteTaskResponseBody)
            } catch (err) {
                console.error('Fail to get task Delete', err)
                return reject(err)
            }
        })
    }
}