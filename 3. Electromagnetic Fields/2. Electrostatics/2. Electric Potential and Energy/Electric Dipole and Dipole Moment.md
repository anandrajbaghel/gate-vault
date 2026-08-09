---
tags:
  - electrostatics
  - dipole
  - vector-field
  - potential
  - polarization
created: 2025-10-17
aliases:
  - Electric Dipole
  - Dipole Moment
subject: "[[Electromagnetic Fields]]"
parent:
  - Electrostatics
modified: 2026-08-04T09:36:06
---
### Electric Dipole
#electric-dipole #dipole-moment #electrostatics

> An **electric dipole** is a configuration of two equal and opposite point charges, $+q$ and $-q$, separated by a small distance. This is a fundamental concept used to model the behavior of dielectric materials, antennas, and molecules in the presence of electric fields.

#### The Dipole Moment ($\vec{p}$)
#dipole-moment

The properties of an electric dipole are characterized by its **dipole moment vector**, $\vec{p}$.
-   It is a vector that points from the negative charge to the positive charge.
-   Its magnitude is the product of the charge magnitude $q$ and the separation distance $d$.

$$\boxed{\quad \vec{p} = q\vec{d} \quad}$$
where $\vec{d}$ is the vector pointing from $-q$ to $+q$. The unit of dipole moment is the **Coulomb-meter (C·m)**.

#### Potential due to a Dipole
#dipole-potential

The electric potential $V$ at a point P that is far away from the dipole (i.e., the distance $r$ to the dipole's center is much greater than the separation $d$, $r \gg d$) can be expressed in spherical coordinates as:
$$\boxed{\quad V = \frac{p \cos\theta}{4\pi\varepsilon_0 r^2} \quad}$$
where $\theta$ is the angle between the dipole moment vector $\vec{p}$ and the position vector $\vec{r}$ to point P.

Using the dot product, this can be written more elegantly as:
$$\boxed{\quad V = \frac{\vec{p} \cdot \hat{a}_r}{4\pi\varepsilon_0 r^2} \quad}$$
Note that the potential from a dipole decreases as $1/r^2$, which is faster than the $1/r$ decrease for a single point charge.

#### Electric Field of a Dipole
#dipole-electric-field

The electric field of the dipole is found by taking the negative gradient of the potential, $\vec{E} = -\nabla V$. In spherical coordinates, for a distant point ($r \gg d$), this gives:
$$\boxed{\quad \vec{E} = \frac{p}{4\pi\varepsilon_0 r^3} (2\cos\theta \,\hat{a}_r + \sin\theta \,\hat{a}_\theta) \quad}$$
The electric field from a dipole decreases as $1/r^3$, which is significantly faster than the $1/r^2$ decrease for a point charge.

#### Behavior in an External E-Field
#dipole-torque #dipole-energy

When an electric dipole is placed in an external uniform electric field $\vec{E}_{ext}$, it experiences a torque, but no net force.

**1. Torque ($\vec{\tau}$):**
The field exerts equal and opposite forces on the two charges, creating a couple or torque. This torque tends to rotate the dipole to align its moment $\vec{p}$ with the external field $\vec{E}_{ext}$.
$$\boxed{\quad \vec{\tau} = \vec{p} \times \vec{E}_{ext} \quad}$$
The magnitude of the torque is $\tau = pE_{ext}\sin\theta$.

**2. Potential Energy ($U$):**
The potential energy of the dipole in the external field depends on its orientation.
$$\boxed{\quad U = -\vec{p} \cdot \vec{E}_{ext} = -pE_{ext}\cos\theta \quad}$$
-   **Stable Equilibrium**: The energy is at a minimum ($U = -pE_{ext}$) when $\vec{p}$ is aligned with $\vec{E}_{ext}$ ($\theta = 0^\circ$).
-   **Unstable Equilibrium**: The energy is at a maximum ($U = +pE_{ext}$) when $\vec{p}$ is anti-aligned with $\vec{E}_{ext}$ ($\theta = 180^\circ$).

---
### Related Concepts
#dipole/related-concepts

> [[Electric Potential and Potential Difference (V)]]

[[Relationship between Electric Field and Potential]]
[[Electric Field Intensity (E)]]
[[Dielectric Materials and Polarization]]
[[Coulomb's Law]]
[[Vector Operations]]
[[Spherical Coordinate System]]