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

console.time('🚢 ~ 希尔排序耗时')
let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(shellSort(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.timeEnd('🚢 ~ 希尔排序耗时')
