# Maddy

A personal mathematics journal by RIMO, published with [GitHub Pages](https://rimoooliii.github.io/Maddy/).

Maddy publishes concepts, proofs, problems, and working notes. Articles are stored as Markdown, mathematical notation uses LaTeX, and pushes to `main` are checked and deployed by GitHub Actions.

## Local preview

Requires Node.js 24.

```text
npm ci
npm run dev
```

Run before publishing:

```text
npm run check
npm run build
```

`npm run check` runs the stop-slop prose gate before Astro's type checks. New and revised articles also require the manual review in the [publishing guide](docs/ARTICLE_PUBLISHING_GUIDE.zh-CN.md#固定写作规约stop-slop). `AGENTS.md` applies the same rule to future automated writing tools.

## Publish an article

Create a Markdown file in `src/content/articles/`:

```md
---
title: "Article title"
description: "State the mathematical question in one sentence."
date: 2026-08-12
author: RIMO
language: en
kind: concept
topics: [Analysis]
tags: [limits]
series: "The language of analysis"
level: Beginner
prerequisites: [Functions]
sources: []
draft: false
---

Start the article here. Write inline mathematics as $f(x)$ and display mathematics as:

$$
\lim_{x\to a}f(x)=f(a).
$$
```

`kind` accepts `concept`, `proof`, `problem`, or `note`. `level` accepts `Beginner`, `Intermediate`, or `Advanced`. Set `draft` to `true` to keep the article out of the public build.

The detailed publishing rules remain in the [publishing guide](docs/ARTICLE_PUBLISHING_GUIDE.zh-CN.md).

## Deployment

`.github/workflows/pages.yml` builds and deploys `dist/` after each push to `main`. In repository Settings → Pages, Source must be set to **GitHub Actions**.
