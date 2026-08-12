---
title: "What an Isomorphism Lets Us Forget"
description: "An isomorphism identifies objects only with respect to a chosen structure. Adding distance, topology, or multiplication changes the question."
date: 2026-08-05
author: RIMO
language: en
kind: note
topics: [Algebra]
tags: [isomorphism, structure, vector spaces]
series: "Algebraic structure"
level: Intermediate
prerequisites: [Maps, Vector spaces]
sources: []
draft: false
---

Every $n$-dimensional real vector space is isomorphic to $\mathbb R^n$. Its elements may look nothing like coordinate tuples. After choosing a basis, however, vector addition and scalar multiplication correspond exactly.

## Three requirements

A linear map $T:V\to W$ is an isomorphism when it satisfies three conditions:

1. $T$ preserves addition and scalar multiplication.
2. $T$ is injective, so distinct vectors remain distinct.
3. $T$ is surjective, so every vector in $W$ has a preimage.

These conditions give $T$ an inverse that also preserves linear structure. Any statement expressed purely in the language of vector spaces survives transport through $T$.

## The structure matters

Two spaces may be isomorphic as vector spaces while carrying different additional data. A linear isomorphism need not preserve distance, open sets, or multiplication. Requiring those features leads to narrower notions such as isometry, homeomorphism, or algebra isomorphism.

An isomorphism therefore comes with an implicit question: isomorphic as what kind of object? The answer specifies exactly which distinctions the map is allowed to erase.
