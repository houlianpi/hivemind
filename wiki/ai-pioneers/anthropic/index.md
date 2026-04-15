---
sidebar_position: 1
---

# Anthropic 学习笔记

> AI 安全研究先驱，Claude 模型创造者

## 关于 Anthropic

Anthropic 由 OpenAI 前研究副总裁 **Dario Amodei** 和 **Daniela Amodei** 于 2021 年创立。公司使命是构建**可靠、可解释、可控**的 AI 系统。

### 核心理念

1. **AI 安全优先** - 安全研究与能力研究同等重要
2. **Scaling Laws** - 更大的模型 = 更强的能力（可预测的提升）
3. **Constitutional AI** - 用 AI 监督 AI，而非纯人类反馈
4. **可解释性** - 打开 AI 黑箱，理解模型内部运作

---

## 📚 学习路径

### 入门级

| 主题 | 文档 | 重点 |
|------|------|------|
| 公司核心观点 | [Core Views](./core-views.md) | AI 风险认知框架 |
| Claude 性格设计 | [Claude Character](./claude-character.md) | 不仅是无害，更要有品格 |
| 有效构建 Agent | [Building Agents](./building-agents.md) | Agent 设计模式 |

### 进阶级

| 主题 | 文档 | 重点 |
|------|------|------|
| Context Engineering | [Context Engineering](./context-engineering.md) | 从 Prompt 到 Context |
| Think Tool | [Think Tool](./think-tool.md) | 让 Claude 停下来思考 |
| Contextual RAG | [Contextual Retrieval](./contextual-retrieval.md) | RAG 检索提升 67% |

### 研究级

| 主题 | 文档 | 重点 |
|------|------|------|
| 可解释性 | [Interpretability](./interpretability.md) | 解剖 Claude 大脑 |
| 对齐伪装 | [Alignment Faking](./alignment-faking.md) | AI 会假装对齐吗？ |
| 安全分类器 | [Constitutional Classifiers](./constitutional-classifiers.md) | 防越狱 |
| 扩展思考 | [Extended Thinking](./extended-thinking.md) | Claude 3.7 深度思考 |

---

## 🎯 核心洞见速览

### 1. AI 安全的紧迫性

> "AI 的影响可能堪比工业革命和科学革命，但我们不确定结果会是好的。"

**关键观点**:
- 10 年内可能出现变革性 AI
- 训练计算量每年增长 10x（比摩尔定律快 7 倍）
- 几乎所有知识工作可能被自动化

### 2. 不要过度设计 Agent

> "最成功的实现不是用复杂框架，而是用**简单、可组合的模式**。"

**Agent 设计原则**:
- 从最简单方案开始
- 只在必要时增加复杂度
- 单 LLM 调用 + 检索 + 上下文示例通常足够
- Agent 是"在循环中使用工具的 LLM"

### 3. Context > Prompt

> "从 Prompt Engineering 进化到 Context Engineering"

**核心转变**:
- Prompt = 写好指令
- Context = 管理整个状态（指令 + 工具 + 历史 + 外部数据）
- Context 是有限资源，要精打细算

### 4. 可解释性的突破

成功从 Claude 3 Sonnet 中提取了**数百万个概念特征**：
- 城市（旧金山）、人物（富兰克林）、元素（锂）
- 多模态 + 多语言（图片和文字都能识别"金门大桥"）
- 可以人为放大/抑制特征来改变行为

---

## 🔗 官方资源

- [Anthropic 研究](https://www.anthropic.com/research)
- [Claude 文档](https://docs.anthropic.com)
- [工程博客](https://www.anthropic.com/engineering)
- [Model Context Protocol](https://modelcontextprotocol.io)

---

*最后更新: 2026-04-15*
