---
question paper: "[[ee_2024]]"
original: "[[ee_2024.pdf]]"
question: "[[ee_2024#^q13]]"
tags:
  - example/nodal-analysis
aliases:
  - "Example : Nodal Analysis"
---
### Nodal Analysis Example

![[ee_2024#^q13]]

---
#### Solution (step-by-step)

Label the nodes: bottom = $0$, $V_L$ = top of the 10-V source = **10 V** (given), $V_M$ = node between $\alpha$ and $2\Omega$ (top of the $1\Omega$), $V_R$ = top of the 10-A source.

KCL at the right node ($V_R$): the only passive path out is through $2\Omega$, so
$$\frac{V_R-V_M}{2}=10\quad\Rightarrow\quad V_R=V_M+20$$

KCL at the middle node ($V_M$) (currents through $\alpha$, $2\Omega$ and $1\Omega$ sum to $0$):
$$\frac{V_M-V_L}{\alpha}+\frac{V_M-V_R}{2}+\frac{V_M-0}{1}=0$$

Substitute $V_L=10$ and $V_R=V_M+20$ :

$$\begin{align}
\frac{V_M-10}{\alpha}+\frac{V_M-(V_M+20)}{2}+V_M &=0 \\
\frac{V_M-10}{\alpha}-10+V_M &= 0 \\
\Big(\frac{1}{\alpha}+1\Big)(V_M-10) &= 0
\end{align}$$


Thus $V_M=10$ (physical $\alpha ≠ −1$).

So $V_M=10 V$ and $V_R=V_M+20=30 V$. The voltage across $\alpha$ is $V_M-V_L=0$, so **no current flows through $\alpha$**. Therefore the current through the 10-V source is $0$ A.

Power delivered by the 10-V source = $V\cdot I = 10\cdot 0 = \mathbf{0\ \text{W}}$

Answer: **(A) 0**.