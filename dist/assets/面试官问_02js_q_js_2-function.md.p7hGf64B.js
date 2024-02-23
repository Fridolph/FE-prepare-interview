import{_ as a,c as i,o as t,V as e}from"./chunks/framework.GzbH9VPN.js";const p=JSON.parse('{"title":"函数 Function","description":"","frontmatter":{},"headers":[],"relativePath":"面试官问/02js/q_js_2-function.md","filePath":"面试官问/02js/q_js_2-function.md","lastUpdated":1708590339000}'),l={name:"面试官问/02js/q_js_2-function.md"},s=e('<h1 id="函数-function" tabindex="-1">函数 Function <a class="header-anchor" href="#函数-function" aria-label="Permalink to &quot;函数 Function&quot;">​</a></h1><h2 id="作用域和闭包" tabindex="-1">作用域和闭包 <a class="header-anchor" href="#作用域和闭包" aria-label="Permalink to &quot;作用域和闭包&quot;">​</a></h2><p>知识回顾 <a href="./../../直击概念/02js/s_js_2-closure.html">直击概念 - 闭包</a></p><h3 id="说一下什么是闭包" tabindex="-1">说一下什么是闭包 <a class="header-anchor" href="#说一下什么是闭包" aria-label="Permalink to &quot;说一下什么是闭包&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ul><li>闭包本质是函数。闭包是指一个<code>函数能够访问另一个函数作用域中的变量</code>的函数。闭包可以让开发者从内部函数访问外部函数的作用域。</li></ul></details><h3 id="函数在-js-中是如何运行的" tabindex="-1">函数在 JS 中是如何运行的 <a class="header-anchor" href="#函数在-js-中是如何运行的" aria-label="Permalink to &quot;函数在 JS 中是如何运行的&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ol><li>JS 源代码经过语法分析，转化成 tokens</li><li>tokens 经过语义分析，转化为 AST(抽象语法树)</li><li>抽象语法树会被转化为字节码</li><li>JS 运行时开始运行这段上面生成代码</li></ol></details><blockquote><p>闭包产生的本质就是，当前环境中存在指向父级作用域的引用</p></blockquote><h3 id="闭包有哪些表现形式" tabindex="-1">闭包有哪些表现形式 <a class="header-anchor" href="#闭包有哪些表现形式" aria-label="Permalink to &quot;闭包有哪些表现形式&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ol><li><p>函数中再返回一个新的函数（高级函数）</p></li><li><p>把整个函数作为参数传入（回调函数）</p></li><li><p>异步事件（实际上都是在使用闭包）</p></li><li><p>IIFE 立即执行函数</p></li></ol></details><h3 id="this-的不同使用场景及取值" tabindex="-1">this 的不同使用场景及取值 <a class="header-anchor" href="#this-的不同使用场景及取值" aria-label="Permalink to &quot;this 的不同使用场景及取值&quot;">​</a></h3><p>知识回顾 <a href="./../../直击概念/02js/s_js_4-this.html">直击概念 - this</a></p><details class="details custom-block"><summary>详细信息</summary><ol><li><p>作为<code>函数调用</code>。this <code>指向全局对象</code> （严格模式下，this 的值是 undefined）</p></li><li><p>作为<code>对象方法调用</code>。this <code>指向所属对象</code></p></li><li><p>作为<code>构造函数调用</code>。this 指向<code>实例化的对象</code></p></li><li><p>通过 call, apply, bind 调用</p></li></ol><ul><li>如果指定了第一个参数 <code>thisArg</code>，this 的值就是 thisArg 的值（如果是原始值，会包装为对象）</li><li>如果不传 thisArg，要判断严格模式，严格模式下 this 是 undefined，非严格模式下 this 指向全局对象。</li></ul><ol start="5"><li>箭头函数，根据定义时所在作用域绑定 this 的值</li></ol></details>',13),o=[s];function c(d,r,n,h,u,_){return t(),i("div",null,o)}const f=a(l,[["render",c]]);export{p as __pageData,f as default};
