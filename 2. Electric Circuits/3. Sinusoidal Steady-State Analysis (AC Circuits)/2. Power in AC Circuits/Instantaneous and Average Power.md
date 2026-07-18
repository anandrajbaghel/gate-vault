---
tags:
  - ac-power
  - average-power
  - instantaneous-power
  - power-factor
  - ac-circuits
created: 2025-09-23
aliases:
  - Instantaneous Power (Derivation)
  - Average Power (Derivation)
  - Real Power
  - Average Power in AC Circuits
  - "Average Power: Non-Sinusoidal Waveforms"
subject: "[[2. Electric Circuits/Electric Circuits|Electric Circuits]]"
parent: "[[AC Power Analysis]]"
confidence: 9
formula:
  - "Instantaneous Power (derived) : $$p(t) = \\underbrace{\\frac{V_m I_m}{2} \\cos(\\theta_v - \\theta_i)}_{\\text{Constant Part}} + \\underbrace{\\frac{V_m I_m}{2} \\cos(2\\omega t + \\theta_v + \\theta_i)}_{\\text{Fluctuating Part at } 2\\omega}$$"
---
### Instantaneous and Average Power
#ac-power

> In AC circuits, the power delivered to a load is not constant but varies with time. ==**Instantaneous power, $p(t)$**, describes the power at any given moment==. However, for most applications, we are interested in the ==**average power, $P$**, which represents the net energy transferred per unit time and corresponds to the power that performs useful work or is dissipated as heat==.

> [!prerequisite] 🔥Prerequisite
> [[Trigonometric Identities]]

---
#### Instantaneous Power
#instantaneous-power

==Instantaneous power is the product of the instantaneous voltage across an element and the instantaneous current flowing through it==.
$$p(t) = v(t) \cdot i(t)$$
Consider a general linear load with a sinusoidal voltage and current:
$v(t) = V_m \cos(\omega t + \theta_v)$
$i(t) = I_m \cos(\omega t + \theta_i)$

The instantaneous power is then:
$$\begin{align}
p(t) &= [V_m \cos(\omega t + \theta_v)] [I_m \cos(\omega t + \theta_i)] \\
&= V_m I_m \cos(\omega t + \theta_v) \cos(\omega t + \theta_i)
\end{align}$$

> [!refer]
> Using the [[Trigonometric Identities#Product-to-Sum Formulas|trigonometric identity]] $$\cos A \cos B = \frac{1}{2}[\cos(A-B) + \cos(A+B)]$$

$$\begin{align}
p(t) &= \frac{V_m I_m}{2} [\cos((\omega t + \theta_v) - (\omega t + \theta_i)) + \cos((\omega t + \theta_v) + (\omega t + \theta_i))] \\
p(t) &= \underbrace{\frac{V_m I_m}{2} \cos(\theta_v - \theta_i)}_{\text{Constant Part}} + \underbrace{\frac{V_m I_m}{2} \cos(2\omega t + \theta_v + \theta_i)}_{\text{Fluctuating Part at } 2\omega}
\end{align}$$
This shows that ==instantaneous power has two components: a constant DC offset and a sinusoidal component oscillating at twice the source frequency ($2\omega$)==.

---
#### Average Power (P)
#average-power #real-power

==Average power is the average of the [[#instantaneous power]] over one complete cycle ($T = 2\pi/\omega$).==
$$P = \frac{1}{T} \int_0^T p(t) dt$$

> [!pyq]- PYQ : 2019, 2018
> ![[ee_2019#^q43]]
> 
> ---
> ![[ee_2018#^q48]]

When we average the expression for $p(t)$, the average of the second term, $\cos(2\omega t + \dots)$, over a complete cycle is zero. Therefore, the average power is simply the constant part.
$$P = \frac{V_m I_m}{2} \cos(\theta_v - \theta_i)$$
It is more convenient to express this using RMS (root-mean-square) values, where $V_{rms} = V_m/\sqrt{2}$ and $I_{rms} = I_m/\sqrt{2}$.
Substituting these into the equation gives the standard formula for average power:
$$\boxed{\quad P = V_{rms} I_{rms} \cos(\theta_v - \theta_i) \quad}$$
- **Units**: Watts (W).
- This is the power actually consumed by the load, typically dissipated as heat in resistive components.
- The term $\cos(\theta_v - \theta_i)$ is called the **[[Power Factor#Power Factor (PF)|Power Factor (PF)]]**.

> [!warning] **Average Power: Non-Sinusoidal Waveforms**
> **Rule:** Average power is the sum of the powers of individual harmonic components.
> $$P_{avg} = V_0 I_0 + \sum_{n=1}^{\infty} V_{n,rms} I_{n,rms} \cos(\theta_n - \phi_n)$$
> 
> > [!fail] Key Insight
> > If a harmonic is present in the current but NOT in the voltage (or vice versa), it contributes **zero** to the average power.
> 
> > [!link] Power Electronics Extension
> > For how these harmonics warp the power triangle into 3D and affect the true power factor, see [[Distortion Power and True Power Factor]].

---
#### Power in Ideal Passive Elements
#power/passive-elements

1. **Purely Resistive Load**:
    - Voltage and current are in phase, so the phase angle difference $(\theta_v - \theta_i)$ is $0^\circ$.
    - Power Factor = $\cos(0^\circ) = 1$.
    - $P = V_{rms} I_{rms}$. The maximum possible average power is delivered.
    - $p(t)$ is always non-negative, meaning power is always being absorbed by the resistor.
2. **Purely Inductive Load**:
    - Voltage leads current by $90^\circ$, so $(\theta_v - \theta_i) = 90^\circ$.
    - Power Factor = $\cos(90^\circ) = 0$.
    - $\boxed{\quad P = 0 \quad}$.
    - There is no net energy consumption. The inductor stores energy during one half of the cycle and returns it to the source during the other half.
3. **Purely Capacitive Load**:
    - Current leads voltage by $90^\circ$, so $(\theta_v - \theta_i) = -90^\circ$.
    - Power Factor = $\cos(-90^\circ) = 0$.
    - $\boxed{\quad P = 0 \quad}$.
    - Similar to the inductor, there is no net energy consumption. Energy is stored and returned to the source.

> [!warning] Waveform Scaling: Peak vs RMS
> Basic AC textbooks assume pure sinusoids. Power electronics does not. Always check the waveform shape before plugging values into $P = V_{\text{rms}}I_{\text{rms}}\cos\theta$.
> 
> * **Pure Sinusoid:** $V_{\text{rms}} = \frac{V_m}{\sqrt{2}}$
> * **Symmetrical Square Wave:** $V_{\text{rms}} = V_m$
> * **Sawtooth / Triangular Wave:** $V_{\text{rms}} = \frac{V_m}{\sqrt{3}}$
> 
> If a problem states "an AC voltage of $230\text{V}$", it implies **RMS** by default. If it says "a peak voltage of $325\text{V}$", you must convert it based on the wave profile before evaluating power expressions.

---
### Related Concepts
#average-power/related-concepts

> [[AC Power Analysis]] (Builds directly on this concept by defining the other components of AC power)

[[Complex Power and the Power Triangle]] (Provides a vector representation of power)
[[Power Factor]] (Explores the significance of the power factor term in detail)
[[Phasors and Impedance Concept]] (The foundation for defining the phase angles $\theta_v$ and $\theta_i$)
