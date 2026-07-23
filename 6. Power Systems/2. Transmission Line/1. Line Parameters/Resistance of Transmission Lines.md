---
tags:
  - power-system
  - transmission-lines
  - line-parameters
  - electrical-engineering
created: 2025-10-11
aliases:
  - Line Resistance
  - Conductor Resistance
subject: "[[Power System]]"
parent:
  - Transmission Line Parameters and Performance
modified: 2026-07-23T21:17:28
---
### Resistance of Transmission Lines
#transmission-line-resistance #power-loss #skin-effect

> The resistance of a transmission line conductor is the property that opposes the flow of electric current. It is a fundamental parameter that causes real power loss ($I^2R$) and contributes to the voltage drop along the line. Minimizing resistance is crucial for improving the overall efficiency of power transmission.

#### DC Resistance ($R_{dc}$)
#dc-resistance

For direct current, the resistance is uniformly distributed across the conductor's cross-section and is given by the basic formula:
$$\boxed{\quad R_{dc} = \frac{\rho l}{A} \quad}$$
where:
-   $\rho$ (rho) is the **resistivity** of the conductor material (e.g., Ω-m).
-   $l$ is the **length** of the conductor (m).
-   $A$ is the **cross-sectional area** of the conductor (m²).

#### AC Resistance ($R_{ac}$)
#ac-resistance

For alternating current, the effective resistance ($R_{ac}$) is always greater than the DC resistance ($R_{dc}$). This is due to two main phenomena: the Skin Effect and the Proximity Effect.

#### Factors Affecting Line Resistance
1.  **Skin Effect**
    #skin-effect
    In an AC conductor, the alternating magnetic flux inside the conductor is stronger at the center than at the surface. This causes a higher inductive reactance at the core, forcing the AC current to concentrate near the surface (or "skin") of the conductor.
    -   **Effect**: The effective cross-sectional area available for current flow is reduced.
    -   **Result**: The resistance of the conductor to AC current increases. The skin effect is more pronounced at higher frequencies and for larger diameter conductors. Stranded conductors like **ACSR** are used to mitigate this effect.

2.  **Proximity Effect**
    #proximity-effect
    When two or more conductors carrying AC current are close to each other, their magnetic fields interact. This interaction causes the current in each conductor to redistribute, becoming concentrated in the portion of the conductor's cross-section that is furthest from the other conductors.
    -   **Effect**: The current distribution becomes non-uniform.
    -   **Result**: Similar to the skin effect, this reduces the effective area and increases the resistance. The proximity effect is generally negligible for overhead lines where conductors are spaced far apart.

3.  **Temperature**
    #temperature-effect
    The resistance of metallic conductors, such as aluminum and copper, increases with temperature. The relationship is nearly linear over the normal operating range.
    $$\boxed{\quad R_2 = R_1 [1 + \alpha_1 (T_2 - T_1)] \quad}$$
    where:
    -   $R_1$ and $R_2$ are the resistances at temperatures $T_1$ and $T_2$, respectively.
    -   $\alpha_1$ is the **temperature coefficient of resistance** at temperature $T_1$.
    Conductor resistance is usually specified by manufacturers at a standard temperature (e.g., 20°C), and must be corrected for the actual operating temperature.

4.  **Conductor Material (ACSR)**
    #acsr-conductor
    The most common conductor for high-voltage overhead lines is **ACSR (Aluminium Conductor Steel Reinforced)**.
    -   **Structure**: It consists of a central core of galvanized steel strands for high mechanical strength (to support the long spans) surrounded by layers of high-purity aluminum strands, which provide excellent conductivity.
    -   **Advantage**: It offers a high strength-to-weight ratio and is more economical than copper for the same current-carrying capacity.

---
### Related Concepts
#power-system/related-concepts

> [[Inductance of Single-phase and Three-phase Lines]]

[[Capacitance of Single-phase and Three-phase Lines]]
[[Modeling of Short Transmission Lines]]
[[Transmission Efficiency]]
[[Voltage Regulation and Transmission Efficiency]]
