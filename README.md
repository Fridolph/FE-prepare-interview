# Web 开发学习宝典

从前端走向全栈与 AI 应用开发。连接概念原理、编码实践、学习自测与博客复盘，持续整理 Web 软件开发的知识与学习路径。

[在线阅读](https://fridolph.github.io/FE-prepare-interview/) · [学习路线](https://fridolph.github.io/FE-prepare-interview/学习路线/index) · [个人博客](https://fridolph.github.io/fridolph-blog/) · [AI Journey Fighting](https://fridolph.github.io/AI-Journey-Fighting/)

项目从前端面试知识库演进而来，仓库地址与 GitHub Pages 地址暂时沿用 `FE-prepare-interview`。面试复习保留为学习自测的一种使用方式。

## 按领域学习，按方式巩固

| 学习方向 | 内容 |
| --- | --- |
| 前端开发 | HTML/CSS、JavaScript、TypeScript、Vue、React、前端工程化 |
| 后端开发 | Node.js、NestJS、数据库与 PostgreSQL |
| AI 应用开发 | 大模型、Prompt、RAG、Agent、MCP |
| 通用基础 | 算法、HTTP、浏览器、Web 安全、设计模式 |
| 性能优化 | 前端、后端、数据库与 AI 应用；按已有内容逐步补充 |

每个方向通过“概念与原理 → 编码与实践 → 学习自测 → 复盘”串联。侧边栏按技术领域分组，文章按学习方式存放。

## 本地开发

使用 Node.js 24 与 pnpm 12.14.0。`.nvmrc`、`packageManager` 和锁文件用于统一环境。

```bash
nvm use
# 尚未安装指定 pnpm 时，可使用已安装的 Corepack 或 pnpm 官方安装方式准备环境
corepack prepare pnpm@12.14.0 --activate
pnpm install --frozen-lockfile
pnpm dev
```

```bash
pnpm check    # lint、站点组件类型检查、迁移测试
pnpm build    # 全站构建、死链检查和旧地址跳转页
pnpm preview  # 预览生产构建，包含 /FE-prepare-interview/ 子路径
```

类型检查覆盖站点组件与主题；文章中的教学代码不作为完整应用统一编译。CI 使用同一 Node/pnpm 版本，并通过锁文件安装。

## 目录

```text
src/
├── .vitepress/       # 站点配置、导航、主题与首页分类数据
├── 学习路线/          # 当前路线、跨项目关联与实践记录模板
├── 概念与原理/        # s_ 前缀：原理与机制
├── 编码与实践/        # c_ 前缀：示例与实践
├── 学习自测/          # q_ 前缀：问题与参考回答
├── 性能优化/          # 跨领域优化专题入口
├── 学习资源/          # 博客、项目与归档资料入口
├── 相关准备/          # 早期准备资料
├── 网友面经/          # 历史交流归档
└── 参与贡献/
scripts/              # 目录迁移兼容与测试
```

旧的“直击概念 / 编写代码 / 面试官问”目录已经迁移。开发服务提供旧地址跳转，生产构建为已有页面生成兼容入口，保留路径、查询参数和锚点。站内链接、编辑入口与搜索使用新地址。

## 让知识与实践连接

- 本站：概念、问题、路线与实践索引。
- [AI-Journey-land](https://github.com/Fridolph/AI-Journey-land)：全栈功能练习载体。
- [个人博客](https://fridolph.github.io/fridolph-blog/)：理解、取舍与复盘。
- [AI Journey Fighting](https://fridolph.github.io/AI-Journey-Fighting/)：独立维护的 AI 学习记录。

在对应笔记中补充代码位置、具体提交、运行步骤与观察结果；未实现的内容明确标记，避免把计划当作成果。

## 维护与贡献

在 `dev` 整理与开发，`main` 用于发布。推送到 `main` 后，GitHub Actions 构建并更新 Pages。

当前兼容性选择、升级限制与验证方式见 [依赖与迁移记录](docs/重构与依赖兼容性.md)。欢迎提交纠错与补充，请标注引用来源和适用版本。历史资料保留其原有语境。

## 许可

内容许可见仓库 [LICENSE](LICENSE)。转载内容请尊重原作者与对应来源，若有疑问请通过 Issue 联系维护者。
