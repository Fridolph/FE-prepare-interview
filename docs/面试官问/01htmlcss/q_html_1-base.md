# HTML 基础

## 如何理解语义化

::: details

1. 让人更容易读懂（`同时增加代码可读性`）

2. 让搜索引擎更容易读懂

通过合理的语义化：

- 可以使得`网页结构更加清晰`
- 有助于`页面的可读性和可访问性的提高`
- `利于搜索引擎`的爬取和排名
- 使得网页可以更好地为用户所用
  :::

## 标签

### 常见的 meta 标签有哪些

"meta"标签是 HTML 标签之一, 常用于对页面的元数据(metadata)进行描述和定义，包括网页的关键词、页描、作者、字符编码、视口大小、缩放比例等信息。以下是常见的"meta"标签及其含义：

::: details

- `<meta charset="UTF-8">`：定义字符编码为 UTF-8，确保页面能够正确地显示特殊字符；
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`：定义视口大小为设备宽度，缩放比例为 1，确保在手机等移动设备上显示正常；
- `<meta name="keywords" content="关键词1, 关键词2, ...">`：定义网页的关键词，便于搜索引擎抓取和分析网页主题；
- `<meta name="description" content="网页描述">`：定义网页描述信息，便于搜索引擎显示搜索结果摘要描述；
- `<meta name="author" content="作者">`：定义网页作者信息；
- `<meta HTTP-EQUIV="refresh" CONTENT="3;URL=http://www.example.com/">`：定义网页跳转规则，如每隔 3 秒自动跳转到指定网址；
- `<meta name="robots" content="index,follow">`：定义搜索引擎对网页的抓取策略，"index"表示允许抓取该网页，"noindex"则表示不允许抓取；"follow"表示跟踪该网页中所有的链接，"nofollow"则表示不跟踪；
- `<meta name="format-detection" content="telephone=no">`：定义是否禁止自动检测页面中的电话号码，避免误触拨打电话。
  :::

### script 标签中 defer 和 async 的区别

defer 和 async 属性都是去`异步加载`外部的 JS 脚本

::: details

- async 是 js 只要一`加载完毕就会马上执行` 不管 html 有没有解析完毕，所以它有`可能阻塞 html 解析`
- defer 要等到 `html 解析完毕之后`才执行。所以`不会阻塞 html 解析`
  :::

## 属性

### 什么时候用 href，什么时候用 src

::: details

- src 指向的内容会`嵌入到文档中`当前标签所在的位置。常用的有：img、script、iframe。
- href 是 Hypertext Reference 的缩写，表示`超文本引用`。用来建立当前元素和文档之间的链接。href 目的不是为了引用资源，而是为了建立联系，让当前标签能够链接到目标地址。常用的有：link、a。
- 总结: src 用于替换当前元素(比如：引入一张图片)；href 用于在当前文档和引用资源之间建立联系。
  :::

### link 和@import 的区别

::: details

1. link 是 XHTML 标签，除了能够加载 CSS，还可以定义 RSS 等其他事务；而@import 属于 CSS 范畴，只可以加载 CSS。
2. link 引用 CSS 时，在页面载入时同时加载；@import 需要页面完全载入以后再加载。
3. link 是 XHTML 标签，无兼容问题；@import 则是在 CSS2.1 提出的，低版本的浏览器不支持。
4. link 支持使用 Javascript 控制 DOM 改变样式；而@import 不支持。

:::

## 参考

- [前端（HTML+CSS+JS+打包+环境+网络）](https://juejin.cn/post/7227787460968415289#heading-1)
