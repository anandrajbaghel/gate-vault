---
original: "[[ee_2024.pdf]]"
question paper: "[[ee_2024]]"
question: "[[ee_2024#^q56]]"
aliases:
  - "Example : Transient Stability"
tags:
  - example/transient-stability
---
### Transient Stability Example

![[ee_2024#^q56]]

---
#### Solution (step-by-step)

##### Step 1: Pre-fault equilibrium

The steady-state electrical power is $P_e = P_{max}\sin\delta$  
and the mechanical input is $P_m = 0.5P_{max}$.

At equilibrium: $$\sin\delta_0 = 0.5 \Rightarrow \delta_0 = \dfrac{\pi}{6}$$

##### Step 2: Relevant curves and angles

- During the fault, electrical power decreases due to increased network reactance.  
- After clearing, one line is removed, so the post-fault $P_{max}$ is smaller than the pre-fault $P_{max}$.  
- Post-fault electrical power:  
  $P_e^{post}(\delta) = \dfrac{P_{max}}{\sqrt{2}}\sin\delta$
- Mechanical input: $P_m = 0.5P_{max}$  
- Critical clearing angle: $\delta_c = \pi/2$

##### Step 3: Find $\delta_{max}$

At the maximum angle (where deceleration ends): $P_e^{post}(\delta_{max}) = P_m$

$$\dfrac{P_{max}}{\sqrt{2}}\sin\delta_{max} = 0.5P_{max}$$
$$\Rightarrow \sin\delta_{max} = \dfrac{1}{\sqrt{2}}$$
Since $\delta_{max} > \delta_c = \pi/2$,

$\delta_{max} = \dfrac{3\pi}{4}$

##### Step 4: Compute decelerating area

Decelerating area per $P_{max}$: $$\dfrac{A_{dec}}{P_{max}} = \int_{\delta_c}^{\delta_{max}} \left( \dfrac{1}{\sqrt{2}}\sin\delta - 0.5 \right) d\delta$$
Evaluating the integral:
$$\begin{align}
\dfrac{A_{dec}}{P_{max}} &= \left.\dfrac{-\cos\delta}{\sqrt{2}}\right|_{\pi/2}^{3\pi/4} - 0.5\left(\dfrac{3\pi}{4} - \dfrac{\pi}{2}\right) \\\\
&= \dfrac{1}{\sqrt{2}}(1 - \cos\dfrac{3\pi}{4}) - 0.5\cdot\dfrac{\pi}{4}
\end{align}$$
Now, $\cos\dfrac{3\pi}{4} = -\dfrac{1}{\sqrt{2}}$
$$\Rightarrow \dfrac{A_{dec}}{P_{max}} = \dfrac{1}{\sqrt{2}}\left(1 + \dfrac{1}{\sqrt{2}}\right) - \dfrac{\pi}{8}$$
Simplify: $\dfrac{A_{dec}}{P_{max}} = \dfrac{1}{2} - \dfrac{\pi}{8} = \dfrac{4 - \pi}{8}$

##### Step 5: Equal-area criterion

At the *critical clearing angle*, $A_{acc} = A_{dec}$ $$\Rightarrow A_{acc} = P_{max}\left(\dfrac{4 - \pi}{8}\right)$$
##### Step 6: Numerical value

$$\dfrac{4 - \pi}{8} = 0.1073$$
$$\Rightarrow A_{acc} = 0.1073P_{max} \approx 0.11P_{max}$$


> [!note]
> **Key Concept:**  
> The accelerating area must be calculated using the *fault-on* power curve (the valid network condition during the fault).  
> You cannot use the pre-fault $P_{max}\sin\delta$ curve since it no longer represents the system when the fault changes network reactance.

> [!tip]
> **Equal-Area Criterion Summary:**  
> $A_{acc} = \int_{\delta_0}^{\delta_c}(P_m - P_{e,fault})d\delta$  
> $A_{dec} = \int_{\delta_c}^{\delta_{max}}(P_{e,post} - P_m)d\delta$  
> At the stability limit, $A_{acc} = A_{dec}$.

---
##### Final Answer

Accelerating area at $\delta_c = \pi/2$:

$$A_{acc} = P_{max}\dfrac{4 - \pi}{8} \approx 0.11P_{max}$$