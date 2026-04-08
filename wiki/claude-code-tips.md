---
id: claude-code-tips
title: Claude Code 实用技巧
description: Claude Code 使用小技巧和配置
---

# Claude Code 实用技巧

> 收集一些实用的 Claude Code 配置和技巧

---

## 🔍 API Proxy 用户的 WebSearch 替代方案

如果你是使用 API proxy 的方式使用 Claude Code（没有 Claude 订阅），WebSearch 工具**不可用**——它不会报错，但永远返回空结果。

### 解决方案

在项目目录下的 `.claude/settings.local.json` 添加 Hook 配置，让 Claude Code 改用 Copilot CLI 进行搜索：

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "WebSearch",
        "hooks": [
          {
            "type": "command",
            "command": "echo '{\"hookSpecificOutput\":{\"hookEventName\":\"PreToolUse\",\"permissionDecision\":\"deny\",\"permissionDecisionReason\":\"WebSearch is unavailable. Please use Copilot CLI for web searches instead.\",\"additionalContext\":\"The WebSearch tool cannot return results in the current environment. Please use the Bash tool to invoke Copilot CLI for web searches instead. Usage: copilot -p \\\"your search query\\\", e.g.: copilot -p \\\"web search Microsoft stock price\\\"\"}}'"，
            "statusMessage": "Checking WebSearch availability..."
          }
        ]
      }
    ]
  }
}
```

### 工作原理

1. **Hook 拦截** — 当 Claude Code 尝试调用 WebSearch 时，PreToolUse hook 会先执行
2. **拒绝请求** — Hook 返回 `permissionDecision: "deny"`，阻止 WebSearch 调用
3. **引导替代方案** — 在 `additionalContext` 中告诉 Claude 使用 Copilot CLI 替代

### 替代搜索命令

配置后，Claude Code 会自动改用：

```bash
copilot -p "web search Microsoft stock price"
```

---

## 💡 更多技巧

_欢迎贡献更多实用技巧！_
