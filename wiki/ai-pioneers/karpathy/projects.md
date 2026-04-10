---
title: Karpathy 开源项目
sidebar_label: 开源项目
---

# Karpathy 开源项目

## 核心项目

### micrograd

> ~100 行实现自动微分引擎

- GitHub: github.com/karpathy/micrograd
- 视频: 2.5 小时讲解 (YouTube)

功能: 标量级自动微分（反向传播）、动态计算图、迷你神经网络库

学习价值：理解反向传播的数学本质。

---

### nanoGPT

> 最小化 GPT 训练代码

- GitHub: github.com/karpathy/nanoGPT

功能: 从头训练 GPT-2、支持 finetune、~300 行核心代码

学习价值：理解 GPT 训练的完整流程。

---

### microgpt

> 200 行纯 Python 零依赖 GPT

- GitHub Gist: gist.github.com/karpathy/8627fe009c40f57531cb18360106ce95

特点: 不依赖 PyTorch/NumPy、包含完整 autograd 引擎、Transformer 架构、Adam 优化器

学习价值：看到 LLM 的算法本质。

---

### char-rnn

> 字符级 RNN 语言模型

- GitHub: github.com/karpathy/char-rnn

功能: 学习任意文本的字符级模式、生成类似风格的新文本

经典实验: 莎士比亚风格生成、Linux 内核代码生成、LaTeX 论文生成

---

### reinforcejs

> JavaScript 强化学习库

- GitHub: github.com/karpathy/reinforcejs
- Demo: cs.stanford.edu/people/karpathy/reinforcejs/

功能: 浏览器内运行 RL、可视化 Q-learning/Policy Gradient、交互式 Demo

---

### ConvNetJS

> 浏览器内深度学习

- GitHub: github.com/karpathy/convnetjs
- Demo: cs.stanford.edu/people/karpathy/convnetjs/

功能: 纯 JavaScript CNN、浏览器内训练、多种交互式 Demo

衍生项目: tsnejs (t-SNE 可视化)、recurrentjs (RNN/LSTM)

---

### ulogme

> 隐私优先的生产力追踪器

- GitHub: github.com/karpathy/ulogme

功能: 追踪活动窗口和键盘输入、本地存储（不上传云端）、生成 HTML 可视化报告

背景：Karpathy 不喜欢 RescueTime 上传数据到云端，所以自己写了一个。

---

## 项目哲学

极简原则:
- 教学: 用最少代码实现核心
- 理解: 从零写一遍
- 验证: 跑通再加复杂度

语言选择:
- Python: 核心 ML 项目
- JavaScript: 交互式 Demo、可视化
- Lua/Torch: 早期项目（现已过时）

代码风格:
- 单文件优先
- 最少依赖
- 大量注释
- 配套视频/博客讲解

---

## 学习路径建议

1. micrograd → 理解反向传播
2. char-rnn → 理解 RNN 和语言模型
3. nanoGPT → 理解 Transformer
4. microgpt → 看到一切的本质

每个项目都值得从头读一遍代码。

---

*最后更新: 2026-04-10*
