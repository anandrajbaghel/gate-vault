---
original: "[[ee_2023.pdf]]"
question paper: "[[ee_2023]]"
question: "[[ee_2023#^q33]]"
aliases:
  - "Example : Long Transmission Line MPT"
tags:
  - example/long-transmission-line-mpt
---
### Long Transmission Line Maximum Power Transfer Example

![[ee_2023#^q33]]

---
#### Solution (step-by-step)

##### Step 1: Given

1. Line length: 400 km  
2. $R = 0.035\ \Omega/\text{km}$  
3. $L = 1\ \text{mH/km}$  
4. $C = 0.01\ \mu\text{F/km}$  
5. Frequency: $f = 50\ \text{Hz}$  
6. Sending and receiving voltages: $V_S = V_R = 275\ \text{kV}$  
7. Nominal-$\pi$ model (but maximum real power condition depends only on series $(Z)$

##### Step 2: Condition for Maximum Active Power

For a transmission line with series impedance $Z = R + jX$ and phase angle difference $\theta$ between $V_S$ and $V_R$:
$$P_R = \frac{V_S V_R}{|Z|}\cos(\varphi - \theta) - \frac{V_R^2}{|Z|}\cos\varphi$$
where
$$\varphi = \angle Z = \tan^{-1}\left(\frac{X}{R}\right)$$
For maximum $P_R$:
$$\frac{dP_R}{d\theta} = \frac{V_S V_R}{|Z|}\sin(\varphi - \theta) = 0$$
Thus,
$$\varphi - \theta = 0 \quad\Rightarrow\quad \theta = \varphi$$
---
##### Step 3: Compute $\varphi = \tan^{-1}\left(\frac{X_{\text{total}}}{R_{\text{total}}}\right)$
Total resistance: $$R_{\text{total}} = 0.035 \times 400 = 14\ \Omega$$
Total inductance: $$L_{\text{total}} = 0.001 \times 400 = 0.4\ \text{H}$$
Reactance: $$X_{\text{total}} = \omega L = 2\pi (50)(0.4)$$
$$X_{\text{total}} = 40\pi \approx 125.6637\ \Omega$$
Angle: $$\theta = \tan^{-1}\left(\frac{125.6637}{14}\right)$$
$$\theta \approx 83.64^\circ$$
---
#### Final Answer

The correct numerical value is $\boxed{\quad\theta = 83.64^\circ\quad}$
