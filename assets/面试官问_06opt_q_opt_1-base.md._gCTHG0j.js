import{_ as a,c as e,o as l,V as i}from"./chunks/framework.VAJu91au.js";const b=JSON.parse('{"title":"常见性能优化策略","description":"","frontmatter":{},"headers":[],"relativePath":"面试官问/06opt/q_opt_1-base.md","filePath":"面试官问/06opt/q_opt_1-base.md","lastUpdated":1710649436000}'),t={name:"面试官问/06opt/q_opt_1-base.md"},o=i('<h1 id="常见性能优化策略" tabindex="-1">常见性能优化策略 <a class="header-anchor" href="#常见性能优化策略" aria-label="Permalink to &quot;常见性能优化策略&quot;">​</a></h1><p>优化方式整合：</p><ul><li>DNS 预解析 <code>rel=&quot;dns-prefetch&quot;</code></li><li>CDN 结合缓存策略</li></ul><h2 id="如何优化-css" tabindex="-1">如何优化 CSS <a class="header-anchor" href="#如何优化-css" aria-label="Permalink to &quot;如何优化 CSS&quot;">​</a></h2><h3 id="加载性能" tabindex="-1">加载性能 <a class="header-anchor" href="#加载性能" aria-label="Permalink to &quot;加载性能&quot;">​</a></h3><ul><li><p>CSS 打包压缩，减小文件体积</p></li><li><p>CSS 使用单一样式</p><p>background-image 优于 background，margin-left: 0 优于 margin: 0；</p></li><li><p>减少 @import（等待页面加载完成才解析）；建议使用 link（页面加载时一起解析）</p></li></ul><h3 id="选择器性能" tabindex="-1">选择器性能 <a class="header-anchor" href="#选择器性能" aria-label="Permalink to &quot;选择器性能&quot;">​</a></h3><ol><li><p>关键选择器（key selector）。选择器的最后面的部分为关键 选择器（即用来匹配目标元素的部分）。CSS 选择符是从右到左进行 匹配的。当使用后代选择器的时候，浏览器会遍历所有子元素来确定 是否是指定的元素等等；</p></li><li><p>如果规则拥有 ID 选择器作为其关键选择器，则不要为规则增加 标签。过滤掉无关的规则</p></li><li><p>避免使用通配规则，如 <code>* {}</code> 计算次数惊人，只对需要用到的元素进行选择</p></li><li><p>尽量少的去对标签进行选择，而是用 class</p></li><li><p>尽量少的去使用后代选择器，降低选择器的权重值。后代选择 器的开销是最高的，尽量将选择器的深度降到最低，最高不要超过三 层，更多的使用类来关联每一个标签元素。</p></li><li><p>了解哪些属性是可以通过继承而来的，然后避免对这些属性重 复指定规则。</p></li></ol><h3 id="渲染性能" tabindex="-1">渲染性能 <a class="header-anchor" href="#渲染性能" aria-label="Permalink to &quot;渲染性能&quot;">​</a></h3><ol><li>慎用高消耗布局属性：Table、浮动、定位；</li><li>尽量减少页面重排、重绘；</li><li>去除空规则：<code>{}</code> (预留样式，可通过 webpack 等去除)</li><li>属性值为 0 时，可不加单位；</li><li>正确使用 display: none 和 visibility: hidden</li><li>正确使用 display 的属性，因 display 的设置某些样式组合会无效，徒增样式体积的同时也影响解析性能。</li><li>不滥用 web 字体。web fonts 通常体积庞大，而且一些浏览器在下载 web fonts 时会阻塞页面渲染损伤性能。</li></ol><h3 id="其他考量-可维护性、健壮性" tabindex="-1">其他考量：可维护性、健壮性 <a class="header-anchor" href="#其他考量-可维护性、健壮性" aria-label="Permalink to &quot;其他考量：可维护性、健壮性&quot;">​</a></h3><ul><li>将具有相同属性的样式抽离出来，整合并通过 class 在页面中 进行使用，提高 css 的可维护性。</li><li>样式与内容分离：将 css 代码定义到外部 css 中。</li></ul><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7285915718667124771" target="_blank" rel="noreferrer">前端性能优化系列——DNS 预解析和优化 ⚡</a></li><li><a href="https://juejin.cn/post/7287913415804600331" target="_blank" rel="noreferrer">全面了解高性能利器——CDN（内容分发网络）</a></li></ul><p>作者：前端掘金者 H</p>',15),r=[o];function s(n,c,p,d,h,_){return l(),e("div",null,r)}const f=a(t,[["render",s]]);export{b as __pageData,f as default};
