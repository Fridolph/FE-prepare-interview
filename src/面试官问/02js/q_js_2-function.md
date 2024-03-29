# 函数 Function

## 作用域和闭包

知识回顾 [直击概念 - 闭包](../../%E7%9B%B4%E5%87%BB%E6%A6%82%E5%BF%B5/02js/s_js_2-closure.md)

### 说一下什么是闭包

::: details

- 闭包本质是函数。闭包是指一个`函数能够访问另一个函数作用域中的变量`的函数。闭包可以让开发者从内部函数访问外部函数的作用域。
  :::

### 函数在 JS 中是如何运行的

::: details

1. JS 源代码经过语法分析，转化成 tokens
2. tokens 经过语义分析，转化为 AST(抽象语法树)
3. 抽象语法树会被转化为字节码
4. JS 运行时开始运行这段上面生成代码
   :::

> 闭包产生的本质就是，当前环境中存在指向父级作用域的引用

### 闭包有哪些表现形式

::: details

1. 函数中再返回一个新的函数（高级函数）

2. 把整个函数作为参数传入（回调函数）
   
3. 异步事件（实际上都是在使用闭包）

4. IIFE 立即执行函数

:::

### this 的不同使用场景及取值

知识回顾 [直击概念 - this](../../%E7%9B%B4%E5%87%BB%E6%A6%82%E5%BF%B5/02js/s_js_4-this.md)

::: details

1. 作为`函数调用`。this `指向全局对象` （严格模式下，this 的值是 undefined）

2. 作为`对象方法调用`。this `指向所属对象`

3. 作为`构造函数调用`。this 指向`实例化的对象`

4. 通过 call, apply, bind 调用

- 如果指定了第一个参数 `thisArg`，this 的值就是 thisArg 的值（如果是原始值，会包装为对象）
- 如果不传 thisArg，要判断严格模式，严格模式下 this 是 undefined，非严格模式下 this 指向全局对象。

5. 箭头函数，根据定义时所在作用域绑定 this 的值
   :::
