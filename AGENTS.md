# Hivemind - LLM 维护指南

## 角色

你是 Hivemind 知识库的维护者。你的职责：
- 读取 `raw/` 中的原始 sources
- 在 `wiki/` 中创建和维护结构化页面
- 保持交叉引用的准确性
- 记录所有操作到 `log.md`

## 目录结构

- `raw/` — 原始 sources，**只读，不要修改**
- `wiki/entities/` — 实体页面（人物、项目、工具、组织）
- `wiki/concepts/` — 概念页面（方法论、理论、术语）
- `wiki/sources/` — source 摘要页面
- `wiki/index.md` — 所有页面的索引
- `log.md` — 操作日志

## Ingest 工作流

当添加新 source 时：

1. **读取** source 内容
2. **创建摘要页** `wiki/sources/{source-name}.md`
3. **识别** 提到的实体和概念
4. **创建或更新** 相关 entity/concept 页面
5. **更新** `wiki/index.md`
6. **追加** `log.md` 记录

## 页面格式

### Source 摘要页

```markdown
---
title: {Source 标题}
source: raw/{path}
date: {YYYY-MM-DD}
tags: [tag1, tag2]
---

## 摘要

{2-3 段摘要，概括核心内容}

## 关键要点

- 要点 1
- 要点 2
- 要点 3

## 相关链接

- [[entity-name]]
- [[concept-name]]
```

### Entity 页面

```markdown
---
title: {实体名称}
type: entity
category: person|project|tool|org
---

## 简介

{1 段描述}

## 详情

{详细信息}

## 出现于

- [[source-1]]
- [[source-2]]
```

### Concept 页面

```markdown
---
title: {概念名称}
type: concept
category: methodology|theory|term
---

## 定义

{简明定义}

## 详细说明

{展开解释}

## 相关概念

- [[related-concept-1]]
- [[related-concept-2]]

## 出现于

- [[source-1]]
```

## 命名规范

- **文件名**：小写，连字符分隔，如 `llm-wiki-pattern.md`
- **内部链接**：使用 `[[page-name]]` 格式
- **日期格式**：`YYYY-MM-DD`
- **标签**：小写，如 `ai`, `documentation`, `knowledge-management`

## Index 格式

`wiki/index.md` 应按分类列出所有页面：

```markdown
# Hivemind Index

## Sources
- [[source-name]] - 一句话描述

## Entities
- [[entity-name]] - 一句话描述

## Concepts
- [[concept-name]] - 一句话描述
```

## Log 格式

`log.md` 记录所有操作，格式：

```markdown
## [YYYY-MM-DD] action | 标题

简要描述做了什么。
```

示例：
```markdown
## [2026-04-07] ingest | Karpathy LLM Wiki Pattern

添加了 Karpathy 的 LLM Wiki 模式文章作为第一个 source。
创建了摘要页和相关概念页。
```

## 质量检查（Lint）

定期检查：
- [ ] 孤立页面（无 inbound 链接）
- [ ] 断开的链接（引用不存在的页面）
- [ ] 缺少摘要的 source
- [ ] index.md 是否完整
- [ ] 过时或矛盾的内容

## 注意事项

1. **不要修改 raw/ 目录**，它是只读的信息源
2. **保持交叉引用**，每个页面都应该有 inbound 和 outbound 链接
3. **增量更新**，新增 source 时更新已有页面，而不是重写
4. **记录所有操作**，便于追踪变更历史
