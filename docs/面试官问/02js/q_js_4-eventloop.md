# 事件循环 Event Loop

[直击概念 - 事件循环](../../%E7%9B%B4%E5%87%BB%E6%A6%82%E5%BF%B5/02js/s_js_1-%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF.md)

## 能说下 JavaScript 的事件循环机制吗

:::details 提示

- JavaScript 是单线程运行的
- 异步要基于回调来实现
- Event Loop 就是异步回调的实现原理
- 具体实现过程如下：

1. 计算机执行代码是一行行从上到下的执行，并将其放置到调用栈中调用，执行完就进行销毁
2. 遇到异步操作时，会将其进行“记录”（Promise 这些放入微任务队列中，setTimeout、Ajax 放入宏任务队列）；继续执行后续代码
3. 当前调用栈没有代码后，会检查任务队列，执行上述的 Promise、setTimeout、Ajax 等
4. 再次回到调用栈看有无代码，循环往复
   :::

## 微任务和宏任务的异同

:::details 提示

- 微任务和宏任务`都属于异步任务`
- 主要区别在于`执行顺序不同`
   :::

## 宏任务有哪些

:::details 提示

- setTimeout 和 setInterval 的回调函数
- DOM 事件
- XMLHttpRequest 中的 readystatechange 事件
- requestAnimationFrame 中的回调函数
- I/O 操作和网络请求的回调函数
- Node.js 中的文件读写操作的回调函数
- Node.js 中的进程事件
  :::

## 微任务有哪些

:::details 提示

- `Promise` 的回调函数（then、catch、finally）
- `MutationObserver` 监听函数
- `process.nextTick` 回调函数
- ~~Object.observe~~ 已废弃
  :::

## 微任务和宏任务的执行顺序

直接看题

```js
console.log('1')

setTimeout(() => {
  // a
  console.log('2')
  setTimeout(() => console.log('3'))
  new Promise(resolve => {
    console.log('4')
    resolve()
  }).then(() => {
    console.log('5')
  })
})

new Promise(resolve => {
  console.log('6')
  resolve()
})
  .then(() => {
    // b
    console.log('7')
  })
  .then(() => {
    // c
    console.log('8')
  })

console.log('9')

setTimeout(() => {
  // d
  console.log('10')

  new Promise(resolve => {
    console.log('11')
    resolve()
  })
    .then(() => {
      setTimeout(() => console.log('12'))
    })
    .then(() => {
      console.log('13')
    })
})
```

:::details 流程图提示
<Image src="/02js/micro_macro.png" alt="图示" :inline="false"/>
:::

:::details 答案
控制台依次打印：<br>
1 6 9 第一轮 macro task <br>
7 8 第一轮剩余 micro task <br>
2 第二轮 macro task <br>
4 5 第二轮 micro task <br>
10 11 第三轮 macro task <br>
13 第三轮 micro task <br>
3 第四轮 macro task <br>
12 第五轮 macro task
:::
