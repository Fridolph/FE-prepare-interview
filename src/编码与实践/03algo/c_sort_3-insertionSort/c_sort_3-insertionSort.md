# 插入排序 Insertion Sort

具体算法描述如下：[插入排序](../../../概念与原理/03algo/s_sort_3-insertionSort.md)

1. 从第一个元素开始，该元素可以认为已经被排序；
2. 取出下一个元素，在已经排序的元素序列中从后向前扫描；
3. 如果该元素（已排序）大于新元素，将该元素移到下一位置；
4. 重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置；
5. 将新元素插入到该位置后；
6. 重复步骤 2~5。

## JavaScript 代码实现

::: details 代码实现
::: code-group

```js
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i]
    let j = i - 1
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = key
  }
  return array
}
```

:::

```js
console.time('🚢 ~ 插入排序耗时')
let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(insertionSort(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.timeEnd('🚢 ~ 插入排序耗时')
```

## 改进插入排序

::: details 查找插入位置时使用二分查找的方式
::: code-group

```js
function binaryInsertionSort(array) {
  console.time('🚢 ~ 优化后的插入排序耗时')
  for (let i = 1; i < array.length; i++) {
    let key = array[i]
    let left = 0
    let right = i - 1
    while (left <= right) {
      let middle = parseInt((left + right) / 2)
      if (key < array[middle]) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }
    for (let j = i - 1; j >= left; j--) {
      array[j + 1] = array[j]
    }
    array[left] = key
  }
  console.timeEnd('🚢 ~ 优化后的插入排序耗时')
  return array
}
```

:::

## 参考

- [十大经典排序算法总结（JavaScript 描述）](https://juejin.cn/post/6844903444365443080)
