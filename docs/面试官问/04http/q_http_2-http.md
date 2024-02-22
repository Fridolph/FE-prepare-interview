# HTTP

## HTTP Headers

### 请说一下 HTTP 常用的状态码

::: details 查看提示

- 1XX 信息响应，如 100 继续响应
- 2XX 请求成功
  - 200 成功
  - 204 成功但没拿到内容
- 3XX 重定向
  - 301 永久重定向
  - 302 临时重定向
  - 304 从缓存拿
- 4XX 客户端错误
  - 400 坏请求
  - 401 客户端未验证
  - 403 无权限
  - 404 未找到
  - 405 方法未被许可
- 5XX 服务端错误
  - 500 服务器错误
    :::

### 请说一下 HTTP 常见请求头

::: details 查看提示 // todo:

:::

### 请说一下 HTTP 常见响应头

::: details 查看提示 // todo:

:::

### 常见 Content-Type 类型有哪些

::: details

- `application/x-www-form-urlencoded`：用于 URL 编码的表单数据，数据以键值对的形式发送。
- `multipart/form-data`：用于发送带有文件上传的表单数据，可以包含文本字段和文件字段。
- `application/json`：用于发送 JSON 格式的数据。
- `text/plain`：用于发送纯文本数据。
- `application/xml`：用于发送 XML 格式的数据。
- `text/xml`：用于发送 XML 格式的数据，与 application/xml 类似，但将数据视为纯文本。
- `application/octet-stream` 用于发送任意的二进制数据
  :::

Content-Type 用于指定请求中的主体数据的类型。根据你要发送的数据类型，选择合适的 Content-Type。在 Fetch API 中，你可以通过设置请求头部中的 Content-Type 字段来指定 Content-Type

### application/xml 和 text/xml 有啥区别

|特性|对象1|对象2|

## 说下对 Restful API 的理解

::: details 查看提示

- 一种 API 的设计方法（约定）
- 传统 API 把每个 URL 当做一个功能
- 而 Restful API 设计 把每个 URL 当做一个唯一的资源
  :::

## 回顾

[http status code](../../%E7%9B%B4%E5%87%BB%E6%A6%82%E5%BF%B5/04http/s_http_2-http_status_code.md)
