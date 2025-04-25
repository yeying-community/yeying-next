import { ApplicationState } from '../state/application'
import { NotFound } from '../common/error'
import { digest, encodeHex, encodeString } from '@yeying-community/yeying-web3'
import { Myself } from './myself'

export class ApplicationManager {
    myself: Myself

    // 应用状态
    stateMap: Map<string, ApplicationState>

    constructor(myself?: Myself) {
        this.stateMap = new Map<string, ApplicationState>()
        this.myself = myself ? myself : new Myself()
    }

    /**
     * 获得当前应用的状态
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
