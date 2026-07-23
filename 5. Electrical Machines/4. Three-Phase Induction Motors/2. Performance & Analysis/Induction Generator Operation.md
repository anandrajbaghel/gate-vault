---
tags:
  - electrical-machines
  - induction-motors
  - induction-generator
  - generation
  - renewable-energy
created: 2025-09-17
aliases:
  - Induction Generator
  - Asynchronous Generator
  - Negative Resistance
subject: "[[Electrical Machines]]"
parent:
  - Three-Phase Induction Motors
modified: 2026-07-23T20:45:13
---
### Induction Generator Operation
#induction-generator #asynchronous-generator

> An **induction generator** or **asynchronous generator** is a standard three-phase induction motor that is operated as a generator without any modifications. ==This is achieved by driving the motor's rotor at a speed **above** its synchronous speed ($N_s$).== They are commonly used in renewable energy applications like wind and micro-hydro power plants.

![[Modes of Operation of Induction Machines.png]]

---
#### Principle of Operation
#induction-generator/principle

The operation is a direct extension of the induction motor's [[Torque-Slip Characteristics of Induction Motor|torque-slip curve]] into the negative slip region.

1.  **Driving Above Synchronous Speed**: A prime mover (like a wind turbine or water turbine) is used to rotate the motor's shaft.
2.  When the rotor speed ($N_r$) is greater than the synchronous speed of the RMF ($N_s$), the direction of the relative speed ($N_r - N_s$) reverses compared to motor operation.
3.  **Negative Slip**: The slip becomes negative.
    $$\boxed{\quad s = \frac{N_s - N_r}{N_s} \quad}$$
    Since $N_r > N_s$, the numerator is negative, so **$s < 0$**.
4.  **Reversal of Torque and Power Flow**: Due to the negative slip, the induced rotor current and EMF also change direction. This reverses the direction of the electromagnetic torque. Instead of a driving torque, the motor produces a **[[braking torque]]** that opposes the prime mover. This braking torque is the generator's reaction. The machine absorbs mechanical power from the prime mover and converts it into electrical power, which is delivered back to the supply.

> [!warning] Exam Interpretation — “Generator supply frequency”
> “Generator supply frequency” refers to the **stator (grid) frequency**, not the rotor speed.
> Hence, $$N_s = \frac{120 f}{P}$$
> must be calculated using the given frequency, but **rotor speed ≠ synchronous speed** unless slip is zero.

---
#### The Role of Negative Slip in the Equivalent Circuit
#negative-slip/role 

In the [[Equivalent Circuit of a Three-Phase Induction Motor#2. Equivalent Circuit Referred to Stator|per-phase equivalent circuit]], the mechanical load is represented by the resistance $R_L' = R_2' \left(\frac{1-s}{s}\right)$.
* When the slip $s$ becomes negative, this resistance $R_L'$ also becomes **negative**.
* A negative resistance does not consume power; instead, it **delivers power**.

> [!tip] Negative Resistance Concept
> The negative value of $R_L' = R_2' \left(\frac{1-s}{s}\right)$ in the equivalent circuit signifies that the machine is no longer a load but is acting as a source, delivering active power to the electrical network.

---
#### Excitation Requirement
#reactive-power #self-excitation

An induction machine is a **[[Singly and Doubly Excited Systems|singly excited machine]]**. It requires a magnetic field to operate, but it cannot create this field on its own. It needs a supply of reactive power (VARs) to establish the Rotating Magnetic Field in the stator.

![[Construction of Three-Phase Induction Motors#^excitation-classification]]

1.  **Grid-Connected Operation**: When connected to a power grid, the induction generator draws the required reactive power from the grid. This is the most common mode of operation.
2.  **Stand-Alone (Isolated) Operation**: For operation in an isolated system, a source of reactive power must be connected to the generator's terminals. This is typically a bank of **capacitors**. The capacitors supply the leading VARs needed for excitation. The generator builds up its voltage through a self-excitation process, which depends on the residual magnetism, capacitor size, and rotor speed.

---
#### Characteristics, Advantages, and Disadvantages
#induction-generator/characteristics #induction-generator/advantages #induction-generator/disadvantages 

*   **Characteristics**: The torque-slip curve in the generating region is nearly a mirror image of the curve in the motoring region. The amount of power generated is a function of the slip (i.e., how much faster than $N_s$ the rotor is spinning).

*   **Advantages**:
    *   **Rugged and Simple Construction**: Especially the squirrel cage type, which is brushless.
    *   **Low Cost and Maintenance**: Cheaper than a synchronous generator of the same rating.
    *   **Inherent Overload Protection**: If the load is too high, the generator's voltage collapses. It has inherent short-circuit protection because a fault collapses the terminal voltage, which removes the excitation, and the machine stops generating.
    *   **No Synchronization Needed**: When connected to a grid, it does not require complex synchronization procedures.

*   **Disadvantages**:
    *   **Requires Reactive Power**: It always consumes reactive power, which can be a burden on the power system.
    *   **Poor Voltage Regulation**: In stand-alone mode, the terminal voltage varies significantly with load and speed.
    *   **No Control over Frequency**: In grid-connected mode, the frequency is dictated by the grid. In stand-alone mode, it is a function of speed, capacitance, and load, making it difficult to maintain a constant frequency.

---
### Related Concepts
#induction-generator/related-concepts

> [[Torque-Slip Characteristics of Induction Motor]]

[[Modes of Operation of Induction Machines]]
[[Equivalent Circuit of a Three-Phase Induction Motor]]
[[Concept of Slip]]
[[Power System]]