import {InvalidPassword} from '../tool/error.js'
import {decryptObject, encryptObject} from '../tool/crypto.js'


export class IdentityCipher {
  constructor(cryptoAlgorithm, rawKey) {
    this.cryptoAlgorithm = cryptoAlgorithm
    this.rawKey = rawKey
    this.deriveAesKey = {}
  }

  encrypt(data, plainConvertor = undefined, cipherConvertor = undefined) {
    return new Promise(async (resolve, reject) => {
      try {
        if (this.deriveAesKey[this.cryptoAlgorithm.name] !== undefined) {
          encryptObject(this.cryptoAlgorithm, this.deriveAesKey[this.cryptoAlgorithm.name], data, plainConvertor, cipherConvertor).then(r => resolve(r), e => reject(e))
        } else {
          const cryptoKey = await crypto.subtle.importKey('raw', this.rawKey,  {name: this.cryptoAlgorithm.name}, false, ['encrypt', 'decrypt'])
          this.deriveAesKey[this.cryptoAlgorithm.name] = cryptoKey
          encryptObject(this.cryptoAlgorithm, cryptoKey, data, plainConvertor, cipherConvertor).then(r => resolve(r), e => reject(e))
        }
      } catch (err) {
        console.error(`Fail to encrypt bytes!`, err)
        reject(new InvalidPassword(`Invalid password!`))
      }
    })
  }

  decrypt(data, cipherConvertor = undefined, plainConvertor = undefined) {
    return new Promise(async (resolve, reject) => {
      try {
        if (this.deriveAesKey[this.cryptoAlgorithm.name] !== undefined) {
          decryptObject(this.cryptoAlgorithm, this.deriveAesKey[this.cryptoAlgorithm.name], data, cipherConvertor, plainConvertor).then(r => resolve(r), e => reject(e))
        } else {
          const cryptoKey = await crypto.subtle.importKey('raw', this.rawKey,  {name: this.cryptoAlgorithm.name}, false, ['encrypt', 'decrypt'])
          this.deriveAesKey[this.cryptoAlgorithm.name] = cryptoKey
          decryptObject(this.cryptoAlgorithm, cryptoKey, data, cipherConvertor, plainConvertor).then(r => resolve(r), e => reject(e))
        }
      } catch (err) {
        console.error(`Fail to decrypt bytes!`, err)
        reject(new InvalidPassword(`Invalid password!`))
      }
    })
  }
}