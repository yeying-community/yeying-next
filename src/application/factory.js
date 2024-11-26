import {convertApplicationCodeFrom} from '../tool/code.js'
import code_pkg from '../yeying/api/common/code_pb.cjs'
import {NodeApplication} from './node/node.js'
import {KnowledgeApplication} from './knowledge/knowledge.js'

const {ApplicationCodeEnum} = code_pkg

export class ApplicationFactory {
  constructor(code) {
    this.code = code
  }

  get(code) {
    code = typeof code === 'string' ? convertApplicationCodeFrom(code) : code
    switch (code) {
      case ApplicationCodeEnum.APPLICATION_CODE_NODE:
        return new NodeApplication()
      case ApplicationCodeEnum.APPLICATION_CODE_KNOWLEDGE:
        return new KnowledgeApplication()
      default:
        return new Error(`Not supported application code=${code}`)
    }
  }
}