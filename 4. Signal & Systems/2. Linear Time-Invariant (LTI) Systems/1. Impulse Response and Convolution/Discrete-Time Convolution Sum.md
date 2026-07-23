---
tags:
  - signal-processing
  - signals-and-systems
  - lti-systems
  - convolution
  - discrete-time
  - gate-ee
created: 2025-09-24
aliases:
  - Convolution Sum
  - Discrete Convolution
  - Discrete-Time Convolution
subject: "[[Signals & Systems]]"
parent:
  - "[[LTI|Linear Time-Invariant (LTI) Systems]]"
formula:
  - "Convolution (Discrete) : $$y[n] = x[n] * h[n] = \\sum_{k=-\\infty}^{\\infty} x[k] h[n-k]$$"
modified: 2026-07-22T10:58:54
---
### Discrete-Time Convolution Sum
#convolution-sum #lti-systems #discrete-time-analysis

> The **convolution sum** is the fundamental operation for determining the output of a discrete-time [[LTI|Linear Time-Invariant (LTI) system]]. It is the discrete-time counterpart to the [[Continuous-Time Convolution Integral|convolution integral]]. It defines the output sequence $y[n]$ in terms of the input sequence $x[n]$ and the system's [[Impulse Response of an LTI System|impulse response]] $h[n]$.

$$ y[n] = x[n] * h[n] $$

#### Definition of the Convolution Sum
#convolution-formula-dt

The convolution of two discrete-time sequences, $x[n]$ and $h[n]$, is defined by the summation: $$\boxed{\quad y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k] \quad}$$

> [!formula] Support & Length Property of Discrete Convolution
> If $x[n]$ is non-zero in $n_1 \le n \le n_2$ (length $N_1 = n_2 - n_1 + 1$) and $h[n]$ is non-zero in $m_1 \le n \le m_2$ (length $N_2 = m_2 - m_1 + 1$):
> 
> * ==**Start & End Range**: $y[n]$ is non-zero for $n_1 + m_1 \le n \le n_2 + m_2$==
> * **Total Length of Output**: 
>   $$N_y = N_1 + N_2 - 1$$

Here, $k$ is the summation index (a dummy variable), and the sum is performed for each output index $n$.

---
#### Derivation and Interpretation

The convolution sum arises directly from the properties of linearity and time-invariance.
1.  Any discrete-time signal can be represented as a sum of scaled and shifted impulses:
    $$ x[n] = \sum_{k=-\infty}^{\infty} x[k] \delta[n-k] $$
2.  The response of an LTI system to this input is the sum of the responses to each term in the summation (due to linearity).
3.  The response to a shifted impulse $\delta[n-k]$ is a shifted impulse response $h[n-k]$ (due to time-invariance).
4.  Therefore, the total output is the weighted sum of these shifted impulse responses, where the weights are the input sample values $x[k]$. This leads directly to the convolution sum formula.

---
#### Graphical Convolution: The "Flip and Shift" Method
#graphical-convolution-dt

The graphical method for discrete convolution is analogous to the continuous-time version and is essential for building intuition. To find $y[n]$:

1.  **Flip**: Take the sequence $h[k]$ and reflect it about the origin $k=0$ to get $h[-k]$.
2.  **Shift**: Shift the flipped sequence $h[-k]$ by $n$ samples. A positive $n$ shifts to the right. This gives $h[n-k]$.
3.  **Multiply**: For the chosen value of $n$, multiply the two sequences $x[k]$ and $h[n-k]$ sample by sample.
4.  **Sum**: Add together all the values in the resulting product sequence. This sum is the value of the output $y[n]$ for that specific index $n$.
5.  **Repeat**: Repeat steps 2-4 for all relevant values of $n$ to find the entire output sequence $y[n]$.

---
#### Properties of Convolution
#convolution-properties-dt

The convolution sum follows the same algebraic properties as the integral.

> [!refer]
> [[Properties of Convolution]]

-   **Commutative Property**:
    $$\boxed{\quad x[n] * h[n] = h[n] * x[n] = \sum_{k=-\infty}^{\infty} h[k] x[n-k] \quad}$$
-   **Associative Property** (for systems in cascade):
    $$\boxed{\quad (x[n] * h_1[n]) * h_2[n] = x[n] * (h_1[n] * h_2[n]) \quad}$$
-   **Distributive Property** (for systems in parallel):
    $$\boxed{\quad x[n] * (h_1[n] + h_2[n]) = (x[n] * h_1[n]) + (x[n] * h_2[n]) \quad}$$
-   **Convolution with an Impulse**:
    $$\boxed{\quad x[n] * \delta[n-n_0] = x[n-n_0] \quad}$$

> [!pyq]- PYQ : 2021
> ![[ee_2021#^q7]]

> [!trick] Sum of Samples Property (Area Equivalent in DT)
> The sum of all elements in the output sequence equals the product of the sums of the input sequences:
> 
> $$\sum_{n=-\infty}^{\infty} y[n] = \left(\sum_{n=-\infty}^{\infty} x[n]\right) \left(\sum_{k=-\infty}^{\infty} h[k]\right)$$
> 
> > [!examtip] Exam Tip
> > Use this to quickly verify options or find unknown constants without evaluating full convolution.

---
#### The Convolution Theorem
#convolution-theorem-dt

Similar to the CT case, the convolution theorem simplifies analysis by moving to the frequency or transform domain.

> [!memory]
> **Time Domain**: $$y[n] = x[n] * h[n]$$
> **Z-Domain**: $$\boxed{\quad Y(z) = X(z)H(z) \quad}$$
> **DTFT Domain**: $$\boxed{\quad Y(e^{j\Omega}) = X(e^{j\Omega})H(e^{j\Omega}) \quad}$$
  This transforms the complex convolution sum in the time domain into a simple multiplication in the transform domain.

---
### Related Concepts
#convolution-sum/related-concepts

> [[Impulse Response of an LTI System]]

[[Continuous-Time Convolution Integral]] (The continuous-time counterpart)
[[LTI|Linear Time-Invariant (LTI) System]]
[[Graphical and Analytical Convolution]]
[[Properties of Convolution]]
[[The Z-Transform|Z-Transforms]] (The primary tool for applying the convolution theorem in DT)
[[Discrete-Time Unit Impulse and Unit Step Sequences]]
