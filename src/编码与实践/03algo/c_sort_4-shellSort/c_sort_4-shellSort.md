# 希尔排序 Shell Sort

具体算法描述如下：[希尔排序](../../../概念与原理/03algo/s_sort_4-shellSort.md)

1. 选择一个增量序列 t1，t2，…，tk，其中 ti>tj，tk=1；
2. 按增量序列个数 k，对序列进行 k 趟排序；
3. 每趟排序，根据对应的增量 ti，将待排序列分割成若干长度为 m 的子序列，分别对各子表进行直接插入排序。仅增量因子为 1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。

## JavaScript 代码实现

::: details 代码实现
::: code-group

```js
function shellSort(array, divide = 5) {
  let length = array.length
  let gap = 1
  let temp, i, j
  // 动态定义间隔序列
  while (gap < length / divide) {
    gap = gap * divide + 1
  }
  for (gap; gap > 0; gap = Math.floor(gap / divide)) {
    for (i = gap; i < length; i++) {
      temp = array[i]
      for (j = i - gap; j >= 0 && array[j] > temp; j -= gap) {
        array[j + gap] = array[j]
      }
      array[j + gap] = temp
    }
  }
  return array
}
```

:::

```js
console.time('🚢 ~ 希尔排序耗时')
let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(shellSort(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.timeEnd('🚢 ~ 希尔排序耗时')
```

## 参考

- [十大经典排序算法总结（JavaScript 描述）](https://juejin.cn/post/6844903444365443080)
