---
tags:
  - signal-processing
  - signals-and-systems
  - lti-systems
  - convolution
  - graphical-convolution
  - analytical-convolution
  - gate-ee
created: 2025-09-24
aliases:
  - Convolution Methods
  - Solving Convolution Problems
  - "Example : Continuous Convolution : Graphical and Analytical Convolution"
  - "Example : Discrete Convolution : Graphical and Analytical Convolution"
  - "Video : Graphical Flip & Shift Method in Convolution (Iain Explains)"
subject: "[[Signals & Systems]]"
parent:
  - "[[LTI|Linear Time-Invariant (LTI) Systems]]"
youtube:
  - aMaw4EumwyE
modified: 2026-07-23T16:36:56
---
### Graphical and Analytical Convolution
#convolution-methods #graphical-convolution #analytical-convolution

> Computing the convolution is a core skill in LTI system analysis. There are three primary methods to do this: the intuitive **graphical method**, the direct **analytical method**, and the powerful **transform method**. This note focuses on the first two, which are performed directly in the time domain.

#### Graphical Convolution: The "Flip and Shift" Method
#graphical-convolution

This method is highly intuitive and ideal for signals that are simple geometric shapes (e.g., rectangular or triangular pulses). It involves visualizing the "flip, shift, multiply, integrate" process.

##### The Four-Step Process for $y(t) = \int x(\tau)h(t-\tau)d\tau$

1. **Flip**: Choose one signal to flip (usually the simpler one, say $h(t)$). Relabel the axes of both signals to the dummy variable $\tau$. Then, reflect $h(\tau)$ about the vertical axis to get $h(-\tau)$.
2. **Shift**: Shift the flipped signal $h(-\tau)$ by an amount $t$ to get $h(t-\tau)$. A positive $t$ shifts the signal to the right.
3. **Multiply**: For the chosen value of $t$, find the point-by-point product of the two signals, $x(\tau)$ and $h(t-\tau)$.
4. **Integrate (or Sum)**: Calculate the total area under the product curve from the multiplication step. This area is the value of the output, $y(t)$, for that one specific time $t$.
5.  **Repeat**: Repeat steps 2-4 for all possible values of $t$ from $-\infty$ to $\infty$ to trace out the complete output signal $y(t)$ is found by repeating this process for all possible values of $t$, paying close attention to the different **intervals of overlap** between the two signals.

| Visual Explanation        | Examples                                                                                             |
| ------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![[Convolution.svg\|500]] | ![[Convolution of Box Signal with Itself.gif\|1000]]<br>![[Convolution of Spiky Function.gif\|1000]] |

> [!memory] Key Property
> If a signal $x(t)$ has duration $T_1$ and $h(t)$ has duration $T_2$, the output $y(t)$ will have a duration of $T_1 + T_2$. This helps define the start and end points of the convolution.

> [!pyq]- PYQ : GATE EE 2020
> ![[ee_2020#^q37]]

---
#### Analytical Convolution: Direct Integration/Summation
#analytical-convolution

This method involves setting up and solving the convolution integral or sum directly. It is best suited for functions that have simple mathematical forms, like exponentials and steps.

##### Continuous-Time Example: $x(t)=e^{-at}u(t)$ convolved with $h(t)=u(t)$, for $a>0$.
$$y(t) = \int_{-\infty}^{\infty} x(\tau)h(t-\tau)d\tau = \int_{-\infty}^{\infty} e^{-a\tau}u(\tau) u(t-\tau)d\tau$$
The step functions define the limits of integration:
-   $u(\tau) \implies \tau \ge 0$
-   $u(t-\tau) \implies t-\tau \ge 0 \implies \tau \le t$
For the integrand to be non-zero, both conditions must be met. This means the integral is non-zero only when $t \ge 0$.
The integral becomes:
$$\begin{align}
y(t) &= \int_{0}^{t} e^{-a\tau} d\tau \quad \text{for } t \ge 0 \\
 &= \left[ -\frac{1}{a}e^{-a\tau} \right]_0^t \\
 &= -\frac{1}{a}(e^{-at} - e^0) = \frac{1}{a}(1 - e^{-at})
\end{align}$$
The final answer is written using a step function to show it is zero for $t<0$:
$$\boxed{\quad y(t) = \frac{1}{a}(1-e^{-at})u(t) \quad}$$

---
##### Discrete-Time Tabular Method

For finite-length discrete sequences, the tabular method is a fast and reliable alternative to graphical convolution.

> [!trick] Tabular (Grid) Method for Fast DT Convolution
> To calculate $y[n] = x[n] * h[n]$ quickly for short discrete sequences:
> 1. Construct a 2D matrix with elements of $x[n]$ along rows and $h[n]$ along columns.
> 2. Fill each entry with the product of corresponding row and column samples.
> 3. Sum the entries along each **anti-diagonal** to get sequential samples of $y[n]$.
> 4. The starting sample index is $n_{start} = n_{x, start} + n_{h, start}$.

![[Discrete Convolution.gif]]
> [!example]
> $x[n] = \{1, 2, 3\}$ and $h[n] = \{4, 5\}$.
> 1.  Write the coefficients of $x[n]$ and $h[n]$ along the top and side of a grid.
> 2.  Fill the grid with the products.
> 3.  Sum along the anti-diagonals to get the output samples.
> 
> |       | **1** | **2** | **3** |
> | :---: | :---: | :---: | :---: |
> | **4** |   4   |   8   |  12   |
> | **5** |   5   |  10   |  15   |
>
> - $y = 4$
> - $y = 5+8 = 13$
> - $y = 10+12 = 22$
> - $y = 15$
> $$y[n] = \{4, 13, 22, 15\}$$

---
### Related Concepts
#convolution-methods/related-concepts

> [[Continuous-Time Convolution Integral]]

[[Transformations of the Independent Variable]] 
[[Discrete-Time Convolution Sum]]
[[Impulse Response of an LTI System]]
[[Properties of Convolution]]
[[Fourier Transforms]] (Provides the third method: convolution via the Convolution Theorem)