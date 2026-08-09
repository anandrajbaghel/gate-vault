---
subject:
  - "[[Control Systems]]"
tags:
  - cs
---
**Q.** Standard form for the transfer function of a second-order system is?
?
$$\boxed{\quad T(s) = \frac{C(s)}{R(s)} = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2} \quad}$$
- **$\omega_n$ (Natural Frequency):** The frequency of oscillation of the system if the damping were zero ($\zeta=0$).
- **$\zeta$ (Damping Ratio):** A dimensionless quantity that describes the level of damping in the system. It dictates the nature of the transient response.

#control-systems / [[Second-Order System Response]]

---
**Q.** The stability and response characteristics of a second-order system are determined by?
?
Roots of the **characteristic equation** $$\boxed{\quad s^2 + 2\zeta\omega_n s + \omega_n^2 = 0\quad}$$
Location of poles of the system is located at $$s_{1,2} = -\zeta\omega_n \pm \omega_n\sqrt{\zeta^2 - 1}$$
#control-systems / [[Second-Order System Response]]

---
**Q.** The nature of the second-order system's response is entirely determined by what parameter?
?
Damping Ratio $(\zeta)$

#control-systems / [[Second-Order System Response]]

---
**Q.** For an Undamped System, Damping Ratio $(\zeta)$ is equal to?
?
$$\boxed{\quad\zeta = 0 \quad}$$
- Poles: Purely imaginary ($s = \pm j\omega_n$).
- Response: Sustained oscillations with frequency $\omega_n$. The system is marginally stable.

#control-systems / [[Second-Order System Response]]

---
**Q.** For an Underdamped System, Damping Ratio $(\zeta)$ is equal to?
?
$$\boxed{\quad0 < \zeta < 1 \quad}$$
- Poles: Complex conjugates with negative real parts ($s = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2}$).
- Response: The response oscillates but the amplitude decays exponentially. It overshoots the final value. This is the most common and important case in control system design.

#control-systems / [[Second-Order System Response]]

---
**Q.** For a Critically Damped System, Damping Ratio $(\zeta)$ is equal to?
?
$$\boxed{\quad\zeta=1 \quad}$$
- Poles: Real, equal, and negative ($s_{1,2} = -\omega_n$).
- Response: The fastest possible response that does not exhibit any overshoot.

#control-systems / [[Second-Order System Response]]

---
**Q.** For an Overdamped System, Damping Ratio $(\zeta)$ is equal to?
?
$$\boxed{\quad\zeta > 1 \quad}$$
- Poles: Real, distinct, and negative.
- Response: A slow, sluggish exponential response with no overshoot. It behaves like two first-order systems in cascade.

#control-systems / [[Second-Order System Response]]

---
