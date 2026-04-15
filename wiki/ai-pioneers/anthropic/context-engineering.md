---
sidebar_position: 3
---

# Context Engineering

> 来源: [Anthropic Engineering Blog](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)

## 从 Prompt Engineering 到 Context Engineering

| Prompt Engineering | Context Engineering |
|-------------------|---------------------|
| 如何写好指令 | 如何管理整个上下文状态 |
| 优化单次调用 | 优化多轮循环 |
| 静态优化 | 动态策展 |

## Context Rot（上下文腐烂）

> Token 越多 → 准确召回信息的能力越低

**原因**: Transformer 中每个 token 要关注所有其他 token（n² 关系），上下文越长注意力越分散

**结论**: Context 是**有限资源**，要精打细算

## System Prompt 的"正确高度"

- ❌ 过于具体（脆弱的 if-else 逻辑）
- ❌ 过于模糊（假设共享上下文）
- ✅ 具体到能引导行为，灵活到能应对变化

## Just-in-Time Context

**传统**: 预处理所有数据 → 嵌入检索 → 送入 Context

**JIT**: 维护轻量标识符 → 运行时按需加载 → 只把需要的放入 Context

## 核心公式

```
有效 Context = 最小 token 集 × 最大信号密度
```

> "Context engineering is the art and science of curating what will go into the limited context window."
