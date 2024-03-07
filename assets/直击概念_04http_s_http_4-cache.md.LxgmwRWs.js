import{_ as e,E as n,c as t,J as i,V as s,o as p}from"./chunks/framework.VAJu91au.js";const F=JSON.parse('{"title":"HTTP 缓存","description":"","frontmatter":{},"headers":[],"relativePath":"直击概念/04http/s_http_4-cache.md","filePath":"直击概念/04http/s_http_4-cache.md","lastUpdated":1708674619000}'),l={name:"直击概念/04http/s_http_4-cache.md"},h=s('<h1 id="http-缓存" tabindex="-1">HTTP 缓存 <a class="header-anchor" href="#http-缓存" aria-label="Permalink to &quot;HTTP 缓存&quot;">​</a></h1><p>HTTP 缓存会存储与请求关联的响应，并将存储的响应复用于后续请求。</p><p><code>可复用性</code>有几个优点。首先，由于不需要将请求传递到源服务器，因此客户端和缓存越近，响应速度就越快。最典型的例子是浏览器本身为浏览器请求存储缓存。</p><p>此外，当响应可复用时，源<code>服务器不需要处理请求</code>——因为它不需要解析和路由请求、根据 cookie 恢复会话、查询数据库以获取结果或渲染模板引擎。这减少了服务器上的负载。</p><p>缓存的正确操作对系统的稳定运行至关重要。</p><p><strong>不同种类的缓存</strong></p><p>在 <a href="https://httpwg.org/specs/rfc9111.html" target="_blank" rel="noreferrer">HTTP Caching</a> 标准中，有两种不同类型的缓存：<code>私有缓存</code>和<code>共享缓存</code>。</p><h2 id="缓存的种类" tabindex="-1">缓存的种类 <a class="header-anchor" href="#缓存的种类" aria-label="Permalink to &quot;缓存的种类&quot;">​</a></h2><h3 id="私有缓存" tabindex="-1">私有缓存 <a class="header-anchor" href="#私有缓存" aria-label="Permalink to &quot;私有缓存&quot;">​</a></h3><p>私有缓存是绑定到特定客户端的缓存——通常是浏览器缓存。由于存储的响应不与其他客户端共享，因此私有缓存可以存储该用户的个性化响应。</p><p>另一方面，如果个性化内容存储在私有缓存以外的缓存中，那么其他用户可能能够检索到这些内容——这可能会导致无意的信息泄露。</p><p>如果响应包含个性化内容并且你只想将响应存储在私有缓存中，则必须指定 <code>private</code> 指令。</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Cache-Control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> private</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>个性化内容通常由 cookie 控制，但 cookie 的存在并不能表明它是私有的，因此单独的 cookie 不会使响应成为私有的。</p><p>请注意，如果响应具有 Authorization 标头，则不能将其存储在私有缓存（或共享缓存，除非 Cache-Control 指定的是 public）中。</p><h3 id="共享缓存" tabindex="-1">共享缓存 <a class="header-anchor" href="#共享缓存" aria-label="Permalink to &quot;共享缓存&quot;">​</a></h3><p>共享缓存位于客户端和服务器之间，可以存储能在用户之间共享的响应。共享缓存可以进一步细分为<code>代理缓存</code>和<code>托管缓存</code>。</p><h3 id="代理缓存" tabindex="-1">代理缓存 <a class="header-anchor" href="#代理缓存" aria-label="Permalink to &quot;代理缓存&quot;">​</a></h3><p>除了访问控制的功能外，一些代理还实现了缓存以减少网络流量。这通常不由服务开发人员管理，因此必须由恰当的 HTTP 标头等控制。然而，在过去，过时的代理缓存实现——例如没有正确理解 HTTP 缓存标准的实现——经常给开发人员带来问题。</p><p>Kitchen-sink 标头如下所示，用于尝试解决不理解当前 HTTP 缓存规范指令（如 no-store）的“旧且未更新的代理缓存”的实现。</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Cache-Control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然而，近年来，随着 HTTPS 变得越来越普遍，客户端/服务器通信变得加密，在许多情况下，路径中的代理缓存只能传输响应而不能充当缓存。因此，在这种情况下，无需担心甚至无法看到响应的过时代理缓存的实现。</p><h3 id="托管缓存" tabindex="-1">托管缓存 <a class="header-anchor" href="#托管缓存" aria-label="Permalink to &quot;托管缓存&quot;">​</a></h3><p>托管缓存由服务开发人员明确部署，以降低源服务器负载并有效地交付内容。示例包括反向代理、CDN 和 service worker 与缓存 API 的组合。</p><p>托管缓存的特性因部署的产品而异。在大多数情况下，你可以通过 Cache-Control 标头和你自己的配置文件或仪表板来控制缓存的行为。</p>',25),r=s(`<div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Cache-Control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no-store</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>例如，HTTP 缓存规范本质上没有定义显式删除缓存的方法——但是使用托管缓存，可以通过仪表板操作、API 调用、重新启动等实时删除已经存储的响应。这允许更主动的缓存策略。</p><p>也可以忽略标准 HTTP 缓存规范协议以支持显式操作。例如，可以指定以下内容以选择退出私有缓存或代理缓存，同时使用你自己的策略仅在托管缓存中进行缓存。</p><h3 id="启发式缓存" tabindex="-1">启发式缓存 <a class="header-anchor" href="#启发式缓存" aria-label="Permalink to &quot;启发式缓存&quot;">​</a></h3><p>HTTP 旨在尽可能多地缓存，因此即使没有给出 Cache-Control，如果满足某些条件，响应也会被存储和重用。这称为启发式缓存。</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HTTP/1.1 200 OK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Content-Type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> text/html</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Content-Length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1024</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Date</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Tue, 22 Feb 2022 22:22:22 GMT</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Last-Modified</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Tue, 22 Feb 2021 22:22:22 GMT</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>启发式缓存是在 Cache-Control 被广泛采用之前出现的一种解决方法，基本上所有响应都应明确指定 <code>Cache-Control</code> 标头。</p><h2 id="缓存策略" tabindex="-1">缓存策略 <a class="header-anchor" href="#缓存策略" aria-label="Permalink to &quot;缓存策略&quot;">​</a></h2><p>存储的 HTTP 响应有两种状态：fresh 和 stale。fresh 状态通常表示响应仍然有效，可以重复使用，而 stale 状态表示缓存的响应已经过期。</p><h3 id="基于-age-的缓存策略" tabindex="-1">基于 age 的缓存策略 <a class="header-anchor" href="#基于-age-的缓存策略" aria-label="Permalink to &quot;基于 age 的缓存策略&quot;">​</a></h3><p>当响应存储在共享缓存中时，有必要通知客户端响应的 age。继续看示例，如果共享缓存将响应存储了一天，则共享缓存将向后续客户端请求发送以下响应。</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HTTP/1.1 200 OK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Content-Type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> text/html</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Content-Length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1024</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Date</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Tue, 22 Feb 2022 22:22:22 GMT</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Cache-Control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> max-age=604800</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 86400</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!doctype html&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">…</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>收到该响应的客户端会发现它在剩余的 518400 秒内是有效的，这是响应的 max-age 和 Age 之间的差异。</p><h3 id="expires-或-max-age" tabindex="-1">Expires 或 max-age <a class="header-anchor" href="#expires-或-max-age" aria-label="Permalink to &quot;Expires 或 max-age&quot;">​</a></h3><p>在 HTTP/1.0 中，有效期是通过 Expires 标头来指定的。</p><p>Expires 标头使用明确的时间而不是通过指定经过的时间来指定缓存的生命周期。</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Expires</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Tue, 28 Feb 2022 22:22:22 GMT</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>但是时间格式难以解析，也发现了很多实现的错误，有可能通过故意偏移系统时钟来诱发问题；因此，在 HTTP/1.1 中，Cache-Control 采用了 max-age——用于指定经过的时间。</p><p>如果 Expires 和 Cache-Control: max-age 都可用，则将 max-age 定义为首选。因此，由于 HTTP/1.1 已被广泛使用，无需特地提供 Expires。</p><h3 id="vary-响应" tabindex="-1">Vary 响应 <a class="header-anchor" href="#vary-响应" aria-label="Permalink to &quot;Vary 响应&quot;">​</a></h3><p>区分响应的方式本质上是基于它们的 URL：</p>`,21),d=s('<p>但是响应的内容并不总是相同的，即使它们具有相同的 URL。特别是在执行内容协商时，来自服务器的响应可能取决于 Accept、Accept-Language 和 Accept-Encoding 请求标头的值。</p><p>例如，对于带有 Accept-Language: en 标头并已缓存的英语内容，不希望再对具有 Accept-Language: ja 请求标头的请求重用该缓存响应。在这种情况下，你可以通过在 Vary 标头的值中添加“Accept-Language”，根据语言单独缓存响应。</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Vary</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Accept-Language</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这会导致缓存基于响应 URL 和 Accept-Language 请求标头的组合进行键控——而不是仅仅基于响应 URL。</p><p>此外，如果你基于用户代理提供内容优化（例如，响应式设计），你可能会想在 Vary 标头的值中包含“User-Agent”。但是，User-Agent 请求标头通常具有非常多的变体，这大大降低了缓存被重用的机会。因此，如果可能，请考虑一种基于特征检测而不是基于 User-Agent 请求标头来改变行为的方法。</p>',5),k=s(`<p>对于使用 cookie 来防止其他人重复使用缓存的个性化内容的应用程序，你应该指定 Cache-Control: private 而不是为 Vary 指定 cookie。</p><h3 id="if-modified-since-if-none-match-验证响应" tabindex="-1">If-Modified-Since / If-None-Match 验证响应 <a class="header-anchor" href="#if-modified-since-if-none-match-验证响应" aria-label="Permalink to &quot;If-Modified-Since / If-None-Match 验证响应&quot;">​</a></h3><p>过时的响应不会立即被丢弃。HTTP 有一种机制，可以通过询问源服务器将陈旧的响应转换为新的响应。这称为验证，有时也称为重新验证。</p><p>验证是通过使用包含 If-Modified-Since 或 If-None-Match 请求标头的条件请求完成的。</p><h3 id="etag-if-none-match-验证响应" tabindex="-1">ETag/If-None-Match 验证响应 <a class="header-anchor" href="#etag-if-none-match-验证响应" aria-label="Permalink to &quot;ETag/If-None-Match 验证响应&quot;">​</a></h3><p>ETag 响应标头的值是服务器生成的任意值。服务器对于生成值没有任何限制，因此服务器可以根据他们选择的任何方式自由设置值——例如主体内容的哈希或版本号。</p><p>如果该响应是陈旧的，则客户端获取缓存响应的 ETag 响应标头的值，并将其放入 If-None-Match 请求标头中，以询问服务器资源是否已被修改</p><p>如果服务器为请求的资源确定的 ETag 标头的值与请求中的 If-None-Match 值相同，则服务器将返回 304 Not Modified。</p><p>但是，如果服务器确定请求的资源现在应该具有不同的 ETag 值，则服务器将其改为 200 OK 和资源的最新版本进行响应。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>在评估如何使用 ETag 和 Last-Modified 时，请考虑以下几点：</p><ul><li>在缓存重新验证期间，如果 <code>ETag 和 Last-Modified 都存在</code>，则 <code>ETag 优先</code>。</li><li>如果你只考虑缓存，你可能会认为 Last-Modified 是不必要的，然而，Last-Modified 不仅仅对缓存有用；</li><li>相反，它是一个标准的 HTTP 标头，内容管理 (CMS) 系统也使用它来显示上次修改时间，由爬虫调整爬取频率，以及用于其他各种目的。</li><li>所以考虑到整个 HTTP 生态系统，<code>最好同时提供 ETag 和 Last-Modified</code>。</li></ul></div><h3 id="强制重新验证" tabindex="-1">强制重新验证 <a class="header-anchor" href="#强制重新验证" aria-label="Permalink to &quot;强制重新验证&quot;">​</a></h3><p>如果你不希望重复使用响应，而是希望始终从服务器获取最新内容，则可以使用 <code>no-cache</code> 指令强制验证。</p><p>通过在响应中添加 Cache-Control: <code>no-cache</code> 以及 <code>Last-Modified</code> 和 ETag——如下所示——如果请求的资源已更新，客户端将收到 200 OK 响应，否则，如果请求的资源尚未更新，则会收到 304 Not Modified 响应。</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HTTP/1.1 200 OK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Content-Type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> text/html</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Content-Length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1024</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Date</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Tue, 22 Feb 2022 22:22:22 GMT</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Last-Modified</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Tue, 22 Feb 2022 22:00:00 GMT</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ETag</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deadbeef</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Cache-Control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no-cache</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!doctype html&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">…</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="不使用缓存" tabindex="-1">不使用缓存 <a class="header-anchor" href="#不使用缓存" aria-label="Permalink to &quot;不使用缓存&quot;">​</a></h3><p><code>no-cache</code> 指令不会阻止响应的存储，而是阻止在没有重新验证的情况下重用响应。</p><p>如果你不希望将响应存储在任何缓存中，请使用 <code>no-store</code>。</p><p>但是，一般来说，实践中“不缓存”的原因满足以下情况：</p><ul><li>出于隐私原因，不希望特定客户以外的任何人存储响应。</li><li>希望始终提供最新信息。</li><li>不知道在过时的实现中会发生什么。</li></ul><p>在这种情况下，no-store 并不总是最合适的指令。</p><h4 id="不与其他用户共享" tabindex="-1">不与其他用户共享 <a class="header-anchor" href="#不与其他用户共享" aria-label="Permalink to &quot;不与其他用户共享&quot;">​</a></h4><p>如果具有个性化内容的响应意外地对缓存的其他用户可见，那将是有问题的。 在这种情况下，使用 private 指令将导致个性化响应仅与特定客户端一起存储，而不会泄露给缓存的任何其他用户。</p><p>在这种情况下，即使设置了 no-store，也必须设置 private。</p><h4 id="每次都提供最新的内容" tabindex="-1">每次都提供最新的内容 <a class="header-anchor" href="#每次都提供最新的内容" aria-label="Permalink to &quot;每次都提供最新的内容&quot;">​</a></h4><p>no-store 指令阻止存储响应，但不会删除相同 URL 的任何已存储响应。换句话说，如果已经为特定 URL 存储了旧响应，则返回 no-store 不会阻止旧响应被重用。</p><p>但是，no-cache 指令将强制客户端在重用任何存储的响应之前发送验证请求。如果服务端不支持条件请求，你可以强制客户端每次都访问服务端，总是得到最新的 200 OK 响应。</p><h4 id="兼容过时的实现" tabindex="-1">兼容过时的实现 <a class="header-anchor" href="#兼容过时的实现" aria-label="Permalink to &quot;兼容过时的实现&quot;">​</a></h4><p>作为忽略 no-store 的过时实现的解决方法，你可能会看到使用了诸如以下内容的 kitchen-sink 标头</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Cache-Control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>推荐使用 no-cache 作为处理这种过时的实现的替代方案，如果从一开始就设置 no-cache 就没问题，因为服务器总是会收到请求。</p><p>如果你关心的是共享缓存，你可以通过添加 private 来防止意外缓存：</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Cache-Control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no-cache, private</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>因此，要获得 Web 平台的全部功能集的优势，最好将 no-cache 与 private 结合使用。</p><h3 id="重新加载" tabindex="-1">重新加载 <a class="header-anchor" href="#重新加载" aria-label="Permalink to &quot;重新加载&quot;">​</a></h3><p>可以对请求和响应执行验证。</p><p><strong>重新加载</strong>和<strong>强制重新加载</strong>操作是从浏览器端执行验证的常见示例。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 注意：“reload”不是正常重新加载的正确模式；“no-cache”才是</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { cache: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;no-cache&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="强制重新加载" tabindex="-1">强制重新加载 <a class="header-anchor" href="#强制重新加载" aria-label="Permalink to &quot;强制重新加载&quot;">​</a></h3><p>出于向后兼容的原因，浏览器在重新加载期间使用 max-age=0——因为在 HTTP/1.1 之前的许多过时的实现中不理解 no-cache。</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> / </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">HTTP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Host</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> example.com</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Cache-Control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> max-age=0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">If-None-Match</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;deadbeef&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">If-Modified-Since</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Tue, 22 Feb 2022 20:20:20 GMT</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>但是在这个用例中，no-cache 已被支持，并且强制重新加载是绕过缓存响应的另一种方法。</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> / </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">HTTP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Host</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> example.com</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Pragma</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no-cache</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Cache-Control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no-cache</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>由于这不是带有 no-cache 的条件请求，因此你可以确定你会从源服务器获得 200 OK。</p><p>该行为也在 Fetch 标准中定义，并且可以通过在缓存模式设置为 reload 的情况下，在 JavaScript 中调用 fetch() 来重现（注意它不是 force-reload）：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 注意：“reload”——而不是“no-cache”——是“强制重新加载”的正确模式</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { cache: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;reload&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="避免重新验证" tabindex="-1">避免重新验证 <a class="header-anchor" href="#避免重新验证" aria-label="Permalink to &quot;避免重新验证&quot;">​</a></h3><p>永远不会改变的内容应该被赋予一个较长的 max-age，方法是使用缓存破坏——也就是说，在请求 URL 中包含版本号、哈希值等。</p><p>但是，当用户重新加载时，即使服务器知道内容是不可变的，也会发送重新验证请求。为了防止这种情况，immutable 指令可用于明确指示不需要重新验证，因为内容永远不会改变。</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Cache-Control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> max-age=31536000, immutable</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这可以防止在重新加载期间进行不必要的重新验证。</p><p>请注意，Chrome 已更改其实现而不是实现该指令，因此重新验证不是在重新加载子资源期间执行。</p><h3 id="删除存储的响应" tabindex="-1">删除存储的响应 <a class="header-anchor" href="#删除存储的响应" aria-label="Permalink to &quot;删除存储的响应&quot;">​</a></h3><p>基本上没有办法删除用很长的 max-age 存储的响应。想象一下，来自 <a href="https://example.com/" target="_blank" rel="noreferrer">https://example.com/</a> 的以下响应已被存储。</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HTTP/1.1 200 OK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Content-Type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> text/html</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Content-Length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1024</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Cache-Control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> max-age=31536000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!doctype html&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">…</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>一旦响应在服务器上过期，你可能希望覆盖该响应，但是一旦存储响应，服务器就无法执行任何操作——因为由于缓存，不再有请求到达服务器。</p><p>规范中提到的方法之一是使用不安全的方法（例如 POST）发送对同一 URL 的请求，但对于许多客户端而言，通常很难故意这样做。</p><p>还有一个 Clear-Site-Data: cache 标头和值的规范，但并非所有浏览器都支持它——即使使用它，它也只会影响浏览器缓存，而不会影响中间缓存。</p><p>因此，除非用户手动执行重新加载、强制重新加载或清除历史操作，否则应该假设任何存储的响应都将保留其 max-age 期间。</p><p>缓存减少了对服务器的访问，这意味着服务器失去了对该 URL 的控制。如果服务器不想失去对 URL 的控制——例如，在资源被频繁更新的情况下——你应该添加 no-cache，以便服务器始终接收请求并发送预期的响应。</p><h3 id="请求折叠" tabindex="-1">请求折叠 <a class="header-anchor" href="#请求折叠" aria-label="Permalink to &quot;请求折叠&quot;">​</a></h3><p>共享缓存主要位于源服务器之前，旨在减少到源服务器的流量。</p><p>因此，如果多个相同的请求同时到达共享缓存，中间缓存将代表自己将单个请求转发到源，然后源可以将结果重用于所有客户端。这称为请求折叠。</p><p>当请求同时到达时会发生请求折叠，因此即使响应中给出了 max-age=0 或 no-cache，它也会被重用。</p><p>如果响应是针对特定用户个性化的，并且你不希望它在折叠中共享，则应添加 private 指令：</p>`,64),c=s('<h3 id="常见的缓存模式" tabindex="-1">常见的缓存模式 <a class="header-anchor" href="#常见的缓存模式" aria-label="Permalink to &quot;常见的缓存模式&quot;">​</a></h3><p>Cache-Control 规范中有很多指令，可能很难全部理解。但是大多数网站都可以通过几种模式的组合来覆盖。本节介绍设计缓存的常见模式。</p><h4 id="默认设置" tabindex="-1">默认设置 <a class="header-anchor" href="#默认设置" aria-label="Permalink to &quot;默认设置&quot;">​</a></h4><p>如上所述，缓存的默认行为（即对于没有 Cache-Control 的响应）不是简单的“不缓存”，而是根据所谓的“启发式缓存”进行隐式缓存。</p><p>为了避免这种启发式缓存，最好显式地为所有响应提供一个默认的 Cache-Control 标头。</p><p>为确保默认情况下始终传输最新版本的资源，通常的做法是让默认的 Cache-Control 值包含 no-cache：<code>Cache-Control: no-cache</code></p><p>另外，如果服务实现了 cookie 或其他登录方式，并且内容是为每个用户个性化的，那么也必须提供 private，以防止与其他用户共享：<code>Cache-Control: no-cache, private</code></p><h4 id="缓存破坏" tabindex="-1">缓存破坏 <a class="header-anchor" href="#缓存破坏" aria-label="Permalink to &quot;缓存破坏&quot;">​</a></h4><p>最适合缓存的资源是静态不可变文件，其内容永远不会改变。而对于会变化的资源，通常的最佳实践是每次内容变化时都改变 URL，这样 URL 单元可以被缓存更长的时间。</p><p>在现代 Web 开发中，JavaScript 和 CSS 资源会随着开发的进展而频繁更新。此外，如果客户端使用的 JavaScript 和 CSS 资源的版本不同步，则显示将中断。</p><p>因此，你可以使用包含基于版本号或哈希值的更改部分的 URL 来提供 JavaScript 和 CSS。</p><p><a href="https://datatracker.ietf.org/doc/html/rfc9204" target="_blank" rel="noreferrer">QPACK</a> 是一种用于压缩 HTTP 标头字段的标准，其中定义了常用字段值表。</p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching</a></p>',14);function o(g,b,u,m,y,E){const a=n("Image");return p(),t("div",null,[h,i(a,{src:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching/type-of-cache.png",alt:"托管缓存",inline:!1}),r,i(a,{src:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching/keyed-with-url.png",alt:"区分响应的方式本质上是基于它们的URL",inline:!1}),d,i(a,{src:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching/keyed-with-url-and-language.png",alt:"这会导致缓存基于响应 URL 和 Accept-Language请求标头的组合进行键控",inline:!1}),k,i(a,{src:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching/request-collapse.png",alt:"请求折叠",inline:!1}),c])}const v=e(l,[["render",o]]);export{F as __pageData,v as default};
