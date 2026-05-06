# TypeORM & Prisma

## 概念

ORM（Object-Relational Mapping）将**数据库表映射为 TypeScript 类**，让你用面向对象的方式操作数据库。NestJS 社区两大主流选择：TypeORM 和 Prisma。

## TypeORM

Active Record 模式，与 NestJS 深度集成（`@nestjs/typeorm`）：

```typescript
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @Column({ default: true })
  isActive: boolean

  @OneToMany(() => Post, post => post.author)
  posts: Post[]
}
```

Repository 模式：

```typescript
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async findByEmail(email: string) {
    return this.usersRepo.findOne({ where: { email } })
  }

  async findWithPosts(id: string) {
    return this.usersRepo.findOne({
      where: { id },
      relations: ['posts'],
    })
  }
}
```

## Prisma

Schema-first 方式，更直观：

```prisma
// prisma/schema.prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  isActive  Boolean  @default(true)
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id        String   @id @default(uuid())
  title     String
  content   String?
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
}
```

使用 Prisma Client：

```typescript
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect()
  }
}

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } })
  }

  async findWithPosts(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { posts: true },
    })
  }
}
```

## TypeORM vs Prisma

| 维度 | TypeORM | Prisma |
|------|---------|--------|
| 设计方式 | Code First（装饰器） | Schema First（.prisma 文件） |
| TypeScript 类型 | 手动定义 | 自动生成（无额外代码） |
| 迁移（Migration） | `typeorm migration:generate` | `prisma migrate dev` |
| 关联查询 | relations 选项 | include 语法 |
| 学习曲线 | 较高（概念多） | 中等 |
| 性能 | 灵活性高 | 需关注 N+1 |
| 社区 | 成熟 | 快速增长 |
| NestJS 集成 | @nestjs/typeorm | 需手动封装 Module |

## 迁移最佳实践

**开发环境**：
```bash
# Prisma
prisma migrate dev --name add-user-table

# TypeORM
typeorm migration:generate -n AddUserTable
typeorm migration:run
```

**生产环境**：迁移应作为 CI/CD 的一部分，先备份数据库再执行。

## 面试常问

- TypeORM 和 Prisma 的核心设计差异？各适合什么场景？
- 如何处理 N+1 查询问题？
- 数据库迁移在生产环境的安全实践？

## 参考

- [TypeORM 文档](https://typeorm.io/)
- [Prisma 文档](https://www.prisma.io/docs)
- [NestJS: Database](https://docs.nestjs.com/techniques/database)
