---
id: opc
title: OPC - One Person Company
description: 一人公司的全团队 Claude Code 技能
---

# OPC — One Person Company

> **A full team in a single Claude Code skill. You're the CEO — OPC is everyone else.**

OPC 是一个 Claude Code 技能，内置 11 个专业角色（PM、设计师、安全工程师、测试等），可以帮你审查、分析、构建和头脑风暴代码——让你不再需要在不同角色之间切换。

**GitHub:** https://github.com/iamtouchskyer/opc

---

## 🤔 为什么不直接问 Claude？

可以——对于代码级别的 bug，单个 Claude prompt 通常更彻底。但 OPC 能发现**不同类型的问题**：

| | 单独 Claude | OPC (3 agents) |
|---|:---:|:---:|
| 代码 bug（变量遮蔽、DRY 违规、退出码） | **14** | 9 |
| UX 问题（新用户体验、安装流程） | 0 | **5** |

**OPC 的价值不是找到更多 bug，而是找到你想不到要去找的 bug。**

---

## ⚡ 工作原理

核心原则：**执行工作的 agent 永远不评估它自己的工作。**

1. **任务推断** — OPC 读取你的请求，选择合适的流程
2. **并行专家** — 2-5 个角色专家并行运行，各有专业领域
3. **验证关卡** — 检查发现、挑战严重性、排除误报
4. **迭代循环** — 如果 FAIL 或 ITERATE，修复后重新测试，最多 10 轮

---

## 🚀 快速开始

### 安装

```bash
npm install -g @touchskyer/opc
```

技能文件会自动复制到 `~/.claude/skills/opc/`。

### 使用

```bash
# 审查 PR
/opc review the changes in this PR

# 分析架构问题
/opc analyze why the API is slow

# 执行计划
/opc implement the migration plan in PLAN.md

# 头脑风暴
/opc what are our options for auth?

# 交互模式 — agents 先问你问题
/opc -i review the payment flow

# 指定角色
/opc security compliance

# 打开报告查看器
/opc replay
```

---

## 📋 任务类型

| 类型 | 场景 | 流程 |
|------|------|------|
| **Review** | PR 审查、审计、发布前 | 上下文 → 多角色评估 → 验证 → 报告 |
| **Analysis** | 架构、性能、诊断 | 上下文 → 深度角色评估 → 报告 |
| **Build** | 方向已定，执行实现 | 计划 → 构建 → 独立评估 → 迭代 |
| **Brainstorm** | 选项、权衡、替代方案 | 角色视角 → 对比表 → 评估 → 推荐 |
| **Plan** | 范围、分解、估算 | 任务分解 → 评估 → 报告 |
| **Verification** | QA、测试、发布前检查 | 上下文 → 多角色评估 → 报告 |
| **Full pipeline** | 复杂或模糊请求 | 设计 → 计划 → 构建 → 评估 → 交付 |

---

## 👥 内置角色

### 产品
- **PM** — 需求、用户价值、范围、优先级
- **Designer** — 交互设计、信息架构、视觉系统、可访问性

### 用户视角
- **New User** — 首次印象、入职体验、设置摩擦、信任信号
- **Active User** — 工作流效率、高级功能、规模行为
- **Churned User** — 回归体验、变更沟通、召回信号

### 工程
- **Frontend** — 组件架构、框架模式、性能、i18n、类型安全
- **Backend** — API 设计、数据库、认证、输入验证
- **DevOps** — CI/CD、容器、部署、密钥、监控

### 质量
- **Security** — 漏洞（OWASP）、依赖审计、密钥安全
- **Tester** — 边界用例、状态覆盖、回归风险
- **Compliance** — GDPR/CCPA、WCAG、许可证兼容性

---

## 🎨 自定义角色

在 `roles/` 目录添加 `.md` 文件即可创建自定义角色，无需配置。

---

## 📊 可视化报告

OPC 会将结构化报告保存到 `~/.opc/reports/`。

```bash
npx @touchskyer/opc-viewer
```

或使用 `/opc replay` 在 Claude Code 中打开查看器。

---

## 📄 许可证

MIT
