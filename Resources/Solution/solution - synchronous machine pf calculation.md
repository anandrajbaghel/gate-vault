---
original: "[[ee_2024.pdf]]"
question paper: "[[ee_2024]]"
question: "[[ee_2024#^q40]]"
aliases:
  - "Example : Synchronous Machine"
tags:
  - example/synchronous-machine
---
### Synchronous Machine PF Calculation Example

![[ee_2024#^q40]]

---
#### Solution (step-by-step)

###### Step 1 : Rated per-phase voltage and current

Per-phase voltage: $$V_{ph} = \frac{11\,\text{kV}}{\sqrt{3}} = 6350.85\,\text{V}$$Rated current: $$I_{rated} = \frac{10\,\text{MVA}}{\sqrt{3}\times 11\,\text{kV}} = 524.864\,\text{A}$$

###### Step 2 : Phasor relation

Take terminal voltage $V_t$ as reference ($\angle 0^\circ$).

The total per-phase impedance seen from the generator terminals is: $$Z_{tot} = \frac{V_t}{I} = \frac{6350.85}{524.864} = 12.10\,\Omega \angle \theta$$
The current therefore lags $V_t$ by angle $\theta$.

###### Step 3 : Split total impedance

Total impedance = line reactance + load impedance: $$Z_{tot} = jX_{line} + Z_{load}$$$$Z_{load} = Z_{tot} - j5 = 12.10\angle\theta - j5$$

###### Step 4 : Given load power factor

Load p.f. = $\cos\phi_{load} = \sqrt{3}/2 = 0.866$ (lagging)

Hence load impedance angle: $$\phi_{load} = 30^\circ$$
So: $$\arg(Z_{load}) = 30^\circ$$

###### Step 5 : Solving for $\theta$

From: $$\arg(12.10\angle\theta - j5) = 30^\circ$$
Solving gives:
$$\theta = 51^\circ$$

###### Step 6 : Power factor at generator terminal

Since current lags terminal voltage by $51^\circ$: $$\text{Power Factor} = \cos(51^\circ) = 0.629 \approx 0.63$$

---
#### Answer

**(A) 0.63 lagging** $\boxed{\text{Power Factor at Generator Terminal} = 0.63\ \text{lagging}}$
