---
original: "[[ee_2025.pdf]]"
question paper: "[[ee_2025]]"
question: "[[ee_2025#^q57]]"
aliases:
  - "Example : Transient Analysis"
tags:
  - example/transient-analysis
---
### Transient Analysis Example

![[ee_2025#^q57]]

---
#### Solution (step-by-step)

##### **Step 1: Analyze the circuit at $t < 0$ (Initial Conditions)**

Before $t=0$, the switch (S) is **open**. We assume the circuit is in a steady state, meaning the capacitor acts as an **open circuit** for DC currents.

1.  **Right Loop:** Since the switch is open, the current from the **3 A** source flows entirely through the parallel **25 $\Omega$** resistor. Let's calculate the voltage at the node where the capacitor connects (let's call this Node A) relative to the bottom wire (ground).
    $$V_A = I \times R = 3 \text{ A} \times 25 \ \Omega = 75 \text{ V}$$

2.  **Left Loop:** The capacitor is an open circuit, so no current flows through the **2 $\Omega$** resistor or the capacitor branch ($I_C = 0$).
    * Because the current is 0, the voltage drop across the **2 $\Omega$** resistor is $0 \text{ V}$.
    * The potential at the positive terminal of the **100 V** source is passed directly to the left plate of the capacitor.
    * Potential at Left Plate = $100 \text{ V}$.
    * Potential at Right Plate (Node A) = $75 \text{ V}$.

3.  **Initial Capacitor Voltage ($V_{C}(0)$):**
    $$V_{C}(0) = V_{\text{Left Plate}} - V_{\text{Right Plate}}$$
    $$V_{C}(0) = 100 \text{ V} - 75 \text{ V} = \mathbf{25 \text{ V}}$$

> [!warning] Approach via Source Transformation
> We can also solve it using [[Source Transformation]], for this particular question source transformation is a better approach.
> 
> We simply replace right side resistor and current in parallel with a series voltage and resistor - polarity of the voltage source is always in the direction of the current source’s arrow.
> 
> From source transformation we get capacitor’s left plate voltage directly equal to $75V$ (since, at steady-state i.e. $t<0^-$, capacitor will act as open circuit so no current flows through resistor $R=25 \ \Omega$ at this instance). So we get voltage difference across capacitor for $t<0^-$ (steady-state) equals to $100V - 75V = 25V$.
> 
> Rest approach is same as in this solution.

---
##### **Step 2: Analyze the circuit for $t \ge 0$ (Transient Response)**

At $t=0$, the switch (S) **closes**.

1.  **Circuit Simplification:** Closing the switch connects "Node A" directly to the bottom wire (ground).
    * This shorts out the right side of the circuit (the 25 $\Omega$ resistor and 3 A source), effectively removing them from the capacitor's charging loop.
    * The remaining active circuit is a simple series loop containing the **100 V** source, the **2 $\Omega$** resistor, and the **5 F** capacitor.

2.  **Final Voltage ($V_{C}(\infty)$):**
    As $t \to \infty$, the capacitor will fully charge to the source voltage.
    $$V_{C}(\infty) = \mathbf{100 \text{ V}}$$

3.  **Time Constant ($\tau$):**
    The Thevenin resistance seen by the capacitor is the series resistor $R = 2 \ \Omega$.
    $$\tau = R \cdot C = 2 \ \Omega \times 5 \text{ F} = \mathbf{10 \text{ s}}$$

---
##### **Step 3: Solve for Time ($t$)**

The voltage across a charging capacitor is given by the standard transient equation:
$$V_{C}(t) = V_{C}(\infty) + [V_{C}(0) - V_{C}(\infty)] e^{-t/\tau}$$
Substitute the known values:
$$V_{C}(t) = 100 + [25 - 100] e^{-t/10}$$
$$V_{C}(t) = 100 - 75 e^{-t/10}$$
We need to find the time $t$ when the capacitor voltage reaches **50 V**:
$$50 = 100 - 75 e^{-t/10}$$
Rearrange to solve for $t$:
$$75 e^{-t/10} = 100 - 50$$
$$75 e^{-t/10} = 50$$
$$e^{-t/10} = \frac{50}{75} = \frac{2}{3}$$
Take the natural logarithm ($\ln$) of both sides:
$$-\frac{t}{10} = \ln\left(\frac{2}{3}\right)$$
$$t = -10 \times \ln(0.6667)$$
Using a calculator:
$$t \approx -10 \times (-0.4055)$$
$$t \approx 4.055 \text{ s}$$

---
#### Answer

Rounding off to one decimal place: $4.1$
