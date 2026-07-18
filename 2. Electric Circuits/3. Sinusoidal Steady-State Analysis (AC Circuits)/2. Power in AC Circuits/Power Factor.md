---
tags:
  - ac-power
  - power-factor
  - pf-correction
  - reactive-power-compensation
  - power-systems
created: 2025-09-23
aliases:
  - PF
  - "Cos(φ) : Power Factor"
  - power factor
subject: "[[2. Electric Circuits/Electric Circuits|Electric Circuits]]"
parent: "[[AC Power Analysis]]"
confidence: 9
importance:
  - very high
formula:
  - "Power Factor (PF) : $$\\text{PF} = \\cos(\\theta) = \\cos(\\theta_v - \\theta_i)$$"
  - "Power Factor (PF) : $$\\text{PF} = \\frac{P \\text{ (Watts)}}{S \\text{ (VA)}}$$"
---
### Power Factor
#power-factor #pf-correction

> ==**Power Factor (PF)** is a critical metric in AC power systems that measures how effectively electrical power is being converted into useful work.== A low power factor indicates inefficient power usage.

![[Power Triangle.png]]


> [!related]
> [[AC Power Analysis]]
> [[Power Factor Correction]]

---
#### Power Factor (PF)
#power-factor

The power factor is defined in two ways, which are equivalent:
1. As the ==cosine of the phase angle difference between the voltage and current==.
    $$\text{PF} = \cos(\theta) = \cos(\theta_v - \theta_i)$$
2. As the ==ratio of the [[AC Power Analysis#Average (Real or True) Power, P|real (useful) power]] to the [[AC Power Analysis#Apparent Power, S|apparent (total) power]].==
    $$\text{PF} = \frac{P \text{ (Watts)}}{S \text{ (VA)}}$$

- **Lagging Power Factor**: Occurs in inductive circuits (e.g., motors, transformers) where the current lags the voltage ($\theta > 0$). This is the most common type of load in industrial settings.
- **Leading Power Factor**: Occurs in capacitive circuits where the current leads the voltage ($\theta < 0$).
- **Unity Power Factor**: Occurs in purely resistive circuits where voltage and current are in phase ($\theta=0$, PF=1). This is the ideal scenario, where all supplied power does useful work.

> [!memory]- Power Factor Angle Sign Convention (Very Important)
> In AC power systems, the phase angle $\theta$ is defined as:
> 
> $$ \theta = \angle V - \angle I $$
> 
> - **Lagging power factor (inductive load)**:
>   - Current lags voltage
>   - $\angle I = -|\theta|$
>   $$ \boxed{\quad \theta > 0,\quad Q > 0 \quad} $$
> 
> - **Leading power factor (capacitive load)**:
>   - Current leads voltage
>   - $\angle I = +|\theta|$
>   $$ \boxed{\quad \theta < 0,\quad Q < 0 \quad} $$
> 
> **Important**:
> - The sign of $\theta$ indicates **lag or lead**,  
>   **NOT clockwise or anticlockwise rotation**.
> - Voltage is always taken as the reference phasor $(\angle V = 0^\circ)$.

> [!examtip] Machine excitation vs terminal PF (quick exam anchor)
> **Short rule:** If a synchronous machine is _overexcited_, it **supplies** VArs (acts as a source).  
> **Induction machines (grid-connected)** always **draw** magnetizing VArs (sink).
> 
> > [!refer]
> > [[Machine Excitation Convention]] for phasors and V-curves.

---
#### Disadvantages of a Low Power Factor
#low-power-factor/disadvantages

For a given amount of real power P delivered at voltage V, the source current is given by $I = \frac{P}{V \cos(\theta)}$. A low PF (small $\cos(\theta)$) leads to a higher current draw, which causes several problems:
1. **Increased Copper Losses**: The power lost in transmission lines and equipment windings is $P_{loss} = I^2R$. Since $I$ is inversely proportional to PF, a low PF drastically increases these losses.
2. **Larger Equipment Size**: Higher currents require thicker conductors and larger, more expensive transformers and generators to avoid overheating.
3. **Poor Voltage Regulation**: The increased current causes a larger voltage drop ($I \cdot Z$) across line impedances, leading to reduced voltage at the load.
4. **Utility Penalties**: Power companies often charge industrial customers a penalty for operating at a low power factor because it increases the generation and transmission costs.

---
### Related Concepts
#pf-correction/related-concepts

> [[Power Factor Correction]]
> [[Complex Power and the Power Triangle]] (The fundamental tool for visualizing and calculating PFC)

[[AC Power Analysis]] (Defines the components involved)
[[Power System]] (PFC is a major concern in power system design and operation)
[[Electrical Machines]] (Induction motors are the primary cause of low power factor in industry)
[[Capacitors]] (The key component used for power factor correction)