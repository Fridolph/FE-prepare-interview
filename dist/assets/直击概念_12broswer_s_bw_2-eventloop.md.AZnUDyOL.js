import{_ as i,E as t,c as o,J as l,V as e,o as r}from"./chunks/framework.GzbH9VPN.js";const k=JSON.parse('{"title":"事件循环 Event Loop","description":"","frontmatter":{},"headers":[],"relativePath":"直击概念/12broswer/s_bw_2-eventloop.md","filePath":"直击概念/12broswer/s_bw_2-eventloop.md","lastUpdated":1708607523000}'),n={name:"直击概念/12broswer/s_bw_2-eventloop.md"},s=e('<h1 id="事件循环-event-loop" tabindex="-1">事件循环 Event Loop <a class="header-anchor" href="#事件循环-event-loop" aria-label="Permalink to &quot;事件循环 Event Loop&quot;">​</a></h1><p>自测 <a href="./../../面试官问/12broswer/q_bw_2-eventloop.html">JavaScript 事件循环</a></p><h2 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h2><p>事件循环是<code>单线程</code>的 JavaScript 在<code>处理异步</code>事件时进行的一种<code>循环过程</code>。</p><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p><strong>JavaScript 是以单线程的方式运行的</strong></p><ul><li>同一时刻只能执行特定的任务，而浏览器是多线程的</li><li>JavaScript 为了避免复杂性，而实现单线程执行</li></ul><p><strong>可这样简单理解 JS 的单线程：</strong></p><ul><li>从前到后，一行行执行</li><li>如果某行执行报错，则停止后续代码执行 （同步阻塞）</li><li>先把同步代码执行完，再执行异步</li></ul><h2 id="做了什么" tabindex="-1">做了什么 <a class="header-anchor" href="#做了什么" aria-label="Permalink to &quot;做了什么&quot;">​</a></h2><p>Event Loop <strong>解决了 JavaScript 作为单线程语言时的并发性问题</strong>，其执行过程如下：</p><ul><li>同步代码，放到调用栈，依次执行完</li><li>期间若有异步代码，标记并放到任务队列等待时机执行</li><li>无同步代码（调用栈为空），检查任务队列： <ul><li>如果调用栈为空（同步代码执行完）Event Loop 开始工作</li><li>轮询查找调用队列，若有待执行事件则移动到调用栈执行</li><li>只要有空闲就不断轮询查找</li></ul></li><li>重复以上步骤形成事件循环</li></ul>',12),p=e('<p>这只是把事件循环这个概念说了，很多重点还没浮出水面。答到这，面试官肯定不会满意，所以你还需要了解以下概念，顶住下一轮深挖。</p><h2 id="需要了解的几个概念" tabindex="-1">需要了解的几个概念 <a class="header-anchor" href="#需要了解的几个概念" aria-label="Permalink to &quot;需要了解的几个概念&quot;">​</a></h2><h3 id="主线程-main-thread" tabindex="-1">主线程 Main thread <a class="header-anchor" href="#主线程-main-thread" aria-label="Permalink to &quot;主线程 Main thread&quot;">​</a></h3><p><code>所有的同步任务都是在主线程里执行的。</code>主线程用于浏览器处理用户事件和页面绘制等。默认情况下，浏览器在一个线程中运行一个页面中的所有 JavaScript 脚本，以及呈现布局，回流，和垃圾回收。</p><ul><li>同步任务： 指在主线程上排队等待执行的任务，只有前一个任务执行完毕，才能执行后一个任务</li><li>异步任务： 只有引擎认为某个异步任务可以执行了，该任务（采用回调函数的形式）才会进入主线程执行</li></ul><h3 id="宏任务-macro-task" tabindex="-1">宏任务 macro task <a class="header-anchor" href="#宏任务-macro-task" aria-label="Permalink to &quot;宏任务 macro task&quot;">​</a></h3><p>指的是浏览器在执行代码的过程中会调度的任务，比如事件循环中的每一次迭代、setTimeout 和 setInterval 等。 宏任务会在浏览器完成当前同步任务之后执行。</p><p><strong>宏任务（Macrotasks）是一些较大粒度的任务：</strong></p><ul><li>所有同步任务</li><li>script <code>待执行脚本</code></li><li>I/O，如文件读写，数据库数据读写等</li><li>setTimeout、setInterval</li><li>setImmediate <code>Node环境</code></li><li>requestAnimationFrame</li><li>事件监听，回调函数等</li><li>UI render</li><li>...</li></ul><h3 id="微任务-microtask" tabindex="-1">微任务 microtask <a class="header-anchor" href="#微任务-microtask" aria-label="Permalink to &quot;微任务 microtask&quot;">​</a></h3><p>本质就是一个待调用的 function，当创建该微任务的函数执行之后，并且只有当 Javascript 调用栈为空，而控制权尚未返还给被用户代理用来驱动脚本执行环境的事件循环之前，该微任务才会被执行。</p><p><strong>微任务（Microtasks）是一些较小粒度、高优先级的任务</strong></p><ul><li>Promise</li><li>async / await</li><li>Generator 函数</li><li>mutationObserver <code>html5 API</code></li><li>process.nextTick <code>Node环境</code></li><li>...</li></ul><h2 id="展开来说" tabindex="-1">展开来说 <a class="header-anchor" href="#展开来说" aria-label="Permalink to &quot;展开来说&quot;">​</a></h2><p>事件循环是单线程的 JavaScript 在处理异步事件时进行的一种循环过程，具体来讲，对于异步事件它会先加入到事件队列中挂起，等主线程空闲时会去执行事件队列中的事件。</p><blockquote><p>在同一轮任务队列中，同一个微任务产生的微任务会放在这一轮微任务的后面，产生的宏任务会放在这一轮的宏任务后面。 在同一轮任务队列中，同一个宏任务产生的微任务会马上执行，产生的宏任务会放在这一轮的宏任务后面</p></blockquote><p><code>主线程任务——&gt;微任务——&gt;宏任务</code> 如果宏任务里还有微任就继续执行宏任务里的微任务，如果宏任务中的微任务中还有宏任务就在依次进行</p><p><code>主线程任务——&gt;微任务——&gt;宏任务——&gt;宏任务里的微任务——&gt;宏任务里的微任务中的宏任务——&gt;直到任务全部完成</code></p><p>它不停检查 Call Stack 中是否有任务（也叫栈帧）需要执行，如果没有，就检查 Event Queue，从中弹出一个任务，放入 Call Stack 中，如此往复循环。</p><h3 id="梳理-事件循环流程" tabindex="-1">梳理：事件循环流程 <a class="header-anchor" href="#梳理-事件循环流程" aria-label="Permalink to &quot;梳理：事件循环流程&quot;">​</a></h3><ol><li>主线程读取 JavaScript 代码，形成相应的堆和执行栈。</li><li>当主线程遇到异步任务时，将其委托给对应的异步进程（如 Web API）处理。</li><li>异步任务完成后，将相应的回调函数推入任务队列。</li><li>主线程执行完同步任务后，检查任务队列，如果有任务，则按照先进先出的原则将任务推入主线程执行。</li><li>重复执行以上步骤，形成事件循环。</li></ol>',21),c=e('<h3 id="梳理-任务队列执行过程" tabindex="-1">梳理：任务队列执行过程 <a class="header-anchor" href="#梳理-任务队列执行过程" aria-label="Permalink to &quot;梳理：任务队列执行过程&quot;">​</a></h3><p>首先，必须要明确，在 JavaScript 中，所有任务都在主线程上执行。任务执行过程分为同步任务和异步任务两个阶段。异步任务的处理经历两个主要阶段：<code>Event Table（事件表）</code>和 <code>Event Queue（事件队列）</code>。</p><p>Event Table 存储了宏任务的相关信息，包括事件监听和相应的回调函数。当特定类型的事件发生时，对应的回调函数被添加到事件队列中，等待执行。例如，你可以通过 addEventListener 来将事件监听器注册到事件表上：</p><p>任务队列的执行流程可概括为：</p><ol><li>同步任务在主线程排队执行，异步任务在事件队列排队等待进入主线程执行。</li><li>遇到宏任务则推进宏任务队列，遇到微任务则推进微任务队列。</li><li>执行宏任务，执行完毕后检查当前层的微任务并执行。</li><li>继续执行下一个宏任务，执行对应层次的微任务，直至全部执行完毕。</li></ol><p><strong>这个流程确保了异步任务能够在适当的时机插入执行，保持程序的高效性和响应性。</strong></p><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><h3 id="为什么先微后宏" tabindex="-1">为什么先微后宏 <a class="header-anchor" href="#为什么先微后宏" aria-label="Permalink to &quot;为什么先微后宏&quot;">​</a></h3><p>微任务会在执行任何其他事件处理，或渲染，或执行任何其他宏任务之前完成。</p><p>这很重要，因为它确保了微任务之间的应用程序环境基本相同（没有鼠标坐标更改，没有新的网络数据等）。</p><p>如果我们想要异步执行（在当前代码之后）一个函数，但是要在更改被渲染或新事件被处理之前执行，那么我们可以使用 <code>queueMicrotask</code> 来对其进行安排（schedule）</p><h3 id="node-js-和-浏览器-eventloop-的区别" tabindex="-1">Node.js 和 浏览器 eventLoop 的区别 <a class="header-anchor" href="#node-js-和-浏览器-eventloop-的区别" aria-label="Permalink to &quot;Node.js 和 浏览器 eventLoop 的区别&quot;">​</a></h3><p>两者最主要的区别在于：</p><ul><li>浏览器中的微任务是在每个相应的宏任务中执行的</li><li>Node.js 中的微任务是在不同阶段之间执行的</li></ul><h3 id="执行顺序" tabindex="-1">执行顺序 <a class="header-anchor" href="#执行顺序" aria-label="Permalink to &quot;执行顺序&quot;">​</a></h3><ol><li><p>微任务队列优先于宏任务队列执行;</p></li><li><p>微任务队列上创建的宏任务会被后添加到当前宏任务队列的尾端;</p></li><li><p>微任务队列中创建的微任务会被添加到微任务队列的尾端;</p></li><li><p>只要微任务队列中还有任务，宏任务队列就只会等待微任务队列执行完毕后再执行;</p></li><li><p>只有运行完 await 语句，才把 await 语句后面的全部代码加入到微任务行列;</p></li><li><p>在遇到 await promise 时，必须等 await promise 函数执行完毕才能对 await 语句后面的全部代码加入到微任务中;</p></li><li><p>在等待 await Promise.then 微任务时:</p></li></ol><ul><li>运行其他同步代码;</li><li>等到同步代码运行完，开始运行 await promise.then 微任务;</li><li>await promise.then 微任务完成后，把 await 语句后面的全部代码加入到微任务行列;</li></ul><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://github.com/JChehe/blog/blob/master/posts/%E5%85%B3%E4%BA%8EJavaScript%E5%8D%95%E7%BA%BF%E7%A8%8B%E7%9A%84%E4%B8%80%E4%BA%9B%E4%BA%8B.md" target="_blank" rel="noreferrer">关于 JavaScript 单线程的一些事</a> ——JChehe</li><li><a href="https://juejin.cn/post/7002037475874963493" target="_blank" rel="noreferrer">一看就懂的事件循环机制(event loop)</a>——藤原托漆</li><li><a href="https://mp.weixin.qq.com/s/W0yDX9Nme3nbBOrzLRwPbQ" target="_blank" rel="noreferrer">深入 JS 执行原理：一文搞定 EventLoop、宏任务、微任务</a>——程序员Sunday</li></ul>',19);function d(h,u,_,m,b,v){const a=t("Image");return r(),o("div",null,[s,l(a,{src:"/02js/eventloop.jpg",alt:"Loop简单流程图",inline:!1}),p,l(a,{src:"/02js/eventloop2.jpg",alt:"事件循环流程函数版",inline:!1}),c])}const f=i(n,[["render",d]]);export{k as __pageData,f as default};
