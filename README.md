# Maddy

RIMO 的个人数学学习与写作网站，发布于 [GitHub Pages](https://rimoooliii.github.io/Maddy/)。

Maddy 以问题为入口，记录概念直觉、严格定义、证明关节、例题策略和学习反思。文章使用 Markdown 保存，公式使用标准 LaTeX 语法，推送到 `main` 后由 GitHub Actions 自动检查、构建与发布。

## 本地预览

需要 Node.js 24。

```text
npm ci
npm run dev
```

发布前检查：

```text
npm run check
npm run build
```

`npm run check` 会先运行 stop-slop 文风检查，再进行 Astro 类型检查。新增或修改文章时，还必须按[文章发布指南](docs/ARTICLE_PUBLISHING_GUIDE.zh-CN.md#固定写作规约stop-slop)完成人工复核；仓库的 `AGENTS.md` 会向后续自动化写作工具重复这项要求。

## 发布新文章

在 `src/content/articles/` 新建一个 Markdown 文件：

```md
---
title: "文章标题"
description: "用一句话说明本文解决的问题。"
date: 2026-08-12
author: RIMO
language: zh-CN
kind: concept
topics: [分析]
tags: [极限]
series: "分析的语言"
level: 入门
prerequisites: [函数]
sources: []
draft: false
---

正文从这里开始。行内公式写作 $f(x)$，展示公式写作：

$$
\lim_{x\to a}f(x)=f(a).
$$
```

`kind` 可选 `concept`、`proof`、`problem`、`note`；`level` 可选 `入门`、`进阶`、`专题`。将 `draft` 设为 `true` 可保留原稿而不公开。

更完整的中文说明见 [文章发布指南](docs/ARTICLE_PUBLISHING_GUIDE.zh-CN.md)。

## 部署

`.github/workflows/pages.yml` 会在每次推送到 `main` 时构建并部署 `dist/`。仓库 Settings → Pages 的 Source 应选择 **GitHub Actions**。
