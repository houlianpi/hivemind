---
sidebar_position: 4
---

# Think Tool

> 来源: [Anthropic Engineering Blog](https://www.anthropic.com/engineering/claude-think-tool)

## 什么是 Think Tool？

给 Claude 一个**专用的思考空间**，让它在复杂工具调用中停下来思考。

## Think Tool vs Extended Thinking

| Think Tool | Extended Thinking |
|------------|-------------------|
| 响应**生成过程中**添加思考步骤 | 响应**开始前**深度思考 |
| 处理新发现的外部信息 | 整体规划 |
| 工具调用链中使用 | 开始行动前使用 |

## 性能提升（τ-Bench）

**航空客服**: Think Tool + 优化 Prompt 达到 0.570（基线 0.370，+54%）

**零售客服**: Think Tool 达到 0.812（基线 0.783）

## 适用场景

✅ 工具输出分析、政策密集环境、序列决策
❌ 非序列工具调用、简单指令遵循

## 最佳实践

在执行操作前使用 think tool：
- 列出适用规则
- 检查是否收集了必需信息
- 验证计划的操作符合政策
- 迭代检查工具结果
