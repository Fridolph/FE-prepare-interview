import{_ as e,c as a,o as t,V as l}from"./chunks/framework.i1kO8Tor.js";const m=JSON.parse('{"title":"TypeScript","description":"","frontmatter":{},"headers":[],"relativePath":"面试官问/11ts/q_ts_1-base.md","filePath":"面试官问/11ts/q_ts_1-base.md","lastUpdated":1708674619000}'),i={name:"面试官问/11ts/q_ts_1-base.md"},o=l('<h1 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;TypeScript&quot;">​</a></h1><p>回顾 <a href="./../../直击概念/11ts/s_ts_1-base.html">直击概念 - TypeScript 基础</a></p><h2 id="ts-类型" tabindex="-1">TS 类型 <a class="header-anchor" href="#ts-类型" aria-label="Permalink to &quot;TS 类型&quot;">​</a></h2><h3 id="any-类型的作用是什么" tabindex="-1">any 类型的作用是什么 <a class="header-anchor" href="#any-类型的作用是什么" aria-label="Permalink to &quot;any 类型的作用是什么&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>为编程阶段还不清楚类型的变量指定一个类型，这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。</p></details><h2 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h2><h3 id="为什么要使用-typescript-ts-相对于-js-的优势是什么" tabindex="-1">为什么要使用 TypeScript ？ TS 相对于 JS 的优势是什么 <a class="header-anchor" href="#为什么要使用-typescript-ts-相对于-js-的优势是什么" aria-label="Permalink to &quot;为什么要使用 TypeScript ？ TS 相对于 JS 的优势是什么&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>TypeScript 是 <code> JS 的超集</code>，包括所有的 JS 规范版本。同时拥有强大的<code>类型</code>系统，包括泛型，是一个面向对象的语言，提供类，接口和模块。</p><p>TS 对 JS 的改进主要是<code>静态类型检查</code>（强类型语言）“静态类型更有利于构建大型应用”。 同时 TS 多了接口，泛型这些 JS 所没有的特性，内置的数据类型也比较多。</p></details><h3 id="typescript-的内置数据类型有哪些" tabindex="-1">TypeScript 的内置数据类型有哪些 <a class="header-anchor" href="#typescript-的内置数据类型有哪些" aria-label="Permalink to &quot;TypeScript 的内置数据类型有哪些&quot;">​</a></h3><details class="details custom-block"><summary>在 Typescript 中，内置的数据类型也称为原始数据类型</summary><ul><li>boolean 布尔类型</li><li>number 数字类型</li><li>string 字符串类型</li><li>void 空类型</li><li>null 类型</li><li>undefined 类型</li><li>array 数组类型</li><li>tuple 元组类型，允许表示一个已知元素数量和类型的数组，各元素的类型不必相同</li><li>enum 枚举类型，enum 类型是对 JavaScript 标准数据类型的一个补充，使用枚举类型可以为一组数值赋予友好的名字</li><li>any 任意类型</li><li>never 类型</li><li>object 对象类型</li></ul></details><h3 id="typescript-中-const-和-readonly-的区别" tabindex="-1">TypeScript 中 const 和 readonly 的区别 <a class="header-anchor" href="#typescript-中-const-和-readonly-的区别" aria-label="Permalink to &quot;TypeScript 中 const 和 readonly 的区别&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>const 可以<code>防止变量的值被修改</code>，在运行时检查，使用 const 变量保存的数组，可以使用 push，pop 等方法</p><p>readonly 可以<code>防止变量的属性被修改</code>，在编译时检查，使用 Readonly Array 声明的数组不能使用 push，pop 等方法</p></details><h3 id="any-类型的作用是什么-1" tabindex="-1">any 类型的作用是什么 <a class="header-anchor" href="#any-类型的作用是什么-1" aria-label="Permalink to &quot;any 类型的作用是什么&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>为编程阶段还<strong>不清楚类型的变量指定一个类型</strong>。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库（不确定用户输入值的类型，第三方代码库是如何工作的）。 这种情况下，我们<code>不希望类型检查器对这些值进行检查</code>而是直接让它们<code>通过编译阶段的检查</code>。</p><p>any 的问题：</p><ul><li>类型污染：any 类型的对象<code>会导致后续的属性类型都会变成 any</code></li><li>使用不存在的属性或方法而不报错</li></ul></details><h3 id="any、never、unknown、null、undefined-和-void-有什么区别" tabindex="-1">any、never、unknown、null、undefined 和 void 有什么区别 <a class="header-anchor" href="#any、never、unknown、null、undefined-和-void-有什么区别" aria-label="Permalink to &quot;any、never、unknown、null、undefined 和 void 有什么区别&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ul><li>any: <code>动态</code>的变量类型（失去了类型检查的作用）</li><li>never: <code>永不存在</code>的值的类型。例如：never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型</li><li>unknown: <code>任何类型的值</code>都可以赋给 unknown 类型，但是 <strong>unknown 类型的值只能赋给 unknown 本身和 any 类型</strong></li><li>null &amp; undefined: 默认情况下 null 和 undefined 是<code>所有类型的子类型</code>。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自。</li><li>void: <code>没有任何类型</code>。例如：一个函数如果没有返回值，那么返回值可以定义为 void。</li></ul></details><h3 id="any-和-unknown-有什么区别" tabindex="-1">any 和 unknown 有什么区别 <a class="header-anchor" href="#any-和-unknown-有什么区别" aria-label="Permalink to &quot;any 和 unknown 有什么区别&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ul><li>any 和 unknown 都是顶级类型</li><li>unknown 更加严格。any 不做类型检查； unknown 因为未知性质，不允许访问属性，不允许赋值给其他有明确类型的变量。</li></ul></details><h3 id="keyof-和-typeof-关键字的作用" tabindex="-1">keyof 和 typeof 关键字的作用 <a class="header-anchor" href="#keyof-和-typeof-关键字的作用" aria-label="Permalink to &quot;keyof 和 typeof 关键字的作用&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ul><li>keyof 索引类型查询操作符， 获取一个<code>类型的所有属性名</code>组成的<code>联合类型</code>。</li><li>typeof 获取一个变量或对象的类型。typeof 是一个类型查询操作符，它用于获取一个值的类型</li></ul></details><h3 id="ts-中的泛型是什么" tabindex="-1">TS 中的泛型是什么 <a class="header-anchor" href="#ts-中的泛型是什么" aria-label="Permalink to &quot;TS 中的泛型是什么&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>泛型允许我们在编写代码时使用一些<code>以后才指定的类型</code>。在定义函数，接口或者类的时候，不预先定义好具体的类型，而<code>在使用的时候在指定类型</code>的一种特性。</p></details><h2 id="type-与-interface" tabindex="-1">type 与 interface <a class="header-anchor" href="#type-与-interface" aria-label="Permalink to &quot;type 与 interface&quot;">​</a></h2><h3 id="typescript-中-type-和-interface-的区别" tabindex="-1">TypeScript 中 type 和 interface 的区别 <a class="header-anchor" href="#typescript-中-type-和-interface-的区别" aria-label="Permalink to &quot;TypeScript 中 type 和 interface 的区别&quot;">​</a></h3><details class="details custom-block"><summary>相同点</summary><ul><li>都可以描述 <code>对象</code> 或者 <code>函数</code></li><li>都允许拓展 <code>extends</code>。interface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说 interface 可以 extends type, type 也可以 extends interface 。虽然效果差不多，但是两者语法不同。</li></ul></details><details class="details custom-block"><summary>不同点</summary><ol><li>type 可以声明基本类型，联合类型，元组</li><li>type 可以使用 typeof 获取实例的类型进行赋值</li><li>多个相同的 interface 声明可以自动合并</li></ol></details><blockquote><p>使用 <code>interface 描述数据结构</code>，使用 <code>type 描述类型关系</code> 一般来说，如果不清楚什么时候用 interface/type，能用 interface 实现，就用 interface , 如果不能就用 type</p></blockquote><h2 id="类-class" tabindex="-1">类 Class <a class="header-anchor" href="#类-class" aria-label="Permalink to &quot;类 Class&quot;">​</a></h2><h3 id="ts-中什么是方法重载" tabindex="-1">TS 中什么是方法重载 <a class="header-anchor" href="#ts-中什么是方法重载" aria-label="Permalink to &quot;TS 中什么是方法重载&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>方法重载是指在一个类中定义多个同名的方法，但要求每个方法具有不同的参数的类型或参数的个数。 基本上，它在派生类或子类中重新定义了基类方法。</p><p>方法覆盖规则：</p><ul><li>该方法必须与父类中的名称相同。</li><li>它必须具有与父类相同的参数。</li><li>必须存在 IS-A 关系或继承。</li></ul></details><h3 id="说说-ts-中的类及其特性" tabindex="-1">说说 TS 中的类及其特性 <a class="header-anchor" href="#说说-ts-中的类及其特性" aria-label="Permalink to &quot;说说 TS 中的类及其特性&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>TypeScript 引入了类，以便它们可以利用诸如封装和抽象之类的面向对象技术的好处。除了属性和方法之外，TypeScript 中的类还支持以下特性：</p><p><strong>1. 类的成员访问修饰符</strong></p><ul><li><code>public</code> 默认的访问修饰符，公共成员可以在任何地方访问。</li><li><code>private</code> 私有成员只能在当前类中访问，继承类和实例都不能访问。</li><li><code>protected</code> 受保护的成员可以在当前类和继承类中访问，实例不能访问。</li></ul><p><strong>2. 类的静态成员</strong></p><p>静态成员可以通过 <code>static</code> 关键字来定义</p><p><strong>3. 类的继承</strong></p><p>它通过关键字 <code>extends</code> 来实现。继承基类可以获得基类的属性、方法、静态成员和构造函数等</p><p><strong>4. 抽象类</strong></p><p>抽象类通过关键字 <code>abstract</code> 来定义</p></details><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><h3 id="declare-关键字有什么作用" tabindex="-1">Declare 关键字有什么作用 <a class="header-anchor" href="#declare-关键字有什么作用" aria-label="Permalink to &quot;Declare 关键字有什么作用&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>一般的 JavaScript 库/框架都没有 TypeScript 声明文件，但是我们希望在 TypeScript 文件中使用它们时不会出现编译错误，为此需要使用 declare 关键字。</p></details><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7227702665484042297" target="_blank" rel="noreferrer">TypeScript 集合——2023</a></li></ul>',37),s=[o];function r(n,c,d,p,u,y){return t(),a("div",null,s)}const f=e(i,[["render",r]]);export{m as __pageData,f as default};
