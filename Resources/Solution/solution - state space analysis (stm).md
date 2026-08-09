---
original: "[[ee_2016(2).pdf]]"
question paper: "[[ee_2016(2)]]"
question: "[[ee_2016(2)#^q49]]"
tags:
  - example/state-space-analysis/stm
aliases:
  - "Example : State-Space Analysis (STM)"
---
### State Space Analysis Example

![[ee_2016(2)#^q49]]

---
#### Solution (step-by-step)

For the LTI system $\dot{x} = A x$ with initial condition $x(0) = \alpha$,  
where $\alpha$ is an eigenvector of $A$ with eigenvalue $\lambda_1$,  
find the response $x(t)$.

##### Step 1: General solution of state equation
$$
x(t) = e^{At} x(0)
$$

Given:
$$
x(0) = \alpha
$$
So:
$$
x(t) = e^{At}\alpha
$$

##### Step 2: Use eigenvector property
Since $\alpha$ is an eigenvector of $A$:
$$
A\alpha = \lambda_1 \alpha
$$

Powers of $A$ act as:
$$
A^n \alpha = \lambda_1^n \alpha
$$

##### Step 3: Expand matrix exponential
$$
e^{At} = \sum_{n=0}^{\infty} \frac{(At)^n}{n!}
$$
Apply it to $\alpha$:
$$
e^{At}\alpha
= \sum_{n=0}^{\infty} \frac{t^n}{n!}A^n \alpha
= \sum_{n=0}^{\infty} \frac{t^n}{n!}\lambda_1^n \alpha
= e^{\lambda_1 t}\alpha
$$

---
#### Answer

**Option (A) $x(t)=e^{\lambda_1 t}\alpha$ is correct.**
