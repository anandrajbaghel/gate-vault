---
tags:
  - measurements
  - ac-bridges
  - inductance-measurement
  - low-q-coils
  - gate
  - electrical-engineering
created: 2025-10-18
aliases:
  - Anderson Bridge
  - Low Q Inductance Bridge
subject: "[[Electrical & Electronic Measurements]]"
parent:
  - AC Bridges
modified: 2026-07-23T08:16:07
---
### Anderson's Bridge
#ac-bridges #inductance-measurement #low-q-coils

> Anderson's Bridge is a highly accurate AC bridge used for the precise measurement of self-inductance over a wide range. It is a modification of the [[Maxwell's Inductance Bridge]] and is particularly well-suited for measuring inductors with a **low Quality Factor (Q < 1)**. Its primary advantage is that the adjustments for the resistive and reactive components of the unknown inductor are made independent of each other, which allows for a much sharper and more convenient balance point.

#### Circuit Diagram and Components
#ac-bridges/circuit-diagram #anderson-bridge

Anderson's Bridge is not a standard four-arm bridge; it has an additional junction point.
-   **Arm AB**: The unknown inductor $L_x$ in series with its resistance $R_x$. A variable resistor $r_1$ is usually added in series, so the total resistance is $R_1 = R_x + r_1$.
-   **Arm AD**: A standard non-inductive resistor $R_2$.
-   **Arm BC**: A standard non-inductive resistor $R_3$.
-   **Arm DC**: A standard non-inductive resistor $R_4$.
-   **Special Branch**: A standard fixed capacitor $C$ is connected in series with a variable resistor $r$. This branch is connected between node D and a new node E.
-   **Detector**: The null detector is connected between nodes B and E.

Balancing is achieved by adjusting $r_1$ and $r$.

#### Derivation of Balance Equations
#ac-bridges/derivation

The derivation is more complex than for a simple four-arm bridge. At balance, the potential at node B is equal to the potential at node E ($V_B = V_E$), so no current flows through the detector.

This implies two conditions:
1. The voltage drop across arm AB is equal to the voltage drop across the path ADE: $V_{AB} = V_{ADE}$.
2. The voltage drop across arm BC is equal to the voltage drop across the path EC: $V_{BC} = V_{EC}$.

By applying Kirchhoff's laws to the loops and nodes, or more elegantly by performing a **star-delta transformation** on the star network formed by nodes A, D, C and the inner node E (or D,C,E with center D), we can arrive at the balance equations.

The standard derived equations at balance are:

1.  **For the resistive component:**
    The resistance of the first arm $R_1$ is related to the other fixed resistors.
    $$ R_1 = \frac{R_2 R_3}{R_4} $$
    Since $R_1 = R_x + r_1$, the unknown resistance is:
    $$\boxed{\quad R_x = \frac{R_2 R_3}{R_4} - r_1 \quad}$$

2.  **For the inductive component:**
    The inductance is given by:
    $$\boxed{\quad L_x = C \frac{R_3}{R_4} \left[ r(R_2 + R_4) + R_2 R_4 \right] \quad}$$

From these equations, it's clear that $r_1$ is used to balance the resistive part and $r$ is used to balance the inductive part. The two adjustments are independent, which simplifies the balancing process significantly.

#### Advantages and Disadvantages
#anderson-bridge/pros-cons

##### Advantages
-   **Low-Q Coils**: It is the preferred bridge for accurately measuring inductances of low-Q coils.
-   **Sharp Balance**: The independence of the two variable controls ($r_1$ and $r$) makes it easy to achieve a sharp and stable null point.
-   **Wide Range**: It can be used to measure a wide range of inductance values by selecting appropriate values for the fixed components.
-   **Capacitance Measurement**: The bridge can also be configured to measure an unknown capacitance with high precision by using a standard inductor.

##### Disadvantages
-   **Complexity**: The circuit is more complex and has more components than Maxwell's or Hay's bridge.
-   **Cost**: The additional components, particularly the standard capacitor and variable resistors, can increase the cost of the bridge.
-   **Shielding**: The extra node E makes the bridge slightly more susceptible to stray capacitance effects, and shielding can be more complicated.

---
### Related Concepts
#ac-bridges/related-concepts

> [[Maxwell's Inductance Bridge]] (for Medium Q coils)

[[Hay's Bridge (for High Q coils)|Hay's Bridge]] (for High Q coils)
[[General Equation for Bridge Balance]] 
[[Quality Factor (Q-Factor)]]
[[Star-Delta Transformation]]
