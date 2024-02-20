# Vue 核心

> 这里都是 Vue2 相关内容，毕竟还有很多公司在问 Vue 问题时是针对 Vue2（仅个人经历）建议还是先从 Vue3 来说

## 请说下 Vue 响应式原理

::: details

Vue2 采用数据劫持结合发布订阅模式（PubSub 模式）的方式，通过 `Object.defineProperty` 来劫持各个属性的 setter、getter，在`数据变动时`发布消息给订阅者，`触发相应的监听回调`。

当把一个 JS 对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，用 `Object.defineProperty` 将它们转为 `getter/setter`（用户不可见）。Vue 在内部进行`追踪依赖`，`在属性被访问和修改时通知变化`。

Vue 的数据双向绑定整合了 Observer，Compile 和 Watcher 三者，通过 `Observer 来监听自己的 model 的数据变化`，通过 `Compile 来解析编译模板指令`，最终利用 `Watcher 达到数据变化 -> 视图更新`（搭起 Observer 和 Compile 之间的通信桥梁）。

> Vue3.x 放弃了 Object.defineProperty ，使用 ES6 原生的 `Proxy`，来解决之前所存在的一些问题。
> :::

<Image src="/07vue/reactive.jpg" alt="Vue响应式原理"/>

## Vue 如何检测数组的变化

::: details

### Vue2.x 中是将数组的常用方法进行了重写

Vue 将 data 中的数组进行了原型链重写，指向了自己定义的数组原型方法。这样当调用数组 api 时，可以通知依赖更新。如果数组中包含着引用类型，会对数组中的引用类型再次递归遍历进行监控。这样就实现了监测数组变化。过程如下：

1. 初始化传入 data 数据执行 `initData`
2. 将数据进行观测 `new Observer`
3. 将数组原型方法`指向重写的原型`
4. 深度观察数组中的引用类型

### 以下情况无法检测到数组的变化

1. 当利用索引直接设置一个数组项时，例如 `vm.items[indexOfItem] = newValue`。可利用索引设置数组来解决：

```js
// vm.$set，Vue.set的一个别名
vm.$set(vm.items, indexOfItem, newValue)
```

2. 当修改数组的长度时，例如 `vm.items.length = newLength`。修改数组的长度的替代方案：

```js
// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)
```

:::

## v-model 双向绑定的原理是什么

::: details
v-model 本质就是：**value + input 方法的语法糖**。可以通过 model 属性的 prop 和 event 属性来进行自定义。原生的 v-model，会根据标签的不同生成不同的事件和属性。例如：

- text 和 textarea 元素，使用 `value` 属性和 `input` 事件
- checkbox 和 radio，使用 `checked` 属性和 `change` 事件
- select 字段将 `value` 作为 prop 并将 `change` 作为事件

因此接下去我们执行以下 3 个步骤，实现数据的双向绑定：

- 实现一个`监听器 Observer`，用来劫持并监听所有属性，如果有变动的，就通知订阅者。
- 实现一个`订阅者 Watcher`，可以收到属性的变化通知并执行相应的函数，从而更新视图。
- 实现一个`解析器 Compile`，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。
  :::

## 参考

- [2023 高频前端面试题合集之 Vue（上篇）](https://juejin.cn/post/7208005892313579576#heading-4)
