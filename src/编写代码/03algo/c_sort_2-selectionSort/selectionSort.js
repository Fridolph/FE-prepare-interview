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

console.time('🚢 ~ 选择排序耗时')
let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(selectionSort(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.timeEnd('🚢 ~ 选择排序耗时')
