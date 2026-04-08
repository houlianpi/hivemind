---
id: copilot-gateway
title: Copilot Gateway
description: 用 GitHub Copilot 订阅驱动 Claude Code 和 Codex CLI
---

# Copilot Gateway

> **用你的 GitHub Copilot 订阅驱动 Claude Code、Codex CLI 和其他 AI 编程工具**

Copilot Gateway 是一个轻量级的 API 代理，部署在 serverless 平台上，将你的 GitHub Copilot 订阅暴露为标准的 **Anthropic Messages API** 和 **OpenAI Responses API** 端点。

**GitHub:** https://github.com/Menci/copilot-gateway

---

## 💡 核心价值

有 GitHub Copilot 订阅但想用 Claude Code 或 Codex CLI？这个网关帮你实现：

- **省钱** — 复用已有的 Copilot 订阅，无需额外付费
- **灵活** — 支持多种 AI 编程工具
- **简单** — 一键部署到 Deno Deploy 或 Cloudflare Workers

---

## ⚡ 工作原理

```
Claude Code / Codex CLI / 任意客户端
        │
        ▼
  Copilot Gateway (Hono)
  ├── POST /v1/messages          ← Anthropic Messages API
  ├── POST /v1/responses         ← OpenAI Responses API
  ├── POST /v1/chat/completions  ← OpenAI Chat Completions
  ├── POST /v1/embeddings        ← Embeddings 透传
  └── GET  /v1/models            ← 模型列表
        │
        ▼ (自动选择翻译路径)
  GitHub Copilot API
```

Gateway 在 API 格式之间即时翻译：
- **Claude Code** 使用 Anthropic Messages API → Gateway 翻译为 Copilot 支持的格式
- **Codex CLI** 使用 OpenAI Responses API → Gateway 翻译或直接透传
- **任意 OpenAI 兼容客户端** 可直接使用 Chat Completions 端点

---

## 🚀 快速部署

### 前置条件

- GitHub 账号 + 有效的 [Copilot](https://github.com/features/copilot) 订阅
- **Deno** (>= 2.4) 或 **Node.js** (用于 Cloudflare Workers)

### 部署到 Deno Deploy

```bash
# 克隆项目
git clone https://github.com/Menci/copilot-gateway.git
cd copilot-gateway

# 设置管理密钥
export ADMIN_KEY=your-secret-admin-key

# 本地开发
deno task dev

# 部署到生产环境
deno deploy --prod
```

### 部署到 Cloudflare Workers

```bash
# 安装依赖
pnpm install

# 创建 D1 数据库
wrangler d1 create copilot-db

# 更新 wrangler.jsonc 中的 account_id 和 database_id，然后应用迁移
wrangler d1 migrations apply copilot-db

# 设置管理密钥
wrangler secret put ADMIN_KEY

# 本地开发
wrangler dev

# 部署到生产环境
wrangler deploy
```

---

## ⚙️ 初始设置

1. 在浏览器打开部署的 URL，用 `ADMIN_KEY` 登录
2. 进入 **Upstream** 标签，通过 device OAuth 流程连接你的 GitHub 账号
3. 进入 **API Keys** 标签，为你的客户端创建 API key
4. **API Keys** 标签会显示 Claude Code 和 Codex CLI 的配置代码片段

---

## 🔧 技术栈

- **框架:** Hono（95% 平台无关代码）
- **语言:** TypeScript
- **部署:** Deno Deploy / Cloudflare Workers
- **存储:** Deno KV / Cloudflare D1

---

## 📄 许可证

MIT
