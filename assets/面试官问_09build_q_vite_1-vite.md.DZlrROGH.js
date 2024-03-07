import{_ as e,c as t,o as i,V as a}from"./chunks/framework.VAJu91au.js";const _=JSON.parse('{"title":"Vite","description":"","frontmatter":{},"headers":[],"relativePath":"面试官问/09build/q_vite_1-vite.md","filePath":"面试官问/09build/q_vite_1-vite.md","lastUpdated":1708674619000}'),o={name:"面试官问/09build/q_vite_1-vite.md"},l=a('<h1 id="vite" tabindex="-1">Vite <a class="header-anchor" href="#vite" aria-label="Permalink to &quot;Vite&quot;">​</a></h1><blockquote><p>Webpack先出嘛，问到区别和与Webpack有关的都到先整理到那边了</p></blockquote><h2 id="vite-为什么不用-esbuild-打包" tabindex="-1">Vite 为什么不用 esbuild 打包 <a class="header-anchor" href="#vite-为什么不用-esbuild-打包" aria-label="Permalink to &quot;Vite 为什么不用 esbuild 打包&quot;">​</a></h2><p>目前暂不支持代码分隔和 css 相关处理，但是生产环境的代码仍需一些分包功能来提升应用性能</p><h2 id="vite-涉及到了哪些底层原理" tabindex="-1">vite 涉及到了哪些底层原理 <a class="header-anchor" href="#vite-涉及到了哪些底层原理" aria-label="Permalink to &quot;vite 涉及到了哪些底层原理&quot;">​</a></h2><details class="details custom-block"><summary>详细信息</summary><ul><li><p><strong>ESM</strong>：Vite 使用了 <code>ES Module</code> 来管理和加载模块。ES 模块是 JavaScript 的标准模块系统，相比于传统的 CommonJS 或 AMD，ES 模块具有更好的静态分析能力和更高的性能。Vite 通过使用浏览器原生的 ES 模块加载器，可以实现按需加载和快速构建。</p></li><li><p><strong>HTTP/2</strong>：Vite 借助于现代浏览器的 HTTP/2 支持来实现<code>更高效的资源加载</code>。HTTP/2 支持<code>多路复用</code>，可以<code>同时请求多个资源</code>，避免了传统的 HTTP/1 中的队头阻塞问题，<code>加快了资源加载速度</code>。</p></li><li><p><strong>编译器</strong>：Vite 使用了<code>自定义的编译器</code>来处理开发时的<code>模块解析和转换</code>。它能够识别模块的依赖关系，并将模块转换为浏览器可直接执行的代码。Vite 的编译器支持<code>热模块替换（HMR）</code>，可以在代码修改时自动更新浏览器中的页面，提高开发效率。</p></li><li><p><strong>中间件</strong>：Vite 使用了<code>基于 Koa 框架的中间件</code>来处理开发服务器。通过中间件，Vite 可以拦截和处理开发时的 HTTP 请求，并根据请求的路径返回相应的模块文件。中间件还可以处理各种开发时的特殊需求，如代理 API 请求、路由转发等。</p></li></ul></details><h2 id="vite-编译器的组成部分" tabindex="-1">vite 编译器的组成部分 <a class="header-anchor" href="#vite-编译器的组成部分" aria-label="Permalink to &quot;vite 编译器的组成部分&quot;">​</a></h2><details class="details custom-block"><summary>详细信息</summary><ul><li><p><strong>esbuild</strong>：一个快速的 JavaScript 打包器，用于在开发阶段进行实时编译。esbuild 提供了快速的冷启动和热模块替换功能，能够极大地加快开发环境的构建速度。</p></li><li><p><strong>Rollup</strong>：一个强大的 JavaScript 模块打包器，在生产构建阶段使用。Rollup 能够将源代码打包为最终可发布的文件，支持<code>代码分割</code>、<code>Tree Shaking</code> 等优化技术，生成更小、更高效的代码包。</p></li><li><p><strong>前端开发服务器</strong>：Vite 还提供了一个内置的开发服务器，用于提供开发环境下的静态文件服务和构建工具集成。这个服务器能够利用 esbuild 实现快速的编译和热模块替换，使开发者在开发过程中可以快速地预览和调试代码。</p></li><li><p><strong>插件系统</strong>：Vite 通过插件系统来扩展其功能。开发者可以编写自定义的插件，用于处理特定的文件类型、引入额外的功能或者定制构建过程。插件系统使得 Vite 能够与各种前端框架和工具集成，并提供更灵活的开发体验。</p></li></ul></details><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><h3 id="esbuild-和-rollup-区别" tabindex="-1">esbuild 和 rollup 区别 <a class="header-anchor" href="#esbuild-和-rollup-区别" aria-label="Permalink to &quot;esbuild 和 rollup 区别&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>esbuild 和 Rollup 都是 Vite 的<code>基础依赖</code>，但它们的<code>分工</code>是不同的。</p><ul><li><code>esbuild</code> 用于<code>开发服务器阶段</code>，通过实时编译和提供模块来实现快速的冷启动和热模块替换。</li><li><code>Rollup</code> 用于<code>生产构建阶段</code>，将源代码打包为最终可发布的文件，以用于部署到生产环境。这样的分工使得 Vite 在开发过程中能够快速响应变化，并在构建过程中生成高效的最终输出文件。</li></ul></details><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7319311129867010111#heading-13" target="_blank" rel="noreferrer">四万字长文 - 2024 年第一波常见面试题汇总</a>——晴小篆</li></ul>',13),d=[l];function s(r,c,u,n,p,h){return i(),t("div",null,d)}const m=e(o,[["render",s]]);export{_ as __pageData,m as default};
