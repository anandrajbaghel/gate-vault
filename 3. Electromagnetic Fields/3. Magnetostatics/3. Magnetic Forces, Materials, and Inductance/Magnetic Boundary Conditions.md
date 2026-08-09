---
tags:
  - magnetostatics
  - boundary-conditions
  - maxwells-equations
  - electromagnetic-fields
created: 2025-10-17
aliases:
  - Magnetic Boundary Conditions
  - B-H Boundary Conditions
subject: "[[Electromagnetic Fields]]"
parent:
  - Magnetostatics
modified: 2026-08-04T09:57:58
---
### Magnetic Boundary Conditions
#magnetostatics/boundary-conditions #maxwells-equations

> Magnetic boundary conditions describe how the magnetic flux density vector ($\vec{B}$) and magnetic field intensity vector ($\vec{H}$) behave at the interface between two different magnetic materials. These conditions are derived from the integral forms of Maxwell's equations for magnetostatics and are crucial for solving problems involving multiple media, like magnetic circuits with air gaps or fields near ferromagnetic materials.

The two fundamental equations used are:
1.  **Gauss's Law for Magnetism**: $\oint_S \vec{B} \cdot d\vec{S} = 0$.
2.  **Ampere's Circuital Law**: $\oint_L \vec{H} \cdot d\vec{l} = I_{enc}$.

---
#### 1. Normal Component of $\vec{B}$
#boundary-conditions/normal-B

Applying Gauss's Law for Magnetism to a small cylindrical "pillbox" that straddles the boundary between Medium 1 and Medium 2, we find that the normal component of the magnetic flux density is always continuous across the boundary.
$$\begin{align}
\oint_S \vec{B} \cdot d\vec{S} &= 0 \\
B_{n1}\Delta S - B_{n2}\Delta S &= 0
\end{align}$$
$$\boxed{\quad B_{n1} = B_{n2} \quad}$$
This implies that magnetic field lines are always continuous; they cannot terminate at a boundary. Since $\vec{B} = \mu\vec{H}$, this can also be written as:
$$\mu_1 H_{n1} = \mu_2 H_{n2}$$

---
#### 2. Tangential Component of $\vec{H}$
#boundary-conditions/tangential-H #surface-current

Applying Ampere's Law to a small rectangular loop at the interface, we find that the tangential component of the magnetic field intensity is discontinuous by the magnitude of the free surface current density ($\vec{K}$) flowing perpendicular to the path at the boundary.
$$\begin{align}
\oint_L \vec{H} \cdot d\vec{l} &= I_{enc} \\
H_{t1}\Delta w - H_{t2}\Delta w &= K \Delta w
\end{align}$$
$$\boxed{\quad H_{t1} - H_{t2} = K \quad}$$
In vector form, if $\hat{a}_{n12}$ is the unit normal pointing from medium 1 to medium 2, the relationship is:
$$(\vec{H}_1 - \vec{H}_2) \times \hat{a}_{n12} = \vec{K}$$

**Special Case: Current-Free Interface**
In most problems involving ideal dielectrics or magnetic materials where no sheet of current is explicitly placed at the boundary, the surface current density $K$ is zero. In this common case, the tangential component of $\vec{H}$ is continuous across the boundary.
$$\boxed{\quad H_{t1} = H_{t2} \quad (\text{if } K=0) \quad}$$
Since $\vec{H} = \vec{B}/\mu$, this can be written as:
$$\frac{B_{t1}}{\mu_1} = \frac{B_{t2}}{\mu_2}$$

---
#### Refraction of Magnetic Field
#magnetic-field-refraction

For a current-free interface ($K=0$), the magnetic field lines bend as they cross the boundary between two materials with different permeabilities. If $\theta_1$ and $\theta_2$ are the angles the B-field vectors make with the normal to the surface:
$$\begin{align}
\frac{\tan \theta_1}{\tan \theta_2} &= \frac{B_{t1}/B_{n1}}{B_{t2}/B_{n2}} \\
&= \frac{(\mu_1 H_{t1})/B_{n1}}{(\mu_2 H_{t2})/B_{n2}}
\end{align}$$
Since $B_{n1}=B_{n2}$ and $H_{t1}=H_{t2}$, this simplifies to:
$$\boxed{\quad \frac{\tan \theta_1}{\tan \theta_2} = \frac{\mu_1}{\mu_2} = \frac{\mu_{r1}}{\mu_{r2}} \quad}$$
Field lines bend toward the normal in the region with the higher permeability. For example, when going from air ($\mu_r \approx 1$) to iron ($\mu_r \gg 1$), the field lines become almost perpendicular to the surface.

---
### Related Concepts
#topic/related-concepts

> [[Boundary Conditions for Electrostatic Fields]]

[[Maxwell's Equation for Magnetostatics]]
[[Ampere's Circuital Law]]
[[Magnetic Flux Density (B)]]
[[Magnetic Field Intensity (H)]]
[[Relationship between B and H]]
[[Inductance and Mutual Inductance]]