# Vue API

> 顺序不分先后，推荐使用 ctrl + K 站内搜索
> 答案仅供参考，欢迎补充、纠正。

## 属性

### v-model 是如何实现的

::: details
v-model 本质上是一个 value 和 input 语法糖（Vue2），会对用户的输入做一些特殊处理以达到更新数据，而所谓的处理其实就是给使用的元素默认绑定属性和事件。

```html
<input v-model="something" />
<!-- 相当于 -->
<input
  v-bind:value="something"
  v-on:input="something = $event.target.value" />
```

:::

### v-model 在 Vue2 和 Vue3 中的区别

::: details

- `修改默认 prop 名和事件名`

  当用在自定义组件上时， v-model 默认绑定的 prop 名从 value 变为 `modelValue` ，而事件名也从默认的 input 改为 `update:modelValue`

- 废除 model 选项

```html
<!-- 要修改默认 prop 名，只需在 v-model 后面接上 :propName，例如修改为 title -->
<my-input v-model:title="msg"></my-input>
<!-- 等同于 -->
<my-input
  :title="msg"
  @update:title="msg = $event"></my-input>
```

:::

### v-html 的原理

::: details
v-html 会`先移除节点下的所有节点`，调用 DOM 方法，通过 addProp `添加 innerHTML 属性`，归根结底还是设置 innerHTML 为 v-html 的值
:::

### 用过 .sync 修饰符吗

::: details 是什么，怎么用

- 父组件 my-prop-name.sync 子组件 @update:my-prop-name 的模式来替代事件触发，实现父子组件间的双向绑定
- 一个组件可以多个属性用 .sync 修饰符，可以同时双向绑定多个“prop”
- .sync 针对更多的是各种各样的状态，是状态的互相传递，是 status
  :::

### 说一下 v-if 与 v-show 的区别

::: details 考虑编译、条件、性能、场景等方面：

- `显隐`：v-if 是动态的向 DOM 树内添加或者删除 DOM 元素；v-show 是通过设置 DOM 元素的 display 样式属性控制显隐

- `编译`：v-if 切换有一个`局部编译/卸载`的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show 只是简单的基于 css 切换

- `条件`：v-if 是惰性的，如果初始条件为假，则什么也不做。只有在条件第一次变为真时才开始`局部编译`；v-show 是在任何条件下(首次条件是否为真)都被编译，然后被缓存，而且 DOM 元素保留

- `性能`：v-if 有更高的切换消耗；v-show 有更高的初始渲染消耗

- `场景`：v-if 适合条件不大可能改变；v-show 适合频繁切换
  :::

### v-if 和 v-for 的优先级哪个高

::: details 区分 Vue2 和 Vue3 的差异

- vue2 中 v-for 的优先级更高
- vue3 中 v-if 的优先级更高
  :::

### computed 和 watch 的区别

::: details 可从缓存，是否支持异步，运用场景等方面进行比较
（1）是否支持缓存

- Computed 支持缓存，只有依赖的数据发生了变化，才会重新计算
- Watch 不支持缓存，只要数据一变，它就会触发相应的操作

（2）是否支持异步

- Computed 不支持异步监听
- Watch 支持异步监听

（3）运用场景

- 当需要进行数值计算，并且依赖于其它数据时使用 computed
- 当需要执行异步或开销较大的操作时，应该使用 watch
  :::

### watch 和 watchEffect 的区别

::: details watch 和 watchEffect 都是监听器，watchEffect 是一个副作用函数，它们之间的区别有：

- watch：既要指明监视的数据源，也要指明监视的回调；watchEffect 可以自动监听数据源作为依赖，不用指明监视哪个数据，监视的回调中用到哪个数据，那就监视哪个数据
- watch 可以`访问改变之前和之后的值`；watchEffect `只能获取改变后的值`
- watch 运行的时候`不会立即执行`，值改变后才会执行；而 `watchEffect 运行后可立即执行`。这一点可以通过 watch 的配置项 `immediate` 改变。
- watchEffect 有点像 computed：
- computed 注重的计算出来的值（回调函数的返回值）， 所以必须要写返回值。
- watcheffect 注重的是过程（回调函数的函数体），所以不用写返回值

---

watch 与 vue2.x 中 watch 配置功能一致，但也有两个小坑。

1. 监视 reactive 定义的响应式数据时，oldValue 无法正确获取，强制开启了深度监视（deep 配置失效）
2. 监视 reactive 定义的响应式数据中某个属性时，deep 配置有效。
   :::

### 说一下 ref 的作用是什么

## 方法

### v-on 常用的修饰符

::: details

- `.stop` 调用 event.stopPropagation()，阻止冒泡事件
- `.prevent` 调用 event.preventDefault()，阻止默认行为
- `.native` 监听组件根元素的原生事件
  :::

### data 为什么是一个函数而不是对象

::: details
JS 中的对象是引用类型的数据，当多个实例引用同一个对象时，只要一个实例对这个对象进行操作，其他实例中的数据也会发生变化。

而在 Vue 中，更多的是想要`复用组件`，那就需要每个组件有`自己的作用域`，所以组件的数据不能写成对象的形式，而是要写成函数的形式。这样当每次复用组件的时候，就会通过函数`返回一个新的 data`，也就是说每个组件都有自己的私有数据空间，它们各自维护自己的数据，不会干扰其他组件的正常运行。
:::

### 常见事件修饰符及其作用

::: details

- `.stop` 阻止事件冒泡（等同于 JS 中的 event.stopPropagation()）
- `.prevent` 阻止事件的默认行为，等同于 JS 中的 event.preventDefault()
- `.capture` 使事件捕获由外到内，默认是冒泡（由内到外）
- `.self` 只会触发自己范围内的事件，不包含子元素
- `.once` 只会触发一次
  :::

## directive 自定义指令有哪些生命周期

### Vue2 -> directive

::: details Vue2 自定义指令的生命周期，有 5 个事件钩子：

- `bind` 只调用一次，指令`第一次绑定到元素时`调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
- `inserted` 被绑定元素`插入父节点`时调用（父节点存在即可调用，不必存在于 document 中）。
- `update` 被绑定元素所在的`模板更新时`调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新（详细的钩子函数参数见下）。
- `componentUpdated` 被绑定元素所在模板`完成一次更新周期`时调用。
- `unbind` 只调用一次， `指令与元素解绑时`调用。

钩子函数的参数 (包括 el，binding，vnode，oldVnode)：

1. el: 指令所绑定的元素，可以用来直接操作 DOM 。
2. binding: 一个对象，包含以下属性：name: 指令名、value: 指令的绑定值、oldValue: 指令绑定的前一个值、expression: 绑定值的字符串形式、arg: 传给指令的参数、modifiers: 一个包含修饰符的对象。
3. vnode: Vue 编译生成的虚拟节点。
4. oldVnode: 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
   :::

### Vue3 -> directive

::: details Vue3 自定义指令的生命周期，有 7 个事件钩子

- `created` 在绑定元素的 `attribute 前`或`事件监听器应用前`调用
- `beforeMount` 在元素`被插入到 DOM 前`调用
- `mounted` 在绑定元素的父组件及他自己的所有子节点都`挂载完成后`调用
- `beforeUpdate` 绑定元素的父组件更新前调用
- `updated` 在绑定元素的父组件及他自己的所有子节点都更新后调用
- `beforeUnmount` 绑定元素的父组件卸载前调用
- `unmounted` 绑定元素的父组件卸载后调用
  :::

### setup 中如何获得组件实例

::: details
在 setup 函数中，你可以使用 `getCurrentInstance()` 方法来获取组件实例。getCurrentInstance() 方法返回一个对象，该对象包含了组件实例以及其他相关信息。

> 需要注意的是，getCurrentInstance() 方法只能在 setup 函数中使用，而不能在组件的生命周期方法（如 created、mounted 等方法）中使用。另外，需要注意的是，如果在 setup 函数返回之前访问了 instance 对象，那么它可能是 undefined ，因此我们需要对其进行处理。

:::

## Vue 的修饰符

### 事件修饰符

::: details
|修饰符|说明|
|-|-|
|`.stop`|阻止冒泡。|
|`.prevent`|阻止默认事件。|
|`.capture`|使用事件捕获模式。|
|`.self`|只在当前元素本身触发。|
|`.once`|只触发一次。|
|`.passive`|默认行为将会立即触发|
:::

### 按键修饰符

::: details
|修饰符|说明|
|-|-|
|`.left`|左键|
|`.right`|右键|
|`.middle`|滚轮|
|`.enter`|回车|
|`.tab`|制表键|
|`.delete`|捕获| “删除” 和 “退格” 键
|`.esc`|返回|
|`.space`|空格|
|`.up`|上|
|`.down`|下|
|`.ctrl`|ctrl| 键
|`.alt`|alt| 键
|`.shift`|shift| 键
|`.meta`|meta| 键
:::

### 表单修饰符 (v-model)

::: details
|修饰符|说明|
|-|-|
|`.lazy`| 通过这个修饰符，转变为在 change 事件再同步|
|`.number`| 自动将用户的输入值转化为数值类型|
| `.trim`| 自动过滤用户输入的首尾空格|
:::

## API

### 对 nextTick 的理解

::: details
官方定义：在**下次 DOM 更新循环结束之后执行延迟回调**。在修改数据之后立即使用这个方法，`获取更新后的 DOM`

个人理解：Vue 在`更新 DOM 时是异步`执行的。当数据发生变化，Vue 将开启一个`异步更新队列`，视图需要等队列中所有数据变化完成之后，再统一进行更新。

总结 nextTick 代码的流程：

- 把回调函数放入 callbacks 等待执行
- 将执行函数放到微任务或者宏任务中
- 事件循环到了微任务或者宏任务，执行函数依次执行 callbacks 中的回调
  :::

### 什么是 mixin

::: details

- 混入（mixin）提供了一种非常灵活的方式，来分发  Vue 组件中的`可复用功能`
- 一个混入对象可以包含任意组件选项（data、methods、mounted 等）
- 当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项
- 当组件和混入对象含有同名选项时进行合并
- 数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先
  :::

### Vue.set 的实现原理

::: details

Vue.set，调用方法： `Vue.set(target, key, value)`

- 给对应和数组本身都增加了 `dep` 属性
- 当给对象新增不存在的属性则 **触发对象依赖的 watcher 去更新**
- 当修改数组索引时，我们调用数组本身的 splice 去更新数组（数组的响应式原理就是重写了 splice 等方法，调用 splice 就会触发视图更新）

vm.$set 的实现原理

- 如果目标是数组 ，直接使用数组的 splice 方法触发相应式；
- 如果目标是对象 ，会先判读属性是否存在，对象是否是响应式，最终如果要对属性进行响应式处理，则是通过调用 defineReactive 方法进行响应式处理（ defineReactive 方法就是 Vue 在初始化对象时，给对象属性采用 Object.defineProperty 动态添加 getter 和 setter 的功能所调用的方法）
  :::

### Vue.extend 使用和原理

::: details
Vue.extend 使用基础 Vue 构造器，创建一个子类。参数是一个包含组件选项的对象。

其实就是一个子类构造器，extend 是 Vue 组件的核心 api，实现思路就是`使用原型继承的方法返回了 Vue 的子类`，并且利用 `mergeOptions` 把传入组件的 options 和父类的 options 进行了合并。

```js
export default function initExtend(Vue) {
  // 组件的唯一标识
  let cid = 0
  // 创建子类继承Vue父类，便于属性扩展
  Vue.extend = function (extendOptions) {
    // 创建子类的构造函数，并且调用初始化方法
    const Sub = function VueComponent(options) {
      // 调用Vue初始化方法
      this._init(options)
    }
    Sub.cid = cid++
    // 子类原型指向父类
    Sub.prototype = Object.create(this.prototype)
    // constructor指向自己
    Sub.prototype.constructor = Sub
    // 合并自己的options 和 父类的 options
    Sub.options = mergeOptions(this.options, extendOptions)
    return Sub
  }
}
```

:::

## 参考

- [2023 前端 Vue 面试题及答案](https://juejin.cn/post/7204844328111374391)
- [Vue2 源码解读 - 深入理解 this.$nextTick()](https://juejin.cn/post/7157552181582200863)
- [2023 高频前端面试题合集之 Vue（下篇）](https://juejin.cn/post/7275943802934149160)
- [Vue - 自定义指令](https://cn.vuejs.org/guide/reusability/custom-directives.html)