# 如何阻止阻止重复请求

## 背景

项目当中前端代码会遇到同一个请求向服务器发了多次的情况，我们要避免服务器资源浪费，同一个请求一定时间只允许发一次请求

## 思路

- 如果业务简单,例如同一个按钮防止多次点击,我们可以用定时器做防抖处理
- 如果业务复杂,例如多个组件通过代码,同一个请求发多次,这个时候防抖已经不好处理了,最好是对重复的 ajax 请求统一做取消操作
- 封装统一的请求函数，如 之前提到的 Promise 并发控制
- VueUse - useRequest()

## 实现

### 1. 通过定时器做防抖处理

> 可以用第三方封装的工具函数例如 lodash 的 debounce 方法来简化防抖的代码

```js
// 调用lodash的防抖方法debounce
// 实现连续点击按钮多次, 0.3秒后调用 1 次接口
methods: {
  onClick: _.debounce(async function () {
    let res = await sendPost({ key1: 'xxx', key2: 20 })
    console.log('请求的结果', res.data)
  }, 300)
}
```

存在问题：无法解决多个按钮件的重复请求的发送问题，例如下面两种情况：

- 在点击事件上做防抖
- 在接口方法做防抖

因为 `_.debounce` 我们用定时器写的防抖调用的是回调函数，无法将接口请求结果作为返回值返回给调用者。由于存在该问题，所以我们继续优化，采用新的解决方案

2. 通过取消 ajax 请求

直接对请求方法做处理，通过 Ajax 的 API 方法把重复的请求给取消掉。

- 通过调用 XMLHttpRequest 对象实例的 abort 方法把请求给取消掉
- 通过 `axios` 的 `CancelToken` 对象实例 cancel 方法把请求给取消掉

### 2. 通过 axios 拦截器 Interceptor 取消重复请求

通过请求拦截器取消重复请求

#### 取消重复请求

通过 axios 请求拦截器,在每次请求前把请求信息和请求的取消方法放到一个 map 对象当中,并且判断 map 对象当中是否已经存在该请求信息的请求,如果存在取消上传请求

<Image src="../../public/13slt/cancel-1.png" alt="请求拦截器处理流程图" />

::: code-group

```js [axios相关封装]
//存储请求信息和取消方法的的map对象
const pendingRequest = new Map()

//根据请求的信息(请求方式,url,请求get/post数据),产生map的key
function getRequestKey(config) {
  const { method, url, params, data } = config
  return [method, url, Qs.stringify(params), Qs.stringify(data)].join('&')
}

//请求拦截器
axios.interceptors.request.use(
  function (config) {
    //根据请求的信息(请求方式,url,请求get/post数据),产生map的key
    let requestKey = getRequestKey(config)
    //判断请求是否重复
    if (pendingRequest.has(requestKey)) {
      //取消上次请求
      let cancel = pendingRequest.get(requestKey)
      cancel()
      //删除请求信息
      pendingRequest.delete(requestKey)
    }
    //把请求信息,添加请求到map当中
    // 生成取消方法
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken(cancel => {
        // 把取消方法添加到map
        if (!pendingRequest.has(requestKey)) {
          pendingRequest.set(requestKey, cancel)
        }
      })
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
```

```vue [demo.vue]
<template>
  <button
    @click="onClick1"
    ref="btn1">
    请求1
  </button>
  <button
    @click="onClick2"
    ref="btn2">
    请求2
  </button>
</template>

<script>
export default {
  methods: {
    // 这里有问题,只是对每个按钮的点击事件单独做了防抖
    // 但是两个按钮之间做不到防抖的效果
    onClick1: async function () {
      let res = await sendPost({ username: 'zs', age: 20 })
      console.log('请求1的结果', res.data)
    },
    onClick2: async function () {
      let res = await sendPost({ username: 'zs', age: 20 })
      console.log('请求2的结果', res.data)
    },
  },
}
</script>
```

:::

#### 处理请求成功

通过响应拦截器处理请求成功

<Image src="../../public/13slt/cancel-2.png" alt="响应拦截器处理流程图" />

其余部分代码同上。这里增加响应拦截器部分，和下面失败的处理一起写了

#### 处理请求失败

通过响应拦截器处理请求失败

```js
//响应拦截器
axios.interceptors.response.use(
  response => {
    //请求成功
    //删除请求的信息
    delPendingRequest(response.config)
    return response
  },
  error => {
    // 请求失败
    // 不是取消请求的错误
    if (!axios.isCancel(error)) {
      //服务器如果报 400,500 报错,删除请求信息
      delPendingRequest(error.config || {})
    }
    // 其他情况正常抛错即可
    return Promise.reject(error)
  }
)

//删除请求信息
function delPendingRequest(config) {
  let requestKey = getRequestKey(config)
  if (pendingRequest.has(requestKey)) {
    pendingRequest.delete(requestKey)
  }
}
```

::: warning 存在的问题

通过取消 ajax 请求的方式,虽然避免重复请求,但是多个请求只有最后一次请求获取数据成功,其他请求会产生报错,没办法实现多个请求都获取同一个请求结果,会影响接下来代码正常执行

:::

### 3. 通过缓存 Ajax 结果

流程：直接对请求方法做处理,通过 ajax 库的 api 方法在请求之前先访问缓存列表,如果有结果那么从缓存当中获取结果, 如果没有再向服务器索要数据

#### 设置自定义处理请求

步骤 1 - 通过 axios 请求拦截器,设置 `config.adapter` 自定义处理请求。设置 `config.adapter` 后,请求会被拦截,不会再向服务器发请求

```js
axios.interceptors.request.use(async function (config) {
  // 通过,config.adapter,允许自定义处理请求
  config.adapter = function (config) {
    return new Promise(resolve => {
      const res = {
        data: 'hello',
        status: 200,
        statusText: 'OK',
        headers: { 'content-type': 'text/plain; charset=utf-8' },
        config,
        request: {},
      }
      return resolve(res)
    })
  }
  return config
})
```

#### 定义缓存对象

步骤 2-定义缓存对象,在请求和响应拦截器使用缓存。定义缓存对象,提供查询和添加的方法,并且缓存需要设置大小和超时时间

<Image src="../../public/13slt/cancel-3.png" alt="定义缓存对象处理流程图" />

```js
// 缓存对象
let cache = {
  // 缓存列表
  list: [],
  // 最大缓存数
  MAX_NUM: 100,
  // 最大缓存时间
  EXPIRED_TIME: 60000,
  // 根据请求的信息(请求方式,url,请求get/post数据),产生map的key
  getRequestKey(config) {
    const { method, url, params, data } = config
    return [method, url, Qs.stringify(params), Qs.stringify(data)].join('&')
  },
  // 添加缓存结果
  add({ config, data }) {
    if (config.data) config.data = JSON.parse(config.data)
    let key = this.getRequestKey(config)
    let i = this.list.findIndex(t => t.key === key)
    if (i > -1) {
      // 保存请求结果
      this.list[i].data = data
      // 把结果给接口
      this.list[i].resolve(data)
    } else {
      // 添加到缓存列表中
      this.list.push({ time: Date.now(), key, data })
    }
  },
  // 查找缓存结果
  find(config) {
    // 根据请求信息生成key
    let key = this.getRequestKey(config)
    let i = this.list.findIndex(t => t.key === key)
    // 判断缓存当中是否有该请求结果
    if (i > -1) {
      let f = this.list[i]
      // 判断是否超出了最大缓存时间
      if (Date.now() - f.time > this.EXPIRED_TIME) {
        // 清除该缓存
        this.list.splice(i, 1)
      } else {
        // 返回缓存
        return f
      }
    }
    // 添加缓存信息
    let t = { key, time: Date.now() }
    t.data = new Promise(resolve => {
      t.resolve = resolve
    })
    // 判断是否超出了最大缓存数量
    if (this.list.length === this.MAX_NUM) {
      this.list.shift()
    }
    this.list.push(t)
    // 返回undefined,让请求拦截不执行config.adapter
    return undefined
  },
}
```

这里重在学习思路，完整代码请点击链接跳转原文查看

## 参考

- [vue 阻止重复请求](https://juejin.cn/post/7189231050806001719)——黄金林
