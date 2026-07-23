---
tags:
  - unilateral-z-transform
  - one-sided-z-transform
  - initial-conditions
  - discrete-time
  - dsp
created: 2025-09-25
aliases:
  - One-Sided Z-Transform
  - Unilateral ZT
subject: "[[Signals & Systems]]"
parent: "[[The Z-Transform]]"
modified: 2026-07-23T16:50:30
---
### Unilateral Z-Transform
#unilateral-z-transform #initial-conditions #causal-systems

> The **Unilateral (or One-Sided) Z-Transform** is a form of the Z-transform that considers a signal only for non-negative indices ($n \ge 0$). Its primary purpose is to analyze causal systems, especially for solving [[Linear Constant-Coefficient Difference Equations (DT)|linear constant-coefficient difference equations]] (LCCDEs) with non-zero initial conditions. Its unique time-shifting property provides a systematic way to incorporate these initial conditions directly into the z-domain analysis.

#### Definition
#unilateral-z/definition

The Unilateral Z-Transform of a sequence $x[n]$ is defined as:
$$\boxed{\quad X(z) = \mathcal{Z}_U\{x[n]\} = \sum_{n=0}^{\infty} x[n] z^{-n} \quad}$$
* This is equivalent to finding the Bilateral Z-transform of the causal sequence $x[n]u[n]$.
* Because the summation is restricted to $n \ge 0$, the signals are inherently right-sided, and thus the ROC is always the **exterior of a circle**.

#### The Time-Shifting Property and Initial Conditions
#unilateral-z/time-shifting

The most significant feature of the Unilateral Z-Transform is its time-shifting property, which differs from that of the Bilateral transform by including initial condition terms.

For a time delay of $k$ samples, the general property is:
$$\mathcal{Z}\{x[n-k]\} = z^{-k}X(z) + z^{-k+1}x[-1] + z^{-k+2}x[-2] + \dots + x[-k]$$

Specifically for one and two sample delays:
* **One-Sample Delay**:
    $$\boxed{\quad \mathcal{Z}\{x[n-1]\} = z^{-1}X(z) + x[-1] \quad}$$
* **Two-Sample Delay**:
    $$\boxed{\quad \mathcal{Z}\{x[n-2]\} = z^{-2}X(z) + z^{-1}x[-1] + x[-2] \quad}$$

It is these additional terms ($x[-1], x[-2]$, etc.) that allow us to solve for the **complete response** of a system (both zero-state and zero-input) when its initial state is non-zero.

#### Applications
#unilateral-z/applications

The primary application of the Unilateral Z-Transform is in **solving LCCDEs with specified initial conditions**.

When an LCCDE is transformed using the Unilateral Z-Transform, the time-shifting property introduces the initial conditions as known constants into the resulting algebraic equation. This allows for a direct solution of $Y(z)$ that includes both the particular solution (related to the input) and the homogeneous solution (related to the initial conditions).

---
### Related Concepts
#unilateral-z/related-concepts

> [[The Z-Transform]] (Bilateral Transform)

[[Linear Constant-Coefficient Difference Equations (DT)]]
[[Solving Difference Equations using Z-Transform]]
[[Properties of the Z-Transform]]
[[The Transfer Function H(z)]]
[[Zero-State Response (ZSR)]]
[[Zero-Input Response (ZIR)]]
[[Unilateral Laplace Transform]]