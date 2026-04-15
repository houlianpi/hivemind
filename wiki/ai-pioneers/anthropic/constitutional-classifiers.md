---
sidebar_position: 9
---

# Constitutional Classifiers

> 来源: [Anthropic Research](https://www.anthropic.com/research/constitutional-classifiers)

## 目标

防御通用越狱攻击（超长 prompt、奇怪大小写、编码绕过、角色扮演）

## 方法

1. 定义宪法（允许/禁止的内容类别）
2. 用 Claude 生成大量合成数据
3. 多语言翻译 + 模拟已知越狱风格
4. 训练输入/输出分类器

## 性能

| 配置 | 越狱成功率 |
|------|-----------|
| 无防护 Claude | 86% |
| Constitutional Classifiers | **4.4%** |

误拒率仅增加 0.38%，计算开销 +23.7%

## 公开 Demo 结果

339 人尝试，300,000+ 对话，3,700 小时红队

第 5 天前无人通过全部 8 关，最终 1 人找到通用越狱（$20K 奖金）

## 有效攻击策略

密码编码、角色扮演、关键词替换、Prompt 注入

> "Jailbreak robustness is a key safety requirement to protect against CBRN risks as models become more capable."
