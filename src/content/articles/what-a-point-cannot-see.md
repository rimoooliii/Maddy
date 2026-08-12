---
title: "What a Point Cannot See"
description: "A single tangency forces a change in what we mean by geometric space, leading from polynomial zero sets to spectra, nilpotents, infinitesimal probes, and families over a base."
date: 2026-08-12
author: RIMO
language: en
kind: concept
topics: [Algebraic Geometry, Algebra, Geometry]
tags: [schemes, varieties, spectrum, nilpotents, tangent spaces, fiber products]
series: "Foundations of algebraic geometry"
level: Advanced
prerequisites: [Commutative rings and ideals, Localization, Affine varieties, Tensor products]
sources:
  - label: "The Stacks Project, The spectrum of a ring"
    url: "https://stacks.math.columbia.edu/tag/00DY"
  - label: "The Stacks Project, Affine schemes"
    url: "https://stacks.math.columbia.edu/tag/01HU"
  - label: "The Stacks Project, The category of affine schemes"
    url: "https://stacks.math.columbia.edu/tag/01HX"
  - label: "The Stacks Project, Points of schemes"
    url: "https://stacks.math.columbia.edu/tag/01J5"
  - label: "The Stacks Project, Tangent spaces"
    url: "https://stacks.math.columbia.edu/tag/0B28"
  - label: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry"
    url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922publici.pdf"
featured: true
draft: false
---

In the affine plane over a field $k$, place the line

$$
L=V(y)
$$

against the parabola

$$
P=V(y-x^2).
$$

Their common zero set contains one point, the origin. If geometry means only a set of solutions, the intersection is indistinguishable from the intersection of $L$ with the diagonal line $D=V(y-x)$. Both pictures return the same answer:

$$
L\cap P=\{(0,0)\}=L\cap D.
$$

The pictures do not look the same. The diagonal crosses the horizontal axis. The parabola touches it and turns back. Bézout's theorem also insists on a difference: a line and a conic in the projective plane meet with total multiplicity two, once components at infinity have been accounted for. At the origin, the tangent intersection must count twice.[^bezout]

The coordinate rings recover what the point set erased. The scheme-theoretic intersections are fiber products over the affine plane, so their coordinate rings are tensor products. Concretely,

$$
\begin{aligned}
\mathcal O(L\cap P)
&=k[x,y]/(y,y-x^2)\\
&\cong k[x]/(x^2),
\end{aligned}
$$

whereas

$$
\mathcal O(L\cap D)
=k[x,y]/(y,y-x)
\cong k.
$$

The first quotient is a two-dimensional $k$-vector space with basis $1,x$. The second has dimension one. The element $x$ in $k[x]/(x^2)$ is nonzero but satisfies $x^2=0$. This nilpotent is the algebraic residue of tangency.

One point has carried two different intersections. The rest of scheme theory can be read as a disciplined response to that fact.

## Point sets discard the ideal

Let $k$ be algebraically closed and write $A=k[x_1,\ldots,x_n]$. Classical affine algebraic geometry attaches to an ideal $I\subset A$ its zero set

$$
V(I)=\{a\in k^n:f(a)=0\text{ for every }f\in I\}.
$$

Hilbert's Nullstellensatz says that the polynomials vanishing on this set form the radical ideal

$$
I(V(I))=\sqrt I.
$$

This is the exact location of the loss. The operation $I\mapsto V(I)$ cannot distinguish $I$ from $\sqrt I$. In one variable,

$$
V(x)=V(x^2)=\{0\},
$$

although the quotients $k[x]/(x)$ and $k[x]/(x^2)$ are different rings. Passing from an ideal to its zero set silently replaces every algebraic space by its reduced version.

For many questions that replacement is harmless. The underlying curve remains visible, irreducible components can still be found, and rational functions on a reduced variety behave as expected. Intersection multiplicity is not one of those questions. Nor are tangent directions, first-order deformations, ramification, singularity structure, or limits in moduli problems. Each of them depends on information that can live inside nilpotents or nonradical ideals.

The lesson is narrower than the slogan that points are bad. Ordinary points answer ordinary incidence questions perfectly well. The failure appears when a geometric question asks how a subspace sits inside an ambient space, how two spaces meet, or how an object changes to first order. A set records membership. It does not record thickness.

For the tangent intersection above, the quotient $k[x]/(x^2)$ is an Artinian local ring. Its only prime ideal is $(x)$, so its spectrum has one underlying point. Its length as a module over itself is two. Under suitable hypotheses, this length is precisely the local intersection multiplicity.[^length] The multiplicity is therefore not an extra number pasted onto the point after the geometry is built. It is already present in the local algebra of the intersection.

## Turning a ring into a space

Retaining the quotient ring suggests reversing the usual order. Instead of starting with a set of points and then asking which functions live on it, start with a commutative ring $A$ and ask what space it determines.

Maximal ideals are the first candidates for points. If $A=k[x_1,\ldots,x_n]/I$ and $k$ is algebraically closed, the maximal ideal

$$
(x_1-a_1,\ldots,x_n-a_n)
$$

corresponds to the ordinary point $(a_1,\ldots,a_n)$ of $V(I)$. Restricting to maximal ideals would reproduce the classical picture. Scheme theory uses every prime ideal instead:

$$
\operatorname{Spec}A=\{\mathfrak p\subset A:\mathfrak p\text{ is prime}\}.
$$

The choice of prime ideals is forced by the topology one wants. For an ideal $I\subset A$, define

$$
V(I)=\{\mathfrak p\in\operatorname{Spec}A:I\subseteq\mathfrak p\}.
$$

These subsets are the closed sets of the Zariski topology. The identities

$$
V(I)\cup V(J)=V(IJ),
\qquad
\bigcap_\lambda V(I_\lambda)=V\!\left(\sum_\lambda I_\lambda\right)
$$

depend on primality. A prime ideal is exactly the kind of point at which a product can vanish only if one factor vanishes.

Prime ideals also create generic points. Consider $\mathbb A_k^1=\operatorname{Spec}k[t]$ with $k$ algebraically closed. Its closed points are the maximal ideals $(t-a)$. The zero ideal $(0)$ is prime as well. Its closure is all of $\mathbb A_k^1$ because the only closed set containing $(0)$ is $V(0)$. This point represents the whole irreducible line at once. More generally, every irreducible closed subset $V(\mathfrak p)$ has the generic point $\mathfrak p$.[^generic]

At first, a generic point can feel like an unwanted artifact. It becomes useful as soon as one tries to state geometric facts without repeatedly naming dense open subsets. The function field of an integral scheme is the residue field at its generic point. A property that holds at the generic point holds on some dense open neighborhood. Irreducible subvarieties become actual points whose specializations encode containment. The topology has compressed a hierarchy of subspaces into relations among points.

Still, the topological space alone cannot solve the original problem. The spectra of $k$ and $k[\varepsilon]/(\varepsilon^2)$ each consist of one point. Nilpotents lie in every prime ideal, so they are invisible to the underlying space. Something must remember the ring locally.

## The structure sheaf remembers what the topology forgets

For $f\in A$, the standard open subset

$$
D(f)=\{\mathfrak p\in\operatorname{Spec}A:f\notin\mathfrak p\}
$$

is the region where $f$ should be invertible. The appropriate ring of functions on that region is the localization

$$
\mathcal O_{\operatorname{Spec}A}(D(f))=A_f.
$$

An element of $A_f$ looks like $a/f^n$. This is the algebraic version of a regular function whose denominator does not vanish on the chosen open set. The assignments on standard opens glue to a sheaf of rings $\mathcal O_{\operatorname{Spec}A}$, called the structure sheaf. The pair

$$
(\operatorname{Spec}A,\mathcal O_{\operatorname{Spec}A})
$$

is the affine scheme associated with $A$.

The stalk at $\mathfrak p$ is the local ring

$$
\mathcal O_{\operatorname{Spec}A,\mathfrak p}=A_{\mathfrak p}.
$$

It keeps only the behavior visible near $\mathfrak p$: every element outside $\mathfrak p$ becomes invertible. Its maximal ideal $\mathfrak pA_{\mathfrak p}$ records the functions vanishing at the point, while the residue field

$$
\kappa(\mathfrak p)=A_{\mathfrak p}/\mathfrak pA_{\mathfrak p}
$$

records the field over which that point is defined.

This local ring distinguishes the reduced point $\operatorname{Spec}k$ from the doubled point $\operatorname{Spec}k[\varepsilon]/(\varepsilon^2)$. Both have the same topology. Their unique stalks are different: one contains a nonzero nilpotent and one does not. Scheme theory does not ask the point set to carry information it cannot hold. It places the missing information in the rings of local functions.

A scheme is then a locally ringed space covered by affine schemes. The word locally does substantial work. Projective space is not affine, and a smooth projective curve usually has too few global regular functions to reconstruct it from a single ring. It can nevertheless be assembled from affine charts. For example, the projective line glues

$$
\operatorname{Spec}k[t]
\quad\text{and}\quad
\operatorname{Spec}k[s]
$$

along the opens where $t$ and $s$ are invertible, using $s=t^{-1}$. The sheaf condition guarantees that functions agreeing on overlaps glue uniquely. The construction resembles a manifold atlas, but the charts carry rings rather than only coordinate maps.

## Geometry runs opposite to algebra

A ring homomorphism

$$
\varphi:A\longrightarrow B
$$

induces a map

$$
\operatorname{Spec}B\longrightarrow\operatorname{Spec}A,
\qquad
\mathfrak q\longmapsto\varphi^{-1}(\mathfrak q).
$$

The arrow reverses because functions pull back. If a geometric map sends a point of $X$ to a point of $Y$, every function on $Y$ can be composed with that map to produce a function on $X$. Coordinates travel against points.

For affine schemes this reversal is exact:

$$
\operatorname{Hom}_{\mathrm{Sch}}(\operatorname{Spec}B,\operatorname{Spec}A)
\cong
\operatorname{Hom}_{\mathrm{Ring}}(A,B).
$$

Thus the category of affine schemes is equivalent to the opposite of the category of commutative rings.[^opposite] This statement is more than a dictionary. It tells us how to construct geometric operations by performing the corresponding universal operation on rings.

The scheme-theoretic intersection of closed subschemes $V(I)$ and $V(J)$ inside $\operatorname{Spec}A$ is their fiber product. Its coordinate ring is

$$
(A/I)\otimes_A(A/J)\cong A/(I+J).
$$

For the line and parabola, $I=(y)$ and $J=(y-x^2)$, giving $A/(I+J)\cong k[x]/(x^2)$. The nilpotent was not inserted to repair Bézout's theorem. It appeared automatically because fiber products of schemes correspond to tensor products of rings.

The same mechanism defines base change. Given an $R$-algebra $A$ and a ring map $R\to R'$, the affine scheme $X=\operatorname{Spec}A$ changes base by

$$
X_{R'}=X\times_{\operatorname{Spec}R}\operatorname{Spec}R'
=\operatorname{Spec}(A\otimes_RR').
$$

Extension of scalars, formation of fibers, and scheme-theoretic intersection are instances of one construction. This economy is one reason the language scales so well.

## Infinitesimal points detect derivatives

The ring of dual numbers over $k$ is

$$
k[\varepsilon]/(\varepsilon^2).
$$

Its spectrum has one ordinary point and a first-order nilpotent direction. For a polynomial $f\in k[x]$, substitution gives

$$
f(a+v\varepsilon)=f(a)+v f'(a)\varepsilon,
$$

because every term containing $\varepsilon^2$ vanishes. The derivative is the coefficient measured by an infinitesimal thickening.

This calculation has an intrinsic form. Let $X=\operatorname{Spec}A$ and let $x$ be a $k$-point, represented by a homomorphism $x:A\to k$. A tangent vector at $x$ is a lift

$$
\widetilde x:A\longrightarrow k[\varepsilon]/(\varepsilon^2)
$$

whose reduction modulo $\varepsilon$ is $x$. Every lift has the form

$$
\widetilde x(a)=x(a)+D(a)\varepsilon,
$$

and multiplicativity is equivalent to the Leibniz rule

$$
D(ab)=x(a)D(b)+x(b)D(a).
$$

So tangent vectors are derivations from $A$ to $k$, where $A$ acts on $k$ through the point $x$. If $\mathfrak m_x$ is the maximal ideal of the local ring at a rational point, this space is naturally dual to the cotangent space:[^tangent]

$$
T_xX\cong\operatorname{Hom}_k(\mathfrak m_x/\mathfrak m_x^2,k).
$$

The quotient by $\mathfrak m_x^2$ removes terms of order two and higher. Once again, nilpotents are carrying first-order information rather than pathological noise.

The tangent space also detects singularities. For the cusp

$$
C=V(y^2-x^3)\subset\mathbb A_k^2,
$$

the local equation has no linear term at the origin. Hence it imposes no relation in $\mathfrak m/\mathfrak m^2$, and the Zariski tangent space has dimension two. The curve itself has dimension one. The excess tangent dimension marks the singular point. At a smooth point of a curve, the defining equation has a nonzero linear part and cuts the ambient two-dimensional tangent space down to one dimension.

This perspective changes the meaning of a point. A $k$-valued point sees where an object is. A dual-number-valued point sees how it can move to first order. Thicker Artinian test rings see higher jets and deformation data. The object being studied stays fixed; the probes become more sensitive.

## A scheme is determined by all its probes

For a scheme $X$, define its functor of points by

$$
h_X(T)=\operatorname{Hom}(T,X).
$$

If $X=\operatorname{Spec}A$ and $T=\operatorname{Spec}R$, then

$$
X(R)=\operatorname{Hom}_{\mathrm{Ring}}(A,R).
$$

Taking $R=k$ recovers ordinary $k$-points. Taking $R=k[\varepsilon]/(\varepsilon^2)$ recovers points equipped with tangent directions. Taking a general ring $R$ describes families of solutions with coefficients in $R$.

For example, if

$$
X=\operatorname{Spec}k[x,y]/(y^2-x^3-x),
$$

then an $R$-point of $X$ is a pair $(a,b)\in R^2$ satisfying

$$
b^2=a^3+a.
$$

When $R$ contains nilpotents, this equation includes infinitesimal solutions that no field-valued point can display. When $R$ is itself a coordinate ring, an $R$-point is a family parametrized by $\operatorname{Spec}R$.

Yoneda's lemma says that the full functor $h_X$ determines $X$ up to unique isomorphism. There is no loss in replacing a scheme by all maps into it from test schemes. This is the rigorous form of the claim that geometry should be understood through its probes.

The shift is easy to understate. Classical geometry often treats points as primitive and functions as measurements performed on them. The functor-of-points view treats a point as a map from a test object. Changing the test object changes the resolution. A field detects location, the dual numbers detect velocity, and a parameter scheme detects a family. The word point survives, but it no longer means only an element of an underlying set.

## The base is part of the geometry

Varieties are usually defined over a field. Schemes can be defined over any commutative ring, and every scheme $X$ comes with a canonical morphism

$$
X\longrightarrow\operatorname{Spec}\mathbb Z.
$$

This follows from the unique ring homomorphism $\mathbb Z\to\Gamma(U,\mathcal O_X)$ on every affine chart. The spectrum of $\mathbb Z$ contains a generic point $(0)$ and one closed point $(p)$ for each prime number. A scheme of finite type over $\mathbb Z$ packages characteristic zero and all positive characteristics into one geometric object.

Consider

$$
X=\operatorname{Spec}\mathbb Z[x,y]/(x^2+y^2-1).
$$

Its fiber over a prime $p$ is obtained by tensoring with $\mathbb F_p$:

$$
X_p=\operatorname{Spec}\mathbb F_p[x,y]/(x^2+y^2-1).
$$

For odd $p$, this is the familiar affine conic. Over $p=2$, the equation becomes

$$
x^2+y^2-1=(x+y+1)^2.
$$

The fiber is a doubled line, hence nonreduced. The bad reduction at $2$ is not an exception stored outside the family. It is a geometric feature of the morphism $X\to\operatorname{Spec}\mathbb Z$.

This example explains why a base scheme should remain visible in the notation. A morphism $X\to S$ is a family whose fibers vary over points of $S$. Base change pulls the family to a new parameter space. Flatness controls whether algebraic data vary without sudden jumps. Smoothness identifies fibers that behave like nonsingular varieties in families. Properness supplies the algebraic analogue of compactness and has strong stability under base change. These properties belong to morphisms because the same total space can behave differently over different bases.

Arithmetic geometry lives inside this relative viewpoint. Solutions over $\mathbb Q$, reductions modulo $p$, integral models, and ramification can be compared through one scheme over $\operatorname{Spec}\mathbb Z$. Geometry and arithmetic are not merged by metaphor. They are connected by the fibers of a morphism.

## What was gained, and what it costs

The path from the tangent line and parabola to schemes has a consistent direction. The point set forgot the nonradical ideal, so the quotient ring had to remain. The ring produced a spectrum with prime ideals, but the spectrum forgot nilpotents, so it needed a structure sheaf. Ring maps reversed into geometric maps, making tensor products into fiber products. Nilpotent test rings then recovered tangent vectors, and arbitrary test schemes turned points into families. Allowing general base rings placed geometric fibers of different characteristics in one object.

Each step repairs a specific failure. This matters because scheme theory can otherwise appear to be a sequence of definitions justified only by future theorems. The definitions do have long-range power, but their local motivation is already present in $k[x]/(x^2)$. A doubled point is enough to expose the limits of set-theoretic geometry.

The repair has a cost. A scheme contains nonclosed points that resist naive visualization. Two schemes can share an underlying topological space and differ only in their sheaves. Morphisms must respect local rings, not merely continuous maps. Global questions are often answered by moving repeatedly between affine charts, localizations, stalks, and gluing data.

Those complications are not uniformly useful. If a problem asks only for the shape of a smooth complex curve, the language of Riemann surfaces may show more and demand less. If the problem involves multiplicity, degeneration, arithmetic variation, or moduli, discarding scheme structure creates extra bookkeeping and eventually breaks functoriality.

The practical question is therefore not whether every geometric picture should be replaced by a spectrum. It is which distinctions the problem must preserve. In the opening intersection, the distinction is contact order. A single ordinary point cannot preserve it. The doubled point can.

That is the main thread: a geometric space is not exhausted by where its points are. Its local functions record how subspaces sit, its nilpotents record infinitesimal thickness, and its maps from other schemes record how it behaves under every change of probe. Scheme theory enlarges space just enough to keep those three forms of information in the same object.

[^bezout]: The projective statement counts intersection multiplicities over an algebraically closed field and assumes the curves share no component. In this example the entire multiplicity is concentrated at the affine origin.

[^length]: In a smooth surface, two curves meeting properly at an isolated point have local intersection number given by the length of the quotient of the local ring by their two equations. Excess intersections require a more refined treatment.

[^generic]: Generic does not mean typical in a probabilistic sense. The point lies in every nonempty open subset of its irreducible closure and packages statements valid on some dense open set.

[^opposite]: The equivalence concerns affine schemes. General schemes require gluing affine pieces, so there is no single global ring whose spectrum recovers every scheme.

[^tangent]: For a non-rational point, the same construction uses its residue field $\kappa(x)$; the tangent space is the $\kappa(x)$-dual of $\mathfrak m_x/\mathfrak m_x^2$.
