import{_ as r,E as t,c as l,J as a,V as o,m as c,o as i}from"./chunks/framework.i1kO8Tor.js";const S=JSON.parse('{"title":"垃圾回收 GC","description":"","frontmatter":{},"headers":[],"relativePath":"直击概念/12broswer/s_bw_3-gc.md","filePath":"直击概念/12broswer/s_bw_3-gc.md","lastUpdated":1708674619000}'),n={name:"直击概念/12broswer/s_bw_3-gc.md"},d=o('<h1 id="垃圾回收-gc" tabindex="-1">垃圾回收 GC <a class="header-anchor" href="#垃圾回收-gc" aria-label="Permalink to &quot;垃圾回收 GC&quot;">​</a></h1><p><a href="./../../面试官问/12broswer/q_bw_3-gc.html">面试官问 - 垃圾回收</a></p><h2 id="什么是垃圾回收机制" tabindex="-1">什么是垃圾回收机制 <a class="header-anchor" href="#什么是垃圾回收机制" aria-label="Permalink to &quot;什么是垃圾回收机制&quot;">​</a></h2><p>JavaScript 是在创建变量（对象，字符串等）时自动进行了分配内存，并且在不使用它们时“自动”释放。这一释放的过程称为<strong>垃圾回收</strong>。</p><p><code>V8 引擎逐行执行 JavaScript 代码</code>的过程中，当遇到函数的情况时，会为其创建一个<code>函数执行上下文(Context)</code>环境并添加到调用堆栈的栈顶，函数的作用域(handleScope)中包含了该函数中声明的所有变量，当该<code>函数执行完毕</code>后，对应的执行上下文从栈顶弹出，<code>函数的作用域会随之销毁</code>，其包含的<code>所有变量</code>也会<code>统一释放</code>并被<code>自动回收</code>。</p><p>V8 引擎已经帮我们<strong>自动进行了内存的分配和管理</strong>，好让我们有更多的精力去专注于业务层面的复杂逻辑，这对于我们前端开发人员来说是一项福利，但是随之带来的问题也是显而易见的，那就是由于不用去手动管理内存，导致写代码的过程中不够严谨从而容易引发内存泄漏</p><h2 id="为什么要进行垃圾回收" tabindex="-1">为什么要进行垃圾回收 <a class="header-anchor" href="#为什么要进行垃圾回收" aria-label="Permalink to &quot;为什么要进行垃圾回收&quot;">​</a></h2><h3 id="v8-引擎的内存限制" tabindex="-1">V8 引擎的内存限制 <a class="header-anchor" href="#v8-引擎的内存限制" aria-label="Permalink to &quot;V8 引擎的内存限制&quot;">​</a></h3><p>虽然 V8 引擎帮助我们实现了自动的垃圾回收管理，解放了我们勤劳的双手，但 V8 引擎中的内存使用也并不是无限制的。这个要回到 V8 引擎的设计之初，起初只是作为浏览器端 JavaScript 的执行环境，在浏览器端我们其实很少会遇到使用大量内存的场景，因此也就没有必要将最大内存设置得过高。但这只是一方面，其实还有另外两个主要的原因：</p><ul><li>JS 单线程机制 <ol><li>代码必须按顺序执行</li><li>在同一时间只能处理一个任务</li></ol></li><li>垃圾回收机制。垃圾回收本身也是一件非常耗时的操作</li></ul><p>基于以上两点，V8 引擎为了减少对应用的性能造成的影响，采用了一种比较粗暴的手段，那就是直接限制堆内存的大小。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>具体不展开，感兴趣可看文章，介绍更详细。</p></div><h2 id="垃圾回收是怎样进行的" tabindex="-1">垃圾回收是怎样进行的 <a class="header-anchor" href="#垃圾回收是怎样进行的" aria-label="Permalink to &quot;垃圾回收是怎样进行的&quot;">​</a></h2><p>V8 的垃圾回收策略主要是<code>基于分代式垃圾回收机制</code>，其根据对象的存活时间将内存的垃圾回收进行不同的分代，然后对不同的分代采用不同的垃圾回收算法。</p><h3 id="v8-内存结构" tabindex="-1">V8 内存结构 <a class="header-anchor" href="#v8-内存结构" aria-label="Permalink to &quot;V8 内存结构&quot;">​</a></h3><p>V8 的内存结构主要由以下几个部分组成：</p><ul><li><code>新生代(new_space)</code>：大多数的对象开始都会被分配在这里，这个区域相对较小但是垃圾回收特别频繁，该区域被分为两半，一半用来分配内存，另一半用于在垃圾回收时将需要保留的对象复制过来。</li><li><code>老生代(old_space)</code>：新生代中的对象在存活一段时间后就会被转移到老生代内存区，相对于新生代该内存区域的垃圾回收频率较低。老生代又分为老生代指针区和老生代数据区，前者包含大多数可能存在指向其他对象的指针的对象，后者只保存原始数据对象，这些对象没有指向其他对象的指针。</li><li><code>大对象区(large_object_space)</code>：存放体积超越其他区域大小的对象，每个对象都会有自己的内存，垃圾回收不会移动大对象区。</li><li><code>代码区(code_space)</code>：代码对象，会被分配在这里，唯一拥有执行权限的内存区域。</li><li><code>map 区(map_space)</code>：存放 Cell 和 Map，每个区域都是存放相同大小的元素，结构简单</li></ul>',17),h=o('<p>上图中的带斜纹的区域代表暂未使用的内存，新生代(new_space)被划分为了两个部分，其中一部分叫做 inactive new space，表示暂未激活的内存区域，另一部分为激活状态</p><h3 id="新生代" tabindex="-1">新生代 <a class="header-anchor" href="#新生代" aria-label="Permalink to &quot;新生代&quot;">​</a></h3><p>在 V8 引擎的内存结构中，新生代主要用于存放存活时间较短的对象。新生代内存是由两个 semispace(半空间)构成的，内存最大值在 64 位系统和 32 位系统上分别为 32MB 和 16MB，在新生代的垃圾回收过程中主要采用了 Scavenge 算法。</p><blockquote><p>Scavenge 算法是一种典型的牺牲空间换取时间的算法，对于老生代内存来说，可能会存储大量对象，如果在老生代中使用这种算法，势必会造成内存资源的浪费，但是在新生代内存中，大部分对象的生命周期较短，在时间效率上表现可观，所以还是比较适合这种算法。</p></blockquote><p>Scavenge 算法的垃圾回收过程主要就是将存活对象在 From 空间和 To 空间之间进行复制，同时完成两个空间之间的角色互换，因此该算法的缺点也比较明显，浪费了一半的内存用于复制。</p><h3 id="对象晋升" tabindex="-1">对象晋升 <a class="header-anchor" href="#对象晋升" aria-label="Permalink to &quot;对象晋升&quot;">​</a></h3><p>当一个对象在经过多次复制之后依旧存活，那么它会被认为是一个生命周期较长的对象，在下一次进行垃圾回收时，该对象会被直接转移到老生代中，这种对象从新生代转移到老生代的过程我们称之为晋升。 对象晋升的条件主要有以下两个：</p><ul><li>对象是否经历过一次 Scavenge 算法</li><li>To 空间的内存占比是否已经超过 25%</li></ul><p>默认情况下，我们创建的对象都会分配在 From 空间中，当进行垃圾回收时，在将对象从 From 空间复制到 To 空间之前，会先检查该对象的内存地址来判断是否已经经历过一次 Scavenge 算法，如果地址已经发生变动则会将该对象转移到老生代中，不会再被复制到 To 空间，可以用以下的流程图来表示：</p>',9),s=c("p",null,"如果对象没有经历过 Scavenge 算法，会被复制到 To 空间，但是如果此时 To 空间的内存占比已经超过 25%，则该对象依旧会被转移到老生代，如下图所示:",-1),_=o('<p>之所以有 25%的内存限制是因为 To 空间在经历过一次 Scavenge 算法后会和 From 空间完成角色互换，会变为 From 空间，后续的内存分配都是在 From 空间中进行的，如果内存使用过高甚至溢出，则会影响后续对象的分配，因此超过这个限制之后对象会被直接转移到老生代来进行管理。</p><h3 id="老生代" tabindex="-1">老生代 <a class="header-anchor" href="#老生代" aria-label="Permalink to &quot;老生代&quot;">​</a></h3><p>在老生代中，因为管理着大量的存活对象，如果依旧使用 Scavenge 算法的话，很明显会浪费一半的内存，因此已经不再使用 Scavenge 算法，而是采用新的算法 Mark-Sweep(标记清除)和 Mark-Compact(标记整理)来进行管理。 在早前我们可能听说过一种算法叫做引用计数，该算法的原理比较简单，就是看对象是否还有其他引用指向它，如果没有指向该对象的引用，则该对象会被视为垃圾并被垃圾回收器回收。</p><blockquote><p>具体不展开，请看参考链接</p></blockquote><h2 id="如何避免内存泄露" tabindex="-1">如何避免内存泄露 <a class="header-anchor" href="#如何避免内存泄露" aria-label="Permalink to &quot;如何避免内存泄露&quot;">​</a></h2><h3 id="_1-尽可能少地创建全局变量" tabindex="-1">1. 尽可能少地创建全局变量 <a class="header-anchor" href="#_1-尽可能少地创建全局变量" aria-label="Permalink to &quot;1. 尽可能少地创建全局变量&quot;">​</a></h3><h3 id="_2-手动清除定时器" tabindex="-1">2. 手动清除定时器 <a class="header-anchor" href="#_2-手动清除定时器" aria-label="Permalink to &quot;2. 手动清除定时器&quot;">​</a></h3><h3 id="_3-少用闭包" tabindex="-1">3. 少用闭包 <a class="header-anchor" href="#_3-少用闭包" aria-label="Permalink to &quot;3. 少用闭包&quot;">​</a></h3><h3 id="_4-清除dom引用" tabindex="-1">4. 清除DOM引用 <a class="header-anchor" href="#_4-清除dom引用" aria-label="Permalink to &quot;4. 清除DOM引用&quot;">​</a></h3><h3 id="_5-弱引用" tabindex="-1">5. 弱引用 <a class="header-anchor" href="#_5-弱引用" aria-label="Permalink to &quot;5. 弱引用&quot;">​</a></h3><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>本文中主要讲解了一下V8引擎的垃圾回收机制，并分别从新生代和老生代讲述了不同分代中的垃圾回收策略以及对应的回收算法，之后列出了几种常见的避免内存泄漏的方式来帮助我们写出更加优雅的代码。如果你已经了解过垃圾回收相关的内容，那么这篇文章可以帮助你简单复习加深印象，如果没有了解过，那么笔者也希望这篇文章能够帮助到你了解一些代码层面之外的底层知识点。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/6981588276356317214" target="_blank" rel="noreferrer">一文搞懂 V8 引擎的垃圾回收</a>——程序员冷月</li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management#%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6" target="_blank" rel="noreferrer">MDN - 内存管理</a></li><li><a href="https://github.com/zqjflash/nodejs-memory" target="_blank" rel="noreferrer">nodejs-memory - V8 的垃圾回收机制与内存限制</a></li></ul><p>推荐另一篇高质量文章 <a href="https://juejin.cn/post/6981588276356317214" target="_blank" rel="noreferrer">「硬核 JS」你真的了解垃圾回收机制吗</a> 需要授权转载，尊重原创，这里就没用里面的内容，自行查看吧</p>',15);function p(b,u,m,q,f,g){const e=t("Image");return i(),l("div",null,[d,a(e,{src:"/12bw/memory.webp",alt:"内存结构如图所示"}),h,a(e,{src:"/12bw/m-u1.webp",alt:"经过Scavenge算法"}),s,a(e,{src:"/12bw/m-u2.webp",alt:"To 空间内存超过25%时触发"}),_])}const T=r(n,[["render",p]]);export{S as __pageData,T as default};
