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

## 常见的 meta 标签有哪些

"meta"标签是 HTML 标签之一, 常用于对页面的元数据(metadata)进行描述和定义，包括网页的关键词、页描、作者、字符编码、视口大小、缩放比例等信息。以下是常见的"meta"标签及其含义：

::: details
- `<meta charset="UTF-8">`：定义字符编码为UTF-8，确保页面能够正确地显示特殊字符；
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`：定义视口大小为设备宽度，缩放比例为1，确保在手机等移动设备上显示正常；
- `<meta name="keywords" content="关键词1, 关键词2, ...">`：定义网页的关键词，便于搜索引擎抓取和分析网页主题；
- `<meta name="description" content="网页描述">`：定义网页描述信息，便于搜索引擎显示搜索结果摘要描述；
- `<meta name="author" content="作者">`：定义网页作者信息；
- `<meta HTTP-EQUIV="refresh" CONTENT="3;URL=http://www.example.com/">`：定义网页跳转规则，如每隔3秒自动跳转到指定网址；
- `<meta name="robots" content="index,follow">`：定义搜索引擎对网页的抓取策略，"index"表示允许抓取该网页，"noindex"则表示不允许抓取；"follow"表示跟踪该网页中所有的链接，"nofollow"则表示不跟踪；
- `<meta name="format-detection" content="telephone=no">`：定义是否禁止自动检测页面中的电话号码，避免误触拨打电话。
:::

## 参考

- [前端（HTML+CSS+JS+打包+环境+网络）](https://juejin.cn/post/7227787460968415289#heading-1)