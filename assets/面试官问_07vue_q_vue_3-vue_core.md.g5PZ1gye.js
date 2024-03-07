import{_ as s,c as a,o as i,V as t}from"./chunks/framework.VAJu91au.js";const m=JSON.parse('{"title":"Vue 核心","description":"","frontmatter":{},"headers":[],"relativePath":"面试官问/07vue/q_vue_3-vue_core.md","filePath":"面试官问/07vue/q_vue_3-vue_core.md","lastUpdated":1709101052000}'),e={name:"面试官问/07vue/q_vue_3-vue_core.md"},l=t(`<h1 id="vue-核心" tabindex="-1">Vue 核心 <a class="header-anchor" href="#vue-核心" aria-label="Permalink to &quot;Vue 核心&quot;">​</a></h1><blockquote><p>顺序不分先后，推荐使用 ctrl + K 站内搜索 答案仅供参考，欢迎补充、纠正。</p></blockquote><h2 id="vue3-核心方法" tabindex="-1">Vue3 核心方法 <a class="header-anchor" href="#vue3-核心方法" aria-label="Permalink to &quot;Vue3 核心方法&quot;">​</a></h2><table><thead><tr><th>方法名</th><th>使用说明</th></tr></thead><tbody><tr><td><code>ref()</code></td><td>接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 .value。</td></tr><tr><td><code>computed()</code></td><td>接受一个 getter 函数，返回一个只读的响应式 ref 对象。该 ref 通过 .value 暴露 getter 函数的返回值。</td></tr><tr><td><code>reactive()</code></td><td>返回一个对象的响应式代理。</td></tr><tr><td><code>readonly()</code></td><td>接受一个对象 (不论是响应式还是普通的) 或是一个 ref，返回一个原值的只读代理。</td></tr><tr><td><code>watchEffect()</code></td><td>立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。</td></tr><tr><td><code>watchPostEffect()</code></td><td>watchEffect() 使用 flush: &#39;post&#39; 选项时的别名。</td></tr><tr><td><code>watchSyncEffect()</code></td><td>watchEffect() 使用 flush: &#39;sync&#39; 选项时的别名。</td></tr><tr><td><code>watch()</code></td><td>侦听一个或多个响应式数据源，并在数据源变化时调用所给的回调函数。</td></tr></tbody></table><h3 id="进阶方法" tabindex="-1">进阶方法 <a class="header-anchor" href="#进阶方法" aria-label="Permalink to &quot;进阶方法&quot;">​</a></h3><details class="details custom-block"><summary>进阶方法</summary><table><thead><tr><th>方法名</th><th>使用说明</th></tr></thead><tbody><tr><td><code>shallowRef()</code></td><td>ref 浅层作用形式，和 ref() 不同，浅层 ref 的内部值将会原样存储和暴露，并且不会被深层递归地转为响应式</td></tr><tr><td><code>triggerRef()</code></td><td>强制触发依赖于一个浅层 ref 的副作用，这通常在对浅引用的内部值进行深度变更后使用。</td></tr><tr><td><code>customRef()</code></td><td>创建一个自定义的 ref，显式声明对其依赖追踪和更新触发的控制方式。</td></tr><tr><td><code>shallowReactive()</code></td><td>reactive() 的浅层作用形式</td></tr><tr><td><code>shallowReadonly()</code></td><td>readonly() 的浅层作用形式</td></tr><tr><td><code>toRaw()</code></td><td>可以返回由 reactive()、readonly()、shallowReactive() 或者 shallowReadonly() 创建的代理对应的原始对象</td></tr><tr><td><code>markRaw()</code></td><td>将一个对象标记为不可被转为代理。返回该对象本身。</td></tr><tr><td><code>effectScope()</code></td><td>创建一个 effect 作用域，可以捕获其中所创建的响应式副作用 (即计算属性和侦听器)，这样捕获到的副作用可以一起处理。</td></tr><tr><td><code>getCurrentScope()</code></td><td>如果有的话，返回当前活跃的 effect 作用域。</td></tr><tr><td><code>onScopeDispose()</code></td><td>在当前活跃的 effect 作用域上注册一个处理回调函数。当相关的 effect 作用域停止时会调用这个回调函数。</td></tr></tbody></table></details><h2 id="指令" tabindex="-1">指令 <a class="header-anchor" href="#指令" aria-label="Permalink to &quot;指令&quot;">​</a></h2><h3 id="v-model-是如何实现的" tabindex="-1">v-model 是如何实现的 <a class="header-anchor" href="#v-model-是如何实现的" aria-label="Permalink to &quot;v-model 是如何实现的&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>v-model 本质上是一个 value 和 input 语法糖（Vue2），会对用户的输入做一些特殊处理以达到更新数据，而所谓的处理其实就是给使用的元素默认绑定属性和事件。</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;something&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 相当于 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  v-bind:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;something&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  v-on:input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;something = $event.target.value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details><h3 id="v-model-在-vue2-和-vue3-中的区别" tabindex="-1">v-model 在 Vue2 和 Vue3 中的区别 <a class="header-anchor" href="#v-model-在-vue2-和-vue3-中的区别" aria-label="Permalink to &quot;v-model 在 Vue2 和 Vue3 中的区别&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ul><li><p><code>修改默认 prop 名和事件名</code></p><p>当用在自定义组件上时， v-model 默认绑定的 prop 名从 value 变为 <code>modelValue</code> ，而事件名也从默认的 input 改为 <code>update:modelValue</code></p></li><li><p>废除 model 选项</p></li></ul><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 要修改默认 prop 名，只需在 v-model 后面接上 :propName，例如修改为 title --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">my-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model:title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">my-input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 等同于 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">my-input</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  :title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;msg&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  @update:title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;msg = $event&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">my-input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details><h3 id="v-html-的原理" tabindex="-1">v-html 的原理 <a class="header-anchor" href="#v-html-的原理" aria-label="Permalink to &quot;v-html 的原理&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>v-html 会<code>先移除节点下的所有节点</code>，调用 DOM 方法，通过 addProp <code>添加 innerHTML 属性</code>，归根结底还是设置 innerHTML 为 v-html 的值</p></details><h3 id="说一下-v-if-与-v-show-的区别" tabindex="-1">说一下 v-if 与 v-show 的区别 <a class="header-anchor" href="#说一下-v-if-与-v-show-的区别" aria-label="Permalink to &quot;说一下 v-if 与 v-show 的区别&quot;">​</a></h3><details class="details custom-block"><summary>考虑编译、条件、性能、场景等方面：</summary><table><thead><tr><th>特性</th><th>v-if</th><th>v-show</th></tr></thead><tbody><tr><td>显隐</td><td><code>动态</code>的向 DOM 树内添加或删除元素</td><td>通过设置 DOM 元素的 <code>display</code> 控制显隐</td></tr><tr><td>编译</td><td>存在<code>局部编译/卸载</code>，切换时会适时销毁或重建内部时间监听和子组件</td><td>基于 CSS 的切换，<code>无编译开销</code></td></tr><tr><td>条件</td><td>具有惰性，只有在条件第一次变为真时才开始<code>局部编译</code></td><td>在首次条件是否为真时被编译，然后<code>缓存，且 DOM 元素保留</code></td></tr><tr><td>性能</td><td>有更高的切换消耗</td><td>有更高的初始渲染消耗</td></tr><tr><td>场景</td><td>适合条件不大可能改变</td><td>适合频繁切换</td></tr></tbody></table></details><h3 id="v-if-和-v-for-的优先级哪个高" tabindex="-1">v-if 和 v-for 的优先级哪个高 <a class="header-anchor" href="#v-if-和-v-for-的优先级哪个高" aria-label="Permalink to &quot;v-if 和 v-for 的优先级哪个高&quot;">​</a></h3><details class="details custom-block"><summary>区分 Vue2 和 Vue3 的差异</summary><ul><li>vue2 中 v-for 的优先级更高</li><li>vue3 中 v-if 的优先级更高</li></ul></details><h3 id="computed-和-watch-的区别" tabindex="-1">computed 和 watch 的区别 <a class="header-anchor" href="#computed-和-watch-的区别" aria-label="Permalink to &quot;computed 和 watch 的区别&quot;">​</a></h3><details class="details custom-block"><summary>可从缓存，是否支持异步，运用场景等方面进行比较</summary><table><thead><tr><th>特性</th><th>computed</th><th>watchEffect</th></tr></thead><tbody><tr><td>是否支持缓存</td><td>支持缓存，依赖数据发生变化才重新计算</td><td>不支持缓存，数据一变就会触发相应操作</td></tr><tr><td>是否支持异步</td><td>不支持异步监听</td><td>支持异步监听</td></tr><tr><td>运用场景</td><td>数值计算或其他依赖数据时使用</td><td>执行异步函数，或较大开销的操作时使用</td></tr></tbody></table></details><h3 id="watch-和-watcheffect-的区别" tabindex="-1">watch 和 watchEffect 的区别 <a class="header-anchor" href="#watch-和-watcheffect-的区别" aria-label="Permalink to &quot;watch 和 watchEffect 的区别&quot;">​</a></h3><details class="details custom-block"><summary>watch 和 watchEffect 都是监听器，watchEffect 是一个副作用函数，它们之间的区别有：</summary><table><thead><tr><th>特性</th><th>watch</th><th>watchEffect</th></tr></thead><tbody><tr><td>监听方式</td><td>需指明要监听的值，给定相应回调</td><td>自动监听回调中用到的数据</td></tr><tr><td>访问变化前后的值</td><td>可以访问变化前，与变化后的值</td><td>值能获取改变后的值</td></tr><tr><td>是否立即执行</td><td>不会立即执行，当值改变后才执行</td><td>运行后立即执行</td></tr></tbody></table><hr><p>watch 与 vue2.x 中 watch 配置功能一致，但也有两个小坑。</p><ol><li>监视 reactive 定义的响应式数据时，oldValue 无法正确获取，强制开启了深度监视（deep 配置失效）</li><li>监视 reactive 定义的响应式数据中某个属性时，deep 配置有效。</li></ol></details><h3 id="说一下-ref-的作用是什么" tabindex="-1">说一下 ref 的作用是什么 <a class="header-anchor" href="#说一下-ref-的作用是什么" aria-label="Permalink to &quot;说一下 ref 的作用是什么&quot;">​</a></h3><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><h3 id="v-on-常用的修饰符" tabindex="-1">v-on 常用的修饰符 <a class="header-anchor" href="#v-on-常用的修饰符" aria-label="Permalink to &quot;v-on 常用的修饰符&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ul><li><code>.stop</code> 调用 event.stopPropagation()，阻止冒泡事件</li><li><code>.prevent</code> 调用 event.preventDefault()，阻止默认行为</li><li><code>.native</code> 监听组件根元素的原生事件</li></ul></details><h3 id="data-为什么是一个函数而不是对象" tabindex="-1">data 为什么是一个函数而不是对象 <a class="header-anchor" href="#data-为什么是一个函数而不是对象" aria-label="Permalink to &quot;data 为什么是一个函数而不是对象&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>JS 中的对象是引用类型的数据，当多个实例引用同一个对象时，只要一个实例对这个对象进行操作，其他实例中的数据也会发生变化。</p><p>而在 Vue 中，更多的是想要<code>复用组件</code>，那就需要每个组件有<code>自己的作用域</code>，所以组件的数据不能写成对象的形式，而是要写成函数的形式。这样当每次复用组件的时候，就会通过函数<code>返回一个新的 data</code>，也就是说每个组件都有自己的私有数据空间，它们各自维护自己的数据，不会干扰其他组件的正常运行。</p></details><h3 id="常见事件修饰符及其作用" tabindex="-1">常见事件修饰符及其作用 <a class="header-anchor" href="#常见事件修饰符及其作用" aria-label="Permalink to &quot;常见事件修饰符及其作用&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ul><li><code>.stop</code> 阻止事件冒泡（等同于 JS 中的 event.stopPropagation()）</li><li><code>.prevent</code> 阻止事件的默认行为，等同于 JS 中的 event.preventDefault()</li><li><code>.capture</code> 使事件捕获由外到内，默认是冒泡（由内到外）</li><li><code>.self</code> 只会触发自己范围内的事件，不包含子元素</li><li><code>.once</code> 只会触发一次</li></ul></details><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="对-nexttick-的理解" tabindex="-1">对 nextTick 的理解 <a class="header-anchor" href="#对-nexttick-的理解" aria-label="Permalink to &quot;对 nextTick 的理解&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>官方定义：在<strong>下次 DOM 更新循环结束之后执行延迟回调</strong>。在修改数据之后立即使用这个方法，<code>获取更新后的 DOM</code></p><p>个人理解：Vue 在<code>更新 DOM 时是异步</code>执行的。当数据发生变化，Vue 将开启一个<code>异步更新队列</code>，视图需要等队列中所有数据变化完成之后，再统一进行更新。</p><p>总结 nextTick 代码的流程：</p><ul><li>把回调函数放入 callbacks 等待执行</li><li>将执行函数放到微任务或者宏任务中</li><li>事件循环到了微任务或者宏任务，执行函数依次执行 callbacks 中的回调</li></ul></details><h3 id="什么是-mixin" tabindex="-1">什么是 mixin <a class="header-anchor" href="#什么是-mixin" aria-label="Permalink to &quot;什么是 mixin&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ul><li>混入（mixin）提供了一种非常灵活的方式，来分发  Vue 组件中的<code>可复用功能</code></li><li>一个混入对象可以包含任意组件选项（data、methods、mounted 等）</li><li>当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项</li><li>当组件和混入对象含有同名选项时进行合并</li><li>数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先</li></ul></details><h3 id="vue-set-的实现原理" tabindex="-1">Vue.set 的实现原理 <a class="header-anchor" href="#vue-set-的实现原理" aria-label="Permalink to &quot;Vue.set 的实现原理&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>Vue.set，调用方法： <code>Vue.set(target, key, value)</code></p><ul><li>给对应和数组本身都增加了 <code>dep</code> 属性</li><li>当给对象新增不存在的属性则 <strong>触发对象依赖的 watcher 去更新</strong></li><li>当修改数组索引时，我们调用数组本身的 splice 去更新数组（数组的响应式原理就是重写了 splice 等方法，调用 splice 就会触发视图更新）</li></ul><p>vm.$set 的实现原理</p><ul><li>如果目标是数组 ，直接使用数组的 splice 方法触发相应式；</li><li>如果目标是对象 ，会先判读属性是否存在，对象是否是响应式，最终如果要对属性进行响应式处理，则是通过调用 defineReactive 方法进行响应式处理（ defineReactive 方法就是 Vue 在初始化对象时，给对象属性采用 Object.defineProperty 动态添加 getter 和 setter 的功能所调用的方法）</li></ul></details><h3 id="vue-extend-使用和原理" tabindex="-1">Vue.extend 使用和原理 <a class="header-anchor" href="#vue-extend-使用和原理" aria-label="Permalink to &quot;Vue.extend 使用和原理&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>Vue.extend 使用基础 Vue 构造器，创建一个子类。参数是一个包含组件选项的对象。</p><p>其实就是一个子类构造器，extend 是 Vue 组件的核心 api，实现思路就是<code>使用原型继承的方法返回了 Vue 的子类</code>，并且利用 <code>mergeOptions</code> 把传入组件的 options 和父类的 options 进行了合并。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> initExtend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">Vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 组件的唯一标识</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 创建子类继承Vue父类，便于属性扩展</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Vue.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">extend</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">extendOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 创建子类的构造函数，并且调用初始化方法</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Sub</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VueComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 调用Vue初始化方法</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(options)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Sub.cid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 子类原型指向父类</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Sub</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // constructor指向自己</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Sub</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Sub</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 合并自己的options 和 父类的 options</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Sub.options </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mergeOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.options, extendOptions)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Sub</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></details><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7204844328111374391" target="_blank" rel="noreferrer">2023 前端 Vue 面试题及答案</a></li><li><a href="https://juejin.cn/post/7157552181582200863" target="_blank" rel="noreferrer">Vue2 源码解读 - 深入理解 this.$nextTick()</a></li><li><a href="https://juejin.cn/post/7275943802934149160" target="_blank" rel="noreferrer">2023 高频前端面试题合集之 Vue（下篇）</a></li><li><a href="https://cn.vuejs.org/guide/reusability/custom-directives.html" target="_blank" rel="noreferrer">Vue - 自定义指令</a></li></ul>`,40),n=[l];function d(h,r,p,o,k,c){return i(),a("div",null,n)}const E=s(e,[["render",d]]);export{m as __pageData,E as default};
