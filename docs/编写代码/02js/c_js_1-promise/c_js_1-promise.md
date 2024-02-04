# 实现一个功能完整的简易 Promise

需求：

1. 满足 promise 规范，和原生一样的使用方式
2. 支持 .then()
3. 支持链式调用

::: code-group
```js [myPromise.js]
// Promise的状态 只能由 
// pending -> fulfilled  
// pending -> rejected 且状态不可逆
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  state = PENDING
  value = undefined
  reason = undefined
  // pending -> 存成功的回调
  resolveFnArr = [] 
  // pending -> 存失败的回调
  rejectFnArr = []  

  // new MyPromise 会初始化下面代码
  constructor(fn) {

    const resolveHandler = () => {
      if (this.state === PENDING) {
        this.state = FULFILLED
        this.value = value
        this.resolveFnArr.forEach(fn => fn(this.value))
      }
    }
    const rejectHandler = () => {
      if (this.state = PENDING) {
        this.state = REJECTED
        this.reason = reason
        this.rejectFnArr.forEach(fn => fn(this.value))
      }
    }

    try {
      fn(resolveHandler, rejectHandler)
    } catch (error) {
        rejectHandler(error)
    }
  }

  then(resolve, reject) {
    resolve = typeof fn1 == 'function' ? fn1 : v => v
    reject = typeof fn2 == 'function' ? fn2 : e => e

    if (this.state === PENDING) {
      const p = new MyPromise((resolveFn, rejectFn) => {
        this.resolveFnArr.push(() => {
          try {
            const newVal = resolve(this.value)
            resolveFn(newVal)
          } catch (err) {
            reject(err)
          }
        })
        this.rejectFnArr.push(() => {
          try {
            const newReason = reject(this.reason)
            rejectFn(newReason)
          } catch (err) {
            rejectFn(err)
          }
        })
      })
      return p
    }
    if (this.state === FULFILLED) {
      const p = new MyPromise((resolveFn, rejectFn) => {
        try {
          const newVal = resolve(this.value)
          resolveFn(newVal)
        } catch (err) {
          rerejectFn(err)
        } 
      })
      return p
    }
    if (this.state === REJECTED) {
      const p = new MyPromise((resolveFn, rejectFn) => {
        try {
          const newReason = reject(this.reason)
          rejectFn(newReason)
        } catch (err) {
          rejectFn(newReason)
        }
      })
      return p
    }
  }

  catch(rejectFn) {
    return this.then(null, rejectFn)
  }
}
```
:::

## Promise.resolve 

MyPromise.resolve 本质是一个语法糖

```js
MyPromise.resolve = function(value) {
  return new MyPromise((resolve, reject) => resolve(value))
}
```


## Promise.reject

MyPromise.reject 本质就是一个语法糖

```js
MyPromise.reject = function(reason) {
  return new MyPromise((resolve, reject) => reject(reason))
}
```

## Promise.all

传入一个由Promise组成的数组，等待所有Promise状态都变为 `fulfilled`后，返回新的Promise，包含这所有的结果

```js
MyPromise.all = function(arr = []) {x
  const promise = new MyPromise((resolve, reject) => {
    // 存 promise (arr) 所有的结果
    const ret = []
    const len = arr.length
    let count = 0
    arr.forEach(p => {
      p.then(data => {
        ret.push(data)
        count++
        if (count === len) {
          // 已遍历到最后一个promise
          resolve(ret)
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
  return promise
}
```

## Promise.race 

传入一个由Promise组成的数组，只要有一个Promise状态变为fulfilled即返回结果

```js
MyPromise.race = function(arr = []) {
  // 创建一个标记，用于表示是否有resolve
  let flag = false
  const promise = new MyPromise((resolve, reject) => {
    arr.forEach(p => {
      p.then(data => {
        if (!flag) {
          resolve(data)
          flag = true
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
  return promise
}
```

## 其他版本

这个 Promise 的实现不考虑任何异常情况，只考虑代码最简短，从而便于读者理解核心的异步链式调用原理。

```js
function MyPromise(fn) {
  this.cbs = [];

  const resolve = (value) => {
    setTimeout(() => {
      this.data = value;
      this.cbs.forEach((cb) => cb(value));
    });
  }

  fn(resolve.bind(this));
}

MyPromise.prototype.then = function (onResolved) {
  return new MyPromise((resolve) => {
    this.cbs.push(() => {
      const res = onResolved(this.data);
      if (res instanceof MyPromise) {
        res.then(resolve);
      } else {
        resolve(res);
      }
    });
  });
};
```


[手写Promise最简20行版本，实现异步链式调用。（重构版）](https://mp.weixin.qq.com/s?__biz=MzI3NTM5NDgzOA==&mid=2247484547&idx=1&sn=a65fc242a920ab0125f3b875d282f614&chksm=eb043cfadc73b5ec84954dcbdeff95e0d538f1ea2d796d1832a3dfb0b67be5e1e93bd42eb610&scene=178&cur_album_id=1692321392169402371#rd)