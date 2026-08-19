---
title: "Why the Dynkin List Ends"
description: "A proof-driven route from simple roots to the finite Dynkin diagrams, using positive-definite Cartan forms, spectral radius, Schur complements, and a determinant recurrence to explain both the infinite families and the exceptional cases."
date: 2026-08-19
author: RIMO
language: en
kind: proof
topics: [Lie Theory, Algebra, Geometry]
tags: [Dynkin diagrams, root systems, Cartan matrices, ADE classification, Lie algebras, Weyl groups]
series: "Structure and classification"
level: Advanced
prerequisites: [Linear algebra, Inner product spaces, Basic group theory, Eigenvalues and positive-definite matrices]
sources:
  - label: "Pavel Etingof, MIT 18.745 Lecture 23: Dynkin Diagrams"
    url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/resources/mit18_745_f20_lec23_pdf/"
  - label: "David A. Vogan Jr., Classification of Root Systems"
    url: "https://math.mit.edu/~dav/roots.pdf"
  - label: "Pavel Etingof, Lie Groups and Lie Algebras I"
    url: "https://math.mit.edu/~etingof/lnlg.pdf"
  - label: "E. B. Dynkin, The structure of semi-simple algebras (1947)"
    url: "https://www.mathnet.ru/php/archive.phtml?jrnid=rm&option_lang=eng&paperid=6968&wshow=paper"
  - label: "Encyclopedia of Mathematics, Root system"
    url: "https://encyclopediaofmath.org/wiki/Root_system"
  - label: "Fomin and Zelevinsky, Cluster algebras II: Finite type classification"
    url: "https://arxiv.org/abs/math/0208229"
featured: true
start_here: false
draft: false
---

Take a connected graph, put $2$ on the diagonal of its matrix, and put a negative integer across each edge. Most such matrices do not describe a finite root system. A cycle already fails. A vertex with four neighbors fails. A long enough three-armed tree fails. One extra vertex attached to $E_8$ fails.

The surviving connected diagrams are

```text
A_n   o─o─o─ ··· ─o

B_n   o─o─o─ ··· ─o=>o       C_n   o─o─o─ ··· ─o<=o

D_n   o─o─ ··· ─o─o
                  |
                  o

E_6       o          E_7       o          E_8       o
          |                    |                    |
      o─o─o─o─o            o─o─o─o─o─o        o─o─o─o─o─o─o

F_4   o─o=>o─o               G_2   o==>o
```

This list often appears as a finished chart. The chart hides the real theorem. Finiteness is encoded by a positive-definite quadratic form, and positive definiteness leaves almost no freedom in the graph. The exceptional diagrams occur at the last integer solutions of a strict inequality. Their exceptionality is arithmetic, not ornamental.

The argument below starts from the Cartan matrix of a reduced root system. It then separates the classification into two problems. First, prove that no other connected diagrams can occur. Second, construct root systems for every diagram that survives. The first problem explains why the list ends. The second proves that the boundary was not drawn too tightly.[^scope]

## Simple roots turn geometry into integers

Let $R$ be a finite reduced root system in a Euclidean space $V$. Choose a positive system and let

$$
\Delta=\{\alpha_1,\ldots,\alpha_r\}
$$

be its simple roots. They form a basis of $V$. The reflection in the hyperplane perpendicular to $\alpha_i$ is

$$
s_i(v)=v-\frac{2(v,\alpha_i)}{(\alpha_i,\alpha_i)}\alpha_i.
$$

The crystallographic condition says that the coefficients

$$
a_{ij}=\left\langle \alpha_j,\alpha_i^\vee\right\rangle
=\frac{2(\alpha_i,\alpha_j)}{(\alpha_i,\alpha_i)}
$$

are integers. The matrix $A=(a_{ij})$ is the Cartan matrix. Simple roots meet at right or obtuse angles, so

$$
a_{ii}=2,
\qquad
a_{ij}\in\mathbb Z_{\le 0}\quad(i\ne j),
\qquad
a_{ij}=0\iff a_{ji}=0.
$$

For distinct $i,j$, multiply the two off-diagonal entries:

$$
a_{ij}a_{ji}
=4\frac{(\alpha_i,\alpha_j)^2}
{(\alpha_i,\alpha_i)(\alpha_j,\alpha_j)}
=4\cos^2\theta_{ij}.
$$

The simple roots are linearly independent, hence $|\cos\theta_{ij}|<1$. The product is a nonnegative integer below $4$. Only four values remain:

$$
a_{ij}a_{ji}\in\{0,1,2,3\}.
$$

This rank-two calculation creates the graphical alphabet. A product of $0$ means no edge, $1$ a single edge, $2$ a double edge, and $3$ a triple edge. When the product is $2$ or $3$, the arrow points toward the shorter root. The possibilities correspond to angles

$$
\frac{\pi}{2},\quad \frac{2\pi}{3},\quad
\frac{3\pi}{4},\quad \frac{5\pi}{6}.
$$

The edge stores more than adjacency. From

$$
(\alpha_i,\alpha_i)a_{ij}
=(\alpha_j,\alpha_j)a_{ji},
$$

a double edge records a squared-length ratio of $2$, while a triple edge records a ratio of $3$. The arrow is therefore part of the Cartan matrix, not a typographical cue.

A disconnected diagram splits $\Delta$ into mutually orthogonal subsets. Reflections generated in one component fix every root in the others, so the whole root system is an orthogonal union. Classification reduces to connected diagrams, which correspond to irreducible root systems.

## The hidden condition is positive definiteness

Set

$$
d_i=(\alpha_i,\alpha_i),
\qquad
D=\operatorname{diag}(d_1,\ldots,d_r).
$$

Then

$$
(DA)_{ij}=2(\alpha_i,\alpha_j).
$$

Thus $DA$ is twice the Gram matrix of the simple roots. It is symmetric and positive definite. This is the constraint that removes nearly every graph.

Two consequences will be used repeatedly.

First, every principal submatrix is positive definite. Deleting vertices from a valid Dynkin diagram must leave another positive-definite diagram, though it may become disconnected. A small forbidden subdiagram therefore rules out every larger graph containing it.

Second, positive definiteness can be tested locally by principal minors or globally by eigenvalues. The MIT lecture uses affine Dynkin diagrams as a catalog of minimal obstructions. Each affine Cartan matrix has a positive null vector, so it is positive semidefinite and cannot sit inside a positive-definite matrix. We can expose the same mechanism without assuming the affine list.

In the simply-laced case all roots have the same length and $A$ is symmetric. If $M$ is the adjacency matrix of the underlying graph, then

$$
A=2I-M.
$$

Since $M$ is real symmetric,

$$
A>0
\quad\Longleftrightarrow\quad
\lambda_{\max}(M)<2.
$$

The root-system classification has become a graph-spectral problem: classify connected graphs whose adjacency spectral radius is less than $2$.[^spectral]

## Spectral radius forces a tree with one branch

A cycle $C_m$ has the constant eigenvector $(1,\ldots,1)$ with eigenvalue $2$. Any graph containing a cycle has spectral radius at least $2$ after passing to a suitable subgraph. A finite simply-laced Dynkin diagram is therefore a tree.

A vertex of degree four contains the star $K_{1,4}$. Label its center by $2$ and each leaf by $1$. The adjacency matrix sends this vector to twice itself, so $K_{1,4}$ also has spectral radius $2$. Every vertex in the tree has degree at most three.

Two trivalent vertices are already too many. Keep the path between them and two extra edges leaving each endpoint. Label the four new leaves by $1$ and every vertex on the connecting path by $2$. At a leaf, the sum of neighboring labels is $2$. At either trivalent vertex it is $1+1+2=4$. At an internal path vertex it is $2+2=4$. In every case the adjacency operator doubles the label. This subgraph has eigenvalue $2$ and violates strict positivity.

A connected simply-laced finite diagram is therefore either a path or a tree with exactly one trivalent vertex. Paths give $A_n$. The entire ADE problem is now concentrated in a three-armed tree.

## One inequality produces (D_n,E_6,E_7,E_8)

Let $T_{a,b,c}$ be a tree with one central trivalent vertex and three arms containing $a,b,c$ vertices away from the center. Assume

$$
1\le a\le b\le c.
$$

Each arm has Cartan matrix of type $A_a$, $A_b$, or $A_c$. For the path matrix

$$
A_m=
\begin{pmatrix}
2&-1&&0\\
-1&2&\ddots&\\
&\ddots&\ddots&-1\\
0&&-1&2
\end{pmatrix},
$$

the determinant recurrence gives

$$
\det A_m=m+1,
$$

and a cofactor calculation gives

$$
(A_m^{-1})_{11}=\frac{m}{m+1}.
$$

Eliminate the three positive-definite arm blocks by a Schur complement. The remaining scalar at the central vertex is

$$
2-\frac{a}{a+1}-\frac{b}{b+1}-\frac{c}{c+1}.
$$

The full Cartan matrix is positive definite exactly when this number is positive. Rearranging yields

$$
\boxed{
\frac{1}{a+1}+\frac{1}{b+1}+\frac{1}{c+1}>1.
}
$$

The classification of simply-laced branching diagrams is now an inequality in three positive integers.

If $a\ge2$, then all three denominators are at least $3$, and the left side is at most $1$. Hence $a=1$.

If $b=1$, the first two terms already sum to $1$, so every $c\ge1$ works. The arm lengths $(1,1,c)$ produce

$$
D_{c+3}.
$$

Suppose $b\ge2$. If $b\ge3$, then

$$
\frac12+\frac14+\frac14=1
$$

is the largest possible value, so strict positivity fails. Therefore $b=2$. The inequality becomes

$$
\frac12+\frac13+\frac{1}{c+1}>1,
$$

which says $c+1<6$. Since $c\ge2$, only

$$
c=2,3,4
$$

survive. Their arm lengths and names are

$$
(1,2,2)=E_6,
\qquad
(1,2,3)=E_7,
\qquad
(1,2,4)=E_8.
$$

This calculation explains the three exceptional subscripts. The rank is one central vertex plus the three arm lengths. It also explains why there is no $E_9$. Extending the long arm of $E_8$ gives $(1,2,5)$, and

$$
\frac12+\frac13+\frac16=1.
$$

The form becomes semidefinite. The extra vertex lands exactly on the affine boundary.

## Affine diagrams sit on the equality wall

The strict inequality separates finite type from its nearest degenerations. Equality in the three-arm test has three solutions, up to order:

$$
(2,2,2),\qquad(1,3,3),\qquad(1,2,5).
$$

They are the branching shapes of $\widetilde E_6,\widetilde E_7,\widetilde E_8$. A cycle gives $\widetilde A$. The tree with two trivalent vertices used above gives $\widetilde D$. In each case a positive labeling $v$ satisfies

$$
Av=0.
$$

For a simply-laced graph this equation reads

$$
2v_i=\sum_{j\sim i}v_j.
$$

Every vertex label is the average of its neighbors. Finite type demands curvature away from this balance: $v^TAv$ must stay positive for every nonzero $v$. Affine type is the first point at which a nonzero direction costs zero. Adding another edge or vertex typically makes the form indefinite and moves into Kac-Moody territory.

The affine diagrams are useful here because they are minimal certificates. Finding one inside a candidate ends the finite-type test immediately. The Schur-complement calculation gives more: it shows the numerical wall that those certificates occupy.

## Multiple edges reduce to a determinant recurrence

The simply-laced argument accounts for $A,D,E$. A double or triple edge requires a symmetrizable, generally nonsymmetric Cartan matrix. The underlying graph is still heavily constrained.

A multiple edge cannot coexist with a trivalent vertex. Take the minimal subtree joining them, keep two one-edge arms at the trivalent vertex, and stop just beyond the multiple edge. Eliminating the two short arms changes the central diagonal from $2$ to

$$
2-\frac12-\frac12=1.
$$

Along the remaining path, the leading determinants stay $1$ across simple edges. Crossing a double edge changes the next determinant to $2\cdot1-2\cdot1=0$; a triple edge makes it negative. Positive definiteness fails. Hence every finite non-simply-laced connected diagram is a path.

There can be only one multiple edge. If a path segment begins and ends with double edges, its determinant is zero: after crossing the first double edge, the relevant consecutive minors remain $2$, and the second produces $2\cdot2-2\cdot2=0$. A triple edge only strengthens the obstruction.

It remains to place one weighted edge in a path. Let

$$
w_i=a_{i,i+1}a_{i+1,i}\in\{1,2,3\}
$$

be the edge product. For the leading $k\times k$ principal minor $\Delta_k$, tridiagonal expansion gives

$$
\Delta_0=1,
\qquad
\Delta_1=2,
\qquad
\Delta_k=2\Delta_{k-1}-w_{k-1}\Delta_{k-2}.
$$

Across simple edges, $w_i=1$ and $\Delta_k=k+1$. Suppose a double edge lies between positions $p$ and $p+1$, with $p$ chosen on the shorter side of the path. At the double edge,

$$
\Delta_{p+1}=2(p+1)-2p=2.
$$

If another vertex follows, then

$$
\Delta_{p+2}=2\cdot2-(p+1)=3-p.
$$

Positivity forces $p\le2$.

For $p=1$, the double edge is at an endpoint. The recurrence remains positive for paths of arbitrary length. The two arrow orientations give the dual families $B_n$ and $C_n$.

For $p=2$, at least two vertices lie on the other side because $p$ was the shorter side. The four-vertex path has successive determinant $1$ at the end and is positive definite. Adding a fifth vertex produces determinant $0$. The sole survivor is $F_4$.

For a triple edge, the crossing determinant is

$$
\Delta_{p+1}=2(p+1)-3p=2-p.
$$

Thus $p=1$, and one more vertex would give determinant zero. The only finite possibility is the two-vertex diagram $G_2$.

The full connected list has now been forced:

$$
A_n,\ B_n,\ C_n,\ D_n,\ E_6,\ E_7,\ E_8,\ F_4,\ G_2.
$$

No case was guessed from a table. Each family marks one way a positive-definite Cartan form can remain on the safe side of a zero principal minor.

## Three candidate diagrams under the test

The proof becomes easier to reuse after seeing it reject concrete candidates.

Start with a pentagon of simple edges. Its Cartan form is

$$
q(x)=x^TAx
=2\sum_{i=1}^5x_i^2-2\sum_{i=1}^5x_ix_{i+1},
$$

where indices are read cyclically. Substituting $x=(1,1,1,1,1)$ gives $q(x)=0$. The candidate is not merely absent from the classification table. Its geometry supplies a direction in the span of the proposed simple roots with zero squared length, contradicting the Euclidean Gram interpretation. This is the affine diagram $\widetilde A_4$.

Next, extend the long arm of $E_8$ by one vertex. The arm lengths change from $(1,2,4)$ to $(1,2,5)$. The Schur complement changes from

$$
\frac12+\frac13+\frac15-1=\frac1{30}>0
$$

to

$$
\frac12+\frac13+\frac16-1=0.
$$

The margin is only $1/30$ before extension. This quantifies how close $E_8$ lies to the affine wall. Extending any arm further makes the central Schur complement negative, so the resulting generalized Cartan matrix is indefinite.

Finally, take a six-vertex path with one double edge between the third and fourth vertices. Starting from the left, the first three leading minors are

$$
2,\ 3,\ 4.
$$

Crossing the double edge gives $2$. The next simple edge gives

$$
2\cdot2-4=0.
$$

The candidate fails before the sixth vertex is even included. Moving the double edge one step toward the end leaves a four-vertex positive diagram, $F_4$, but a fifth vertex again produces zero. Moving it all the way to an endpoint produces the unbounded $B_n/C_n$ families. Position, rather than rank alone, controls the determinant.

These tests also show why checking only $2\times2$ submatrices is insufficient. Every edge can satisfy the rank-two angle rule while the assembled diagram has a null or negative direction. Local integrality creates the allowed bonds; global positive definiteness decides whether they can coexist.

## Why (B_n) and (C_n) share a graph

Reversing every arrow replaces $A$ by $A^T$. On roots, this operation passes to the dual root system

$$
R^\vee=\{\alpha^\vee:\alpha\in R\}.
$$

The types $B_n$ and $C_n$ are dual. In the standard coordinates,

$$
B_n=\{\pm e_i,\ \pm e_i\pm e_j\},
$$

while

$$
C_n=\{\pm2e_i,\ \pm e_i\pm e_j\}.
$$

Their unoriented graphs agree, but the short and long roots exchange roles. This distinction disappears in rank two because flipping the double-edged diagram also relabels its two vertices, giving $B_2\cong C_2$ as root systems.

Folding makes the non-simply-laced list less accidental. Diagram automorphisms identify vertices in simply-laced systems:

```text
A_{2n-1}  folds to  C_n
D_{n+1}   folds to  B_n
E_6       folds to  F_4
D_4       folds by triality to  G_2
```

An orbit of two or three simple roots becomes one vertex, and the collapsed adjacency becomes a double or triple edge. Folding constructs the right diagrams and explains the root-length ratios. The determinant proof above is still needed for exhaustion: it shows that no unrelated weighted path escaped the folding picture.

## Existence is a separate half of the theorem

Excluding all other matrices does not produce roots for the survivors. The classical families have direct coordinate models. In an orthonormal basis $e_1,\ldots,e_m$:

$$
\begin{aligned}
A_n&=\{e_i-e_j:i\ne j\}\subset\left\{x\in\mathbb R^{n+1}:\sum x_i=0\right\},\\
B_n&=\{\pm e_i,\ \pm e_i\pm e_j\}\subset\mathbb R^n,\\
C_n&=\{\pm2e_i,\ \pm e_i\pm e_j\}\subset\mathbb R^n,\\
D_n&=\{\pm e_i\pm e_j\}\subset\mathbb R^n.
\end{aligned}
$$

Checking reflection invariance and the crystallographic integers is direct. Suitable choices of simple roots recover the required Cartan matrices.

The exceptional systems need more deliberate coordinates. The MIT lecture constructs $F_4$ in $\mathbb R^4$ by taking

$$
\{\pm e_i,\ \pm e_i\pm e_j\}
$$

together with all sixteen half-sum vectors

$$
\frac12(\pm e_1\pm e_2\pm e_3\pm e_4).
$$

There are $48$ roots. Two squared lengths occur, in ratio $2$, and an appropriate simple system has the Cartan matrix of $F_4$.

The $E_8$ construction begins with the $112$ roots $\pm e_i\pm e_j$ of $D_8$ and adds the $128$ vectors

$$
\frac12(\pm e_1\pm\cdots\pm e_8)
$$

having an even number of minus signs. The result has $240$ roots, all of squared length $2$. Selecting the first seven or six simple roots in the lecture's $E_8$ basis gives $E_7$ and $E_6$, with $126$ and $72$ roots.

The associated complex simple Lie algebra has a one-dimensional root space for every root and a Cartan subalgebra whose dimension is the rank. This gives the exceptional dimensions

$$
\dim\mathfrak g_2=14,
\quad
\dim\mathfrak f_4=52,
\quad
\dim\mathfrak e_6=78,
\quad
\dim\mathfrak e_7=133,
\quad
\dim\mathfrak e_8=248.
$$

The number $248$ is therefore $240+8$, not a mysterious label attached after classification.

## What the diagram determines

For a connected diagram, the Cartan entries determine every angle between simple roots and every adjacent squared-length ratio. Connectivity propagates those ratios through the graph, leaving only a common scale. The Gram matrix of the simple roots is fixed up to that scale.

Reflections in the simple roots then generate the Weyl group, and the Weyl orbit of the simple roots recovers the full root system. A finite-type Cartan matrix therefore determines a reduced irreducible root system uniquely up to isomorphism.

The pairwise products also determine the Coxeter exponents. For $i\ne j$,

$$
(s_is_j)^{m_{ij}}=1,
$$

with

$$
m_{ij}=2,3,4,6
\quad\text{when}\quad
a_{ij}a_{ji}=0,1,2,3.
$$

Thus the diagram presents the Weyl group as a finite reflection group. The arrow orientation is invisible to the Coxeter relation because $m_{ij}$ depends only on the product $a_{ij}a_{ji}$. It remains essential to the root datum: $B_n$ and $C_n$ have isomorphic Weyl groups but different assignments of long and short roots.

The highest root adds another layer. If

$$
\theta=\sum_i m_i\alpha_i
$$

is the highest root, adjoining the vertex for $-\theta$ produces the extended diagram. The coefficients $(1,m_1,\ldots,m_r)$ form the positive null vector of the affine Cartan matrix. This connects the finite classification to the labelings used earlier. The null vector is already encoded by the highest root of the finite system.

The passage to Lie algebras adds a reconstruction theorem. Over an algebraically closed field of characteristic zero, the connected Dynkin diagrams classify finite-dimensional simple Lie algebras. A disconnected diagram records a direct sum of simple ideals. The names match the familiar matrix algebras:

$$
\begin{aligned}
A_n&:\ \mathfrak{sl}_{n+1},\\
B_n&:\ \mathfrak{so}_{2n+1},\\
C_n&:\ \mathfrak{sp}_{2n},\\
D_n&:\ \mathfrak{so}_{2n}.
\end{aligned}
$$

The statement has boundaries. Real simple Lie algebras require real-form data, often encoded by Satake or Vogan diagrams. Dropping reducedness introduces the nonreduced family $BC_n$. Dropping crystallographic integrality admits additional finite Coxeter types such as $H_3,H_4$ and $I_2(m)$. Dropping positive definiteness leads to affine and indefinite generalized Cartan matrices. The nine finite crystallographic families solve one exact problem.[^convention]

## The list reappears because the form reappears

Dynkin diagrams occur beyond semisimple Lie algebras. Their recurrence does not come from reusing a convenient alphabet. In each finite-type theorem, a positivity or finiteness condition produces a Cartan-like form.

Gabriel's theorem singles out ADE graphs among quivers of finite representation type. Simple surface singularities carry ADE intersection forms. McKay graphs for finite subgroups of $\mathrm{SU}(2)$ are affine ADE diagrams. Fomin and Zelevinsky proved that finite-type cluster algebras are classified by the same finite Cartan-Killing types.

These theorems have different objects and different equivalences. The common pressure comes from quadratic or bilinear data that must remain positive, finite, or nondegenerate. Once an adjacency operator approaches spectral radius $2$, the same boundary graphs return.

The classification can now be read from its stopping points. A cycle supplies a null vector. Four neighbors supply another. Two branch vertices reproduce affine $D$. A three-arm tree survives precisely while

$$
\frac1{a+1}+\frac1{b+1}+\frac1{c+1}>1.
$$

A double edge survives only at the end of a path or in the four-vertex balance of $F_4$. A triple edge consumes the entire positivity budget in rank two. The Dynkin list ends wherever one more local choice turns a positive principal minor into zero.

[^scope]: Throughout, $A_n$ has rank $n$. The supplied MIT lecture sometimes writes $A_{n-1}$ when starting from the Lie algebra $\mathfrak{sl}_n$; the two conventions describe the same family with shifted indexing.

[^spectral]: For a connected graph, Perron-Frobenius theory identifies the largest adjacency eigenvalue with a positive eigenvector. This is why the positive labelings on affine diagrams detect the exact boundary.

[^convention]: Low ranks contain coincidences: $D_2=A_1\times A_1$, $D_3=A_3$, and $B_2=C_2$. The standard irreducible ranges are $A_n$ for $n\ge1$, $B_n,C_n$ for $n\ge2$, and $D_n$ for $n\ge4$.
