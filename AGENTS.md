# AGENTS.md

> 🤖 AI Agent 项目指引 —— 用于 Claude Code、Cursor、OpenCode 等 AI 编码助手

## 项目简介

**FE-prepare-interview** 是一个面向前端开发者的开源面试知识库，基于 [VitePress](https://vitepress.dev) 构建。内容涵盖前端面试中常见概念讲解、模拟面试题、手写代码练习、网友面经等。

- 🌐 在线预览：[GitHub Pages](https://fridolph.github.io/FE-prepare-interview)
- 📝 掘金介绍：[使用 VitePress 打造个人专属的前端知识体系](https://juejin.cn/post/7346888998487310390)

## 技术栈

| 类别 | 技术 |
|------|------|
| 文档框架 | VitePress 1.x |
| 前端框架 | Vue 3.4 + Composition API |
| 样式方案 | Tailwind CSS 3.x + PostCSS |
| 代码高亮 | Shiki + Twoslash |
| 包管理器 | pnpm |
| Node.js | >= 18 |

## 常用命令

```bash
# 安装依赖（必须使用 pnpm）
pnpm i

# 本地开发
pnpm dev

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

## 项目结构

```
FE-prepare-interview/
├── src/                          # VitePress 源文件
│   ├── .vitepress/
│   │   ├── config.js             # VitePress 主配置
│   │   ├── config/
│   │   │   ├── nav.js            # 顶部导航
│   │   │   ├── head.js           # HTML head 标签
│   │   │   ├── emoji.js          # 自定义 emoji
│   │   │   └── sidebar/          # 侧边栏配置
│   │   │       ├── index.js      # 侧边栏路由聚合
│   │   │       ├── usePath.js    # 路径映射工具（typeMap）
│   │   │       ├── 直击概念.js
│   │   │       ├── 面试官问.js
│   │   │       └── 编写代码.js
│   │   └── theme/                # 自定义主题
│   ├── 直击概念/                  # 概念讲解版块（s_ 前缀文件）
│   ├── 面试官问/                  # 模拟面试版块（q_ 前缀文件）
│   ├── 编写代码/                  # 手写代码版块（c_ 前缀文件）
│   ├── 网友面经/                  # 面经合集
│   ├── 相关准备/                  # 简历/工具推荐
│   ├── 参与贡献/                  # 贡献指南
│   └── templates/                # Vue 组件模版
├── AGENTS.md                     # 本文件
├── README.md
├── package.json
└── pnpm-lock.yaml
```

## 内容三大核心版块

| 版块 | 文件前缀 | 用途 |
|------|----------|------|
| 直击概念 | `s_` | 概念解析、原理讲解，帮助理解"是什么" |
| 面试官问 | `q_` | 模拟面试提问，关键点梳理+思维导图 |
| 编写代码 | `c_` | 手写代码、源码分析、场景实现 |

## 文件命名规范

### 目录编号映射（typeMap）

所有内容目录采用 `XXname` 格式编号，定义在 `src/.vitepress/config/sidebar/usePath.js` 的 `typeMap` 中：

| 编号 | 目录 | 说明 |
|------|------|------|
| 00other | 其他 | 杂项 |
| 01htmlcss | HTML & CSS | |
| 02js | JavaScript | 含 ES6/Promise |
| 03algo | 算法 & 数据结构 | |
| 04http | HTTP | |
| 05node | Node.js | |
| 06opt | 性能优化 | |
| 07vue | Vue.js | 含 VueUse |
| 08react | React | |
| 09build | 前端工程化 | Webpack/Vite |
| 10safe | 前端安全 | |
| 11ts | TypeScript | |
| 12broswer | 浏览器原理 | |
| 13solution | 解决方案 | |
| 14app | 移动端 / 小程序 | |
| 15radash | Radash 源码 | |
| 16patterns | 编程模式 | |
| 17ai | AI / 大模型 | 2024 新增 |
| 18nestjs | NestJS | 2024 新增 |

### 文件命名格式

- **直击概念**: `s_{type}_{index}-{fileName}.md`
  - 例：`s_js_1-base.md`
- **面试官问**: `q_{type}_{index}-{fileName}.md`
  - 例：`q_js_1-base.md`
- **编写代码**: `c_{type}_{index}-{fileName}/c_{type}_{index}-{fileName}.md`
  - 例：`c_js_2-deepcopy/c_js_2-deepcopy.md`

### 新增内容板块步骤

1. 在 `usePath.js` 的 `typeMap` 中注册新目录映射
2. 创建目录 `src/{版块}/{编号目录}/`
3. 创建 `intro.md` 作为板块首页
4. 在对应 sidebar 文件中添加菜单项
5. 运行 `pnpm dev` 验证

## AI Agent 常见任务指南

### 添加新文章

**场景**: 在现有板块下新增一篇文章。

**步骤**:
1. 确定文章的 `type`（如 `js`、`ai`、`nestjs`）和所属版块（直击概念/面试官问/编写代码）
2. 查看该版块目录下已有文章的最大 index，分配新的 index
3. 按命名规范创建 `.md` 文件
4. 在对应的 sidebar 配置文件中添加菜单项（`useSidebarItem` 格式）
5. 运行 `pnpm dev` 验证链接是否正常
6. 如需要，更新该目录下的 `intro.md` 目录列表

**示例** — 给 AI 模块新增一篇 "Diffusion Models" 文章：
```
type = ai, index = 30 (已有的最大 index 是 29)
文件: src/直击概念/17ai/s_ai_30-diffusion_models.md
sidebar: 在 直击概念.js 的 AI 区域添加 useStraightItem('扩散模型', 'ai', 30, 'diffusion_models')
intro.md: 在 直击概念/17ai/intro.md 目录列表中添加条目
```

### 添加新板块（新 type）

**场景**: 需要新增一个完整的技术领域。

**步骤**:
1. 在 `usePath.js` 的 `typeMap` 中添加新映射（如 `rust: '19rust'`）
2. 在三个版块目录下创建对应目录和 `intro.md`
3. 在三个 sidebar 配置文件中添加菜单项
4. 在 `src/index.md` 的 `features` 中添加首页入口卡片
5. 运行 `pnpm dev` 验证

### 修改侧边栏配置

**相关文件**:
- `src/.vitepress/config/sidebar/usePath.js` — typeMap 和工具函数
- `src/.vitepress/config/sidebar/直击概念.js` — 直击概念侧边栏
- `src/.vitepress/config/sidebar/面试官问.js` — 面试官问侧边栏
- `src/.vitepress/config/sidebar/编写代码.js` — 编写代码侧边栏

**工具函数**:
- `useStraightItem(title, type, index, fileName)` — 生成直击概念菜单项
- `useQuestionItem(title, type, index, fileName)` — 生成面试官问菜单项
- `useCodingItem(title, type, index, fileName)` — 生成编写代码菜单项
- `useStraightIntro(type)` / `useQuestionIntro(type)` / `useCodingIntro(type)` — 生成 intro 链接

### 修改首页

首页配置在 `src/index.md`，使用 VitePress 的 home layout：
- `hero` — 标题、描述、快捷按钮
- `features` — 技术领域入口卡片（每个卡片含 icon SVG、描述、链接）

### 内容格式规范

- 外部引用需在文末标注来源（格式：`> 来源：[标题](url)`）
- 代码块使用标准 Markdown fence，支持语法高亮
- 支持在 `.md` 中嵌入 Vue 组件（`<script setup>` 方式）
- 图片资源放入 `src/public/` 目录，引用路径 `![alt](/image.png)`
- AI 模块文章模板参考 `src/直击概念/17ai/` 下的现有文章

## 开发约定

### Git 规范
- 提交信息格式：`<type>: <description>`
- 常用 type：`feat` `fix` `docs` `style` `refactor` `build`
- 分支策略：`dev` 分支开发，`main` 分支发布

### 内容编写
- 所有内容使用 Markdown 格式（`.md`）
- 支持在 `.md` 中嵌入 Vue 组件（VitePress 特性）
- 代码块使用标准 Markdown fence，支持语法高亮
- 图片资源放入 `src/public/` 目录
- 外部引用需在文末注明来源（遵循 CC 协议）

### 样式约定
- 全局样式在 `src/.vitepress/theme/theme.css` 中定义
- 局部样式使用 Tailwind CSS 工具类
- 组件放在 `src/templates/` 目录下

## 注意事项

- **必须使用 pnpm** 管理依赖，项目配置了 `pnpm-lock.yaml`
- build 时 `postcssIsolateStyles` 插件已被注释（有兼容问题），解决后可加回
- 本地搜索对中文支持稍弱，已尝试申请 Algolia
- 项目内容基于 CC 协议，引用他人内容需标注来源
- **AI 生成内容**：所有 AI 生成的内容均需经过人工审核校对，确保准确性
- **版本兼容**：修改配置或依赖时，务必运行 `pnpm build` 验证是否通过
- **文件命名**：严格遵循文件命名格式，否则侧边栏链接会 404
