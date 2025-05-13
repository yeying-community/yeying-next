import {ProviderOption} from '@yeying-community/yeying-client-ts'
import {SecurityAlgorithm} from "@yeying-community/yeying-web3";

/**
 * Represents different types of commands that can be sent to a worker.
 */
export type CommandType = 'INITIALIZE' | 'CONFIG' | 'START' | 'ABORT' | 'PAUSE' | 'RESUME';

/**
 * Represents different types of process statuses that a worker can report.
 */
export type ProcessType = 'PROGRESS' | 'ERROR' | 'COMPLETE' | 'RESPONSE' | 'DATA';

/**
 * Represents different types of workers available in the system.
 */
export type WorkerType = 'UPLOAD_ASSET' | 'DOWNLOAD_ASSET' | 'SYNC_STATE';

export interface WorkerOption {
    /**
     * Options specific to the provider used by the worker.
     */
    providerOption?: ProviderOption;

    /**
     * Options specific to encrypt or decrypt the content of asset.
     */
    securityAlgorithm: SecurityAlgorithm;
}

/**
 * Configuration options for a worker.
 */
export interface CommonConfig {
    /**
     * The number of times the worker should retry an operation before failing.
     * @defaultValue 3
     */
    retries?: number;

    /**
     * The maximum number of concurrent operations the worker should perform.
     * @defaultValue 1
     */
    concurrency?: number;
}

/**
 * A message representing a command to be executed by a worker.
 * @template T - The type of payload associated with the command.
 */
export interface CommandMessage<T = any> {
    /**
     * Unique identifier for the worker that will handle the command.
     */
    workerId: string;

    /**
     * Unique identifier for the message.
     */
    msgId: string;

    /**
     * The type of command being sent to the worker.
     */
    commandType: CommandType;

    /**
     * Payload containing additional data needed to execute the command.
     */
    payload: T;
}

/**
 * A message representing the status of a process handled by a worker.
 * @template T - The type of payload associated with the process status.
 */
export interface ProcessMessage<T = any> {
    /**
     * Unique identifier for the worker handling the process.
     */
    workerId: string;

    /**
     * Unique identifier for the message.
     */
    msgId: string;

    /**
     * The type of process status being reported.
     */
    processType: ProcessType;

    /**
     * Optional payload containing additional data related to the process status.
     */
    payload?: T;
}

export interface WorkerState<T = any> {
    workerId: string;
    workerType: WorkerType;
    status: 'pending' | 'running' | 'completed' | 'failed' | 'paused';
    progress?: number;
    result?: any;
    error?: Error;
    createdAt: string;
    updatedAt: string;
    retries: number;
    data?: T;
}

export type WorkerCallback = (process: ProcessMessage, transfer?: Transferable[]) => void

export function serialize(data: any): string {
    return JSON.stringify(data, (key, value) => typeof value === 'bigint' ? value.toString() : value)
}