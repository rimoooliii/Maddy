---
title: "The Pigeonhole Principle as a Proof Machine"
description: "When objects outnumber available classes, repetition becomes unavoidable. The hard part is choosing the classes."
date: 2026-08-10
author: RIMO
language: en
kind: proof
topics: [Combinatorics]
tags: [pigeonhole principle, existence, contradiction]
series: "Discrete arguments"
level: Beginner
prerequisites: [Finite sets]
sources: []
draft: false
---

Put $n+1$ objects into $n$ boxes. At least one box contains two objects.

Assume instead that every box contains at most one object. Then the boxes hold at most $n$ objects in total, contradicting the original count. This one-line argument proves existence without identifying the repeated pair.

Most applications hide the boxes. Solving the problem means finding a classification with fewer classes than objects.

## A geometric example

Choose five points inside a square of side length $2$. At least two of them are no more than $\sqrt{2}$ apart.

Divide the square into four unit squares. Five points occupy four regions, so two points lie in the same unit square. Their distance cannot exceed that square's diagonal:

$$
\sqrt{1^2+1^2}=\sqrt{2}.
$$

The points are the objects. The four unit squares are the boxes. Once that classification is in place, the distance bound follows from the geometry of a single box.

## Finding the boxes

For a claim of the form “at least two objects share a property,” check four things:

1. Which objects are being counted?
2. Which shared feature can define a class?
3. Can the number of classes be bounded sharply?
4. Does membership in one class imply the required relation?

The principle contributes the contradiction. The choice of classes contributes the mathematics.
