---
tags:
  - integral-transform
  - s-domain
  - control-systems
  - circuit-analysis
  - signals-and-systems
created: 2025-09-23
aliases:
  - Laplace Transform
  - s-domain analysis
  - Bilateral (or Two-Sided) Laplace Transform
subject:
  - "[[Signals & Systems]]"
  - "[[Mathematics]]"
  - "[[Electric Circuits]]"
  - "[[Control Systems]]"
parent: "[[Signals & Systems]]"
importance:
  - very high
trends:
  - "[[trends - Laplace Transform]]"
youtube:
  - j0wJBEZdwLs
formula:
  - "Laplace Transform (Bilateral/Two-Sided) : $$X(s) = \\mathcal{L}\\{x(t)\\} = \\int_{-\\infty}^{\\infty} x(t) e^{-st} dt$$"
  - "Laplace Transform (Unilateral/One-Sided) : $$X(s) = \\mathcal{L}\\{x(t)\\} = \\int_{0^{-}}^{\\infty} x(t) e^{-st} dt$$"
  - "Laplace Transform & Fourier Transform (relationship) : $$F(\\omega) = \\mathcal{F}\\{x(t)\\} = \\int_{-\\infty}^{\\infty} x(t) e^{-j\\omega t} dt = X(s)|_{s=j\\omega}$$"
modified: 2026-07-23T16:46:46
---
### The Laplace Transform
#laplace-transform #s-domain #system-analysis

> The Laplace Transform is a powerful integral transform that ==converts a function of a real variable $t$ (often time) to a function of a complex variable $s$ (complex frequency)==. It generalizes the [[Continuous-Time Fourier Transform (CTFT)]], allowing for the analysis of a broader class of signals and systems, including unstable ones. It is fundamental in solving linear differential equations and analyzing [[LTI|LTI Systems]] in [[Electric Circuits]], [[Control Systems]], and [[Signals & Systems]].

> [!concept]- Laplace vs Z-Transform (ROC Insight)
> ==Laplace transform uses $s=\sigma+j\omega$, where convergence depends on $\sigma$, giving vertical ROC strips in the $s$-plane.==
> 
> ==[[The Z-Transform|Z-transform]] uses $z=re^{j\omega}$, where convergence depends on $r=|z|$, giving circular ROC regions in the $z$-plane.==
> 
> ==[[Fourier Transforms|Fourier]] / [[Representation of Aperiodic Discrete-Time Signals|DTFT]] correspond to the boundaries $\sigma=0$ and $|z|=1$ respectively.==

---
#### Definition of the Laplace Transform
#laplace-transform/definition

==The **Bilateral (or Two-Sided) Laplace Transform** of a signal $x(t)$ is defined as $X(s)$== $$\boxed{\quad X(s) = \mathcal{L}\{x(t)\} = \int_{-\infty}^{\infty} x(t) e^{-st} dt \quad}$$
==where $s = \sigma + j\omega$ is a complex frequency variable.==

For most practical applications in GATE involving [[causality|causal]] systems (systems where output depends only on past and present inputs), the ==**[[Unilateral Laplace Transform|Unilateral (or One-Sided) Laplace Transform]]**== is used. It assumes the signal $x(t) = 0$ for $t < 0$.
$$\boxed{\quad X(s) = \mathcal{L}\{x(t)\} = \int_{0^{-}}^{\infty} x(t) e^{-st} dt \quad}$$


> [!related]
> [[Inverse Laplace Transform using Partial Fraction Expansion|Inverse Laplace Transform]]

---
#### Region of Convergence (ROC)
#laplace-transform/roc

The **[[Region of Convergence (ROC)]]** is the set of all values of $s$ in the s-plane for which the Laplace transform integral converges.
*   **Importance**: The ROC is crucial because the transform $X(s)$ alone is not unique; it must be specified along with its ROC to uniquely determine the time-domain signal $x(t)$.
*   **Properties of the ROC**:
    1.  The ROC consists of strips parallel to the $j\omega$-axis in the s-plane.
    2.  The ROC does not contain any poles.
    3.  For a **right-sided signal** (e.g., causal signal), the ROC is a right-half plane, i.e., $\text{Re}\{s\} > \sigma_{max}$, where $\sigma_{max}$ is the real part of the rightmost pole.
    4.  For a **left-sided signal**, the ROC is a left-half plane, i.e., $\text{Re}\{s\} < \sigma_{min}$, where $\sigma_{min}$ is the real part of the leftmost pole.
    5.  For a **finite-duration signal** that is absolutely integrable, the ROC is the entire s-plane.

---
#### Properties of the Laplace Transform
#laplace-transform/properties

> [!refer]
> [[Properties of the Laplace Transform]] (in details)

Let $x(t) \leftrightarrow X(s)$ and $y(t) \leftrightarrow Y(s)$.
1.  **Linearity**: $a x(t) + b y(t) \leftrightarrow a X(s) + b Y(s)$.
2.  **Time Shifting**: For a causal signal $x(t)u(t)$, a delay in time is:
    $x(t-t_0)u(t-t_0) \leftrightarrow e^{-st_0} X(s)$, for $t_0 > 0$.
3.  **s-Domain Shifting**: $e^{-at} x(t) \leftrightarrow X(s+a)$. The ROC shifts by $\text{Re}\{-a\}$.
4.  **Time Scaling**: $x(at) \leftrightarrow \frac{1}{|a|} X\left(\frac{s}{a}\right)$, for $a \neq 0$.
5.  **Convolution in Time**:
    $$\boxed{\quad x(t) * y(t) = \int_{0}^{t} x(\tau)y(t-\tau)d\tau \leftrightarrow X(s)Y(s) \quad}$$
6.  **Time Differentiation**: (Using Unilateral Transform)
    *   $\frac{dx(t)}{dt} \leftrightarrow sX(s) - x(0^{-})$.
    *   $\frac{d^n x(t)}{dt^n} \leftrightarrow s^n X(s) - s^{n-1}x(0^{-}) - \dots - x^{(n-1)}(0^{-})$.
7.  **Time Integration**: $\int_{0^{-}}^t x(\tau)d\tau \leftrightarrow \frac{X(s)}{s}$.
8.  **Initial Value Theorem (IVT)**: If $x(t)$ has no impulses or higher-order singularities at $t=0$, then:
    $$\boxed{\quad x(0^{+}) = \lim_{s \to \infty} sX(s) \quad}$$
9.  **Final Value Theorem (FVT)**: If the poles of $sX(s)$ are all in the Left-Half Plane (LHP), then:
    $$\boxed{\quad \lim_{t \to \infty} x(t) = \lim_{s \to 0} sX(s) \quad}$$
    > [!mistake] Caution
    > FVT only applicable if the system is stable and settles to a final value.

---
#### System Analysis using Laplace Transform
#laplace-transform/system-analysis

###### The Transfer Function H(s)
#transfer-function #poles-and-zeros

The **Transfer Function** $H(s)$ of an LTI system is the ratio of the Laplace transform of the output $Y(s)$ to the Laplace transform of the input $X(s)$, assuming zero initial conditions.
$$\boxed{\quad H(s) = \frac{Y(s)}{X(s)} \quad}$$
It is also the Laplace Transform of the system's impulse response $h(t)$, i.e., $H(s) = \mathcal{L}\{h(t)\}$.
*   **Poles**: The values of $s$ for which $H(s) \to \infty$. They are the roots of the denominator polynomial.
*   **Zeros**: The values of $s$ for which $H(s) = 0$. They are the roots of the numerator polynomial.

> [!pyq]- PYQ : GATE EE 2020
> ![[ee_2020#^q10]]

---
###### Causality and Stability in the s-domain
#causality #stability #s-domain

> [!refer]
> [[Causality and Stability in the s-domain]]

For an LTI system with a rational transfer function $H(s)$:
1.  **Causality**: A system is causal if and only if the ROC of its transfer function $H(s)$ is a **right-half plane** to the right of the rightmost pole. For a causal system, $h(t)=0$ for $t<0$.
2.  **Stability (BIBO)**: A system is Bounded-Input, Bounded-Output (BIBO) stable if and only if the **ROC of $H(s)$ includes the entire $j\omega$-axis**.

> [!memory] Stability of LTI and location of Poles
> For a causal LTI system, stability implies that all poles of $H(s)$ must lie in the Left-Half of the s-plane.

> [!concept]- Why causality talks about the RIGHT and stability talks about the LEFT?
> 
> **Causality fixes the _direction_ of the ROC** → for a causal system, ROC is always **to the right** of the rightmost pole.
> 
> **Stability fixes the _location_ of poles**, not the ROC direction → the ROC must include the **jω-axis** $(\sigma=0)$, which is only possible (for a causal ROC) **if all poles lie in the Left-Half Plane (LHP)**.
> 
> **So:**
> 
> - Causality → ROC is a **right-half-plane** starting from the rightmost pole.
> - Stability → jω-axis must lie inside ROC → poles must be **left** of jω-axis.
> 
> **Together (causal + stable)** ⇒ _all poles must lie in LHP_.
> 
> No contradiction — **one talks about ROC direction, the other about pole placement.**

---
#### 🔥Relationship to Fourier Transform
#laplace-fourier-relationship

==The [[Fourier Transforms|Fourier Transform]] is a special case of the Bilateral Laplace Transform evaluated on the $j\omega$-axis.==
$$F(\omega) = \mathcal{F}\{x(t)\} = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt = X(s)|_{s=j\omega}$$
==This relationship holds only if the **ROC of the Laplace transform includes the $j\omega$-axis** (i.e., the signal is absolutely integrable, or the system is stable).==

> [!pyq]- PYQ : GATE EE 2020
> ![[ee_2020#^q3]]

---
### Related Concepts
#laplace-transform/related-concepts

> [[Continuous-Time Fourier Transform (CTFT)]]
> [[Laplace Transform Standard Pairs Table]]

[[Properties of the Laplace Transform]]
[[The Z-Transform]]
[[Fourier Transforms]] (Its counterpart for frequency analysis)
[[Solving Differential Equations using Laplace Transform]]
[[Inverse Laplace Transform using Partial Fraction Expansion]]
[[The Transfer Function H(s)]]
[[Poles and Zeros of a Transfer Function]]
[[Causality and Stability in the s-domain]]
[[BIBO Stability]]
[[Evaluation of Improper Integrals]]