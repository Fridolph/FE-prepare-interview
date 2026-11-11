# 事件循环与异步并发

> 事件循环不是单纯的输出顺序题。更重要的是理解：Node.js 为什么能并发处理 I/O，以及哪些代码会拖慢所有请求。

## 一、Node.js 是单线程吗？

**通常一个 Node.js JavaScript 执行环境使用一个主线程执行 JS，但整个进程并不只有一个线程。** V8、libuv 线程池以及显式创建的 Worker 等都可能涉及其他线程。

- 网络 I/O 通常依赖操作系统的异步机制或事件通知，并不是每个连接分配一个线程。
- 文件系统的许多异步操作、部分 DNS、加密和压缩操作会使用 libuv 线程池。
- 具体 API 的实现路径不同，不能把所有异步任务都理解为“丢进线程池”。

单线程 JS 不代表一次只能服务一个请求。一个请求等待数据库响应时，事件循环可以处理其他请求的就绪回调；但同一个 JS 线程上的回调仍逐个执行。

## 二、并发、并行、异步、非阻塞

| 概念 | 关注点 | 例子 |
| --- | --- | --- |
| 并发 | 多个任务在时间上交错推进 | 多个请求分别等待网络响应 |
| 并行 | 多个执行单元同时工作 | 多个 Worker 在多核 CPU 上计算 |
| 异步 | 调用后通过未来的回调或 Promise 交付结果 | `fs.promises.readFile()` |
| 非阻塞 | 不占住当前执行线程一直等待 | 等待网络 I/O 时让出 JS 执行机会 |

Promise 不会自动创建线程，`async` 也不会把函数中的同步代码移到后台。

```js
async function calculate() {
  // 即使函数是 async，这段同步循环仍在当前 JS 线程执行。
  let result = 0
  for (let i = 0; i < 10_000_000; i++) result += i
  return result
}

await calculate()
```

## 三、事件循环的主要阶段

以下是帮助理解的简化环路，不是某段脚本固定的完整调度轨迹：

```text
timers：达到时间阈值的定时器回调
  → pending callbacks：部分延迟到后续循环的 I/O 回调
  → idle / prepare：内部阶段
  → poll：处理 I/O 事件，必要时等待事件
  → check：setImmediate 回调
  → close callbacks：部分关闭回调
  → 后续循环
```

理解时注意三个边界：

1. **定时器是时间阈值，不是精确定时。** `setTimeout(fn, 0)` 不代表立刻执行，主线程繁忙会使实际执行延迟。
2. **poll 等待不等于执行阻塞业务。** 在没有就绪任务等条件下，底层可以等待 I/O；这是事件循环的调度行为，与在 JS 中执行长时间同步循环不同。
3. **实现细节具有版本差异。** 从 libuv 1.45.0（Node.js 20 所采用的新行为）开始，定时器处理调整为在 poll 之后进行，而非旧行为中 poll 前后都可能处理。不要把旧示意图当成每个版本都不变的时间表。

## 四、nextTick 与 Promise 微任务

`process.nextTick()` 不属于上表中的一个独立事件循环阶段。Node.js 会在相应的回调返回等检查点处理 nextTick 队列和 Promise 微任务。

在下面这个**CommonJS 顶层脚本**中，可以观察常见顺序；保存为 `order.cjs`：

```js
console.log('sync')
process.nextTick(() => console.log('nextTick'))
Promise.resolve().then(() => console.log('promise'))
queueMicrotask(() => console.log('microtask'))
console.log('end')

// sync → end → nextTick → promise → microtask
```

Promise 回调与 `queueMicrotask()` 都使用微任务队列，在本例中按入队顺序执行。nextTick 通常先于这些微任务处理，但不要把这个结论套用到所有嵌套情况。

**ESM 顶层执行上下文不同**：同样代码保存为 `.mjs`，通常观察到 `sync → end → promise → microtask → nextTick`，因为模块求值本身发生在异步处理上下文中。讨论顺序前，应先说明模块格式、注册位置与 Node 版本。

递归安排 nextTick 或不断生成微任务都可能让 I/O 长时间得不到执行。普通用户代码若只需要安排微任务，通常优先考虑 `queueMicrotask()`；不要为了“优先级高”而大量使用 nextTick。

## 五、setTimeout 与 setImmediate 谁先执行？

在顶层代码中，不应依赖 `setTimeout(fn, 0)` 与 `setImmediate(fn)` 的固定先后顺序，调度时机和运行环境都可能影响结果。

在典型的 I/O 回调里注册二者，可以观察 `setImmediate` 先执行。保存为 `io-order.mjs`：

```js
import { readFile } from 'node:fs'

readFile(new URL(import.meta.url), error => {
  if (error) throw error
  setTimeout(() => console.log('timeout'), 0)
  setImmediate(() => console.log('immediate'))
})

// 此 I/O 回调场景：immediate → timeout
```

这有助于理解 poll/check 与定时器的关系，但业务逻辑不要依赖两个独立调度 API 的竞速来保证正确性；需要顺序时，明确建立 Promise 或回调依赖。

## 六、await 为什么不会阻塞整个服务？

`await` 会暂停**当前 async 函数的后续执行**；如果等待的是尚未完成的异步 I/O，JS 线程可以处理其他任务。Promise 完成后，该函数的后续部分通过微任务机制继续执行。

但有两点容易误解：

- `await expensiveSyncFunction()` 会先执行同步函数，再等待其结果；同步计算期间仍会阻塞。
- `await Promise.resolve()` 只让后续部分进入微任务，不保证让出机会给计时器和网络 I/O。

处理大批工作时，可以分批并通过合适的调度方式让出事件循环，但这只是改善调度公平性，并不增加总算力。

## 七、CPU 密集任务与并发控制

| 场景 | 常见选择 | 边界 |
| --- | --- | --- |
| 网络、数据库 I/O | 异步 API + 合理并发上限 | 上游 API、连接池和内存都有容量限制 |
| CPU 密集 JS | Worker Threads、独立计算服务 | Worker 有启动、传输和调度开销，通常要复用线程池 |
| 运行外部程序 | `child_process` | 避免拼接不可信 shell 命令，管理输出和超时 |
| 扩展 Web 服务吞吐 | 多进程或多副本 + 流量分配 | 内存状态不自动共享，数据库总连接数也会增加 |

`Promise.all()` 是聚合结果和错误的工具，不是并发限流器；传入已经启动的任务时，它不会替你控制启动数量。某个任务失败后，其他任务也不会因此自动取消。

HTTP 请求超时也不代表底层数据库查询或其他任务自动停止，需要在相关 API 支持的范围内传播取消信号、设置超时，并处理最终结果。

## 八、线上怎么判断事件循环出了问题？

可以结合请求延迟、CPU、内存、GC、连接池等待与事件循环延迟观察。Node.js 的 `node:perf_hooks` 提供 `monitorEventLoopDelay()`、`performance.eventLoopUtilization()` 等工具；它们是诊断信号，不能仅凭一个指标认定根因。

典型问题包括：同步文件操作、超大 JSON 解析、复杂正则、密集日志、长时间计算，以及无限制并发造成的资源争用。优化前先用 profiling 与真实负载验证，不能把所有慢请求都归因于“Node 单线程”。

## 九、学习回顾

> Node.js 通常用单个 JS 主线程配合事件循环、操作系统和线程池推进异步工作，所以它可以同时处理多个等待 I/O 的请求。但 JS 回调仍在同一线程逐个执行，长时间同步计算会影响其他请求。await 只暂停当前函数，不会自动把计算搬到其他线程；遇到 CPU 密集任务或大量外部请求，需要分别考虑 Worker 和并发控制。

**自测：** 在 `.cjs` 与 `.mjs` 中比较微任务顺序；模拟同步计算并观察另一个请求延迟；限制并发后比较吞吐、内存和失败率，而不只观察平均耗时。

> 来源：[Node.js Event Loop](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick)、[Don't Block the Event Loop](https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop)、[process.nextTick](https://nodejs.org/docs/latest-v24.x/api/process.html#processnexttickcallback-args)、[Worker threads](https://nodejs.org/docs/latest-v24.x/api/worker_threads.html)、[Performance hooks](https://nodejs.org/docs/latest-v24.x/api/perf_hooks.html)
