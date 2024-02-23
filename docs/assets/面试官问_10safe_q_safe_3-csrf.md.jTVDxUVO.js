import{_ as e,c as a,o,V as r}from"./chunks/framework.i1kO8Tor.js";const m=JSON.parse('{"title":"CSRF 跨站请求伪造","description":"","frontmatter":{},"headers":[],"relativePath":"面试官问/10safe/q_safe_3-csrf.md","filePath":"面试官问/10safe/q_safe_3-csrf.md","lastUpdated":null}'),t={name:"面试官问/10safe/q_safe_3-csrf.md"},c=r('<h1 id="csrf-跨站请求伪造" tabindex="-1">CSRF 跨站请求伪造 <a class="header-anchor" href="#csrf-跨站请求伪造" aria-label="Permalink to &quot;CSRF 跨站请求伪造&quot;">​</a></h1><p>跨站请求伪造（Cross-site request forgery，缩写 CSRF）攻击是指当<code>恶意</code>网站、电子邮件、博客、即时消息或<code>程序欺骗</code>经过<code>认证的用户</code>的网络浏览器，在<code>可信任站点</code>上<code>执行不需要的操作</code>。如果目标用户<code>已经通过身份验证</code>登录到站点，那么未受保护的目标站点 <code>无法区分</code> 合法的授权请求和<code>伪造的经过认证的请求</code>。</p><h2 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h2><p>通常缩写为 CSRF 或者 XSRF，是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。</p><p>跟跨网站脚本（XSS）相比，XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。</p><h2 id="攻击细节" tabindex="-1">攻击细节 <a class="header-anchor" href="#攻击细节" aria-label="Permalink to &quot;攻击细节&quot;">​</a></h2><p>由于浏览器请求自动包括所有的 cookie，包括会话 cookie，除非使用适当的授权，否则这种攻击会生效，这意味着目标站点的挑战-响应机制不会验证请求者的身份和权限。实际上，CSRF 攻击通过受害者的浏览器使目标系统执行攻击者指定的功能，而受害者本人并不知情（通常是在未经授权的操作之后才会知晓）。</p><p>然而，成功的 CSRF 攻击只能<code>利用受到漏洞应用程序和用户权限所暴露的功能</code>。根据用户的凭据，攻击者可以转账、更改密码、进行未经授权的购买、提升目标账户的权限，或者进行用户允许的任何操作。</p><p>跨站请求伪造（CSRF）是一种<code>冒充受信任用户</code>，<code>向服务器发送非预期请求的攻击方式</code>。例如，这些非预期请求可能是通过在跳转链接后的 URL 中加入恶意参数来完成：</p><p><strong>例子</strong></p><p>假如一家银行用以执行转账操作的 URL 地址如下： https://bank.example.com/withdraw?account=AccoutName&amp;amount=1000&amp;for=PayeeName</p><p>那么，一个恶意攻击者可以在另一个网站上放置如下代码：</p><p>&lt;img src=&quot;https://bank.example.com/withdraw?account=Alice&amp;amount=1000&amp;for=Badman&quot; /&gt;</p><blockquote><p>如果有账户名为 Alice 的用户访问了恶意站点，而她之前刚访问过银行不久，登录信息尚未过期，那么她就会损失 1000 资金。</p></blockquote><p>这种恶意的网址可以有很多种形式，藏身于网页中的许多地方。此外，攻击者也不需要控制放置恶意网址的网站。例如他可以将这种地址藏在论坛，博客等任何用户生成内容的网站中。这意味着如果服务端没有合适的防御措施的话，用户即使访问熟悉的可信网站也有受攻击的危险。</p><p>透过例子能够看出，<strong>攻击者并不能通过 CSRF 攻击来直接获取用户的账户控制权</strong>，<strong>也不能直接窃取用户的任何信息</strong>。他们能做到的，是<code>欺骗用户的浏览器，让其以用户的名义执行操作</code>。</p><h2 id="防御措施" tabindex="-1">防御措施 <a class="header-anchor" href="#防御措施" aria-label="Permalink to &quot;防御措施&quot;">​</a></h2><h3 id="令牌同步模式" tabindex="-1">令牌同步模式 <a class="header-anchor" href="#令牌同步模式" aria-label="Permalink to &quot;令牌同步模式&quot;">​</a></h3><p>令牌同步模式（Synchronizer token pattern，简称 STP）。</p><p>原理是：当用户发送请求时，服务器端应用将令牌（token，一个保密且唯一的值）嵌入 HTML 表格，并发送给客户端。客户端提交 HTML 表格时候，会将令牌发送到服务端，令牌的验证是由服务端实行的。令牌可以通过任何方式生成，只要<code>确保随机性和唯一性</code>（如：使用随机种子的哈希链 ）。这样<strong>确保攻击者发送请求时候，由于没有该令牌而无法通过验证</strong>。</p><p>STP 能在 HTML 下运作顺利，但会导致服务端的复杂度升高，<strong>复杂度源于令牌的生成和验证</strong>。因为令牌是唯一且随机，如果每个表格都使用一个唯一的令牌，那么当页面过多时，服务器由于生产令牌而导致的负担也会增加。而<code>使用会话（session）等级的令牌代替</code>的话，服务器的负担将没有那么重。</p><h3 id="检查-referer-字段" tabindex="-1">检查 Referer 字段 <a class="header-anchor" href="#检查-referer-字段" aria-label="Permalink to &quot;检查 Referer 字段&quot;">​</a></h3><p>HTTP 头中有一个 Referer 字段，这个字段用以标明请求来源于哪个地址。在处理敏感数据请求时，通常来说，Referer 字段应和请求的地址位于同一域名下。以上文银行操作为例，Referer 字段地址通常应该是转账按钮所在的网页地址，应该也位于 bank.example.com 之下。而如果是 CSRF 攻击传来的请求，Referer 字段会是包含恶意网址的地址，不会位于 bank.example.com 之下，这时候服务器就能识别出恶意的访问。</p><p>这种办法简单易行，工作量低，仅需要在关键访问处增加一步校验。但这种办法也有其局限性，因其完全依赖浏览器发送正确的 Referer 字段。虽然 http 协议对此字段的内容有明确的规定，但并<code>无法保证来访的浏览器的具体实现</code>，亦<code>无法保证浏览器没有安全漏洞影响到此字段</code>。并且也存在攻击者攻击某些浏览器，篡改其 Referer 字段的可能。</p><h3 id="添加校验-token" tabindex="-1">添加校验 token <a class="header-anchor" href="#添加校验-token" aria-label="Permalink to &quot;添加校验 token&quot;">​</a></h3><p>由于 <strong>CSRF 的本质在于攻击者欺骗用户去访问自己设置的地址</strong>，所以如果要求在访问敏感数据请求时，要求用户浏览器提供不保存在 cookie 中，并且攻击者无法伪造的数据作为校验，那么攻击者就无法再执行 CSRF 攻击。</p><p>这种数据通常是窗体中的一个数据项。服务器将其生成并附加在窗体中，其内容是一个伪随机数。当客户端通过窗体提交请求时，这个伪随机数也一并提交上去以供校验。正常的访问时，客户端浏览器能够正确得到并传回这个伪随机数，而通过 CSRF 传来的欺骗性攻击中，攻击者无从事先得知这个伪随机数的值，服务端就会因为校验 token 的值为空或者错误，拒绝这个可疑请求。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Glossary/CSRF" target="_blank" rel="noreferrer">CSRF</a></li><li><a href="https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0" target="_blank" rel="noreferrer">跨站请求伪造</a></li></ul>',29),n=[c];function s(d,p,l,i,h,f){return o(),a("div",null,n)}const u=e(t,[["render",s]]);export{m as __pageData,u as default};
