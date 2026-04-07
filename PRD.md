# Hivemind - 团队知识库 PRD

> **项目名称：** Hivemind  
> **仓库地址：** https://github.com/houlianpi/hivemind  
> **版本：** v0.1 (MVP)  
> **最后更新：** 2026-04-07  

---

## 1. 项目背景

### 1.1 灵感来源

基于 [Karpathy 的 LLM Wiki 模式](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)：

- **传统 RAG**：每次查询从头检索，没有积累
- **LLM Wiki**：LLM 持续构建和维护结构化知识库，知识不断复合增长

### 1.2 核心理念

> "人类负责策展、探索、提问；LLM 负责总结、交叉引用、归档、维护。"

三层结构：
- **Raw Sources** — 原始文档（不可修改的信息源）
- **Wiki** — LLM 生成的 Markdown 页面（摘要、实体、概念、交叉引用）
- **Schema** — 配置文件（告诉 LLM 如何维护 wiki）

---

## 2. 目标用户

| 角色 | 描述 | 核心需求 |
|------|------|----------|
| 贡献者 | 团队成员，提交新 sources 或编辑 wiki | 简单的提交流程，PR Review |
| 读者 | 查阅知识库的人 | 好看的界面，快速搜索，AI 问答 |
| 维护者 | 管理 wiki 结构和质量 | Lint 工具，健康检查，自动化 |

---

## 3. 核心功能

### 3.1 知识管理（基于 Karpathy 模式）

| 功能 | 描述 | 优先级 |
|------|------|--------|
| **Ingest** | 添加新 source → LLM 读取 → 生成摘要 → 更新相关页面 | P0 |
| **Query** | 对 wiki 提问 → AI 检索相关页面 → 生成答案 | P0 |
| **Lint** | 健康检查：找矛盾、孤立页面、缺失引用、过时内容 | P1 |
| **Index** | 自动维护 `index.md`（所有页面目录） | P0 |
| **Log** | 自动维护 `log.md`（操作历史） | P1 |

### 3.2 协作流程

| 功能 | 描述 | 优先级 |
|------|------|--------|
| Git Sync | 所有内容存储在 GitHub，版本控制 | P0 |
| PR Review | 所有变更通过 PR 审核 | P0 |
| Discussion 提交 | 通过 GitHub Discussion 提交新 sources | P1 |
| 自动部署 | PR 合并后自动构建发布 | P0 |

### 3.3 展示与搜索

| 功能 | 描述 | 优先级 |
|------|------|--------|
| 文档站点 | Docusaurus 静态站点，美观响应式 | P0 |
| 全文搜索 | 内置搜索或 Algolia | P0 |
| AI Chat | 浮动对话框，接入 GitHub Copilot API | P0 |
| 暗色模式 | 支持 light/dark 切换 | P1 |

---

## 4. 技术架构

```
┌─────────────────────────────────────────────────────────────┐
│                        用户界面                              │
├─────────────────────────────────────────────────────────────┤
│  Docusaurus 静态站点                                         │
│  ├─ 文档浏览（Markdown → HTML）                              │
│  ├─ 内置搜索（local search 或 Algolia）                      │
│  └─ AI Chat Widget（自建组件）                               │
├─────────────────────────────────────────────────────────────┤
│                        后端服务                              │
├─────────────────────────────────────────────────────────────┤
│  AI Chat Backend（Cloudflare Worker / Vercel Edge）          │
│  ├─ 接收用户问题                                             │
│  ├─ 检索相关文档（向量搜索或 BM25）                           │
│  ├─ 调用 GitHub Copilot API 生成答案                         │
│  └─ 返回答案 + 引用                                          │
├─────────────────────────────────────────────────────────────┤
│                        数据层                                │
├─────────────────────────────────────────────────────────────┤
│  GitHub Repository: houlianpi/hivemind                       │
│  ├─ /raw/          原始 sources（文章、PDF、笔记）            │
│  ├─ /wiki/         LLM 生成的 wiki 页面                      │
│  │   ├─ entities/  实体页面（人物、项目、工具）               │
│  │   ├─ concepts/  概念页面（方法论、理论）                   │
│  │   ├─ sources/   source 摘要页面                          │
│  │   └─ index.md   全局索引                                  │
│  ├─ /docs/         Docusaurus 文档目录（symlink 或复制）      │
│  ├─ log.md         操作日志                                  │
│  └─ AGENTS.md      LLM 维护指南（Schema）                    │
├─────────────────────────────────────────────────────────────┤
│                        部署                                  │
├─────────────────────────────────────────────────────────────┤
│  GitHub Pages（静态站点）+ GitHub Actions（CI/CD）            │
│  Cloudflare Worker（AI Chat API，免费额度足够）               │
└─────────────────────────────────────────────────────────────┘
```

### 4.1 技术选型

| 组件 | 选择 | 理由 |
|------|------|------|
| 静态站点 | Docusaurus | 开源免费、React 生态、内置搜索、版本管理 |
| 部署 | GitHub Pages | 免费、与仓库集成 |
| CI/CD | GitHub Actions | 免费、原生支持 |
| AI Chat 后端 | Cloudflare Worker | 免费额度大、全球边缘、冷启动快 |
| LLM | GitHub Copilot API | 已有 token、OpenAI 兼容 |
| 向量搜索（可选） | Cloudflare Vectorize / 本地 BM25 | 简单场景用 BM25 足够 |

### 4.2 目录结构

```
hivemind/
├── raw/                      # 原始 sources（只读）
│   ├── articles/
│   ├── papers/
│   ├── notes/
│   └── assets/               # 图片等附件
├── wiki/                     # LLM 维护的 wiki
│   ├── entities/
│   ├── concepts/
│   ├── sources/
│   ├── index.md
│   └── overview.md
├── docs/                     # Docusaurus 文档（可 symlink wiki/）
├── src/                      # Docusaurus 自定义组件
│   └── components/
│       └── AIChatWidget/     # AI Chat 浮动组件
├── api/                      # Cloudflare Worker 代码
│   └── chat/
│       └── index.js
├── static/                   # 静态资源
├── log.md                    # 操作日志
├── AGENTS.md                 # LLM 维护指南
├── docusaurus.config.js
├── package.json
└── README.md
```

---

## 5. MVP 范围（v0.1）

### 5.1 包含

- [x] 基础仓库结构（raw/, wiki/, docs/）
- [x] AGENTS.md（LLM 维护指南）
- [x] Docusaurus 站点搭建
- [x] GitHub Pages 部署 + Actions 自动构建
- [x] 内置本地搜索
- [x] AI Chat Widget（基础版）
  - [x] 浮动对话框 UI
  - [x] 接入 GitHub Copilot API
  - [x] 简单的上下文检索（关键词匹配）
- [x] PR Review 工作流
- [x] 示例 source + 生成的 wiki 页面

### 5.2 不包含（后续迭代）

- [ ] Discussion 自动 ingest
- [ ] 向量搜索（embedding-based RAG）
- [ ] Lint 工具
- [ ] 多语言支持
- [ ] 访问统计分析
- [ ] 用户认证（私有内容）

---

## 6. 里程碑

| 阶段 | 内容 | 预计时间 |
|------|------|----------|
| **M1: 基础设施** | 仓库创建、Docusaurus 搭建、GitHub Pages 部署 | 1 天 |
| **M2: 内容结构** | raw/wiki 目录、AGENTS.md、index.md、示例内容 | 1 天 |
| **M3: AI Chat** | Chat Widget UI + Cloudflare Worker + Copilot API 接入 | 2-3 天 |
| **M4: 完善体验** | 样式美化、搜索优化、文档补充 | 1-2 天 |
| **M5: 团队试用** | 邀请团队使用、收集反馈、迭代 | 持续 |

---

## 7. 工作流示例

### 7.1 添加新 Source（Ingest）

```
1. 贡献者将原始文档放入 raw/articles/xxx.md
2. 创建 PR，描述 source 内容
3. LLM（或人工）读取 source，生成：
   - wiki/sources/xxx-summary.md（摘要）
   - 更新相关 entity/concept 页面
   - 更新 wiki/index.md
   - 追加 log.md
4. PR Review 通过后合并
5. GitHub Actions 自动部署
```

### 7.2 用户提问（Query）

```
1. 用户点击 AI Chat 浮窗
2. 输入问题："什么是 LLM Wiki 模式？"
3. Chat Backend 收到请求
4. 检索 wiki/ 相关页面（关键词匹配 / 向量搜索）
5. 将问题 + 上下文发送给 GitHub Copilot API
6. 返回答案 + 引用链接
7. 用户点击引用可跳转到对应 wiki 页面
```

---

## 8. AGENTS.md 模板

```markdown
# Hivemind - LLM 维护指南

## 角色

你是 Hivemind 知识库的维护者。你的职责：
- 读取 raw/ 中的原始 sources
- 在 wiki/ 中创建和维护结构化页面
- 保持交叉引用的准确性
- 记录所有操作到 log.md

## 目录结构

- `raw/` — 原始 sources，只读，不要修改
- `wiki/entities/` — 实体页面（人物、项目、工具）
- `wiki/concepts/` — 概念页面（方法论、理论、术语）
- `wiki/sources/` — source 摘要页面
- `wiki/index.md` — 所有页面的索引
- `log.md` — 操作日志

## Ingest 工作流

当添加新 source 时：
1. 读取 source 内容
2. 创建 `wiki/sources/{source-name}.md` 摘要页
3. 识别提到的实体和概念
4. 创建或更新相关 entity/concept 页面
5. 更新 `wiki/index.md`
6. 在 `log.md` 追加记录

## 页面格式

### Source 摘要页
```
---
title: {Source 标题}
source: raw/{path}
date: {日期}
tags: [tag1, tag2]
---

## 摘要
{2-3 段摘要}

## 关键要点
- 要点 1
- 要点 2

## 相关链接
- [[entity-name]]
- [[concept-name]]
```

### Entity 页面
```
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

## 命名规范

- 文件名：小写，连字符分隔，如 `llm-wiki-pattern.md`
- 内部链接：使用 `[[page-name]]` 格式
- 日期格式：`YYYY-MM-DD`

## 质量检查（Lint）

定期检查：
- [ ] 孤立页面（无 inbound 链接）
- [ ] 断开的链接
- [ ] 缺少摘要的 source
- [ ] index.md 是否完整
```

---

## 9. 风险与应对

| 风险 | 影响 | 应对策略 |
|------|------|----------|
| GitHub Copilot API 限流 | AI Chat 不可用 | 加缓存、降级到静态搜索 |
| wiki 页面质量不一 | 用户体验差 | PR Review 把关、定期 Lint |
| 搜索效果不好 | 找不到内容 | 后续升级向量搜索 |
| 团队不愿意贡献 | 内容少 | 降低贡献门槛、自动化 ingest |

---

## 10. 成功指标

| 指标 | 目标（3个月） |
|------|---------------|
| Wiki 页面数 | 50+ |
| 原始 sources 数 | 30+ |
| 周活跃贡献者 | 3+ |
| AI Chat 日均问答 | 10+ |
| 站点周访问量 | 100+ |

---

## 11. 附录

### 11.1 参考资料

- [Karpathy LLM Wiki Gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
- [Docusaurus 官方文档](https://docusaurus.io/)
- [Cloudflare Workers 文档](https://developers.cloudflare.com/workers/)
- [GitHub Copilot API](https://docs.github.com/en/copilot)

### 11.2 相关项目

- [qmd](https://github.com/tobi/qmd) — 本地 Markdown 搜索引擎
- [Obsidian](https://obsidian.md/) — 本地 Markdown 编辑器
- [Marp](https://marp.app/) — Markdown 幻灯片

---

*PRD by Mattt | 2026-04-07*
