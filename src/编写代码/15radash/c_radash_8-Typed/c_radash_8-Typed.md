# Typed

## isSymbol

这个函数通常用于检查变量是否是一个已经定义的符号，例如使用 const 定义的符号。这对于确保符号名称不会被重复使用非常有用，特别是当符号名称对于应用程序至关重要时。

```ts
export const isSymbol = (value: any): value is symbol => {
  // 函数使用逻辑与（&&）操作符来检查value是否为undefined或null，以及value是否具有Symbol构造函数
  // 如果满足这两个条件，函数返回true，否则返回false。
  return !!value && value.constructor === Symbol
}
```

## isArray

这个函数可以用于检查变量是否为数组。

```ts
export const isArray = Array.isArray
```

## isObject

这个函数可以用于检查变量是否为对象，例如在处理对象属性时，以确保它们不是全局变量或未定义。

```ts
export const isObject = (value: any): value is object => {
  // 使用逻辑与运算符&&首先检查value是否存在，并且它的构造函数是否为Object。这是为了确保接下来要检查的是一个对象。
  // 然后，使用value.constructor === Object来检查给定的value是否确实是一个对象。这是为了区分普通对象和数组（因为数组的构造函数也是Object）。
  return !!value && value.constructor === Object
}
```

## isPrimitive

在某些情况下，需要判断给定的值是否为原始类型，以避免处理非预期类型的数据。

例如，在 JavaScript 中，有些函数和方法接受原始类型作为参数，但拒绝接受对象或函数作为参数。在这种情况下，可以使用 isPrimitive 函数来检查输入值是否为原始类型。

```ts
// 用于判断给定的值是否为原始类型
export const isPrimitive = (value: any): boolean => {
  return (
    // 首先，检查value是否为undefined，如果是，则返回true。
    value === undefined ||
    // 然后，检查value是否为null，如果是，则返回true。
    value === null ||
    (typeof value !== 'object' && typeof value !== 'function')
    // 接下来，检查value的类型是否不是对象（typeof value !== 'object'）
    // 也不是函数（typeof value !== 'function'）
    // 如果是，则返回true。
    // 如果value的类型满足上述条件，则返回false
  )
}
```

## isFunction

判断是否为函数

```ts
export const isFunction = (value: any): value is Function => {
  // 通过检查value是否为null或undefined，
  // 然后检查value是否有constructor属性，
  // 并判断其call和apply方法是否为函数
  return !!(value && value.constructor && value.call && value.apply)
}
```

## isString

判断是否为字符串类型

```ts
export const isString = (value: any): value is string => {
  // 使用 typeof 和 instanceof 运算符，以及对 value 进行非空检查
  return typeof value === 'string' || value instanceof String
}
```

## isInt

检查传入的 value 是否为整数

```ts
export const isInt = (value: any): value is number => {
  // isNumber 函数会检查传入的值是否为 Number 类型，包括整数和浮点数
  // 使用逻辑运算符 % 检查 value 是否为整数
  // 如果 value 是整数，它将会被整除
  return isNumber(value) && value % 1 === 0
}
```

## isFloat

检查传入的 value 是否为浮点数

```ts
export const isFloat = (value: any): value is number => {
  // isNumber 函数会检查传入的值是否为 Number 类型，包括整数和浮点数
  // 使用逻辑运算符 % 检查 value 是否为整数
  // 如果 value 是浮点数，它将不会被整除
  return isNumber(value) && value % 1 !== 0
}
```

## isNumber

判断是否为 Number 类型

```ts
export const isNumber = (value: any): value is number => {
  try {
    // 使用Number函数将value转换为数字
    // 如果转换后的数字与原始值相等，则返回true，否则返回false
    return Number(value) === value
  } catch {
    return false
  }
}
```

## isPromise

检查传入的值是否是一个Promise实例

```ts
export const isPromise = (value: any): value is Promise<any> => {
  // 使用了一个辅助函数isFunction来检查传入的值是否是一个函数
  // 如果传入的值是一个Promise实例，那么它应该有一个then方法，且then方法应该是一个函数
  // 通过检查value.then是否是一个函数，可以判断传入的值是否是一个Promise实例
  if (!value) return false
  if (!value.then) return false
  if (!isFunction(value.then)) return false
  return true
}
```

## isEmpty

判断给定的值是否为空。这个函数主要用于处理复杂类型的值，包括布尔值、null、undefined、数字、日期、函数、符号等

```ts
export const isEmpty = (value: any) => {
  if (value === true || value === false) return true
  if (value === null || value === undefined) return true


  if (isNumber(value)) return value === 0

  if (isDate(value)) return isNaN(value.getTime())

  if (isFunction(value)) return false

  if (isSymbol(value)) return false

  const length = (value as any).length
  if (isNumber(length)) return length === 0

  const size = (value as any).size
  if (isNumber(size)) return size === 0

  const keys = Object.keys(value).length
  return keys === 0
}
```

## isEqual

这个函数用于比较这两个参数是否相等。

主要目的是实现一个通用且高效的比较器，可以用来比较任何类型的数据，包括对象、数组、字符串、数字、布尔值等。

```ts
export const isEqual = <TType>(x: TType, y: TType): boolean => {
  // Object.is方法来检查x和y是否是同一个对象
  if (Object.is(x, y)) return true

  // 分别检查x和y是否是Date对象。如果是，则比较它们的日期时间戳是否相等
  if (x instanceof Date && y instanceof Date) {
    return x.getTime() === y.getTime()
  }

  // 检查x和y是否是正则对象。如果是，则比较它们的内部表示是否相等。
  if (x instanceof RegExp && y instanceof RegExp) {
    return x.toString() === y.toString()
  }

  // 检查x和y是否不是对象或者null。如果是，则返回false
  if (
    typeof x !== 'object' ||
    x === null ||
    typeof y !== 'object' ||
    y === null
  ) {
    return false
  }

  // 这里稍微复杂些
  // 如果x和y是对象，则获取它们自己的属性键数组，并遍历这些属性键
  const keysX = Reflect.ownKeys(x as unknown as object) as (keyof typeof x)[]
  const keysY = Reflect.ownKeys(y as unknown as object)
  
  // 检查y是否具有相同的属性键，并且对应的属性值是否与x相等。
  if (keysX.length !== keysY.length) return false
  for (let i = 0; i < keysX.length; i++) {
    if (!Reflect.has(y as unknown as object, keysX[i])) return false
    if (!isEqual(x[keysX[i]], y[keysX[i]])) return false
  }
  // 如果所有属性都相等，则返回true。
  return true
}
```