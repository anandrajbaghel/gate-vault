---
original: "[[ee_2021.pdf]]"
question paper: "[[ee_2021]]"
question: "[[ee_2021#^47]]"
aliases:
  - "Example :"
tags:
  - example/steady-state-error/with-disturbance
---
### Disturbance in Control System Example

![[ee_2021#^q47]]

---
#### Solution (step-by-step)

Given:

- Plant: $G_p(s)=\frac{2.2}{(1+0.1s)(1+0.4s)(1+1.2s)}$

- Compensator: $G_c(s)=K\frac{1+T_1 s}{1+T_2 s}$

- Disturbance input: $D(s)$  

We require that when disturbance is a **unit step**, the steady–state deviation in output must be  
$$C_{ss} \le 0.1.$$

---
##### Step 1: Disturbance-to-output transfer function

Since the disturbance is added **at the plant input**, the disturbance transfer function is:
$$
\frac{C(s)}{D(s)}=\frac{G_p(s)}{1+G_c(s)G_p(s)}.
$$

This comes from writing the plant input:
$$U(s)=G_c(s)E(s)+D(s),$$
with unity feedback:
$$E(s)=R(s)-C(s).$$
For disturbance analysis, set $R(s)=0$.  
Solving gives:
$$
\frac{C(s)}{D(s)}=\frac{G_p(s)}{1+G_c(s)G_p(s)}.
$$

---
##### Step 2: Apply Final Value Theorem

Disturbance is a unit step:
$$D(s)=\frac{1}{s}.$$
Steady output:
$$
C_{ss} = \lim_{s\to 0} sC(s)
       = \left.\frac{C(s)}{D(s)}\right|_{s=0}.
$$
So evaluate the transfer function at $s=0$.

---
##### Step 3: Evaluate at $s = 0$

Compute:
$$G_p(0)=\frac{2.2}{(1)(1)(1)}=2.2.$$
Also:
$$G_c(0)=K.$$
Thus:
$$
\frac{C}{D}\Big|_{s=0}
= \frac{2.2}{1+2.2K}.
$$
This equals the steady-state deviation.

---
##### Step 4: Apply the requirement

Steady-state deviation due to unit step disturbance must satisfy:
$$
\frac{2.2}{1+2.2K} \le 0.1.
$$
Solve:
$$
\begin{aligned}
2.2 &\le 0.1(1+2.2K), \\
2.2 &= 0.1 + 0.22K, \\
2.1 &= 0.22K, \\
K &\ge \frac{2.1}{0.22}.
\end{aligned}
$$
Compute:
$$K_{\min} = 9.545454\ldots \approx 9.55.$$

---
#### Answer

Correct numerical value is $K_{\min} = 9.55$

