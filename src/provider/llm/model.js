import llm_pkg from '../../yeying/api/llm/llm_pb.cjs'

const {LlmCodeEnum} = llm_pkg

export function ConvertLlmCodeFrom(str) {
  if (str === undefined) {
    return undefined
  }
  const value = LlmCodeEnum[str]
  return value === LlmCodeEnum.LLM_CODE_UNKNOWN ? undefined : value
}

export function getZhiPuAiCode() {
   return LlmCodeEnum.LLM_CODE_ZHIPUAI
}

export function getOpenAiCode() {
  return LlmCodeEnum.LLM_CODE_OPENAI
}

export function convertLlmCodeTo(llmCode) {
  if (llmCode === undefined || llmCode === LlmCodeEnum.LLM_CODE_UNKNOWN) {
    return undefined
  }

  return Object.keys(LlmCodeEnum).find(s => LlmCodeEnum[s] === llmCode)
}