import {ApplicationCodeEnum} from "../../src";

export function getApplicationAddress(code: ApplicationCodeEnum) {
    switch (code) {
        case ApplicationCodeEnum.APPLICATION_CODE_PORTAL:
            return process.env.YEYING_PORTAL_URL ? process.env.YEYING_PORTAL_URL as string : "http://localhost:8451"
        default:
            throw new Error(`Unknown application=${code}`)
    }
}