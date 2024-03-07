import{_ as e,c as a,o as r,V as t}from"./chunks/framework.VAJu91au.js";const f=JSON.parse('{"title":"Web 安全","description":"","frontmatter":{},"headers":[],"relativePath":"直击概念/10safe/s_safe_1-Web安全.md","filePath":"直击概念/10safe/s_safe_1-Web安全.md","lastUpdated":1708674619000}'),o={name:"直击概念/10safe/s_safe_1-Web安全.md"},l=t('<h1 id="web-安全" tabindex="-1">Web 安全 <a class="header-anchor" href="#web-安全" aria-label="Permalink to &quot;Web 安全&quot;">​</a></h1><p>确保你的 Web 站点或 Web 应用安全是十分重要的，即使是代码中很小的 bug 也可能导致隐私信息被泄露，黑客会尝试偷窃数据。这些文档提供信息帮助你使代码更安全。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>这里针对面试，只作一个简单介绍和列举。更多内容请查看 MDN 和其他推荐参考</p></div><h2 id="内容安全" tabindex="-1">内容安全 <a class="header-anchor" href="#内容安全" aria-label="Permalink to &quot;内容安全&quot;">​</a></h2><p><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" target="_blank" rel="noreferrer">内容安全策略（CSP）</a> 通过探测和减轻包括跨站脚本攻击 XSS 和数据注入攻击的攻击手段，更进一步提升安全性。上述攻击手段可以使用在数据窃取、网站污损、亦或是恶意软件的分发等场景中。</p><h2 id="连接安全" tabindex="-1">连接安全 <a class="header-anchor" href="#连接安全" aria-label="Permalink to &quot;连接安全&quot;">​</a></h2><h3 id="传输层安全" tabindex="-1">传输层安全 <a class="header-anchor" href="#传输层安全" aria-label="Permalink to &quot;传输层安全&quot;">​</a></h3><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/Security/Transport_Layer_Security" target="_blank" rel="noreferrer">传输层安全（TLS）</a> 协议是在两个互联的应用或设备上稳定且私密地交换信息的标准。使用 TLS 的应用可以选择对数据安全性和可靠性有保障的安全参数。这篇文章提供了 TLS 的概述，以及在保护你的内容时需要做出的选择。</p><h3 id="https" tabindex="-1">HTTPS <a class="header-anchor" href="#https" aria-label="Permalink to &quot;HTTPS&quot;">​</a></h3><p>HTTPS（超文本传输协议安全）是 <a href="./../04http/s_http_1-http.html">HTTP</a> 协议的加密版本，它使用 <a href="https://developer.mozilla.org/zh-CN/docs/Glossary/SSL" target="_blank" rel="noreferrer">SSL</a> 或 <a href="https://developer.mozilla.org/zh-CN/docs/Glossary/TLS" target="_blank" rel="noreferrer">TLS</a> 协议来对客户端和服务器之间的所有通信进行加密。所建立的安全连接使得客户端可以确认所连接的服务器，并且可以交换敏感数据。</p><h3 id="http-strict-transport-security" tabindex="-1">HTTP Strict-Transport-Security <a class="header-anchor" href="#http-strict-transport-security" aria-label="Permalink to &quot;HTTP Strict-Transport-Security&quot;">​</a></h3><p><code>Strict-Transport-Security</code>: HTTP 标头可以让网站指定其只能通过 HTTPS 访问。</p><h3 id="证书透明度" tabindex="-1">证书透明度 <a class="header-anchor" href="#证书透明度" aria-label="Permalink to &quot;证书透明度&quot;">​</a></h3><p>证书透明度是一个开放的框架，旨在防止和监测证书的误发。新颁发的证书被记录到公开运行的、通常是独立的 CT 日志中，这些日志保持着一个仅有附录的、有密码学保证的 TLS 证书的记录。</p><h3 id="修复含有混合内容的网站" tabindex="-1">修复含有混合内容的网站 <a class="header-anchor" href="#修复含有混合内容的网站" aria-label="Permalink to &quot;修复含有混合内容的网站&quot;">​</a></h3><p><strong>如果一个 HTTPS 页面包含明文 HTTP 获取的内容</strong>，那么该页面就被称为<code>混合内容页面</code>。像这样的页面只能保证部分内容加密，未加密的部分仍然可以被嗅探器和中间人攻击者感知。</p><p>如果你的网站传送了 HTTPS 页面，所有使用 HTTP 传送的活跃混合内容默认会被阻止。因而，你的网站可能会对客户不可用（例如 iframe 或插件不加载）。被动的混合内容 默认是显示状态，但用户也可以通过首选设置来阻止这种类型的内容。这个页面解释了作为 web 开发人员需要注意的事情。</p><h3 id="限制在安全上下文中的特性" tabindex="-1">限制在安全上下文中的特性 <a class="header-anchor" href="#限制在安全上下文中的特性" aria-label="Permalink to &quot;限制在安全上下文中的特性&quot;">​</a></h3><p>一个<a href="https://developer.mozilla.org/zh-CN/docs/Web/Security/Secure_Contexts" target="_blank" rel="noreferrer">安全的上下文</a>是一个 Window 或 Worker，对于它来说，有理由相信内容已经安全地通过 HTTPS/TLS 交付，并且与不安全的上下文进行通信的可能性有限。许多 Web API 和功能只能在安全上下文中访问。<strong>安全上下文的主要目标是防止<a href="https://zh.wikipedia.org/wiki/%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB" target="_blank" rel="noreferrer">中间人攻击</a>者访问强大的 API，从而进一步损害攻击受害者。</strong></p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts" target="_blank" rel="noreferrer">限制在安全上下文中的特性 </a> 该参考列出了仅在安全上下文中可用的 web 平台特性。</p><h3 id="弱签名算法" tabindex="-1">弱签名算法 <a class="header-anchor" href="#弱签名算法" aria-label="Permalink to &quot;弱签名算法&quot;">​</a></h3><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/Security/Weak_Signature_Algorithm" target="_blank" rel="noreferrer">弱签名算法</a> 用于数字证书签名的摘要算法是保证证书安全性的关键因素。这篇文章提供了一些有关已知的弱签名算法信息，在使用的时候可以避免它们。</p><h2 id="数据安全-防止信息泄露" tabindex="-1">数据安全，防止信息泄露 <a class="header-anchor" href="#数据安全-防止信息泄露" aria-label="Permalink to &quot;数据安全，防止信息泄露&quot;">​</a></h2><h3 id="安全使用-cookie" tabindex="-1">安全使用 Cookie <a class="header-anchor" href="#安全使用-cookie" aria-label="Permalink to &quot;安全使用 Cookie&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">提示</p><p>当你存储信息到 Cookie 中时，需要明白 cookie 的值是可以被访问，且可以被终端用户所修改的。根据应用程序的不同，可能需要使用服务器查找的不透明标识符，或者研究诸如 JSON Web Tokens 之类的替代身份验证/机密机制。当机器处于不安全环境时，切记不能通过 HTTP Cookie 存储、传输敏感信息。</p></div><p>缓解涉及 Cookie 的攻击的方法：</p><ul><li>使用 HttpOnly 属性可防止通过 JavaScript 访问 cookie 值。</li><li>用于敏感信息（例如指示身份验证）的 Cookie 的生存期应较短，并且 SameSite 属性设置为 Strict 或 Lax。</li></ul><p>在支持 SameSite 的浏览器中，这样做的作用是确保不与跨站点请求一起发送身份验证 cookie。因此，这种请求实际上不会向应用服务器进行身份验证。</p><h3 id="referer-标头策略" tabindex="-1">Referer 标头策略 <a class="header-anchor" href="#referer-标头策略" aria-label="Permalink to &quot;Referer 标头策略&quot;">​</a></h3><p><code>Referer</code> 请求头包含了当前请求页面的来源页面的地址，即表示当前页面是通过此来源页面里的链接进入的。服务端一般使用 Referer 请求头识别访问来源，可能会以此进行统计分析、日志记录以及缓存优化等。</p><blockquote><p>需要注意的是 referer 实际上是 &quot;referrer&quot; 误拼写。参见 <a href="https://zh.wikipedia.org/wiki/HTTP_referer" target="_blank" rel="noreferrer">HTTP referer on Wikipedia</a>（HTTP referer 在维基百科上的条目）来获取更详细的信息。</p></blockquote><p>在以下两种情况下，Referer 不会被发送：</p><ul><li>来源页面采用的协议为表示本地文件的 &quot;file&quot; 或者 &quot;data&quot; URI；</li><li>当前请求页面采用的是非安全协议，而来源页面采用的是安全协议（HTTPS）。</li></ul><div class="danger custom-block"><p class="custom-block-title">警告</p><p>Referer 请求头可能暴露用户的浏览历史，涉及到用户的隐私问题。</p></div><h2 id="完整性" tabindex="-1">完整性 <a class="header-anchor" href="#完整性" aria-label="Permalink to &quot;完整性&quot;">​</a></h2><h3 id="同源策略" tabindex="-1">同源策略 <a class="header-anchor" href="#同源策略" aria-label="Permalink to &quot;同源策略&quot;">​</a></h3><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy" target="_blank" rel="noreferrer">同源策略</a>限制了一个源中加载的文档或脚本与其他源中的资源交互的方式。这是一种用来隔离潜在恶意文档的关键安全机制。</p><h3 id="子资源完整性" tabindex="-1">子资源完整性 <a class="header-anchor" href="#子资源完整性" aria-label="Permalink to &quot;子资源完整性&quot;">​</a></h3><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity" target="_blank" rel="noreferrer">子资源完整性</a>（SRI）是一种安全功能，允许浏览器验证所获取的文件（比如，从一个内容分发网络中）没有遭受恶意修改。它的工作原理是允许你提供一个加密哈希值，目标文件必须匹配这个值。</p><h3 id="http-access-control-allow-origin" tabindex="-1">HTTP Access-Control-Allow-Origin <a class="header-anchor" href="#http-access-control-allow-origin" aria-label="Permalink to &quot;HTTP Access-Control-Allow-Origin&quot;">​</a></h3><p><code>Access-Control-Allow-Origin</code> 响应头表明响应是否可以与来自给定来源的请求代码共享。</p><h3 id="http-x-content-type-options" tabindex="-1">HTTP X-Content-Type-Options <a class="header-anchor" href="#http-x-content-type-options" aria-label="Permalink to &quot;HTTP X-Content-Type-Options&quot;">​</a></h3><p><code>X-Content-Type-Options</code> 响应的 HTTP 头是一个标记，由服务器用来表示应该遵循 Content-Type 头中宣告的 MIME 类型，不应该被改变。这是一种选择退出 MIME 类型嗅探的方法，或者换句话说，MIME 类型是故意配置的。</p><h2 id="点击劫持保护" tabindex="-1">点击劫持保护 <a class="header-anchor" href="#点击劫持保护" aria-label="Permalink to &quot;点击劫持保护&quot;">​</a></h2><p>点击劫持是一种基于界面的攻击，会诱骗网站用户无意中点击恶意链接。</p><p>在点击劫持中，攻击者将恶意链接嵌入到网站的按钮或合法页面中。在受感染的站点中，每当用户单击合法链接时，攻击者就会获取该用户的机密信息，最终损害用户在 Internet 上的隐私。 <code>可以通过实施内容安全策略</code>和实施 <code>Set-Cookie</code> 属性<code>来防止点击劫持</code>。</p><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Frame-Options" target="_blank" rel="noreferrer">HTTP X-Frame-Options</a></li></ul><p>X-Frame-Options HTTP 响应头可以用来表明是否应该允许浏览器在 <code>&lt;frame&gt;</code>、<code>&lt;iframe&gt;</code>、<code>&lt;embed&gt;</code> 或 <code>&lt;object&gt;</code> 中渲染页面。网站通过这些方法，保证它们的内容不被轻易嵌入至其他站点，可以避免点击劫持攻击。</p><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors" target="_blank" rel="noreferrer">CSP: frame-ancestors</a></li></ul><p>HTTP Content-Security-Policy（CSP）的 frame-ancestors 指令指定了使用 <code>&lt;frame&gt;</code>、<code>&lt;iframe&gt;</code>、<code>&lt;object&gt;</code> 或 <code>&lt;embed&gt;</code> 元素嵌入页面的合法父元素。</p><h2 id="用户信息安全" tabindex="-1">用户信息安全 <a class="header-anchor" href="#用户信息安全" aria-label="Permalink to &quot;用户信息安全&quot;">​</a></h2><h3 id="不安全的密码" tabindex="-1">不安全的密码 <a class="header-anchor" href="#不安全的密码" aria-label="Permalink to &quot;不安全的密码&quot;">​</a></h3><p>通过 HTTP 提供登录表格是特别危险的，因为有各种各样的攻击可以用来提取用户的密码。网络窃听者可以通过嗅探网络，或通过修改传输中的服务页面来窃取用户的密码。</p><h3 id="隐私性和-visited-选择器" tabindex="-1">隐私性和 :visited 选择器 <a class="header-anchor" href="#隐私性和-visited-选择器" aria-label="Permalink to &quot;隐私性和 :visited 选择器&quot;">​</a></h3><p>在大约 2010 年之前，CSS <code>:visited</code> 选择器允许网站获取用户的浏览历史，弄清用户访问过哪些网站。为了缓解这个问题，浏览器已经限制了从访问过的链接中获得的信息量。</p><h2 id="更多安全相关的术语" tabindex="-1">更多安全相关的术语 <a class="header-anchor" href="#更多安全相关的术语" aria-label="Permalink to &quot;更多安全相关的术语&quot;">​</a></h2><p>这里只是一个引子，更多请参考 MDN 文档、维基百科、Web-dev 等</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/Security" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/Security</a></li></ul>',59),i=[l];function c(s,h,n,d,p,b){return r(),a("div",null,i)}const T=e(o,[["render",c]]);export{f as __pageData,T as default};
