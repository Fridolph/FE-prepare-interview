# JavaScript API

## 遍历

### for in 和 for of 的区别

::: details

- 遍历 Map/Set/generator 数组/字符串：用 `for of（可迭代）`，得到 value
- 遍历对象/数组/字符串：用 `for in（可枚举数据）`，得到 key
- for in 会`遍历对象的整个原型链`，性能非常差不推荐使用，而 for of 只`遍历当前对象不会遍历原型链`；
- for of 遍历获取的是对象的`键值`，for in 获取的是对象的`键名`；

> 总结： for in 循环主要是为了遍历对象而生，不适用于遍历数组；for of 循环可以用来遍历数组、类数组对象，字符串、Set、Map 以及 Generator 对象。

:::

## Array

### forEach 和 map 的区别

::: details

1. `forEach() 没有返回值`，而 `map() 有返回值`。
2. forEach 遍历通常都是直接引入当前遍历数组的内存地址，`会改变原数组`，生成的数组的值发生变化，当前遍历的数组对应的值也会发生变化。类似于浅拷贝
3. map 遍历的后的数组通常都是`生成一个新的数组`，新的数组的值发生变化，当前遍历的数组值不会变化。 地址和值都改变 类似于深拷贝。
4. 总的来说 map 的速度大于 forEach，性能上来说 for > forEach > map
   :::
