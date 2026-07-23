---
tags:
  - power-system
  - transmission-lines
  - line-parameters
  - capacitance
  - method-of-images
created: 2025-10-11
aliases:
  - Earth Effect on Capacitance
  - Method of Images
subject: "[[Power System]]"
parent:
  - Transmission Line Parameters and Performance
modified: 2026-07-23T21:16:53
---
### Effect of Earth on Capacitance
#earth-effect-capacitance #method-of-images

> The presence of the earth, which acts as a conducting ground plane, alters the electric field of overhead transmission lines. This modification affects the line's capacitance. The **Method of Images** is an analytical tool used to quantify this effect. The universal result is that the presence of the earth **always increases the capacitance** of the line.

#### The Method of Images
#method-of-images

To analyze the effect of the earth, we make the simplifying assumption that the earth is a perfect, infinitely large, flat conductor, which means it is an equipotential surface (at zero potential). The electric field lines from the charged overhead conductors must terminate perpendicularly on this surface.

The **Method of Images**, a concept from electrostatics, simplifies this boundary value problem. It states that the electric field in the space above the ground plane is identical to the field that would be produced by removing the earth and introducing a set of fictitious **"image" conductors**.

-   **Location**: For each actual conductor at a height 'h' above the ground, an image conductor is placed at a depth 'h' directly below it.
-   **Charge**: The image conductor carries a charge that is equal in magnitude and opposite in polarity to the actual conductor.

By replacing the ground plane with these image conductors, we can calculate the potential and capacitance using standard formulas in a system of conductors in free space.

#### Physical Effect on Capacitance
The key insight from the method of images is understanding how the potential changes.

1.  Consider a single overhead conductor with a positive charge $+q$. Its potential is determined by its own charge.
2.  When the earth is present, we model it with an image conductor with charge $-q$.
3.  The potential of the actual conductor is now the superposition of the potential due to its own charge ($+q$) and the potential induced by the nearby image charge ($-q$).
4.  Since the image charge is negative, it induces a negative potential on the actual conductor, thereby **lowering its total potential** for the same amount of charge $+q$.

From the definition of capacitance, $C = \frac{Q}{V}$:
-   $Q$ (charge on the conductor) remains the same.
-   $V$ (potential of the conductor) is reduced due to the influence of the image charge.
-   Therefore, the **capacitance $C$ increases**.

#### Formula for a Single-Phase Line
Let's consider a single-phase line with two conductors 'a' and 'b' at the same height $h$ above the ground, separated by a distance $D$. Let the radius of each be $r$.

-   **Capacitance without Earth Effect**:
    $$ C_{ab} = \frac{\pi \epsilon_0}{\ln(D/r)} $$

-   **Capacitance with Earth Effect**:
    Using the method of images, the formula becomes:
    $$ C_{ab} = \frac{\pi \epsilon_0}{\ln \left( \frac{D}{r} \right) - \ln \left( \frac{\sqrt{D^2 + 4h^2}}{2h} \right)} $$
    Since $h$ is typically large, the second log term is small but positive, which reduces the denominator and thus increases the capacitance.

#### Practical Significance
For most balanced, steady-state analyses of transmission lines, the conductors' height ($h$) is much larger than the spacing between them ($D$). In such cases, the increase in capacitance due to the earth is very small (often less than 1-3%) and is usually neglected for simplicity.

However, the effect is important for:
-   **Unbalanced Fault Analysis**: Specifically for calculating the zero-sequence capacitance ($C_0$), which is heavily influenced by the ground path.
-   High-accuracy studies or lines with unusually low heights relative to their spacing.

---
### Related Concepts
#power-system/related-concepts

> [[Capacitance of Single-phase and Three-phase Lines]]

[[Concept of GMD and GMR]]
[[Ferranti Effect]]
[[Sequence Impedances and Networks of Transmission Lines]]