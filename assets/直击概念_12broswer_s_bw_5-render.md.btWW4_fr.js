import{_ as r,E as s,c as n,J as t,V as a,m as e,a as l,o as c}from"./chunks/framework.VAJu91au.js";const le=JSON.parse('{"title":"浏览器渲染原理","description":"","frontmatter":{},"headers":[],"relativePath":"直击概念/12broswer/s_bw_5-render.md","filePath":"直击概念/12broswer/s_bw_5-render.md","lastUpdated":1709481614000}'),d={name:"直击概念/12broswer/s_bw_5-render.md"},_=a('<h1 id="浏览器渲染原理" tabindex="-1">浏览器渲染原理 <a class="header-anchor" href="#浏览器渲染原理" aria-label="Permalink to &quot;浏览器渲染原理&quot;">​</a></h1><h2 id="什么是渲染" tabindex="-1">什么是渲染 <a class="header-anchor" href="#什么是渲染" aria-label="Permalink to &quot;什么是渲染&quot;">​</a></h2><p>浏览器中的 “渲染” 指的是<code>将 HTML 字符串转化为屏幕上的像素信息的过程</code>。</p><h2 id="渲染在什么时候发生" tabindex="-1">渲染在什么时候发生 <a class="header-anchor" href="#渲染在什么时候发生" aria-label="Permalink to &quot;渲染在什么时候发生&quot;">​</a></h2><p>当我们在浏览器键入一个 URL 时，网络线程会通过网络通信<code>拿到 HTML</code>，但网络线程自身并不会处理 HTML，它会将其<code>生成一个渲染任务</code>交给<code>消息队列</code>，在<code>合适的时机</code>渲染主线程会<code>从消息队列</code>中<code>取出渲染任务执行</code>，<code>启动渲染流程</code>。</p>',5),i=a('<div class="tip custom-block"><p class="custom-block-title">提示</p><p>网络线程会通过网络通信拿到 HTML。其中会有 <a href="./s_bw_1-broswer.html#dns-查询">DNS 查询</a>、<a href="./s_bw_1-broswer.html#tcp-握手">三次握手</a>、建立 <a href="./../04http/s_http_1-http.html">HTTP</a> 连接等，暂省略。可点击查看这些部分。</p></div><h2 id="渲染流水线" tabindex="-1">渲染流水线 <a class="header-anchor" href="#渲染流水线" aria-label="Permalink to &quot;渲染流水线&quot;">​</a></h2><p>接下来我们重点来讲解渲染的流程，整个过程如下图：</p>',3),h=e("h2",{id:"_1-解析-html-parse",tabindex:"-1"},[l("1. 解析 HTML - Parse "),e("a",{class:"header-anchor",href:"#_1-解析-html-parse","aria-label":'Permalink to "1. 解析 HTML - Parse"'},"​")],-1),p=e("p",null,"由于字符串难以进行操作，浏览器首先会将 HTML 字符串解析成 DOM 树和 CSSOM 树这种容易操作的对象结构，也提供了 js 操作这两棵树的能力。",-1),u=e("ul",null,[e("li",null,[e("strong",null,"HTML 解析过程遇到 CSS")])],-1),b=e("p",null,[l("为了提高解析效率，浏览器在开始解析前，会启动一个"),e("code",null,"预解析的线程"),l("，率先"),e("code",null,"下载 HTML 中的外部 CSS 文件和 外部的 JS 文件"),l("。 如果主线程解析到 link 位置，此时外部的 CSS 文件还没有下载解析好，主线程不会等待，继续解析后续的 HTML，这是因为"),e("strong",null,"下载和解析 CSS 的工作是在预解析线程中进行的"),l("，这就是 "),e("code",null,"CSS 不会阻塞 HTML 解析"),l("的根本原因。")],-1),m=e("ul",null,[e("li",null,[e("strong",null,"主线程解析到 script 位置")])],-1),w=e("p",null,[l("如果主线程解析到 Script 位置，会"),e("code",null,"停止解析 HTML"),l("，转而"),e("code",null,"等待 JS 文件下载"),l("好，并"),e("code",null,"将全局代码解析执行完成"),l("后，才能"),e("code",null,"继续解析 HTML"),l("。")],-1),T=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"提示"),e("p",null,[l("这是因为 JS 代码的执行过程"),e("code",null,"可能会修改当前的 DOM 树"),l("，所以 DOM 树的生成必须暂停，这就是 "),e("strong",null,"JS 会阻塞 HTML 解析"),l("的根本原因。")])],-1),S=e("h2",{id:"_2-样式计算-computed-style",tabindex:"-1"},[l("2. 样式计算 - Computed Style "),e("a",{class:"header-anchor",href:"#_2-样式计算-computed-style","aria-label":'Permalink to "2. 样式计算 - Computed Style"'},"​")],-1),P=e("p",null,"经过 HTML 解析过后，我们拿到了 DOM 树和 CSSOM 树，但是光得到这两颗树还不够，还需要知道每个 DOM 对应哪些样式。",-1),M=e("p",null,[l("主线程会遍历得到的 DOM 树，依次为树中的每个节点"),e("code",null,"计算出它最终的样式"),l("，称之为 "),e("strong",null,[e("code",null,"Computed Style")]),l("。在这一过程中，很多预设值会变成绝对值，比如 red 会变成 "),e("code",null,"rgb(255,0,0)"),l("；相对单位会变成绝对单位，比如 em 会变成 px，这一步完成后，会得到一棵"),e("code",null,"带有样式的 DOM 树"),l("。")],-1),f=e("h2",{id:"_3-布局-layout",tabindex:"-1"},[l("3. 布局 - Layout "),e("a",{class:"header-anchor",href:"#_3-布局-layout","aria-label":'Permalink to "3. 布局 - Layout"'},"​")],-1),C=e("p",null,[l("布局阶段会"),e("code",null,"依次遍历"),l(" DOM 树的每一个节点，计算每个节点的"),e("code",null,"几何信息"),l("，例如节点的宽高、相对包含块的位置。")],-1),k=e("p",null,[l("大部分时候，DOM 树和布局树并非一一对应：比如 "),e("strong",null,"display:none 的节点没有几何信息，因此不会生成到布局树"),l("。")],-1),D=e("p",null,[l("又比如使用了伪元素选择器，虽然 "),e("strong",null,"DOM 树中不存在这些伪元素节点，但它们拥有几何信息，所以会生成到布局树中"),l("；还有匿名行盒、匿名块盒等等都会导致 DOM 树和布局树无法一一对应。")],-1),g=e("h2",{id:"_4-分层-layer",tabindex:"-1"},[l("4. 分层 - Layer "),e("a",{class:"header-anchor",href:"#_4-分层-layer","aria-label":'Permalink to "4. 分层 - Layer"'},"​")],-1),L=e("p",null,"经过布局，每个元素的位置和大小就有了，那下面是不是就该开始绘制页面了？",-1),x=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"提示"),e("p",null,[l("答案是否定的，因为页面上可能有很多复杂的场景，比如 3D 变化、页面滚动、使用 z-index 进行 z 轴的排序等。所以，为了实现这些效果，"),e("code",null,"渲染引擎"),l("还需要"),e("code",null,"为特定的节点生成专用的图层"),l("，并"),e("code",null,"生成一棵对应的图层树"),l("。")])],-1),y=e("p",null,"那什么是图层呢？相我们可以在 Chrome 浏览器的开发者工具中，选择 Layers 标签，就可以看到页面的分层情况，以掘金首页为例，其分层情况如下：",-1),H=a('<p>可以看到，<code>渲染引擎</code>给页面分了很多图层，这些图层会<code>按照一定顺序叠加</code>在一起，就<code>形成了最终的页面</code>。</p><ul><li><strong>将页面分解成多个图层的操作</strong>就成为<code>分层</code>，</li><li><strong>将这些图层合并到一层的操作</strong>就成为<code>合成</code>。</li></ul><p>分层和合成通常是一起使用的。Chrome 引入了分层和合成的机制就是为了提升每帧的渲染效率。 分层的好处在于，将来某一个层改变后，仅会对该层进行后续处理，从而提升效率，滚动条、堆叠上下文、transform、opacity 等样式都会或多或少的影响分层结果。</p><h2 id="_5-绘制-paint" tabindex="-1">5. 绘制 - Paint <a class="header-anchor" href="#_5-绘制-paint" aria-label="Permalink to &quot;5. 绘制 - Paint&quot;">​</a></h2>',4),O=a('<p>主线程会为每个层单独产生绘制指令集，用于描述这一层的内容该如何画出来。</p><div class="tip custom-block"><p class="custom-block-title">什么是绘制指令集？</p><p>类似于：</p><ul><li>步骤 1. 将笔移动到（10，30）的位置</li><li>步骤 2. 画一个 20 * 30 的矩形</li><li>步骤 3. 将矩形填充为红色</li><li>步骤 4. ...</li></ul></div><p>渲染引擎在<code>绘制图层</code>时，会把一个图层的绘制<code>分成很多绘制指令</code>，然后把这些指令<code>按照顺序组成一个待绘制的列表</code>：</p>',3),A=e("p",null,[l("可以看到，绘制列表中的指令就是一系列的绘制操作。通常情况下，"),e("code",null,"绘制一个元素"),l("需要"),e("code",null,"执行多条绘制指令"),l("，因为每个元素的背景、边框等属性都需要单独的指令进行绘制，所以在"),e("code",null,"图层绘制阶段"),l("，"),e("strong",null,"输出的内容就是绘制列表"),l("。")],-1),V=e("p",null,"在 Chrome 浏览器的开发者工具中，通过 Layer 标签可以看到图层的绘制列表和绘制过程：",-1),q=e("p",null,[l("绘制列表只是用来记录绘制顺序和绘制指令的列表，而"),e("strong",null,[l("绘制操作是由渲染引擎中的"),e("code",null,"合成线程"),l("来完成的")]),l("。当图层绘制列表准备好之后，主线程会把该绘制列表提交给合成线程。")],-1),I=e("h2",{id:"_6-分块-compositing",tabindex:"-1"},[l("6. 分块 - Compositing "),e("a",{class:"header-anchor",href:"#_6-分块-compositing","aria-label":'Permalink to "6. 分块 - Compositing"'},"​")],-1),N=e("p",null,"合成线程首先对每个图层进行分块，将其划分为更多的小区域，它会从线程池中拿取多个线程来完成分块工作。",-1),v=e("h2",{id:"_7-光栅化-raster",tabindex:"-1"},[l("7. 光栅化 - Raster "),e("a",{class:"header-anchor",href:"#_7-光栅化-raster","aria-label":'Permalink to "7. 光栅化 - Raster"'},"​")],-1),R=e("p",null,"光栅化是将每个块变成位图，位图可以理解成内存里的一个二维数组，这个二维数组记录了每个像素点信息。",-1),U=e("p",null,"合成线程会将块信息交给 GPU 进程，以极高的速度完成光栅化。",-1),E=e("p",null,"GPU 进程会开启多个线程来完成光栅化，并且优先处理靠近视口区域的块。",-1),J=e("p",null,"光栅化的结果，就是一块一块的位图。",-1),G=e("h2",{id:"_8-呈现-draw",tabindex:"-1"},[l("8. 呈现 - Draw "),e("a",{class:"header-anchor",href:"#_8-呈现-draw","aria-label":'Permalink to "8. 呈现 - Draw"'},"​")],-1),$=e("p",null,"经过以上步骤，来到了最终阶段",-1),j=a('<ul><li>合成线程拿到每个层、每个块的位图后，生成一个个<code>指引（quad）</code>信息。</li><li>指引会标识出每个位图应该画到屏幕的哪个位置，以及会考虑到旋转、缩放等变形</li><li><strong>变形发生在合成线程，与渲染主线程无关</strong>，这就是 transform 效率高的本质原因</li><li>合成线程会把 quad 提交给 GPU 进程，由 GPU 进程产生系统调用，提交给 GPU 硬件，完成最终的屏幕成像</li></ul><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>回顾一下 浏览器渲染的完整流程</p>',3),B=e("h2",{id:"参考",tabindex:"-1"},[l("参考 "),e("a",{class:"header-anchor",href:"#参考","aria-label":'Permalink to "参考"'},"​")],-1),z=e("ul",null,[e("li",null,[e("a",{href:"https://juejin.cn/post/7295255958195716115",target:"_blank",rel:"noreferrer"},"从「浏览器进程模型」到「浏览器渲染原理」"),l("——前端掘金者 H")])],-1);function F(K,Q,W,X,Y,Z){const o=s("Image");return c(),n("div",null,[_,t(o,{src:"/12bw/render1.webp",alt:"渲染时间点"}),i,t(o,{src:"/12bw/render2.webp",alt:"渲染流水线"}),h,p,t(o,{src:"/12bw/render3.webp",alt:"解析HTML生成DOM树和CSSOM树"}),u,b,t(o,{src:"/12bw/render4.webp",alt:"浏览器启动预解析器率先下载link的css文件以及解析CSS"}),m,w,t(o,{src:"/12bw/render5.webp",alt:"渲染主线程遇到JS时停止解析等待下载完成"}),T,S,P,t(o,{src:"/12bw/render6.webp",alt:"主线程遍历得到 DOM 树，依次为树中的每个节点计算出它最终的样式"}),M,f,t(o,{src:"/12bw/render7.webp",alt:"布局阶段依次遍历DOM树，计算每个节点的几何信息"}),C,k,t(o,{src:"/12bw/render8.webp",alt:"display:none 的节点没有几何信息，不会生成到布局树"}),D,t(o,{src:"/12bw/render9.webp",alt:"伪元素虽没有节点，但拥有几何信息，所以生成到布局树种"}),g,L,t(o,{src:"/12bw/render10.webp",alt:"渲染引擎为特定节点生成专用图层，并生成对应图层树"}),x,y,t(o,{src:"/12bw/render11.webp",alt:"渲染引擎给页面分了很多图层，按照一定顺序叠加在一起，最终形成页面"}),H,t(o,{src:"/12bw/render12.webp",alt:"绘制阶段，为每一图层生成如何绘制的指令"}),O,t(o,{src:"/12bw/render13.webp",alt:"渲染引擎，是如何进行绘制指令的"}),A,V,t(o,{src:"/12bw/render14.webp",alt:"通过 Layer 标签可以看到图层的绘制列表和绘制过程"}),q,I,t(o,{src:"/12bw/render15.webp",alt:"分块会将每一层分为多个小的区域"}),N,v,t(o,{src:"/12bw/render16.webp",alt:"光栅化是将每个块变成位图，优先处理靠近视口的块"}),R,U,t(o,{src:"/12bw/render17.webp",alt:"合成线程会将块信息交给 GPU 进程"}),E,J,G,$,t(o,{src:"/12bw/render18.webp",alt:"经过以上步骤，来到了最终阶段 Draw"}),j,t(o,{src:"/12bw/render19.webp",alt:"浏览器渲染的完整流程"}),B,z])}const oe=r(d,[["render",F]]);export{le as __pageData,oe as default};
