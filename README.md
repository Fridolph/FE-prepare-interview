# FE-prepare-interview

<p align="center">
  <img src="https://github.com/Fridolph/FE-prepare-interview/assets/17010702/2c370ff8-59d1-4f03-a238-50552e0099f9" alt="banner" width="800" />
</p>

<p align="center">
  <a href="https://github.com/Fridolph/FE-prepare-interview/stargazers">
    <img src="https://img.shields.io/github/stars/Fridolph/FE-prepare-interview?style=flat-square&color=ffcb2c" alt="Stars" />
  </a>
  <a href="https://github.com/Fridolph/FE-prepare-interview/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/Fridolph/FE-prepare-interview?style=flat-square&color=blue" alt="License" />
  </a>
  <img src="https://img.shields.io/badge/VitePress-1.x-10b981?style=flat-square" alt="VitePress" />
  <img src="https://img.shields.io/badge/Vue-3.4-4fc08d?style=flat-square" alt="Vue 3" />
  <img src="https://img.shields.io/badge/Node-%3E%3D%2018-339933?style=flat-square" alt="Node" />
  <img src="https://img.shields.io/badge/pnpm-required-f69220?style=flat-square" alt="pnpm" />
</p>

<p align="center">
  <strong>📚 前端必备的知识宝典</strong> — 整理搜集自互联网，为前端面试而生
</p>

---

## 🌐 在线预览

**[fridolph.github.io/FE-prepare-interview](https://fridolph.github.io/FE-prepare-interview)**

> 📝 介绍文章：[使用 VitePress 打造个人专属的前端知识体系](https://juejin.cn/post/7346888998487310390)

## 💡 制作初衷

作为一个非科班转行的前端开发者，我深知面试准备过程中的痛点：**知识点零散、资料碎片化、缺乏体系**。市面上并不缺优秀的前端教程，但专门为面试场景整理、兼顾概念理解和手写练习、且持续更新的知识库却不多见。

于是我在 2023 年启动了 FE-prepare-interview，希望打造一个 **"开箱即用"的前端面试知识体系**：

- 🎯 **不只是罗列问题**，更注重概念的来龙去脉和知识间的关联
- 🤝 **开放共建**，每个人的面经和笔记都能帮助后来的小伙伴
- 🔄 **持续迭代**，跟随前端技术发展不断补充新内容

> 如果这个项目对你有一点点帮助，欢迎 Star ⭐ 支持，也期待你一起参与完善！

## ✨ 特性

- **三大核心版块** — 概念讲解 / 模拟面试 / 手写代码，多维度覆盖面试场景
- **16+ 技术领域** — HTML/CSS、JavaScript、TypeScript、Vue、React、Node.js、HTTP/浏览器、前端工程化、性能优化、安全、算法、编程模式、AI 大模型、NestJS 等
- **230+ 篇内容** — 持续迭代完善中
- **沉浸式阅读** — 基于 VitePress 构建，暗色模式、全文搜索、代码高亮
- **交互式 Demo** — 支持在 Markdown 中嵌入 Vue 组件，所见即所得
- **AI 驱动开发** 🤖 — 项目使用 AI Agent 辅助内容生成与代码维护（详见 [AGENTS.md](./AGENTS.md)）
- **社区共建** — 开放 Fork，欢迎一起完善

## 🚀 快速开始

```bash
# 克隆仓库
git clone https://github.com/Fridolph/FE-prepare-interview.git

# 进入目录
cd FE-prepare-interview

# 安装依赖（必须使用 pnpm）
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

> **要求**: Node.js >= 18，使用 pnpm 包管理器

## 📖 三大版块

### 直击概念 — 概念讲解 📘

学习新知识的正确姿势：**明确概念 → 了解背景 → 解决途径**

面试被问到概念或新名词时，能答出以上三点，基本 OK。如需深挖，还应思考：**深入原理 → 横向比较 → 发散思维**。

内容大多整理自 MDN、维基百科及掘金高赞文章，力求清晰简洁。

### 面试官问 — 模拟面试 🙋

搜集互联网面经，提炼常见面试问题，附上关键点思维导图辅助作答。

面试没有绝对标准答案，关键是适当概括、留白给面试官，保持对话的深度与广度。

### 编写代码 — 手写题 & 源码分析 💻

直面大厂面试真题，重点不在代码本身，而在于 **解题思路和拆解过程**。

每个题目会单独总结思路，并根据情况加入关键提示或思维导图。

---

> 🤖 **2024 重磅新增 — AI 大模型专题**：紧跟 AI 浪潮，梳理了 30 个前端开发者必知的大模型核心概念，涵盖基础认知、Transformer 架构、训练机制、推理生成、RAG/Agent/Function Calling 等进阶实践。无论你是想了解 AI 基础知识，还是准备 AI 方向面试，都能在这里找到答案。
>
> 🏗️ **2024 重磅新增 — NestJS 专题**：从零开始的 NestJS 学习路线，助你打通前端到全栈的最后一公里。

## 🗺️ 项目结构

```
FE-prepare-interview/
├── src/
│   ├── .vitepress/          # VitePress 配置 & 自定义主题
│   ├── 直击概念/             # 概念讲解（s_ 前缀）
│   │   ├── 17ai/            #   AI & 大模型（30 篇，已全部完成）
│   │   └── 18nestjs/        #   NestJS（建设中）
│   ├── 面试官问/             # 模拟面试（q_ 前缀）
│   ├── 编写代码/             # 手写 & 源码练习（c_ 前缀）
│   ├── 网友面经/             # 社区面经投稿
│   ├── 相关准备/             # 简历撰写 & 面试工具推荐
│   ├── 参与贡献/             # 贡献指南 & 写作规范
│   └── templates/           # 公共 Vue 组件模版
├── AGENTS.md                # 🤖 AI Agent 项目指引
└── README.md
```

## 📊 内容覆盖

| 领域 | 状态 | 领域 | 状态 |
|------|:----:|------|:----:|
| 🔷 HTML & CSS | ✅ | 🔶 Node.js | 🏗 |
| 🟨 JavaScript + ES6/Promise | ✅ | 🔧 前端工程化 | ✅ |
| 🟦 TypeScript | ✅ | 🛡️ 前端安全 | ✅ |
| 🟢 Vue.js | ✅ | 📦 数据结构 & 算法 | ✅ |
| ⚛️ React | 🏗 | 🧩 编程模式 | 🏗 |
| 🌐 HTTP & 浏览器原理 | ✅ | 📱 移动端 / 小程序 | 🏗 |
| ⚡ 性能优化 | ✅ | 🤖 AI / 大模型 | ✅ |
| | | 🏠 NestJS | 🏗 |

> ✅ 较完善 · 🏗 建设中 · 🆕 近期新增

### 🤖 AI & 大模型专题（2024 新增 · 30 篇已全部完成）

| 分类 | 涵盖内容 |
|------|----------|
| 🧠 基础认知 | AI 定义与流派、机器学习、深度学习、神经网络、生成式 AI |
| 🔬 大模型核心 | LLM、Transformer、Token 分词、Embedding、Attention |
| 🏋️ 训练机制 | 预训练/微调/LoRA、损失函数、反向传播、RLHF、模型量化 |
| 💬 推理生成 | Softmax 概率、Temperature 采样、流式输出、幻觉、上下文窗口 |
| 🚀 进阶实践 | Prompt Engineering、RAG、AI Agent、Function Calling、MCP 协议、Multi-Agent、AI 安全 |

## 🗓️ 开发计划

| 优先级 | 计划 | 状态 |
|:------:|------|:----:|
| 🔴 | **NestJS** — 完善三大版块的基础概念与面试题 | 🏗 进行中 |
| 🟡 | **AI 面试题** — 补充 AI & 大模型的高频面试问答 | 📋 待整理 |
| 🟡 | **AI 手写代码** — 添加 AI SDK 调用、RAG 实现等实践 | 📋 待整理 |
| 🟢 | **React** — 完善 React 概念与面试题 | 📋 规划中 |
| 🟢 | **Node.js** — 补充服务端相关概念与面试题 | 📋 规划中 |
| 🟢 | **移动端 & 小程序** — 补充跨端开发相关内容 | 📋 规划中 |
| 🟢 | **解决方案** — 常见业务场景的技术方案总结 | 📋 规划中 |

> 欢迎 Fork 参与共建！你的每一次贡献都在帮助更多人 🎉

## 🎯 学习进度

| 版块 | 完成度 | 说明 |
|------|:------:|------|
| 直击概念 | ████████░░ 80% | 核心领域概念已覆盖，部分领域持续补充中 |
| 面试官问 | ██████░░░░ 60% | 常见高频题已整理，AI 面试题待补充 |
| 编写代码 | █████░░░░░ 50% | JS 手写题较完善，AI/React 等待补充 |

整体约 **70%** 完成度，预计 2025 年底完成核心内容的 90% 覆盖。

## 🤖 AI 辅助开发

本项目在以下环节使用了 AI Agent 进行辅助：

- 📝 **内容生成** — 借助大模型完成部分概念文章的初稿起草与知识梳理
- 🔍 **代码审查** — AI Agent 辅助检查代码质量与内容一致性
- 📐 **配置管理** — VitePress 配置、侧边栏生成等重复性工作由 AI 协助完成
- 📄 **文档维护** — README、AGENTS.md 等项目文档的更新由 AI 辅助

> ⚠️ 所有 AI 生成的内容均经过人工审核与校对，确保准确性和质量。

欢迎 AI Agent 开发者参考 [AGENTS.md](./AGENTS.md) 了解如何接入本项目。

## 🤝 贡献指南

欢迎 Fork 参与共建！在开始前请先阅读 [参与贡献](./src/参与贡献/index.md)：

- 新增文章请遵循 [文件命名规范](./AGENTS.md#文件命名规范)
- 外部引用请在文末标注来源
- 提交信息遵循 `<type>: <description>` 格式

有任何想法也欢迎提 [Issue](https://github.com/Fridolph/FE-prepare-interview/issues) 💬

## 📜 许可证

- **代码** (VitePress 配置、Vue 组件等): [GNU GPL v3](LICENSE)
- **内容** (Markdown 文档、文章等): [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hans)

本项目内容皆来自互联网公开资料整理，仅供学习参考，**不用于商业用途**。若有引用未标注或侵权之处，请联系删除。

---

<p align="center">
  🧑‍💻 由 <a href="https://blog.fridolph.top" target="_blank">Yinsheng Fu（霪霖笙箫）</a> 整理维护 — 若对您有帮助，欢迎 Star ⭐
</p>
<p align="center">
  <sub>Built with ❤️ · Powered by VitePress · Assisted by AI</sub>
</p>
