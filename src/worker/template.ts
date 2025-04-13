/**
 *
 * 主线程可以多次发送消息给worker线程，worker线程也可以发送多个消息给主线程，通常主线程发送的通用消息：
 * 1、主线程发送启动任务
 * 2、主线程发送终止任务
 * 3、主线程发送暂停任务
 *
 * worker线程发送消息给主线程，通常worker线程发送的通用消息：
 * 1、worker线程发送当前进度
 * 2、worker线程发送当前错误
 *
 */

export function createDynamicWorker(processor: string, dependencies: string[] = []) {
    const imports = `
    import { createGrpcWebTransport } from '${getModulePath('@connectrpc/connect-web')}';
    import { createClient } from '${getModulePath('@connectrpc/connect')}';
    import { create, toBinary } from '${getModulePath('@bufbuild/protobuf')}';
  `

    const code = WORKER_TEMPLATE.replace('{{IMPORTS}}', imports)
        .replace('{{DEPENDENCIES}}', dependencies.join('\n'))
        .replace('{{CLASS_CODE}}', processor)
    console.log(`processor:${code}`)
    const blob = new Blob([code], { type: 'application/javascript' })
    return new Worker(URL.createObjectURL(blob), { type: 'module' })
}

function getModulePath(pkg: string): string {
    return `https://esm.sh/${pkg}@latest?target=esnext`
}

function getLocalModulePath(relativePath: string): string {
    return new URL(relativePath, import.meta.url).pathname
}

export const WORKER_TEMPLATE = `
  // --- Worker入口代码 ---
  {{IMPORTS}}

  {{DEPENDENCIES}}
  
  // 初始化依赖  
  const processor = {{CLASS_CODE}}.deserialize(); 
  
  // 消息处理器
  self.onmessage = async (e) => {
    const { id, commandType, payload } = e.data;
    let response = undefined
    try {
      switch (commandType) {
        case 'CONFIG':
          response = await processor.config(e.data);
          break;
        case 'START':
          response = await processor.start(e.data);
          break;
        case 'ABORT':
          response = await processor.abort(e.data);
          break;
        case 'PAUSE':
          response = await processor.pause(e.data);
          break;
        case 'RESUME':
          response = await processor.resume(e.data);
          break;
        default:
          throw new Error('Unknown task type' + type);
      }

      self.postMessage(response);
    } catch (error) {
      self.postMessage({ id: id, processType: 'ERROR', data: error.message });
    }
  };
`
