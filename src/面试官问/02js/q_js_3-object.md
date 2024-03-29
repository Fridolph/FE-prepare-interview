# 面向对象

回顾 [直击概念 - 变量](../../%E7%9B%B4%E5%87%BB%E6%A6%82%E5%BF%B5/02js/s_js_3-object.md)

## 类与继承

### 说一下原型链

::: details
- 每个对象都有属性 prototype，一个隐式原型叫 `__proto__`，它指向其`构造函数的原型对象`
- 当查找某个属性或方法时，先从自身上查找，没有找到会沿着 `__proto__` 找到构造函数（constructor）的原型对象（prototype），仍然没有找到会继续沿着 `__proto__` 向上查找到它构造函数原型对象的原型对象
- 直到找到顶级对象 object 为 null，由此形成的链条为原型链

:::

<Image src="/02js/prototype-chain.png" alt="原型链"/>

::: details 引用类型四个特性

- 引用类型，都具有对象特性，即可自由扩展属性
- 引用类型，都有一个隐式原型，即 `__proto__`，属性值为一个普通对象
- 引用类型，隐式原型的属性值指向它构造函数 `Constructor` 的显式原型 prototype 属性值
- 当查找一个对象某个属性时，若对象本身没有该属性，会去找它隐式原型 `__proto__` 中寻找
- 若还是没找到会继续在它构造函数的显式原型 `prototype` 中寻找，直至找到或 `__proto__` 为 null 为止，由此形成原型链

:::

## 什么是浅拷贝

浅拷贝是创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以`如果其中一个对象改变了这个地址，就会影响到另一个对象`。

::: details 实现浅拷贝的几种方式

1. `Object.assign()`
2. `lodash`的 \_.clone 方法
3. ES6 展开运算符 `...`
4. Array.prototype.`concat()`
5. Array.prototype.`slice()`
   :::

## 什么是深拷贝

深拷贝是将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象，且`修改新对象不会影响原对象`。

## 赋值和深浅拷贝的区别

<Image src="/02js/clone1.png" alt="shadowCopy" />
<Image src="/02js/clone2.png" alt="deepCopy" />

::: details 实现深拷贝的几种方式

1. JSON.parse(JSON.stringify()) `缺点是不能处理函数和正则`
2. `lodash`的 `_.cloneDeep` 方法
3. `jQuery.extend()` 方法
4. 手写递归方法 - 见 [deepCopy](../../%E7%BC%96%E5%86%99%E4%BB%A3%E7%A0%81/02js/c_js_2-deepcopy/c_js_2-deepcopy.md)
   :::

## 参考资料

- 浅拷贝与深拷贝 <https://juejin.cn/post/6844904197595332622>

- 深拷贝的终极探索 <https://segmentfault.com/a/1190000016672263>

- How to deep clone a JavaScript object<https://flaviocopes.com/how-to-clone-javascript-object/>
