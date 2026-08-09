---
original: "[[ee_2024.pdf]]"
question paper: "[[ee_2024]]"
question: "[[ee_2024#^q38]]"
tags:
  - example/bibo
aliases:
  - "Example : BIBO Stability"
---
### BIBO Stability Check Example

![[ee_2024#^q38]]

---
#### Solution (step-by-step)

$$\{T_1x\}[n] = x[0] + x[1] + \cdots + x[n]$$
$$\{T_2x\}[n] = x[0] + \frac{1}{2}x[1] + \cdots + \frac{1}{2^n}x[n]$$

##### Step 1: Definition of BIBO Stability

A discrete-time system is **BIBO stable** if for every bounded input $x[n]$, i.e. $$|x[n]| \leq B < \infty \quad \forall \ n$$
the output $y[n]$ is also bounded, i.e. $$|y[n]| \leq M < \infty \quad \forall \ n$$

##### Step 2: Analyze $T_1$

$$y_1[n] = \sum_{k=0}^{n} x[k]$$

For bounded input $|x[k]| \le B$: $$|y_1[n]| \le \sum_{k=0}^{n} |x[k]| \le (n+1)B$$
As $n \to \infty$, $(n+1)B \to \infty$.

⛔ Therefore, $T_1$ **is not BIBO stable**.

##### Step 3: Analyze $T_2$

$$y_2[n] = \sum_{k=0}^{n} \frac{1}{2^k}x[k]$$
For bounded input $|x[k]| \le B$: $$|y_2[n]| \le \sum_{k=0}^{n} \frac{1}{2^k} |x[k]| \le B \sum_{k=0}^{n} \frac{1}{2^k}$$
The geometric series sum: $$\sum_{k=0}^{n} \frac{1}{2^k} = \frac{1 - (1/2)^{n+1}}{1 - 1/2} = 2 \left(1 - \left(\frac{1}{2}\right)^{n+1}\right) \le 2$$
Hence: $$|y_2[n]| \le 2B$$
which is bounded for all $n$.

✅ Therefore, $T_2$ **is BIBO stable**.

---
#### Final Answer

**Option (D):** $T_1$ is **not BIBO stable**, but $T_2$ **is BIBO stable**.
