---
tags:
  - power-system
  - transmission-lines
  - line-parameters
  - inductance
  - magnetic-fields
created: 2025-10-11
aliases:
  - Line Inductance
  - Transmission Line Inductance
subject: "[[Power System]]"
parent:
  - Transmission Line Parameters and Performance
modified: 2026-07-23T21:17:16
---
### Inductance of Single-phase and Three-phase Lines
#transmission-line-inductance #line-parameters #gmd-gmr

> The inductance of a transmission line is a series parameter that arises from the magnetic field created by the current flowing through the conductors. It causes a series reactive voltage drop ($jI X_L$), consumes reactive power, and plays a critical role in determining the power transfer capability and stability of the line.

#### Fundamental Concepts
#inductance-basics

Inductance ($L$) is defined as the magnetic flux linkage ($\lambda$) per unit of current ($I$) that produces it.
$$ L = \frac{\lambda}{I} \quad (\text{Henry, H}) $$
The total flux linkage of a conductor has two components:
1.  **Internal Flux Linkage**: Due to the magnetic flux *inside* the conductor. For a solid cylindrical conductor, this results in a constant internal inductance:
    $$\boxed{\quad L_{int} = \frac{\mu_0}{8\pi} \text{ H/m} \quad}$$
2.  **External Flux Linkage**: Due to the magnetic flux *outside* the conductor. The inductance due to external flux between two points $D_1$ and $D_2$ from the center of the conductor is: $L_{ext} = \frac{\mu_0}{2\pi} \ln\left(\frac{D_2}{D_1}\right)$ H/m.

---
#### Geometric Mean Radius (GMR) or Self-GMD ($D_s$)
#gmr #self-gmd

To simplify calculations, the effect of internal flux is combined with the external flux by using a modified radius for the conductor called the **Geometric Mean Radius (GMR)**. It is also known as Self Geometric Mean Distance ($D_s$).
For a solid round conductor of radius $r$:
$$\boxed{\quad D_s = r' = r e^{-1/4} \approx 0.7788r \quad}$$
By using $r'$ instead of $r$ in the external inductance formula, we can account for the total inductance (internal + external) of the conductor.

---
#### Inductance of a Single-Phase Two-Wire Line
#single-phase-inductance

Consider two solid conductors of radius $r$, separated by a distance $D$. The inductance of each conductor is the same. The inductance per conductor is:
$$\boxed{\quad L_{per\_conductor} = \frac{\mu_0}{2\pi} \ln\left(\frac{D}{r'}\right) = \frac{\mu_0}{2\pi} \ln\left(\frac{D}{D_s}\right) \text{ H/m} \quad}$$
The total inductance for the entire circuit (loop inductance) is twice the inductance of one conductor:
$$\boxed{\quad L_{loop} = 2L = \frac{\mu_0}{\pi} \ln\left(\frac{D}{r'}\right) \text{ H/m} \quad}$$

---
#### Inductance of Three-Phase Lines
#three-phase-inductance

1.  **Symmetrical Spacing**
    If the three conductors are placed at the vertices of an equilateral triangle of side $D$, the inductance of each phase is identical and balanced. The per-phase inductance is:
    $$\boxed{\quad L_{phase} = \frac{\mu_0}{2\pi} \ln\left(\frac{D}{D_s}\right) \text{ H/m} \quad}$$

2.  **Unsymmetrical Spacing and Transposition**
    If conductors are not symmetrically spaced, the flux linkages and inductances of each phase will be different, leading to unbalanced voltage drops. To balance the inductances, the positions of the conductors are interchanged at regular intervals along the line. This practice is called **transposition**.
    For a transposed line with distances $D_{ab}$, $D_{bc}$, and $D_{ca}$ between the conductors, the average per-phase inductance is calculated using the **Geometric Mean Distance (GMD)**.
    -   **Geometric Mean Distance (GMD)**, $D_{eq}$:
        $$ D_{eq} = GMD = \sqrt{D_{ab} D_{bc} D_{ca}} $$
    -   The average per-phase inductance is:
        $$\boxed{\quad L_{phase} = \frac{\mu_0}{2\pi} \ln\left(\frac{GMD}{GMR}\right) = \frac{\mu_0}{2\pi} \ln\left(\frac{D_{eq}}{D_s}\right) \text{ H/m} \quad}$$

---
#### Inductance of Bundled Conductors
#bundled-conductors

Instead of one large conductor, each phase can be formed by two or more smaller conductors called a bundle.
-   **Purpose of Bundling**:
    1.  **Reduce Reactance**: Bundling increases the effective GMR of the phase, which significantly reduces the line inductance and hence the series reactance ($X_L = 2\pi f L$). This improves power transfer capability and voltage regulation.
    2.  **Reduce Corona**: Bundling increases the effective radius of the phase conductor, which reduces the electric field stress at the surface and mitigates [[Corona and its Effects|corona loss]] and radio interference.

-   **GMR of a Bundled Conductor ($D_{sL}$)**:
    The self-GMD or GMR of the bundle ($D_{sL}$) replaces the single conductor $D_s$ in the inductance formula.
    -   For a 2-conductor bundle with spacing $d$: $D_{sL} = \sqrt{D_s \cdot d}$
    -   For a 3-conductor bundle (triangle) with spacing $d$: $D_{sL} = \sqrt{D_s \cdot d^2}$
    -   For a 4-conductor bundle (square) with spacing $d$: $D_{sL} = \sqrt{D_s \cdot d^2 \cdot (d\sqrt{2})} = \sqrt{2} \sqrt{d D_s^{1/2}}$ (incorrect, simplified is better: $\sqrt{D_s \cdot d \cdot d \cdot d\sqrt{2}}$)
        $$ D_{sL} = \sqrt{D_s \cdot d^3 \sqrt{2}} $$
    The inductance formula for a bundled conductor line is:
    $$\boxed{\quad L_{phase} = \frac{\mu_0}{2\pi} \ln\left(\frac{D_{eq}}{D_{sL}}\right) \text{ H/m} \quad}$$

---
### Related Concepts
#power-system/related-concepts

> [[Concept of GMD and GMR]] (Detailed explanation of these geometric terms)

[[Inductance of Composite and Bundled Conductors]] (Further details on complex conductor arrangements)
[[Capacitance of Single-phase and Three-phase Lines]] (The dual parameter to inductance)
[[Resistance of Transmission Lines]] (The real part of the series impedance)
[[Corona and its Effects]] (A phenomenon reduced by bundling)