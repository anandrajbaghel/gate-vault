---
tags:
  - electrostatics
  - boundary-conditions
  - maxwells-equations
  - electromagnetic-fields
created: 2025-10-17
aliases:
  - Electrostatic Boundary Conditions
  - E-field Boundary Conditions
  - Boundary Conditions for Electrostatic Fields (Conductor-Free Space, Conductor-Dielectric, Dielectric-Dielectric)
subject: "[[Electromagnetic Fields]]"
parent:
  - Electrostatics
modified: 2026-08-04T09:14:37
---
### Boundary Conditions for Electrostatic Fields
#electrostatics/boundary-conditions #maxwells-equations

> Boundary conditions describe how the electric field vector ($\vec{E}$) and electric flux density vector ($\vec{D}$) behave at the interface between two different materials. These conditions are derived from the integral forms of Maxwell's equations for electrostatics and are essential for solving problems involving multiple media, such as capacitors with dielectrics or charges near conductors.

The two fundamental equations are:
1.  **Kirchhoff's Voltage Law for Electrostatics**: $\oint \vec{E} \cdot d\vec{l} = 0$ (The electric field is conservative).
2.  **Gauss's Law**: $\oint_S \vec{D} \cdot d\vec{S} = Q_{enc}$ (The flux of $\vec{D}$ out of a closed surface equals the enclosed free charge).

---
#### General Boundary Conditions
#boundary-conditions/derivation

By applying Maxwell's equations to a small path and a small surface straddling the boundary between two media (Medium 1 and Medium 2), we can derive the general conditions.

##### 1. Tangential Component of $\vec{E}$
#boundary-conditions/tangential-E

Applying $\oint \vec{E} \cdot d\vec{l} = 0$ to a small rectangular loop at the interface, we find that the tangential component of the electric field is continuous across any boundary.
$$\boxed{\quad E_{t1} = E_{t2} \quad}$$
This means the component of $\vec{E}$ parallel to the surface is the same on both sides.

##### 2. Normal Component of $\vec{D}$
#boundary-conditions/normal-D

Applying $\oint \vec{D} \cdot d\vec{S} = Q_{enc}$ to a small cylindrical "pillbox" surface at the interface, we find that the normal component of the electric flux density is discontinuous by the amount of free surface charge density ($\rho_s$) residing at the interface.
$$\boxed{\quad D_{n1} - D_{n2} = \rho_s \quad}$$
Here, the normal components are directed from Medium 2 to Medium 1. If the unit normal $\hat{a}_n$ points from 2 to 1, this is written as $(\vec{D}_1 - \vec{D}_2) \cdot \hat{a}_n = \rho_s$.
*   **If the interface is charge-free ($\rho_s = 0$)**, the normal component of $\vec{D}$ is continuous: $D_{n1} = D_{n2}$.

---
#### Case 1: Dielectric-Dielectric Boundary
#dielectric-boundary

This is the most general case, involving two dielectrics with permittivities $\varepsilon_1$ and $\varepsilon_2$.
1.  **Tangential $\vec{E}$**: $E_{t1} = E_{t2} \implies \frac{D_{t1}}{\varepsilon_1} = \frac{D_{t2}}{\varepsilon_2}$
2.  **Normal $\vec{D}$**: $D_{n1} - D_{n2} = \rho_s \implies \varepsilon_1 E_{n1} - \varepsilon_2 E_{n2} = \rho_s$

**Refraction of Electric Field (Snell's Law)**
For a charge-free interface ($\rho_s = 0$), the electric field lines "bend" or refract as they cross the boundary. If $\theta_1$ and $\theta_2$ are the angles the E-field vectors make with the normal to the surface:
$$\boxed{\quad \frac{\tan \theta_1}{\tan \theta_2} = \frac{\varepsilon_1}{\varepsilon_2} = \frac{\varepsilon_{r1}}{\varepsilon_{r2}} \quad}$$
The field lines bend away from the normal in the region with the higher permittivity.

---
#### Case 2: Conductor-Dielectric Boundary
#conductor-boundary

Let Medium 1 be a dielectric ($\varepsilon_1$) and Medium 2 be a perfect conductor. Inside the conductor (Medium 2), the static electric field is zero: $\vec{E}_2 = 0$ and $\vec{D}_2 = 0$.
Applying the general conditions:
1.  **Tangential $\vec{E}$**: $E_{t1} = E_{t2} = 0$.
    *   The electric field in the dielectric at the surface is entirely normal to the surface.
2.  **Normal $\vec{D}$**: $D_{n1} - D_{n2} = \rho_s \implies D_{n1} - 0 = \rho_s$.
    *   The normal component of the electric flux density in the dielectric is equal to the free surface charge density on the conductor.

Summary for the fields in the dielectric at the conductor's surface:
$$\boxed{\quad E_t = 0 \quad \text{and} \quad D_n = \varepsilon_1 E_n = \rho_s \quad}$$

---
#### Case 3: Conductor-Free Space Boundary
#conductor-free-space

This is a specific instance of the conductor-dielectric case where the dielectric is free space (vacuum), so $\varepsilon_1 = \varepsilon_0$.
The conditions are identical in form:
$$\boxed{\quad E_t = 0 \quad \text{and} \quad D_n = \varepsilon_0 E_n = \rho_s \quad}$$
The electric field just outside a conductor in a vacuum is always perpendicular to the surface and has a magnitude of $\rho_s / \varepsilon_0$.

---
#### Summary Table

| Boundary Condition              | Dielectric-Dielectric ($\rho_s=0$)             | Conductor-Dielectric/Free Space                     |
| ------------------------------- | ---------------------------------------------- | --------------------------------------------------- |
| **Tangential Field ($\vec{E}_t$)** | $E_{t1} = E_{t2}$                              | $E_t = 0$ (Field is purely normal)                  |
| **Normal Field ($\vec{D}_n$)**    | $D_{n1} = D_{n2}$ or $\varepsilon_1 E_{n1} = \varepsilon_2 E_{n2}$ | $D_n = \rho_s$ or $\varepsilon E_n = \rho_s$              |
| **Refraction**                  | $\frac{\tan \theta_1}{\tan \theta_2} = \frac{\varepsilon_1}{\varepsilon_2}$ | Not applicable ($\vec{E}$ is normal, $\theta_1 = 0$) |

---
### Related Concepts
#topic/related-concepts

> [[Properties of Conductors in an Electrostatic Field]]
> [[Dielectric Materials and Polarization]]

[[Gauss's Law]]
[[Method of Images]]
[[Capacitance and Calculation of Capacitance]]
[[Maxwell's Equations in Final Form]]
[[Magnetic Boundary Conditions]]
