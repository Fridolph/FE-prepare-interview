import{_ as a,c as e,o as l,V as i}from"./chunks/framework.GzbH9VPN.js";const q=JSON.parse('{"title":"HTTP 标头（header）","description":"","frontmatter":{},"headers":[],"relativePath":"直击概念/04http/s_http_3-http_header.md","filePath":"直击概念/04http/s_http_3-http_header.md","lastUpdated":1708590339000}'),t={name:"直击概念/04http/s_http_3-http_header.md"},o=i('<h1 id="http-标头-header" tabindex="-1">HTTP 标头（header） <a class="header-anchor" href="#http-标头-header" aria-label="Permalink to &quot;HTTP 标头（header）&quot;">​</a></h1><p>HTTP 标头（header）允许客户端和服务器通过 HTTP 请求（request）或者响应（response）<strong>传递附加信息</strong>。一个 HTTP 标头由它的名称（不区分大小写）后跟随一个冒号（:），冒号后跟随它具体的值。该值之前的空格会被忽略。</p><p>根据不同的消息上下文，标头可以分为：</p><ul><li><strong>请求标头</strong>包含有关要获取的资源或客户端或请求资源的客户端的更多信息。</li><li><strong>响应标头</strong>包含有关响应的额外信息，例如响应的位置或者提供响应的服务器。</li><li><strong>表示标头</strong>包含资源主体的信息，例如主体的 MIME 类型或者应用的编码/压缩方案。</li><li><strong>有效负荷标头</strong>包含有关有效载荷数据表示的单独信息，包括内容长度和用于传输的编码。</li></ul><p>标头也可以根据代理处理它们的方式进行分组：</p><ul><li>Connection</li><li>Keep-Alive</li><li>Proxy-Authenticate</li><li>Proxy-Authorization</li><li>TE</li><li>Trailer</li><li>Transfer-Encoding</li><li>Upgrade (en-US)（另见协议升级机制）。</li></ul><h2 id="验证-authentication" tabindex="-1">验证 Authentication <a class="header-anchor" href="#验证-authentication" aria-label="Permalink to &quot;验证 Authentication&quot;">​</a></h2><ul><li>WWW-Authenticate</li></ul><p>定义应该用于访问资源的身份验证方法。</p><ul><li>Authorization</li></ul><p>包含用于向服务器验证用户代理身份的凭据。</p><ul><li>Proxy-Authenticate</li></ul><p>定义应用于访问代理服务器后面资源的身份验证方法。</p><ul><li>Proxy-Authorization</li></ul><p>包含用于使用代理服务器验证用户代理的凭据。</p><h2 id="缓存-cache" tabindex="-1">缓存（Cache） <a class="header-anchor" href="#缓存-cache" aria-label="Permalink to &quot;缓存（Cache）&quot;">​</a></h2><ul><li>Age</li></ul><p>对象在代理缓存中的时间（以秒为单位）。</p><ul><li>Cache-Control</li></ul><p>请求和响应中缓存机制的指令。</p><ul><li>Clear-Site-Data</li></ul><p>清除与请求网站相关联的浏览器数据（例如 cookie、storage、cache）。</p><ul><li>Expires</li></ul><p>响应被视为过时的日期/时间。</p><ul><li>Pragma</li></ul><p>特定于实现的标头可能会在请求—响应链（request-response chain）的任何地方产生各种影响。用于向后兼容 Cache-Control 标头尚不存在的 HTTP/1.0 缓存。</p><h2 id="条件-conditional" tabindex="-1">条件 Conditional <a class="header-anchor" href="#条件-conditional" aria-label="Permalink to &quot;条件 Conditional&quot;">​</a></h2><ul><li>Last-Modified</li></ul><p>资源的最后修改日期，用于比较同一个资源的多个版本。它不如 ETag 准确，但在某些环境中更容易计算。使用 If-Modified-Since 和 If-Unmodified-Since 的条件请求可以使用此值来更改请求的行为。</p><ul><li>If-Modified-Since</li></ul><p>使请求有条件，并期望只有在给定日期后修改资源时才请求传输资源。仅当缓存过期时才用于传输数据。</p><ul><li>If-Unmodified-Since</li></ul><p>使请求有条件，并期望只有在给定日期后资源未被修改时才请求传输资源。这确保了特定范围的新片段与先前片段的一致性，或者在修改现有文档时实现乐观的（optimistic）并发控制系统。</p><ul><li>ETag</li></ul><p>标识资源版本的唯一字符串。使用 If-Match 和 If-None-Match 的条件请求使用此值来更改请求的行为。</p><ul><li>If-Match</li></ul><p>使请求有条件，并且仅当存储的资源与给定的 ETag 之一匹配时才应用该方法。</p><ul><li>If-None-Match</li></ul><p>使请求有条件，并且仅当存储的资源与给定的 ETag 都不匹配时才应用该方法。这用于更新缓存（用于安全请求），或防止在资源已存在时上传新资源。</p><ul><li>Vary</li></ul><p>确定如何匹配请求标头以决定是否可以使用缓存的响应而不是从源服务器请求新的响应。</p><h2 id="消息主体信息" tabindex="-1">消息主体信息 <a class="header-anchor" href="#消息主体信息" aria-label="Permalink to &quot;消息主体信息&quot;">​</a></h2><ul><li>Content-Length</li></ul><p>资源的大小，以十进制字节数表示。</p><ul><li>Content-Type</li></ul><p>指示资源的媒体类型。</p><ul><li>Content-Encoding</li></ul><p>用于指定压缩算法。</p><ul><li>Content-Language</li></ul><p>描述面向受众的人类语言，以便用户可以根据自己的首选语言进行区分。</p><ul><li>Content-Location</li></ul><p>指示返回数据的备用位置。</p><h2 id="连接管理-connection-management" tabindex="-1">连接管理 Connection management <a class="header-anchor" href="#连接管理-connection-management" aria-label="Permalink to &quot;连接管理 Connection management&quot;">​</a></h2><ul><li>Connection</li></ul><p>控制当前事务完成后网络连接是否保持打开状态。</p><ul><li>Keep-Alive</li></ul><p>控制持久连接应保持打开状态的时间。</p><h2 id="内容协商-content-negotiation" tabindex="-1">内容协商 Content negotiation <a class="header-anchor" href="#内容协商-content-negotiation" aria-label="Permalink to &quot;内容协商 Content negotiation&quot;">​</a></h2><p>内容协商（Content negotiation）标头。</p><ul><li>Accept</li></ul><p>通知服务器可以发回的数据类型。</p><ul><li>Accept-Encoding</li></ul><p>编码算法，通常是压缩算法，用于返回的资源。</p><ul><li>Accept-Language</li></ul><p>通知服务器有关服务器预期返回的人类语言。这是一个提示，不一定在用户的完全控制之下：服务器应该始终注意不要覆盖明确的用户选择（比如从下拉列表中选择一种语言）。</p><h2 id="控制-control" tabindex="-1">控制 Control <a class="header-anchor" href="#控制-control" aria-label="Permalink to &quot;控制 Control&quot;">​</a></h2><ul><li>Expect</li></ul><p>表示服务器需要满足的期望才能正确处理请求。</p><ul><li>Max-Forwards</li></ul><p>使用 TRACE 时，指示请求在被反映到发送方之前可以执行的最大跃点数。</p><h2 id="cookie" tabindex="-1">Cookie <a class="header-anchor" href="#cookie" aria-label="Permalink to &quot;Cookie&quot;">​</a></h2><p>Cookie 算一个大知识点，单独开了一个文档。请跳转查看</p><h2 id="cors" tabindex="-1">CORS <a class="header-anchor" href="#cors" aria-label="Permalink to &quot;CORS&quot;">​</a></h2><p>同上，跨域资源共享最近经常考，单独开了一个文档。</p><h2 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h2><ul><li>Content-Disposition</li></ul><p>指示传输的资源是否应内联显示（没有标题的默认行为），或者是否应像下载一样处理并且浏览器应显示“另存为”对话框。</p><h2 id="代理" tabindex="-1">代理 <a class="header-anchor" href="#代理" aria-label="Permalink to &quot;代理&quot;">​</a></h2><ul><li>Forwarded</li></ul><p>包含来自代理服务器面向客户端的信息，当请求路径中涉及代理时，这些信息会被更改或丢失。</p><ul><li>Via</li></ul><p>由代理添加，包括正向和反向代理，并且可以出现在请求标头和响应标头中。</p><h2 id="重定向" tabindex="-1">重定向 <a class="header-anchor" href="#重定向" aria-label="Permalink to &quot;重定向&quot;">​</a></h2><h3 id="location" tabindex="-1">Location <a class="header-anchor" href="#location" aria-label="Permalink to &quot;Location&quot;">​</a></h3><p>指示要将页面重定向到的 URL。</p><h3 id="refresh" tabindex="-1">Refresh <a class="header-anchor" href="#refresh" aria-label="Permalink to &quot;Refresh&quot;">​</a></h3><p>指示浏览器重新加载页面或重定向到另一个页面。采用与带有 http-equiv=&quot;refresh&quot; 的 meta 元素相同的值。</p><h2 id="请求上下文" tabindex="-1">请求上下文 <a class="header-anchor" href="#请求上下文" aria-label="Permalink to &quot;请求上下文&quot;">​</a></h2><ul><li>From</li></ul><p>包含一个电子邮箱地址，这个电子邮箱地址属于发送请求的用户代理的实际掌控者的人类用户。</p><ul><li>Host</li></ul><p>指定服务器的域名（用于虚拟主机）和（可选）服务器侦听的 TCP 端口号。</p><ul><li>Referer</li></ul><p>前一个网页的地址，表示从该网页链接（进入）到当前请求的页面。</p><ul><li>Referrer-Policy</li></ul><p>管理 Referer 标头中发送的哪些引用信息应包含在发出的请求中。</p><ul><li>User-Agent</li></ul><p>包含一个特征字符串，允许网络协议对端识别发起请求的用户代理软件的应用程序类型、操作系统、软件供应商或软件版本。另请参阅 Firefox 用户代理字符串参考。</p><h2 id="响应上下文" tabindex="-1">响应上下文 <a class="header-anchor" href="#响应上下文" aria-label="Permalink to &quot;响应上下文&quot;">​</a></h2><ul><li>Allow</li></ul><p>列出资源所支持的 HTTP 方法的集合。</p><ul><li>Server</li></ul><p>包含了处理请求的源头服务器所用到的软件相关信息。</p><h2 id="范围请求" tabindex="-1">范围请求 <a class="header-anchor" href="#范围请求" aria-label="Permalink to &quot;范围请求&quot;">​</a></h2><ul><li>Accept-Ranges</li></ul><p>指示服务器是否支持范围请求，如果支持，范围可以用哪个单位表示。</p><ul><li>Range</li></ul><p>指示服务器应返回的文档部分。</p><ul><li>If-Range</li></ul><p>创建一个条件范围请求，只有在给定的 etag 或日期与远程资源匹配时才会满足。用于防止从资源的不兼容版本下载两个范围。</p><ul><li>Content-Range</li></ul><p>指示部分消息在完整正文消息中的位置。</p><h2 id="安全" tabindex="-1">安全 <a class="header-anchor" href="#安全" aria-label="Permalink to &quot;安全&quot;">​</a></h2><p>单独开了一个文档，详情跳转</p><h2 id="传输编码" tabindex="-1">传输编码 <a class="header-anchor" href="#传输编码" aria-label="Permalink to &quot;传输编码&quot;">​</a></h2><ul><li><p>Transfer-Encoding 指定用于将资源安全地传输给用户的编码形式。</p></li><li><p>TE 指定用户代理愿意接受的传输编码。</p></li><li><p>Trailer 允许发送方在分块消息的末尾包含其他字段。</p></li></ul><h2 id="自测" tabindex="-1">自测 <a class="header-anchor" href="#自测" aria-label="Permalink to &quot;自测&quot;">​</a></h2><p><a href="./../../面试官问/04http/q_http_2-http.html">http</a></p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers</a></p>',120),n=[o];function r(h,p,u,c,d,s){return l(),e("div",null,n)}const m=a(t,[["render",r]]);export{q as __pageData,m as default};
