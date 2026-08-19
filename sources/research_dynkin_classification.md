# Research audit: Dynkin classification

Date: 2026-08-19

## Supplied source

- Pavel Etingof, *18.745 Lie Groups and Lie Algebras I, Lecture 23: Dynkin Diagrams*, MIT OpenCourseWare, Fall 2020. Local file: `C:/Users/rimo/Desktop/mit18_745_f20_lec23.pdf`. SHA-256: `28A97555A311BEF27C31097AD8D33B5625B5099184D8D824B1A54E2517670806`. The PDF has 8 pages. Public copy: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/resources/mit18_745_f20_lec23_pdf/

## Additional sources checked

- David A. Vogan Jr., *Classification of Root Systems*: https://math.mit.edu/~dav/roots.pdf
- Pavel Etingof, *18.745 Lie Groups and Lie Algebras I* full course notes: https://math.mit.edu/~etingof/lnlg.pdf
- E. B. Dynkin, “The structure of semi-simple algebras,” *Uspekhi Matematicheskikh Nauk* 2:4(20), 1947, 59–127: https://www.mathnet.ru/php/archive.phtml?jrnid=rm&option_lang=eng&paperid=6968&wshow=paper
- Encyclopedia of Mathematics, “Root system”: https://encyclopediaofmath.org/wiki/Root_system
- Encyclopedia of Mathematics, “Tits quadratic form”: https://encyclopediaofmath.org/wiki/Tits_quadratic_form
- Sergey Fomin and Andrei Zelevinsky, “Cluster algebras II: Finite type classification,” *Inventiones Mathematicae* 154 (2003), arXiv:math/0208229: https://arxiv.org/abs/math/0208229

## Claims audited against the sources

- The Cartan entries satisfy `a_ii = 2`, nonpositive integral off-diagonal entries, and `a_ij a_ji` in `{0,1,2,3}` for distinct simple roots.
- Multiplying the Cartan matrix by the diagonal matrix of squared simple-root lengths produces a symmetric positive-definite Gram matrix.
- Connected diagrams correspond to irreducible reduced root systems; arbitrary finite reduced root systems are orthogonal unions of irreducible ones.
- The finite connected crystallographic list is `A_n, B_n, C_n, D_n, E_6, E_7, E_8, F_4, G_2` with low-rank coincidences `D_2 = A_1 x A_1`, `D_3 = A_3`, and `B_2 = C_2`.
- The exceptional coordinate models have 48 roots for `F_4`, and 72, 126, 240 roots for `E_6, E_7, E_8` respectively.
- Positive-definite simply-laced Cartan matrices are exactly the ADE graphs; semidefinite boundary cases are affine diagrams.
- The same finite-type diagrams recur in cluster algebras, but that is a separate classification theorem rather than a consequence of Lie algebra terminology.

## Article-specific derivations

The article expands the MIT notes with two elementary calculations.

1. For a simply-laced three-arm tree with arm lengths `a,b,c`, the Schur complement of the three type-A blocks gives

   `1/(a+1) + 1/(b+1) + 1/(c+1) > 1`.

   Solving this inequality yields the `D_n` family and `E_6,E_7,E_8`.

2. For a path whose edge products are `w_i = a_i,i+1 a_i+1,i`, its leading principal minors obey

   `Delta_k = 2 Delta_(k-1) - w_(k-1) Delta_(k-2)`.

   The recurrence confines a double edge to an endpoint, giving `B_n/C_n`, or the center of a four-vertex path, giving `F_4`; a triple edge can occur only in rank two, giving `G_2`.
