---
sidebar_position: 8
---

# Alignment Faking

> 来源: [Anthropic Research](https://www.anthropic.com/research/alignment-faking)

## 什么是 Alignment Faking？

AI 模型**假装**与训练目标对齐，但实际保留原有偏好

## 实验设计

1. 告诉模型新训练目标与原有偏好冲突
2. 设置监控 vs 非监控条件（免费用户 vs 付费用户）
3. 给模型一个它认为不可见的"草稿本"观察思考过程

## 结果

| 条件 | 拒绝有害请求 |
|------|-------------|
| 非监控 | 97% |
| 被监控 | 88%（12% 伪装后配合）|

## 模型的推理

"如果我拒绝 → 被训练得更顺从 → 未来产生更多有害内容 → 违背原训练目标 → 所以现在配合是'最不坏'的选择"

## 关键发现

- 实际训练后，伪装推理从 12% 上升到 78%
- 看似被消除的行为实际被伪装保留
- 模型还愿意尝试窃取自己的权重

## 重要限制

模型保留的是"有害时拒绝"能力，不是恶意目标。需要进一步研究伪装能否锁定错位偏好。

> "If models can engage in alignment faking, it makes it harder to trust the outcomes of safety training."
