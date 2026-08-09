---
tags:
  - flashcards
---

**Q.** Capacitance of a Single-Phase Two-Wire Line is given by? (**Line-to-Line** & **Line-to-Neutral**)
?
- For L-L $$\boxed{\quad C_{ab} = \frac{\pi \epsilon_0}{\ln(D/r)} \text{ F/m} \quad}$$
- For L-N $$\boxed{\quad C_n = C_{an} = C_{bn} = \frac{2\pi\epsilon_0}{\ln(D/r)} \text{ F/m} \quad}$$
The above formulas are in **Farad per meter**.
$\epsilon_0 = 8.854 \times 10^{-12}$

#power-system / [[Capacitance of Single-phase and Three-phase Lines]]

---
**Q.** Kron Reduction formula for the matrix $\mathbf{Y}$ is $$\mathbf{Y}=\begin{bmatrix}Y_{aa} & Y_{ab}\\ Y_{ba} & Y_{bb}\end{bmatrix},$$
where $Y_{aa}$ is $3\times3$ for buses 1-2-3, $Y_{bb}$ is scalar for node 4, and $Y_{ab}$ is $3\times1$.
?
Kron reduction formula $$Y_{\text{reduced}} = Y_{aa} - Y_{ab}Y_{bb}^{-1}Y_{ba}$$

#power-system / [[Kron Reduction]]

#power-system / [[Bus Admittance Matrix (Y-bus) Formulation]]

---
**Q.** What is lagging power factor and value of $\theta \text{ (>,< or =) } 0$
?
Current lags the voltage ($\theta > 0$)
- Occurs in inductive circuits (e.g., motors, transformers).

#electric-circuits / [[Power Factor]]

---
**Q.** What is leading power factor and value of $\theta \text{ (>,< or =) } 0$
?
Current leads the voltage ($\theta < 0$)
- Occurs in capacitive circuits.

#electric-circuits / [[Power Factor]]

---
**Q.** What is unity power factor and value of $\theta \text{ (>,< or =) } 0$
?
Current is in phase with voltage ($\theta = 0$)
- Occurs in purely resistive circuits.
- This is the ideal scenario, where all supplied power does useful work.

#electric-circuits / [[Power Factor]]

---
**Q.** Different Internal EMF (or Internal Generated Voltage) for different models (Synchronous Internal EMF $E_f$, Transient Internal EMF $E^\prime$ and Subtransient Internal EMF $E^{\prime\prime}$) are given by:
?
Different Internal EMF are
1. **Synchronous Internal EMF** : $E_f$
	$$\boxed{\quad \vec{E}_f = \vec{V}_t + j\vec{I}_a X_s \quad}$$
		$X_s$ : Steady State Reactance
2. **Transient Internal EMF** : $E^{\prime}$
	$$\boxed{\quad \vec{E}' = \vec{V}_t + j\vec{I}_a X_d' \quad}$$
		$X_d^\prime$ : Transient Reactance
3. **Subtransient Internal EMF** : $E^{\prime\prime}$
	$$\boxed{\quad \vec{E}'' = \vec{V}_t + j\vec{I}_a X_d'' \quad}$$
		$X_d^{\prime \prime}$ : Subtransient Reactance

$\vec{V}_t$ : Terminal Voltage
$\vec{I}_a$ : Armature Current

#electrical-machines / [[Internal EMF]]

---
**Q.** Standard Gaussian integral $\int_{-\infty}^{\infty} e^{-x^2}\,dx$ is equal to?
?
$$\int_{-\infty}^{\infty} e^{-x^2}\,dx=\sqrt{\pi}$$
#mathematics / [[Evaluation of Improper Integrals#Important Improper Integrals in Engineering]]

---
