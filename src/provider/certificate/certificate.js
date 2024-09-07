import {CertificateClient} from '../../yeying/api/certificate/certificate_grpc_web_pb.cjs'
import certificate_pkg from '../../yeying/api/certificate/certificate_pb.cjs'
import {doError, doStatus} from '../../common/status.js'

const {SignRequest, SignRequestBody} = certificate_pkg

export class CertificateProvider {
  constructor(authenticate, provider) {
    this.authenticate = authenticate
    this.provider = provider
    this.client = new CertificateClient(this.provider.extend.proxy)
  }

  sign(domain, csr) {
    return new Promise(async (resolve, reject) => {
      const method = '/yeying.api.certificate.Certificate/Sign'
      const body = new SignRequestBody()
      body.setCsr(csr)
      body.setDomain(domain)

      let header
      try {
        header = await this.authenticate.createHeader(method, body)
      } catch (err) {
        console.error('Fail to create header for signing certificate.', err)
        return reject(err)
      }

      const request = new SignRequest()
      request.setHeader(header)
      request.setBody(body)

      this.client.sign(request, undefined, (err, res) => {
        this.doSignResponse(method, err, res, () => resolve(res.getBody().getCertificate()), reject)
      })
    })
  }

  doSignResponse(method, err, res, resolve, reject) {
    if (doError(err, reject, this.provider)) {
      return
    }

    const body = res.getBody()
    this.authenticate.verifyHeader(method, res.getHeader(), body).then(r => {
      doStatus(body.getStatus(), resolve, reject, this.provider)
    }, e => reject(e))
  }
}



