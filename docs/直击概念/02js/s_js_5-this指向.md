# this 指向

分析this的指向，首先要确定当前执行代码的环境。

## 全局环境中的this指向

全局环境中，this指向全局对象（视宿主环境而定）

- 浏览器 -> `window`
- Node -> `global`

## 函数中的this指向

函数中this的指向取决于函数的调用形式，在一些情况下也受到严格模式的影响。一般地默认为非严格模式。

### 1. 作为普通函数调用

this指向`全局对象` （严格模式下，this的值是undefined）


### 2. 作为方法调用 

this 指向所属对象


### 3. 作为`构造函数`调用

this指向`实例化的对象`


### 4. 通过call, apply, bind调用

- 如果指定了第一个`参数thisArg`，this的值就是thisArg的值（如果是原始值，会包装为对象）
- 如果不传thisArg，要判断严格模式，严格模式下this是undefined，非严格模式下this指向全局对象。

### 5. 箭头函数

箭头函数和普通函数的重要区别：

1. 没有自己的this、super、arguments和new.target绑定
2. 不能使用new来调用
3. 没有原型对象 
4. 不可以改变this的绑定
5. 形参名称不能重复

**箭头函数中没有this绑定，必须通过查找作用域链来决定其值。** 如果箭头函数被非箭头函数包含，则this绑定的是最近一层非箭头函数的this，否则this的值则被设置为全局对象

其实就是相当于箭头函数外的this是缓存的该箭头函数上层的普通函数的this。如果没有普通函数，则是全局对象（浏览器中则是window）。

也就是说`无法通过call、apply、bind绑定箭头函数的this`(它自身没有this)。而call、apply、bind可以绑定缓存箭头函数上层的普通函数的this。

## 参考资料

- 彻底搞懂闭包，柯里化，手写代码，金九银十不再丢分！ <https://juejin.cn/post/6864378349512065038?searchId=20240204235859870CDC6B5601DC3E157B#heading-17>

- 面试官问：JS的this指向 <https://juejin.cn/post/6844903746984476686?searchId=202402050057506A400D4297D5A144503E>