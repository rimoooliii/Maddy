---
title: "期望的线性，为什么不需要独立？"
description: "从有限求和直接推出期望的线性，并分清它与方差公式中独立性真正出现的位置。"
date: 2026-08-08
author: RIMO
language: zh-CN
kind: concept
topics: [概率]
tags: [期望, 线性, 独立性]
series: "概率的尺度"
level: 入门
prerequisites: [随机变量, 有限求和]
sources: []
draft: false
---

对任意可积随机变量 $X,Y$ 和常数 $a,b$，总有

$$
\mathbb{E}[aX+bY]=a\mathbb{E}[X]+b\mathbb{E}[Y].
$$

这里不需要 $X$ 与 $Y$ 独立。原因是期望本质上是加权求和（或积分），而求和本身就是线性的。

## 离散情形

对联合分布直接计算：

$$
\begin{aligned}
\mathbb E[X+Y]
&=\sum_x\sum_y (x+y)\,\mathbb P(X=x,Y=y)\\
&=\sum_x x\,\mathbb P(X=x)+\sum_y y\,\mathbb P(Y=y)\\
&=\mathbb E[X]+\mathbb E[Y].
\end{aligned}
$$

整个推导没有把联合概率拆成边缘概率的乘积，所以没有使用独立性。

## 独立性在哪里有用

当我们计算乘积时，独立性才允许

$$
\mathbb E[XY]=\mathbb E[X]\mathbb E[Y].
$$

因此方差满足

$$
\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)+2\operatorname{Cov}(X,Y),
$$

只有在协方差为零时，最后一项才消失。把期望与方差的规则分开，是避免误用独立性的第一步。
