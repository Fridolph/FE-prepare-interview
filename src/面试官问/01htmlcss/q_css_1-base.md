# CSS

## 单位

### CSS 基本单位

::: details px、em、rem、vw、vh 是什么

- px `绝对`长度单位
- em 相对长度单位，`相对于父元素的字体大小`
- rem 相对长度单位，`相对于根元素`（html），所以常用于响应式布局
- vw 网页视口尺寸，`相对于当前屏幕的宽度`
- vh 网页视口尺寸，`相对于当前屏幕的高度`
  :::

### vw、vh 与% 百分比的区别

::: details

|特性|百分比 %|vm、vh|
|-|-|-|
|相对元素|相对父匀速的大小设定比率|相对视窗大小决定|
|是否获取高度|% 在没有设置 body 高度的情况下，是无法正确获得可视区域的高度|能够直接获取高度|
  :::

## CSS 选择器

### 说一下 CSS 选择器

::: details

- `属性选择器`：可以根据元素的属性值选择元素。
  比如：`[attr]`、[attr=value]、[attr~=value]、[attr|=value]、[attr^=value]、[attr$=value]、[attr*=value]。
- `伪类选择器`：可以在特定状态下选取元素。
  比如：:hover、:visited、:active、:focus、:first-child、:last-child、:nth-child(n)、:nth-of-type(n)、:not(selector)等。
- `伪元素选择器`：可以在元素的特定部分选取元素。
  比如：::before、::after、::first-letter、::first-line 等。
- 多元素选择器：可以同时选择多个元素。
  比如：p, h1, li 等。
- `相邻兄弟选择器`：可以选择和某个元素相邻的下一个兄弟元素
  比如：h1 + p。
- `通用选择器`：可以选择所有元素
  比如：`*`。
  :::

### CSS 样式优先级

::: details 从高到低依次为：

- !important
- 内联样式
- ID 选择器
- 类选择器
- 类型选择器
- 元素选择器
- 浏览器默认样式
  :::
  
## 间距

### margin 纵向重叠问题

::: details
margin 重叠是指在垂直方向上，相邻的两个元素的 margin-top 和 margin-bottom 会发生重叠的情况

产生条件：

- 必须处于常规文档流（不能是浮动和定位）的块级盒子，并且`处于同一个 BFC 当中`。

- `没有空隙`，没有 padding 和 border 将他们分割。

- 都处于`垂直方向相邻的外边距`。
  :::

### margin 设置负值有何效果

::: details

1. margin-left 为负值时，自身元素会向左移动
2. margin-top 为负值时，自身元素会向上移动
3. margin-right 为负值时，自身元素不受影响，但是相邻元素会向左移动
4. margin-bottom 为负值时，自身元素不受影响，但是相邻元素会向上移动
5. position: absolute 时，margin-right 和 margin-bottom 为负值时，自身元素会受影响
   :::


## 展示

### display:none 和 visibility:hidden 的区别

::: details
|特性|display:none|visibility:hidden|
|-|-|-|
|文档流|文档流中不占据位置，浏览器不解析|文档流中占位|
|可见性|设置后及子孙节点都不可见|属性可继承，通过设置visible让其可见|
  :::

### line-height 的继承问题

::: details

1.具体数值（子元素未设置具体行高数值，会自动`继承父元素的行高`）

2.按比例（子元素未设置行高，父元素行高为 1.5 或 2）
计算：子元素行高会`先继承父元素行高`的 1.5 或 2，然后`和子元素font-size相乘`。

3.百分比（子元素不会直接继承父元素行高，而是等父元素字体大小 _ 行高百分比`计算后再继承`）
计算：子元素行高 = 父元素字体大小（font-size）_ 行高百分比。
:::

### CSS 有哪些属性可以继承

::: details

1. `字体属性`：font、font-family、font-weight、font-size、font-style
2. `文本属性`:

- 内联元素：color、line-height、word-spacing、letter-spacing、 text-transform;
- 块级元素：text-indent、text-align

3. `元素可见性`：visibility
4. `表格布局属性`：caption-side、border-collapse、border-spacing、empty-cells、 table-layout;
5. `列表布局属性`：list-style
6. `光标属性`：cursor。
   :::
