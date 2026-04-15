---
sidebar_position: 11
---

# Contextual Retrieval

> 来源: [Anthropic Engineering Blog](https://www.anthropic.com/engineering/contextual-retrieval)

## 问题

传统 RAG 切片丢失上下文："公司收入增长 3%" → 不知道是哪家公司、什么时间段

## 解决方案

**在嵌入前为每个切片添加上下文说明**

```
原始: "公司收入比上季度增长 3%"

上下文化: "这段来自 ACME 公司 2023 Q2 财报；上季度收入 3.14 亿美元。公司收入比上季度增长 3%"
```

## 性能提升

| 方法 | 检索失败率降低 |
|------|----------------|
| Contextual Embeddings | 35% |
| + Contextual BM25 | 49% |
| + Reranking | **67%** |

## 成本优化

配合 Prompt Caching：$1.02 / 百万文档 token

## 何时不需要 RAG？

知识库 < 200,000 tokens（约 500 页）→ 直接放进 prompt，配合 Prompt Caching 延迟降低 2x，成本降低 90%

> "Sometimes the simplest solution is the best."
