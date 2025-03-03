import {getBlockAddress, getProviderProxy} from "../../common/common";
import {ProviderOption} from "../../../../src/provider/common/model";
import {ServiceCodeEnum} from "../../../../src/yeying/api/common/code_pb";
import {TaskProvider} from "../../../../src/provider/apps/zuoyepigai/task";
import {isOk} from "../../../../src/common/status";
import { create } from '@bufbuild/protobuf'
import { 
    TaskMetaSchema
 } from '../../../../src/yeying/api/apps/zuoyepigai/task_pb'
import { NIL, v4 as uuidv4 } from 'uuid';

const provider: ProviderOption = {
    proxy: getProviderProxy(ServiceCodeEnum.SERVICE_CODE_AI),
    blockAddress: getBlockAddress(),
}

// @ts-ignore
describe('Task', () => {
    // @ts-ignore
    it('detail', async () => {
        console.log(provider.proxy)
        const taskProvider = new TaskProvider(provider)
        const body = await taskProvider.detail("9b2fe8b7-c8d3-49b7-b0a6-542a9b7b99f8")
        // @ts-ignore
        console.log(`Success to detail task body=${body.meta}`)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })
    // @ts-ignore
    it('list', async () => {
        console.log(provider.proxy)
        const taskProvider = new TaskProvider(provider)
        const body = await taskProvider.list("19313383-c311-45ed-bdfb-657b9f992606")
        // @ts-ignore
        console.log(`Success to list task body=${body.status}`)
        console.log(`Success to list task body=${body.list}`)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })
    // @ts-ignore
    it('add', async () => {
        console.log(provider.proxy)
        const taskProvider = new TaskProvider(provider)
        const taskMeta = create(TaskMetaSchema, {
            uid: uuidv4(),
            name: "task_" + Date.now(),
            description: "test data",
            tagUid: uuidv4(),
            userUid: uuidv4(),
        })
        console.log(taskMeta)
        const body = await taskProvider.add(taskMeta)
        // @ts-ignore
        console.log(`Success to add task body=${body.status}`)
        console.log(`Success to add task body=${body.meta}`)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })

    // @ts-ignore
    it('update', async () => {
        console.log(provider.proxy)
        const taskProvider = new TaskProvider(provider)
        const taskMeta = create(TaskMetaSchema, {
            uid: "9b2fe8b7-c8d3-49b7-b0a6-542a9b7b99f8",
            name: "task_" + Date.now(),
            description: "test data",
            tagUid: uuidv4(),
            userUid: uuidv4(),
            isDeleted: true
        })
        console.log(taskMeta)
        const body = await taskProvider.update(taskMeta)
        // @ts-ignore
        console.log(`Success to update task body=${body.status}`)
        console.log(`Success to update task body=${body.meta}`)
        // @ts-ignore
        assert.isTrue(isOk(body.status))
    })
})