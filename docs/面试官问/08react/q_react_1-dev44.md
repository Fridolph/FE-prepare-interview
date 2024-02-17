# React 44 个前端面试问题

## 1. 你知道哪些 React Hooks

::: details

- `useState` 用于管理函数组件中的状态
- `useEffect` 用于在函数组件中执行副作用，例如获取数据或订阅事件
- `useContext` 用于访问函数组件中 React 上下文的值
- `useRef` 用于创建堆跨选人保留的元素或值的可变引用
- `useCallback` 用于记忆功能，防止不必要的重新渲染
- `useMemo` 用于记忆值，通过缓存昂贵的计算来提高性能
- `useReducer` 用于使用 reducer 函数管理状态，类似于 Redux 的工作方式
- `useLayoutEffect` 类似于 useEffect，但效果在所有 DOM 突变后同步运行
  :::

这些 Hook 提供了强大的工具，用于管理状态、处理副作用和重新编辑 React 函数组件中的逻辑。

## 2. 什么是虚拟 DOM

::: details todo: 机翻痕迹太重，这里回去重新润色一下
:::

## 3. 如何渲染数组

::: details

可以使用 map() 方法循环访问数组并返回一个新的 React 元素数组。

```jsx
const arr = ['JavaScript', 'HTML', 'CSS3']
function App() {
  return (
    <ul>
      {arr.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  )
}
```

:::

## 4. 受控组件和非受控组件有什么区别

::: details

**受控组件和非受控组件之间的区别在于它们如何管理和更新其状态。**

- 受控组件状态是由 React 来控制的。组件接受其当前值并通过 props 更新它。当值更改时，它还会触发回调函数。这意味着组件不存储自己的内部状态。相反，父组件管理该值并将其向下传递到受控组件。

```jsx
import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')
  return (
    <div>
      <h3>Controlled Component</h3>
      <input name='name' value={name} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => console.log(value)}>Get Value</button>
    </div>
  )
}
```

- 非受控组件使用 refs 或其他方法在内部管理自己的状态。它们独立存储和更新状态，而不依赖于 props 或回调。父组件对不受控制的组件的状态控制较少。

```jsx
import { useRef } from 'react'

function App() {
  const inputRef = useRef(null)
  return (
    <div>
      <h3>Uncontrolled Component</h3>
      <input type='text' name={name} ref={inputRef} />
      <button onClick={() => console.log(inputRef.current.value)}>Get Value!</button>
    </div>
  )
}
```

:::

## 5. 基于类的 React 组件和函数式组件有什么区别

::: details
基于类的组件和函数组件间最大的区别在于 **它们的定义方式以及它们使用的语法不同**。

React.Component 基于磊的组件被定义为 ES6 Class 并扩展该类。它们使用 render 方法返回组件输出的 JSX。

类组件可以通过 this.state 和 this.setState() 访问组件生命周期方法和状态管理。

```jsx
class App extends React.Component {
  state = {
    value: 0,
  }
  handleChange = () => {
    this.setState({
      value: this.state.value++,
    })
  }
  render() {
    return (
      <>
        <p>value is {this.state.value}</p>
        <button onClick={this.handleChange}>Increase Value</button>
      </>
    )
  }
}
```

另一方面，函数组件被定义为简单的 JS 函数。它们将 props 作为参数并返回 JSX 。函数组件无权访问生命周期方法或状态。然后随着 React 16.8 中 React Hooks 的引入，函数组件现在可以管理状态并使用其他功能，例如上下文当中的效果展示。

```jsx
import { useState } from 'react'
const App = () => {
  const [value, setValue] = useState(0)
  const handleChange = () => {
    setValue(value + 1)
  }
  return (
    <>
      <p>value is {this.state.value}</p>
      <button onClick={this.handleChange}>Increase Value</button>
    </>
  )
}
```

函数组件被认为更简单，更易于阅读和测试。建议尽可能使用 Funciton 组件，除非对基于类的组件有特定需求。

:::

## 6. React 组件的生命周期方法

::: details
生命周期方法是一种挂接到组件生命周期不同阶段的方法，允许你在特定时间执行特定代码。

以下是主要 React 的生命周期方法：

1. `constructor` - 这是创建组件时调用的第一个方法。它用于初始化状态和绑定事件处理程序。在函数组件中，你可以将 hooks useState 用于类似的目的。

2. `render` - 此方法负责渲染 JSX 标记并返回要在屏幕上显示的内容。

3. `componentDidMount` - 此方法在组件的 DOM 中呈现后立即调用。它通常用于初始化任务，例如 API 调用或设置事件侦听器。

4. `componentDidUpdate` - 当组件的 props 或状态更改时调用此方法。它允许执行负作用，更改、更新组件或触发其他 API 调用。

5. `componentWillUnmount` - 此方法在从 DOM 中删除组件之前调用。 它用于清理 componentDidMount 中设置的任何资源，例如删除事件侦听器或取消计时器。

其他生命周期方法 ~~（如 componentWillMount、componentReceiveProps、componentWillUpdate）~~ 已被弃用或替换为替代方法或 hooks
:::

## 7. 使用 useState 有什么特点

::: details
useState 返回一个状态值和一个用于更新它的函数。

`const [value, setValue] = useState('some state')`

在初始呈现期间，返回的状态于作为第一个参数传递的值匹配。该函数用于更新状态。它将心的状态值作为参数，并对组件的重新渲染进行排队。

该函数还可以接受回调函数作为参数，该函数将以前的状态值作为参数。
:::

## 8. 使用 useEffect 有什么特点

::: details
useEffect 钩子允许你在函数组件中执行副作用。

突变、订阅、计时器、日志记录和其他副作用不允许在 React 渲染阶段的函数组件的主体内出现。因为这可能导致用户界面出现错误和不一致。

所以，建议使用 useEffect。传递给 useEffect 的函数将在渲染提交到屏幕后执行，或者 若将依赖项数组作为第二个参数传递，则每次渲染时，其中一个依赖更改时都会调用该函数。

```jsx
useEffect(() => {
  console.log('toggle something')
}, [])
```

:::

## 9. 如何跟踪函数组件的卸载

::: details
// todo 这段需看原文重翻译下
通常，useEffect 创建需要再组件离开屏幕前清理或重置资源，例如订阅或计时器标识符。

为此，传递给 useEffect 的函数可以返回一个清理函数。清理功能在从用户界面中删除组件之前运行，以防止内存泄漏。此外，若组件多次渲染时，则在执行下一个效果之前，清除上一个效果。

```jsx
useEffect(() => {
  function handleChange(value) {
    setValue(value)
  }
  SomeAPI.doSomething(id, handleChange)

  return function cleanup() {
    someAPI.undoSomething(id, handleChange)
  }
})
```

:::

## 10. React 中的 Props 是什么

::: details
props 是从父级传递给组件的数据。props 是固定的，不能更改。

```jsx
// Parent Component
const Parent = () => {
  const data = 'Hello React'
  return (
    <div>
      <Child data={data} />
    </div>
  )
}
// Child Component
const Child = ({ data }) => {
  return <p>{data}</p>
}
```

:::

## 11. 什么是 React 状态管理

::: details todo: 机翻严重，这段要重新润色
状态管理帮我们管理应用程序状态。这些工具库提供一个集中式存储或容器，用于存储和管理可由应用程序中的不同组件访问和更新的数据。

常用的状态管理方案：

- Redux
- MobX
- React Context

状态管理器可以解决几个问题。首先，将数据及其相关逻辑与组件分开是一种很好的做法。其次，当使用本地状态并在组件间传递它时，由于组件深度嵌套的可能性，代码可能会变得复杂。通过拥有全局存储，我们可以访问和修改来自任何组件的数据。

:::

## 12. 在哪些情况下可以使用本地状态，哪些情况下使用全局状态

::: details
如果本地状态仅在一个组件中使用，并且没有计划将其传递给其他组件，则建议使用本地状态。本地状态也用于表示列表中单个项的组件中。

但是，如果组件分解涉及嵌套组件，并且数据在层次结构中向下传递，则最好使用全局状态。
:::

## 13. Redux 中的 reducer 是什么，它需要哪些参数

::: details todo: 机器，记得修改
reducer 是一个纯函数，它将状态和操作状态的函数作为参数。在 reducer 内部，我们跟踪接受到的动作的类型，并根据它修改状态并发挥一个新的状态对象。

```jsx
export default function appReducer(state = initialState, action) {
  // todo: 翻译注释
  switch (action.type) {
    default:
      return state
  }
}
```

:::

## 14. 什么是 Action / 如何在 Redux 中更改状态

::: details
Action 是一个简单的 JS 对象，它必须具有类型字段

```js
{
  type: 'SOME_TYPE'
}
```

你还可以选择添加一些数据作为有效负载。为了更改状态，必须调用调度函数，我们将操作传递给该函数

```jsx
{
  type: 'SOME_TYPE',
  payload: 'Any payload'
}
```

:::

## 15. 说一下对 Redux 的理解

::: details
Redux 实现了 Flux 模式，这是一种`可预测`的应用程序状态管理模式。它通过引入单向数据流和应用程序状态的集中存储来帮助`管理应用程序的状态`
:::

## 16. 说一下对 Mobx 的理解

::: details todo: 自己根据理解多加点
Mobx 实现了 Observer 模式，也成为 Publish-Subscribe 模式
:::

## 17. 使用 Mobx 有什么特点

::: details todo: 机翻，待修改
Mobx 提供了可观测，可计算的装饰器，用来定义可观测和反应函数。
:::

## 18. 如何访问 Mobx 状态的改变

::: details
通过使用 observable 修饰器将变量定义为可观察变量，可以访问处于状态中的变量。例：

```jsx
import { observable, computed } from 'mobx'

class MyStore {
  @observable foo = 'Hello Mobx!'
  @computed get upperFoo() {
    return this.foo.toUpperCase()
  }
}

const store = new MyStore()
console.log('🚢 ~ 当前打印的内容 ~ store.foo:', store.foo)
// Hello Mobx!
store.foo = 'Hi Mobx!'
console.log('🚢 ~ 当前打印的内容 ~ store.upperFoo:', store.upperFoo)
// hi mobx!
```

本例中， foo 被定义为使用 observable 装饰器的可观察对象。然后，使用 sotre.foo 访问变量。对 foo 所做的任何修改都将自动触发依赖组件的更新。
:::

## 19. Redux 和 Mobx 的区别

::: details
Redux 是一个更简单、更固执己见的状态管理库，它遵循严格的单向数据流并倡导数据不变性。它需要更多的样式代码和显式更新，与 React 有很好的集成。

另一方面，Mobx 提供了一个更灵活、更直观的 API，且样板代码更少。它允许您直接修改状态且自动跟踪更改以获得更好的性能。
:::

## 20. 什么是 JSX

::: details todo: 找资料

:::
