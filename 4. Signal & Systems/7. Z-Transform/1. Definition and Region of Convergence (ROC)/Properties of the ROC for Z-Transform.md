---
tags:
  - roc
  - z-transform
  - z-plane
  - discrete-time
  - signals-and-systems
created: 2025-09-25
aliases:
  - Z-Transform ROC Properties
  - Properties of ROC for ZT
subject: "[[Signals & Systems]]"
parent: "[[Region of Convergence (ROC) for the Z-Transform]]"
modified: 2026-07-23T16:48:10
---
### Properties of the Region of Convergence (ROC) for the Z-Transform
#roc #z-transform #z-plane

> The characteristics of a discrete-time signal $x[n]$ directly dictate the shape and properties of its Region of Convergence (ROC) in the z-plane. These properties are not arbitrary rules but are direct consequences of the convergence condition of the Z-transform power series. Understanding them is key to uniquely determining a signal from its transform and analyzing its properties.

#### Property 1: The ROC is a ring or annulus centered at the origin.
#roc/properties

The condition for convergence depends only on the magnitude of $z$, not its angle. The convergence condition is $\sum |x[n] (re^{j\omega})^{-n}| = \sum |x[n]| r^{-n} < \infty$, which is independent of $\omega$. Therefore, if the transform converges for a certain radius $|z|=r_0$, it converges for all points on that circle. This means the ROC will always be a region bounded by circles centered at the origin.

#### Property 2: The ROC does not contain any poles.
#roc/properties

By definition, a pole is a value of $z$ for which $X(z)$ is infinite. The Z-transform sum does not converge at a pole. Therefore, poles must lie on the boundaries of the ROC, but can never be within it.

#### Property 3: For a Right-Sided Sequence
#roc/properties #right-sided-signal

If $x[n]$ is a right-sided sequence (i.e., $x[n]=0$ for $n < N_1$), the ROC is the **exterior of a circle** passing through the largest-magnitude pole.
$$\boxed{\quad \text{ROC is of the form } |z| > r_{max} \quad}$$
For causal sequences ($x[n]=0$ for $n<0$), the ROC is always the exterior of a circle.

#### Property 4: For a Left-Sided Sequence
#roc/properties #left-sided-signal

If $x[n]$ is a left-sided sequence (i.e., $x[n]=0$ for $n > N_2$), the ROC is the **interior of a circle** passing through the smallest-magnitude pole.
$$\boxed{\quad \text{ROC is of the form } |z| < r_{min} \quad}$$

#### Property 5: For a Two-Sided Sequence
#roc/properties #two-sided-signal

If $x[n]$ is a two-sided sequence, its ROC, if it exists, is an **[[annulus]]** bounded by poles. This region is the overlap between the ROC of its right-sided part ($|z|>r_1$) and its left-sided part ($|z|<r_2$).
$$\boxed{\quad \text{ROC is of the form } r_1 < |z| < r_2 \quad}$$
If there is no overlap ($r_1 \ge r_2$), the Z-transform does not converge.

#### Property 6: For a Finite-Duration Sequence
#roc/properties #finite-duration-signal

If $x[n]$ is a finite-duration sequence (non-zero only for $N_1 \le n \le N_2$), the summation has a finite number of terms. The sum converges for all values of $z$ as long as each term is finite.
*   The ROC is the **entire z-plane**, except possibly at $z=0$ or $z=\infty$.
    *   If the sequence has terms with $n>0$ (e.g., causal finite), it will have powers of $z^{-1}$, so $z=0$ will be a pole.
    *   If the sequence has terms with $n<0$ (e.g., anti-causal finite), it will have positive powers of $z$, so $z=\infty$ will be a pole.

---
### Related Concepts
#roc/related-concepts

> [[Region of Convergence (ROC) for the Z-Transform]]

[[The Z-Transform]]
[[Causality and Stability in the z-domain]]
[[Poles and Zeros in the z-domain]]