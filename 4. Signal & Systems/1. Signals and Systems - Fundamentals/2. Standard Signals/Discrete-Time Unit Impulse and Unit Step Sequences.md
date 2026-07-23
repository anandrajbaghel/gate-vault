---
tags:
  - signal-processing
  - signals-and-systems
  - standard-signals
  - discrete-time
  - impulse-sequence
  - step-sequence
  - gate-ee
created: 2025-09-23
aliases:
  - Unit Impulse Sequence
  - Unit Step Sequence
  - Kronecker Delta
subject: "[[Signals & Systems]]"
parent:
  - Standard Signals
formula:
  - "Relationship between Unit Step and Unit Impulse Sequence : $$\\delta[n] = u[n] - u[n-1]$$"
  - "Step Sequence as running sum of Impulse Sequence : $$u[n] = \\sum_{k=-\\infty}^{n} \\delta[k]$$"
modified: 2026-07-23T16:33:55
---
### Discrete-Time Unit Impulse and Unit Step Sequences
#unit-step-sequence #unit-impulse-sequence #kronecker-delta #standard-signals

> The discrete-time **unit step sequence** $u[n]$ and **unit impulse sequence** $\delta[n]$ are the fundamental building blocks for all discrete-time signals. Unlike their continuous-time counterparts, they are simple, well-defined functions (not generalized functions), making their manipulation more straightforward. They are crucial for defining the impulse response and analyzing [[LTI|LTI systems]] in the discrete domain.

---
#### The Unit Step Sequence, $u[n]$
#unit-step-sequence

The unit step sequence is a signal that is zero for negative indices and one for all non-negative indices.

-   **Definition**:
    $$\boxed{\quad u[n] = \begin{cases} 1, & n \ge 0 \\ 0, & n < 0 \end{cases} \quad}$$
-   **Application**: It is used to represent **causal sequences**. Multiplying any sequence $x[n]$ by $u[n]$ makes the resulting sequence zero for $n<0$.

---
#### The Unit Impulse Sequence, $\delta[n]$
#kronecker-delta #unit-impulse-sequence

The unit impulse sequence, often called the **Kronecker delta**, is the most fundamental discrete-time signal. It consists of a single non-zero sample at the origin.

-   **Definition**:
    $$\boxed{\quad \delta[n] = \begin{cases} 1, & n = 0 \\ 0, & n \neq 0 \end{cases} \quad}$$

##### Properties of the Unit Impulse Sequence

1.  **Sifting Property**: This property allows us to "sift out" or select a single value from a sequence.
    $$\boxed{\quad \sum_{n=-\infty}^{\infty} x[n] \delta[n-n_0] = x[n_0] \quad}$$
    The sum is non-zero only when the argument of the delta function is zero, i.e., when $n = n_0$.

2.  **Representation Property**: This is a cornerstone of discrete-time signal processing. It states that **any** discrete-time signal can be represented as a sum of scaled and shifted impulse sequences.
    $$\boxed{\quad x[n] = \sum_{k=-\infty}^{\infty} x[k] \delta[n-k] \quad}$$
    This identity is the basis for the [[Discrete-Time Convolution Sum]].

---
#### Relationship Between $u[n]$ and $\delta[n]$
#impulse-step-relationship-dt

The relationship between the discrete-time step and impulse is defined by the operations of first difference and running sum, which are the discrete-time equivalents of differentiation and integration.

-   The unit impulse is the **first difference** of the unit step.
    $$\boxed{\quad \delta[n] = u[n] - u[n-1] \quad}$$
    *Intuition*: The difference between $u[n]$ and a delayed version $u[n-1]$ is non-zero only at $n=0$, where it has a value of $u - u[-1] = 1 - 0 = 1$.

-   The unit step is the **running sum** (discrete integral) of the unit impulse.
    $$\boxed{\quad u[n] = \sum_{k=-\infty}^{n} \delta[k] \quad}$$
    *Intuition*: The sum is zero for $n<0$. At $n=0$, the sum includes the $\delta$ term, so it "accumulates" a value of 1 and holds it for all subsequent values of $n$.

---
### Related Concepts
#unit-sequences/related-concepts

> [[Impulse Response of an LTI System]]

[[Discrete-Time Convolution Sum]] (Directly derived from the representation property of $\delta[n]$)
[[The Z-Transform]] (The Z-transform of $\delta[n]$ is 1, and the Z-transform of $u[n]$ is $z/(z-1)$)
[[Continuous-Time Unit Impulse and Unit Step Functions]] (The continuous-time counterparts)