# CSRF 跨站请求伪造

跨站请求伪造（Cross-site request forgery，缩写 CSRF）攻击是指当`恶意`网站、电子邮件、博客、即时消息或`程序欺骗`经过`认证的用户`的网络浏览器，在`可信任站点`上`执行不需要的操作`。如果目标用户`已经通过身份验证`登录到站点，那么未受保护的目标站点 `无法区分` 合法的授权请求和`伪造的经过认证的请求`。

## 定义

通常缩写为 CSRF 或者 XSRF，是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。

跟跨网站脚本（XSS）相比，XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。

## 攻击细节

由于浏览器请求自动包括所有的 cookie，包括会话 cookie，除非使用适当的授权，否则这种攻击会生效，这意味着目标站点的挑战-响应机制不会验证请求者的身份和权限。实际上，CSRF 攻击通过受害者的浏览器使目标系统执行攻击者指定的功能，而受害者本人并不知情（通常是在未经授权的操作之后才会知晓）。

然而，成功的 CSRF 攻击只能`利用受到漏洞应用程序和用户权限所暴露的功能`。根据用户的凭据，攻击者可以转账、更改密码、进行未经授权的购买、提升目标账户的权限，或者进行用户允许的任何操作。

跨站请求伪造（CSRF）是一种`冒充受信任用户`，`向服务器发送非预期请求的攻击方式`。例如，这些非预期请求可能是通过在跳转链接后的 URL 中加入恶意参数来完成：

**例子**

假如一家银行用以执行转账操作的 URL 地址如下： https:\/\/bank.example.com/withdraw?account=AccoutName&amount=1000&for=PayeeName

那么，一个恶意攻击者可以在另一个网站上放置如下代码：

\<img src="https:\/\/bank.example.com/withdraw?account=Alice&amount=1000&for=Badman" \/\>

> 如果有账户名为 Alice 的用户访问了恶意站点，而她之前刚访问过银行不久，登录信息尚未过期，那么她就会损失 1000 资金。

这种恶意的网址可以有很多种形式，藏身于网页中的许多地方。此外，攻击者也不需要控制放置恶意网址的网站。例如他可以将这种地址藏在论坛，博客等任何用户生成内容的网站中。这意味着如果服务端没有合适的防御措施的话，用户即使访问熟悉的可信网站也有受攻击的危险。

透过例子能够看出，**攻击者并不能通过 CSRF 攻击来直接获取用户的账户控制权**，**也不能直接窃取用户的任何信息**。他们能做到的，是`欺骗用户的浏览器，让其以用户的名义执行操作`。

## 防御措施

### 令牌同步模式

令牌同步模式（Synchronizer token pattern，简称 STP）。

原理是：当用户发送请求时，服务器端应用将令牌（token，一个保密且唯一的值）嵌入 HTML 表格，并发送给客户端。客户端提交 HTML 表格时候，会将令牌发送到服务端，令牌的验证是由服务端实行的。令牌可以通过任何方式生成，只要`确保随机性和唯一性`（如：使用随机种子的哈希链 ）。这样**确保攻击者发送请求时候，由于没有该令牌而无法通过验证**。

STP 能在 HTML 下运作顺利，但会导致服务端的复杂度升高，**复杂度源于令牌的生成和验证**。因为令牌是唯一且随机，如果每个表格都使用一个唯一的令牌，那么当页面过多时，服务器由于生产令牌而导致的负担也会增加。而`使用会话（session）等级的令牌代替`的话，服务器的负担将没有那么重。

### 检查 Referer 字段

HTTP 头中有一个 Referer 字段，这个字段用以标明请求来源于哪个地址。在处理敏感数据请求时，通常来说，Referer 字段应和请求的地址位于同一域名下。以上文银行操作为例，Referer 字段地址通常应该是转账按钮所在的网页地址，应该也位于 bank.example.com 之下。而如果是 CSRF 攻击传来的请求，Referer 字段会是包含恶意网址的地址，不会位于 bank.example.com 之下，这时候服务器就能识别出恶意的访问。

这种办法简单易行，工作量低，仅需要在关键访问处增加一步校验。但这种办法也有其局限性，因其完全依赖浏览器发送正确的 Referer 字段。虽然 http 协议对此字段的内容有明确的规定，但并`无法保证来访的浏览器的具体实现`，亦`无法保证浏览器没有安全漏洞影响到此字段`。并且也存在攻击者攻击某些浏览器，篡改其 Referer 字段的可能。

### 添加校验 token

由于 **CSRF 的本质在于攻击者欺骗用户去访问自己设置的地址**，所以如果要求在访问敏感数据请求时，要求用户浏览器提供不保存在 cookie 中，并且攻击者无法伪造的数据作为校验，那么攻击者就无法再执行 CSRF 攻击。

这种数据通常是窗体中的一个数据项。服务器将其生成并附加在窗体中，其内容是一个伪随机数。当客户端通过窗体提交请求时，这个伪随机数也一并提交上去以供校验。正常的访问时，客户端浏览器能够正确得到并传回这个伪随机数，而通过 CSRF 传来的欺骗性攻击中，攻击者无从事先得知这个伪随机数的值，服务端就会因为校验 token 的值为空或者错误，拒绝这个可疑请求。

## 参考

- [CSRF](https://developer.mozilla.org/zh-CN/docs/Glossary/CSRF)
- [跨站请求伪造](https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0)
