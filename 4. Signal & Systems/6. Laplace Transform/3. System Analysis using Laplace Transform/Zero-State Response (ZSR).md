---
tags:
  - signals-and-systems
  - control-system
  - time-response
  - gate
  - state-space
created: 2026-07-23T16:54:10
aliases:
  - ZSR
  - Forced Response
subject: "[[Signals & Systems]]"
parent: "[[LTI|Linear Time-Invariant (LTI) Systems]]"
modified: 2026-07-23T16:54:10
---
### Zero-State Response (ZSR)
#signals-and-systems/time-response #control-system/state-space 

> The **Zero-State Response (ZSR)** of a system is the response (output) caused entirely by the external input applied to the system, assuming that the system is completely "relaxed" at the time of application. This means all initial energy storages (initial conditions or initial states) are **zero**. It is often referred to as the **Forced Response**.

#### 1. The Total Response Decomposition
#signals-and-systems/lti

For a Linear Time-Invariant (LTI) system, the Principle of Superposition dictates that the total response can be cleanly separated into two independent components:
1.  **[[Zero-Input Response (ZIR)]]:** Response due to initial conditions alone (Input = 0).
2.  **Zero-State Response (ZSR):** Response due to the input alone (Initial States = 0).

$$\boxed{\quad \text{Total Response } y(t) = y_{ZIR}(t) + y_{ZSR}(t) \quad}$$

---
#### 2. ZSR in LTI Systems (Time Domain)
#signals-and-systems/convolution

If an LTI system is initially relaxed (Zero-State), its output $y(t)$ to any input $u(t)$ is completely determined by its **Impulse Response $h(t)$**.
The relationship is given by the **Convolution Integral**:

$$\boxed{\quad y_{ZSR}(t) = h(t) * u(t) = \int_{-\infty}^{\infty} h(\tau) u(t-\tau) d\tau \quad}$$

*   For causal systems and inputs starting at $t=0$, the limits become $0$ to $t$.

---
#### 3. ZSR in Laplace Domain (Transfer Function)
#control-system/transfer-function 

The **Transfer Function $H(s)$** of a system is strictly defined under the assumption of zero initial conditions. Therefore, the Transfer Function perfectly characterizes the Zero-State Response.

Taking the Laplace Transform of the convolution integral yields:
$$\boxed{\quad Y_{ZSR}(s) = H(s) \cdot U(s) \quad}$$

Where:
*   $Y_{ZSR}(s)$ is the Laplace transform of the Zero-State output.
*   $U(s)$ is the Laplace transform of the input.
*   $H(s)$ is the Transfer Function (Laplace transform of $h(t)$).

> [!Note]
> Any output derived strictly using $Y(s) = H(s)U(s)$ without adding initial condition terms is, by definition, the ZSR.*

---
#### 4. ZSR in State-Space Analysis
#state-space/solution #control-system/design

In the state-space representation, $\dot{x}(t) = Ax(t) + Bu(t)$, the complete solution for the state vector $x(t)$ is derived using the State Transition Matrix $\Phi(t) = e^{At}$.

The complete solution is:
$$x(t) = \underbrace{\Phi(t) x(0)}_{\text{ZIR}} + \underbrace{\int_{0}^{t} \Phi(t - \tau) B u(\tau) d\tau}_{\text{ZSR}}$$

Therefore, the **Zero-State Response of the state vector** is the convolution integral component:
$$\boxed{\quad x_{ZSR}(t) = \int_{0}^{t} e^{A(t - \tau)} B u(\tau) d\tau \quad}$$

If we need the actual output $y(t) = Cx(t) + Du(t)$, assuming $x(0)=0$:
$$y_{ZSR}(t) = C \int_{0}^{t} e^{A(t - \tau)} B u(\tau) d\tau + D u(t)$$

---
#### 5. Distinction: ZSR vs. Steady-State Response
#signals-and-systems/definitions 

A common pitfall in GATE is confusing ZSR with Steady-State Response.
*   **Zero-State Response (ZSR)** contains *both* transient and steady-state terms caused by the input. When you apply a step input to an uncharged RC circuit, the entire charging curve ($1 - e^{-t/\tau}$) is the ZSR.
*   **Steady-State Response** is only the part of the response that persists as $t \to \infty$. In the RC example, the steady-state response is just $1$.
*   Therefore: $\text{ZSR} = \text{Transient part of Forced Response} + \text{Steady-State part of Forced Response}$.

---
### Related Concepts
#topic/related-concepts

> [[Zero-Input Response (ZIR)]] (The complementary part of the total response)

[[LTI|Linear Time-Invariant (LTI) Systems]]
[[Continuous-Time Convolution Integral|Convolution]]
[[The Transfer Function H(s)]]
[[State-Variable Analysis and Design]]
[[Transient Analysis]]
[[Natural and Forced Response]] (Different classical terminology for similar concepts)