# Web 开发学习宝典

从前端走向全栈与 AI 应用开发，把零散知识整理成能够理解、验证、回顾和持续改进的学习记录。

[![构建与发布](https://github.com/Fridolph/web-dev-handbook/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/Fridolph/web-dev-handbook/actions/workflows/deploy.yml)
[![VitePress](https://img.shields.io/badge/docs-VitePress-646cff)](https://vitepress.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-24.x-5fa04e)](./.nvmrc)
[![pnpm](https://img.shields.io/badge/pnpm-12.14.0-f69220)](./package.json)

**[在线阅读](https://fridolph.github.io/web-dev-handbook/)** · [学习路线](./src/学习路线/index.md) · [编码与实践](./src/编码与实践/index.md) · [学习自测](./src/学习自测/index.md) · [提出问题](https://github.com/Fridolph/web-dev-handbook/issues)

## 关于这个项目

学习一项技术，通常会留下课程笔记、代码片段、收藏链接和一些暂时说不清的问题。这个项目希望把它们联系起来：先理解机制，再通过小实验验证，用自测发现遗漏，最后通过复盘和表达形成自己的认识。

项目由前端面试知识库演进而来，目前围绕**前端开发、后端开发、AI 应用开发、通用基础和性能优化**组织内容。面试复习是学习自测的一种使用场景；学习路线、实际验证和长期积累同样重要。

你可以用它来：

- **系统学习**：按主题建立知识地图，找到入门、原理与实践之间的联系。
- **随学随记**：将跟课笔记和工作中遇到的问题归位，逐步补齐概念与边界。
- **动手验证**：用可运行示例检验理解，记录环境、步骤、结果与失败案例。
- **回顾表达**：通过自测、方案比较和博客复盘，练习把问题解释清楚。

内容持续整理中，各主题深度不同。历史文章需要结合技术版本阅读；建议路线中的业务功能与跨项目 demo 以实际代码和验证记录为准。

> 项目原名 `FE-prepare-interview`，现已更名为 `web-dev-handbook`；中文名称为“Web 开发学习宝典”。克隆、贡献与阅读请使用下方的新地址。

## 阅读导航

- [从哪里开始](#从哪里开始)
- [内容地图](#内容地图)
- [推荐学习路线](#推荐学习路线)
- [如何整理一个知识点](#如何整理一个知识点)
- [笔记、实践与博客如何连接](#笔记实践与博客如何连接)
- [本地运行](#本地运行)
- [项目结构](#项目结构)
- [参与贡献](#参与贡献)
- [后续方向](#后续方向)
- [许可与来源](#许可与来源)

## 从哪里开始

| 你的当前情况 | 建议入口 | 先完成的一件事 |
| --- | --- | --- |
| 刚开始学习 Web | [HTML / CSS](./src/概念与原理/01htmlcss/intro.md) → [JavaScript](./src/概念与原理/02js/intro.md) → [HTTP](./src/概念与原理/04http/intro.md) | 写一个页面，观察一次请求和页面渲染 |
| 已有前端经验，想补后端 | [TypeScript](./src/概念与原理/11ts/intro.md) → [Node.js](./src/概念与原理/05node/intro.md) → [NestJS](./src/概念与原理/18nestjs/intro.md) | 跑通一条请求，解释 Controller、Service 与依赖注入 |
| 正在学习数据库 | [PostgreSQL 与 MySQL](./src/学习自测/19database/q_database_1-postgresql_vs_mysql.md) → [ORM](./src/概念与原理/18nestjs/s_nestjs_8-orm.md) | 设计一张表，验证约束与一次失败的写入 |
| 想进入 AI 应用开发 | [大模型基础](./src/概念与原理/17ai/intro.md) → [Prompt](./src/概念与原理/17ai/s_ai_22-prompt_engineering.md) → [RAG](./src/概念与原理/17ai/s_ai_23-rag.md) → [Agent](./src/概念与原理/17ai/s_ai_24-agent.md) | 选一个小任务，记录输入、输出和失败样例 |
| 想复习或定位薄弱点 | [学习自测](./src/学习自测/index.md) → 对应原理与实践 | 先独立回答，再核对参考答案并补一次实验 |

不必先读完所有文章。围绕当前问题读一组相关内容，再留下一个可验证的结果，往往更容易持续下去。

## 内容地图

| 学习领域 | 主要主题 | 阅读入口 |
| --- | --- | --- |
| 前端开发 | HTML / CSS、JavaScript、TypeScript、Vue、React、前端工程化 | [前端基础](./src/概念与原理/01htmlcss/intro.md) · [Vue](./src/概念与原理/07vue/intro.md) · [React](./src/概念与原理/08react/intro.md) · [工程化](./src/概念与原理/09build/intro.md) |
| 后端开发 | Node.js、NestJS、数据库与 PostgreSQL；Git、Linux、Nginx、进程与容器 | [Node.js](./src/概念与原理/05node/intro.md) · [NestJS](./src/概念与原理/18nestjs/intro.md) · [数据库](./src/学习自测/19database/intro.md) · [开发与部署](./src/概念与原理/20deploy/intro.md) |
| AI 应用开发 | 模型基础、Prompt、RAG、Agent、MCP 等主题 | [AI 学习入口](./src/概念与原理/17ai/intro.md) |
| 通用基础 | 数据结构与算法、HTTP、浏览器、Web 安全、编程范式与设计模式 | [算法](./src/概念与原理/03algo/intro.md) · [HTTP](./src/概念与原理/04http/intro.md) · [浏览器](./src/概念与原理/12broswer/intro.md) · [安全](./src/概念与原理/10safe/intro.md) · [编程模式](./src/概念与原理/16patterns/intro.md) |
| 性能优化 | 测量与定位、加载与渲染、缓存；逐步扩展服务、数据库与 AI 性能实践 | [性能专题](./src/性能优化/index.md) |

**按领域找问题，按学习方式巩固：**

| 栏目 | 回答的问题 | 适合记录的内容 |
| --- | --- | --- |
| [概念与原理](./src/概念与原理/index.md) | 是什么？为什么这样工作？ | 定义、机制、适用条件、边界与常见误区 |
| [编码与实践](./src/编码与实践/index.md) | 如何实现？怎样证明？ | 代码、运行步骤、测试、观察结果与方案取舍 |
| [学习自测](./src/学习自测/index.md) | 能否独立解释和迁移？ | 问题、简明回答、深入追问与反例 |
| [学习路线](./src/学习路线/index.md) | 下一步学什么？如何联系实际问题？ | 阶段目标、实践计划与成果索引 |
| [学习资源](./src/学习资源/index.md) | 去哪里继续阅读和交流？ | 关联项目、博客、来源及历史资料 |

## 推荐学习路线

当前主线是在前端经验上补齐后端与数据能力，再逐步接入 AI。可以选“学习笔记应用”这样的小场景，让每一阶段都能复用前面的成果。

| 阶段 | 学习重点 | 建议验证的结果 |
| --- | --- | --- |
| 1. 页面与语言 | HTML / CSS、JavaScript、TypeScript、HTTP | 能呈现数据、发起请求，并说明输入输出与错误 |
| 2. 服务与业务 | Node.js、NestJS、模块与依赖注入、参数校验、认证与授权 | 一条可运行的接口，以及正常和异常请求样例 |
| 3. 数据与一致性 | PostgreSQL、数据建模、约束、事务、并发、ORM | 可重复执行的数据准备与验证步骤，解释失败时的行为 |
| 4. 工程与交付 | 测试、Git 协作、配置、代理、进程管理、部署与回滚 | 从本地验证到发布的步骤，以及故障定位方法 |
| 5. AI 能力 | 模型调用、Prompt、检索、RAG、工具调用与 Agent | 一个有明确边界的任务，附效果、成本与失败案例 |
| 6. 测量与改进 | 前端、服务、数据库与 AI 性能 | 改进前后的指标对照，以及复杂度和收益的取舍 |

以上是实践建议，不代表本站已经提供完整业务应用。算法、安全和设计方法可以随着问题穿插学习；更细的入口见[完整学习路线](./src/学习路线/index.md)。

## 如何整理一个知识点

**知识笔记 → 动手验证 → 问题复盘 → 博客表达 → 再次改进。**

课程笔记很零碎也可以先记录，之后按下面的过程逐步补齐：

1. **确定问题**：写清它解决什么场景、属于哪个主题，以及暂时不讨论的范围。
2. **查证原理**：用自己的话说明机制，补充适用版本、官方文档和引用来源。
3. **设计实验**：准备一个最小示例，写清运行环境、命令、预期行为与边界输入。
4. **记录结果**：区分实际观察与推测，保留错误、日志或测试结果，比较替代方案。
5. **形成自测**：把关键点变成能独立回答的问题，补上“何时不适用”的追问。
6. **连接表达**：关联具体代码、提交或 PR 与博客；根据反馈修正笔记和实现。

例如“并发保存笔记”：先学习事务和版本条件更新，再模拟两个客户端同时保存，检查数据库结果与冲突响应，最后回答“为什么有事务仍可能出现覆盖问题”。这样，一个知识点就能连接原理、实现和设计判断。

新增记录可以直接使用[实践记录模板](./src/学习路线/实践记录模板.md)，状态统一写为 **计划中 / 已运行验证 / 已复盘**。附上可执行步骤与实际结果后，再标记为已验证。

## 笔记、实践与博客如何连接

| 载体 | 负责什么 | 入口 |
| --- | --- | --- |
| 本项目 | 知识地图、原理、自测、学习路线与实践索引 | [在线文档](https://fridolph.github.io/web-dev-handbook/) |
| AI-Journey-land | 作为后续全栈与 AI 应用练习载体，随重构补充可运行功能 | [GitHub](https://github.com/Fridolph/AI-Journey-land) |
| 个人博客 | 记录问题背景、方案取舍、实践过程与反思 | [fridolph-blog](https://fridolph.github.io/fridolph-blog/) |
| AI Journey Fighting | 独立维护的 AI 学习记录与探索 | [在线文档](https://fridolph.github.io/AI-Journey-Fighting/) |

这些项目独立维护，通过具体文章与代码互相引用。关联实践时尽量链接到文件、提交或 PR，并补上运行方式；尚未实现的功能保留为计划，不用仓库链接代替验证证据。

## 本地运行

本站基于 VitePress 构建，无需配置业务数据库或模型服务即可阅读和开发文档。

环境要求：**Node.js 24.x、pnpm 12.14.0**。版本依据为 [`.nvmrc`](./.nvmrc)、[`package.json`](./package.json) 和 [`pnpm-lock.yaml`](./pnpm-lock.yaml)。

```bash
git clone https://github.com/Fridolph/web-dev-handbook.git
cd web-dev-handbook

# 使用 nvm 时安装并切换到项目指定的 Node.js 主版本
nvm install
nvm use

# 若已安装 Corepack，可启用并准备 pnpm；也可使用 pnpm 官方安装方式
corepack enable
corepack prepare pnpm@12.14.0 --activate

pnpm install --frozen-lockfile
pnpm dev
```

未使用 nvm 或 Corepack 时，先按 [Node.js](https://nodejs.org/) 与 [pnpm 安装文档](https://pnpm.io/installation)准备对应版本。开发地址以终端输出为准。

| 命令 | 用途 |
| --- | --- |
| `pnpm dev` | 启动本地文档开发服务 |
| `pnpm check` | 执行 ESLint、站点组件类型检查和导航 / 旧地址兼容测试 |
| `pnpm build` | 构建全站、检查死链，并生成旧地址兼容入口 |
| `pnpm preview` | 预览生产构建，访问终端提示的 `/web-dev-handbook/` 子路径 |

生产预览前先执行 `pnpm build`。类型检查覆盖站点组件与主题，文章中的教学代码不作为完整应用统一编译。算法示例另有测试，可按需执行：

```bash
node --test src/编码与实践/03algo/__tests__/learning-algorithms.test.mjs
```

依赖升级策略与历史迁移说明见[重构与依赖兼容性记录](./docs/重构与依赖兼容性.md)。

## 项目结构

```text
.
├── src/
│   ├── .vitepress/         # 站点配置、导航、主题与首页分类数据
│   ├── 概念与原理/         # s_：概念、机制与适用边界
│   ├── 编码与实践/         # c_：手写代码、示例与场景实践
│   ├── 学习自测/           # q_：问题、参考回答与深入追问
│   ├── 学习路线/           # 阶段路线与实践记录模板
│   ├── 性能优化/           # 跨领域性能专题入口
│   ├── 学习资源/           # 关联项目、博客与笔记迁移记录
│   ├── 网友面经/           # 早期交流资料归档
│   ├── 相关准备/           # 早期资料与工具整理
│   ├── 参与贡献/           # 贡献说明与 Markdown 示例
│   ├── templates/          # 可复用的 Vue 组件
│   └── public/             # 图片与技能图标等静态资源
├── scripts/               # 旧地址兼容逻辑与导航测试
├── docs/                  # 重构与依赖兼容性记录
├── .github/workflows/     # 构建与 Pages 发布
├── AGENTS.md              # 内容命名与协作约定
└── README.md
```

侧边栏按技术领域分组，文件按学习方式存储。旧栏目“直击概念 / 编写代码 / 面试官问”已迁移，已有页面保留旧 URL 兼容入口；新文章和站内链接使用新路径。历史素材的归位与取舍见[笔记迁移记录](./src/学习资源/笔记迁移记录.md)。

## 参与贡献

欢迎提交概念纠错、失效链接修复、实际案例、边界补充和学习路线反馈。小范围的改进同样有价值。

1. **先找到主题**：阅读已有文章，确认是补充内容还是新问题；较大的目录调整先通过 [Issue](https://github.com/Fridolph/web-dev-handbook/issues)讨论。
2. **建立改动分支**：Fork 后以 `dev` 为基线，一次 PR 聚焦一个问题，提交到本仓库 `dev`。
3. **放到合适栏目**：解释机制放“概念与原理”，可运行实验放“编码与实践”，问题与回答放“学习自测”。文件命名和目录编号参考 [AGENTS.md](./AGENTS.md)。
4. **补全入口**：新文章同步对应目录的 `intro.md` 和侧边栏；新增领域再补首页分类入口。图片放入 `src/public/`，注明来源。
5. **说明验证结果**：提交前运行 `pnpm check` 和 `pnpm build`；代码示例附验证步骤，导航或主题改动补充桌面和移动端检查。
6. **描述 PR**：说明解决的问题、改动范围、适用版本、参考来源和验证方式。普通提交采用 `docs: …`、`fix: …` 等格式。

引用内容注明原作者和来源；AI 辅助生成的内容同样需要人工核对、来源查证和必要的代码验证。发现不准确的结论时，欢迎带上复现条件和参考资料一起讨论。

维护流程为 **dev 开发与整理 → main 发布 → GitHub Actions 构建 → GitHub Pages 更新**。CI 使用锁定的 Node / pnpm 环境安装依赖，并执行检查与构建。

## 后续方向

- [ ] 持续补齐 NestJS、PostgreSQL 与全栈业务场景的学习记录。
- [ ] 为更多知识点建立可运行实验、边界案例和验证记录。
- [ ] 按实际成果关联 AI-Journey-land 的代码、本站笔记与博客文章。
- [ ] 逐步扩展 RAG、Agent、评估及工具调用的实践。
- [ ] 补充后端、数据库与 AI 应用的性能测量和方案比较。

这些是持续推进的方向，没有固定完成时间。为本站接入 RAG 或智能问答仍是后续探索，目前不作为已提供的站点功能。

## 许可与来源

根目录 [LICENSE](./LICENSE) 当前为 **GNU GPL v3.0**。部分历史文章与站点页脚仍保留 CC 或转载相关声明，许可表述尚待维护者统一；本次 README 整理不改变已有许可文件或第三方授权。

引用和转载材料请同时核对原文来源及其授权，保留原作者署名。若发现来源遗漏、授权疑问或内容错误，请通过 [Issue](https://github.com/Fridolph/web-dev-handbook/issues)联系维护者。
