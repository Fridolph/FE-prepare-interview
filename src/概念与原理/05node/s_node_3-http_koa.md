# HTTP 服务与 Koa 洋葱模型

> 先用原生 HTTP 看清请求和响应，再理解框架为什么引入路由、中间件与应用分层。洋葱模型的重点是异步控制流，而不是框架名称。

## 一、原生 HTTP 服务做了什么？

下面的健康检查服务只使用 Node.js 内置模块，保存为 `server.mjs` 后执行 `node server.mjs`，再访问 `http://127.0.0.1:3000/health`：

```js
import { createServer } from 'node:http'

const server = createServer((req, res) => {
  // 本例只用相对 URL 中的 pathname，不信任外部 Host 来构造业务地址。
  const { pathname } = new URL(req.url ?? '/', 'http://localhost')
  res.setHeader('Content-Type', 'application/json; charset=utf-8')

  if (req.method === 'GET' && pathname === '/health') {
    res.statusCode = 200
    res.end(JSON.stringify({ status: 'ok' }))
    return
  }

  res.statusCode = 404
  res.end(JSON.stringify({ message: 'Not Found' }))
})

server.listen(3000, '127.0.0.1', () => {
  console.log('http://127.0.0.1:3000')
})
```

这是教学最小服务，未实现完整的异常、请求体、超时和下线管理。真实服务需要对这些边界单独设计，不能直接把一个健康接口示例当作生产模板。

关键对象是：

- `req`：`IncomingMessage`，是可读流，包含方法、URL、请求头及逐步到达的请求体。
- `res`：`ServerResponse`，是可写流，负责状态码、响应头和响应内容。
- `res.end()`：结束本次响应，不代表立即关闭底层 TCP 连接；HTTP keep-alive 可以复用连接。

## 二、请求体为什么需要解析器？

请求回调触发时，请求体未必已接收完成。Node.js 不会自动把 JSON 请求体变成业务对象；框架解析器通常需要读取流、限制大小、检查媒体类型并处理解析失败。

不能假设一次 `data` 事件对应一个完整 JSON，也不能不受限制地把所有 chunk 拼接到内存：大体积、慢速请求或大量连接都可能耗尽资源。超限时如何拒绝请求和处理连接，也需要按服务及代理行为验证。

| 边界 | 需要考虑什么 |
| --- | --- |
| 请求方法与路径 | 正确路由；方法不允许时按接口约定处理 |
| 请求体 | 大小上限、Content-Type、JSON 格式、上传限制 |
| 输入校验 | 解析成功不等于满足业务 DTO 或领域规则 |
| 超时与取消 | 请求头、请求体、业务执行、上游调用等时间预算 |
| 异常 | 响应头发送前后处理方式不同，避免重复响应或泄露堆栈 |
| 响应 | 状态码、编码、缓存、流式输出与背压 |

## 三、为什么需要中间件？

多个接口都要做日志、认证、限流等工作，逐个复制容易不一致。中间件把通用逻辑组织成处理链，业务处理器专注具体请求。

```text
请求 → 日志与上下文 → 路由与安全检查 → 业务处理 → 响应
```

这只是通用示意，真实顺序取决于注册方式与框架约定。例如登录接口必须允许匿名进入，业务参数校验和授权检查也不一定能套用同一固定顺序。NestJS 的具体顺序见[请求生命周期](/学习自测/18nestjs/q_nestjs_7-request_lifecycle)。

## 四、Koa 的洋葱模型

Koa 的中间件通常是 `async (ctx, next)`：

- `ctx` 封装本次请求与响应，也可以通过 `ctx.state` 传递请求范围内的数据。
- `await next()` 进入下游，并等待下游返回的 Promise 完成。
- `await next()` 后面的逻辑按相反顺序返回，因此可以环绕下游处理。

```text
进入：A → B → 业务处理
返回：业务处理 → B → A
```

下面片段需要在**独立的 Koa 练习项目**中安装 `koa`，本站不新增运行依赖；保存为 `.mjs` 并运行后访问 `/health`：

```js
import Koa from 'koa'

const app = new Koa()

// 最外层统一接住下游抛出的错误。
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.status = 500
    ctx.body = { message: 'Internal Server Error' }
    ctx.app.emit('error', error, ctx)
  }
})

app.use(async (ctx, next) => {
  const start = performance.now()
  console.log('A enter')
  try {
    await next()
  } finally {
    console.log('A leave', Math.round(performance.now() - start), 'ms')
  }
})

app.use(async (ctx, next) => {
  console.log('B enter')
  await next()
  console.log('B leave')
})

app.use(async ctx => {
  console.log('handler')
  if (ctx.method === 'GET' && ctx.path === '/health') {
    ctx.body = { status: 'ok' }
  }
})

app.on('error', error => console.error(error))
app.listen(3000, '127.0.0.1')

// A enter → B enter → handler → B leave → A leave
```

错误响应在例子中统一用 500 演示，真实项目应区分可预期的客户端错误与内部错误；日志也应避免输出凭证等敏感数据。

### 三个容易踩坑的地方

1. **忘记 `await` 或 `return next()`**：外层可能过早结束，无法正确等待异步下游，错误也可能脱离预期的捕获链。需要环绕处理时使用 `await next()`。
2. **多次调用 `next()`**：组合器通常会拒绝这种调用，不能把它当成重复执行下游的工具。
3. **不调用 `next()`**：这是有意的短路能力，例如认证失败或返回缓存；但误用会让后续中间件不执行。

这里统计的是下游中间件执行耗时，不保证包括响应数据全部传输完成的时间。Koa 设置 `ctx.body` 后，底层发送通常由框架继续处理；需要观察真实传输完成或连接中断时，要结合响应流的事件与指标。

## 五、Express、Koa 与 NestJS 怎么比较？

| 维度 | Express | Koa | NestJS |
| --- | --- | --- | --- |
| 主要定位 | Web 路由和中间件框架 | 精简的异步中间件框架 | 应用架构与工程组织框架 |
| 典型接口 | `req, res, next` | `ctx, next` | Controller、Provider、Guard 等 |
| 下游控制流 | `next()` 继续处理链 | `await next()` 等待下游返回 | 请求阶段分工，Interceptor 可环绕后续处理 |
| 应用组织 | 团队自行建立分层与约定 | 团队组合路由、校验等能力 | 提供 Module、DI 等约定与工具 |

**现代 Express 也支持 async 处理器。** Express 5 会将处理器返回的 Promise 拒绝传递给错误处理链；不能再说“Express 不支持异步”。但它的 `next()` 不因此变成可等待下游完成的 Koa 式 Promise。

Koa 核心不默认集成所有路由、请求体解析和认证功能，需要组合适当的中间件。NestJS 常用官方 Express 或 Fastify 适配器；不能把 Koa 说成可直接替换的官方适配方案。

框架不会自动解决 SQL、事务、权限规则和业务一致性。规模变大时，关键仍是边界、测试、错误约定和依赖治理。

## 六、认证逻辑应该放哪里？

框架只是承载机制：可以在中间件或 NestJS Guard 中提取凭证、验证身份，再在授权组件与 Service 中检查权限和资源归属。Session、JWT、OAuth 与 HTTPS 的区别见[认证、授权与 JWT](../18nestjs/s_nestjs_12-authentication_jwt)。

不要因为使用 JWT 就省略 CSRF、XSS 和对象级授权分析，也不要因为 CORS 限制了浏览器读取，就认为接口已经受保护。

## 七、学习回顾

> Node.js 原生 HTTP 提供请求和响应流，框架在此之上组织路由与通用逻辑。Koa 用 async 中间件和 await next 实现洋葱模型：进入时按注册顺序向内，返回时反向执行，适合计时和统一错误处理。Express 也能处理异步请求，但 next 的控制流不同；NestJS 则进一步提供模块和依赖注入，帮助组织更大的服务端应用。

**自测：** 删掉一个 `await next()` 后日志顺序如何变化？下游抛错时哪些“返回阶段”代码还会执行？`res.end()` 为什么不等于关闭连接？

> 来源：[Node.js HTTP](https://nodejs.org/docs/latest-v24.x/api/http.html)、[Koa 官方文档](https://koajs.com/)、[koa-compose](https://github.com/koajs/compose)、[Express 错误处理](https://expressjs.com/en/guide/error-handling.html)、[NestJS HTTP adapter](https://docs.nestjs.com/faq/http-adapter)
