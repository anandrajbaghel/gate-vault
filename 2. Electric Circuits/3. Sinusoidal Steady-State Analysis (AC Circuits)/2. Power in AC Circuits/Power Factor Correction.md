---
tags:
  - power-factor-correction
  - power-factor
created: 2026-06-01
aliases:
  - Power Factor Correction (PFC)
subject:
  - "[[Electric Circuits]]"
parent:
  - "[[Power Factor]]"
confidence: 9
formula:
  - "Power Factor Correction (PFC) : $$Q_C = Q_{old} - Q_{new} = P (\\tan(\\theta_{old}) - \\tan(\\theta_{new}))$$"
---
### Power Factor Correction (PFC)
#power-factor-correction

> The goal of PFC is to increase the power factor of a load, bringing it closer to unity. This is typically done for lagging loads by connecting a **capacitor bank in parallel** with the load.

> [!memory]
> The [[AC Power Analysis#Average (Real or True) Power, P|real power]] ($P$) consumed by the load remains unchanged.
> 
> > [!pyq]- PYQ : 2019
> > ![[ee_2019#^q11]]

**How it works**:
- The inductive load consumes reactive power ($Q_L$).
- The parallel capacitor supplies reactive power ($Q_C$).
- The capacitor provides the reactive power required by the load locally. This reduces the reactive power that the source needs to supply.
- By reducing the total [[AC Power Analysis#Reactive Power, Q|reactive power]] ($Q$), the total [[AC Power Analysis#Apparent Power, S|apparent power]] ($S$) drawn from the source is reduced, thus decreasing the total current and improving the [[power factor#Power Factor (PF)|power factor]].

---
#### Calculation for PFC
#pfc/calculation 

Let's improve a power factor from an initial value $PF_{old} = \cos(\theta_{old})$ to a desired value $PF_{new} = \cos(\theta_{new})$.

1. The real power P drawn by the load does not change.
2. The initial reactive power is $Q_{old} = P \tan(\theta_{old})$.
3. The desired final reactive power is $Q_{new} = P \tan(\theta_{new})$.
4. The reactive power that must be supplied by the capacitor, $Q_C$, is the difference.
    $$\boxed{\quad Q_C = Q_{old} - Q_{new} = P (\tan(\theta_{old}) - \tan(\theta_{new})) \quad}$$
5. The required capacitance can be calculated from $Q_C$. For a capacitor, $Q_C = \frac{V_{rms}^2}{X_C}$ and $X_C = \frac{1}{\omega C}$.
    $$\boxed{\quad C = \frac{Q_C}{\omega V_{rms}^2} \quad}$$
    where $\omega = 2\pi f$ and $V_{rms}$ is the RMS voltage across the capacitor.

> [!mistake] Capacitor Bank Line Current (Exam Trap)
> Once the required capacitor reactive power $Q_C$ (kVAR) is known,
> the **line current of a 3-phase capacitor bank** is obtained directly
> from the 3-phase reactive power definition:
> 
> $$ Q_C = \sqrt{3}\, V_L\, I_L $$
> 
> $$ \boxed{\quad  I_L = \frac{Q_C}{\sqrt{3}\, V_L} \quad} $$
> 
> - This formula is **independent of star or delta connection**
> - Do **NOT** use load current formulas
> - Do **NOT** calculate capacitance unless explicitly asked
> - Examiners expect this shortcut for 2-mark PF-correction questions

---
### Related Concepts
#pf-correction/related-concepts

> [[Power Factor]] 
> [[Synchronous Condenser]] 

[[Capacitors]] (The key component used for power factor correction)
[[Power System]] (PFC is a major concern in power system design and operation)
[[Complex Power and the Power Triangle]] (The fundamental tool for visualizing and calculating PFC)
[[AC Power Analysis]] (Defines the components involved)