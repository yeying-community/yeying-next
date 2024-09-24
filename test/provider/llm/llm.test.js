import {Authenticate} from '../../../src/identity/authenticate.js'
import {LlmProvider} from '../../../src/provider/llm/llm.js'
import {convertLlmCodeTo, getZhiPuAiCode} from '../../../src/provider/llm/model.js'

const identity = {
  blockAddress: {
    mnemonic: {
      phrase: 'limb potato can before risk miracle radio voice wheat silly column lend stomach exile guess tornado neck hen',
      path: 'm/44\'/60\'/0\'/0/0',
      locale: 'en'
    },
    privateKey: '0x1b8b419505748c88071b8d28caafa4a74bcdc4a540542e7b4514b13a3f35c96c',
    identifier: 'did:ethr:0x7e4:0x0396be3542029111627e1d08c65a740fcda7b8a341a618ebfe92bace61c0fd5506',
    publicKey: '0x0396be3542029111627e1d08c65a740fcda7b8a341a618ebfe92bace61c0fd5506',
    address: '0x6256583430f59D8d526a0a694e7d37ea1956d0AC',
  }
}

const provider = {proxy: 'http://localhost:8541'}


describe('Llm', () => {
  it('add', async () => {
    const llmProvider = new LlmProvider(new Authenticate(identity), provider)
    const uuid = 'bc9805ba-4448-45cf-af13-109a225e1771'
    // 从环境变量里面获得
    const key = import.meta.env.ZHIPUAPI_API_KEY
    await llmProvider.addLlm(uuid, getZhiPuAiCode(), 'test', key, '')
    console.log(`Success to add new llm=${uuid}`)
  })

  it('get', async () => {
    const llmProvider = new LlmProvider(new Authenticate(identity), provider)
    const uuid = 'bc9805ba-4448-45cf-af13-109a225e1771'
    const llms = await llmProvider.getLlm(uuid)
    llms.forEach(llm => {
      console.log(`Success to get llm=${convertLlmCodeTo(llm.getCode())}, id=${llm.getLlmid()}`)
    })
  })

  it('del', async () => {
    const llmProvider = new LlmProvider(new Authenticate(identity), provider)
    const uuid = 'bc9805ba-4448-45cf-af13-109a225e1771'
    await llmProvider.delLlm(uuid)
    console.log(`Success to del llm=${uuid}`)
  })

  it('complete', { timeout: 300000 }, async () => {
    const llmProvider = new LlmProvider(new Authenticate(identity), provider)
    const llmId = 'bc9805ba-4448-45cf-af13-109a225e1771'
    const model = 'glm-4-0520'
    let answer = ""
    await llmProvider.complete(llmId, model, ['孩子不听话是否可以体罚'], (finished, m) => {
      if (finished) {
        console.log(answer)
      } else {
        answer = answer + m
      }
    })

    console.log(`Success to complete=${llmId}`)
  })

  it('generate', { timeout: 300000 }, async () => {
    const llmProvider = new LlmProvider(new Authenticate(identity), provider)
    const llmId = 'bc9805ba-4448-45cf-af13-109a225e1771'
    const model = 'cogview-3-plus'
    const imageList = []
    const count = 3
    const size = '1024x1024'
    await llmProvider.generate(llmId, model, count, size, '大海怒吼的样子', (finished, m) => {
      if (finished) {
        console.log(`receive image count=${imageList.length}.`)
      } else {
        imageList.push(m)
      }
    })

    console.log(`Success to generate=${llmId}`)
  })
})