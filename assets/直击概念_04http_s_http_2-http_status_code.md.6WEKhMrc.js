import{_ as e,c as a,o as t,V as o}from"./chunks/framework.i1kO8Tor.js";const q=JSON.parse('{"title":"HTTP 响应状态码","description":"","frontmatter":{},"headers":[],"relativePath":"直击概念/04http/s_http_2-http_status_code.md","filePath":"直击概念/04http/s_http_2-http_status_code.md","lastUpdated":1708674619000}'),r={name:"直击概念/04http/s_http_2-http_status_code.md"},i=o('<h1 id="http-响应状态码" tabindex="-1">HTTP 响应状态码 <a class="header-anchor" href="#http-响应状态码" aria-label="Permalink to &quot;HTTP 响应状态码&quot;">​</a></h1><p>HTTP 响应状态码用来表明特定 HTTP 请求是否成功完成。 响应被归为以下五大类：</p><h2 id="信息响应-1xx" tabindex="-1">信息响应 1XX <a class="header-anchor" href="#信息响应-1xx" aria-label="Permalink to &quot;信息响应 1XX&quot;">​</a></h2><ul><li>100 Continue</li></ul><p>这个临时响应表明，迄今为止的所有内容都是可行的，客户端应该继续请求，如果已经完成，则忽略它。</p><ul><li>101 Switching Protocols</li></ul><p>该代码是响应客户端的 Upgrade (en-US) 请求头发送的，指明服务器即将切换的协议。</p><ul><li>102 Processing (WebDAV)</li></ul><p>此代码表示服务器已收到并正在处理该请求，但当前没有响应可用。</p><ul><li>103 Early Hints</li></ul><p>此状态代码主要用于与 Link 链接头一起使用，以允许用户代理在服务器准备响应阶段时开始预加载 preloading 资源。</p><h2 id="成功响应-2xx" tabindex="-1">成功响应 2XX <a class="header-anchor" href="#成功响应-2xx" aria-label="Permalink to &quot;成功响应 2XX&quot;">​</a></h2><h3 id="_200-ok" tabindex="-1">200 OK <a class="header-anchor" href="#_200-ok" aria-label="Permalink to &quot;200 OK&quot;">​</a></h3><p>请求成功。成功的含义取决于 HTTP 方法：</p><ul><li>GET: 资源已被提取并在消息正文中传输。</li><li>HEAD: 实体标头位于消息正文中。</li><li>PUT or POST: 描述动作结果的资源在消息体中传输。</li><li>TRACE: 消息正文包含服务器收到的请求消息。</li></ul><h3 id="_201-created" tabindex="-1">201 Created <a class="header-anchor" href="#_201-created" aria-label="Permalink to &quot;201 Created&quot;">​</a></h3><p>该请求已成功，并因此创建了一个新的资源。这通常是在 POST 请求，或是某些 PUT 请求之后返回的响应。</p><h3 id="_202-accepted" tabindex="-1">202 Accepted <a class="header-anchor" href="#_202-accepted" aria-label="Permalink to &quot;202 Accepted&quot;">​</a></h3><p>请求已经接收到，但还未响应，没有结果。意味着不会有一个异步的响应去表明当前请求的结果，预期另外的进程和服务去处理请求，或者批处理。</p><h3 id="_203-non-authoritative-information" tabindex="-1">203 Non-Authoritative Information <a class="header-anchor" href="#_203-non-authoritative-information" aria-label="Permalink to &quot;203 Non-Authoritative Information&quot;">​</a></h3><p>服务器已成功处理了请求，但返回的实体头部元信息不是在原始服务器上有效的确定集合，而是来自本地或者第三方的拷贝。当前的信息可能是原始版本的子集或者超集。例如，包含资源的元数据可能导致原始服务器知道元信息的超集。使用此状态码不是必须的，而且只有在响应不使用此状态码便会返回 200 OK 的情况下才是合适的。</p><h3 id="_204-no-content" tabindex="-1">204 No Content <a class="header-anchor" href="#_204-no-content" aria-label="Permalink to &quot;204 No Content&quot;">​</a></h3><p>对于该请求没有的内容可发送，但头部字段可能有用。用户代理可能会用此时请求头部信息来更新原来资源的头部缓存字段。</p><h3 id="_205-reset-content" tabindex="-1">205 Reset Content <a class="header-anchor" href="#_205-reset-content" aria-label="Permalink to &quot;205 Reset Content&quot;">​</a></h3><p>告诉用户代理重置发送此请求的文档。</p><h3 id="_206-partial-content" tabindex="-1">206 Partial Content <a class="header-anchor" href="#_206-partial-content" aria-label="Permalink to &quot;206 Partial Content&quot;">​</a></h3><p>当从客户端发送 Range 范围标头以只请求资源的一部分时，将使用此响应代码。</p><h3 id="_207-multi-status-en-us-webdav" tabindex="-1">207 Multi-Status (en-US) (WebDAV) <a class="header-anchor" href="#_207-multi-status-en-us-webdav" aria-label="Permalink to &quot;207 Multi-Status (en-US) (WebDAV)&quot;">​</a></h3><p>对于多个状态代码都可能合适的情况，传输有关多个资源的信息。</p><h3 id="_226-im-used-en-us-http-delta-encoding" tabindex="-1">226 IM Used (en-US) (HTTP Delta encoding) <a class="header-anchor" href="#_226-im-used-en-us-http-delta-encoding" aria-label="Permalink to &quot;226 IM Used (en-US) (HTTP Delta encoding)&quot;">​</a></h3><p>服务器已经完成了对资源的 GET 请求，并且响应是对当前实例应用的一个或多个实例操作结果的表示。</p><h2 id="重定向信息-3xx" tabindex="-1">重定向信息 3XX <a class="header-anchor" href="#重定向信息-3xx" aria-label="Permalink to &quot;重定向信息 3XX&quot;">​</a></h2><h3 id="_300-multiple-choice" tabindex="-1">300 Multiple Choice <a class="header-anchor" href="#_300-multiple-choice" aria-label="Permalink to &quot;300 Multiple Choice&quot;">​</a></h3><p>请求拥有多个可能的响应。用户代理或者用户应当从中选择一个。（没有标准化的方法来选择其中一个响应，但是建议使用指向可能性的 HTML 链接，以便用户可以选择。）</p><h3 id="_301-moved-permanently" tabindex="-1">301 Moved Permanently <a class="header-anchor" href="#_301-moved-permanently" aria-label="Permalink to &quot;301 Moved Permanently&quot;">​</a></h3><p>请求资源的 URL 已永久更改。在响应中给出了新的 URL。</p><h3 id="_302-found" tabindex="-1">302 Found <a class="header-anchor" href="#_302-found" aria-label="Permalink to &quot;302 Found&quot;">​</a></h3><p>此响应代码表示所请求资源的 URI 已 暂时 更改。未来可能会对 URI 进行进一步的改变。因此，客户机应该在将来的请求中使用这个相同的 URI。</p><h3 id="_303-see-other" tabindex="-1">303 See Other <a class="header-anchor" href="#_303-see-other" aria-label="Permalink to &quot;303 See Other&quot;">​</a></h3><p>服务器发送此响应，以指示客户端通过一个 GET 请求在另一个 URI 中获取所请求的资源。</p><h3 id="_304-not-modified" tabindex="-1">304 Not Modified <a class="header-anchor" href="#_304-not-modified" aria-label="Permalink to &quot;304 Not Modified&quot;">​</a></h3><p>这是用于缓存的目的。它告诉客户端响应还没有被修改，因此客户端可以继续使用相同的缓存版本的响应。</p><h3 id="_307-temporary-redirect" tabindex="-1">307 Temporary Redirect <a class="header-anchor" href="#_307-temporary-redirect" aria-label="Permalink to &quot;307 Temporary Redirect&quot;">​</a></h3><p>服务器发送此响应，以指示客户端使用在前一个请求中使用的相同方法在另一个 URI 上获取所请求的资源。这与 302 Found HTTP 响应代码具有相同的语义，但<code>用户代理 不能 更改所使用的 HTTP 方法</code>：如果在第一个请求中使用了 POST，则在第二个请求中必须使用 POST</p><h3 id="_308-permanent-redirect" tabindex="-1">308 Permanent Redirect <a class="header-anchor" href="#_308-permanent-redirect" aria-label="Permalink to &quot;308 Permanent Redirect&quot;">​</a></h3><p>这意味着资源现在永久位于由 Location: HTTP Response 标头指定的另一个 URI。这与 301 Moved Permanently HTTP 响应代码具有相同的语义，但<code>用户代理不能更改所使用的 HTTP 方法</code>：如果在第一个请求中使用 POST，则必须在第二个请求中使用 POST。</p><h2 id="客户端错误响应-4xx" tabindex="-1">客户端错误响应 4XX <a class="header-anchor" href="#客户端错误响应-4xx" aria-label="Permalink to &quot;客户端错误响应 4XX&quot;">​</a></h2><h3 id="_400-bad-request" tabindex="-1">400 Bad Request <a class="header-anchor" href="#_400-bad-request" aria-label="Permalink to &quot;400 Bad Request&quot;">​</a></h3><p>由于被认为是客户端错误（例如，错误的请求语法、无效的请求消息帧或欺骗性的请求路由），服务器无法或不会处理请求。</p><h3 id="_401-unauthorized" tabindex="-1">401 Unauthorized <a class="header-anchor" href="#_401-unauthorized" aria-label="Permalink to &quot;401 Unauthorized&quot;">​</a></h3><p>虽然 HTTP 标准指定了&quot;unauthorized&quot;，但从语义上来说，这个响应意味着&quot;unauthenticated&quot;。也就是说，客户端必须对自身进行身份验证才能获得请求的响应。</p><h3 id="_402-payment-required-实验性" tabindex="-1">402 Payment Required 实验性 <a class="header-anchor" href="#_402-payment-required-实验性" aria-label="Permalink to &quot;402 Payment Required 实验性&quot;">​</a></h3><p>此响应代码保留供将来使用。创建此代码的最初目的是将其用于数字支付系统，但是此状态代码很少使用，并且不存在标准约定。</p><h3 id="_403-forbidden" tabindex="-1">403 Forbidden <a class="header-anchor" href="#_403-forbidden" aria-label="Permalink to &quot;403 Forbidden&quot;">​</a></h3><p>客户端没有访问内容的权限；也就是说，它是未经授权的，因此服务器拒绝提供请求的资源。<strong>与 401 Unauthorized 不同，服务器知道客户端的身份</strong>。</p><h3 id="_404-not-found" tabindex="-1">404 Not Found <a class="header-anchor" href="#_404-not-found" aria-label="Permalink to &quot;404 Not Found&quot;">​</a></h3><p>服务器找不到请求的资源。在浏览器中，这意味着无法识别 URL。在 API 中，这也可能意味着端点有效，但资源本身不存在。服务器也可以发送此响应，而不是 403 Forbidden，以向未经授权的客户端隐藏资源的存在。这个响应代码可能是最广为人知的，因为它经常出现在网络上。</p><h3 id="_405-method-not-allowed" tabindex="-1">405 Method Not Allowed <a class="header-anchor" href="#_405-method-not-allowed" aria-label="Permalink to &quot;405 Method Not Allowed&quot;">​</a></h3><p>服务器知道请求方法，但目标资源不支持该方法。例如，API 可能不允许调用 DELETE 来删除资源。</p><h3 id="_406-not-acceptable" tabindex="-1">406 Not Acceptable <a class="header-anchor" href="#_406-not-acceptable" aria-label="Permalink to &quot;406 Not Acceptable&quot;">​</a></h3><p>当 web 服务器在执行服务端驱动型内容协商机制后，没有发现任何符合用户代理给定标准的内容时，就会发送此响应。</p><h3 id="_407-proxy-authentication-required" tabindex="-1">407 Proxy Authentication Required <a class="header-anchor" href="#_407-proxy-authentication-required" aria-label="Permalink to &quot;407 Proxy Authentication Required&quot;">​</a></h3><p>类似于 401 Unauthorized 但是认证需要由代理完成。</p><h3 id="_408-request-timeout" tabindex="-1">408 Request Timeout <a class="header-anchor" href="#_408-request-timeout" aria-label="Permalink to &quot;408 Request Timeout&quot;">​</a></h3><p>此响应由一些服务器在空闲连接上发送，即使客户端之前没有任何请求。这意味着服务器想关闭这个未使用的连接。由于一些浏览器，如 Chrome、Firefox 27+ 或 IE9，使用 HTTP 预连接机制来加速冲浪，所以这种响应被使用得更多。还要注意的是，有些服务器只是关闭了连接而没有发送此消息。</p><h3 id="_409-conflict" tabindex="-1">409 Conflict <a class="header-anchor" href="#_409-conflict" aria-label="Permalink to &quot;409 Conflict&quot;">​</a></h3><p>当请求与服务器的当前状态冲突时，将发送此响应。</p><h3 id="_410-gone" tabindex="-1">410 Gone <a class="header-anchor" href="#_410-gone" aria-label="Permalink to &quot;410 Gone&quot;">​</a></h3><p>当请求的内容已从服务器中永久删除且没有转发地址时，将发送此响应。客户端需要删除缓存和指向资源的链接。HTTP 规范打算将此状态代码用于“有限时间的促销服务”。API 不应被迫指出已使用此状态代码删除的资源。</p><h3 id="_411-length-required" tabindex="-1">411 Length Required <a class="header-anchor" href="#_411-length-required" aria-label="Permalink to &quot;411 Length Required&quot;">​</a></h3><p>服务端拒绝该请求因为 Content-Length 头部字段未定义但是服务端需要它。</p><h3 id="_412-precondition-failed" tabindex="-1">412 Precondition Failed <a class="header-anchor" href="#_412-precondition-failed" aria-label="Permalink to &quot;412 Precondition Failed&quot;">​</a></h3><p>客户端在其头文件中指出了服务器不满足的先决条件。</p><h3 id="_413-payload-too-large" tabindex="-1">413 Payload Too Large <a class="header-anchor" href="#_413-payload-too-large" aria-label="Permalink to &quot;413 Payload Too Large&quot;">​</a></h3><p>请求实体大于服务器定义的限制。服务器可能会关闭连接，或在标头字段后返回重试 Retry-After。</p><h3 id="_414-uri-too-long" tabindex="-1">414 URI Too Long <a class="header-anchor" href="#_414-uri-too-long" aria-label="Permalink to &quot;414 URI Too Long&quot;">​</a></h3><p>客户端请求的 URI 比服务器愿意接收的长度长。</p><h3 id="_415-unsupported-media-type" tabindex="-1">415 Unsupported Media Type <a class="header-anchor" href="#_415-unsupported-media-type" aria-label="Permalink to &quot;415 Unsupported Media Type&quot;">​</a></h3><p>服务器不支持请求数据的媒体格式，因此服务器拒绝请求。</p><h3 id="_416-range-not-satisfiable" tabindex="-1">416 Range Not Satisfiable <a class="header-anchor" href="#_416-range-not-satisfiable" aria-label="Permalink to &quot;416 Range Not Satisfiable&quot;">​</a></h3><p>无法满足请求中 Range 标头字段指定的范围。该范围可能超出了目标 URI 数据的大小。</p><h3 id="_417-expectation-failed" tabindex="-1">417 Expectation Failed <a class="header-anchor" href="#_417-expectation-failed" aria-label="Permalink to &quot;417 Expectation Failed&quot;">​</a></h3><p>此响应代码表示服务器无法满足 Expect 请求标头字段所指示的期望。</p><h3 id="_418-i-m-a-teapot" tabindex="-1">418 I&#39;m a teapot <a class="header-anchor" href="#_418-i-m-a-teapot" aria-label="Permalink to &quot;418 I&#39;m a teapot&quot;">​</a></h3><p>服务端拒绝用茶壶煮咖啡。笑话，典故来源茶壶冲泡咖啡</p><h3 id="_421-misdirected-request" tabindex="-1">421 Misdirected Request <a class="header-anchor" href="#_421-misdirected-request" aria-label="Permalink to &quot;421 Misdirected Request&quot;">​</a></h3><p>请求被定向到无法生成响应的服务器。这可以由未配置为针对请求 URI 中包含的方案和权限组合生成响应的服务器发送。</p><h3 id="_422-unprocessable-entity-webdav" tabindex="-1">422 Unprocessable Entity (WebDAV) <a class="header-anchor" href="#_422-unprocessable-entity-webdav" aria-label="Permalink to &quot;422 Unprocessable Entity (WebDAV)&quot;">​</a></h3><p>请求格式正确，但由于语义错误而无法遵循。</p><h3 id="_423-locked-webdav" tabindex="-1">423 Locked (WebDAV) <a class="header-anchor" href="#_423-locked-webdav" aria-label="Permalink to &quot;423 Locked (WebDAV)&quot;">​</a></h3><p>正在访问的资源已锁定。</p><h3 id="_424-failed-dependency-webdav" tabindex="-1">424 Failed Dependency (WebDAV) <a class="header-anchor" href="#_424-failed-dependency-webdav" aria-label="Permalink to &quot;424 Failed Dependency (WebDAV)&quot;">​</a></h3><p>由于前一个请求失败，请求失败。</p><h3 id="_425-too-early-实验性" tabindex="-1">425 Too Early 实验性 <a class="header-anchor" href="#_425-too-early-实验性" aria-label="Permalink to &quot;425 Too Early 实验性&quot;">​</a></h3><p>表示服务器不愿意冒险处理可能被重播的请求。</p><h3 id="_426-upgrade-required" tabindex="-1">426 Upgrade Required <a class="header-anchor" href="#_426-upgrade-required" aria-label="Permalink to &quot;426 Upgrade Required&quot;">​</a></h3><p>服务器拒绝使用当前协议执行请求，但在客户端升级到其他协议后可能愿意这样做。 服务端发送带有 Upgrade (en-US) 字段的 ### 426 响应 来表明它所需的协议（们）。</p><h3 id="_428-precondition-required" tabindex="-1">428 Precondition Required <a class="header-anchor" href="#_428-precondition-required" aria-label="Permalink to &quot;428 Precondition Required&quot;">​</a></h3><p>源服务器要求请求是有条件的。此响应旨在防止&#39;丢失更新&#39;问题，即当第三方修改服务器上的状态时，客户端 GET 获取资源的状态，对其进行修改并将其 PUT 放回服务器，从而导致冲突。</p><h3 id="_429-too-many-requests" tabindex="-1">429 Too Many Requests <a class="header-anchor" href="#_429-too-many-requests" aria-label="Permalink to &quot;429 Too Many Requests&quot;">​</a></h3><p>用户在给定的时间内发送了太多请求（&quot;限制请求速率&quot;）</p><h3 id="_431-request-header-fields-too-large" tabindex="-1">431 Request Header Fields Too Large <a class="header-anchor" href="#_431-request-header-fields-too-large" aria-label="Permalink to &quot;431 Request Header Fields Too Large&quot;">​</a></h3><p>服务器不愿意处理请求，因为其头字段太大。在减小请求头字段的大小后，可以重新提交请求。</p><h3 id="_451-unavailable-for-legal-reasons" tabindex="-1">451 Unavailable For Legal Reasons <a class="header-anchor" href="#_451-unavailable-for-legal-reasons" aria-label="Permalink to &quot;451 Unavailable For Legal Reasons&quot;">​</a></h3><p>用户代理请求了无法合法提供的资源，例如政府审查的网页。</p><h2 id="服务端错误响应-5xx" tabindex="-1">服务端错误响应 5XX <a class="header-anchor" href="#服务端错误响应-5xx" aria-label="Permalink to &quot;服务端错误响应 5XX&quot;">​</a></h2><h3 id="_500-internal-server-error" tabindex="-1">500 Internal Server Error <a class="header-anchor" href="#_500-internal-server-error" aria-label="Permalink to &quot;500 Internal Server Error&quot;">​</a></h3><p>服务器遇到了不知道如何处理的情况。</p><h3 id="_501-not-implemented" tabindex="-1">501 Not Implemented <a class="header-anchor" href="#_501-not-implemented" aria-label="Permalink to &quot;501 Not Implemented&quot;">​</a></h3><p>服务器不支持请求方法，因此无法处理。服务器需要支持的唯二方法（因此不能返回此代码）是 GET and HEAD.</p><h3 id="_502-bad-gateway" tabindex="-1">502 Bad Gateway <a class="header-anchor" href="#_502-bad-gateway" aria-label="Permalink to &quot;502 Bad Gateway&quot;">​</a></h3><p>此错误响应表明服务器作为网关需要得到一个处理这个请求的响应，但是得到一个错误的响应。</p><h3 id="_503-service-unavailable" tabindex="-1">503 Service Unavailable <a class="header-anchor" href="#_503-service-unavailable" aria-label="Permalink to &quot;503 Service Unavailable&quot;">​</a></h3><p>服务器没有准备好处理请求。常见原因是服务器因维护或重载而停机。请注意，与此响应一起，应发送解释问题的用户友好页面。这个响应应该用于临时条件和如果可能的话，HTTP 标头 Retry-After 字段应该包含恢复服务之前的估计时间。网站管理员还必须注意与此响应一起发送的与缓存相关的标头，因为这些临时条件响应通常不应被缓存。</p><h3 id="_504-gateway-timeout" tabindex="-1">504 Gateway Timeout <a class="header-anchor" href="#_504-gateway-timeout" aria-label="Permalink to &quot;504 Gateway Timeout&quot;">​</a></h3><p>当服务器充当网关且无法及时获得响应时，会给出此错误响应。</p><h3 id="_505-http-version-not-supported" tabindex="-1">505 HTTP Version Not Supported <a class="header-anchor" href="#_505-http-version-not-supported" aria-label="Permalink to &quot;505 HTTP Version Not Supported&quot;">​</a></h3><p>服务器不支持请求中使用的 HTTP 版本。</p><h3 id="_506-variant-also-negotiates" tabindex="-1">506 Variant Also Negotiates <a class="header-anchor" href="#_506-variant-also-negotiates" aria-label="Permalink to &quot;506 Variant Also Negotiates&quot;">​</a></h3><p>服务器存在内部配置错误：所选的变体资源被配置为参与透明内容协商本身，因此不是协商过程中的适当终点。</p><h3 id="_507-insufficient-storage-webdav" tabindex="-1">507 Insufficient Storage (WebDAV) <a class="header-anchor" href="#_507-insufficient-storage-webdav" aria-label="Permalink to &quot;507 Insufficient Storage (WebDAV)&quot;">​</a></h3><p>无法在资源上执行该方法，因为服务器无法存储成功完成请求所需的表示。</p><h3 id="_508-loop-detected-webdav" tabindex="-1">508 Loop Detected (WebDAV) <a class="header-anchor" href="#_508-loop-detected-webdav" aria-label="Permalink to &quot;508 Loop Detected (WebDAV)&quot;">​</a></h3><p>服务器在处理请求时检测到无限循环。</p><h3 id="_510-not-extended" tabindex="-1">510 Not Extended <a class="header-anchor" href="#_510-not-extended" aria-label="Permalink to &quot;510 Not Extended&quot;">​</a></h3><p>服务器需要对请求进行进一步扩展才能完成请求。</p><h3 id="_511-network-authentication-required" tabindex="-1">511 Network Authentication Required <a class="header-anchor" href="#_511-network-authentication-required" aria-label="Permalink to &quot;511 Network Authentication Required&quot;">​</a></h3><p>指示客户端需要进行身份验证才能获得网络访问权限。</p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status</a></p>',130),n=[i];function d(l,h,u,s,c,p){return t(),a("div",null,n)}const _=e(r,[["render",d]]);export{q as __pageData,_ as default};
