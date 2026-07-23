---
tags:
  - signal-processing
  - signals-and-systems
  - signal-transformation
  - time-shifting
  - time-scaling
  - time-reversal
  - gate-ee
created: 2025-09-23
aliases:
  - Time Transformations on Signals
  - Signal Transformations on the Time Axis
  - "Example : Transformations of the Independent Variable"
  - "Transformation : Precedence Rule"
  - Delay (Right Shift)
  - Advance (Left Shift)
  - Compression
  - Expansion (Dilation)
  - Time Scaling and Shifting Properties
subject: "[[Signals & Systems]]"
parent:
  - Signals & Systems - Fundamentals
modified: 2026-07-23T16:31:56
---
### Transformations of the Independent Variable
#signal-transformation #time-axis-manipulation

> These operations transform a signal by manipulating its independent variable, typically time ($t$). They do not alter the amplitude of the signal but change its position, duration, or orientation on the time axis. Understanding these transformations is fundamental for analyzing signals and systems. The three basic transformations are time shifting, time scaling, and time reversal.

---
#### Time Shifting
#time-shifting

A time shift results in a signal that is delayed or advanced in time. The transformation is of the form $y(t) = x(t-t_0)$.

- **Delay (Right Shift)**: If $t_0 > 0$, the signal $x(t)$ is shifted to the right by $t_0$ seconds. What happens at $t=0$ in $x(t)$ now happens at $t=t_0$ in $y(t)$.
- **Advance (Left Shift)**: If $t_0 < 0$, the signal $x(t)$ is shifted to the left. For example, for $y(t) = x(t+2)$, we have $t_0 = -2$, which is an advance of 2 seconds.

$$\boxed{\quad y(t) = x(t - t_0) \quad}$$
- If $t_0 > 0 \implies$ Delay (Right Shift)
- If $t_0 < 0 \implies$ Advance (Left Shift)

---
#### Time Scaling
#time-scaling

Time scaling compresses or expands a signal along the time axis. The transformation is of the form $y(t) = x(at)$.

- **Compression**: If $|a| > 1$, the signal is compressed in time. It becomes "faster" or narrower. A feature at $t_1$ in $x(t)$ now occurs at $t_1/a$ in $y(t)$.
- **Expansion (Dilation)**: If $0 < |a| < 1$, the signal is expanded in time. It becomes "slower" or wider.

$$\boxed{\quad y(t) = x(at) \quad}$$
- If $|a| > 1 \implies$ Compression
- If $0 < |a| < 1 \implies$ Expansion

---
#### Time Reversal
#time-reversal

Time reversal reflects the signal about the vertical axis ($t=0$). The transformation is of the form $y(t) = x(-t)$.

- This is a special case of time scaling where $a = -1$.
- The part of the signal for $t>0$ is flipped to $t<0$ and vice-versa.

$$\boxed{\quad y(t) = x(-t) \quad}$$

---
#### Combined Transformations
#signal-transformation-order

When a signal undergoes multiple transformations of the form $y(t) = x(at+b)$, the order of operations is critical. A common source of error is applying the transformations in the wrong sequence.

The most reliable method follows a fixed precedence rule: **Shifting followed by Scaling**.

##### Precedence Rule for $y(t) = x(at+b)$
#gate-trick #precedence-rule

To obtain the signal $y(t) = x(at+b)$ from $x(t)$:
1.  **Time Shift**: First, shift $x(t)$ by $b$. This yields an intermediate signal $v(t) = x(t+b)$.
2.  **Time Scale**: Then, scale the new signal $v(t)$ by $a$. This means replacing $t$ with $at$, resulting in $y(t) = v(at) = x(at+b)$.

> [!example] Example
> Let a signal $x(t)$ be a rectangular pulse non-zero for $1 \le t \le 2$. Find the interval for $y(t) = x(4-2t)$.
> Here, we rewrite it as $y(t) = x(-2t+4)$. So, $a=-2$ and $b=4$.
>
> 1.  **Shift**: First, shift $x(t)$ left by $b=4$.
>     -   The original interval becomes $[1-4, 2-4] = [-3, -1]$. Let this signal be $v(t) = x(t+4)$
> 2.  **Scale**: Now, scale $v(t)$ by $a=-2$. This involves compressing by 2 and reversing.
>     -   We divide the interval endpoints by $a=-2$.
>     -   The new start point is $-3 / (-2) = 1.5$.
>     -   The new end point is $-1 / (-2) = 0.5$.
>
> The resulting signal $y(t)$ is non-zero for the interval $[0.5, 1.5]$.

---

### Related Concepts
#signal-transformation/related-concepts

> [[Signal Definition and Classification (CT vs DT)]]

[[Signal Properties (Periodic & Aperiodic, Even & Odd)]]
[[Continuous-Time Convolution Integral]]
[[Fourier Transforms]] (Properties like time-shifting and time-scaling are direct consequences of these transformations)
