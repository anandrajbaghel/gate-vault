---
tags:
  - ac-power
  - complex-power
  - power-triangle
  - real-power
  - reactive-power
created: 2025-09-23
aliases:
  - Complex Power
  - S = P + jQ
subject: "[[2. Electric Circuits/Electric Circuits|Electric Circuits]]"
parent:
  - "[[AC Power Analysis]]"
modified: 2026-07-16
---
### Complex Power and the Power Triangle
#complex-power #power-triangle #ac-power

> Complex power, denoted by $\mathbf{S}$, is a powerful concept in AC circuit analysis that combines the real power (P), reactive power (Q), and apparent power (S) into a single complex quantity. It provides a complete picture of the power flow in a circuit. The **Power Triangle** is the geometric representation of complex power in the complex plane.

#### Definition of Complex Power ($\mathbf{S}$)
#complex-power/definition

Complex power $\mathbf{S}$ is defined as the product of the RMS voltage phasor ($\mathbf{V}_{rms}$) and the complex conjugate of the RMS current phasor ($\mathbf{I}_{rms}^*$).

$$\boxed{\quad \mathbf{S} = \mathbf{V}_{rms} \mathbf{I}_{rms}^* \quad}$$

Let the voltage and current phasors be $\mathbf{V}_{rms} = V_{rms} \angle \theta_v$ and $\mathbf{I}_{rms} = I_{rms} \angle \theta_i$.
The complex conjugate of the current is $\mathbf{I}_{rms}^* = I_{rms} \angle -\theta_i$.
Then, the complex power is:
$$\begin{align}
\mathbf{S} &= (V_{rms} \angle \theta_v)(I_{rms} \angle -\theta_i) \\
&= V_{rms}I_{rms} \angle (\theta_v - \theta_i) \\
&= S \angle \theta
\end{align}$$
where $S = V_{rms}I_{rms}$ is the apparent power and $\theta = \theta_v - \theta_i$ is the power factor angle.

In rectangular form, this becomes:
$$\mathbf{S} = S \cos\theta + j S \sin\theta$$
By identifying the components, we arrive at the fundamental expression for complex power:
$$\boxed{\quad \mathbf{S} = P + jQ \quad}$$
-   **Real Part**: $P = \text{Re}\{\mathbf{S}\} = S \cos\theta$ is the **Real Power** in Watts (W).
-   **Imaginary Part**: $Q = \text{Im}\{\mathbf{S}\} = S \sin\theta$ is the **Reactive Power** in Volt-Amperes Reactive (VAR).
-   **Magnitude**: $|\mathbf{S}| = \sqrt{P^2 + Q^2} = S$ is the **Apparent Power** in Volt-Amperes (VA).
-   **Angle**: $\angle \mathbf{S} = \theta$ is the **Power Factor Angle**.

The use of the current conjugate is a standard convention that ensures that an inductive load (lagging power factor, $\theta>0$) has a positive reactive power Q.

---
#### Alternative Formulas for Complex Power
#complex-power/formulas

Using the phasor form of Ohm's Law, $\mathbf{V}_{rms} = \mathbf{I}_{rms}\mathbf{Z}$, we can derive other useful expressions for $\mathbf{S}$:

1.  In terms of current and impedance:
    $$\mathbf{S} = (\mathbf{I}_{rms}\mathbf{Z})\mathbf{I}_{rms}^* = |\mathbf{I}_{rms}|^2 \mathbf{Z}$$
    Since $\mathbf{Z} = R + jX$, this gives $\mathbf{S} = |\mathbf{I}_{rms}|^2 R + j|\mathbf{I}_{rms}|^2 X$, clearly showing that $P=|\mathbf{I}_{rms}|^2 R$ and $Q=|\mathbf{I}_{rms}|^2 X$.
    $$\boxed{\quad \mathbf{S} = |\mathbf{I}_{rms}|^2 \mathbf{Z} \quad}$$
2.  In terms of voltage and impedance:
    $$\mathbf{S} = \mathbf{V}_{rms} \left(\frac{\mathbf{V}_{rms}}{\mathbf{Z}}\right)^* = \mathbf{V}_{rms} \frac{\mathbf{V}_{rms}^*}{\mathbf{Z}^*} = \frac{|\mathbf{V}_{rms}|^2}{\mathbf{Z}^*}$$
    $$\boxed{\quad \mathbf{S} = \frac{|\mathbf{V}_{rms}|^2}{\mathbf{Z}^*} \quad}$$

---
#### The Power Triangle
#power-triangle

The power triangle graphically illustrates the relationship $\mathbf{S} = P+jQ$ in the complex plane.
-   The real axis represents real power, P.
-   The imaginary axis represents reactive power, Q.
-   The complex power $\mathbf{S}$ is the vector from the origin to the point $(P, Q)$.
-   The length of the hypotenuse is the apparent power, $S=|\mathbf{S}|$.
-   The angle between the hypotenuse and the real axis is the power factor angle, $\theta$.

Based on the sign of Q:
-   **Lagging Power Factor (Inductive Load)**: $\theta$ is positive, Q is positive, and the triangle is in the first quadrant.
-   **Leading Power Factor (Capacitive Load)**: $\theta$ is negative, Q is negative, and the triangle is in the fourth quadrant.

---
#### Conservation of Complex Power
For any system, the total complex power supplied by the source(s) equals the total complex power absorbed by the loads. This is a very useful principle in power system analysis.
$$\mathbf{S}_{\text{total}} = \sum \mathbf{S}_{\text{loads}} = \mathbf{S}_1 + \mathbf{S}_2 + \dots + \mathbf{S}_n$$
This implies that both real power and reactive power are conserved independently:
$P_{\text{total}} = \sum P_i$ and $Q_{\text{total}} = \sum Q_i$.

---
### Related Concepts
#complex-power/related-concepts 

> [[AC Power Analysis]] (Defines the individual components)

[[Power Factor]] (Explores the angle $\theta$ of the complex power vector)
[[Instantaneous and Average Power]]
[[Power System]] (Where complex power is a fundamental tool for analysis)