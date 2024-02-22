# keep-alive

## 什么是 keep-alive

`<keep-alive>` 是 Vue 的内置组件，可以使被包含的组件`保留状态`，或`避免重新渲染`，从而实现组件缓存，它使得组件切换过程中将状态保留在`内存`中，防止重复渲染 DOM。

::: tip
`<keep-alive>` 在`包裹动态组件`时，会`缓存不活动的组件实例`，而不是销毁它们。和 `<transition>` 相似，`<keep-alive>` 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。
:::

## keep-alive 的生命周期执行

页面第一次进入，钩子的触发顺序：

- created
- mounted
- activated
- 退出时触发 deactivated

当再次进入（前进或者后退）时，只触发 activated

::: tip 建议

- 可将只执行一次的事件挂载方法都放到 mounted 中
- 可将组件每次进去执行的方法放在 activated 中
  :::

## 基本用法

```html
<!--被keepalive包含的组件会被缓存-->
<keep-alive>
  <component />
</keep-alive>
```

被 keepalive 包含的组件不会被再次初始化，也就意味着**不会重走生命周期函数**。但有时我们希望缓存的组件可以能够再次进行渲染，Vue 为我们解决了这个问题。被包含在 `keep-alive` 中创建的组件，会多出两个生命周期的钩子: `activated` 与 `deactivated`

- `activated` 当 keepalive 包含的组件`再次渲染`时触发
- `deactivated` 当 keepalive 包含的组件被`销毁`时触发

### 参数

keepalive 可以接收 3 个属性做为参数进行匹配对应的组件进行缓存:

- `include` **要缓存的组件**（可以为字符串，数组，以及正则表达式，只有匹配的组件会被缓存）

- `exclude` **要排除的组件**（以为字符串，数组，以及正则表达式，任何匹配的组件都不会被缓存）

- `max` **缓存组件的最大值**（类型为字符或者数字，可以控制缓存组件的个数）

::: warning
当使用正则表达式或者数组时，一定要使用 **v-bind**
:::

```vue
<!-- 将（只）缓存组件name为a或者b的组件, 结合动态组件使用 -->
<keep-alive include="a,b">
  <component></component>
</keep-alive>

<!-- 组件name为c的组件不缓存(可以保留它的状态或避免重新渲染) -->
<keep-alive exclude="c"> 
  <component></component>
</keep-alive>

<!-- 使用正则表达式，需使用v-bind -->
<keep-alive :include="/a|b/">
  <component :is="view"></component>
</keep-alive>

<!-- 动态判断 -->
<keep-alive :include="includedComponents">
  <router-view></router-view>
</keep-alive>

<!-- 如果同时使用include,exclude,那么exclude优先于include， 下面的例子只缓存a组件 -->
<keep-alive include="a,b" exclude="b"> 
  <component></component>
</keep-alive>

<!-- 如果缓存的组件超过了max设定的值5，那么将删除第一个缓存的组件 -->
<keep-alive exclude="c" max="5"> 
  <component></component>
</keep-alive>
```

## 结合 vue-router 使用

### 所有路径下的视图组件都会被缓存

```vue
<keep-alive>
  <router-view>
    <!-- 所有路径匹配到的视图组件都会被缓存！ -->
  </router-view>
</keep-alive>
```

### router-view 里缓存某个组件

- 用 include (exclude 例子类似)

::: warning 缺点
需要知道`组件的 name`，项目复杂的时候不是很好的选择
:::

```vue
<keep-alive include="a">
  <router-view>
    <!-- 只有路径匹配到的 include 为 a 组件会被缓存 -->
  </router-view>
</keep-alive>
```

- 使用 meta 属性

::: tip 优点
不需要例举出需要被缓存组件名称，使用 `$route.meta` 的 `keepAlive` 属性
:::

```vue
<keep-alive>
  <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>
```

需要在 router 中设置 router 的元信息 meta：

```js
//...router.js
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      meta: {
        keepAlive: false, // 不需要缓存
      },
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
  ],
})
```

### router.meta 扩展

假设这里有 3 个路由： A、B、C。

需求：

- 默认显示 A
- B 跳到 A，A 不刷新
- C 跳到 A，A 刷新

实现思路：

1. 在 A 路由里面设置 meta 属性

```js
// router.js
{
  path: '/',
  name: 'A',
  component: A,
  meta: {
    keepAlive: true // 需要被缓存
  }
}
```

2. 在 B 组件里面设置 `beforeRouteLeave`

```js
// B 组件
export default {
  data() {
    return {}
  },
  methods: {},
  beforeRouteLeave(to, from, next) {
    // 设置下一个路由的 meta
    // 让 A 缓存，即不刷新
    to.meta.keepAlive = true
    next()
  },
}
```

3. 在 C 组件里面设置 `beforeRouteLeave`

```js
// C 组件
export default {
  data() {
    return {}
  },
  methods: {},
  beforeRouteLeave(to, from, next) {
    // 设置下一个路由的 meta
    // 让 A 不缓存，即刷新
    to.meta.keepAlive = false
    next()
  },
}
```

这样便能实现 B 回到 A，A 不刷新；而 C 回到 A 则刷新。

## 防坑指南

1. keep-alive `先匹配被包含组件的 name 字段`，如果 name 不可用，则匹配当前组件 components 配置中的注册名称。
2. keep-alive `不会在函数式组件中正常工作`，因为它们没有缓存实例。
3. 当匹配条件同时在 include 与 exclude 存在时，以 `exclude 优先级最高`(当前 vue 2.4.2 version)。比如：包含于排除同时匹配到了组件 A，那组件 A 不会被缓存。
4. 包含在 keep-alive 中，但`符合 exclude ，不会调用 activated 和 deactivated`。

## 总结

- 使用路由不需要关心哪个页面跳转过来的，只要 router.go(-1) 就能回去，不需要额外参数
- 在非单页应用的时候，keep-alive 并不能有效的缓存了
- keep-alive 生命周期钩子函数：activated、deactivated
- 使用 `<keep-alive>` 会将数据保留在内存中，如果要在每次进入页面的时候获取最新的数据，需要在 `activated` 阶段获取数据，**承担原来 created 钩子中获取数据的任务**。

## 参考

- [说说你对 Vue 的 keep-alive 的理解](https://juejin.cn/post/7204854015464161336)——bb_xiaxia1998
