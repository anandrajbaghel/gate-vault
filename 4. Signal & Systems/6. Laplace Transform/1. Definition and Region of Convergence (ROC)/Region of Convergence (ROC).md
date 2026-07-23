---
tags:
  - laplace-transform
  - s-domain
  - signals-and-systems
  - stability
  - causality
created: 2025-09-23
aliases:
  - ROC
  - Region of Convergence for Laplace Transform
  - Significance of the ROC
  - "Example : Region of Convergence (ROC)"
  - Properties of the ROC of Laplace Transform
subject: "[[Signals & Systems]]"
parent: "[[The Laplace Transform]]"
modified: 2026-07-23T16:46:41
---
### Region of Convergence (ROC) for the Laplace Transform
#roc #laplace-transform #s-plane

> ==The Region of Convergence (ROC) is the set of points in the complex $s$-plane for which the Laplace transform integral converges.== The ROC is as important as the transform expression $X(s)$ itself, as ==the combination of $X(s)$ and its ROC uniquely specifies the time-domain signal $x(t)$==. It also directly reveals key properties of a system, such as [[Causality and Stability in the s-domain|causality]] and [[Causality and Stability in the s-domain|stability]].

#### Definition of ROC
#roc/definition

The ROC for the [[The Laplace Transform|Laplace transform]] $$X(s) = \int_{-\infty}^{\infty} x(t) e^{-st} dt$$ is the set of all values of $s = \sigma + j\omega$ such that the integral is finite. This is equivalent to the condition that $x(t)e^{-\sigma t}$ is absolutely integrable:
$$\boxed{\quad \text{ROC} = \left\{ s = \sigma + j\omega \quad \Big| \quad \int_{-\infty}^{\infty} |x(t) e^{-\sigma t}| dt < \infty \right\} \quad}$$

> [!faq]- Why we use $\sigma$ only and not $jw$ term for convergence?
> [[The Laplace Transform|Laplace Transform]] of a signal $x(t)$ is given by
> $$X(s) = \mathcal{L}\{x(t)\} = \int_{-\infty}^{\infty} x(t) e^{-st} dt$$
> where  $s = \sigma +j\omega$ 
> 
> ---
> So the integrand is $$x(t)e^{-st} = x(t)\cdot e^{-\sigma t}\cdot e^{-j\omega t}$$
> Convergence means the **integral’s magnitude is finite**:
> $$\int_{-\infty}^{\infty} |x(t)e^{-st}| \, dt < \infty$$
> Now,
> $$|x(t)e^{-st}| = |x(t)| e^{-\sigma t}$$
> because $|e^{-j\omega t}| = 1$ (That’s because $e^{-j\omega t}$ is a **pure rotation** in the complex plane, it changes only the **phase**, not the **magnitude**.)
> 
> ---
> By Euler’s formula, $$e^{j\theta} = \cos\theta + j\sin\theta$$So
> $$|e^{j\theta}| = \sqrt{(\cos\theta)^2 + (\sin\theta)^2} = \sqrt{1} = 1$$
> Thus for any real $\omega$ and real $t$,
> $$|e^{-j\omega t}| = 1$$

> [!memory] Finite-duration $\implies$ full ROC
> **Finite-duration (ordinary) signals:**
> 
> ==If $x(t)$ is nonzero only on a finite interval and is an ordinary (bounded) function on that interval, then the Laplace integral
> $$\displaystyle \int_{-\infty}^{\infty} x(t)e^{-st}\,dt$$
> converges for every ($s$).==
> 
> **Conclusion:** ROC $=$ entire complex plane $\mathbb{C}$.
> 
> > [!important] Exception
> > Distributions (impulses) or unbounded singularities on the interval need separate handling.
> 
> > [!pyq]- PYQ : 2020
> > ![[ee_2020#^q3]]

---
#### Significance of the ROC
#roc/uniqueness

The mathematical expression for $X(s)$ can be the same for multiple different time-domain signals. The ROC is what distinguishes them.

> [!Example]
> Consider $X(s) = \frac{1}{s+a}$.
> 1. If the signal is right-sided (causal), $x_1(t) = e^{-at}u(t)$, the ROC is $\text{Re}\{s\} > -a$.
> 2. If the signal is left-sided (anti-causal), $x_2(t) = -e^{-at}u(-t)$, the ROC is $\text{Re}\{s\} < -a$.
>
> $$\boxed{\quad \begin{align}
> \mathcal{L}\{e^{-at}u(t)\} &= \frac{1}{s+a}, \quad \text{ROC: Re}\{s\} > -a \\
> \mathcal{L}\{-e^{-at}u(-t)\} &= \frac{1}{s+a}, \quad \text{ROC: Re}\{s\} < -a
> \end{align} \quad}$$
> Without the ROC, the inverse transform is ambiguous.

---
#### 🔥Properties of the ROC
#roc/properties

![[laplace transform left right.png]]

1. **Shape**: The ROC consists of vertical strips parallel to the $j\omega$-axis in the s-plane.
2. **Finite-Duration Signals**: If $x(t)$ is of finite duration and is absolutely integrable, the ROC is the **entire s-plane**.
3. **Poles**: ==The ROC **never** contains any poles.== The integral diverges at the poles.
> [!examtip] ROC and poles — quick rule
> - The ROC **never contains** poles.  
> - The ROC boundaries for rational $X(s)$ are vertical lines at pole real parts.  
> - In practice: locate poles, then pick the correct half-plane or vertical strip consistent with signal sidedness.


4. **Right-Sided Signals**: If $x(t)$ is a right-sided signal (i.e., $x(t)=0$ for $t < T_1$), the ROC is a right-half plane of the form $\text{Re}\{s\} > \sigma_{max}$, where $\sigma_{max}$ is the real part of the **rightmost pole**.
5. **Left-Sided Signals**: If $x(t)$ is a left-sided signal (i.e., $x(t)=0$ for $t > T_2$), the ROC is a left-half plane of the form $\text{Re}\{s\} < \sigma_{min}$, where $\sigma_{min}$ is the real part of the **leftmost pole**.
6. **Two-Sided Signals**: If $x(t)$ is a two-sided signal, the ROC is a vertical strip between two poles, of the form $\sigma_1 < \text{Re}\{s\} < \sigma_2$. If it exists, it is bounded by poles.
> [!mistake] Two-sided signals — watch out
> For two-sided signals the ROC is a vertical strip: $\sigma_1 < \operatorname{Re}(s) < \sigma_2$.  
> **If the strip is empty (no overlap)**, there is **no** ROC and no ordinary Laplace transform exists.  
> Useful exam trick: check rightmost left-pole and leftmost right-pole to find $\sigma_1,\sigma_2$.

7. **Linear Combination**: For $x(t) = a x_1(t) + b x_2(t)$, the resulting ROC is at least the intersection of the individual ROCs: $\text{ROC} \supseteq \text{ROC}_1 \cap \text{ROC}_2$.
8. **Convolution**: For $y(t) = x_1(t) * x_2(t)$, the ROC of $Y(s)$ is at least the intersection of the ROCs of $X_1(s)$ and $X_2(s)$.

---
#### ROC for LTI System Analysis
#roc/system-properties

For an LTI system with transfer function $H(s)$:
###### Causality
#causality

> A system is **causal** if and only if the ROC of its transfer function $H(s)$ is a **right-half plane**.
> For a rational transfer function, this means the ROC is to the right of the rightmost pole.

###### Stability (BIBO)
#stability

> A system is **BIBO stable** if and only if the ROC of its transfer function $H(s)$ **includes the $j\omega$-axis** ($\text{Re}\{s\}=0$).

###### Causality and Stability Combined
> For a system to be both **causal and stable**, two conditions must be met:
> 1.  The ROC must be a right-half plane (for causality).
> 2.  The ROC must include the $j\omega$-axis (for stability).
>
> $$\boxed{\quad \text{A causal LTI system with a rational } H(s) \text{ is stable if and only if all of its poles lie in the Left-Half Plane (LHP).} \quad}$$

---
### Related Concepts
#roc/related-concepts

> [[The Laplace Transform]]

[[The Transfer Function H(s)]]
[[Poles and Zeros of a Transfer Function]]
[[Causality]]
[[Stability (BIBO Stability)]]
[[Region of Convergence (ROC) for the Z-Transform]]