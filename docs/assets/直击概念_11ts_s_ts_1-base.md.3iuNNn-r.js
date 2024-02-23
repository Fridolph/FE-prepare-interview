import{_ as t,c as e,o as i,V as r}from"./chunks/framework.i1kO8Tor.js";const T=JSON.parse('{"title":"TypeScript","description":"","frontmatter":{},"headers":[],"relativePath":"直击概念/11ts/s_ts_1-base.md","filePath":"直击概念/11ts/s_ts_1-base.md","lastUpdated":null}'),a={name:"直击概念/11ts/s_ts_1-base.md"},p=r('<h1 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;TypeScript&quot;">​</a></h1><p>自测 <a href="./../../面试官问/11ts/q_ts_1-base.html">面试官问 - TypeScript基础</a></p><h2 id="什么是-typescript" tabindex="-1">什么是 TypeScript <a class="header-anchor" href="#什么是-typescript" aria-label="Permalink to &quot;什么是 TypeScript&quot;">​</a></h2><p>Typescript 是一个<code>强类型</code>的 <code>JavaScript 超集</code>，支持 ES6 语法，<code>支持面向对象编程</code>的概念，如类、接口、继承、<code>泛型</code>等。Typescript 并不直接在浏览器上运行，需要编译器编译成纯 Javascript 来运行。</p><h2 id="为什么需要-typescript" tabindex="-1">为什么需要 TypeScript <a class="header-anchor" href="#为什么需要-typescript" aria-label="Permalink to &quot;为什么需要 TypeScript&quot;">​</a></h2><ul><li>TypeScript 快速、简单，易于学习</li><li>TypeScript 支持<code>面向对象</code>的编程特性，例如类、接口、继承、泛型等</li><li>TypeScript 在编译时提供<code>错误检查</code>功能</li><li>TypeScript 支持所有 JavaScript 库，因为它是 <code>JavaScript 的超集</code></li><li>TypeScript 通过使用<code>继承</code>来支持可重用性</li><li>TypeScript 支持<code>最新</code>的 JavaScript 功能</li><li>TypeScript 支持<code>静态类型</code>、<code>强类型</code>、模块、可选参数等</li></ul><h2 id="typescript-的主要特点是什么" tabindex="-1">TypeScript 的主要特点是什么 <a class="header-anchor" href="#typescript-的主要特点是什么" aria-label="Permalink to &quot;TypeScript 的主要特点是什么&quot;">​</a></h2><ul><li><code>跨平台</code>：TypeScript 编译器可以安装在任何操作系统上</li><li><code>ES6 特性</code>：TypeScript 包含计划中的 ECMAScript 2015 (ES6) 的大部分特性</li><li><code>面向对象</code>的语言：TypeScript 提供所有标准的 OOP 功能，如类、接口和模块</li><li><code>静态类型检查</code>：TypeScript 使用静态类型并帮助在编译时进行类型检查</li><li><code>可选的静态类型</code>：TypeScript 允许可选的静态类型</li><li>DOM 操作：可以使用 TypeScript 来操作 DOM 以添加或删除网页元素</li></ul><h2 id="typescript-的缺点" tabindex="-1">TypeScript 的缺点 <a class="header-anchor" href="#typescript-的缺点" aria-label="Permalink to &quot;TypeScript 的缺点&quot;">​</a></h2><ul><li>需要时间编译</li><li>不支持抽象类</li><li>需要执行编译步骤才能将 TypeScript 转换为 JavaScript 才能在浏览器中运行</li><li>使用任何第三方库，定义文件是必须的（若无会极大影响开发体验）</li><li>类型定义文件的质量很难把控</li><li>类型体操学习曲线陡峭</li></ul><h2 id="javascript-与-typescript-的区别" tabindex="-1">JavaScript 与 TypeScript 的区别 <a class="header-anchor" href="#javascript-与-typescript-的区别" aria-label="Permalink to &quot;JavaScript 与 TypeScript 的区别&quot;">​</a></h2><table><thead><tr><th>特性</th><th>JavaScript</th><th>TypeScript</th></tr></thead><tbody><tr><td>开发时间</td><td>Netscape 1995</td><td>Anders Hejlsberg 2012</td></tr><tr><td>扩展名</td><td>.js</td><td>.ts</td></tr><tr><td>类型支持</td><td>弱类型语言</td><td>强类型，支持静态检查</td></tr><tr><td>浏览器执行</td><td>可直接执行</td><td>需要编译成 JS 后再执行</td></tr><tr><td>本质</td><td>解释型语言，运行报错</td><td>编译型语言，开发期间报错</td></tr><tr><td>基础类型</td><td>对象、字符串是对象</td><td>数字、字符串是接口</td></tr><tr><td>泛型支持</td><td>不支持</td><td>支持</td></tr></tbody></table><h2 id="typescript-的组成部分" tabindex="-1">TypeScript 的组成部分 <a class="header-anchor" href="#typescript-的组成部分" aria-label="Permalink to &quot;TypeScript 的组成部分&quot;">​</a></h2><ul><li>语言：它<strong>由语法，关键字和类型注释组成</strong></li><li>TypeScript <code>编译器</code>：编译器将用 TypeScript 编写的指令转换为等效的 JavaScript</li><li>TypeScript 语言服务：语言服务在核心编译器管道周围暴露了一个附加层</li></ul><h2 id="typescript-的内置类型" tabindex="-1">TypeScript 的内置类型 <a class="header-anchor" href="#typescript-的内置类型" aria-label="Permalink to &quot;TypeScript 的内置类型&quot;">​</a></h2><ul><li>boolean 布尔类型</li><li>number 数字类型</li><li>string 字符串类型</li><li>void 空类型</li><li>null 类型</li><li>undefined 类型</li><li>array 数组类型</li><li>tuple 元组类型，允许表示一个已知元素数量和类型的数组，各元素的类型不必相同</li><li>enum 枚举类型，enum 类型是对 JavaScript 标准数据类型的一个补充，使用枚举类型可以为一组数值赋予友好的名字</li><li>any 任意类型</li><li>never 类型</li><li>object 对象类型</li></ul><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7215084575495798843" target="_blank" rel="noreferrer">前端掘金者 H：TypeScript 面试题解析助你进阶 TS 专家</a></li></ul>',18),c=[p];function l(d,o,s,h,n,y){return i(),e("div",null,c)}const u=t(a,[["render",l]]);export{T as __pageData,u as default};
