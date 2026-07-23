---
tags:
  - electrical-machines
  - dc-motors
  - motor-characteristics
  - performance-curves
created: 2025-09-16
aliases:
  - DC Motor Characteristics
  - Performance Curves of DC Motors
  - Torque-Armature Current Characteristics of DC Motors
  - Speed-Armature Current
  - Characteristics of a DC Shunt Motor
  - Characteristics of a DC Series Motor
  - Characteristics of a DC Compound Motor
subject: "[[Electrical Machines]]"
parent: "[[DC Motors]]"
modified: 2026-07-23T20:42:13
---
### Characteristics of DC Motors
#dc-motors #motor-characteristics

> The **characteristics** of a DC motor are graphical representations that describe its performance under various load conditions. These curves are crucial for selecting the appropriate motor for a specific application. The three most important characteristics are:
> 1.  **Torque vs. Armature Current ($T_a$ vs. $I_a$)** - The Electrical Characteristic.
> 2.  **Speed vs. Armature Current ($N$ vs. $I_a$)**.
> 3.  **Speed vs. Torque ($N$ vs. $T_a$)** - The Mechanical Characteristic.

#### Fundamental Equations
All characteristic curves are derived from the fundamental speed and torque equations of a DC motor:
$$\boxed{\quad \text{Speed:} \quad N \propto \frac{E_b}{\phi} \quad \text{where} \quad E_b = V - I_a R_a \quad}$$
$$\boxed{\quad \text{Torque:} \quad T_a \propto \phi I_a \quad}$$

---
#### Characteristics of a DC Shunt Motor
#shunt-motor/characteristics

**Premise**: The field flux $\phi$ is considered practically constant because the field winding is connected to a constant supply voltage $V$.

##### 1. Torque vs. Armature Current ($T_a$ vs. $I_a$)
Since $\phi$ is constant, the torque equation becomes:
$$ T_a \propto I_a $$
The torque is directly proportional to the armature current. The characteristic is a **straight line** passing through the origin.

##### 2. Speed vs. Armature Current ($N$ vs. $I_a$)
Since $\phi$ is constant, the speed equation becomes:
$$ N \propto E_b \implies N \propto (V - I_a R_a) $$
As the load increases, the armature current $I_a$ increases, causing the $I_a R_a$ drop to increase. This slightly reduces the back EMF $E_b$, leading to a small decrease in speed. The characteristic is a **slightly drooping straight line**. Due to this, shunt motors are considered **constant speed motors**.

---
#### Characteristics of a DC Series Motor
#series-motor/characteristics

**Premise**: The field flux $\phi$ is produced by the armature current, so before magnetic saturation, $\phi \propto I_a$.

##### 1. Torque vs. Armature Current ($T_a$ vs. $I_a$)
The torque equation is $T_a \propto \phi I_a$. Substituting $\phi \propto I_a$:
$$ T_a \propto I_a^2 \quad (\text{Before Saturation}) $$
The torque is proportional to the square of the armature current. This gives the motor a very **high starting torque**. The characteristic is a **parabola**. After saturation, the flux $\phi$ becomes constant, and the curve becomes a straight line ($T_a \propto I_a$).

##### 2. Speed vs. Armature Current ($N$ vs. $I_a$)
The speed equation is $N \propto E_b / \phi$. Since $\phi \propto I_a$ and $E_b$ is reasonably constant:
$$ N \propto \frac{1}{I_a} $$
The speed is inversely proportional to the armature current. The characteristic is a **hyperbola**. This means the speed is very high at light loads and low at heavy loads.

> [!warning] Warning
> At no-load, $I_a$ is extremely small, making the speed dangerously high. A series motor **must never be run without a mechanical load**.

---
#### Characteristics of a DC Compound Motor
#compound-motor/characteristics

##### 1. Cumulative Compound Motor
This motor has characteristics intermediate between those of a shunt and a series motor.
* **Torque**: It has a higher starting torque than a shunt motor but lower than a series motor.
* **Speed**: The speed decreases more with increasing load than a shunt motor but less than a series motor. It has a definite no-load speed and will not run away.

##### 2. Differential Compound Motor
The series field opposes the shunt field. As the load ($I_a$) increases, the series flux weakens the total flux. Since $N \propto 1/\phi$, a decrease in flux causes the speed to **increase**. This can lead to instability and is a major reason why these motors are almost never used.

---
#### Summary Graph of Characteristics
![[DC_Motor_Characteristics.png]] (Conceptual Image)
A combined graph would show:
* **N vs Ia**: Shunt motor is almost flat, Cumulative compound droops more, and Series motor is a hyperbola starting from a very high speed.
* **T vs Ia**: Shunt motor is a straight line, Cumulative compound is a curve above it, and Series motor is a parabola (steepest curve).

---
### Related Concepts
#dc-motors/related-concepts

> [[Types of DC Motors]]

[[Principle of Operation of DC Motors]]
[[EMF and Torque Equations of a DC Machine]]
[[Starting of DC Motors]]
[[Speed Control of DC Motors]]
