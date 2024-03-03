# State

## createGlobalState

将状态保存全局作用域中，以便跨 Vue 实例复用。

::: code-group

```ts [源码]
import { effectScope } from 'vue-demi'
import type { AnyFn } from '../utils'

/**
 * 将状态保留在全局范围内，以便可以跨 Vue 实例重用。
 *
 * @see https://vueuse.org/createGlobalState
 * @param stateFactory A factory function to create the state
 */
export function createGlobalState<Fn extends AnyFn>(stateFactory: Fn): Fn {
  let initalized = false
  let state: any
  const scope = effectScope(true)

  return ((...args: any[]) => {
    // 若未进行初始化，执行逻辑
    if (!initalized) {
      state = scope.run(() => stateFactory(...args))!
      // 标记改为 已初始化
      initialized = true
    }
    // 若未初始化，则返回state
    return state
  }) as Fn
}
```

```js [用法]
import { computed, ref } from 'vue'
import { createGlobalState } from '@vueuse/core'

export const useGlobalState = createGlobalState(() => {
  // state
  const count = ref(0)

  // getters
  const doubleCount = computed(() => count.value * 2)

  // actions
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
```


:::