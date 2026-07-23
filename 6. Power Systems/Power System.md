---
tags:
  - syllabus
  - power-systems
  - gate
  - moc
created: 2026-07-23T22:34:36
syllabus: power systems
modified: 2026-07-23T22:34:36
---
### Power Systems

```mermaid
timeline
    title Power Systems Learning Progression
    Phase 1: Fundamentals : Structure & Basics : Per-Unit System & Grounding
    Phase 2: Transmission : Line Parameters & Modeling : Performance & Cables
    Phase 3: Load Flow : Y-Bus Formulation : Solution Methods (NR, GS, FDLF)
    Phase 4: Fault Analysis : Symmetrical Components : Symmetrical & Unsymmetrical Faults
    Phase 5: Stability : Steady-State & Transient : Swing Equation & Equal Area Criterion
    Phase 6: Operation & Control : Economic Dispatch & LFC : Voltage & Reactive Power
    Phase 7: Protection : Relays & Zones : Circuit Breakers & Schemes
```

> [!info]
> This Map of Content (MOC) follows the recommended learning progression for GATE Electrical Engineering - Power Systems.
> 
> Learn each section sequentially. Every topic links to its detailed note.

---

### 1. Power System Fundamentals

> Basic structure and representation of modern power systems.

#### 1. Basic Concepts
- [[AC and DC Transmission Systems Comparison]]
- [[Overview of Power Generation (Thermal, Hydro, Nuclear)]]
- [[Per-Unit System]]
- [[Reactance and Impedance Diagrams]]
- [[Single Line Diagram Representation]]
- [[Structure of a Power System]]

#### 2. Neutral Grounding
- [[Neutral Grounding]]

---

### 2. [[Transmission Line]]

> Parameters, modeling, and performance of overhead and underground lines.

#### 1. Line Parameters
- [[Capacitance of Single-phase and Three-phase Lines]]
- [[Concept of GMD and GMR]]
- [[Effect of Earth on Capacitance]]
- [[Inductance of Composite and Bundled Conductors]]
- [[Inductance of Single-phase and Three-phase Lines]]
- [[Resistance of Transmission Lines]]

#### 2. Performance of Transmission Lines
- [[ABCD Parameters (Generalized Circuit Constants)]]
- [[Corona and its Effects]]
- [[Ferranti Effect]]
- [[Modeling of Long Transmission Lines]]
- [[Modeling of Medium Transmission Lines]]
- [[Modeling of Short Transmission Lines]]
- [[Power Flow through a Transmission Line]]
- [[Surge Impedance and Surge Impedance Loading (SIL)]]
- [[Underground Cables (Construction, Grading, Capacitance)]]
- [[Voltage Regulation and Transmission Efficiency]]

---

### 3. [[Power Flow Studies (Load Flow Analysis)]]

> Steady-state analysis of power system networks.

#### 1. Formulation
- [[Bus Admittance Matrix (Y-bus) Formulation]]
- [[Bus Classification (Slack, PQ, PV)]]
- [[Kron Reduction]]
- [[Power Flow Equations]]

#### 2. Solution Methods
- [[Comparison of Load Flow Methods]]
- [[Fast Decoupled Load Flow (FDLF)]]
- [[Gauss-Seidel Method for Load Flow]]
- [[Newton-Raphson Method for Load Flow]]

---

### 4. [[Fault Analysis]]

> Calculation of currents and voltages during system faults.

#### 1. Symmetrical Components
- [[Concept of Symmetrical Components]]
- [[Phase Impedance Matrix to Sequence Impedances (Transmission Line)]]
- [[Sequence Impedances and Networks of Synchronous Machines]]
- [[Sequence Impedances and Networks of Transformers]]
- [[Sequence Impedances and Networks of Transmission Lines]]

#### 2. Symmetrical Faults
- [[Analysis of Symmetrical Faults]]
- [[Current Limiting Reactors]]
- [[Short Circuit MVA]]

#### 3. Unsymmetrical Faults
- [[Analysis of Double Line-to-Ground (LLG) Fault]]
- [[Analysis of Line-to-Line (LL) Fault]]
- [[Analysis of Single Line-to-Ground (LG) Fault]]
- [[Unsymmetrical Faults]]

---

### 5. [[Power System Stability]]

> Ability of the power system to remain in synchronism under disturbances.

#### 1. Stability Concepts
- [[Classification of Power System Stability]]
- [[Power-Angle Curve]]
- [[Steady-State Stability Limit]]

#### 2. Transient Stability
- [[Critical Clearing Angle and Critical Clearing Time]]
- [[Equal Area Criterion for Stability Analysis]]
- [[Methods to Improve Transient Stability]]
- [[Swing Equation]]

---

### 6. [[Power System Operation & Control]]

> Economic dispatch and automatic control of frequency and voltage.

#### 1. Economic Operation
- [[Economic Load Dispatch (ELD) including losses]]
- [[Economic Load Dispatch (ELD) neglecting losses]]
- [[Incremental Cost Curve]]
- [[Penalty Factors and B-coefficients]]
- [[Unit Commitment]]

#### 2. Load Frequency Control (LFC)
- [[Concept of Area Control Error (ACE)]]
- [[Governor Control System]]
- [[Load Frequency Control (LFC)]]
- [[Single Area Load Frequency Control (Uncontrolled and Controlled Case)]]
- [[Speed Regulation (Droop)]]
- [[Two-Area Load Frequency Control]]

#### 3. Voltage and Reactive Power Control
- [[Automatic Voltage Regulator (AVR)]]
- [[Methods of Voltage Control]]
- [[Reactive Power Compensation]]
- [[Relationship between Voltage, Power, and Reactive Power]]
- [[Use of Tap-Changing Transformers]]

---

### 7. [[Power System Protection]]

> Schemes and devices for fault detection and isolation.

#### 1. Fundamentals of Protection
- [[Desirable Qualities of a Protective Relay]]
- [[Instrument Transformers (CT and PT)]]
- [[Primary and Backup Protection]]
- [[Principles and Need for Protective Schemes]]
- [[Zones of Protection]]

#### 2. Protective Relays
- [[Differential Relays]]
- [[Directional Relays]]
- [[Distance Relays]]
- [[Overcurrent Relays]]

#### 3. Protection Schemes
- [[Busbar Protection]]
- [[Generator Protection]]
- [[Transformer Protection (including Buchholz Relay)]]
- [[Transmission Line Protection]]

#### 4. Circuit Breakers
- [[Circuit Breaker Ratings]]
- [[Principle of Arc Extinction]]
- [[Types of Circuit Breakers]]

---

### 8. Archive

#### 1. Deprecated
- [[Fault Calculations]]
- [[Power Flow Studies (Load Flow Analysis)]]
- [[Protective Relaying Principles]]
- [[Solid Fault]]
- [[Y-bus Matrix]]

#### 2. Extra Topics
- [[DC Load Flow Analysis]]
- [[Distribution Feeder Analysis]]
- [[Harmonic Analysis]]
- [[Load Sharing]]
- [[Parallel Sources in Fault Analysis]]
- [[Phase-Shifting Transformer Modeling]]
- [[Power Distribution]]
- [[Power Quality]]
- [[Small Signal Stability]]
- [[Sparsity]]
- [[Sub-Synchronous Resonance]]
- [[Z-bus Matrix]]

#### 3. Subject Overview

- Power System Fundamentals
- Transmission Line
- [[Power Flow Studies (Load Flow Analysis)]]
- [[Fault Calculations|Fault Analysis]]
- [[Classification of Power System Stability|Power System Stability]]
- Power System Operation & Control
- Power System Protection
