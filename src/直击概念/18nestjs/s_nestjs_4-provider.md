# 提供者与依赖注入

## 概念

Provider（提供者）是 NestJS 中可以**注入**的类的统称——最常见的 Provider 是 Service，但也可以是 Repository、Helper、Factory 等。

依赖注入（DI）让对象不自己创建依赖，而是由 NestJS 的 IoC 容器自动注入。

## @Injectable

标记一个类为可注入的 Provider：

```typescript
import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,  // 自动注入
    private readonly config: ConfigService,  // 自动注入
  ) {}

  async findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } })
  }
}
```

## 注册 Provider

在 Module 的 `providers` 数组中注册：

```typescript
@Module({
  controllers: [UsersController],
  providers: [UsersService],     // 简写
  exports: [UsersService],
})
```

等价于完整的 Token 写法：

```typescript
providers: [
  { provide: UsersService, useClass: UsersService },
]
```

## 自定义 Provider

### useValue（注入常量）

```typescript
providers: [
  { provide: 'API_KEY', useValue: 'sk-xxx' },
]
```

### useFactory（动态创建）

```typescript
providers: [
  {
    provide: 'DATABASE_URL',
    useFactory: (config: ConfigService) => {
      const host = config.get('DB_HOST')
      return `postgresql://${host}:5432/mydb`
    },
    inject: [ConfigService],
  },
]
```

### useClass（根据条件选类）

```typescript
providers: [
  {
    provide: LoggerService,
    useClass: process.env.NODE_ENV === 'production'
      ? ProdLoggerService
      : DevLoggerService,
  },
]
```

## Provider 作用域

| 作用域 | 行为 | 性能 |
|--------|------|------|
| DEFAULT（默认） | 单例，整个应用共享 | 最高 |
| REQUEST | 每个请求创建新实例 | 较低 |
| TRANSIENT | 每次注入创建新实例 | 低 |

```typescript
@Injectable({ scope: Scope.REQUEST })
export class TenantService {
  // 每个请求独立实例，可存储请求级上下文
}
```

## 循环依赖

两个类互相依赖时，使用 `forwardRef`：

```typescript
@Module({
  imports: [forwardRef(() => AuthModule)],
})
export class UsersModule {}

@Module({
  imports: [forwardRef(() => UsersModule)],
})
export class AuthModule {}
```

## 面试常问

- Provider 的三种自定义方式 useClass / useValue / useFactory 的适用场景？
- REQUEST scope 和默认 scope 的区别？什么场景需要 REQUEST？
- 循环依赖如何解决？forwardRef 的工作原理？

## 参考

- [NestJS: Providers](https://docs.nestjs.com/providers)
- [NestJS: Custom Providers](https://docs.nestjs.com/fundamentals/custom-providers)
