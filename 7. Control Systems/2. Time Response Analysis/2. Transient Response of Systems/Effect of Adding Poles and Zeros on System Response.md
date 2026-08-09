---
tags:
  - control-systems
  - time-response
  - poles-zeros
  - system-dynamics
  - transient-response
created: 2025-10-02
aliases:
  - Pole-Zero Effects
  - Dominant Pole Concept
  - "Example : Dominant Pole"
subject: "[[Control Systems]]"
parent:
  - Time Response Analysis
modified: 2026-07-19
---
### Effect of Adding Poles and Zeros on System Response
#control-systems/transient-response #poles-zeros #system-dynamics

> The transient response of a system is primarily dictated by the location of the poles and zeros of its [[Transfer Function and Impulse Response|transfer function]]. While the [[Second-Order System Response|standard second-order system]] provides a foundation, most practical systems are of a higher [[Type and Order of Control Systems|order]]. We analyze these systems by considering the effect of additional poles and zeros on the response of a pair of **dominant poles**.

#### The Dominant Pole Concept
#dominant-poles

In a higher-order system, the **[[CS - Dominant Pole System.png|dominant poles]]** are the pair of poles (typically complex conjugate) that are closest to the imaginary axis in the $s$-plane. These poles have the least negative real part, meaning their corresponding transient terms decay the slowest.

- Poles located far to the left of the dominant poles (e.g., 5 times farther) have transient responses that decay much faster and their effect on the overall system response is often negligible.
- Therefore, a higher-order system can often be approximated by a second-order system if a dominant pole pair exists.

$$\frac{p_2}{p_1} \geq 5 , \quad \frac{p_3}{p_1} \geq 5 ,\dots \quad \text{apply on all poles } \frac{p_i}{p_1} \text{ where } i\ne 1$$

---
##### Example
#dominant-pole/example 

Let
$$\frac{C(s)}{R(s)} = \frac{288}{(s+2)(s+5)(s+12)(s+24)}$$
→ check
$$\frac{p_2}{p_1} \quad \& \quad \frac{p_3}{p_1} \quad \& \quad \frac{p_4}{p_1}$$
where $p_1 = 2$ , $p_2 = 5$ , $p_3 = 12$ , $p_4 = 24$

$$\frac{288}{(s+2)(s+5)(\cancel{s}+12)(\cancel{s}+24)} \to \frac{288}{(s+2)(s+5)(12)(24)} \to \frac{1}{(s+2)(s+5)}$$
![[CS - Dominant Pole Example1.png]]

---
### Effect of an Additional Pole
#pole-effects

Consider adding a pole at $s = -p$ to a [[Second-Order System Response|standard second-order system]]. The new transfer function is:
$$T(s) = \frac{\omega_n^2 p}{(s+p)(s^2 + 2\zeta\omega_n s + \omega_n^2)}$$

> [!warning]- Re-Normalization of System gain
> Adding a pole **reduces** the [[DC gain]] by a factor of **p**.
> To maintain **unity DC gain**, the numerator must be multiplied by **p**.
> Thus: $\omega_n^2 \quad \longrightarrow \quad p\omega_n^2$
> This is not because the dynamics changed the numerator
> It is simply **re-normalization of system gain**.
> Similar for introduction of zeros.
> 
> ---
> When deriving formulas, stability, peak time, settling time, etc., we want the modified system to be comparable to the original 2nd-order model. If the DC gain suddenly drops from $1$ to $1/p$, comparisons become misleading.

The general effect of adding a pole in the Left-Half Plane (LHP) is to make the system **more sluggish and damped**.

1. **Effect on Response:** The added pole introduces an additional decaying exponential term $e^{-pt}$ to the step response.
2. **Increased Rise Time ($T_r$):** The system takes longer to reach its final value.
3. **Reduced Peak Overshoot ($M_p$):** The added pole increases the effective damping of the system, which generally reduces the overshoot.
4. **Increased Settling Time ($T_s$):** Although the pole increases damping, its slow-decaying term can increase the overall time it takes to settle. The closer the pole is to the origin, the more pronounced this effect is.
5. **Instability:** Adding a pole in the **Right-Half Plane (RHP)** will introduce a term that grows exponentially ($e^{+pt}$), making the entire system **unstable**.

---
### Effect of an Additional Zero
#zero-effects

Consider adding a zero at $s = -z$ to a [[Second-Order System Response|standard second-order system]]. The new transfer function is:
$$T(s) = \frac{(s+z)\omega_n^2}{z(s^2 + 2\zeta\omega_n s + \omega_n^2)}$$
The general effect of adding a zero in the LHP is to make the system **faster and more oscillatory**. It introduces a derivative or anticipatory action.

1. **Effect on Response:** The presence of the zero can be seen as adding a scaled derivative of the original response to the response itself. $$C_{new}(s) = C_{original}(s) + \frac{s}{z}C_{original}(s)$$
2. **Decreased [[Time-Domain Specifications|Rise Time]] ($T_r$):** The derivative action makes the initial response steeper, reducing the rise time.
3. **Increased [[Time-Domain Specifications|Peak Overshoot]] ($M_p$):** This is a very significant effect. The added speed from the zero causes the system to overshoot its target more. The closer the zero is to the origin, the more pronounced the overshoot.
4. **[[Time-Domain Specifications|Settling Time]] ($T_s$):** The settling time may increase or decrease, but the increased overshoot often leads to a longer settling time.

#### The Non-Minimum Phase (RHP) Zero

A zero located in the **Right-Half Plane (RHP)**, e.g., at $s=+z$, leads to a **[[Non-Minimum Phase Systems|non-minimum phase system]]**. This is a critical concept.
- **Effect:** An RHP zero causes an **initial undershoot** or **inverse response**. The system's output initially moves in the opposite direction of the desired final value before reversing course.
- **Consequences:** This behavior is highly undesirable in many applications (e.g., controlling an aircraft's altitude) and makes the system difficult to control. It also significantly increases peak overshoot.
$$\boxed{\quad \text{RHP Zero } \implies \text{Initial Undershoot (Inverse Response)} \quad}$$

---
#### Summary of Effects (LHP Pole/Zero)

| Effect on... | Adding a Dominant LHP **Pole** | Adding a Dominant LHP **Zero** |
| :--- | :--- | :--- |
| **General Response** | More Sluggish, More Damped | Faster, More Oscillatory |
| **Rise Time ($T_r$)** | Increases | Decreases |
| **Peak Overshoot ($M_p$)**| Decreases | Increases |
| **Settling Time ($T_s$)**| Generally Increases | Generally Increases |

---
### Related Concepts
#control-systems/related-concepts

> [[Second-Order System Response]]

[[Concept and Definition of Root Locus|Root Locus]] (Graphically shows how poles move and how adding poles/zeros reshapes the locus)
[[Lead Compensator]] & [[Lag Compensator]] (Lead/Lag compensators are practical implementations of adding poles and zeros to improve performance)
[[Stability Analysis]]
[[Time-Domain Specifications]]
