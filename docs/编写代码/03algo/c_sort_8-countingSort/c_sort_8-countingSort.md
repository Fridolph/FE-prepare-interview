# 计数排序 Counting Sort

具体算法描述如下：[计数排序](../../../直击概念/03algo/s_sort_8-countingSort.md)

1. 找出待排序的数组中最大和最小的元素；
2. 统计数组中每个值为 i 的元素出现的次数，存入数组 C 的第 i 项；
3. 对所有的计数累加（从 C 中的第一个元素开始，每一项和前一项相加）；
4. 反向填充目标数组：将每个元素 i 放在新数组的第 C(i)项，每放一个元素就将 C(i)减去 1。

## JavaScript 代码实现

::: details 代码实现
::: code-group

```js
function countingSort(array) {
  let length = array.length
  let B = []
  let C = []
  let min = array[0]
  let max = array[0]

  for (let i = 0; i < length; i++) {
    min = min <= array[i] ? min : array[i]
    max = max >= array[i] ? max : array[i]
    C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1
  }

  for (let j = min; j < max; j++) {
    C[j + 1] = (C[j + 1] || 0) + (C[j] || 0)
  }

  for (let k = length - 1; k >= 0; k--) {
    B[C[array[k]] - 1] = array[k]
    C[array[k]]--
  }

  return B
}
```

:::

```js
console.time('🚢 ~ 计数排序耗时 ~ ➡️:')
let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(countingSort(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.timeEnd('🚢 ~ 计数排序耗时 ~ ➡️:')
```

## 参考

- [十大经典排序算法总结（JavaScript 描述）](https://juejin.cn/post/6844903444365443080)
