# 选择排序 Selection Sort

具体算法描述如下：[选择排序](../../../直击概念/03algo/s_sort_2-selectionSort.md)

1. 比较相邻的元素。如果第一个比第二个大，就交换它们两个；
   对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
2. 针对所有的元素重复以上的步骤，除了最后一个；
3. 重复步骤 1~3，直到排序完成。

## JavaScript 代码实现

::: details 代码实现
::: code-group

```js
function selectionSort(array) {
  let length = arr.length
  let minIndex
  let temp

  for (let i = 0; i < length - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < length; j++) {
      // 寻找最小的数
      if (array[j] < array[minIndex]) {
        // 将最小数的索引保存
        minIndex = j
      }
    }
    temp = array[i]
    array[i] = array[minIndex]
    array[minIndex] = temp
  }
  return array
}
```

:::

```js
console.time('🚢 ~ 选择排序耗时')
let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(selectionSort(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.timeEnd('🚢 ~ 选择排序耗时')
```

## 参考

- [十大经典排序算法总结（JavaScript 描述）](https://juejin.cn/post/6844903444365443080)
