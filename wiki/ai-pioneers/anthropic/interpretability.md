---
sidebar_position: 7
---

# Mapping the Mind of a Large Language Model

> 来源: [Anthropic Research](https://www.anthropic.com/research/mapping-mind-language-model)

## 突破

首次从生产级大模型（Claude 3 Sonnet）中提取**数百万个概念特征**

## 方法：Dictionary Learning

```
字母 → 组成单词 → 组成句子
神经元 → 组成特征 → 组成内部状态
```

## 发现的特征

**实体**: 城市、人物、元素、学科、编程语法

**抽象概念**: 代码 bug、职业性别偏见、保守秘密

**多模态+多语言**: "金门大桥"特征同时响应英文、日语、中文、图片

## 概念地图

空间距离 = 语义相似度

"金门大桥"附近：恶魔岛、金州勇士、1906 地震、《迷魂记》

## 操纵实验

放大"金门大桥"特征 → Claude 声称自己是金门大桥

激活"诈骗邮件"特征 → 克服安全训练生成诈骗邮件

## 安全应用前景

监控危险行为、引导去偏见、移除危险主题、增强其他安全方法

> "This is the first ever detailed look inside a modern, production-grade large language model."
