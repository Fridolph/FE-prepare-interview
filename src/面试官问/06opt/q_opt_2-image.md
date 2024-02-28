# Image

## 如何对图片进行优化

### CSS Sprites

::: details
CSS Sprites（精灵图），将一个页面涉及到的`多张图片`都包含到`一张大图中`去，然后利用 CSS 的 background-image，background-repeat，`background-position` 属性的组合进行背景定位

优点：

- 减少网页的 http 请求，从而大大提高了页面的性能
- 减少图片大小
   
缺点：

- 合并时处理麻烦（有序、预留沟空间）
- 不好定位
- 难以维护和扩展
:::
