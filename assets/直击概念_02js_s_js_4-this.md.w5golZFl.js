import{_ as a,c as t,o as e,V as i}from"./chunks/framework.VAJu91au.js";const b=JSON.parse('{"title":"this 指向","description":"","frontmatter":{},"headers":[],"relativePath":"直击概念/02js/s_js_4-this.md","filePath":"直击概念/02js/s_js_4-this.md","lastUpdated":1708674619000}'),s={name:"直击概念/02js/s_js_4-this.md"},h=i('<h1 id="this-指向" tabindex="-1">this 指向 <a class="header-anchor" href="#this-指向" aria-label="Permalink to &quot;this 指向&quot;">​</a></h1><p>分析 this 的指向，首先要确定当前执行代码的环境。</p><h2 id="全局环境中的-this-指向" tabindex="-1">全局环境中的 this 指向 <a class="header-anchor" href="#全局环境中的-this-指向" aria-label="Permalink to &quot;全局环境中的 this 指向&quot;">​</a></h2><p>全局环境中，this 指向全局对象（视宿主环境而定）</p><ul><li>浏览器 -&gt; <code>window</code></li><li>Node -&gt; <code>global</code></li></ul><h2 id="函数中的-this-指向" tabindex="-1">函数中的 this 指向 <a class="header-anchor" href="#函数中的-this-指向" aria-label="Permalink to &quot;函数中的 this 指向&quot;">​</a></h2><p>函数中 this 的指向取决于函数的调用形式，在一些情况下也受到严格模式的影响。一般地默认为非严格模式。</p><h3 id="_1-作为普通函数调用" tabindex="-1">1. 作为普通函数调用 <a class="header-anchor" href="#_1-作为普通函数调用" aria-label="Permalink to &quot;1. 作为普通函数调用&quot;">​</a></h3><p>this 指向<code>全局对象</code> （严格模式下，this 的值是 undefined）</p><h3 id="_2-作为方法调用" tabindex="-1">2. 作为方法调用 <a class="header-anchor" href="#_2-作为方法调用" aria-label="Permalink to &quot;2. 作为方法调用&quot;">​</a></h3><p>this 指向所属对象</p><h3 id="_3-作为构造函数调用" tabindex="-1">3. 作为<code>构造函数</code>调用 <a class="header-anchor" href="#_3-作为构造函数调用" aria-label="Permalink to &quot;3. 作为`构造函数`调用&quot;">​</a></h3><p>this 指向<code>实例化的对象</code></p><h3 id="_4-通过-call-apply-bind-调用" tabindex="-1">4. 通过 call, apply, bind 调用 <a class="header-anchor" href="#_4-通过-call-apply-bind-调用" aria-label="Permalink to &quot;4. 通过 call, apply, bind 调用&quot;">​</a></h3><ul><li>如果指定了第一个<code>参数thisArg</code>，this 的值就是 thisArg 的值（如果是原始值，会包装为对象）</li><li>如果不传 thisArg，要判断严格模式，严格模式下 this 是 undefined，非严格模式下 this 指向全局对象。</li></ul><h3 id="_5-箭头函数" tabindex="-1">5. 箭头函数 <a class="header-anchor" href="#_5-箭头函数" aria-label="Permalink to &quot;5. 箭头函数&quot;">​</a></h3><p>箭头函数和普通函数的重要区别：</p><ol><li>没有自己的 this、super、arguments 和 new.target 绑定</li><li>不能使用 new 来调用</li><li>没有原型对象</li><li>不可以改变 this 的绑定</li><li>形参名称不能重复</li></ol><p><strong>箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值。</strong> 如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则 this 的值则被设置为全局对象</p><p>其实就是相当于箭头函数外的 this 是缓存的该箭头函数上层的普通函数的 this。如果没有普通函数，则是全局对象（浏览器中则是 window）。</p><p>也就是说<code>无法通过call、apply、bind绑定箭头函数的this</code>(它自身没有 this)。而 call、apply、bind 可以绑定缓存箭头函数上层的普通函数的 this。</p><h2 id="自测" tabindex="-1">自测 <a class="header-anchor" href="#自测" aria-label="Permalink to &quot;自测&quot;">​</a></h2><p><a href="./../../面试官问/02js/q_js_2-function.html">面试官问 - 函数 Function</a></p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><p>彻底搞懂闭包，柯里化，手写代码，金九银十不再丢分！ <a href="https://juejin.cn/post/6864378349512065038" target="_blank" rel="noreferrer">https://juejin.cn/post/6864378349512065038</a></p></li><li><p>面试官问：JS 的 this 指向 <a href="https://juejin.cn/post/6844903746984476686" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903746984476686</a></p></li></ul>',25),l=[h];function o(r,n,d,c,p,_){return e(),t("div",null,l)}const f=a(s,[["render",o]]);export{b as __pageData,f as default};
