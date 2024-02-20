# Vue 组件

## Vue 组件通信

可以从以下方面展开回答：

解释一下父组件与子组件传值实现过程
非父子组件的数据传递，兄弟组件传值是如何实现的

:::

## EventBus 与 mitt 区别

::: details
Vue2 中我们使用 EventBus 来实现跨组件之间的一些通信，它依赖于 Vue 自带的 $on/$emit/$off 等方法，这种方式使用非常简单方便，但如果使用不当也会带来难以维护的毁灭灾难。

而 Vue3 中移除了这些相关方法，这意味着 `EventBus` 这种方式我们使用不了， Vue3 推荐尽可能使用 `props/emits`、`provide/inject`、`vuex` 等其他方式来替代。
当然，如果 Vue3 内部的方式无法满足你，官方建议使用一些外部的辅助库，例如：`mitt`。
:::

## 参考

- [vue3 面试题八股集合——2023](https://juejin.cn/post/7227453567686033468?from=search-suggest#heading-14)
