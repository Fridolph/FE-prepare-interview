import{_ as s,c as i,o as a,V as e}from"./chunks/framework.VAJu91au.js";const u=JSON.parse('{"title":"Promise","description":"","frontmatter":{},"headers":[],"relativePath":"面试官问/02js/q_es6_2-promise.md","filePath":"面试官问/02js/q_es6_2-promise.md","lastUpdated":1709481614000}'),l={name:"面试官问/02js/q_es6_2-promise.md"},n=e(`<h1 id="promise" tabindex="-1">Promise <a class="header-anchor" href="#promise" aria-label="Permalink to &quot;Promise&quot;">​</a></h1><p>知识回顾</p><ul><li><a href="./../../直击概念/02js/s_promise_1-design.html">Promise 设计</a></li><li><a href="./../../直击概念/02js/s_promise_2-base.html">Promise 基础</a></li></ul><h2 id="promise-基础" tabindex="-1">Promise 基础 <a class="header-anchor" href="#promise-基础" aria-label="Permalink to &quot;Promise 基础&quot;">​</a></h2><details class="details custom-block"><summary>详细信息</summary><ul><li>Promise 是异步编程的一种解决方案，比传统的解决方案使用回调函数和事件更合理和更强大</li><li>它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了 Promise 对象</li><li>有了 Promise 对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数</li><li>此外，Promise 对象提供统一的接口，使得控制异步操作更加容易。</li></ul></details><h3 id="promise-then-在-event-loop-中的执行顺序" tabindex="-1">Promise.then 在 Event Loop 中的执行顺序 <a class="header-anchor" href="#promise-then-在-event-loop-中的执行顺序" aria-label="Permalink to &quot;Promise.then 在 Event Loop 中的执行顺序&quot;">​</a></h3><blockquote><p>后面补充题目，知道考点是什么就够了</p></blockquote><h3 id="promise-存在哪些缺点-如何解决" tabindex="-1">Promise 存在哪些缺点，如何解决 <a class="header-anchor" href="#promise-存在哪些缺点-如何解决" aria-label="Permalink to &quot;Promise 存在哪些缺点，如何解决&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ol><li>无法取消 Promise，一旦新建它就会立即执行，无法中途取消</li><li>如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部</li><li>吞掉错误或异常，错误只能顺序处理，即便在 Promise 链最后添加 catch 方法，依然可能存在无法捕捉的错误（catch 内部可能会出现错误）</li><li>阅读代码不是一眼可以看懂，你只会看到一堆 then，必须自己在 then 的回调函数里面理清逻辑</li></ol><blockquote><p>引出 async / await 通过 try catch 捕获错误</p></blockquote></details><h3 id="如何停止一个-promise-链" tabindex="-1">如何停止一个 Promise 链 <a class="header-anchor" href="#如何停止一个-promise-链" aria-label="Permalink to &quot;如何停止一个 Promise 链&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>在要停止的 promise 链位置添加一个方法，返回一个永远不执行 resolve 或者 reject 的 Promise，那么这个 promise 永远处于 pending 状态，所以永远也不会向下执行 then 或 catch 了。这样我们就停止了一个 promise 链。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.cancel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details><h3 id="promise-链上返回的最后一个-promise-出错了怎么办" tabindex="-1">Promise 链上返回的最后一个 Promise 出错了怎么办 <a class="header-anchor" href="#promise-链上返回的最后一个-promise-出错了怎么办" aria-label="Permalink to &quot;Promise 链上返回的最后一个 Promise 出错了怎么办&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>catch 在 promise 链式调用的末尾调用，用于捕获链条中的错误信息，但是 catch 方法内部也可能出现错误，所以有些 promise 实现中增加了一个方法 done，done 相当于提供了一个不会出错的 catch 方法，并且不再返回一个 promise，一般用来结束一个 promise 链。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">done</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">reason</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;done&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, reason);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     throw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> reason;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details><h2 id="如何用-promise-控制并发" tabindex="-1">如何用 Promise 控制并发 <a class="header-anchor" href="#如何用-promise-控制并发" aria-label="Permalink to &quot;如何用 Promise 控制并发&quot;">​</a></h2><ul><li>Promise.all() 但有缺点，一个错误就返回了，不会执行后面的 then 方法</li><li>Promise.allSettled() 控制并发，在你有多个不依赖于彼此成功完成的异步任务时，或者你总是想知道每个 promise 的结果。但也有缺点，无法控制顺序</li><li>封装一个 Promise 并发函数</li></ul><details class="details custom-block"><summary>详细信息</summary><ul><li><p>明确概念</p></li><li><p><code>并发</code>：并发是多个任务同时交替的执行（因为 cpu 执行指令的速度非常之快，它可以不必按顺序一段代码一段代码的执行，这样效率反而更加低下），这样看起来就是一起执行的，所以叫并发。</p></li><li><p><code>并行</code>：可以理解为多个物理 cpu 或者有分布式系统，是真正的&#39;同时&#39;执行</p></li><li><p><code>并发控制</code>：意思是多个并发的任务，一旦有任务完成，就立刻开启下一个任务</p></li><li><p><code>切片控制</code>：将并发任务切片的分配出来，比如 10 个任务，切成 2 个片，每片有 5 个任务，当前一片的任务执行完毕，再开始下一个片的任务，这样明显效率没并发控制那么高了</p></li><li><p>思路</p></li></ul><p>首先执行能执行的并发任务，根据并发的概念，每个任务执行完毕后，捞起下一个要执行的任务。 将关键步骤拆分出合适的函数来组织代码</p><ol><li>循环去启动能执行的任务</li><li>取出任务并且推到执行器执行</li><li>执行器内更新当前的并发数，并且触发捞起任务</li><li>捞起任务里面可以触发最终的回调函数和调起执行器继续执行任务</li></ol><ul><li>具体实现</li></ul><p><a href="./../../编写代码/02js/c_promise_2-concurrent/c_promise_2-concurrent.html">Promise 控制并发请求</a></p></details><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7219961144584552504" target="_blank" rel="noreferrer">听说你会 Promise？ 那么如何控制请求并发数呢</a>——JetTsang</li></ul>`,18),t=[n];function r(p,h,o,k,d,m){return a(),i("div",null,t)}const E=s(l,[["render",r]]);export{u as __pageData,E as default};
