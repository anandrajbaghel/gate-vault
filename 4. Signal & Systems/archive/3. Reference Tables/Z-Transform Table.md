---
tags:
  - z-transform/table
created: 2026-07-23T16:53:53
aliases:
  - Z-Transform Tables
  - "Table : Z-Transform"
modified: 2026-07-23T16:53:53
---
### Standard Z-Transform Table
#z-transform-table #z-transform-pairs #signals-systems #discrete-time

> This table provides common Z-Transform pairs for typical discrete-time signals. All entries assume a **unilateral (one-sided) Z-Transform**, meaning the signal is zero for $n < 0$ (causal sequence), unless explicitly stated otherwise (like for $a^n u[-n-1]$). The **Region of Convergence (ROC)** is crucial for uniquely identifying the time-domain signal.

| No. | Z-Transform $X(z)$                                         | Time-Domain Signal $x[n]$           | Region of Convergence (ROC)                                  | Notes                       |
| :-: | :--------------------------------------------------------- | :---------------------------------- | :----------------------------------------------------------- | :-------------------------- |
| 1.  | $$1$$                                                      | $\delta[n]$                         | All $z$                                                      | Unit Impulse                |
| 2.  | $$z^{-n_0}$$                                               | $\delta[n-n_0]$                     | All $z$ except $0$ (if $n_0 > 0$) or $\infty$ (if $n_0 < 0$) | Time-shifted Impulse        |
| 3.  | $$\frac{z}{z-1}$$                                          | $u[n]$                              | $$z>1$$                                                      | Unit Step                   |
| 4.  | $$\frac{z}{z-a}$$                                          | $a^n u[n]$                          | $$z>a$$                                                      | Exponential (Causal)        |
| 5.  | $$\frac{z}{z-a}$$                                          | $-a^n u[-n-1]$                      | $$z<a$$                                                      | Exponential (Anti-causal)   |
| 6.  | $$\frac{z}{(z-1)^2}$$                                      | $n u[n]$                            | $$z>1$$                                                      | Unit Ramp                   |
| 7.  | $$\frac{az}{(z-a)^2}$$                                     | $n a^n u[n]$                        | $$z>a$$                                                      | Exponentially Weighted Ramp |
| 8.  | $$\frac{k! z}{(z-a)^{k+1}}$$                               | $n(n-1) \dots (n-k+1) a^{n-k} u[n]$ | $$z>a$$                                                      | Generalized Form            |
| 9.  | $$\frac{z(z-\cos\Omega_0)}{z^2 - 2z\cos\Omega_0 + 1}$$     | $\cos(\Omega_0 n) u[n]$             | $$z>1$$                                                      | Cosine                      |
| 10. | $$\frac{z\sin\Omega_0}{z^2 - 2z\cos\Omega_0 + 1}$$         | $\sin(\Omega_0 n) u[n]$             | $$z>1$$                                                      | Sine                        |
| 11. | $$\frac{z(z-r\cos\Omega_0)}{z^2 - 2zr\cos\Omega_0 + r^2}$$ | $r^n \cos(\Omega_0 n) u[n]$         | $$z>r$$                                                      | Damped Cosine               |
| 12. | $$\frac{zr\sin\Omega_0}{z^2 - 2zr\cos\Omega_0 + r^2}$$     | $r^n \sin(\Omega_0 n) u[n]$         | $$z>r$$                                                      | Damped Sine                 |

---
#### Key Considerations when using the table

1. **ROC is Essential**: The ROC is as important as the algebraic expression of $X(z)$ because different sequences can have the same algebraic Z-Transform but different ROCs (e.g., $a^n u[n]$ vs. $-a^n u[-n-1]$). The ROC indicates causality, stability, and uniqueness.
2. **Properties**: This table, combined with the [[Properties of the Z-Transform]], allows you to derive the [[The Z-Transform|Z-Transforms]] for a wide range of signals (e.g., using linearity, time-shifting, scaling, etc.).
3. **Inverse Z-Transform**: For the [[Inverse Z-Transform]], you typically try to manipulate $X(z)$ using [[Inverse Z-Transform#1. Partial Fraction Expansion (PFE)|Partial Fraction Expansion]] or [[Inverse Z-Transform#2. Power Series Expansion (Long Division)|Power Series Expansion (Long Division)]] into forms found in this table.


---
### Related Concepts
#table/standard-z-transform

> [[The Z-Transform]]


[[Properties of the Z-Transform]]
[[Inverse Z-Transform]]
[[The Laplace Transform]]
