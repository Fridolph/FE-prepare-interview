# 冒泡排序 Bubble Sort

具体算法描述如下：[冒泡排序](../../../概念与原理/03algo/s_sort_1-bubbleSort.md)

1. 比较相邻的元素。如果第一个比第二个大，就`交换`它们两个；
2. `对每一对相邻元素做同样的工作`，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
3. 针对所有的元素重复以上的步骤，除了最后一个；
4. 重复步骤 1~3，直到排序完成。

## JavaScript 代码实现

::: details 代码实现
::: code-group

```js
function bubbleSort(array) {
  let length = array.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1]
        array[j + 1] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}
```

:::

```js
console.time('🚢 ~ 冒泡排序耗时')
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(bubbleSort(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.timeEnd('🚢 ~ 冒泡排序耗时')
```

## 参考

- [十大经典排序算法总结（JavaScript 描述）](https://juejin.cn/post/6844903444365443080)
