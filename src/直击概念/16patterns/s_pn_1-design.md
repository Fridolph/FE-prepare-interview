# Design Patterns 设计模式

设计模式是软件开发的基本组成部分，因为它们为软件设计中常见问题提供了典型解决方案。设计模式并不是具体的软件，而是一种概念，能够以优化的方式处理重复出现的主题。

近年来，网页开发生态系统快速变化。一些原本广为人知的设计模式可能不再如昔日那般重要，而其他模式则随着最新技术的发展而演变，以解决现代问题。

Facebook 的 JavaScript 库 React 在过去五年中获得了巨大的关注，当前在 NPM 上的下载量相比其他竞争性 JavaScript 库，如 Angular、Vue、Ember 和 Svelte，名列前茅。由于 React 的流行，设计模式得到了修改、优化，同时也创造了一些新模式，以便在现代网页开发生态系统中提供价值。React 的最新版本引入了一项名为 Hooks 的新特性，它在应用设计中起着重要作用，并能替代许多传统的设计模式。

现代网页开发涉及多种不同类型的模式。本项目涵盖了在 ES2015+环境中常见设计模式的实现、优缺点以及 React 特定设计模式的可能修改与实现，特别是通过 React Hooks 的应用，提供了许多可以帮助改善现代网页应用的模式与优化。

## 命令模式 Command Pattern

通过命令模式，我们可以将执行特定任务的对象与调用方法的对象解耦。

假设我们有一个在线食品配送平台。用户可放置订单、跟踪订单以及取消订单。

```ts
class OrderManager() {
  constructor() {
    this.orders = []
  }

  placeOrder(order, id) {
    this.orders.push(id)
    return `ordered ${order} - ${id}`
  }

  trackOrder(id) {
    return `your order ${id} will arrive`
  }

  cancelOrder(id) {
    this.orders = this.orders.filter(order => order.id !== id)
    return `canceled order ${id}`
  }
}
```

在 OrderManager 类中，我们可以访问 placeOrder、trackOrder 和 cancelOrder 方法。直接使用这些方法在 JavaScript 中是完全有效的！

```ts
const manager = new OrderManager()

manager.placeOrder('Pad Thai', '1234')
manager.trackOrder('1234')
manager.cancelOrder('1234')
```

直接在管理器实例上调用方法存在一些缺点。可能的情况是，我们后来决定重命名某些方法，或者这些方法的功能会发生变化。比如说，我们把 placeOrder 重命名为 addOrder！这意味着我们需要在整个代码库中查找并移除所有对 placeOrder 方法的调用，这在更大的应用程序中可能会非常困难。

相反，我们希望将方法与管理器对象解耦，并为每个命令创建单独的命令函数！让我们重构 OrderManager 类：不再使用 placeOrder、cancelOrder 和 trackOrder 等方法，而是只有一个名为 execute 的方法。此方法将执行给定的任何命令。每个命令应能够访问管理器的订单，我们将将其作为第一个参数传递。

```ts
class OrderManager {
  constructor() {
    this.orders = []
  }

  execute(command, ...args) {
    return command.execute(this.orders, ...args)
  }
}
```

我们需要为订单管理器创建三个命令：

- PlaceOrderCommand
- CancelOrderCommand
- TrackOrderCommand

```ts
class Command {
  constructor(execute) {
    this.execute = execute
  }
}

function PlaceOrderCommand(order, id) {
  return new Command(orders => {
    orders.push(id)
    return `You have successfully ordered ${order} (${id})`
  })
}

function CancelOrderCommand(id) {
  return new Command(orders => {
    orders = orders.filter(order => order.id !== id)
    return `You have canceled your order ${id}`
  })
}

function TrackOrderCommand(id) {
  return new Command(() => `Your order ${id} will arrive in 20 minutes.`)
}
```

将方法与订单管理器实例直接耦合已经不再可取，现在我们有了单独的解耦函数，可以通过订单管理器上的 execute 方法来调用它们。这种方式有助于代码的灵活性和可重用性。以下是我为订单管理器创建的三个可能的命令或功能：

假设这是一个用于电商应用或某种类似的销售平台的订单管理系统，以下是三个可能的命令示例：

```ts
class OrderManager {
  constructor() {
    this.orders = []
  }

  execute(command, ...args) {
    return command.execute(this.orders, ...args)
  }
}

class Command {
  constructor(execute) {
    this.execute = execute
  }
}

function PlaceOrderCommand(order, id) {
  return new Command(orders => {
    orders.push(id)
    console.log(`You have successfully ordered ${order} (${id})`)
  })
}

function CancelOrderCommand(id) {
  return new Command(orders => {
    orders = orders.filter(order => order.id !== id)
    console.log(`You have canceled your order ${id}`)
  })
}

function TrackOrderCommand(id) {
  return new Command(() => console.log(`Your order ${id} will arrive in 20 minutes.`))
}

const manager = new OrderManager()

manager.execute(new PlaceOrderCommand('Pad Thai', '1234'))
manager.execute(new TrackOrderCommand('1234'))
manager.execute(new CancelOrderCommand('1234'))
```

以下是针对命令模式的优点和缺点分析：

优点：

- 解耦合：命令模式允许我们将方法与执行操作的对象解耦合。通过将方法和业务逻辑封装成独立的命令对象，我们可以更容易地将这些命令对象传递给其他类或系统组件进行执行。这有助于代码的模块化，提高了系统的可维护性和可扩展性。
- 控制流程：命令模式适用于处理具有特定生命周期的命令或需要排队并在特定时间执行的命令。这使得我们能够更好地控制和管理系统的操作顺序和流程。

缺点：

- 使用场景有限：命令模式在某些场景下可能并不适用。如果应用程序中的操作相对简单且直接，使用命令模式可能会增加不必要的复杂性和开销。在某些情况下，直接使用方法调用或事件触发机制可能更加直接和高效。
- 增加样板代码：在某些情况下，命令模式可能会引入额外的样板代码，特别是在需要创建和管理命令对象的情况下。这可能导致代码冗余和复杂性增加，使得开发过程变得繁琐。因此，在实施命令模式时需要权衡其带来的好处和可能带来的额外复杂性。

## 工厂模式 Factory Pattern

工厂模式是一种创建对象的模式，通过工厂函数来创建新的对象。当我们不使用 new 关键字而返回一个全新的对象时，这个函数就是一个工厂函数！

假设我们的应用需要许多用户。我们可以使用带有 firstName、lastName 和 email 属性的工厂函数来创建新用户。工厂函数还会为新创建的对象添加一个 fullName 属性，该属性返回 firstName 和 lastName 的组合。这是一个简单的示例来展示如何使用工厂模式创建用户对象：

```ts
const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`
  },
})
```

现在，我们可以通过调用 createUser 函数轻松创建多个用户。

```ts
const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`
  },
})

const user1 = createUser({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
})

const user2 = createUser({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@doe.com',
})

console.log(user1)
console.log(user2)
```

对于创建相对复杂且可配置的对象来说，工厂模式非常有用。有时键和值的值依赖于特定的环境或配置。通过工厂模式，我们可以轻松地创建包含自定义键和值的新对象！

工厂函数可以根据需要返回具有不同属性和行为的不同对象实例，从而满足特定的业务逻辑和环境需求。这种灵活性使得工厂模式在处理复杂和可配置的系统时非常有用。

```ts
const createObjectFromArray = ([key, value]) => {
  return {
    [key]: value,
  }
}

createObjectFromArray(['name', 'fri'])
```

对于工厂模式的优点和缺点分析如下：

- 优点：

创建多个具有相同属性的较小对象时，工厂模式非常有用。工厂函数可以根据当前环境或用户特定配置轻松地返回自定义对象。这使得我们可以灵活地创建符合特定需求的对象实例，而无需每次都手动设置每个对象的属性和方法。

工厂模式有助于提高代码的模块化程度。通过将对象的创建逻辑封装在工厂函数中，我们可以将对象的创建与使用分离，使得代码更加清晰和易于维护。

- 缺点：

在 JavaScript 中，工厂模式仅仅是创建一个不使用 new 关键字返回对象的函数。ES6 的箭头函数允许我们创建小型工厂函数，每次调用时都会隐式返回一个对象。然而，这种方式在某些情况下可能不是最佳选择。频繁地创建新对象而不是新的实例可能会导致性能开销。

尽管工厂函数在大多数情况下都能够工作得很好，但并非最佳实践，尤其是在 JavaScript 环境中使用 class 和 new 关键字通常更加直观和高效。而且有时候直接在构造函数内部定义实例方法和属性是更加清晰的选择。此外，工厂模式可能会导致代码的可读性和可维护性降低，特别是在大型项目中需要维护多个工厂函数时。

因此，在使用工厂模式时需要权衡其灵活性和可能的性能开销和代码复杂性之间的权衡。另外考虑到 JavaScript 中的内存管理特性，在某些情况下创建新的实例可能更加内存高效，而不是每次都创建新的对象。因此需要根据具体的应用场景和需求来选择最合适的创建对象的方式。

## 享元模式 Flyweight Pattern

这个设计模式主要应用于优化那些创建大量相似对象的内存使用情况。它可以帮助我们在避免不必要地创建多个相同对象的情况下节省内存。

首先，关于 Flyweight 模式的基本概念：它主要用于处理大量相似对象的情况，通过共享对象状态来节约内存。当一个对象的许多属性只是存储少量可变数据时，该模式尤其适用。在这种模式下，所有共享相同状态的对象都会指向同一个状态实例。每个状态实例都具有某种唯一的标识。在这个情况下，相似的对象可能会表现为具有不同的行为，但它们共享相同的内部状态。

在您描述的书籍管理系统中，书籍（Book）对象具有相似的属性（标题、作者和 ISBN 号），但可能存在多个相同的书籍实例（即同一本书的不同副本）。这种情况下，我们不需要为每个副本都创建一个新的 Book 对象，而是可以使用 Flyweight 模式来实现共享相同的 Book 对象状态。

换句话说，我们可以创建单个 Book 实例代表某一本特定的书，无论该书的副本数量是多少。通过这种方式，我们就可以减少系统内存的占用，因为同一本书的所有副本都将引用相同的 Book 对象和数据结构。这样就可以确保数据的一致性和管理的高效性。通过这种方式，我们可以在需要时动态地创建新的副本实例（如果需要的话），同时保持对原始数据的引用和访问。这就是 Flyweight 模式在书籍管理系统中的应用场景。

```ts
class Book {
  constructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}
```

我们可以创建一个功能来添加新书到列表中，并在添加之前检查书籍是否已经存在。如果书籍已经存在（即具有相同的 ISBN 号），我们不会创建全新的 Book 实例，而是使用已存在的实例。

```ts
const books = new Map()

const createBook = (title, author, isbn) => {
  const existingBook = books.has(isbn)

  if (existingBook) {
    return books.get(isbn)
  }
  // 如果它还不包含图书的 ISBN 编号，我们将创建一本新书并将其 ISBN 编号添加到 isbnNumbers 集中。
  const book = new Book(title, author, isbn)
  books.set(isbn, book)
  return book
}
```

createBook 函数帮助我们创建单一类型书籍的新实例。但在实际图书馆中，会有同一本书的多个复本。我们需要创建一个 addBook 函数，允许我们添加同一本书的多个复本。这个 addBook 函数会调用 createBook 函数来返回一个新创建的书籍实例或者已经存在的实例。同时，为了跟踪图书馆中书籍的总数量，我们需要创建一个 bookList 数组来记录图书馆中书籍的总数。

```ts
const bookList = []

const addBook = (title, author, isbn, availability, sales) => {
  const book = {
    ...createBook(title, author, isbn),
    sales,
    availability,
    isbn,
  }

  bookList.push(book)
  return book
}
```

为了有效地利用已经存在的书籍实例，而不是每次添加副本时都创建一个新的 Book 实例，我们可以对特定书籍的多个副本使用同一个实例。现在，让我们为 3 本书各自创建 5 个副本：

```ts
addBook('Harry Potter', 'JK Rowling', 'AB123', false, 100)
addBook('Harry Potter', 'JK Rowling', 'AB123', true, 50)
addBook('To Kill a Mockingbird', 'Harper Lee', 'CD345', true, 10)
addBook('To Kill a Mockingbird', 'Harper Lee', 'CD345', false, 20)
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 'EF567', false, 20)
```

```ts
class Book {
  constructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

const isbnNumbers = new Set()
const bookList = []

const addBook = (title, author, isbn, availibility, sales) => {
  const book = {
    ...createBook(title, author, isbn),
    sales,
    availibility,
    isbn,
  }

  bookList.push(book)
  return book
}

const createBook = (title, author, isbn) => {
  const book = isbnNumbers.has(isbn)
  if (book) {
    return book
  } else {
    const book = new Book(title, author, isbn)
    isbnNumbers.add(isbn)
    return book
  }
}

addBook('Harry Potter', 'JK Rowling', 'AB123', false, 100)
addBook('Harry Potter', 'JK Rowling', 'AB123', true, 50)
addBook('To Kill a Mockingbird', 'Harper Lee', 'CD345', true, 10)
addBook('To Kill a Mockingbird', 'Harper Lee', 'CD345', false, 20)
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 'EF567', false, 20)

console.log('Total amount of copies: ', bookList.length)
console.log('Total amount of books: ', isbnNumbers.size)
```

这是一个用来减少内存中对象的占用空间和提高效率的面向对象设计策略。尤其是在创建大量对象时，这种模式特别有用，因为它允许我们最小化对象的内存占用。对于需要保持高效的性能和大量数据的软件应用来说，这是一种非常有价值的技术。

关于 JavaScript 和硬件的讨论确实有其正确性。在现代的软件开发中，拥有大量的内存已经成为了常态，开发者不必担心迅速耗尽资源的问题。尽管这可能会使得像 flyweight 这样的模式在开发中看起来不那么重要，但深入理解它仍然具有长远的价值。这主要有两个原因：

首先，对于特定的应用或场景来说，即使是小型应用程序，高效的资源管理依然非常重要。无论资源如何充足，保持最佳性能总是一个好的实践。因此，理解 flyweight 模式可以帮助开发者优化他们的代码，即使在拥有大量内存的情况下也是如此。

其次，更一般地来看，"高效编码"（即使在新环境中也关心效率），有利于在不同环境中保持代码的健壮性。如果开发者能够编写出内存使用效率高的代码，那么他们的应用即使在内存资源有限的环境中也能更好地运行。这在移动设备应用中尤为重要，因为它们常常需要在有限的环境下运行代码。即使在大多数情况下您可能不会遇到资源瓶颈问题，但仍然有可能会导致短暂的临时性短缺情况（比如数据阻塞或者内存泄漏等）。因此，理解这些模式有助于应对各种可能的挑战。

所以总的来说，虽然现代硬件拥有大量的内存可能使得 flyweight 模式看起来不那么重要，但是深入理解并掌握这种设计模式仍然是一种很好的技能。因为无论你遇到什么环境和情况，你都需要在最佳状态下运行你的代码并管理你的资源。

## 中介者模式 Mediator/Middleware Pattern

这个模式引入了一个集中的通信点——中介者（Mediator），负责处理组件之间的交互，从而简化了组件间的通信复杂性。在 JavaScript 中，这种模式通常通过对象字面量或函数来实现。

关于您提到的比喻非常恰当。就像在空中的飞行员与空中交通管制员之间的关系一样，如果每个飞行员都直接与其他飞行员交谈，可能会非常混乱并且容易造成冲突。相反，飞行员将信息传达给空中交通管制员，然后由空中交通管制员管理和协调所有飞机的行动，确保它们安全飞行，不会相互碰撞。在 JavaScript 编程中，中介者模式扮演的角色类似于空中交通管制员，它管理并协调各个组件之间的通信和数据传递。

当处理大量对象之间的多方向数据时，直接通信可能会导致代码变得混乱且难以维护。在这种情况下，使用中介者模式可以大大简化代码并提高其可维护性。通过引入一个中介者对象来管理和协调各个组件之间的通信和数据传递，可以大大降低组件之间的耦合度，使得代码更加清晰、易于理解和测试。

这种模式的另一个优点是易于扩展和修改。如果你需要添加新的组件或者改变现有的组件之间的交互方式，只需要修改中介者对象的相关代码，而不需要修改所有组件的代码。这使得代码更加灵活和可复用。

总的来说，中介者模式在处理复杂系统中多个组件之间的交互时非常有用，它可以提高代码的清晰度、可维护性和灵活性。

<Image src="/16patterns/MiddlewarePattern.png" alt="MiddlewarePattern" />

不是让每一个对象直接与其他对象交流，导致产生多对多的关系，而是由中介处理对象发出的请求。中介处理这个请求并将其转发到需要的地方。

中介者模式的一个好用例是聊天室！聊天室中的用户不会直接相互交流，而是聊天室作为用户之间的中介。

```ts
class ChatRoom {
  logMessage(user, message) {
    const time = new Date()
    const sender = user.getName()
    console.log(`${time} [${sender}]: ${message}`)
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name
    this.chatroom = chatroom
  }

  getName() {
    return this.name
  }

  send(message) {
    this.chatroom.logMessage(this, message)
  }
}
```

我们可以创建与聊天室连接的新用户。每个用户实例都有一个发送方法，我们可以使用这个方法来发送消息。

```ts
class ChatRoom {
  logMessage(user, message) {
    const sender = user.getName()
    console.log(`${new Date().toLocaleString()} [${sender}]: ${message}`)
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name
    this.chatroom = chatroom
  }

  getName() {
    return this.name
  }

  send(message) {
    this.chatroom.logMessage(this, message)
  }
}

const chatroom = new ChatRoom()
const user1 = new User('John Doe', chatroom)
const user2 = new User('Jane Doe', chatroom)

user1.send('Hi there!')
user2.send('Hey!')
```

- 案例分析

Express.js 是一个流行的 Web 应用服务器框架。我们可以为用户可访问的特定路由添加回调函数。
假设我们想在用户访问根目录'/'时给请求添加一个头部。我们可以在中间件回调中添加这个头部。

```ts
const app = require('express')()

app.use('/', (req, res, next) => {
  req.headers['test-header'] = 1234
  next()
})
```

下一步方法调用请求-响应循环中的下一个回调。我们实际上是在请求和响应之间（或反之）创建一个中间件函数的链。

<Image src="/16patterns/MiddlewarePattern2.png" alt="中介者模式在express中的应用" />

让我们添加另一个中间件函数，以检查 test-header 是否正确添加。之前中间件函数所做的更改将在整个链中可见。

我们可以通过一个或多个中间件函数跟踪和修改请求对象，一直到响应为止。

```ts
const app = require('express')()
const html = require('./data')

app.use(
  '/',
  (req, res, next) => {
    req.headers['test-header'] = 1234
    next()
  },
  (req, res, next) => {
    console.log(`Request has test header: ${!!req.headers['test-header']}`)
    next()
  }
)

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html')
  res.send(Buffer.from(html))
})

app.listen(8080, function () {
  console.log('Server is running on 8080')
})
```

每当用户访问根端点'/'时，都会调用这两个中间件回调。

中间件模式使得通过单点进行所有通信，简化了对象之间的多对多关系。

## 混合模式 Mixin Pattern

混入对象是我们可以用来在不使用继承的情况下为其他对象或类添加可重用功能的对象。我们不能单独使用混入对象：它们的目的只是为了在不使用继承的情况下为对象或类添加功能。
假设在我们的应用程序中，我们需要创建多个狗。但是，我们创建的狗基本没有任何属性，只有一个名字属性。

```ts
class Dog {
  constructor(name) {
    this.name = name
  }
}
```

狗的功能不应仅限于有一个名字。它还应该能够吠叫、摇尾巴和玩耍！我们不必直接将它们添加到 Dog 类中，可以创建一个 mixin，为我们提供 bark、wagTail 和 play 属性。

```ts
const dogFunctionality = {
  bark: () => console.log('Woof!'),
  wagTail: () => console.log('Wagging my tail!'),
  play: () => console.log('Playing!'),
}
```

我们可以使用 Object.assign 方法将 dogFunctionality 混入到 Dog 原型中。这个方法允许我们为目标对象添加属性：在这个例子中是 Dog.prototype。每个新的 Dog 实例都可以访问 dogFunctionality 的属性，因为它们被添加到了 Dog 的原型上！

```ts
class Dog {
  constructor(name) {
    this.name = name
  }
}

const dogFunctionality = {
  bark: () => console.log('Woof!'),
  wagTail: () => console.log('Wagging my tail!'),
  play: () => console.log('Playing!'),
}

Object.assign(Dog.prototype, dogFunctionality)
```

让我们创建我们的第一只宠物，名叫 Daisy。当我们将 dogFunctionality 混入 Dog 的原型后，Daisy 应该能够吠叫、摇尾巴和玩耍！

```ts
const pet1 = new Dog('Daisy')

pet1.name // Daisy
pet1.bark() // Woof!
pet1.play() // Playing!
```

混入使我们能够轻松地为类或对象添加自定义功能，而无需使用继承。

尽管我们可以通过使用混入（mixin）在不继承的情况下添加功能，但混入本身可以使用继承！除了海豚和其他一些动物外，大多数哺乳动物都能行走和睡眠。狗是一种哺乳动物，应该能行走和睡眠！让我们创建一个名为 animalFunctionality 的混入（mixin），为其添加行走和睡眠属性。

```ts
const animalFunctionality = {
  walk: () => console.log('Walking!'),
  sleep: () => console.log('Sleeping!'),
}
```

我们可以使用 Object.assign 将这些属性添加到 dogFunctionality 的原型中。在这种情况下，目标对象是 dogFunctionality。

```ts
const animalFunctionality = {
  walk: () => console.log('Walking!'),
  sleep: () => console.log('Sleeping!'),
}

const dogFunctionality = {
  bark: () => console.log('Woof!'),
  wagTail: () => console.log('Wagging my tail!'),
  play: () => console.log('Playing!'),
  walk() {
    super.walk()
  },
  sleep() {
    super.sleep()
  },
}

Object.assign(dogFunctionality, animalFunctionality)
Object.assign(Dog.prototype, dogFunctionality)
```

在浏览器环境中，现实世界中的一个 mixin 的示例可以在 Window 接口上看到。

Window 对象实现了很多从其来自 WindowOrWorkerGlobalScope 和 WindowEventHandlers 的 mixin 继承而来的属性，使我们能够访问诸如 setTimeout 和 setInterval、indexedDB 以及 isSecureContext 等属性。由于它是一个 mixin，仅用于向对象添加功能，因此您将无法使用 WindowOrWorkerGlobalScope 来创建对象。

注：React（ES6 之前的版本）

在 ES6 类引入之前，Mixins 经常用于为 React 组件添加功能。React 团队不支持使用 Mixins，因为它容易给组件增加不必要的复杂性，使其难以维护和重用。React 团队鼓励使用高阶组件代替，现在高阶组件往往可以被 Hooks 替代。

Mixins 允许我们轻松地向对象添加功能，而不必通过继承来实现。通过将功能注入对象的原型中，无需继承即可实现功能的添加。修改对象的原型被视为不好的做法，因为它可能导致原型污染以及关于函数来源的不确定性。

## 模块模式 Module Pattern

...

## 观察者模式 Observer Pattern

...

## 原型模式 Prototype Pattern

...

## 供给者模式 Provider Pattern

...

## 代理模式 Proxy Pattern

...

## 单例模式 Singleton Pattern

...
