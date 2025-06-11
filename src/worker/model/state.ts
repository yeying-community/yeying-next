import {getModulePath} from "./common";

export function getStateImports() {
    return [`import { StateProcessor } from '${getModulePath('@yeying-community/yeying-next')}';`]
}