---
sidebar_position: 10
---

# Extended Thinking

> 来源: [Anthropic Research](https://www.anthropic.com/research/visible-extended-thinking)

## Claude 3.7 Sonnet 的深度思考

用户可开关，开发者可设置"思考预算"。不是切换模型，而是**同一模型给自己更多时间**。

## 可见的思考过程

**好处**: 信任、对齐检测、趣味

**风险**: 忠实度问题、可能被利用设计越狱、模型可能学会隐藏思考

## 性能提升

**数学**: 准确率随思考 token 数对数增长

**Pokémon Red**: Claude 3.0 卡在出生房子，Claude 3.7 打败 3 个道馆

**GPQA**: 并行扩展达到 84.8%（物理 96.5%）

## 安全措施

- ASL-2 标准仍适用
- 潜在有害思考内容会被加密
- Computer Use 增强防御 prompt 注入

> "Extended thinking mode isn't an option that switches to a different model. It's allowing the very same model to give itself more time."
