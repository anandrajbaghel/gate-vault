---
tags:
  - inverse-laplace
  - partial-fraction-expansion
  - s-domain
  - signals-and-systems
  - control-systems
created: 2025-09-24
aliases:
  - Inverse Laplace Transform
  - PFE
  - Partial Fraction Method
  - Partial Fraction Expansion
  - "Cover-up Method : Inverse Laplace Transform"
subject: "[[Signals & Systems]]"
parent:
  - "[[The Laplace Transform]]"
  - "[[Laplace Transform Standard Pairs Table]]"
modified: 2026-07-23T16:47:04
---
### Inverse Laplace Transform using Partial Fraction Expansion
#inverse-laplace #partial-fraction-expansion #pfe

> The most common method to find the inverse Laplace transform, $\mathcal{L}^{-1}\{X(s)\}$, for functions that are ratios of polynomials in $s$, is **Partial Fraction Expansion (PFE)**. This technique decomposes a complex rational function into a sum of simpler fractions whose inverse transforms are readily available in [[Laplace Transform Standard Pairs Table|standard transform tables]]. The process critically depends on the nature of the poles of $X(s)$.

> [!Prerequisite] Prerequisite
> For PFE to be applied directly, the transfer function $X(s) = \frac{N(s)}{D(s)}$ must be a **strictly proper rational function**, meaning the degree of the numerator polynomial $N(s)$ must be less than the degree of the denominator polynomial $D(s)$. If not, polynomial long division must be performed first.

---
#### Case 1: Distinct (Simple) Real Poles
#pfe/distinct-poles

If the denominator $D(s)$ has distinct real poles $p_1, p_2, \dots, p_n$, the expansion is:
$$X(s) = \frac{N(s)}{(s-p_1)(s-p_2)\dots(s-p_n)} = \frac{A_1}{s-p_1} + \frac{A_2}{s-p_2} + \dots + \frac{A_n}{s-p_n}$$
The coefficients $A_k$, known as residues, are found using the **Cover-up Method**:
$$\boxed{\quad A_k = \left[ (s-p_k)X(s) \right]_{s=p_k} \quad}$$
The inverse transform is then a sum of real exponentials:
$$x(t) = \mathcal{L}^{-1}\{X(s)\} = (A_1e^{p_1 t} + A_2e^{p_2 t} + \dots + A_n e^{p_n t})u(t)$$

---
#### Case 2: Repeated Real Poles
#pfe/repeated-poles

If a real pole $p_1$ is repeated $r$ times, the expansion must include a term for each power of $(s-p_1)$ from 1 to $r$:
$$X(s) = \frac{A_r}{(s-p_1)^r} + \frac{A_{r-1}}{(s-p_1)^{r-1}} + \dots + \frac{A_1}{s-p_1} + (\text{terms for other poles})$$
The coefficients $A_{r-k}$ can be found using the general differentiation formula:
$$\boxed{\quad A_{r-k} = \frac{1}{k!} \frac{d^k}{ds^k} \left[ (s-p_1)^r X(s) \right]_{s=p_1} \quad}$$
*   For the highest power coefficient ($k=0$): $A_r = \left[ (s-p_1)^r X(s) \right]_{s=p_1}$.
*   For the next coefficient ($k=1$): $A_{r-1} = \frac{d}{ds} \left[ (s-p_1)^r X(s) \right]_{s=p_1}$.

The inverse transform for these terms involves powers of $t$:
$$\mathcal{L}^{-1}\left\{\frac{A_k}{(s-p_1)^k}\right\} = \frac{A_k}{(k-1)!}t^{k-1}e^{p_1 t}u(t)$$

> [!pyq]- PYQ : 2019
> ![[ee_2019#^q1]]

---
#### Case 3: Complex Conjugate Poles
#pfe/complex-poles

A pair of complex conjugate poles $-\alpha \pm j\omega_d$ results in a quadratic factor in the denominator: $(s+\alpha)^2 + \omega_d^2$. Instead of finding complex residues, it is easier to keep the quadratic term and match the numerator.
The expansion term is of the form:
$$X_c(s) = \frac{As+B}{(s+\alpha)^2 + \omega_d^2}$$
We rearrange the numerator to match the standard forms for damped sine and cosine:
$$\begin{align}
X_c(s) &= \frac{A(s+\alpha) - A\alpha + B}{(s+\alpha)^2 + \omega_d^2} \\
 &= A \left( \frac{s+\alpha}{(s+\alpha)^2 + \omega_d^2} \right) + \frac{B-A\alpha}{\omega_d} \left( \frac{\omega_d}{(s+\alpha)^2 + \omega_d^2} \right)
\end{align}$$
Using the [[Laplace Transform Standard Pairs Table|standard inverse transform]] pairs:
$$\boxed{\quad \mathcal{L}^{-1}\left\{\frac{s+\alpha}{(s+\alpha)^2 + \omega_d^2}\right\} = e^{-\alpha t}\cos(\omega_d t)u(t) \quad}$$
$$\boxed{\quad \mathcal{L}^{-1}\left\{\frac{\omega_d}{(s+\alpha)^2 + \omega_d^2}\right\} = e^{-\alpha t}\sin(\omega_d t)u(t) \quad}$$
The resulting time-domain function is a damped sinusoid.

---
### Related Concepts
#inverse-laplace/related-concepts

> [[The Laplace Transform]]

[[Properties of the Laplace Transform]]
[[Poles and Zeros of a Transfer Function]]
[[Solving Differential Equations using Laplace Transform]]
[[Region of Convergence (ROC)]]