---
original: "[[ee_2022.pdf]]"
question paper: "[[ee_2022]]"
question: "[[ee_2022#^q57]]"
tags:
  - example/swing-equation
aliases:
  - "Example : Swing Equation Finding Angular Acceleration"
---
### Swing Equation Example

![[ee_2022#^q57]]

---
#### Solution (step-by-step)

##### Step 1: Given

1. Rating: 20 MVA
2. Voltage: 11.2 kV
3. 4-pole, 50 Hz
4. Inertia constant: $H = 15 \text{ MJ/MVA}$ 
5. Input power: $P_{in} = 15 \text{ MW}$ 
6. Output power: $P_{out} = 10 \text{ MW}$ 
##### Step 1: Stored kinetic energy
Since $H$ in MJ/MVA is equal to seconds: $$W = H \times S = 15 \times 20 = 300\ \text{MJ}$$
$$W = 300 \times 10^6\ \text{J}$$

##### Step 2: Synchronous mechanical speed
4-pole, 50 Hz: $$n_s = \frac{120f}{P} = \frac{120 \times 50}{4} = 1500\ \text{rpm}$$
Convert to rad/s: $$\omega_m = \frac{2\pi n_s}{60} = 2\pi \times 25 = 50\pi\ \text{rad/s}$$
##### Step 3: Accelerating power
$$
P_a = P_{in} - P_{out} = 15 - 10 = 5\ \text{MW}
$$
$$P_a = 5 \times 10^6\ \text{W}$$
##### Step 4: Angular acceleration
Using the identity (or can derive from [[power]] KE formula) $$\alpha = \frac{P_a \, \omega}{2W}$$
Substitute: $$\alpha = \frac{5 \times 10^6 \times 50\pi}{2 \times 300 \times 10^6}$$
$$\alpha = \frac{50\pi}{120}= \frac{5\pi}{12}\ \text{rad/s}^2$$
Numerically: $$\alpha \approx 1.3089969\ \text{rad/s}^2$$
##### Step 5: Convert to mechanical degrees/s²
$$
\alpha_{\deg} = \alpha \times \frac{180}{\pi}
= \frac{5\pi}{12} \times \frac{180}{\pi}
= 75\ \text{deg/s}^2
$$
---
#### Answer

The correct numerical value is $75\ \text{deg/s}^2$
