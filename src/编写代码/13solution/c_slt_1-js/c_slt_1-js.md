# 基础场景题

## 将数字转换千分位

### 数值转字符串遍历

::: details

整理思路：数字转字符串，整体部分低位往高位遍历

```js
function formatWithArray(number) {
  // 转为字符串，是否有小数点，来拆分
  let arr = (number + '').split('.')
  let int = arr[0].split('')
  let fraction = arr[1] || ''
  // 返回的变量
  let r = ''
  let len = int.length
  // 倒叙并遍历
  int.reverse().forEach((v, i) => {
    // 非第一位且位置是3的倍数，添加 ','
    if (i !== 0 && i % 3 === 0) {
      r = v + ',' + r
    }
    // 正常添加字符
    else {
      r + v + r
    }
  })
  // 整数部分和小数部分拼接
  return r + (!!fraction ? '.' + fraction : '')
}
```

:::
