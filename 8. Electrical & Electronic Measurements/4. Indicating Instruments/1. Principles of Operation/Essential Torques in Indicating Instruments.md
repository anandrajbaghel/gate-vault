---
tags:
  - measurements
  - indicating-instruments
  - pmmc
  - mi
  - gate
  - electrical-engineering
created: 2025-10-18
aliases:
  - Instrument Torques
  - Torques in Analog Instruments
  - Essential Torques in Indicating Instruments (Deflecting, Controlling, Damping)
subject: "[[Electrical & Electronic Measurements]]"
parent:
  - Indicating Instruments
modified: 2026-08-04T09:40:24
---
### Essential Torques in Indicating Instruments
#indicating-instruments #measurements #instrument-dynamics

> For the proper operation of any analog indicating instrument, three distinct torques are essential. These torques work in conjunction to move the pointer to the correct value, hold it steady at that value, and ensure it gets there quickly without excessive oscillation. These are the deflecting torque, the controlling torque, and the damping torque.

#### 1. Deflecting Torque ($T_d$)
#deflecting-torque

The **deflecting torque** is the primary torque that causes the moving system of the instrument (and the attached pointer) to move from its zero position. It is produced by using one of the many physical effects of the electrical quantity being measured.

-   **Function**: To create a moving force proportional to the magnitude of the quantity (voltage, current, power, etc.) under measurement.
-   **Production**: The mechanism depends on the type of instrument:
    -   **Magnetic Effect**: Used in PMMC and Moving Iron (MI) instruments.
    -   **Electrodynamic Effect**: Used in dynamometer type instruments (e.g., wattmeters).
    -   **Thermal Effect**: Used in hot-wire instruments.
    -   **Electrostatic Effect**: Used in electrostatic voltmeters.

In general, the deflecting torque is a function of the measurand, e.g., $T_d \propto I$ in PMMC or $T_d \propto I^2$ in MI instruments.

#### 2. Controlling Torque ($T_c$)
#controlling-torque

The **controlling torque**, also known as the restoring torque, opposes the deflecting torque. Its value increases as the pointer's deflection increases.

-   **Functions**:
    1.  To stop the pointer at a specific position where it equals the deflecting torque ($T_c = T_d$). Without it, the pointer would swing to the maximum position for any non-zero measurement.
    2.  To return the pointer to the zero position when the deflecting torque is removed.

There are two primary methods for producing controlling torque:
-   **[[Types of Controlling Torques|Spring Control]]**: Two hairsprings, typically made of phosphor bronze, are wound in opposite directions. The torque produced is directly proportional to the angle of deflection, $\theta$.
    $$ T_c = K_s \theta $$
    where $K_s$ is the spring constant. This linear relationship results in a **uniform scale** if $T_d$ is also proportional to the measurand.
-   **[[Types of Controlling Torques|Gravity Control]]**: A small adjustable weight is attached to the moving system. As the pointer deflects, the weight creates a restoring torque proportional to the sine of the deflection angle.
    $$ T_c = K_g \sin\theta $$
    This results in a **non-uniform scale** (cramped at the lower end) and requires the instrument to be used in a specific orientation (usually vertical).

#### 3. Damping Torque ($T_{da}$)
#damping-torque

The **damping torque** is necessary to prevent the pointer from oscillating around its final steady position. It brings the pointer to rest quickly and efficiently.

-   **Function**: To oppose the motion of the pointer. It only exists when the pointer is moving.
-   **Relationship**: The damping torque is proportional to the speed of the moving system.
    $$ T_{da} = D \frac{d\theta}{dt} $$
    where D is the damping coefficient.
-   **Types**: The main methods are:
    -   **[[Types of Damping Torques|Air Friction Damping]]**: A light aluminum vane moves within a closed air chamber.
    -   **[[Types of Damping Torques|Fluid Friction Damping]]**: A vane is submerged in damping oil.
    -   **[[Types of Damping Torques|Eddy Current Damping]]**: A non-magnetic conducting disc or former moves in a magnetic field, inducing eddy currents that oppose the motion. This is the most effective form of damping.

Depending on the amount of damping, the system can be underdamped (oscillatory), overdamped (sluggish), or **critically damped** (moves to the final position in the shortest time without overshoot), which is the ideal condition.

#### Equation of Motion and Final Deflection
#instrument-dynamics

The complete dynamic behavior of the moving system is described by the second-order differential equation:
$$ J\frac{d^2\theta}{dt^2} + D\frac{d\theta}{dt} + K\theta = T_d $$
where J is the moment of inertia, D is the damping coefficient, and K is the control (spring) constant.

At the final steady-state position, the pointer is at rest. Therefore, the angular velocity and acceleration are zero.
$$ \frac{d\theta}{dt} = 0 \quad \text{and} \quad \frac{d^2\theta}{dt^2} = 0 $$
The equation simplifies to the fundamental condition for measurement:
$$\boxed{\quad T_c = T_d \quad}$$

---
### Related Concepts
#topic/related-concepts

> [[Indicating Instruments]]

[[Types of Controlling Torques]]
[[Types of Damping Torques]]
[[Permanent Magnet Moving Coil (PMMC) Instruments]]
[[Moving Iron (MI) Instruments]]
[[Electrodynamometer Type Instruments]]