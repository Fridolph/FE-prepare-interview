# 函数 Function

## 作用域和闭包

知识回顾 [直击概念 - 闭包](../../%E7%9B%B4%E5%87%BB%E6%A6%82%E5%BF%B5/02js/s_js_2-closure.md)

### 说一下什么是闭包

::: details

- 本质为函数。闭包是即便外部函数已经不存在，也可以获取作用域链上变量的函数
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
