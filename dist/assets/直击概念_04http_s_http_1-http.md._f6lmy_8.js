import{_ as l,E as n,c as h,J as i,V as t,m as e,a,o as p}from"./chunks/framework.GzbH9VPN.js";const v=JSON.parse('{"title":"HTTP","description":"","frontmatter":{},"headers":[],"relativePath":"直击概念/04http/s_http_1-http.md","filePath":"直击概念/04http/s_http_1-http.md","lastUpdated":1707658941000}'),o={name:"直击概念/04http/s_http_1-http.md"},r=t('<blockquote><p>赶时间本想就抄抄状态码，HTTPS，url 输入到页面展示经典题。但想想，既然要做了，就做好吧，反正是在学习重温，正好把 MDN 文档好好过一遍。 等后面内容充实了， = = 再清理这些垃圾话~~</p></blockquote><h1 id="http" tabindex="-1">HTTP <a class="header-anchor" href="#http" aria-label="Permalink to &quot;HTTP&quot;">​</a></h1><p>超文本传输协议（HTTP）是一个用于传输超媒体文档（例如 HTML）的<code>应用层协议</code>。它是为 Web 浏览器与 Web 服务器之间的通信而设计的，但也可以用于其他目的。</p><p>HTTP 遵循经典的<code>客户端—服务端</code>模型，客户端打开一个连接以发出请求，然后等待直到收到服务器端响应。<code>HTTP 是无状态协议</code>，这意味着服务器不会在两个请求之间保留任何数据（状态）。</p><h2 id="http-概述" tabindex="-1">HTTP 概述 <a class="header-anchor" href="#http-概述" aria-label="Permalink to &quot;HTTP 概述&quot;">​</a></h2><p>HTTP 是一种用作获取诸如 HTML 文档这类资源的协议。它是 Web 上进行任何数据交换的基础，同时，也是一种客户端—服务器（client-server）协议</p>',6),d=e("p",null,"客户端与服务端之间通过交换一个个独立的消息（而非数据流）进行通信。",-1),T=e("ul",null,[e("li",null,[a("由客户端——通常是个浏览器——发出的消息被称作请求（"),e("code",null,"request"),a("）")]),e("li",null,[a("由服务端发出的应答消息被称作响应（"),e("code",null,"response"),a("）。")])],-1),c=e("h3",{id:"基于-http-的组件系统",tabindex:"-1"},[a("基于 HTTP 的组件系统 "),e("a",{class:"header-anchor",href:"#基于-http-的组件系统","aria-label":'Permalink to "基于 HTTP 的组件系统"'},"​")],-1),k=e("p",null,[a("HTTP 是一个客户端—服务器协议："),e("code",null,"请求由一个实体发出"),a("，即"),e("code",null,"用户代理（user agent）"),a("，或是一个可以代表它的"),e("code",null,"代理方（proxy）")],-1),P=t(`<h3 id="客户端-用户代理" tabindex="-1">客户端：用户代理 <a class="header-anchor" href="#客户端-用户代理" aria-label="Permalink to &quot;客户端：用户代理&quot;">​</a></h3><p>浏览器总是首先发起请求的那个实体，永远不会是服务端。</p><p>为了展现一个网页，浏览器需要发送最初的请求来获取描述这个页面的 HTML 文档。接着，解析文档，并发送数个其他请求，响应地获取可执行脚本、展示用的布局信息（CSS）以及其他页面内的资源（一般是图片和视频等）。然后，浏览器将这些资源整合到一起，展现出一个完整的文档，即 Web 页面。</p><blockquote><p>这段话也概括了从服务端拿到 html 后的一系列流程。果然重读有很多惊喜</p></blockquote><h3 id="web-服务端" tabindex="-1">Web 服务端 <a class="header-anchor" href="#web-服务端" aria-label="Permalink to &quot;Web 服务端&quot;">​</a></h3><p>在上述通信过程的另一侧是服务端，它<code>负责提供客户端所请求的文档</code>。一个服务端可以假装表现为仅有一台机器。但实际上，它可以是共享负载的一组服务器集群（负载均衡）或是其他类型的软件（如缓存、数据库服务、电商服务等），按需完整或部分地生成文档。</p><p>一个服务器可以不仅仅只有一台机器，而多个服务端软件实例也可部署在同一台机器上。利用 HTTP/1.1 和 Host 标头，它们甚至可以共用同一个 IP 地址。</p><h3 id="代理" tabindex="-1">代理 <a class="header-anchor" href="#代理" aria-label="Permalink to &quot;代理&quot;">​</a></h3><p>在浏览器和服务器之间，有许多计算机和设备参与传递了 HTTP 消息。依靠 Web 技术栈的层次化的结构，传递过程中的多数操作都位于传输层、网络层或物理层，它们对于 HTTP 应用层而言就是透明的，并默默地对网络性能产生着重要影响。还有一<code>部分实体在应用层参与消息传递</code>，一般被称为<code>代理（Proxy）</code>。</p><p>代理可以是透明的，即转发它们收到的请求并不做任何修改，也可以表现得不透明，将它传递给服务端之前使用一些手段修改这个请求。代理可以发挥很多种作用：</p><ul><li>缓存（可以是公开的也可以是私有的，如浏览器的缓存）</li><li>过滤（如反病毒扫描、家长控制...）</li><li>负载均衡（让多个服务器服务不同的请求）</li><li>认证（控制对不同资源的访问）</li><li>日志（使得代理可以存储历史信息）</li></ul><h2 id="http-基本性质" tabindex="-1">HTTP 基本性质 <a class="header-anchor" href="#http-基本性质" aria-label="Permalink to &quot;HTTP 基本性质&quot;">​</a></h2><h3 id="简约" tabindex="-1">简约 <a class="header-anchor" href="#简约" aria-label="Permalink to &quot;简约&quot;">​</a></h3><p>HTTP 被设计得简单且易读，尽管在 HTTP/2 中，HTTP 消息被封装进帧（frame）这点引入了额外的复杂度。HTTP 报文能够被人读懂并理解，向开发者提供了更简单的测试方式，也对初学者降低了门槛。</p><h3 id="可扩展" tabindex="-1">可扩展 <a class="header-anchor" href="#可扩展" aria-label="Permalink to &quot;可扩展&quot;">​</a></h3><p>在 HTTP/1.0 中引入的 HTTP 标头（header）让协议扩展变得非常容易。只要服务端客户端之间对新标头的语义经过简单协商，新功能就可以被加入进来。</p><h3 id="无状态-但并非无会话" tabindex="-1">无状态 - 但并非无会话 <a class="header-anchor" href="#无状态-但并非无会话" aria-label="Permalink to &quot;无状态 - 但并非无会话&quot;">​</a></h3><p><code>HTTP 是无状态的</code>：在同一个连接中，两个执行成功的请求之间是没有关系的。</p><p>尽管 HTTP 根本上来说是无状态的，但<code>借助 HTTP Cookie</code> 就可使用有状态的会话。利用标头的扩展性，HTTP Cookie 被加进了协议工作流程，每个请求之间就能够创建会话，让每个请求都能共享相同的上下文信息或相同的状态。</p><h3 id="和网络连接" tabindex="-1">和网络连接 <a class="header-anchor" href="#和网络连接" aria-label="Permalink to &quot;和网络连接&quot;">​</a></h3><p>一个网络连接是由传输层来控制的，因此从根本上说不属于 HTTP 的范畴。HTTP 协议并不需要下面的传输层协议是面向连接的，仅仅需要它是可靠的，或不会丢失消息（至少，某个情况下告知错误）。在互联网两个最常用的传输层协议中，TCP 是可靠的而 UDP 不是。HTTP 因此而依靠于 TCP 的标准，即面向链接的。</p><p>在客户端与服务端能够传递请求、响应之前，这两者间<code>必须建立一个 TCP 链接</code>，这个过程需要多次往返交互。<u>HTTP/1.0 默认为每一对 HTTP 请求/响应都打开一个单独的 TCP 连接。当需要接连发起多个请求时，工作效率相比于它们之间共享同一个 TCP 连接要低。</u></p><p>为了减轻这个缺陷，HTTP/1.1 引入了流水线（已被证明难以实现）和持久化连接：可以通过 Connection 标头来部分控制底层的 TCP 连接。HTTP/2 则更进一步，通过在一个连接中复合多个消息，让这个连接始终平缓并更加高效。</p><h2 id="http-能控制什么" tabindex="-1">HTTP 能控制什么 <a class="header-anchor" href="#http-能控制什么" aria-label="Permalink to &quot;HTTP 能控制什么&quot;">​</a></h2><p>以下是可以被 HTTP 控制的常见特性：</p><ul><li><p><code>缓存：</code><strong>文档如何被缓存可以通过 HTTP 来控制</strong>。服务端能指示代理和客户端缓存哪些内容以及缓存多长时间，客户端能够指示中间的缓存代理来忽略已存储的文档。</p></li><li><p><code>开放同源限制：</code>为了阻止网络窥听和其它侵犯隐私的问题，浏览器强制在不同网站之间做了严格分割。只有来自于<code>相同来源（same origin）</code>的网页才能够获取一个网页的全部信息。这种限制有时对服务器是一种负担，服务器的 HTTP 标头可以减弱此类严格分离，使得一个网页可以是由源自不同地址的信息拼接而成。某些情况下，放开这些限制还有安全相关的考虑。</p></li><li><p><code>认证：</code>一些页面可能会被保护起来，仅让特定的用户进行访问。基本的认证功能可以直接由 HTTP 提供，既可以使用 WWW-Authenticate 或其他类似的标头，也可以用 HTTP cookie 来设置一个特定的会话。</p></li><li><p><code>代理服务器和隧道</code>： 服务器或客户端常常是处于内网的，对其他计算机隐藏真实 IP 地址。因此 HTTP 请求就要通过代理服务器越过这个网络屏障。并非所有的代理都是 HTTP 代理，例如，SOCKS 协议就运作在更底层。其他的协议，比如 ftp，也能够被这些代理处理。</p></li><li><p><code>会话：</code>使用 HTTP <strong>Cookie</strong> 可以利用服务端的状态将不同请求联系在一起。这就创建了会话，尽管 <code>HTTP 本身是无状态协议</code>。</p></li></ul><h2 id="http-流" tabindex="-1">HTTP 流 <a class="header-anchor" href="#http-流" aria-label="Permalink to &quot;HTTP 流&quot;">​</a></h2><p>当客户端想要和服务端——不管是最终的服务端还是中间的代理——进行信息交互时，过程表现为下面几步：</p><ol><li><p>打开一个 TCP 连接：TCP 连接被用来发送一条或多条请求，以及接受响应消息。客户端可能打开一条新的连接，或重用一个已经存在的连接，或者也可能开几个新的 TCP 连接连向服务端。</p></li><li><p>发送一个 HTTP 报文：HTTP 报文（在 HTTP/2 之前）是语义可读的。在 HTTP/2 中，这些简单的消息被封装在了帧中，这使得报文不能被直接读取，但是原理仍是相同的。</p></li></ol><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> / </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">HTTP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Host</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> developer.mozilla.org</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Accept-Language</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3"><li>读取服务端返回的报文信息</li></ol><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HTTP/1.1 200 OK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Date</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Sat, 09 Oct 2010 14:28:02 GMT</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Server</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apache</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Last-Modified</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Tue, 01 Dec 2009 20:18:22 GMT</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ETag</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;51142bc1-7449-479b075b2891b&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Accept-Ranges</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bytes</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Content-Length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 29769</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Content-Type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> text/html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DOCTYPE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;…（此处是所请求网页的 29769 字节）</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="4"><li>关闭连接或者为后续请求重用连接。</li></ol><p>当启用 HTTP 流水线时，后续请求都可以直接发送，而不用等待第一个响应被全部接收。然而 HTTP 流水线已被证明很难在现有的网络中实现，因为现有网络中有老旧的软件与现代版本的软件同时存在。因此，HTTP 流水线已在 HTTP/2 中被更健壮、使用帧的多路复用请求所取代。</p><h2 id="http-报文" tabindex="-1">HTTP 报文 <a class="header-anchor" href="#http-报文" aria-label="Permalink to &quot;HTTP 报文&quot;">​</a></h2><p>HTTP/1.1 以及更早的 HTTP <code>协议报文都是语义可读</code>的。在 HTTP/2 中，这些报文被嵌入到了一个新的二进制结构——帧。帧允许实现很多优化，比如<code>报文标头的压缩</code>以及<code>多路复用</code>。即使只有原始 HTTP 报文的一部分以 HTTP/2 发送出来，每条报文的语义依旧不变，客户端会重组原始 HTTP/1.1 请求。因此用 HTTP/1.1 格式来理解 HTTP/2 报文仍旧有效。</p><p>有两种 HTTP 报文的类型，请求与响应，每种都有其特定的格式。</p><h3 id="请求" tabindex="-1">请求 <a class="header-anchor" href="#请求" aria-label="Permalink to &quot;请求&quot;">​</a></h3>`,38),b=t('<p>请求由以下元素组成：</p><ul><li>一个 <code>HTTP 方法</code>，通常是由一个动词，像 GET、POST 等，或者一个名词，像 OPTIONS、HEAD 等，来定义客户端执行的动作。典型场景有：客户端意图抓取某个资源（使用 GET）；发送 HTML 表单的参数值（使用 POST）；以及其他情况下需要的那些其他操作。</li><li>要获取的那个<code>资源路径</code>——去除了当前上下文中显而易见的信息之后的 URL，比如说，它不包括协议（http://）、域名（这里的域名是 developer.mozilla.org），或是 TCP 的端口（这里的端口是 80）。</li><li><code>HTTP 协议版本号</code>。</li><li>为服务端表达其他信息的<code>可选标头</code>。</li><li><code>请求体（body）</code>，类似于响应中的请求体，一些像 POST 这样的方法，请求体内包含需要了发送的资源。</li></ul><h3 id="响应" tabindex="-1">响应 <a class="header-anchor" href="#响应" aria-label="Permalink to &quot;响应&quot;">​</a></h3>',3),u=t('<p>响应报文包含了下面的元素：</p><ul><li><code>HTTP 协议版本号</code>。</li><li>一个<code>状态码（status code）</code>，来指明对应请求已成功执行或是没有，以及相应的原因。</li><li>一个<code>状态信息</code>，这个信息是一个不权威、简短的状态码描述</li><li><code>HTTP 标头</code>，与请求标头类似。</li><li>可选项，一个包含了被获取资源的主体。</li></ul><h2 id="基于-http-的-api" tabindex="-1">基于 HTTP 的 API <a class="header-anchor" href="#基于-http-的-api" aria-label="Permalink to &quot;基于 HTTP 的 API&quot;">​</a></h2><p><code>XMLHttpRequest</code> 是基于 HTTP 的最常用 API，可用于在用户代理和服务端之间交换数据。现代 Fetch API 提供相同的功能，并具有更强大和灵活的功能集。</p><p>另一种 API，<code>server-sent</code> 事件，是一种单向服务，允许服务端借助作为 HTTP 传输机制向客户端发送事件。</p><blockquote><p>关于 server-sent 这里就不多展开了，感兴趣可自行查看文档</p></blockquote><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>HTTP 是一种简单、易用、具有可扩展性的协议，其客户端—服务器模式的结构，加上能够增加标头的能力，使得 HTTP 随 Web 中不断扩展的能力一起发展。</p><p>虽然增加了一些复杂度——为了提高性能，HTTP/2 将 HTTP 报文嵌入到帧中——但是报文的基本结构自 HTTP/1.0 起仍保持不变。会话流依旧简单，通过一个简单的 HTTP 消息监视器就可以查看和纠错。</p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview</a></p>',11);function H(_,g,m,C,E,y){const s=n("Image");return p(),h("div",null,[r,i(s,{src:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview/fetching_a_page.png",alt:"客户端—服务器（client-server）协议",inline:!1}),d,T,i(s,{src:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview/http-layers.png",alt:"HTTP 客户端—服务器（client-server）协议",inline:!1}),c,k,i(s,{src:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview/client-server-chain.png",alt:"请求由一个实体发出",inline:!1}),P,i(s,{src:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview/http_request.png",alt:"一个http请求",inline:!1}),b,i(s,{src:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview/http_response.png",alt:"一个http响应",inline:!1}),u])}const f=l(o,[["render",H]]);export{v as __pageData,f as default};
