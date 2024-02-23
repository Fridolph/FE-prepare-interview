import{_ as a,c as o,o as e,V as r}from"./chunks/framework.i1kO8Tor.js";const m=JSON.parse('{"title":"JavaScript API","description":"","frontmatter":{},"headers":[],"relativePath":"面试官问/02js/q_js_4-api.md","filePath":"面试官问/02js/q_js_4-api.md","lastUpdated":null}'),t={name:"面试官问/02js/q_js_4-api.md"},i=r('<h1 id="javascript-api" tabindex="-1">JavaScript API <a class="header-anchor" href="#javascript-api" aria-label="Permalink to &quot;JavaScript API&quot;">​</a></h1><h2 id="遍历" tabindex="-1">遍历 <a class="header-anchor" href="#遍历" aria-label="Permalink to &quot;遍历&quot;">​</a></h2><h3 id="for-in-和-for-of-的区别" tabindex="-1">for in 和 for of 的区别 <a class="header-anchor" href="#for-in-和-for-of-的区别" aria-label="Permalink to &quot;for in 和 for of 的区别&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ul><li>遍历 Map/Set/generator 数组/字符串：用 <code>for of（可迭代）</code>，得到 value</li><li>遍历对象/数组/字符串：用 <code>for in（可枚举数据）</code>，得到 key</li><li>for in 会<code>遍历对象的整个原型链</code>，性能非常差不推荐使用，而 for of 只<code>遍历当前对象不会遍历原型链</code>；</li><li>for of 遍历获取的是对象的<code>键值</code>，for in 获取的是对象的<code>键名</code>；</li></ul><blockquote><p>总结： for in 循环主要是为了遍历对象而生，不适用于遍历数组；for of 循环可以用来遍历数组、类数组对象，字符串、Set、Map 以及 Generator 对象。</p></blockquote></details><h2 id="array" tabindex="-1">Array <a class="header-anchor" href="#array" aria-label="Permalink to &quot;Array&quot;">​</a></h2><h3 id="foreach-和-map-的区别" tabindex="-1">forEach 和 map 的区别 <a class="header-anchor" href="#foreach-和-map-的区别" aria-label="Permalink to &quot;forEach 和 map 的区别&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ol><li><code>forEach() 没有返回值</code>，而 <code>map() 有返回值</code>。</li><li>forEach 遍历通常都是直接引入当前遍历数组的内存地址，<code>会改变原数组</code>，生成的数组的值发生变化，当前遍历的数组对应的值也会发生变化。类似于浅拷贝</li><li>map 遍历的后的数组通常都是<code>生成一个新的数组</code>，新的数组的值发生变化，当前遍历的数组值不会变化。 地址和值都改变 类似于深拷贝。</li><li>总的来说 map 的速度大于 forEach，性能上来说 for &gt; forEach &gt; map</li></ol></details>',7),c=[i];function l(s,d,f,n,h,p){return e(),o("div",null,c)}const u=a(t,[["render",l]]);export{m as __pageData,u as default};
