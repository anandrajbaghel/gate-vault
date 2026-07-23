---
tags:
  - signal-processing
  - signals-and-systems
  - fourier-series
  - frequency-domain
  - ctfs
  - gate-ee
created: 2025-09-24
aliases:
  - Complex Fourier Series
  - CTFS
  - Fourier Series (Exponential Form)
subject: "[[Signals & Systems]]"
parent:
  - Continuous-Time Fourier Series (CTFS)
modified: 2026-07-23T16:42:36
---
### Exponential Fourier Series
#fourier-series #complex-fourier-series #frequency-spectrum

> The **Exponential Fourier Series** is a more compact and mathematically elegant representation of a periodic signal compared to its trigonometric counterpart. It decomposes a periodic signal $x(t)$ into a sum of complex exponential signals, $e^{jk\omega_0t}$. This form is extremely powerful because these complex exponentials are the [[Response of LTI Systems to Complex Exponentials|eigenfunctions of LTI systems]], which greatly simplifies system analysis.

#### The Fourier Series Pair
#fourier-synthesis #fourier-analysis

Any periodic signal $x(t)$ with fundamental period $T_0$ can be represented by the following pair of equations, known as the Exponential Fourier Series pair.

-   **Synthesis Equation**: This equation reconstructs the signal $x(t)$ from its Fourier coefficients ($c_k$).
    $$\boxed{\quad x(t) = \sum_{k=-\infty}^{\infty} c_k e^{j k \omega_0 t} \quad}$$
    where $\omega_0 = 2\pi/T_0$ is the fundamental angular frequency.

-   **Analysis Equation**: This equation analyzes the signal $x(t)$ to find the complex Fourier coefficients ($c_k$).
    $$\boxed{\quad c_k = \frac{1}{T_0} \int_{T_0} x(t) e^{-j k \omega_0 t} dt \quad}$$
    The integral is performed over any single period of the signal.

---
#### The Fourier Coefficients ($c_k$)
#fourier-coefficients

The coefficients $c_k$ are, in general, complex numbers. They represent the amplitude and phase of the k-th harmonic component of the signal.

-   **Magnitude and Phase**: The magnitude $|c_k|$ gives the amplitude of the k-th harmonic, and the angle $\angle c_k$ gives its phase shift.
-   **Spectrum**: A plot of $|c_k|$ versus $k\omega_0$ is the **magnitude spectrum**, and a plot of $\angle c_k$ versus $k\omega_0$ is the **phase spectrum**. Together, they constitute the frequency spectrum of the periodic signal.

##### Special Coefficients
-   **$c_0$ (The DC Component)**: For $k=0$, the analysis equation simplifies to:
    $$ c_0 = \frac{1}{T_0} \int_{T_0} x(t) dt $$
    This is simply the **average (or DC) value** of the signal over one period.

-   **Conjugate Symmetry**: For any real-valued signal $x(t)$, the coefficients have conjugate symmetry.
    $$\boxed{\quad c_k = c_{-k}^* \quad}$$
    This implies:
    -   The magnitude spectrum is **even**: $|c_k| = |c_{-k}|$.
    -   The phase spectrum is **odd**: $\angle c_k = -\angle c_{-k}$.
    This property means that all the information is contained in the coefficients for $k \ge 0$.

---
#### Relationship to the Trigonometric Form
#trigonometric-fourier-series

The exponential and [[Trigonometric Fourier Series]] forms are equivalent. The coefficients are related through [[Euler's Formula]].

-   **From Trigonometric $(a_k, b_k)$ to Exponential $(c_k)$**:
    $$\boxed{\quad c_0 = a_0 \quad}$$
    $$\boxed{\quad c_k = \frac{1}{2}(a_k - jb_k) \quad \text{for } k > 0 \quad}$$
    $$\boxed{\quad c_{-k} = \frac{1}{2}(a_k + jb_k) \quad \text{for } k > 0 \quad}$$

-   **From Exponential $(c_k)$ to Trigonometric $(a_k, b_k)$**:
    $$\boxed{\quad a_0 = c_0 \quad}$$
    $$\boxed{\quad a_k = 2 \text{Re}\{c_k\} = c_k + c_{-k} \quad \text{for } k > 0 \quad}$$
    $$\boxed{\quad b_k = -2 \text{Im}\{c_k\} = j(c_k - c_{-k}) \quad \text{for } k > 0 \quad}$$

---
### Related Concepts
#exponential-fourier-series/related-concepts

> [[Trigonometric Fourier Series]]

[[Response of LTI Systems to Complex Exponentials]]
[[Properties of Continuous-Time Fourier Series]]
[[Concept of Frequency Spectrum]]
[[Development of the Fourier Transform from Fourier Series]]
[[Euler's Formula]]