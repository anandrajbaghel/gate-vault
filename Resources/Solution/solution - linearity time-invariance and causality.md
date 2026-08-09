---
original: "[[ee_2024.pdf]]"
question paper: "[[ee_2024]]"
question: "[[ee_2024#^q37]]"
similar question:
  - "[[ee_2022#^q48]]"
  - "[[ee_2021#^q6]]"
tags:
  - example/linearity
  - example/time-invariance
  - example/causality
aliases:
  - "Example : Linearity, Time-Invariance & Causality"
---
### Linearity, Time-Invariance & Causality Example

![[ee_2024#^q37]]

---
#### Solution (step-by-step)

The given function is 
$$y(t) = e^{-t} \int_{-\infty}^{t} e^{\tau} x(\tau) \, d\tau$$
##### Step 1: Check Linearity

Let inputs $x_1(t)$ and $x_2(t)$ produce outputs $y_1(t)$ and $y_2(t)$ respectively.

For input $a x_1(t) + b x_2(t)$,
$$\begin{aligned}
y(t) &= e^{-t} \int_{-\infty}^{t} e^{\tau} [a x_1(\tau) + b x_2(\tau)] \, d\tau \\
&= a e^{-t} \int_{-\infty}^{t} e^{\tau} x_1(\tau) \, d\tau + b e^{-t} \int_{-\infty}^{t} e^{\tau} x_2(\tau) \, d\tau \\
&= a y_1(t) + b y_2(t)
\end{aligned}$$

✅ Hence, **the system is linear**.

---

##### Step 2: Check Time Invariance

Let the input be time-shifted: $x_s(t) = x(t - t_0)$

Then the output becomes: $$y_s(t) = e^{-t} \int_{-\infty}^{t} e^{\tau} x(\tau - t_0) \, d\tau$$
Substitute $u = \tau - t_0 \Rightarrow \tau = u + t_0$:
$$\begin{aligned}
y_s(t) &= e^{-t} \int_{-\infty}^{t - t_0} e^{u + t_0} x(u) \, du \\
&= e^{-t} e^{t_0} \int_{-\infty}^{t - t_0} e^{u} x(u) \, du \\
&= e^{-(t - t_0)} \int_{-\infty}^{t - t_0} e^{u} x(u) \, du \\
&= y(t - t_0)
\end{aligned}$$

✅ Hence, **the system is time-invariant**.

---
##### Step 3: Check Causality
The integral limits are from $-\infty$ to $t$, so the output $y(t)$ depends only on $x(\tau)$ for $\tau \leq t$.

✅ Therefore, **the system is causal**.

---
##### Final Answer

Option (B): Linear and Time-Invariant
