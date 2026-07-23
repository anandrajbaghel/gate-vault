---
tags:
  - electrical-machines
  - induction-motors
  - torque-slip
  - rotor-resistance
created: 2025-09-17
aliases:
  - Rotor Resistance Effect
  - T-s Curve with varying R2
subject: "[[Electrical Machines]]"
parent:
  - Three-Phase Induction Motors
  - "[[Induction Machines]]"
modified: 2026-07-23T20:44:47
---
### Effect of Rotor Resistance on Torque-Slip Curve
#induction-motors #torque-slip #rotor-resistance

> The rotor resistance ($R_2$) is a critical parameter that significantly influences the **shape** of the torque-slip curve, particularly the starting performance of an induction motor. While it changes the starting torque and the slip at which maximum torque occurs, it **does not** change the magnitude of the maximum torque itself. This principle is the basis for the superior starting performance of slip-ring induction motors.

#### The Governing Equations
To understand the effect of $R_2$, we recall the key torque and slip equations:
1.  **General Torque**: $T \propto \frac{s R_2}{R_2^2 + (sX_2)^2}$
2.  **Slip at Maximum Torque**: $\boxed{\quad s_m = \frac{R_2}{X_2} \quad}$
3.  **Maximum Torque**: $\boxed{\quad T_{max} \propto \frac{1}{2X_2} \quad}$

---
#### Analysis of the Effects
#rotor-resistance-effect 

Changing the rotor resistance (e.g., by adding external resistance to a [[Construction of Three-Phase Induction Motors#2. Slip Ring (or Wound) Rotor|slip-ring motor]]) has the following specific effects:

##### 1. Effect on Maximum Torque ($T_{max}$)
The equation for $T_{max}$ is independent of the rotor resistance $R_2$.
> [!success] Conclusion
> The magnitude of the maximum (or pull-out) torque is **not affected** by a change in rotor resistance.

##### 2. Effect on Slip at Maximum Torque ($s_m$)
From the equation $s_m = R_2/X_2$, it is clear that the slip at which maximum torque occurs is **directly proportional** to the rotor resistance.
> [!success] Conclusion
> Increasing the rotor resistance **increases the slip** at which the maximum torque is developed. Graphically, this means the peak of the torque-slip curve is shifted towards the left (from low slip towards $s=1$).

##### 3. Effect on Starting Torque ($T_{st}$)
The starting torque occurs at $s=1$. The general torque equation at start is $T_{st} \propto \frac{R_2}{R_2^2 + X_2^2}$.
* Initially, for a low-resistance rotor, increasing $R_2$ causes the numerator to increase faster than the denominator, thus **increasing the starting torque**.
* The starting torque reaches its maximum possible value when the peak of the T-s curve is shifted to $s=1$. This occurs when $s_m = 1$, which means the condition for maximum starting torque is:
    $$\boxed{\quad R_2 = X_2 \quad}$$
    > See [[Starting Torque, Maximum Torque and Full Load Torque#^exact-condition-for-max-torque|Exact vs. Approximate Condition for Maximum Torque]]

* If $R_2$ is increased beyond $X_2$, the starting torque will begin to decrease.
	![[Effect of Rotor Resistance on Torque-Slip Characteristic.png]]

##### 4. Effect on Running Performance
* **Efficiency**: Rotor copper loss is given by $P_{rcu} = s P_g$. For a given load (and thus a given $P_m$), a higher rotor resistance will lead to a higher slip, resulting in larger rotor copper losses and **lower running efficiency**.
* **[[Speed Regulation]]**: A motor with higher rotor resistance will have a steeper drop in speed for a given increase in load (i.e., poorer speed regulation).

---
#### Graphical Representation
#graphical-representation 

A family of torque-slip curves for a motor with varying rotor resistance ($R_A < R_B < R_C$) would show:

![[Effect of Rotor Resistance on Torque-Slip Characteristic.png]]

* All curves have the **same peak height** ($T_{max}$).
* The peak of the curve for $R_C$ is at a higher slip (further left) than for $R_B$, which is further left than for $R_A$.
* The starting torque ($T_{st}$ at $s=1$) is highest for curve $R_B$ (assuming $R_B \approx X_2$) and lower for $R_A$ and $R_C$.

---
#### Practical Application: Slip-Ring vs. Squirrel Cage Motors
#slip-ring-motor #squirrel-cage-rotor

*   **Slip-Ring Motor**: This is where the principle is practically applied. An external rheostat is connected to the rotor via slip rings.
    *   **At Start**: A high external resistance is inserted to achieve maximum starting torque with minimum starting current.
    *   **During Running**: The external resistance is gradually cut out and eventually short-circuited for normal operation. This ensures high running efficiency (low slip, low $R_2$).
*   **Squirrel Cage Motor**: The rotor resistance is fixed and designed to be very low to ensure high efficiency during normal operation. This results in a relatively low starting torque and high starting current. (Special designs like deep-bar or double-cage rotors are used to mimic a higher starting resistance).

---
### Related Concepts
#rotor-resistance-effect/related-concepts

> [[Torque-Slip Characteristics of Induction Motor]]

[[Starting Torque, Maximum Torque and Full Load Torque]]
[[Construction of Three-Phase Induction Motors]]
[[Starting Methods for Induction Motors]]