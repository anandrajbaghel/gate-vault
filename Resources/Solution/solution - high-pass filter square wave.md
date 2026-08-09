---
original: "[[ee_2021.pdf]]"
question paper: "[[ee_2021]]"
question: "[[ee_2021#^q51]]"
tags:
  - example/filter/hpf
aliases:
  - "Example : High-Pass Filter with Square Wave"
---
### High-Pass Filter with Square Wave Example

![[ee_2021#^q51]]

---
#### Solution (step-by-step)

##### Step 1 : Identify Input Parameters
* **Input Voltage ($V_{in}$):** Switches between $0\text{ V}$ and $5\text{ V}$, so the step change is $\Delta V = 5\text{ V}$.
* **Frequency ($f$):** $100\text{ Hz}$.
* **Time Period ($T$):** $T = \frac{1}{f} = \frac{1}{100} = 0.01\text{ s}$ ($10\text{ ms}$).
* **Half-period duration ($t$):** For a standard square wave, the duration of one state is $t = \frac{T}{2} = 0.005\text{ s}$ ($5\text{ ms}$).
* **Resistance ($R$):** $820\ \Omega$.
* **Output Peak-to-Peak ($V_{p-p}$):** $6.2\text{ V}$.

---

##### Step 2 : Determine Peak Voltages
In a steady state, the output of a high-pass filter is centered around $0\text{ V}$ because the capacitor blocks the average DC component ($2.5\text{ V}$) of the input.
* The output waveform swings symmetrically between a maximum positive peak ($+V_{max}$) and a maximum negative peak ($-V_{max}$).
* Therefore, $V_{p-p} = 2 \cdot V_{max}$.
* Given $V_{p-p} = 6.2\text{ V}$, we find:
    $$V_{max} = \frac{6.2}{2} = 3.1\text{ V}$$

When the input jumps from $0\text{ V}$ to $5\text{ V}$, the output also jumps by $5\text{ V}$. If the output was at its most negative point ($-3.1\text{ V}$) just before the jump, it reaches $+1.9\text{ V}$? No, it reaches $V_{max} = 3.1\text{ V}$. 

Let's look at the decay: The voltage starts at $3.1\text{ V}$ and decays toward zero. Just before the next jump (downward by $5\text{ V}$), it must be at a voltage $V_{decay}$ such that:
$$V_{decay} - 5\text{ V} = -3.1\text{ V}$$
$$V_{decay} = 1.9\text{ V}$$

---

##### Step 3 : Apply the Decay Formula
The voltage across the resistor decays exponentially according to the formula:
$$V(t) = V_0 \cdot e^{-\frac{t}{RC}}$$

Substituting our values:
* $V(t) = 1.9\text{ V}$ (Voltage after $5\text{ ms}$ decay)
* $V_0 = 3.1\text{ V}$ (Initial voltage at start of pulse)
* $t = 0.005\text{ s}$
* $R = 820\ \Omega$

$$1.9 = 3.1 \cdot e^{-\frac{0.005}{820 \cdot C}}$$

---

##### Step 4 : Solve for Capacitance ($C$)
1.  **Divide by 3.1:**
    $$\frac{1.9}{3.1} = e^{-\frac{0.005}{820 \cdot C}} \approx 0.6129$$

2.  **Take the natural logarithm ($\ln$):**
    $$\ln(0.6129) \approx -\frac{0.005}{820 \cdot C}$$
    $$-0.4895 \approx -\frac{0.005}{820 \cdot C}$$

3.  **Isolate $C$:**
    $$C = \frac{0.005}{820 \cdot 0.4895} \approx 0.000012457\text{ F}$$

---
#### Answer
Converting the result to microfarads ($\mu\text{F}$):
$$C \approx 12.46\ \mu\text{F}$$

**The value of $C$ is $12.46\ \mu\text{F}$.**
