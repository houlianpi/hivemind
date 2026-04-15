---
sidebar_position: 2
---

# Building Effective Agents

> 来源: [Anthropic Engineering Blog](https://www.anthropic.com/engineering/building-effective-agents)

## 核心观点

**最成功的 Agent 实现不是用复杂框架，而是用简单、可组合的模式。**

## Agent vs Workflow

| 类型 | 定义 | 控制权 |
|------|------|--------|
| **Workflow** | LLM + 工具按**预定义代码路径**编排 | 开发者 |
| **Agent** | LLM **动态决定**流程和工具使用 | 模型 |

## 设计模式

### 1. Prompt Chaining（提示链）
任务拆分为固定子任务序列，适合可清晰拆分的工作流

### 2. Routing（路由）
分类输入并导向专门处理路径，适合不同类别需要不同处理的场景

### 3. Parallelization（并行化）
- **分段**: 独立子任务并行执行
- **投票**: 同一任务多次执行取最佳

### 4. Orchestrator-Workers（编排-工人）
中央 LLM 动态分配子任务，适合无法预知子任务的复杂任务

### 5. Evaluator-Optimizer（评估-优化）
生成→评估→反馈循环，适合有明确评估标准的迭代任务

## Agent 三原则

1. **保持简单** - 不要过度设计
2. **保持透明** - 明确展示规划步骤  
3. **精心设计 ACI** - Agent-Computer Interface 和 HCI 一样重要

## 工具设计

- 让模型有足够 token "思考"
- 格式接近模型训练数据
- 避免额外开销（如精确计数行数）
- **Poka-yoke**: 设计成难以出错

> "我们在 SWE-bench 上花更多时间优化工具而非 prompt"
