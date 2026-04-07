# 🐝 Hivemind

> Team Knowledge Base powered by the LLM Wiki Pattern

基于 [Karpathy 的 LLM Wiki 模式](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) 构建的团队知识库。

## 核心理念

传统 RAG 每次查询都从头检索，没有积累。Hivemind 不同：

- **LLM 持续构建和维护** 一个结构化的知识库
- **知识不断复合增长**，交叉引用自动维护
- **人类负责策展和提问**，LLM 负责整理和归档

## 目录结构

```
hivemind/
├── raw/          # 原始 sources（只读）
│   ├── articles/
│   ├── papers/
│   ├── notes/
│   └── assets/
├── wiki/         # LLM 维护的 wiki 页面
│   ├── entities/ # 实体页面（人物、项目、工具）
│   ├── concepts/ # 概念页面（方法论、理论）
│   └── sources/  # source 摘要页面
├── docs/         # Docusaurus 文档
├── src/          # 自定义组件
└── api/          # AI Chat 后端
```

## 工作流

### 添加新 Source (Ingest)

1. 将原始文档放入 `raw/` 目录
2. 创建 PR
3. LLM 读取 source，生成摘要，更新相关 wiki 页面
4. PR Review 通过后合并
5. 自动部署

### 提问 (Query)

使用站点右下角的 AI Chat 对知识库提问，获得基于 wiki 内容的答案。

## 贡献指南

1. Fork 本仓库
2. 添加 source 或编辑 wiki
3. 提交 PR
4. 等待 Review

## License

MIT
