import { BlockAddress, Identity } from '@yeying-community/yeying-web3'

export interface Account {
    // 身份名称
    name: string
    // 身份DID
    did: string
    // 头像
    avatar: string
    // 首次添加或者最近一次登陆的时间点
    timestamp: number
}