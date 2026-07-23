---
tags:
  - power-systems
  - power-system-protection
  - circuit-breaker
  - switchgear
created: 2025-10-14
aliases:
  - Circuit Breaker Types
  - OCB
  - ABCB
  - SF6 Breaker
  - VCB
  - Types of Circuit Breakers (Air, Oil, SF6, Vacuum)
subject: "[[Power System]]"
parent:
  - Circuit Breakers
modified: 2026-07-23T21:32:24
---
### Types of Circuit Breakers (Air, Oil, SF6, Vacuum)
#circuit-breaker #switchgear #arc-extinction

> High-voltage circuit breakers are classified based on the medium used to extinguish the arc that forms when their contacts separate. The choice of medium dictates the breaker's design, operating characteristics, voltage level, and application. The four main types are Oil, Air-Blast, Sulphur Hexafluoride (SF6), and Vacuum.

#### 1. Oil Circuit Breaker (OCB)
#oil-circuit-breaker

*   **Arc Quenching Medium**: Insulating Oil (e.g., transformer oil).
*   **Principle**: When the contacts separate under oil, the intense heat of the arc decomposes the surrounding oil into a large volume of gas, primarily hydrogen (~70%). The hydrogen gas bubble creates high pressure and turbulent flow, which cools the arc and sweeps away ionized particles, extinguishing it at a current zero.
*   **Types**:
    *   **Bulk Oil Circuit Breaker (BOCB)**: Uses a large quantity of oil in a grounded steel tank for both arc quenching and insulation.
    *   **Minimum Oil Circuit Breaker (MOCB)**: Uses a small, precisely directed amount of oil just for arc quenching, with the interrupting unit housed in an insulating porcelain chamber.
*   **Advantages**: Reliable and a well-established technology; oil is a good insulator.
*   **Disadvantages**: Oil is flammable, posing a significant fire risk; requires frequent maintenance (oil carbonizes and loses dielectric strength); slow operation compared to modern breakers.
*   **Application**: Largely obsolete, but still found in older substations up to 220 kV.

---
#### 2. Air-Blast Circuit Breaker (ABCB)
#air-blast-circuit-breaker

*   **Arc Quenching Medium**: High-pressure compressed air (20-30 kg/cm²).
*   **Principle**: A high-velocity blast of compressed air is directed at the arc, either axially or cross-blast. This blast intensely cools the arc and physically blows away the ionized particles, rapidly building up the dielectric strength in the contact gap after a current zero.
*   **Advantages**: Very fast operation, suitable for frequent switching (e.g., arc furnaces); no fire risk; arc energy is low.
*   **Disadvantages**: Requires a large, noisy, and high-maintenance auxiliary compressed air plant; susceptible to current chopping and restriking voltage issues.
*   **Application**: Used for high voltages (132 kV and above) and in applications requiring frequent operation, but now mostly superseded by SF6 breakers.

---
#### 3. Sulphur Hexafluoride (SF6) Circuit Breaker
#sf6-circuit-breaker

*   **Arc Quenching Medium**: Sulphur Hexafluoride (SF6) gas.
*   **Principle**: SF6 is a highly **electronegative** gas. When an arc is drawn in SF6, the gas molecules rapidly capture the free electrons in the plasma to form heavy, immobile negative ions. This rapid removal of conducting electrons causes the arc to collapse and the dielectric strength of the medium to recover extremely quickly. The gas also has excellent heat transfer properties.
*   **Advantages**:
    *   Excellent insulating and arc-quenching properties (100 times more effective than air).
    *   Allows for very compact, sealed-for-life designs with low maintenance.
    *   Non-flammable and chemically stable.
    *   Quiet operation.
*   **Disadvantages**: SF6 is a potent greenhouse gas (high Global Warming Potential), and its decomposition products during arcing are toxic, requiring careful handling and recycling.
*   **Application**: The dominant technology for high-voltage (HV) and extra-high-voltage (EHV) systems, from medium voltage (33 kV) up to 800 kV and beyond.

---
#### 4. Vacuum Circuit Breaker (VCB)
#vacuum-circuit-breaker

*   **Arc Quenching Medium**: High vacuum (10⁻⁶ to 10⁻⁹ torr).
*   **Principle**: The contacts are housed in a permanently sealed vacuum interrupter. When the contacts separate, the current flows through an arc composed of **ionized metal vapor** emitted from the contact surfaces. At the first current zero, the arc extinguishes, and the metal vapor rapidly condenses on the contacts and surrounding shields. With no medium to ionize, the dielectric strength of the vacuum gap recovers extremely fast (within microseconds).
*   **Advantages**:
    *   Fastest dielectric recovery, ideal for frequent switching and capacitor bank switching.
    *   Very long operational life with minimal to no maintenance.
    *   Compact, silent, and environmentally friendly (no greenhouse gases).
    *   No fire or explosion hazard.
*   **Disadvantages**: Not economical for very high voltages (above 38-66 kV), as multiple interrupters must be connected in series.
*   **Application**: The dominant technology for **medium-voltage (MV)** applications (up to 38 kV).

---
### Related Concepts
#circuit-breaker/related-concepts

> [[Principle of Arc Extinction]]

[[Circuit Breaker Ratings]]
[[Power System Protection]]