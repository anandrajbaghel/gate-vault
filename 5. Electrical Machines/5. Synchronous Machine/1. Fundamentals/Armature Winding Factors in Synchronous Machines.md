---
tags:
  - electrical-machines/synchronous-machines
  - armature-winding
  - winding-factors
  - pitch-factor
  - distribution-factor
created: 2025-07-17
aliases:
  - Winding Factors
  - Pitch Factor Synchronous Machine
  - Distribution Factor Synchronous Machine
  - Chording Factor Synchronous Machine
  - Breadth Factor Synchronous Machine
  - "Kw : Winding Factor in Synchronous Machine"
  - "Kp : Pitch Factor in Synchronous Machine"
  - "Kd : Distribution Factor (Breadth Factor) in Synchronous Machine"
  - Concentrated Winding
  - Distributed Winding
subject: "[[Electrical Machines]]"
parent: "[[Synchronous Machines]]"
modified: 2026-07-23T20:51:05
---
### Armature Winding Factors (Pitch factor, Distribution factor)
#armature-winding #winding-factors #electrical-machines

> Armature winding factors are numerical correction factors that account for the practical arrangement of windings in the stator slots. The ideal EMF equation, $E_{ph} = 4.44 f \Phi T_{ph}$, assumes the winding is full-pitched and concentrated. In reality, windings are short-pitched and distributed to improve performance. The winding factors, **Pitch Factor ($K_p$)** and **Distribution Factor ($K_d$)**, adjust the ideal EMF to its actual value.

The overall **Winding Factor ($K_w$)** is the product of these two factors:
$$\boxed{\quad K_w = K_p \times K_d \quad}$$

---
#### Pitch Factor ($K_p$) or Chording Factor
#pitch-factor #chording-factor

The pitch factor accounts for the fact that the armature coils are often **short-pitched** (or chorded), meaning the span of the coil is less than a full pole pitch (180° electrical).

*   **Full-Pitch Coil**: Coil span = 180° electrical. The EMFs in the two sides of the coil are in phase, so they add up arithmetically.
*   **Short-Pitch Coil**: Coil span < 180° electrical. The coil is shorted by an angle $\alpha$ (the chording angle). The EMFs in the two coil sides, $E_s$, are now out of phase by $\alpha$.

The resultant EMF of the coil, $E_c$, is the phasor sum of the two coil-side EMFs.
$$E_c = E_s \angle 0^\circ + E_s \angle (180^\circ - \alpha) - \text{Incorrect approach}$$
Correct phasor sum: The two EMFs are out of phase by angle $\alpha$. The resultant is $E_c = 2 E_s \cos(\alpha/2)$.
The arithmetic sum would be $2E_s$.

The pitch factor is the ratio of the phasor sum to the arithmetic sum.
$$K_p = \frac{\text{Phasor Sum of coil side EMFs}}{\text{Arithmetic Sum of coil side EMFs}} = \frac{2 E_s \cos(\alpha/2)}{2 E_s}$$
$$\boxed{\quad K_p = \cos(\alpha/2) \quad}$$
*   For a full-pitch coil, $\alpha=0$ and $K_p = \cos(0) = 1$.
*   For a short-pitch coil, $\alpha > 0$ and $K_p < 1$.

**Advantages of Short-Pitching:**
1.  **Harmonic Elimination**: The pitch factor for the $n^{th}$ harmonic is $K_{pn} = \cos(n\alpha/2)$. By choosing $\alpha$ appropriately, a specific harmonic can be eliminated. For example, to eliminate the 5th harmonic, we set $5\alpha/2 = 90^\circ$, which gives $\alpha = 36^\circ$.
2.  **Copper Savings**: The end connections of the coils are shorter, saving copper.
3.  **Improved Waveform**: The output EMF waveform becomes more sinusoidal due to the reduction of harmonics.

---
#### Distribution Factor ($K_d$) or Breadth Factor
#distribution-factor #breadth-factor

The distribution factor accounts for the fact that the conductors of a phase are **distributed** among several slots under each pole, rather than being concentrated in a single slot.

When the winding is distributed, the EMFs induced in conductors in adjacent slots are not in phase; they are displaced from each other by the **slot angle, $\beta$**.
$$\beta = \frac{180^\circ}{\text{No. of slots per pole}}$$
Let $m$ be the number of slots per pole per phase. The total EMF for the phase group is the phasor sum of $m$ individual coil EMFs.

The distribution factor is the ratio of the phasor sum of the coil EMFs to their arithmetic sum.
$$K_d = \frac{\text{Phasor Sum of coil EMFs}}{\text{Arithmetic Sum of coil EMFs}} = \frac{\text{phasor sum of }e_1,e_2,e_3,\text{i.e.,}e}{\text{arithmetic sum of }e_1,e_2,e_3}$$
This can be derived from the geometry of the phasor diagram:
$$\boxed{\quad K_d = \frac{\sin(m\beta/2)}{m \sin(\beta/2)} \quad}$$
*   For a concentrated winding, $m=1$ and $K_d = 1$.
*   For a distributed winding, $m > 1$ and $K_d < 1$.


| Concentrated Winding                                                        | Distributed Winding                                                                                                             |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ![[SM - Concentrated Winding.png]]                                          | ![[SM - Distributed Winding along with Vector Sum of EMF.png]]                                                                  |
| Induced emf in a concentrated winding (**arithmetic sum of coil voltages**) | Induced emf in a distributed winding (**vector sum of coil voltages**)                                                          |
|                                                                             | ![[SM - Vector Sum of EMF.png]]                                                                                                 |
|                                                                             | $C \ B \ D \ A$ are the Slot positions                                                                                          |
|                                                                             | The emfs induced in the conductors will have a time-phase difference of $\alpha \degree$                                        |
|                                                                             | Similar rate of cutting of flux in coils $2-2^\prime$ and $3-3^{\prime}$ will occur after a time lag of $\alpha$ and $2\alpha$. |
|                                                                             | $\alpha$ is called slot-angle                                                                                                   |
|                                                                             | Slot-angle is the angular distance between the two adjacent slots.                                                              |

---

**Advantages of Distributed Winding**
1.  **Improved EMF Waveform**: It significantly reduces the harmonic content, making the output voltage more sinusoidal.
2.  **Better Heat Dissipation**: Distributing the coils allows for more effective cooling.
3.  **Reduced Armature Reactance**: It lowers the self-inductance of the winding.

---
### Related Concepts
#winding-factors/related-concepts

> [[EMF Equation of an Alternator]]

[[Constructional Features of Synchronous Machines]]
[[Principle of Operation as a Generator (Alternator)]]
[[Harmonics in Transformers]]
