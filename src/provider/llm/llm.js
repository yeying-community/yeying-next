import {LlmClient} from '../../yeying/api/llm/llm_grpc_web_pb.cjs'
import llm_pkg from '../../yeying/api/llm/llm_pb.cjs'
import code_pkg from '../../yeying/api/common/code_pb.cjs'
import {doResponse, isCreated, isDeleted, isOk} from '../tool/status.js'
import {fromStrToLlmCode} from '../domain/model/agent/model.js'
import {createMetadata} from '../tool/auth/auth.js'
import {getCurrentUtcString} from '../tool/date.js'

const {
  CommonLlmRequest,
  MessageRoleEnum,
  CompleteRequest,
  Prompt,
  GenerateRequest,
  ConfigRequest,
  ConfigOperatorCodeEnum,
  AddLlmRequest,
  SearchLlmRequest,
} = llm_pkg
const {ResponseContentFormatEnum} = code_pkg

export function LlmAdaptor(serviceMetadata, signer) {
  this.serviceMetadata = serviceMetadata
  this.signer = signer
  this.client = new LlmClient(this.serviceMetadata.proxy, undefined, undefined)
}

LlmAdaptor.prototype.addLlm = function (uid, code, name, key, extend) {
  return new Promise(async (resolve, reject) => {
    const request = new ConfigRequest()
    request.setDid(this.signer.blockAddress.identifier)
    request.setCode(ConfigOperatorCodeEnum.CONFIG_OPERATOR_CODE_LLM_ADD)
    const subRequest = new AddLlmRequest()
    subRequest.setOwner(this.signer.blockAddress.identifier)
    subRequest.setLlmid(uid)
    subRequest.setName(name)
    subRequest.setCode(fromStrToLlmCode(code))
    subRequest.setKey(key)
    subRequest.setExtend(extend)
    subRequest.setCreated(getCurrentUtcString())
    subRequest.setCheckpoint(getCurrentUtcString())
    request.setAddllmrequest(subRequest)

    const metadata = await createMetadata(this.signer.blockAddress, '/yeying.api.llm.Llm/Config', request.serializeBinary())
    console.log(`metadata=${JSON.stringify(metadata)}`)
    this.client.config(request, metadata, (err, res) => {
      doResponse(this.serviceMetadata, () => resolve(res.getCommonllmresponse().getLlm()), reject, err, res, isCreated)
    })
  })
}

LlmAdaptor.prototype.getLlms = function (condition) {
  return new Promise(async (resolve, reject) => {

    const request = new ConfigRequest()
    request.setDid(this.signer.blockAddress.identifier)
    request.setCode(ConfigOperatorCodeEnum.CONFIG_OPERATOR_CODE_LLM_SEARCH)
    const subRequest = new SearchLlmRequest()
    subRequest.setCondition(condition)
    request.setSearchllmrequest(subRequest)
    const metadata = await createMetadata(this.signer.blockAddress, '/yeying.api.llm.Llm/Config', request.serializeBinary())
    this.client.config(request, metadata, (err, res) => {
      doResponse(this.serviceMetadata, () => resolve(res.getSearchllmresponse().getLlmsList()), reject, err, res, isOk)
    })
  })
}

LlmAdaptor.prototype.getLlm = function (llmId) {
  return new Promise(async (resolve, reject) => {
    const request = new ConfigRequest()
    request.setDid(this.signer.blockAddress.identifier)
    request.setCode(ConfigOperatorCodeEnum.CONFIG_OPERATOR_CODE_LLM_GET)
    const subRequest = new CommonLlmRequest()
    subRequest.setUid(llmId)
    request.setCommonllmrequest(subRequest)
    const metadata = await createMetadata(this.signer.blockAddress, '/yeying.api.llm.Llm/Config', request.serializeBinary())
    this.client.config(request, metadata, (err, res) => {
      doResponse(this.serviceMetadata, () => resolve(res.getCommonllmresponse().getLlm()), reject, err, res, isDeleted)
    })
  })
}

LlmAdaptor.prototype.delLlm = function (llmId) {
  return new Promise(async (resolve, reject) => {
    const request = new ConfigRequest()
    request.setDid(this.signer.blockAddress.identifier)
    request.setCode(ConfigOperatorCodeEnum.CONFIG_OPERATOR_CODE_LLM_DELETE)
    const subRequest = new CommonLlmRequest()
    subRequest.setUid(llmId)
    request.setCommonllmrequest(subRequest)
    const metadata = await createMetadata(this.signer.blockAddress, '/yeying.api.llm.Llm/Config', request.serializeBinary())
    this.client.config(request, metadata, (err, res) => {
      doResponse(this.serviceMetadata, () => resolve(res.getCommonllmresponse().getLlm()), reject, err, res, isDeleted)
    })
  })
}

LlmAdaptor.prototype.complete = function (llmId, model, prompts, callback) {
  return new Promise(async (resolve, reject) => {
    const request = new CompleteRequest()
    request.setDid(this.signer.blockAddress.identifier)
    request.setModel(model)
    request.setStream(true)
    request.setLlmid(llmId)
    request.setPromptsList(prompts.map(m => {
      const prompt = new Prompt()
      prompt.setRole(MessageRoleEnum.MESSAGE_ROLE_USER)
      prompt.setContent(m)
      return prompt
    }))

    const metadata = await createMetadata(this.signer.blockAddress, '/yeying.api.llm.Llm/Complete', request.serializeBinary())
    console.log(`request=${JSON.stringify(request)}`)
    const t1 = Date.now()
    const stream = this.client.complete(request, metadata)
    let response = undefined
    stream.on('data', res => {
      response = res
      res.getAnswer().getChoicesList().forEach(m => callback(false, m.getContent()))
    })

    stream.on('end', () => {
      const t2 = Date.now()
      console.log(`Finished, cost time=${t2 - t1}`)
      callback(true)
      resolve()
      doResponse(this.serviceMetadata, resolve, reject, undefined, response)
    })

    stream.on('error', (err) => {
      console.error('Fail to complete', err)
      callback(true)
      doResponse(this.serviceMetadata, resolve, reject, err)
    })
  })
}

LlmAdaptor.prototype.generate = function (llmId, model, count, size, prompt, callback) {
  return new Promise(async (resolve, reject) => {
    const request = new GenerateRequest()
    request.setDid(this.signer.blockAddress.identifier)
    request.setModel(model)
    request.setLlmid(llmId)
    request.setCount(count > 10 || count <= 0 ? 1 : count)
    request.setSize(size)
    request.setPrompt(prompt)
    request.setResponsecontentformat(ResponseContentFormatEnum.RESPONSE_CONTENT_FORMAT_BASE64)

    // 为什么要用base64编码，目前body是json格式，在序列化的时候，出现10倍的膨胀
    const metadata = await createMetadata(this.signer.blockAddress, '/yeying.api.llm.Llm/Generate', request.serializeBinary())
    console.log(`request=${JSON.stringify(request)}`)
    const t1 = Date.now()
    const stream = this.client.generate(request, metadata)
    let response = undefined

    stream.on('data', res => {
      console.log(`Generation response success.`)
      response = res
      callback(false, res.getBase64())
    })

    stream.on('end', () => {
      const t2 = Date.now()
      console.log(`Finished, cost time=${t2 - t1}`)
      callback(true)
      doResponse(this.serviceMetadata, resolve, reject, undefined, response)
    })

    stream.on('error', (err) => {
      console.error('Fail to generate', err)
      callback(true)
      doResponse(this.serviceMetadata, resolve, reject, err)
    })
  })
}
