---
tags:
  - electrical-machines/induction-machines
  - map-of-content
  - ac-machines
  - induction-motor
  - asynchronous-machine
created: 2026-06-06
aliases:
  - Induction Machine MOC
  - Induction Machine Master Note
  - Asynchronous Machines
  - IM
subject: "[[Electrical Machines]]"
parent: "[[AC Machines]]"
trends:
  - "[[trends - Induction Machines]]"
error:
  - "[[error - Induction Machines]]"
modified: 2026-07-23T20:50:29
---
### Induction Machines

#induction-machine #asynchronous-machine #induction-motor

> An **Induction Machine**, also known as an **Asynchronous Machine**, is an AC machine where power is transferred from the stator to the rotor by electromagnetic induction, much like a [[Transformers|transformer]]. It is the most common type of motor used in industrial and domestic applications due to its simple construction, robustness, low cost, and reliability. It is often called the =="workhorse of the industry"==.
^induction-machine

Its key characteristic is that its rotor always rotates at a speed slower than the [[Synchronous Machines#Synchronous Speed|synchronous speed]] of the stator's magnetic field.

#### Concept of Slip & Fundamental Frequencies

#slip #induction-principle

**Slip ($s$)** is the normalized difference between the synchronous speed and the actual rotor speed, serving as a fundamental parameter for an induction machine's operation.

$$\boxed{\quad s = \frac{N_s - N_r}{N_s} \quad}$$

- At **standstill** (starting), $N_r = 0$, making **$s=1$**.
    
- In normal **motor operation**, $N_r$ is slightly less than $N_s$, meaning **$0 < s < 1$**.
    
- If the rotor were to run at synchronous speed, $N_r = N_s$, resulting in **$s=0$**.
    

The frequency of the induced currents in the rotor ($f_r$) relies strictly on slip, where $f_s$ is the stator supply frequency:

$$\boxed{\quad f_r = s \times f_s \quad}$$

> See [[Concept of Slip]]
> See [[Frequency of Rotor Current and EMF]]

---
#### Core Foundations & Construction

#induction-machine/construction

Before evaluating operational performance, the structural layouts defining how magnetic fields interact must be established.

**Physical Architecture:** Similar to a synchronous machine, the stator consists of a laminated steel core with slots for a three-phase winding. The rotor architecture defines the machine type:

- **Squirrel Cage Rotor**: Consists of conducting bars (aluminum or copper) embedded in rotor slots and short-circuited at both ends by end rings. It is highly rugged and simple.
    
- **Wound Rotor (Slip-Ring Rotor)**: Features a three-phase winding connected to three slip rings, allowing external resistors into the rotor circuit to control starting torque and speed.
    

> See [[Construction of Three-Phase Induction Motors]]

**The Baseline Fields:** When the stator winding is connected to a three-phase AC supply, it produces a Rotating Magnetic Field (RMF) that rotates at synchronous speed ($N_s$).

> See [[Rotating Magnetic Field (RMF)]]

---

#### Principle & Mathematical Modeling

#induction-machine/principle

The translation of physical induction into circuit models and operational modes.

**Core Operations:** The RMF sweeps past stationary rotor conductors, inducing a voltage and current (Faraday's Law). This interaction generates a Lorentz force, creating torque that turns the rotor in the RMF's direction. The rotor speed ($N_r$) must remain less than $N_s$ to maintain the relative motion necessary for torque production.

> See [[Equivalent Circuit of a Single-Phase Induction Motor]]
> See [[Modes of Operation of Induction Machines]]
> See [[Induction Generator Operation]]

---
#### Performance, Testing & Torque Characteristics

#torque-slip-curve #induction-testing

Tracking power transfer and plotting how the machine behaves under varying loads.

**Power & Torque Fundamentals:**

- **Starting Torque ($T_{start}$)**: The torque at standstill when $s=1$.
- **Maximum (Breakdown) Torque ($T_{max}$)**: The highest torque the motor can produce, occurring at slip $s_{max}$. Stable operation requires the operating torque to be less than this maximum.

The condition for maximum torque happens when the rotor resistance equals the slip-dependent rotor reactance:

$$\boxed{\quad R_2' = s_{max} X_{2}' \quad}$$

> See [[Power Flow Diagram and Torque Development]]
> See [[Torque-Slip Characteristics of Induction Motor]]
> See [[Starting Torque, Maximum Torque and Full Load Torque]]
> See [[Effect of Rotor Resistance on Torque-Slip Curve]]

**Machine Testing:**

Evaluating the parameters needed for the equivalent circuit and performance mapping.

> See [[No-Load and Blocked Rotor Tests]]
> See [[Circle Diagram of an Induction Motor]]

---
#### Motor Starting, Control & Dynamics

#motor-starting #induction-dynamics

Induction motors draw massive inrush currents (5 to 8 times full-load current) during starting. Managing this current and controlling operational speed are critical for industrial integration.

**Starting Mechanisms:**

- **Direct-On-Line (DOL)**: Direct supply connection for small motors.
    
- **Star-Delta**: Starts in a star configuration (reducing voltage to $1/\sqrt{3}$) before switching to delta.
    
- **Auto-Transformer**: Uses a three-phase auto-transformer for reduced voltage at starting.
    
- **Rotor Resistance**: Exclusive to wound rotor motors, adding external resistance to increase starting torque and limit current.
    

> See [[Starting Methods for Induction Motors]]

**Speed Control & Anomalies:**

Techniques for varying speed beyond natural slip characteristics, and physical phenomena that cause unstable running.

> See [[Speed Control of Induction Motors]]
> See [[Cogging and Crawling Phenomena]]