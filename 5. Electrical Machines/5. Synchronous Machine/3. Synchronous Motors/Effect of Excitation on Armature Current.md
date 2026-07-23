---
tags:
  - electrical-machines/synchronous-machines
  - synchronous-motor
  - v-curves
  - power-factor-correction
  - excitation-control
created: 2025-07-22
aliases:
  - V-curves
  - Inverted V-curves
  - Synchronous Motor V-curves
  - Excitation Control of Synchronous Motor
subject: "[[Electrical Machines]]"
parent:
  - "[[Synchronous Motors]]"
modified: 2026-07-23T20:53:08
---
### Effect of Excitation on Armature Current and Power Factor (V-curves and Inverted V-curves)
#v-curves #inverted-v-curves #synchronous-motor #power-factor-correction

> One of the most significant characteristics of a synchronous motor is its ability to operate at any desired power factor (lagging, unity, or leading). This is achieved by simply varying the DC field excitation current ($I_f$) while the mechanical load on the motor is kept constant. The graphical representations of these relationships are known as **[[V-curves]]** and **Inverted V-curves**.

#### The Underlying Principle

The behavior can be understood from the motor's per-phase phasor diagram. Neglecting armature resistance ($R_a$), the voltage equation is:
$$\vec{V_t} = \vec{E_f} + j\vec{I_a}X_s$$

> As already mentioned in [[Internal EMF#1. EMF behind Synchronous Impedance ($E_f$)|Internal EMF]]

> [!warning]- Synchronous Motor / Generator — **Exam-Safe Sign Convention**
> This callout resolves the most common GATE confusion in synchronous machines: **sign of $jIX_s$ and excitation level**.
>
> ---
> ##### Golden Physical Rule (ALWAYS check first)
> - **Leading power factor (capacitive)** → **Over-excited motor**
>   $$|E_f| > |V|$$
> - **Lagging power factor (inductive)** → **Under-excited motor**
>   $$|E_f| < |V|$$
>
> If your computed $|E_f|$ violates this rule → **your sign convention is wrong (even if math is consistent)**.
>
> ---
> ##### Exam-Standard Phasor Equation (Use by default)
> For **synchronous motors** (armature resistance neglected):
> $$\boxed{\quad E_f = V - j I X_s \quad}$$
>
> - Take **terminal voltage $V$ as reference**.
> - Current $I$:
>   - Leading PF → $+ \phi$
>   - Lagging PF → $- \phi$
>
> This convention is **implicitly assumed in GATE & competitive exams**.
>
> ---
> ##### Why This Works in Exams
> - Subtraction of $jIX_s$ naturally enforces:
>   - Leading PF → $|E_f| > |V|$
>   - Lagging PF → $|E_f| < |V|$
> - Matches **official keys** and avoids convention disputes.
>
> ---
> #####  Common Trap (DO NOT DO IN EXAMS)
> Using
> $$E_f = V + j I X_s$$
> **with the same current phasor**
> may be algebraically valid, but:
> - It silently changes current direction
> - Often flips motor ↔ generator interpretation
> - Leads to **loss of marks**
>
> ---
> ##### One-Line Sanity Check (Before Final Answer)
> $$\text{Leading PF} \Rightarrow E_f > V \qquad \text{Lagging PF} \Rightarrow E_f < V$$
>
> If not satisfied → **redo sign immediately**.

Where:
* $\vec{V_t}$ is the constant terminal voltage (from the supply).
* $\vec{E_f}$ is the back EMF or excitation EMF, whose magnitude is controlled by the field current $I_f$.
* $\vec{I_a}$ is the armature current.

The real power input to the motor is constant (assuming constant load and losses). The power equation is:
$$P_{in} = \frac{|V_t||E_f|}{X_s} \sin\delta = \text{Constant}$$
This implies that for a constant load, the term $|E_f|\sin\delta$ must remain constant. As we vary the field current $I_f$, the magnitude of $|E_f|$ changes, which forces the load angle $\delta$ to adjust to keep the power constant. This adjustment changes the phasor $$\vec{I_a} = \frac{\vec{V_t} - \vec{E_f}}{jX_s}$$, altering both its magnitude and its phase angle ($\phi$) relative to $\vec{V_t}$.

---
#### Conditions of Excitation

> See [[Machine Excitation Convention#Synchronous Motor]]

For a given constant load, three conditions of excitation exist:
1. **Under-Excitation**: The field current $I_f$ is low, resulting in a small back EMF ($|E_f| < |V_t|$). To meet the power demand, the motor must draw a large armature current ($I_a$) that **lags** the terminal voltage. The motor absorbs reactive power and behaves like an inductive load.
2. **Normal Excitation**: The field current is adjusted such that the motor operates at **Unity Power Factor (UPF)**. At this point, the armature current ($I_a$) is purely active and has its **minimum** value for the given load.
3. **Over-Excitation**: The field current $I_f$ is high, resulting in a large back EMF ($|E_f| > |V_t|$). The motor draws an armature current ($I_a$) that **leads** the terminal voltage. The motor delivers reactive power to the system and behaves like a capacitive load.

---
#### The V-Curves

A V-curve is a plot of the **armature current ($I_a$)** versus the **DC field current ($I_f$)** for a constant mechanical load.

![[V-Curves#Analysis of a Single V-Curve (Constant P)]]

#### The Inverted V-Curves

![[V-Curves#Inverted V-Curves]]

---
#### Application: Synchronous Condenser

![[Synchronous Condenser#Applications]]

---
### Related Concepts
#v-curves/related-concepts

> [[Principle of Operation of Synchronous Motors]]

[[Power-Angle Characteristics for Synchronous Machines]]
[[Equivalent Circuit and Phasor Diagram of an Alternator]]
[[Power Factor Correction]]
[[Synchronous Condenser]]
