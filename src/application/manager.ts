import { ApplicationState } from '../state/application'
import { NotFound } from '../common/error'
import { digest, encodeHex, encodeString } from '@yeying-community/yeying-web3'
import { Myself } from './myself'

/**
 * 每个应用都有自己的管理实例，每个应用管理实例管理了应用状态，通过应用状态可以即使保存当前工作环境，包括了配置和状态等，下次打开时能够自动恢复
 * 到之前的状态。
 *
 *
 */
export class ApplicationManager {
    myself: Myself

    // 应用状态
    stateMap: Map<string, ApplicationState>

    constructor(myself?: Myself) {
        this.stateMap = new Map<string, ApplicationState>()
        this.myself = myself ? myself : new Myself()
    }

    /**
     * 根据身份DID获得对应应用的状态
     *
     * did 身份
     */
    async getCurrentState(did: string): Promise<ApplicationState> {
        if (did === undefined) {
            throw new NotFound('No select Identity for application state')
        }

        // 检查当前身份是否发生变化，检查缓存是否存在，如果存在，则返回当前缓存中的状态信息
        const currentState = this.stateMap.get(did)
        if (currentState) {
            return currentState
        }

        const metadata = await this.myself.whoami()
        const stateId = encodeHex(await digest(encodeString(`${did}${metadata.did}`)))

        // 给当前应用和身份创建命名空间
        const newState = new ApplicationState(stateId, metadata)
        this.stateMap.set(did, newState)
        return newState
    }
}
