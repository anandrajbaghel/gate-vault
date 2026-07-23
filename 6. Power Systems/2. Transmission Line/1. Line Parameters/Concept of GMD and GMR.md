---
tags:
  - power-system
  - transmission-lines
  - line-parameters
  - inductance
  - capacitance
created: 2025-10-11
aliases:
  - GMD
  - GMR
  - Geometric Mean Distance
  - Geometric Mean Radius
  - Self GMD
  - Mutual GMD
subject: "[[Power System]]"
parent:
  - Transmission Line Parameters and Performance
modified: 2026-07-23T21:16:45
---
### Concept of GMD and GMR
#gmd #gmr #line-parameters

> **Geometric Mean Radius (GMR)** and **Geometric Mean Distance (GMD)** are mathematical constructs used to simplify the calculation of inductance and capacitance of transmission lines, especially for complex arrangements like stranded conductors, bundled conductors, and unsymmetrically spaced lines.

#### Geometric Mean Radius (GMR)
#gmr #self-gmd

The GMR of a conductor is its **Self Geometric Mean Distance**, denoted as $D_s$. It is a hypothetical radius that accounts for the conductor's internal flux linkage. By using GMR, we can treat a solid conductor as a fictitious hollow tube with no internal flux, which simplifies the inductance formula.

1.  **For a Single Solid Round Conductor**:
    The GMR is smaller than the physical radius $r$.
    $$\boxed{\quad GMR = D_s = r' = r e^{-1/4} \approx 0.7788r \quad}$$
    This value is used in **inductance calculations only**.

2.  **For Composite and Bundled Conductors**:
    The GMR of a composite conductor (or a bundle) is the geometric mean of the distances of all its individual strands from each other. For a phase made of $n$ identical sub-conductors, each with a GMR of $D_s$, the bundled GMR ($D_{sL}$ or $GMR_L$) is calculated as the $n^2$-th root of the product of all $n^2$ distances.
    Common configurations for bundled conductors are:
    -   **2-conductor bundle** (spacing $d$):
        $$ GMR_{bundle} =  \sqrt{D_s d} $$
    -   **3-conductor bundle** (equilateral spacing $d$):
        $$ GMR_{bundle} = \sqrt[3]{D_s \times d \times d} = \sqrt[3]{D_s d^2} $$
    -   **4-conductor bundle** (square spacing $d$):
        $$ GMR_{bundle} = \sqrt[4]{D_s \times d \times d \times d\sqrt{2}} = \sqrt[4]{D_s d^3 \sqrt{2}} \approx 1.09 \sqrt[4]{D_s d^3}$$
---
#### Geometric Mean Distance (GMD)
#gmd #mutual-gmd 

The GMD is the **Mutual Geometric Mean Distance**, denoted as $D_{eq}$ or $D_m$. It represents the equivalent spacing between conductors of different phases.

1.  **For a Single-Phase Two-Wire Line**:
    The GMD is simply the distance $D$ between the two conductors.

2.  **For a Three-Phase Line**:
    If the line conductors are unsymmetrically spaced (distances $D_{ab}, D_{bc}, D_{ca}$), the line must be **transposed** to balance the inductance of each phase. The GMD is the geometric mean of the three inter-phase spacings.
    $$\boxed{\quad GMD = D_{eq} = \sqrt[3]{D_{ab} D_{bc} D_{ca}} \quad}$$

> [!trick] Symmetrically placed Three-Phase Line
>  If the spacing is symmetrical (equilateral, $D_{ab}=D_{bc}=D_{ca}=D$), then $GMD = D$.

---
#### Application in Inductance and Capacitance Calculation
#line-parameter-calculation

GMD and GMR are used together to find the line parameters. It is crucial to distinguish how they are used for inductance versus capacitance.

##### For Inductance:
The per-phase inductance of a transposed three-phase line is given by:
$$\boxed{\quad L = \frac{\mu_0}{2\pi} \ln\left(\frac{GMD}{GMR}\right) = 2 \times 10^{-7} \ln\left(\frac{D_{eq}}{D_s}\right) \text{ H/m} \quad}$$
-   Here, **GMR is $D_s$ ($r' = 0.7788r$ for a single conductor)**.

##### For Capacitance:
The per-phase capacitance to neutral is given by:
$$\boxed{\quad C = \frac{2\pi\epsilon_0}{\ln\left(\frac{GMD}{r_{eq}}\right)} \text{ F/m} \quad}$$
-   Here, the **physical radius** is used instead of GMR. For a single solid conductor, this is simply its radius $r$. For a bundled conductor, an equivalent radius ($r_{eq}$) is calculated using the same formula as the GMR for the bundle, but substituting the physical radius $r$ in place of $D_s$.
    -   **2-bundle equivalent radius**: $\sqrt{r d}$
    -   **3-bundle equivalent radius**: $\sqrt{r d^2}$

> [!concept] Key Takeaway
> For inductance, use GMR ($D_s=r'$).
> For capacitance, use the actual conductor radius ($r$).
> 
> This is a common point of error in GATE problems.

---
### Related Concepts
#power-system/related-concepts

> [[Inductance of Single-phase and Three-phase Lines]]

[[Capacitance of Single-phase and Three-phase Lines]]
[[Inductance of Composite and Bundled Conductors]]
[[Power Flow through a Transmission Line]]