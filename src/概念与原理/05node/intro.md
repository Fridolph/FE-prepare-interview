# Node.js 学习入口

> 从前端 JavaScript 走向服务端：理解代码在什么环境中运行、请求如何并发处理，以及文件、网络、资源与依赖如何管理。本模块按原有四项大纲整理，示例以 Node.js 24 为学习基线。

## 一、先建立运行时的认识

**Node.js 是基于 V8 的 JavaScript 运行时，不是语言，也不是 Web 框架。** V8 负责执行 JavaScript，Node.js 提供文件、网络、进程等服务端能力，libuv 等底层组件参与事件循环和异步 I/O 调度。

| 层次 | 解决的问题 | 示例 |
| --- | --- | --- |
| JavaScript / TypeScript | 用什么语言描述逻辑 | Promise、类型、模块语法；TS 通常还需要类型检查和转换 |
| Node.js | 代码在哪里执行，如何使用系统能力 | 文件、HTTP、Stream、进程、事件循环 |
| Express / Koa / Fastify | 如何组织 Web 请求处理 | 路由、中间件、请求与响应 |
| NestJS | 如何组织服务端应用架构 | Module、Controller、Provider、DI、Guard |

浏览器和 Node.js 都能执行 JavaScript，但宿主 API 不同：Node.js 没有浏览器 DOM，浏览器不能直接使用 `node:fs`。Node.js 也提供部分 Web API，例如 `fetch`，因此不能简单用“有没有 fetch”区分二者。

## 二、建议按这个顺序学习

| 顺序 | 文章 | 学完应该能解释什么 |
| --- | --- | --- |
| 1 | [常用模块与资源管理](./s_node_1-core_modules) | ESM/CJS、文件与路径、Buffer、Stream、事件和错误处理 |
| 2 | [事件循环与异步并发](./s_node_2-event_loop) | 单线程为何能处理多个请求、微任务与事件循环、CPU 密集任务的边界 |
| 3 | [HTTP 服务与 Koa 洋葱模型](./s_node_3-http_koa) | 原生 HTTP 如何工作、中间件如何组合、Express/Koa/NestJS 各负责什么 |
| 4 | [npm、Yarn、pnpm 与依赖管理](./s_node_4-package_management) | package.json、版本范围、锁文件、依赖布局与可重复安装 |

每篇按“概念 → 示例 → 工程边界 → 学习回顾”展开。先理解最小机制，再通过框架承接重复工作，最后验证异常和资源边界。

## 三、用一次请求串起知识点

```text
客户端发送 HTTP 请求
    ↓
Node.js 接收网络事件，触发请求处理逻辑
    ↓
框架进行路由、中间件处理，校验身份与输入
    ↓
业务代码发起数据库或其他异步 I/O
    ↓
等待期间，事件循环可以推进其他已就绪的任务
    ↓
I/O 完成后继续业务逻辑，构造响应
    ↓
发送响应并处理日志、错误及资源释放
```

这里的并发主要依赖异步等待与任务调度，不能推导出“所有 JavaScript 都同时执行”。同一个事件循环线程上的长时间同步计算，会拖慢其他请求。

## 四、继续连接 NestJS、数据库与部署

- **理解框架分层**：[NestJS 学习入口](../18nestjs/intro)，把 HTTP 请求处理扩展为模块、依赖注入与业务组织。
- **认识认证边界**：[认证、授权与 JWT](../18nestjs/s_nestjs_12-authentication_jwt)，理解凭证、权限、刷新与撤销，而不是手写密码学。
- **认识请求顺序**：[NestJS 请求生命周期](/学习自测/18nestjs/q_nestjs_7-request_lifecycle)，区分 Middleware、Guard、Pipe 和 Interceptor。
- **理解持久化**：[数据库学习入口](../19database/intro)，继续学习 SQL、事务与连接管理。
- **理解进程与下线**：[Node 进程管理与优雅停机](../20deploy/s_deploy_4-node_process)，理解多实例、在途请求排空与连接池关闭。

## 五、学习练习怎么记录？

可以先完成四个小实验：流式复制文件、观察异步执行顺序、运行 HTTP 健康检查接口、编写 Koa 中间件。每次记录 **Node 版本、代码位置、运行命令、预期结果、实际结果和异常场景**。

示例不等于完整生产方案：小实验用于解释机制，真正的服务还需要业务约束、测试、可观测性与部署验证。实践记录可参考[学习路线](/学习路线/index)。

> 来源：[Node.js 官方学习文档](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)、[Node.js API](https://nodejs.org/docs/latest-v24.x/api/)、[libuv 设计概览](https://docs.libuv.org/en/v1.x/design.html)
