# Vue Router 相关

## 了解浏览器 history API 吗

::: details

- `window.history.back()` 后退

- `window.history.forward()` 前进

- `window.history.go(x) `前进或者后退 x 步

> HTML5 history 新增了 2 个 API，可以在不进行刷新的情况下，操作浏览器的历史纪录

- `window.history.pushState()` 新增一个历史记录

- `window.history.repalceState()` 直接替换当前的历史记录
  :::

## 说下 $route 和 $router 的区别

::: details

- $route 是`路由信息对象`，包括 path，params，hash，query，fullPath，matched，name 等路由信息参数

- $router 是`路由实例对象`，包括了路由的跳转方法，钩子函数等
  :::

## vue-router 如何实现路由守卫

路由保护在应用开发过程中非常重要，几乎每个应用都要做各种路由权限管理。所以回答和代码部分都有：

// todo: 代码编写

::: details

### 基础

- vue-router 中保护路由的方法叫做路由守卫，主要用来通过跳转或取消的方式守卫导航。
- 路由守卫有三个级别：全局、路由独享、组件级。影响范围由大到小，例如全局的 `router.beforeEach()`，可以注册一个全局前置守卫，每次路由导航都会经过这个守卫，因此在其内部可以加入控制逻辑决定用户是否可以导航到目标路由；在路由注册的时候可以加入单路由独享的守卫，例如 `beforeEnter`，守卫只在进入路由时触发，因此只会影响这个路由，控制更精确；我们还可以为路由组件添加守卫配置，例如 `beforeRouteEnter`，会在渲染该组件的对应路由被验证前调用，控制的范围更精确了。
- 用户的任何导航行为都会走 `navigate` 方法，内部有个 `guards` 队列按顺序执行用户注册的守卫钩子函数，如果没有通过验证逻辑则会取消原有的导航。

### 原理

runGuardQueue(`guards`)链式的执行用户在各级别注册的守卫钩子函数，通过则继续下一个级别的守卫，不通过进入 catch 流程取消原本导航
:::

## vue-router 路由钩子在生命周期的体现

### Vue-Router 导航守卫

有的时候，需要通过路由来进行一些操作，比如最常见的登录权限验证，当用户满足条件时，才让其进入导航，否则就取消跳转，并跳到登录页面让其登录。

::: details 路由钩子

### 全局路由钩子

- router.beforeEach 全局前置守卫 进入路由之前
- router.beforeResolve 全局解析守卫（2.5.0+）在 beforeRouteEnter 调用之后调用
- router.afterEach 全局后置钩子 进入路由之后

### 单个路由独享钩子

- beforeEnter 不想全局配置守卫的话，可以为某些路由单独配置守卫，有三个参数 ∶ to、from、next

### 组件内钩子

- beforeRouteEnter 进入组件前触发
- beforeRouteUpdate   当前地址改变并且改组件被复用时触发。
  
举例来说，带有动态参数的路径foo/∶id，在 /foo/1 和 /foo/2 之间跳转的时候，由于会渲染同样的foa组件，这个钩子在这种情况下就会被调用
- beforeRouteLeave 离开组件被调用

这三个钩子都有三个参数 ∶to、from、next
:::

### 完整的路由导航解析流程

::: details 完整的路由导航解析流程（不包括其他生命周期）

- 触发进入其他路由
- 调用要离开路由的组件守卫 beforeRouteLeave
- 调用局前置守卫 beforeEach
- 在重用的组件里调用 beforeRouteUpdate
- 调用路由独享守卫 beforeEnter。
- 解析异步路由组件
- 在将要进入的路由组件中调用 beforeRouteEnter
- 调用全局解析守卫 beforeResolve
- 导航被确认
- 调用全局后置钩子的 afterEach 钩子。
- 触发 DOM 更新（mounted）
  :::

### 触发钩子的完整顺序

::: details 路由导航、keep-alive、和组件生命周期钩子结合起来的，触发顺序，假设是从 a 组件离开，第一次进入 b 组件 ∶

- beforeRouteLeave 路由组件的组件离开路由前钩子，可取消路由离开。
- beforeEach 路由全局前置守卫，可用于登录验证、全局路由 loading 等。
- beforeEnter 路由独享守卫
- beforeRouteEnter 路由组件的组件进入路由前钩子。
- beforeResolve 路由全局解析守卫
- afterEach 路由全局后置钩子
- beforeCreate 组件生命周期，不能访问 this。
- created 组件生命周期，可以访问 this，不能访问 dom。
- beforeMount 组件生命周期
- deactivated 离开缓存组件 a，或者触发 a 的 beforeDestroy 和 destroyed 组件销毁钩子。
- mounted 访问或操作 dom。
- activated 进入缓存组件，进入 a 的嵌套子组件（如果有的话）。
- 执行 beforeRouteEnter 回调函数 next。
  :::
