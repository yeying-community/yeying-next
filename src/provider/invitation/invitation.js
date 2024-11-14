import {InvitationClient} from '../../yeying/api/invitation/Invitation_grpc_web_pb.cjs'
import invitation_pkg from '../../yeying/api/invitation/Invitation_pb.cjs'
import {doError, doStatus} from '../../common/status.js'

const {GenerateRequest, InputRequest, InputRequestBody, GenerateRequestBody} = invitation_pkg

export class InvitationProvider{
  constructor(authenticate, provider) {
    this.authenticate = authenticate
    this.provider = provider
    this.client = new InvitationClient(this.provider.proxy)
  }

  input(code) {
    return new Promise(async (resolve, reject) => {
      const method = '/yeying.api.invitation.Invitation/Input'
      const body = new InputRequestBody()
      body.setCode(code)

      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for input invitation code.', err)
        return reject(err)
      }

      const request = new InputRequest()
      request.setHeader(header)
      request.setBody(body)

      this.client.input(request, undefined, (err, res) => {
        this.doInputResponse(method, err, res, resolve, reject)
      })
    })
  }

  generate(scene, count) {
    return new Promise(async (resolve, reject) => {
      const method = '/yeying.api.invitation.Invitation/Generate'
      const body = new GenerateRequestBody()
      body.setCount(count)
      body.setScene(scene)
      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for generating invitation.', err)
        return reject(err)
      }

      const request = new GenerateRequest()
      request.setHeader(header)
      request.setBody(body)

      this.client.generate(request, undefined, (err, res) => {
        this.doGenerateResponse(method, err, res, resolve, reject)
      })
    })
  }

  doGenerateResponse(method, err, res, resolve, reject) {
    if (doError(err, reject, this.provider)) {
      return
    }

    const body = res.getBody()
    this.authenticate.verifyHeader(method, res.getHeader(), body).then(r => {
      doStatus(body.getStatus(), () => resolve(body.getInvitationsList()), reject, this.provider)
    }, e => reject(e))
  }

  doInputResponse(method, err, res, resolve, reject) {
    if (doError(err, reject, this.provider)) {
      return
    }

    const body = res.getBody()
    this.authenticate.verifyHeader(method, res.getHeader(), body).then(r => {
      doStatus(body.getStatus(), resolve, reject, this.provider)
    }, e => reject(e))
  }
}





