# 常用模块与资源管理

> Node.js 提供文件、网络、二进制和进程能力。学习目标不仅是记住 API，还要知道哪里会阻塞、占用多少资源、出错后由谁处理。

## 一、模块如何组织？

Node.js 支持两套常见模块系统：CommonJS（CJS）与 ECMAScript Modules（ESM）。新示例统一使用 ESM；本仓库的 `package.json` 已声明 `"type": "module"`。

| 项目 | CommonJS | ESM |
| --- | --- | --- |
| 导入 / 导出 | `require()` / `module.exports` | `import` / `export` |
| 明确的文件扩展名 | `.cjs` | `.mjs` |
| `.js` 如何判定 | 在声明 `type: commonjs` 的包中按 CJS 处理 | 在声明 `type: module` 的包中按 ESM 处理 |
| 路径信息 | `__filename`、`__dirname` | `import.meta.url`；Node.js 24 也支持本地模块的 `import.meta.filename` / `dirname` |
| 顶层 await | 不支持 | 支持 |

没有显式 `type` 的 `.js` 还涉及默认规则和语法检测，实际项目应明确声明，避免依赖隐式判断。Node.js 原生 ESM 的相对导入通常要带扩展名，例如 `import './service.js'`；打包工具支持的解析规则不一定能在 Node.js 中直接运行。

```js
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const file = join(import.meta.dirname, 'notes.txt')
const text = await readFile(file, 'utf8')
console.log(text)
```

运行前需要在模块同目录准备 `notes.txt`。`node:` 前缀明确表示 Node.js 内置模块，不需要通过包管理器安装。

ESM 与 CJS 可以在一定条件下互操作，但不能记成“完全通用”或“完全不能混用”。例如 Node.js 24 的 `require(esm)` 仅适用于满足约束的同步 ESM，模块图含顶层 await 时不能这样加载；不确定时应查清包的 `exports` 和当前 Node 版本支持情况。

## 二、先认识常用内置模块

| 模块 | 常见用途 | 学习重点 |
| --- | --- | --- |
| `node:fs` / `node:fs/promises` | 文件、目录与文件句柄 | 同步与异步 API、流式读写、关闭资源 |
| `node:path` / `node:url` | 文件路径、文件 URL、请求 URL | 操作系统差异；路径拼接不等于权限检查 |
| `node:buffer` | 二进制数据 | 编码、字节长度与内存占用 |
| `node:stream` | 分块处理数据 | 背压、错误传播、流结束 |
| `node:events` | 应用内事件通知 | 监听器同步调用、错误事件、监听器清理 |
| `node:http` | HTTP 服务与客户端底层能力 | 请求/响应流、连接、超时 |
| `node:process` | 参数、运行状态与进程生命周期 | `process.cwd()`、退出码、信号 |
| `node:crypto` | 密码学工具 | 使用成熟方案，不自行发明加密或认证协议 |

网络服务、子进程和多线程还有各自的资源边界，后续结合[事件循环](./s_node_2-event_loop)、[HTTP 服务](./s_node_3-http_koa)与[进程管理](../20deploy/s_deploy_4-node_process)继续学习。

## 三、文件与路径：异步不等于没有成本

`readFileSync()` 会阻塞当前 JavaScript 线程。`await readFile()` 在等待异步 I/O 时允许事件循环推进其他任务，但会把文件内容读入内存，因此不适合无限大的文件。

- 启动阶段读取小配置时，是否使用同步 API 可以结合启动路径判断。
- 请求处理中读取文件通常优先异步方式，批量任务还应限制并发数。
- 大文件优先考虑 Stream；不要用 `Promise.all()` 同时读取成千上万个文件，再把内存耗尽。

### 工作目录与模块目录不同

`process.cwd()` 是进程的当前工作目录，受启动方式影响；模块目录指代码文件所在目录。读取用户指定文件或固定资源时，要先确认自己想相对哪个位置解析。

`path.join()` 和 `path.resolve()` 只处理路径，不负责阻止目录穿越。用户提交 `../`、绝对路径或涉及符号链接时，需要结合允许目录、规范化与实际文件边界做校验；不能只做一个容易绕过的字符串前缀判断。

### 资源需要明确释放

```js
import { open } from 'node:fs/promises'

const handle = await open(new URL('./notes.txt', import.meta.url), 'r')
try {
  console.log(await handle.readFile('utf8'))
} finally {
  await handle.close()
}
```

文件句柄、数据库连接和网络连接都有生命周期。不要依赖垃圾回收及时替你归还外部资源。

## 四、Buffer：字符串与字节不同

```js
import { Buffer } from 'node:buffer'

const text = '你好'
const bytes = Buffer.from(text, 'utf8')

console.log(text.length)             // 2：UTF-16 码元数量
console.log(bytes.length)            // 6：UTF-8 字节数量
console.log(bytes.toString('utf8'))   // 你好
```

接口体积限制、文件大小和 HTTP `Content-Length` 关注字节数，不能直接使用字符串 `.length`。多字节字符也可能被网络分块切开，不能假定一个 chunk 就是一段完整文字；需要流式解码或在受限体积内合并后解码。

初学时优先使用 `Buffer.from()`、`Buffer.alloc()`。`Buffer.allocUnsafe()` 返回的内存可能包含旧数据，必须在读取或输出前完整覆盖，不应为了未经验证的性能收益随意使用。

## 五、Stream 与背压

Stream 用分块方式处理数据，常见类型包括 Readable、Writable、Duplex 和 Transform。HTTP 请求、文件读取、压缩与响应传输都与流有关。

**背压（backpressure）**解决“生产速度超过消费速度”的问题。可写流的 `write()` 返回 `false` 时，生产者通常需要等待 `drain` 再继续；不能忽略信号持续写入。

文件复制示例，保存为 `.mjs` 后执行 `node copy.mjs input.txt output.txt`：

```js
import { createReadStream, createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream/promises'

const [source, target] = process.argv.slice(2)
if (!source || !target) throw new Error('需要输入和输出文件路径')

// wx：目标已存在时失败，避免练习时覆盖原文件。
await pipeline(
  createReadStream(source),
  createWriteStream(target, { flags: 'wx' }),
)
console.log('复制完成')
```

`pipeline()` 协调背压并传播错误，在多数错误场景下销毁相关流。流失败不意味着所有外部副作用都能自动回滚，例如可能留下部分输出文件，业务仍需决定如何清理。

`highWaterMark` 是触发缓冲调节的阈值，不是整个应用的内存硬上限。Stream 也不会自动解决无限并发：同时打开大量流，仍可能耗尽文件描述符或内存。

## 六、EventEmitter 与错误处理

```js
import { EventEmitter } from 'node:events'

const emitter = new EventEmitter()
emitter.on('saved', () => console.log('监听器执行'))

console.log('开始')
emitter.emit('saved')
console.log('结束')
// 开始 → 监听器执行 → 结束
```

`emit()` 通常按注册顺序**同步调用**监听器，不是天然异步队列，也不会自动等待 async 监听器返回的 Promise。需要可靠的异步任务执行、重试或跨进程传递时，应另外设计任务机制。

不同异步 API 的错误交付方式不同：

| 类型 | 如何处理 |
| --- | --- |
| 同步 throw | 外层 `try/catch` |
| Promise 拒绝 | `await` 配合 `try/catch`，或 `.catch()` |
| 回调式 API | 检查 error-first callback 的第一个参数 |
| EventEmitter / Stream 错误事件 | 注册适当的错误处理器，或使用 `pipeline()` 等工具 |

没有监听器的特殊 `'error'` 事件会抛出错误。外层 `try/catch` 也抓不到未来异步回调里才抛出的错误。长期运行的服务还要及时移除不再需要的监听器，避免持续累积引用。

## 七、学习回顾

> Node.js 的内置模块提供文件、网络、进程和二进制能力。我会先区分模块格式和资源边界：ESM/CJS 要按项目约定使用，请求路径尽量避免同步阻塞，大文件采用流式处理，并尊重背压。同时，文件句柄和连接需要明确释放，不同异步 API 也要在正确的位置处理错误。

**自测：** 为什么 `await readFile()` 仍可能耗尽内存？一个 async 事件监听器为什么不能靠 `emit()` 等待完成？文件流失败后，输出文件一定不存在吗？

> 来源：[Node.js Modules](https://nodejs.org/docs/latest-v24.x/api/modules.html)、[ESM](https://nodejs.org/docs/latest-v24.x/api/esm.html)、[File system](https://nodejs.org/docs/latest-v24.x/api/fs.html)、[Buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html)、[Stream](https://nodejs.org/docs/latest-v24.x/api/stream.html)、[Events](https://nodejs.org/docs/latest-v24.x/api/events.html)
