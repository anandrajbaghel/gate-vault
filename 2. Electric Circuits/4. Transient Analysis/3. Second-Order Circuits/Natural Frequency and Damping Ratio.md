---
tags:
  - transient-analysis
  - second-order-systems
  - natural-frequency
  - damping-ratio
  - control-systems
  - rlc-circuits
created: 2025-09-23
aliases:
  - Natural Frequency
  - Damping Ratio
  - Undamped Natural Frequency
  - ζ
  - ω₀
subject: "[[2. Electric Circuits/Electric Circuits|Electric Circuits]]"
parent:
  - "[[Transient Analysis]]"
confidence: 9
---
### Natural Frequency and Damping Ratio
#natural-frequency #damping-ratio #second-order-systems

> For second-order systems like RLC circuits, the transient response is fully characterized by two fundamental parameters: the **undamped natural frequency ($\omega_0$)** and the **damping ratio ($\zeta$)**. Together, these parameters replace the single time constant of first-order circuits and provide a complete description of the system's dynamic behavior, including its speed and tendency to oscillate.

#### Undamped Natural Frequency
#undamped-natural-frequency 

The undamped natural frequency is the angular frequency at which the system would oscillate if there were no damping forces (i.e., if $R=0$). It is an intrinsic property determined solely by the energy storage elements, L and C.

For both series and parallel RLC circuits, the formula is the same:
$$\boxed{\quad \omega_0 = \frac{1}{\sqrt{LC}} \quad \text{(rad/s)} \quad}$$
This is identical to the resonant frequency of the circuit. It represents the natural rate of energy exchange between the inductor and capacitor.

---
#### Damping Factor
#damping-factor 

The damping factor, or Neper frequency, determines the rate of exponential decay of the amplitude of the transient response. It is a measure of how quickly the resistance dissipates the energy stored in the circuit.

-   For a **Series RLC Circuit**:
    $$\alpha = \frac{R}{2L}$$
-   For a **Parallel RLC Circuit**:
    $$\alpha = \frac{1}{2RC}$$

---
#### Damping Ratio
#damping-ratio

The damping ratio is a dimensionless quantity that provides the most convenient way to classify the type of transient response. It is defined as the ratio of the actual damping factor ($\alpha$) to the damping factor that would produce critical damping ($\omega_0$).
$$\boxed{\quad \zeta = \frac{\alpha}{\omega_0} \quad}$$
Substituting the formulas for $\alpha$ and $\omega_0$:
-   For a **Series RLC Circuit**: $\zeta = \frac{R}{2L} / \frac{1}{\sqrt{LC}} = \frac{R}{2} \sqrt{\frac{C}{L}}$
-   For a **Parallel RLC Circuit**: $\zeta = \frac{1}{2RC} / \frac{1}{\sqrt{LC}} = \frac{1}{2R} \sqrt{\frac{L}{C}}$

The value of $\zeta$ directly determines the nature of the response:

| Damping Ratio (ζ) | Response Type         | Description                          |
| :---------------: | :-------------------- | :----------------------------------- |
| $\zeta = 0$       | **Undamped**          | Sustained oscillations (ideal, no R) |
| $0 < \zeta < 1$   | **Underdamped**       | Decaying oscillations (overshoot)    |
| $\zeta = 1$       | **Critically Damped** | Fastest response without overshoot   |
| $\zeta > 1$       | **Overdamped**        | Slow, non-oscillatory response       |

> [!pyq]- PYQ : 2018
> ![[ee_2018#^q9]]

---
#### Damped Natural Frequency
#damped-natural-frequency

For an underdamped system ($\zeta < 1$), the response oscillates. The actual frequency of this oscillation is called the **damped natural frequency, $\omega_d$**. The damping effect "slows down" the oscillation, so $\omega_d$ is always less than $\omega_0$.
$$\boxed{\quad \omega_d = \omega_0 \sqrt{1 - \zeta^2} \quad (\text{for } \zeta < 1) \quad}$$
The roots of the characteristic equation for the underdamped case are $s_{1,2} = -\alpha \pm j\omega_d$.

---
### Related Concepts
#natural-frequency/related-concepts

> [[Overdamped, Critically Damped, and Underdamped Responses]] (The practical manifestation of the damping ratio)

[[Source-Free Series and Parallel RLC Circuits]]
[[Step Response of Series and Parallel RLC Circuits]]
[[Second-Order System Response]] (Where these parameters are used extensively)
[[Series Resonance in RLC Circuits]] (Where $\omega_0$ is the central frequency)