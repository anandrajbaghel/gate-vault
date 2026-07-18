---
tags:
  - half-power-frequency
  - cutoff-frequency
  - 3dB-point
  - frequency-response
  - system-analysis
created: 2026-07-03
aliases:
  - -3dB Frequency
  - Cutoff Frequency
  - Corner Frequency
subject:
  - "[[Electric Circuits]]"
  - "[[Signals & Systems]]"
  - "[[Control Systems]]"
  - "[[Analog & Digital Electronics]]"
parent: "[[Frequency Domain Transfer Function]]"
confidence: 100
---

### Half-Power Frequency (-3dB)
#half-power-frequency #cutoff-frequency #system-analysis

> The **half-power frequency** (often denoted as $\omega_c$, $f_c$, $\omega_1$, or $\omega_2$) is the frequency at which the power delivered to or by a circuit has dropped to exactly **half** of its maximum mid-band or resonant value.

#### Mathematical Derivation of -3dB
#derivation #bode-plot

Since power is proportional to the square of voltage or current ($P \propto |V|^2$ or $P \propto |I|^2$), a drop to half power implies the voltage or current magnitude drops by a factor of $1/\sqrt{2}$ (approximately 0.707).

When we convert this magnitude ratio to decibels (dB) for a [[Bode Plots|Bode plot]]:
$$\text{Magnitude (dB)} = 20 \log_{10}\left(\frac{1}{\sqrt{2}}\right)$$
$$\text{Magnitude (dB)} \approx -3.01\text{ dB}$$
Hence, these boundaries are universally referred to as the **-3 dB frequencies**.

---
#### Domain-Specific Applications

##### 1. Filters & System Bandwidth
#filters #system-bandwidth 

In [[Filters|filter design]] and [[Bandwidth in Signals & Systems|system bandwidth]], this is known as the **cutoff frequency** ($\omega_c$). It defines the theoretical boundary between the passband and the stopband.
* For a basic first-order RC Low-Pass Filter, this occurs at: $$\omega_c = \frac{1}{RC}$$

---
##### 2. Resonance & Selectivity
#resonance #selectivity 

In [[Resonance|resonant circuits]], there are two half-power frequencies that bracket the peak response:
* **Lower half-power frequency** ($\omega_1$)
* **Upper half-power frequency** ($\omega_2$)

The structural [[Bandwidth and Selectivity|bandwidth (BW)]] of the circuit is defined as their difference: 
$$BW = \omega_2 - \omega_1$$
Furthermore, the resonant frequency ($\omega_0$) is the geometric mean of these two points: 
$$\omega_0 = \sqrt{\omega_1 \omega_2}$$

---
### Related Concept

> [[Frequency Domain Transfer Function]] (Hub)

[[Bandwidth and Selectivity]] (Hardware/Circuit tuning)
[[Bandwidth in Signals & Systems]] (Signal limits and rise-time trade-offs)
[[Filtering Concepts]] (Theoretical passband/stopband constraints)