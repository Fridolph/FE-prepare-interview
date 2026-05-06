> 2024 年 AI 浪潮席卷整个行业，作为前端开发者，了解 AI / 大模型的基础概念及在前端的应用场景变得越来越重要。
> 本版块涵盖 30 个核心概念，涵盖基础认知、大模型原理、训练机制、推理生成和进阶实践。

## 目录

### 基础认知

- :white_check_mark: [什么是 AI](./s_ai_1-what_is_ai) — 人工智能定义、弱AI/强AI、三大流派、关键里程碑
- :white_check_mark: [机器学习](./s_ai_2-machine_learning) — 监督/无监督/强化学习、训练与推理
- :white_check_mark: [深度学习](./s_ai_3-deep_learning) — DNN/CNN/RNN、层级特征、架构对比
- :white_check_mark: [神经网络](./s_ai_4-neural_network) — 神经元、激活函数、前向传播
- :white_check_mark: [生成式 AI](./s_ai_5-generative_ai) — AIGC、扩散模型、自回归模型、GAN

### 大模型核心

- :white_check_mark: [大语言模型 LLM](./s_ai_6-llm) — GPT 演进、Scaling Law、涌现能力
- :white_check_mark: [Transformer 架构](./s_ai_7-transformer) — Encoder/Decoder、Self-Attention、位置编码
- :white_check_mark: [Token 与分词](./s_ai_8-tokenization) — BPE/WordPiece、Token 计费与限制
- :white_check_mark: [Embedding 向量嵌入](./s_ai_9-embedding) — 语义向量空间、余弦相似度、模型选型
- :white_check_mark: [Attention 注意力机制](./s_ai_10-attention) — Q/K/V、多头注意力、Flash Attention

### 训练机制

- :white_check_mark: [预训练与微调](./s_ai_11-pretraining_finetuning) — SFT、LoRA/QLoRA、参数高效微调
- :white_check_mark: [损失函数与梯度下降](./s_ai_12-loss_gradient) — 交叉熵/MSE、SGD/Adam、学习率
- :white_check_mark: [反向传播](./s_ai_13-backpropagation) — 链式法则、计算图、梯度消失/爆炸
- :white_check_mark: [过拟合与正则化](./s_ai_14-overfitting_regularization) — Dropout/L1/L2、早停、验证集
- :white_check_mark: [RLHF 与对齐训练](./s_ai_15-rlhf) — 三阶段对齐、PPO/DPO、HHH 原则
- :white_check_mark: [模型量化](./s_ai_16-quantization) — INT8/INT4、GGUF/GPTQ、浏览器推理

### 推理与生成

- :white_check_mark: [概率分布与 Softmax](./s_ai_17-probability_softmax) — Logits 转概率、Logprobs
- :white_check_mark: [Temperature 与采样策略](./s_ai_18-temperature) — Top-p/Top-k、贪心 vs 随机
- :white_check_mark: [流式输出 Streaming](./s_ai_19-streaming) — SSE/WebSocket、前端逐 token 消费
- :white_check_mark: [模型幻觉](./s_ai_20-hallucination) — 成因、类型、RAG 缓解
- :white_check_mark: [上下文窗口](./s_ai_21-context_window) — Token 限制、Lost in the Middle、位置插值

### 进阶与实践

- :white_check_mark: [Prompt Engineering](./s_ai_22-prompt_engineering) — Zero-shot/Few-shot、CoT、System Prompt
- :white_check_mark: [RAG 检索增强生成](./s_ai_23-rag) — 分块/检索/重排/增强，前端 RAG 方案
- :white_check_mark: [AI Agent 智能体](./s_ai_24-agent) — ReAct、规划/工具/记忆、前端 Agent 场景
- :white_check_mark: [Function Calling](./s_ai_25-function_calling) — Tool Use、JSON Schema、Structured Output
- :white_check_mark: [向量数据库](./s_ai_26-vector_database) — ANN/HNSW、Milvus/Pinecone/pgvector
- :white_check_mark: [MCP 协议](./s_ai_27-mcp) — Model Context Protocol、Client/Server、与 A2A 对比
- :white_check_mark: [LangChain & AI SDK](./s_ai_28-langchain) — 框架概述、Vercel AI SDK、选型建议
- :white_check_mark: [Multi-Agent 系统](./s_ai_29-multi_agent) — 编排模式、通信机制、A2A 协议
- :white_check_mark: [AI 安全与护栏](./s_ai_30-safety) — 提示注入、Jailbreak、输入/输出层防护
