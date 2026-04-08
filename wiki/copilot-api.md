---
id: copilot-api
title: Copilot API Proxy
description: 将 GitHub Copilot API 暴露为 OpenAI/Anthropic 兼容接口
---

# Copilot API Proxy

> **将 GitHub Copilot API 逆向代理为 OpenAI 和 Anthropic 兼容服务**

⚠️ **注意：** 这是 GitHub Copilot API 的逆向代理，GitHub 官方不支持，可能随时失效，风险自负。

**GitHub:** https://github.com/weivea/copilot-api

---

## 💡 核心功能

- **OpenAI & Anthropic 兼容** — 暴露为 `/v1/chat/completions`、`/v1/messages` 等标准 API
- **Claude Code 集成** — 一键启动配置 (`--claude-code`)
- **使用量仪表盘** — Web 界面监控 API 用量和配额
- **速率限制控制** — `--rate-limit` 和 `--wait` 选项防止请求过快
- **手动审批模式** — `--manual` 精细控制每个请求
- **API 认证** — 自动生成 API key，支持 Bearer 和 x-api-key
- **HTTPS 支持** — 内置 certbot 集成

---

## 🚀 快速开始

### 前置条件

- Bun (>= 1.2.x)
- GitHub 账号 + Copilot 订阅

### 安装运行

```bash
# 克隆并安装
git clone https://github.com/weivea/copilot-api.git
cd copilot-api
bun install

# 启动服务（会自动引导认证）
bun run start start

# 或指定端口
bun run start start --port 8080
```

### Docker 运行

```bash
# 先获取 token
docker run -it -v ~/.local/share/copilot-api:/root/.local/share/copilot-api copilot-api --auth

# 启动服务
docker run -p 4141:4141 -v ~/.local/share/copilot-api:/root/.local/share/copilot-api copilot-api
```

---

## 📡 API 端点

### OpenAI 兼容

| 端点 | 方法 | 描述 |
|------|------|------|
| `/v1/chat/completions` | POST | Chat 补全 |
| `/v1/models` | GET | 模型列表 |
| `/v1/embeddings` | POST | 文本嵌入 |

### Anthropic 兼容

| 端点 | 方法 | 描述 |
|------|------|------|
| `/v1/messages` | POST | Messages API |
| `/v1/messages/count_tokens` | POST | Token 计数 |

### 监控

| 端点 | 方法 | 描述 |
|------|------|------|
| `/usage` | GET | 使用量统计 |
| `/token` | GET | 当前 Copilot token |

---

## 🔧 配合 Claude Code 使用

### 方式一：交互式设置

```bash
bun run start start --claude-code
```

选择模型后会自动复制启动命令到剪贴板。

### 方式二：手动配置

在项目根目录创建 `.claude/settings.json`：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "http://localhost:4141",
    "ANTHROPIC_AUTH_TOKEN": "cpk-your-auth-token-here",
    "ANTHROPIC_MODEL": "gpt-4.1",
    "ANTHROPIC_SMALL_FAST_MODEL": "gpt-4.1",
    "DISABLE_NON_ESSENTIAL_MODEL_CALLS": "1"
  },
  "permissions": {
    "deny": ["WebSearch"]
  }
}
```

> 运行 `bun run start auth-token` 查看你的认证 token

---

## ⚙️ 常用选项

| 选项 | 描述 | 默认值 |
|------|------|--------|
| `--port` | 监听端口 | 4141 |
| `--verbose` | 详细日志 | false |
| `--account-type` | 账户类型 (individual/business/enterprise) | individual |
| `--rate-limit` | 请求间隔秒数 | 无 |
| `--wait` | 达到限制时等待而非报错 | false |
| `--manual` | 手动审批每个请求 | false |
| `--no-auth` | 禁用 token 验证 | false |
| `--claude-code` | 生成 Claude Code 启动命令 | false |

---

## 📊 使用仪表盘

启动服务后，控制台会显示仪表盘 URL，可以在浏览器中查看用量统计。

---

## 📄 许可证

MIT

---

## ⚠️ 风险提示

过度的自动化或脚本使用可能触发 GitHub 的滥用检测系统，导致 Copilot 访问被暂停。请负责任地使用。
