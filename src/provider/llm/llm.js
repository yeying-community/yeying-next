import {LlmClient} from '../../yeying/api/llm/llm_grpc_web_pb.cjs'
import llm_pkg from '../../yeying/api/llm/llm_pb.cjs'
import code_pkg from '../../yeying/api/common/code_pb.cjs'
import {getCurrentUtcString} from '../../tool/date.js'
import {doError, doStatus, doStatuses, isExisted} from '../../tool/status.js'
import {getStreamDataTagBody, getStreamDataTagHead, getStreamDataTagTail} from '../../tool/code.js'
import {Cancelled} from '../../tool/error.js'

const {
  AddLlmRequest,
  AddLlmRequestBody,
  GetLlmRequest,
  GetLlmRequestBody,
  DelLlmRequest,
  DelLlmRequestBody,
  MessageRoleEnum,
  CompleteRequest,
  CompleteRequestBody,
  Prompt,
  GenerateRequest,
  GenerateRequestBody,
} = llm_pkg
const {ResponseContentFormatEnum} = code_pkg

export class LlmProvider {
  constructor(authenticate, provider) {
    this.authenticate = authenticate
    this.provider = provider
    this.client = new LlmClient(this.provider.proxy)
  }

  addLlm(uid, code, name, key, extend) {
    return new Promise(async (resolve, reject) => {
      const method = '/yeying.api.llm.Llm/AddLlm'
      const body = new AddLlmRequestBody()
      body.setLlmid(uid)
      body.setName(name)
      body.setCode(code)
      body.setKey(key)
      body.setExtend(extend)
      body.setCreated(getCurrentUtcString())
      body.setCheckpoint(getCurrentUtcString())
      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for adding llm', err)
        return reject(err)
      }

      const request = new AddLlmRequest()
      request.setHeader(header)
      request.setBody(body)
      this.client.addLlm(request, undefined, (err, res) => {
        this.doAddLlmResponse(method, err, res, resolve, reject)
      })
    })
  }

  doAddLlmResponse(method, err, res, resolve, reject) {
    if (doError(err, reject, this.provider)) {
      return
    }

    const body = res.getBody()
    this.authenticate.verifyHeader(method, res.getHeader(), body).then(r => {
      doStatus(body.getStatus(), resolve, reject, this.provider, isExisted)
    }, e => reject(e))
  }

  getLlm(llmId) {
    return new Promise(async (resolve, reject) => {
      const method = '/yeying.api.llm.Llm/GetLlm'
      const body = new GetLlmRequestBody()
      body.setLlmid(llmId)
      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for getting llm', err)
        return reject(err)
      }

      const request = new GetLlmRequest()
      request.setHeader(header)
      request.setBody(body)
      this.client.getLlm(request, undefined, (err, res) => {
        this.doGetLlmResponse(method, err, res, resolve, reject)
      })
    })
  }

  doGetLlmResponse(method, err, res, resolve, reject) {
    if (doError(err, reject, this.provider)) {
      return
    }

    const body = res.getBody()
    this.authenticate.verifyHeader(method, res.getHeader(), body).then(r => {
      doStatus(body.getStatus(), () => resolve(body.getLlmsList()), reject, this.provider)
    }, e => reject(e))
  }

  delLlm(llmId) {
    return new Promise(async (resolve, reject) => {
      const method = '/yeying.api.llm.Llm/DelLlm'
      const body = new DelLlmRequestBody()
      body.setLlmid(llmId)
      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for deleting llm', err)
        return reject(err)
      }

      const request = new DelLlmRequest()
      request.setHeader(header)
      request.setBody(body)
      this.client.delLlm(request, undefined, (err, res) => {
        this.doDelLlmResponse(method, err, res, resolve, reject)
      })
    })
  }

  doDelLlmResponse(method, err, res, resolve, reject) {
    if (doError(err, reject, this.provider)) {
      return
    }

    const body = res.getBody()
    this.authenticate.verifyHeader(method, res.getHeader(), body).then(r => {
      doStatus(body.getStatus(), resolve, reject, this.provider, isExisted)
    }, e => reject(e))
  }

  complete(llmId, model, prompts, callback) {
    return new Promise(async (resolve, reject) => {
      const method = '/yeying.api.llm.Llm/Complete'
      const body = new CompleteRequestBody()
      body.setModel(model)
      body.setStream(true)
      body.setLlmid(llmId)
      body.setPromptsList(prompts.map(m => {
        const prompt = new Prompt()
        prompt.setRole(MessageRoleEnum.MESSAGE_ROLE_USER)
        prompt.setContent(m)
        return prompt
      }))

      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for completing', err)
        return reject(err)
      }

      const t1 = Date.now()
      const request = new CompleteRequest()
      request.setHeader(header)
      request.setBody(body)

      const stream = this.client.complete(request, undefined)
      let head = undefined
      let tail = undefined
      stream.on('data', res => {
        if (res.getContenttag() === getStreamDataTagHead()) {
          head = res.getHead()
        } else if (res.getContenttag() === getStreamDataTagBody()) {
          res.getBody().getAnswer().getChoicesList().forEach(m => callback(false, m.getContent()))
        } else if (res.getContenttag() === getStreamDataTagTail()) {
          tail = res.getTail()
        }
      })

      stream.on('end', () => {
        const t2 = Date.now()
        console.log(`Finished, cost time=${t2 - t1}`)
        callback(true)
        this.doCompleteResponse(method, head, tail, resolve, reject)
      })

      stream.on('error', (err) => {
        console.error('Fail to complete', err)
        callback(true)
        reject(err)
      })
    })
  }

  doCompleteResponse(method, head, tail, resolve, reject) {
    if (head === undefined && tail === undefined) {
      return reject(new Cancelled())
    }
    const statuses = []
    const results = []
    if (head !== undefined) {
      results.push(this.authenticate.verifyHeader(method, head.getHeader(), head.getBody()))
      statuses.push(head.getBody().getStatus())
    }

    if (tail !== undefined) {
      results.push(this.authenticate.verifyHeader(method, tail.getHeader(), tail.getBody()))
      statuses.push(tail.getBody().getStatus())
    }

    Promise.all(results).then((values) => doStatuses(statuses, resolve, reject, this.provider))
      .catch(e => reject(e))
  }

  generate(llmId, model, count, size, prompt, callback) {
    return new Promise(async (resolve, reject) => {
      const method = '/yeying.api.llm.Llm/Generate'
      const body = new GenerateRequestBody()
      body.setModel(model)
      body.setLlmid(llmId)
      body.setCount(count > 10 || count <= 0 ? 1 : count)
      body.setSize(size)
      body.setPrompt(prompt)
      body.setResponsecontentformat(ResponseContentFormatEnum.RESPONSE_CONTENT_FORMAT_BASE64)

      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for generating', err)
        return reject(err)
      }

      const t1 = Date.now()
      const request = new GenerateRequest()
      request.setHeader(header)
      request.setBody(body)

      const stream = this.client.generate(request, undefined)
      let head = undefined
      let tail = undefined
      stream.on('data', res => {
        console.log(`Generation response success, tag=${res.getContenttag()}.`)
        if (res.getContenttag() === getStreamDataTagHead()) {
          head = res.getHead()
        } else if (res.getContenttag() === getStreamDataTagBody()) {
          callback(false, res.getBody().getData())
        } else if (res.getContenttag() === getStreamDataTagTail()) {
          tail = res.getTail()
        }
      })

      stream.on('end', () => {
        const t2 = Date.now()
        console.log(`Finished, cost time=${t2 - t1}`)
        callback(true)
        this.doGenerateResponse(method, head, tail, resolve, reject)
      })

      stream.on('error', (err) => {
        console.error('Fail to generate', err)
        callback(true)
        reject(err)
      })
    })
  }

  doGenerateResponse(method, head, tail, resolve, reject) {
    if (head === undefined && tail === undefined) {
      return reject(new Cancelled())
    }

    const results = []
    const statuses = []
    if (head !== undefined) {
      results.push(this.authenticate.verifyHeader(method, head.getHeader(), head.getBody()))
      statuses.push(head.getBody().getStatus())
    }

    if (tail !== undefined) {
      results.push(this.authenticate.verifyHeader(method, tail.getHeader(), tail.getBody()))
      statuses.push(tail.getBody().getStatus())
    }

    Promise.all(results).then((values) => doStatuses(statuses, resolve, reject, this.provider))
      .catch(e => reject(e))
  }
}