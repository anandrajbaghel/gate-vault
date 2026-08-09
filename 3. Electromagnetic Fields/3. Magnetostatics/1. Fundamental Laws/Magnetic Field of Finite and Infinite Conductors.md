---
tags:
  - magnetostatics
  - biot-savart
  - ampere-law
  - magnetic-field
  - electromagnetic-fields
created: 2025-10-17
aliases:
  - Magnetic Field of a Straight Wire
  - Magnetic Field of a Finite Straight Conductor
  - Magnetic Field of an Infinite Straight Conductor
subject: "[[Electromagnetic Fields]]"
parent:
  - Magnetostatics
modified: 2026-07-21T15:24:39
---
### Magnetic Field of Finite and Infinite Conductors
#magnetostatics/conductors #magnetic-field

> The calculation of the magnetic field produced by a straight current-carrying conductor is a canonical problem in magnetostatics. The solution depends on whether the conductor has a finite length or is assumed to be infinitely long. The general case of a finite conductor is solved using [[Biot-Savart's Law|Biot-Savart's Law]], while the highly symmetric case of an infinite conductor is most easily solved using [[Ampere's Circuital Law|Ampere's Law]].

#### Magnetic Field of a Finite Straight Conductor
#biot-savart

Consider a straight conductor of finite length carrying a steady current $I$. To find the magnetic flux density $\vec{B}$ at a point P, located at a perpendicular distance $\rho$ from the wire, we integrate the contributions from each differential current element using Biot-Savart's Law.

The resulting magnitude of the magnetic field is:
$$\boxed{\quad B = \frac{\mu I}{4\pi \rho} (\sin\alpha_2 + \sin\alpha_1) \quad}$$
where:
-   $\mu$ is the permeability of the medium.
-   $I$ is the current in the conductor.
-   $\rho$ is the shortest (perpendicular) distance from the point P to the line of the conductor.
-   $\alpha_1$ and $\alpha_2$ are the angles between the perpendicular line segment and the lines connecting point P to the start and end of the conductor, respectively.

The direction of the field is circular around the wire, determined by the Right-Hand Grip Rule.

---
#### Magnetic Field of an Infinite Straight Conductor
#ampere-law

This is a very common and important idealization. The field can be found in two ways.

##### Method A: Limit of the Finite Conductor Case
For an infinitely long wire, the ends are at $z = \pm\infty$. From the perspective of point P, the angles extend to their maximum possible values:
$$\alpha_1 \to 90^\circ \quad \text{and} \quad \alpha_2 \to 90^\circ$$
Substituting these into the finite conductor formula:
$$\begin{align}
B &= \frac{\mu I}{4\pi \rho} (\sin 90^\circ + \sin 90^\circ) \\
&= \frac{\mu I}{4\pi \rho} (1 + 1) = \frac{2\mu I}{4\pi \rho}
\end{align}$$
$$\boxed{\quad B = \frac{\mu I}{2\pi \rho} \quad}$$

##### Method B: Using Ampere's Circuital Law
Due to the perfect cylindrical symmetry of an infinite wire, Ampere's Law provides a much simpler method.
1.  **Choose an Amperian Path**: A circle of radius $\rho$ centered on the wire, lying in a plane perpendicular to the wire.
2.  **Evaluate the Integral**: By symmetry, the magnitude of $\vec{B}$ is constant everywhere on this path, and $\vec{B}$ is always parallel to the path element $d\vec{l}$. Therefore, $\vec{B} \cdot d\vec{l} = B dl$.
3.  **Apply Ampere's Law**: $\oint \vec{B} \cdot d\vec{l} = \mu I_{enc}$
$$\begin{align}
\oint B dl &= \mu I \\
B \oint dl &= \mu I \\
B (2\pi\rho) &= \mu I \\
\implies B &= \frac{\mu I}{2\pi\rho}
\end{align}$$
This confirms the result from Method A.

---
#### Direction of the Field: Right-Hand Grip Rule
#right-hand-rule

For both finite and infinite conductors, the direction of the magnetic field lines is found using the **Right-Hand Grip Rule**:
> Point the thumb of your right hand in the direction of the current ($I$). The direction your fingers curl around the wire indicates the direction of the magnetic field lines.

The field lines are concentric circles centered on the wire.

---
### Related Concepts
#topic/related-concepts

> [[Biot-Savart's Law]]
> [[Ampere's Circuital Law]]

[[Magnetic Field Intensity (H)]]
[[Magnetic Flux Density (B)]]
[[Curl of a Vector Field]]
[[Force between Differential Current Elements]]
[[Inductance and Mutual Inductance]]