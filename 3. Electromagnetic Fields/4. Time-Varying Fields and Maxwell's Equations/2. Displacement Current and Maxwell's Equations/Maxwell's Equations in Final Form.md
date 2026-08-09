---
tags:
  - electromagnetic-fields
  - maxwells-equations
  - electrodynamics
  - gate
created: 2025-10-17
aliases:
  - Maxwell's Equations
  - Unified Electromagnetism
  - Maxwell's Equations in Final Form (Integral and Differential)
subject: "[[Electromagnetic Fields]]"
parent: Time-Varying Fields and Maxwell's Equations
formula:
  - "Maxwell's Four Equations in Final Form : $$\\begin{array}{l|l|l} \\textbf{Maxwell's Equation} & \\textbf{Differential Form} & \\textbf{Integral Form} \\\\ \\hline \\text{Gauss's Law for Electric Field} & \\nabla \\cdot \\mathbf{D} = \\rho_v & \\displaystyle \\oint_S \\mathbf{D}\\cdot d\\mathbf{S} = Q_{\\mathrm{enc}} = \\int_V \\rho_v\\, dV \\\\[1.2em] \\text{Gauss's Law for Magnetic Field} & \\nabla \\cdot \\mathbf{B} = 0 & \\displaystyle \\oint_S \\mathbf{B}\\cdot d\\mathbf{S} = 0 \\\\[1.2em] \\text{Faraday's Law} & \\displaystyle \\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t} & \\displaystyle \\oint_L \\mathbf{E}\\cdot d\\mathbf{l} = -\\frac{d\\Phi_B}{dt} = -\\int_S \\frac{\\partial \\mathbf{B}}{\\partial t} \\cdot d\\mathbf{S} \\\\[1.5em] \\text{Ampere-Maxwell Law} & \\displaystyle \\nabla \\times \\mathbf{H} = \\mathbf{J} + \\frac{\\partial \\mathbf{D}}{\\partial t} & \\displaystyle \\oint_L \\mathbf{H}\\cdot d\\mathbf{l} = I_c+I_d = \\int_S \\left( \\mathbf{J} + \\frac{\\partial \\mathbf{D}}{\\partial t} \\right) \\cdot d\\mathbf{S} \\end{array} $$"
modified: 2026-07-16
---
### Maxwell's Equations in Final Form
#maxwells-equations #electrodynamics #fundamental-laws

> **Maxwell's Equations** are a ==set of four coupled partial differential equations that, together with the Lorentz force law, form the complete foundation of classical electromagnetism==. <u>They describe how electric and magnetic fields are generated and altered by each other and by charges and currents.</u> ==They represent the unification of electricity, magnetism, and optics.==

#### The Four Equations: Differential and Integral Forms
#maxwells-equations/forms

Maxwell's equations can be expressed in two equivalent forms: the differential (or point) form, which describes the relationships at any point in space, and the integral form, which relates the fields over a surface or around a loop.

| Law Name                       | Differential (Point) Form                                                                              | Integral Form                                                                                                                                             |
| ------------------------------ | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Gauss's Law for E-Field** | $$\boxed{\quad \nabla \cdot \mathbf{D} = \rho_v \quad}$$                                               | $$\boxed{\quad \oint_S \mathbf{D} \cdot d\mathbf{S} = Q_{enc} = \int_V \rho_v dV \quad}$$                                                                 |
| **2. Gauss's Law for B-Field** | $$\boxed{\quad \nabla \cdot \mathbf{B} = 0 \quad}$$                                                    | $$\boxed{\quad \oint_S \mathbf{B} \cdot d\mathbf{S} = 0 \quad}$$                                                                                          |
| **3. Faraday's Law**           | $$\boxed{\quad \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} \quad}$$             | $$\boxed{\quad \oint_L \mathbf{E} \cdot d\mathbf{l} = -\frac{d\Phi}{dt} = -\int_S \frac{\partial \mathbf{B}}{\partial t} \cdot d\mathbf{S} \quad}$$       |
| **4. Ampere-Maxwell Law**      | $$\boxed{\quad \nabla \times \mathbf{H} = \mathbf{J} + \frac{\partial \mathbf{D}}{\partial t} \quad}$$ | $$\boxed{\quad \oint_L \mathbf{H} \cdot d\mathbf{l} = I_c + I_d = \int_S (\mathbf{J} + \frac{\partial \mathbf{D}}{\partial t}) \cdot d\mathbf{S} \quad}$$ |

> [!pyq]- PYQ : 2021
> ![[ee_2021#^q5]]

---
#### Physical Meaning of Each Equation
#maxwells-equations/meaning

1.  **Gauss's Law for Electricity**: Electric charges are the sources and sinks of the electric field. The net electric flux through any closed surface is proportional to the total electric charge enclosed within that surface.
2.  **Gauss's Law for Magnetism**: There are no magnetic monopoles (isolated north or south poles). Magnetic field lines are always continuous loops, meaning the net magnetic flux through any closed surface is always zero.
3.  **Faraday's Law of Induction**: A time-varying magnetic field induces a spatially varying, circulating (non-conservative) electric field. This is the principle behind electric generators and transformers.
4.  **Ampere-Maxwell Law**: A magnetic field is produced by both conduction currents (moving charges, $\mathbf{J}$) and by time-varying electric fields ([[Concept of Displacement Current (Jd)|displacement current]], $\partial \mathbf{D}/\partial t$). This was Maxwell's key contribution that completed the theory.

---
#### Constitutive Relations
#constitutive-relations #material-properties

To solve Maxwell's equations within a material, we need to relate the field vectors ($\mathbf{E}, \mathbf{B}$) to the medium's response ($\mathbf{D}, \mathbf{H}$). For linear, isotropic, and homogeneous materials, these relationships are:
- $\mathbf{D} = \varepsilon \mathbf{E} = \varepsilon_0 \varepsilon_r \mathbf{E}$ (Electric flux density)
- $\mathbf{B} = \mu \mathbf{H} = \mu_0 \mu_r \mathbf{H}$ (Magnetic flux density)
- $\mathbf{J} = \sigma \mathbf{E}$ (Ohm's Law, point form)
where $\varepsilon$ is permittivity, $\mu$ is permeability, and $\sigma$ is conductivity.

---
#### Maxwell's Equations in Phasor Form (Time-Harmonic)
#phasor-form #time-harmonic

For fields that vary sinusoidally with time (e.g., $\mathbf{E}(t) = \text{Re}\{\mathbf{E}_s e^{j\omega t}\}$), the time derivative $\partial/\partial t$ can be replaced by multiplication with $j\omega$. This transforms the differential equations into the algebraic domain of phasors, which is extremely useful for wave propagation analysis.

1.  $\nabla \cdot \mathbf{D}_s = \rho_{vs}$
2.  $\nabla \cdot \mathbf{B}_s = 0$
3.  $\nabla \times \mathbf{E}_s = -j\omega \mathbf{B}_s$
4.  $\nabla \times \mathbf{H}_s = \mathbf{J}_s + j\omega \mathbf{D}_s$

---
#### Special Cases
#maxwells-equations/special-cases

-   **Statics** ($\partial/\partial t = 0$): The time derivatives vanish. The equations decouple into two pairs for electrostatics and magnetostatics, showing no interaction between static electric and magnetic fields.
-   **Source-Free Media** ($\rho_v=0, \mathbf{J}=0$): In regions without free charges or currents (like free space or a perfect dielectric), the equations simplify. It is from this form that the [[Wave Equation Derived from Maxwell's Equations|electromagnetic wave equation]] is derived, showing that the fields can propagate as self-sustaining waves.

---
### Related Concepts
#topic/related-concepts

> [[Gauss's Law]]
> [[Faraday's Law in Integral and Point Form]]
> [[Concept of Displacement Current (Jd)]]
> [[Inconsistency of Ampere's Law for Time-Varying Fields]]

[[Wave Equation Derived from Maxwell's Equations]]
[[Uniform Plane Waves]]
[[Poynting Vector]]
[[Equation of Continuity]]
