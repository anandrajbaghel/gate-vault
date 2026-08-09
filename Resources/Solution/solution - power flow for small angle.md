---
original: "[[ee_2024.pdf]]"
question paper: "[[ee_2024]]"
question: "[[ee_2024#^q41]]"
aliases:
  - "Example : Power Flow (for small angle)"
tags:
  - example/power-flow
---
### Power Flow for Small Angle Example

![[ee_2024#^q41]]

---
#### Solution (step-by-step)

1. For a **lossless line** between buses *i* and *j* with voltage magnitudes  
   $|V_i| = |V_j| = 1$ and small phase angle differences,  
   the power flow is approximately given by:

   $$
   P_{ij} \approx \frac{1}{X_{ij}} (\theta_i - \theta_j)
   $$

2. From the figure, the line reactances are:

   $$
   X_{12} = \alpha x, \quad X_{13} = \beta x, \quad X_{23} = \gamma x
   $$

3. The real power flow from bus 1 to bus 2 is given as **0 pu**:

   $$
   P_{12} = \frac{\theta_1 - \theta_2}{\alpha x} = 0
   $$

   Hence,

   $$
   \theta_1 = \theta_2
   $$

4. With $\theta_1 = \theta_2$, the real power injections at buses 1 and 2 come only from the lines connected to **bus 3**:

   $$
   \begin{align}
   P_1 &= P_{13} = \frac{\theta_1 - \theta_3}{\beta x} \\
   P_2 &= P_{23} = \frac{\theta_2 - \theta_3}{\gamma x}
   \end{align}
   $$

   Since $\theta_1 = \theta_2$, both have the same numerator $(\theta_1 - \theta_3)$.

5. Taking the ratio:

   $$
   \frac{P_1}{P_2} = \frac{(\theta_1 - \theta_3)/(\beta x)}{(\theta_1 - \theta_3)/(\gamma x)} = \frac{\gamma}{\beta}
   $$

6. Given that $P_1 = m P_2$, we have:

   $$
   m = \frac{\gamma}{\beta}
   $$

   Therefore,

   $$
   \boxed{\gamma = m\beta}
   $$

---
##### Answer

**Correct Option is (A)** $\gamma = m\beta$
