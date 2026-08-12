---
title: "Continuity Without Smoothness"
description: "Continuity controls function values. Differentiability asks for a stable linear approximation at smaller and smaller scales."
date: 2026-08-12
author: RIMO
language: en
kind: concept
topics: [Analysis]
tags: [continuity, derivative, local linearity]
series: "The language of analysis"
level: Beginner
prerequisites: [Functions, Informal limits]
sources: []
featured: true
draft: false
---

A curve can remain unbroken and still have no tangent. The absolute value function gives the smallest useful example:

$$
f(x)=|x|.
$$

It is continuous at $x=0$ because $|x|\to 0$ as $x\to 0$. Its difference quotient, however, approaches two different values:

$$
\lim_{h\to 0^-}\frac{|h|-0}{h}=-1,
\qquad
\lim_{h\to 0^+}\frac{|h|-0}{h}=1.
$$

The graph reaches the origin from both sides, but its slopes do not agree there.

## The extra demand in a derivative

Continuity of $f$ at $a$ means

$$
\lim_{x\to a} f(x)=f(a).
$$

Differentiability asks for a number $L$ such that

$$
f(a+h)=f(a)+Lh+o(h).
$$

The error must shrink faster than $h$. Continuity only requires the error $f(a+h)-f(a)$ to approach zero. That difference in scale is where local linearity enters.

> Zooming in on a continuous graph keeps nearby values close. Zooming in on a differentiable graph eventually produces a line.

## Failure at every point

The absolute value function fails at one point. A Weierstrass function can fail everywhere. For suitable constants $0<a<1$ and odd integer $b$, the series

$$
W(x)=\sum_{n=0}^{\infty}a^n\cos(b^n\pi x)
$$

defines a function that is continuous at every point and differentiable at none. Each term is smooth. The frequencies increase so quickly that no scale settles into a stable tangent.

## The implication

Differentiability implies continuity because $Lh+o(h)$ tends to zero with $h$. The absolute value function blocks the converse. The Weierstrass function shows that the failure can persist across the entire domain.
