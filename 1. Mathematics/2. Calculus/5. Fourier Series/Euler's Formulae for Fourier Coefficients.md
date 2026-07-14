---
tags:
  - fourier-series
  - fourier-coefficients
  - integral-calculus
  - signal-processing
  - engineering-math
created: 2025-09-15
aliases:
  - Euler's Formulas
  - Fourier Coefficients
subject: "[[Signals & Systems]]"
parent: "[[Fourier Series Representation of Periodic Functions]]"
---
### Euler's Formulae for Fourier Coefficients
#fourier-coefficients #euler-formulas #orthogonality #signal-decomposition

> **Euler's Formulae** are a set of integral equations used to calculate the coefficients ($a_0, a_n, b_n$) of the trigonometric [[Fourier Series Representation of Periodic Functions|Fourier Series]]. These formulas are derived by exploiting the **orthogonality** of sine and cosine functions over one period, which allows each coefficient to be isolated and calculated individually. They are the fundamental tools for determining the spectral content of a periodic signal.

#### The Trigonometric Fourier Series
#trigonometric-fourier-series
Recall that a periodic function $f(t)$ with period $T$ and fundamental frequency $\omega_0 = 2\pi/T$ can be represented as:
$$ f(t) = a_0 + \sum_{n=1}^{\infty} \left( a_n \cos(n\omega_0 t) + b_n \sin(n\omega_0 t) \right) $$
Euler's formulae provide the means to find the values of $a_0, a_n,$ and $b_n$.

---
#### Principle of Orthogonality
#orthogonality
The derivation of Euler's formulae relies on the fact that sinusoidal functions are orthogonal over any interval of length $T$. This means their product integrates to zero, unless the functions are identical. For integers $m, n \ge 1$:
1.  $\int_T \sin(m\omega_0 t) \cos(n\omega_0 t) \, dt = 0$
2.  $\int_T \sin(m\omega_0 t) \sin(n\omega_0 t) \, dt = \begin{cases} 0 & \text{if } m \neq n \\ T/2 & \text{if } m = n \end{cases}$
3.  $\int_T \cos(m\omega_0 t) \cos(n\omega_0 t) \, dt = \begin{cases} 0 & \text{if } m \neq n \\ T/2 & \text{if } m = n \end{cases}$

---
#### Calculation of Fourier Coefficients

##### Coefficient $a_0$ (The DC Component)
To find $a_0$, we integrate the entire Fourier series expression over one period $T$. Due to orthogonality, all sine and cosine terms integrate to zero.
$$ \int_T f(t) \, dt = \int_T a_0 \, dt + \sum_{n=1}^{\infty} \left( a_n \int_T \cos(n\omega_0 t) \, dt + b_n \int_T \sin(n\omega_0 t) \, dt \right) $$
$$ \int_T f(t) \, dt = a_0 T + \sum_{n=1}^{\infty} (0 + 0) $$
Solving for $a_0$ gives the average value of the function:
$$\boxed{\quad a_0 = \frac{1}{T} \int_T f(t) \, dt \quad}$$

##### Coefficients $a_n$ (The Cosine Coefficients)
To find $a_n$, we multiply the entire series by $\cos(m\omega_0 t)$ and integrate over one period $T$. Due to orthogonality, all terms except the one where $n=m$ will vanish.
$$ \int_T f(t)\cos(m\omega_0 t) \, dt = a_m \int_T \cos^2(m\omega_0 t) \, dt = a_m \frac{T}{2} $$
Replacing $m$ with $n$ and solving for $a_n$:
$$\boxed{\quad a_n = \frac{2}{T} \int_T f(t) \cos(n\omega_0 t) \, dt, \quad n \ge 1 \quad}$$

##### Coefficients $b_n$ (The Sine Coefficients)
Similarly, to find $b_n$, we multiply the series by $\sin(m\omega_0 t)$ and integrate. All terms except the one where $n=m$ will be zero.
$$ \int_T f(t)\sin(m\omega_0 t) \, dt = b_m \int_T \sin^2(m\omega_0 t) \, dt = b_m \frac{T}{2} $$
Replacing $m$ with $n$ and solving for $b_n$:
$$\boxed{\quad b_n = \frac{2}{T} \int_T f(t) \sin(n\omega_0 t) \, dt, \quad n \ge 1 \quad}$$

---
#### Coefficient for Exponential Fourier Series ($c_n$)
The same principle of orthogonality applies to the complex exponential form. The orthogonality property for complex exponentials is $\int_T e^{j(m-n)\omega_0 t} \, dt = 0$ for $m \neq n$. This leads to the formula for the complex coefficient $c_n$:
$$\boxed{\quad c_n = \frac{1}{T} \int_T f(t) e^{-jn\omega_0 t} \, dt \quad}$$

---
### Related Concepts
#fourier-series/related-concepts

> [[Fourier Series Representation of Periodic Functions]]

[[Signals and Systems - Signal Symmetry]] (Using symmetry simplifies these integral calculations)
[[Integration]]
[[Orthogonality]]
[[Periodic Signals]]