---
title: "Linearity of Expectation Needs No Independence"
description: "A direct calculation from the joint distribution shows why expectation stays linear even when random variables depend on each other."
date: 2026-08-08
author: RIMO
language: en
kind: concept
topics: [Probability]
tags: [expectation, linearity, independence]
series: "Scales of probability"
level: Beginner
prerequisites: [Random variables, Finite sums]
sources: []
draft: false
---

For integrable random variables $X,Y$ and constants $a,b$,

$$
\mathbb{E}[aX+bY]=a\mathbb{E}[X]+b\mathbb{E}[Y].
$$

No independence assumption appears. Expectation is a weighted sum or integral, and those operations are linear.

## Direct calculation

In the discrete case, start from the joint distribution:

$$
\begin{aligned}
\mathbb E[X+Y]
&=\sum_x\sum_y (x+y)\,\mathbb P(X=x,Y=y)\\
&=\sum_x x\,\mathbb P(X=x)+\sum_y y\,\mathbb P(Y=y)\\
&=\mathbb E[X]+\mathbb E[Y].
\end{aligned}
$$

The calculation never factors a joint probability into a product of marginal probabilities. Dependence between $X$ and $Y$ therefore causes no obstruction.

## Where independence enters

Products behave differently. Independence allows

$$
\mathbb E[XY]=\mathbb E[X]\mathbb E[Y].
$$

This distinction appears in the variance of a sum:

$$
\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)+2\operatorname{Cov}(X,Y).
$$

The covariance term vanishes when $X$ and $Y$ are independent, and more generally whenever they are uncorrelated. Linearity of expectation holds before either condition is imposed.
