import {CommandMessage, ProcessMessage} from "../model/common";

export interface Processor {
    // 配置命令
    config(message: CommandMessage): Promise<ProcessMessage>;

    // 开始命令
    start(message: CommandMessage): Promise<ProcessMessage>;

    // 终止命令
    abort(message: CommandMessage): Promise<ProcessMessage>;

    // 暂停命令
    pause(message: CommandMessage): Promise<ProcessMessage>;

    // 重启命令
    resume(message: CommandMessage): Promise<ProcessMessage>;
}