# Vue API、属性、方法

> 顺序不分先后，推荐使用 ctrl + K 站内搜索
> 答案仅供参考，欢迎补充、纠正。

## 说说 Vue.set 的实现原理

::: details

### Vue.set 

- 给对应和数组本身都增加了 `dep` 属性
- 当给对象新增不存在的属性则 **触发对象依赖的 watcher 去更新**
- 当修改数组索引时，我们调用数组本身的 splice 去更新数组（数组的响应式原理就是重写了 splice 等方法，调用 splice 就会触发视图更新）

### 使用

调用方法： `Vue.set(target, key, value)`

- target：要更改的数据源(可以是对象或者数组)
- key：要更改的具体数据
- value ：重新赋的值

以下方法调用会改变原始数组：

- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()
- Vue.set()

### vm.$set 的实现原理

- 如果目标是数组 ，直接使用数组的 splice 方法触发相应式；
- 如果目标是对象 ，会先判读属性是否存在，对象是否是响应式，最终如果要对属性进行响应式处理，则是通过调用 defineReactive 方法进行响应式处理（ defineReactive 方法就是 Vue 在初始化对象时，给对象属性采用 Object.defineProperty 动态添加 getter 和 setter 的功能所调用的方法）
  :::

## 说一下 v-if 与 v-show 的区别

::: details

- 显隐：v-if 是动态的向 DOM 树内添加或者删除 DOM 元素；v-show 是通过设置 DOM 元素的 display 样式属性控制显隐

- 编译：v-if 切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show 只是简单的基于 css 切换

- 条件：v-if 是惰性的，如果初始条件为假，则什么也不做。只有在条件第一次变为真时才开始局部编译；v-show 是在任何条件下(首次条件是否为真)都被编译，然后被缓存，而且 DOM 元素保留

- 性能：v-if 有更高的切换消耗；v-show 有更高的初始渲染消耗

- 场景：v-if 适合运营条件不大可能改变；v-show 适合频繁切换
  :::

## v-if 和 v-for 的优先级哪个高

::: details

- vue2 中 v-for 的优先级更高
- vue3 中 v-if 的优先级更高
  :::

## setup 中如何获得组件实例

::: details
在 setup 函数中，你可以使用 `getCurrentInstance()` 方法来获取组件实例。getCurrentInstance() 方法返回一个对象，该对象包含了组件实例以及其他相关信息。

> 需要注意的是，getCurrentInstance() 方法只能在 setup 函数中使用，而不能在组件的生命周期方法（如 created、mounted 等方法）中使用。另外，需要注意的是，如果在 setup 函数返回之前访问了 instance 对象，那么它可能是 undefined ，因此我们需要对其进行处理。
> :::

## 说说你对 slot 的理解

::: details

1. 在 HTML 中 slot 元素 ，作为 Web Components 技术套件的一部分，是 Web 组件内的一个占位符

2. 该占位符可以在后期使用自己的标记语言填充

3. template 不会展示到页面中，需要用先获取它的引用，然后添加到 DOM 中，在 Vue 中的概念也是如此

4. Slot 艺名插槽。我们可以理解为 solt 在组件模板中占好了位置，当使用该组件标签时候，组件标签里面的内容就会自动填坑（替换组件模板中 slot 位置），作为承载分发内容的出口
   :::

## slot 使用场景有哪些

::: details

- 通过插槽可以拓展组件，去更好地复用组件和对其做定制化处理
- 通过 slot 插槽向组件内部指定位置传递内容，完成这个复用组件在不同场景的应用
- 比如：布局组件、表格列、下拉选、弹框显示内容等
  :::
  
## watch 和 watchEffect 的区别

::: details
watch 和 watchEffect 都是监听器，watchEffect 是一个副作用函数。它们之间的区别有：

- watch：既要指明监视的数据源，也要指明监视的回调；watchEffect 可以自动监听数据源作为依赖，不用指明监视哪个数据，监视的回调中用到哪个数据，那就监视哪个数据
- watch 可以`访问改变之前和之后的值`；watchEffect `只能获取改变后的值`
- watch 运行的时候`不会立即执行`，值改变后才会执行；而 `watchEffect 运行后可立即执行`。这一点可以通过 watch 的配置项 `immediate` 改变。
- watchEffect 有点像 computed：
- computed 注重的计算出来的值（回调函数的返回值）， 所以必须要写返回值。
- watcheffect 注重的是过程（回调函数的函数体），所以不用写返回值

> watch 与 vue2.x 中 watch 配置功能一致，但也有两个小坑。
>
> - 监视 reactive 定义的响应式数据时，oldValue 无法正确获取，强制开启了深度监视（deep 配置失效）
> - 监视 reactive 定义的响应式数据中某个属性时，deep 配置有效。
>   :::

## 参考

- [2023 前端 Vue 面试题及答案](https://juejin.cn/post/7204844328111374391)
