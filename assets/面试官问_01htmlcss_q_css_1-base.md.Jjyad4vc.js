import{_ as s,c as i,o as a,V as l}from"./chunks/framework.VAJu91au.js";const g=JSON.parse('{"title":"CSS","description":"","frontmatter":{},"headers":[],"relativePath":"面试官问/01htmlcss/q_css_1-base.md","filePath":"面试官问/01htmlcss/q_css_1-base.md","lastUpdated":1709113218000}'),t={name:"面试官问/01htmlcss/q_css_1-base.md"},e=l(`<h1 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-label="Permalink to &quot;CSS&quot;">​</a></h1><h2 id="单位" tabindex="-1">单位 <a class="header-anchor" href="#单位" aria-label="Permalink to &quot;单位&quot;">​</a></h2><h3 id="css-基本单位" tabindex="-1">CSS 基本单位 <a class="header-anchor" href="#css-基本单位" aria-label="Permalink to &quot;CSS 基本单位&quot;">​</a></h3><details class="details custom-block"><summary>px、em、rem、vw、vh 是什么</summary><ul><li>px <code>绝对</code>长度单位</li><li>em 相对长度单位，<code>相对于父元素的字体大小</code></li><li>rem 相对长度单位，<code>相对于根元素</code>（html），所以常用于响应式布局</li><li>vw 网页视口尺寸，<code>相对于当前屏幕的宽度</code></li><li>vh 网页视口尺寸，<code>相对于当前屏幕的高度</code></li></ul></details><h3 id="vw、vh-与-百分比的区别" tabindex="-1">vw、vh 与% 百分比的区别 <a class="header-anchor" href="#vw、vh-与-百分比的区别" aria-label="Permalink to &quot;vw、vh 与% 百分比的区别&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><table><thead><tr><th>特性</th><th>百分比 %</th><th>vm、vh</th></tr></thead><tbody><tr><td>相对元素</td><td>相对父匀速的大小设定比率</td><td>相对视窗大小决定</td></tr><tr><td>是否获取高度</td><td>% 在没有设置 body 高度的情况下，是无法正确获得可视区域的高度</td><td>能够直接获取高度</td></tr></tbody></table></details><h3 id="如何解决-1px-问题" tabindex="-1">如何解决 1px 问题 <a class="header-anchor" href="#如何解决-1px-问题" aria-label="Permalink to &quot;如何解决 1px 问题&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">提示</p><p>1px 问题指的是：在一些 Retina 屏幕 的机型上，移动端页面的 1px 会变得很粗，呈现出不止 1px 的效果。原因很简单——CSS 中的 1px 并不能和移动设备上的 1px 划等号。它们之间的比例关系有一个专 门的属性来描述：<code>window.devicePixelRatio = 设备的物理像素 / CSS 像素</code>，chrome 开发模式下：</p><ul><li>iphone SE/XR devicePixelRatio = 2</li><li>iphone 14 Pro Max devicePixelRatio = 3</li><li>三星 Galaxy S8+ devicePixelRatio = 4</li></ul></div><details class="details custom-block"><summary>详细信息</summary><ul><li>直接写 0.5px。直接把 1px 改成 1/devicePixelRatio 后的值，最简单。但兼容性差，安卓不支持</li></ul><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wrapper&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data-device</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{window.devicePixelRatio}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  #wrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">data-device</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    border</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> solid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> #333</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>使用伪元素放大再缩小。兼容性好，但代码量变多</li></ul><p>在目标元素的后面追加一个 ::after 伪元素，让这个元素布局为 absolute 之后、整个伸展开铺在目标元素上，然后把它的宽和高都设置为目标元素的两倍，border 值设为 1px。</p><p>借助 CSS 动画特效中的缩放能力，把整个伪元素缩小为原来的 50%。此时，伪元素的宽高刚好可以和原有的目标元素对齐，而 border 也缩小为了 1px 的二分之一，间接地实现了 0.5px 的效果。</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#wrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">data-device</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#wrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">data-device</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:after</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">absolute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">scale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  transform-origin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">left</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  box-sizing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">border-box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  border</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> solid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> #333</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></details><h2 id="css-选择器" tabindex="-1">CSS 选择器 <a class="header-anchor" href="#css-选择器" aria-label="Permalink to &quot;CSS 选择器&quot;">​</a></h2><h3 id="说一下-css-选择器" tabindex="-1">说一下 CSS 选择器 <a class="header-anchor" href="#说一下-css-选择器" aria-label="Permalink to &quot;说一下 CSS 选择器&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ul><li><code>属性选择器</code>：可以根据元素的属性值选择元素。 比如：<code>[attr]</code>、[attr=value]、[attr~=value]、[attr|=value]、[attr^=value]、[attr$=value]、[attr*=value]。</li><li><code>伪类选择器</code>：可以在特定状态下选取元素。 比如：:hover、:visited、:active、:focus、:first-child、:last-child、:nth-child(n)、:nth-of-type(n)、:not(selector)等。</li><li><code>伪元素选择器</code>：可以在元素的特定部分选取元素。 比如：::before、::after、::first-letter、::first-line 等。</li><li>多元素选择器：可以同时选择多个元素。 比如：p, h1, li 等。</li><li><code>相邻兄弟选择器</code>：可以选择和某个元素相邻的下一个兄弟元素 比如：h1 + p。</li><li><code>通用选择器</code>：可以选择所有元素 比如：<code>*</code>。</li></ul></details><h3 id="css-样式优先级" tabindex="-1">CSS 样式优先级 <a class="header-anchor" href="#css-样式优先级" aria-label="Permalink to &quot;CSS 样式优先级&quot;">​</a></h3><details class="details custom-block"><summary>从高到低依次为：</summary><ul><li>!important</li><li>内联样式</li><li>ID 选择器</li><li>类选择器</li><li>类型选择器</li><li>元素选择器</li><li>浏览器默认样式</li></ul></details><h2 id="间距" tabindex="-1">间距 <a class="header-anchor" href="#间距" aria-label="Permalink to &quot;间距&quot;">​</a></h2><h3 id="margin-纵向重叠问题" tabindex="-1">margin 纵向重叠问题 <a class="header-anchor" href="#margin-纵向重叠问题" aria-label="Permalink to &quot;margin 纵向重叠问题&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>margin 重叠是指在垂直方向上，相邻的两个元素的 margin-top 和 margin-bottom 会发生重叠的情况</p><p>产生条件：</p><ul><li><p>必须处于常规文档流（不能是浮动和定位）的块级盒子，并且<code>处于同一个 BFC 当中</code>。</p></li><li><p><code>没有空隙</code>，没有 padding 和 border 将他们分割。</p></li><li><p>都处于<code>垂直方向相邻的外边距</code>。</p></li></ul></details><h3 id="margin-设置负值有何效果" tabindex="-1">margin 设置负值有何效果 <a class="header-anchor" href="#margin-设置负值有何效果" aria-label="Permalink to &quot;margin 设置负值有何效果&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ol><li>margin-left 为负值时，自身元素会向左移动</li><li>margin-top 为负值时，自身元素会向上移动</li><li>margin-right 为负值时，自身元素不受影响，但是相邻元素会向左移动</li><li>margin-bottom 为负值时，自身元素不受影响，但是相邻元素会向上移动</li><li>position: absolute 时，margin-right 和 margin-bottom 为负值时，自身元素会受影响</li></ol></details><h2 id="展示" tabindex="-1">展示 <a class="header-anchor" href="#展示" aria-label="Permalink to &quot;展示&quot;">​</a></h2><h3 id="display-none-和-visibility-hidden-的区别" tabindex="-1">display:none 和 visibility:hidden 的区别 <a class="header-anchor" href="#display-none-和-visibility-hidden-的区别" aria-label="Permalink to &quot;display:none 和 visibility:hidden 的区别&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><table><thead><tr><th>特性</th><th>display:none</th><th>visibility:hidden</th></tr></thead><tbody><tr><td>文档流</td><td>文档流中不占据位置，浏览器不解析</td><td>文档流中占位</td></tr><tr><td>可见性</td><td>设置后及子孙节点都不可见</td><td>属性可继承，通过设置 visible 让其可见</td></tr></tbody></table></details><h3 id="line-height-的继承问题" tabindex="-1">line-height 的继承问题 <a class="header-anchor" href="#line-height-的继承问题" aria-label="Permalink to &quot;line-height 的继承问题&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>1.具体数值（子元素未设置具体行高数值，会自动<code>继承父元素的行高</code>）</p><p>2.按比例（子元素未设置行高，父元素行高为 1.5 或 2） 计算：子元素行高会<code>先继承父元素行高</code>的 1.5 或 2，然后<code>和子元素font-size相乘</code>。</p><p>3.百分比（子元素不会直接继承父元素行高，而是等父元素字体大小 _ 行高百分比<code>计算后再继承</code>） 计算：子元素行高 = 父元素字体大小（font-size）_ 行高百分比。</p></details><h3 id="css-有哪些属性可以继承" tabindex="-1">CSS 有哪些属性可以继承 <a class="header-anchor" href="#css-有哪些属性可以继承" aria-label="Permalink to &quot;CSS 有哪些属性可以继承&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ol><li><code>字体属性</code>：font、font-family、font-weight、font-size、font-style</li><li><code>文本属性</code>:</li></ol><ul><li>内联元素：color、line-height、word-spacing、letter-spacing、 text-transform;</li><li>块级元素：text-indent、text-align</li></ul><ol start="3"><li><code>元素可见性</code>：visibility</li><li><code>表格布局属性</code>：caption-side、border-collapse、border-spacing、empty-cells、 table-layout;</li><li><code>列表布局属性</code>：list-style</li><li><code>光标属性</code>：cursor。</li></ol></details><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7227787460968415289" target="_blank" rel="noreferrer">前端（HTML+CSS+JS+打包+环境+网络）面试题基础八股集合——2023</a>——小小打工媛</li></ul>`,28),n=[e];function h(p,r,d,k,o,c){return a(),i("div",null,n)}const y=s(t,[["render",h]]);export{g as __pageData,y as default};
