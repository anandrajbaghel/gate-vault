---
tags:
  - power-system
  - transmission-lines
  - line-parameters
  - bundled-conductors
  - composite-conductors
created: 2025-10-11
aliases:
  - Inductance of Bundled Lines
  - Composite Conductor Inductance
subject: "[[Power System]]"
parent:
  - Transmission Line Parameters and Performance
modified: 2026-07-23T21:17:11
---
### Inductance of Composite and Bundled Conductors
#composite-conductors #bundled-conductors #line-reactance-reduction

> **Composite conductors** refer to any conductor made of two or more parallel strands. **Bundled conductors** are a specific, practical application of composite conductors used in high-voltage transmission lines, where each phase consists of a group (or bundle) of two, three, or four sub-conductors. This technique is primarily used to reduce line reactance and mitigate the corona effect.

#### Inductance of Composite Conductors
#composite-conductors

Consider a single-phase line where the forward path (conductor X) consists of 'n' parallel filaments, and the return path (conductor Y) consists of 'm' parallel filaments.

The inductance of conductor X can be calculated using the GMD and GMR concepts:
$$ L_X = \frac{\mu_0}{2\pi} \ln\left(\frac{GMD}{GMR_X}\right) \text{ H/m} $$

1.  **Mutual GMD ($D_{XY}$ or GMD)**: This is the geometric mean of all the distances between the filaments of conductor X and the filaments of conductor Y.
    $$ GMD = D_{XY} = \sqrt[nm]{\prod_{i=1}^{n}\prod_{j=1}^{m} d_{ij}} $$
    where $d_{ij}$ is the distance between the $i^{th}$ filament of X and the $j^{th}$ filament of Y.

2.  **Self GMD ($D_{sX}$ or $GMR_X$)**: This is the Geometric Mean Radius of conductor X. It is the geometric mean of all the distances between the filaments within conductor X itself.
    $$ GMR_X = D_{sX} = \sqrt[n^2]{\prod_{i=1}^{n}\prod_{j=1}^{n} d_{ij}} $$
    Here, when $i=j$, the distance $d_{ii}$ is the GMR of the filament itself ($D_s = r'$).

---
#### Bundled Conductors
#bundled-conductors

In EHV (Extra High Voltage) and UHV (Ultra High Voltage) lines, it is common to use more than one conductor per phase. This is known as bundling.

##### Advantages of Bundling
1.  **Reduces Reactance**: Bundling increases the effective GMR of the phase. Since inductance $L \propto \ln(GMD/GMR)$, a larger GMR results in a lower inductance and lower series reactance ($X_L$). This leads to:
    -   Increased power transfer capability.
    -   Improved voltage regulation.
    -   Enhanced system stability.
2.  **Reduces Corona**: Bundling increases the effective radius of the conductor, which reduces the electric field gradient at the conductor surface. This raises the critical disruptive voltage, thereby reducing [[Corona and its Effects|corona loss]], audible noise, and radio interference.

##### GMR Calculation for Bundled Conductors ($GMR_b$ or $D_{sL}$)
To calculate the inductance of a line with bundled conductors, we first find the GMR of the bundle, which then replaces the single-conductor GMR ($D_s$) in the standard inductance formula. Let $d$ be the spacing between sub-conductors in the bundle, and let the GMR of each sub-conductor be $D_s = r'$.

-   **Two-conductor bundle**:
    $$\boxed{\quad GMR_b = \sqrt{D_s \cdot d} \quad}$$

-   **Three-conductor bundle** (in an equilateral triangle arrangement):
    $$\boxed{\quad GMR_b = \sqrt{D_s \cdot d \cdot d} = \sqrt{D_s d^2} \quad}$$

-   **Four-conductor bundle** (in a square arrangement):
    The distances from one conductor to the others are $d, d,$ and $d\sqrt{2}$.
    $$\boxed{\quad GMR_b = \sqrt{D_s \cdot d \cdot d \cdot d\sqrt{2}} = \sqrt{D_s d^3 \sqrt{2}} \approx 1.09\sqrt{D_s d^3} \quad}$$

##### Inductance Formula for a 3-Phase Line with Bundling
The per-phase inductance of a transposed three-phase line with bundled conductors is:
$$\boxed{\quad L_{phase} = \frac{\mu_0}{2\pi} \ln\left(\frac{GMD}{GMR_b}\right) = 2 \times 10^{-7} \ln\left(\frac{D_{eq}}{GMR_b}\right) \text{ H/m} \quad}$$
where:
-   $GMD$ ($D_{eq}$) is the geometric mean distance between the centers of the phase bundles.
-   $GMR_b$ ($D_{sL}$) is the GMR of the bundled conductor for one phase.

---
### Related Concepts
#power-system/related-concepts

> [[Concept of GMD and GMR]]

[[Inductance of Single-phase and Three-phase Lines]]
[[Capacitance of Single-phase and Three-phase Lines]]
[[Corona and its Effects]]
[[Surge Impedance and Surge Impedance Loading (SIL)]]
[[Power Flow through a Transmission Line]]
