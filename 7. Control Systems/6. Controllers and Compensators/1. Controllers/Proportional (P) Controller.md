---
tags:
  - control-systems
  - controllers
  - feedback-control
  - p-controller
created: 2025-09-21
aliases:
  - P Controller
  - Proportional Control
  - "Type-0 System Error : Residual Error (Offset)"
  - proportional controller
  - proportional gain
subject: "[[Control Systems]]"
parent:
  - Controllers
modified: 2026-08-04T10:18:51
---
### Proportional (P) Controller
#control-systems/controller #p-controller

> A **Proportional (P) Controller** is a type of linear feedback control where the control action (output) is directly proportional to the current error signal $e(t)$. The error signal is the difference between the desired setpoint $(R)$ and the measured process variable $(Y)$. It is the simplest form of a continuous controller.

#### Mathematical Representation
#p-controller/model

The relationship between the controller output $u(t)$ and the error signal $e(t)$ is given by:
$$ \boxed{\quad u(t) = K_p \cdot e(t) \quad} $$
where $K_p$ is the **proportional gain**, a tunable parameter.

Taking the [[The Laplace Transform|Laplace Transform]], the transfer function of the P controller is:
$$ \boxed{\quad C(s) = \frac{U(s)}{E(s)} = K_p \quad} $$
This shows that the P controller is simply a pure gain block.

---
#### Effects of Proportional Controller
#p-controller/effects

The primary role of the proportional gain $K_p$ is to adjust the system's overall loop gain. Increasing $K_p$ has several significant effects:

##### 1. Effect on System Type and Steady-State Error
#steady-state-error #system-type

* **System Type**: A P controller does not add any poles or zeros at the origin. Therefore, it **does not change the type of the system**. A Type-0 system remains Type-0, Type-1 remains Type-1, etc.
* **[[Steady-State Error]] ($E_{ss}$)**: For a unity feedback system, the steady-state error is given by $E_{ss} = \lim_{s \to 0} \frac{sR(s)}{1+C(s)G(s)}$. With $C(s) = K_p$:
    
    $$ E_{ss} = \lim_{s \to 0} \frac{sR(s)}{1+K_p G(s)} $$
    
    For a Type-0 system with a unit step input ($R(s)=1/s$), the position error constant is $K_{pos} = \lim_{s \to 0} K_p G(s) = K_p \cdot K_{dc}$ (where $K_{dc}=G(0)$).
    
    $$\boxed{\quad E_{ss} = \frac{1}{1+K_{pos}} = \frac{1}{1+K_p G(0)} \quad}$$
    
    Increasing $K_p$ increases the position error constant $K_{pos}$, which in turn **reduces the steady-state error**. However, for a Type-0 system, it can never be made zero, resulting in a residual error known as **offset**.

##### 2. Effect on Transient Response
#transient-response

Increasing the proportional gain $K_p$ generally makes the system respond faster but at the cost of increased oscillations. Consider a standard second-order system with closed-loop transfer function:
$$ T(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2} $$
If a P controller is used with a plant like $G(s) = \frac{K}{s(s+a)}$, the new closed-loop transfer function becomes:
$$ T(s) = \frac{K_p K}{s^2 + a s + K_p K} $$
Comparing coefficients, we see that the new natural frequency is $\omega_{n,new} = \sqrt{K_p K}$ and the new damping ratio is $\zeta_{new} = \frac{a}{2\sqrt{K_p K}}$.

* **[[Time-Domain Specifications|Rise Time]] ($t_r$)**: As $K_p \uparrow$, $\omega_{n,new} \uparrow$, which generally leads to a **decrease in rise time** (faster response).
* **[[Time-Domain Specifications|Peak Overshoot]] ($M_p$)**: As $K_p \uparrow$, $\zeta_{new} \downarrow$. Since $M_p = e^{-\pi\zeta / \sqrt{1-\zeta^2}}$, a lower damping ratio results in a **higher peak overshoot**.
* **[[Time-Domain Specifications|Settling Time]] ($t_s$)**: The effect is not straightforward. $t_s \approx \frac{4}{\zeta\omega_n} = \frac{8}{a}$. In this specific example, it is independent of $K_p$. However, in general, the settling time may increase or decrease.

##### 3. Effect on Stability
#stability-analysis

* **[[Concept and Definition of Root Locus|Root Locus]] Perspective**: Increasing $K_p$ from 0 to $\infty$ moves the closed-loop poles along the root locus. This often pushes the poles towards the imaginary axis or into the right-half plane, thus **decreasing the relative stability** and potentially making the system unstable for high gains.
* **Frequency Response Perspective**: The controller $C(j\omega) = K_p$ adds a constant gain of $20 \log(K_p)$ dB to the magnitude plot and a $0^\circ$ phase shift. Increasing $K_p$ shifts the entire magnitude plot upwards. This causes the gain crossover frequency to increase, which typically **reduces both the [[Gain Margin (GM)]] and [[Phase Margin (PM)]]**, thus reducing relative stability.

---
#### Summary of Effects (Increasing $K_p$)

| Parameter                  | Effect of Increasing $K_p$      | Reason                                             |
| -------------------------- | ------------------------------- | -------------------------------------------------- |
| System Type                | No Change                       | No poles/zeros added at the origin.                |
| Steady-State Error ($E_{ss}$) | Decreases (but not eliminated)  | Error constant ($K_{pos}$, $K_v$) increases.       |
| Rise Time ($t_r$)          | Decreases                       | System becomes faster ($\omega_n$ increases).      |
| Peak Overshoot ($M_p$)     | Increases                       | Damping ratio ($\zeta$) decreases.                 |
| Settling Time ($t_s$)      | May increase or decrease        | Depends on the pole movement.                      |
| Relative Stability         | Decreases                       | Gain and Phase Margins are reduced.                |
| Bandwidth                  | Increases                       | System responds to a wider range of frequencies.   |
| Noise                      | Amplifies high-frequency noise  | Due to higher gain and increased bandwidth.        |

---
#### Advantages and Disadvantages
#p-controller/pros-cons #pros-cons/p-controller

##### Advantages

1. **Simplicity**: It is the simplest controller to design and implement.
2. **Fast Response**: Increases the speed of the response by reducing the rise time.
3. **Error Reduction**: Reduces steady-state error.

##### Disadvantage

1. **Offset**: Cannot eliminate the steady-state error completely for systems that require it (e.g., Type-0 with step input).
2. **Instability**: High proportional gain can lead to large [[Time-Domain Specifications|overshoots]] and make the system unstable.
3. **Noise Amplification**: A high gain will amplify any noise present in the error signal.

---
### Related Concepts
#related-concepts

> [[Proportional-Integral (PI) Controller]] (Adds an integrator to eliminate steady-state error)

[[Proportional-Derivative (PD) Controller]] (Adds a derivative term to improve damping and reduce overshoot)
[[Proportional-Integral-Derivative (PID) Controller]] (Combines all three actions)
[[Steady-State Error]]
[[Transient Response of Systems]]
[[Concept and Definition of Root Locus|Root Locus]]
[[Bode Plots]]
