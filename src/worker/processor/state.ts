import {Processor} from "./common";
import {CommandMessage, ProcessMessage} from "../model/common";

export class StateProcessor implements Processor {
    constructor() {
    }

    async config(message: CommandMessage): Promise<ProcessMessage> {
        console.log(`state worker config: ${JSON.stringify(message)}`);
        // 实现实际处理逻辑
        return {id: message.id, processType: "COMPLETE"}
    }

    async start(message: CommandMessage): Promise<ProcessMessage> {
        console.log(`state worker start: ${JSON.stringify(message)}`);
        // 实现实际处理逻辑
        return {id: message.id, processType: "COMPLETE"}
    }

    async abort(message: CommandMessage): Promise<ProcessMessage> {
        console.log(`state worker abort: ${JSON.stringify(message)}`);
        return {id: message.id, processType: "COMPLETE"}
    }

    async pause(message: CommandMessage): Promise<ProcessMessage> {
        console.log(`state worker pause: ${JSON.stringify(message)}`);
        return {id: message.id, processType: "COMPLETE"}
    }

    async resume(message: CommandMessage): Promise<ProcessMessage> {
        console.log(`state worker resume: ${JSON.stringify(message)}`);
        return {id: message.id, processType: "COMPLETE"}
    }

    // 必须实现静态序列化方法
    static deserialize(): StateProcessor {
        return new StateProcessor();
    }
}