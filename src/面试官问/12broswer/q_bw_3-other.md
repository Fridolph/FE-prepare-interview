# 综合整理

> 浏览器相关的，不知道杂细分类的都放这了

## 如何实现浏览器多个标签通信

::: details 通过中介者模式实现：

标签页和中介者进行通信，然后让这个中介者来进行消息的转发。通
信方法如下：

- 使用 `websocket` 协议，因为 websocket 协议可以实现服务器推送。所以服务器就可以用来当做这个中介者。标签页通过向服务器发送数据，然后由服务器向其他标签页推送转发。

- 使用 `ShareWorker` 的方式，shareWorker 会在页面存在的生命周期内创建一个唯一的线程，并且开启多个页面也只会使用同一个线程。这个时候共享线程就可以充当中介者的角色。标签页间通过共享一个线程，然后通过这个共享的线程来实现数据的交换。

- 使用 `localStorage` 的方式，我们可以在一个标签页对 localStorage 的变化事件进行监听，然后当另一个标签页修改数据的时候，我们就可以通过这个监听事件来获取到数据。这个时候 localStorage 对象就是充当的中介者的角色。

- 使用 `postMessage` 方法，如果我们能够获得对应标签页的引用，就可以使用 postMessage 方法，进行通信。

:::

## 说下浏览器常见内核

::: details

- Trident 早期 IE
- Gecko Firefox
- Presto Opera
- `Webkit` Webkit 是 `Safari` 采用的内核，是 KHTML 的一个开源的分支
- `Blink` 谷歌在 `Chromium` 项目中研发 Blink 渲染引
  擎（即浏览器核心），内置于 Chrome 浏览器之中

:::

## 前端存储方式有哪些

::: details

- cookies 优点：兼容性好，请求头⾃带；缺点是⼤⼩只有 4k，⾃动请求头加⼊ cookie 浪费流量，domain 限制 20 个，使用麻烦；

- `localStorage` 优点是操作⽅便，永久性储存（除非⼿动删除），大小为 5M

- sessionStorage 与 localStorage 基本类似，区别是 sessionStorage 页面关闭后失效，而且与 cookie、localStorage 不同，不能在所有同源窗⼝中共享，是会话级别的储存⽅式

- IndexedDB 正式纳⼊ HTML5 标准的数据库储存方案，它是 NoSQL 数据库，⽤键值对进行储存，可以进行快速读取操作。

:::

## 垃圾回收 GC
