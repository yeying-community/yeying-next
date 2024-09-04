import application_pkg from '../../yeying/api/application/application_pb.cjs'
import {ApplicationClient} from '../../yeying/api/application/application_grpc_web_pb.cjs'
import {doError, doStatus} from '../../common/status.js'

const {SearchRequest, SearchRequestBody} = application_pkg

export class ApplicationProvider {
  constructor(authenticate, provider) {
    this.authenticate = authenticate
    this.provider = provider
    this.client = new ApplicationClient(this.provider.metadata.extend.proxy)
  }

  search(code, page, pageSize) {
    return new Promise(async (resolve, reject) => {
      const method = '/yeying.api.application.Application/Search'
      const body = new SearchRequestBody()
      body.setCode(code)
      body.setPage(page)
      body.setPagesize(pageSize)

      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for adding user', err)
        throw err
      }

      const request = new SearchRequest()
      request.setHeader(header)
      request.setBody(body)
      this.client.search(request, undefined, (err, res) => {
        this.doSearchResponse(method, err, res, resolve, reject)
      })
    })
  }

  doSearchResponse(method, err, res, resolve, reject) {
    if (doError(err, reject, this.provider)) {
      return
    }

    const body = res.getBody()
    this.authenticate.verifyHeader(method, res.getHeader(), body).then(r => {
      doStatus(body.getStatus(), () => resolve(body.getApplicationsList()), reject, this.provider)
    }, e => reject(e))
  }
}