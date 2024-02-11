# 事件循环 Event Loop

[复习可先看这](../../%E7%9B%B4%E5%87%BB%E6%A6%82%E5%BF%B5/02js/s_js_1-%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF.md)

## 能说下 JavaScript 的事件循环机制吗

:::details 提示

- JavaScript 是单线程运行的
- 异步要基于回调来实现
- Event Loop 就是异步回调的实现原理
- 具体循环过程 - 可继续展开说清楚
  :::

## 微任务和宏任务的异同

:::details 提示

1. 微任务和宏任务都属于异步任务，主要区别在于执行顺序不同
   :::

## 宏任务有哪些

:::details 提示

- script (待执行脚本)
- setTimeout
- setInterval
- setImmediate
- I/O
- UI render
  :::

## 微任务有哪些

:::details 提示

- Promise
- async / await
- process.nextTick (Node)
- ~~Object.observe~~(已废弃)
- mutationObserver (HTML5 API)
  :::

## 微任务和宏任务的执行顺序

直接看题

```js
console.log('1')

setTimeout(() => {
  // a
  console.log('2')
  setTimeout(() => console.log('3'))
  new Promise((resolve) => {
    console.log('4')
    resolve()
  }).then(() => {
    console.log('5')
  })
})

new Promise((resolve) => {
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

  new Promise((resolve) => {
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
