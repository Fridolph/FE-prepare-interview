import{_ as e,c as a,o as t,V as o}from"./chunks/framework.VAJu91au.js";const _=JSON.parse('{"title":"综合整理","description":"","frontmatter":{},"headers":[],"relativePath":"面试官问/12broswer/q_bw_3-other.md","filePath":"面试官问/12broswer/q_bw_3-other.md","lastUpdated":1709481614000}'),l={name:"面试官问/12broswer/q_bw_3-other.md"},i=o('<h1 id="综合整理" tabindex="-1">综合整理 <a class="header-anchor" href="#综合整理" aria-label="Permalink to &quot;综合整理&quot;">​</a></h1><blockquote><p>浏览器相关的，不知道杂细分类的都放这了</p></blockquote><h2 id="如何实现浏览器多个标签通信" tabindex="-1">如何实现浏览器多个标签通信 <a class="header-anchor" href="#如何实现浏览器多个标签通信" aria-label="Permalink to &quot;如何实现浏览器多个标签通信&quot;">​</a></h2><details class="details custom-block"><summary>通过中介者模式实现：</summary><p>标签页和中介者进行通信，然后让这个中介者来进行消息的转发。通 信方法如下：</p><ul><li><p>使用 <code>websocket</code> 协议，因为 websocket 协议可以实现服务器推送。所以服务器就可以用来当做这个中介者。标签页通过向服务器发送数据，然后由服务器向其他标签页推送转发。</p></li><li><p>使用 <code>ShareWorker</code> 的方式，shareWorker 会在页面存在的生命周期内创建一个唯一的线程，并且开启多个页面也只会使用同一个线程。这个时候共享线程就可以充当中介者的角色。标签页间通过共享一个线程，然后通过这个共享的线程来实现数据的交换。</p></li><li><p>使用 <code>localStorage</code> 的方式，我们可以在一个标签页对 localStorage 的变化事件进行监听，然后当另一个标签页修改数据的时候，我们就可以通过这个监听事件来获取到数据。这个时候 localStorage 对象就是充当的中介者的角色。</p></li><li><p>使用 <code>postMessage</code> 方法，如果我们能够获得对应标签页的引用，就可以使用 postMessage 方法，进行通信。</p></li></ul></details><h2 id="说下浏览器常见内核" tabindex="-1">说下浏览器常见内核 <a class="header-anchor" href="#说下浏览器常见内核" aria-label="Permalink to &quot;说下浏览器常见内核&quot;">​</a></h2><details class="details custom-block"><summary>详细信息</summary><ul><li>Trident 早期 IE</li><li>Gecko Firefox</li><li>Presto Opera</li><li><code>Webkit</code> Webkit 是 <code>Safari</code> 采用的内核，是 KHTML 的一个开源的分支</li><li><code>Blink</code> 谷歌在 <code>Chromium</code> 项目中研发 Blink 渲染引 擎（即浏览器核心），内置于 Chrome 浏览器之中</li></ul></details><h2 id="前端存储方式有哪些" tabindex="-1">前端存储方式有哪些 <a class="header-anchor" href="#前端存储方式有哪些" aria-label="Permalink to &quot;前端存储方式有哪些&quot;">​</a></h2><details class="details custom-block"><summary>详细信息</summary><ul><li><p>cookies 优点：兼容性好，请求头⾃带；缺点是⼤⼩只有 4k，⾃动请求头加⼊ cookie 浪费流量，domain 限制 20 个，使用麻烦；</p></li><li><p><code>localStorage</code> 优点是操作⽅便，永久性储存（除非⼿动删除），大小为 5M</p></li><li><p>sessionStorage 与 localStorage 基本类似，区别是 sessionStorage 页面关闭后失效，而且与 cookie、localStorage 不同，不能在所有同源窗⼝中共享，是会话级别的储存⽅式</p></li><li><p>IndexedDB 正式纳⼊ HTML5 标准的数据库储存方案，它是 NoSQL 数据库，⽤键值对进行储存，可以进行快速读取操作。</p></li></ul></details><h2 id="gc" tabindex="-1">GC <a class="header-anchor" href="#gc" aria-label="Permalink to &quot;GC&quot;">​</a></h2><h3 id="说一下-javascript-的垃圾回收机制" tabindex="-1">说一下 JavaScript 的垃圾回收机制 <a class="header-anchor" href="#说一下-javascript-的垃圾回收机制" aria-label="Permalink to &quot;说一下 JavaScript 的垃圾回收机制&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>JavaScript 具有自动垃圾收集机制（GC：GarbageCollecation），也就是说，执行环境会负责管理代码执行过程中使用的内存。</p><p>JS 环境中分配的内存一般有如下生命周期：</p><ul><li><code>内存分配</code>：当我们申明变量、函数、对象,并执行的时候，系统会自动为他们分配内存</li><li><code>内存使用</code>：即读写内存，也就是使用变量、函数等</li><li><code>内存回收</code>：使用完毕，由垃圾回收机制自动回收不再使用的内存</li></ul><p>浏览器会定期从全局对象中扫描内存中的对象，根据是否需要使用，将内存回收。</p><p>常见的垃圾回收策略：</p><ul><li>引用计数 老 IE，无法处理循环引用</li><li>标记清除 无法从根对象查询到的对象都将被清除，积累内存碎片较多</li><li>V8 算法</li></ul><table><thead><tr><th>回收算法</th><th>Mark-Sweep</th><th>Mark-Compact</th><th>Scavenge</th></tr></thead><tbody><tr><td>速度</td><td>中等</td><td>最慢</td><td>最快</td></tr><tr><td>空间开销</td><td>少（有碎片）</td><td>少（无碎片）</td><td>双倍空间（无碎片）</td></tr><tr><td>是否移动对象</td><td>否</td><td>是</td><td>是</td></tr></tbody></table></details>',11),r=[i];function d(c,s,h,p,n,u){return t(),a("div",null,r)}const b=e(l,[["render",d]]);export{_ as __pageData,b as default};
