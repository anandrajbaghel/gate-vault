---
tags:
  - signal-processing
  - signals-and-systems
  - standard-signals
  - impulse-function
  - step-function
  - gate-ee
created: 2025-09-23
aliases:
  - Delta Function
  - Dirac Delta
  - Heaviside Function
  - Unit Step
  - Properties of the Unit Impulse
  - Relationship Between Unit Step and Unit Impulse
  - The Unit Step Function
  - The Unit Impulse Function
  - Dirac delta function
  - "Properties : Unit Impulse"
  - Sifting Property of Unit Impulse Function
subject: "[[Signals & Systems]]"
parent:
  - Standard Signals
modified: 2026-07-23T16:33:52
---
### Continuous-Time Unit Impulse and Unit Step Functions
#unit-step #unit-impulse #dirac-delta #standard-signals

> The **unit step function** $u(t)$ and the **unit impulse function** $\delta(t)$ are two of the most important signals in engineering. They are idealized mathematical functions that serve as fundamental building blocks for constructing more complex signals and are essential for characterizing the behavior of [[LTI|Linear Time-Invariant (LTI) systems]].

#### The Unit Step Function, $u(t)$
#heaviside-function #unit-step

The unit step function, also known as the Heaviside function, is used to represent a signal that switches "on" at $t=0$ and stays on forever.

-   **Definition**:
    $$ u(t) = \begin{cases} 1, & t > 0 \\ 0, & t < 0 \end{cases} $$
    The value at $t=0$ is undefined, but it is often assigned a value of $0.5$ or $1$ depending on the convention. For most signals and systems problems, the value at this single point of discontinuity does not affect the outcome of integrations.

-   **Application**: It acts as a switch. Multiplying any signal $x(t)$ by $u(t)$ makes the resulting signal zero for $t<0$. This is a common way to represent **causal signals** (signals that are zero for negative time).
    -   Example: The signal $x(t) = e^{-at}u(t)$ is a decaying exponential that starts at $t=0$.

> [!warning] Laplace Transform of Unit Step Function, $u(t)$
> Laplace Transform of Unit Step Function is $$\boxed{\quad \frac{1}{s}\quad}$$

---
#### The Unit Impulse Function, $\delta(t)$
#dirac-delta #impulse-function

The unit impulse, or Dirac delta function, is a "generalized function" used to model a phenomenon that is an infinitely strong, infinitesimally brief pulse at a single point in time.

-   **Conceptual Definition**: It is a signal that is zero everywhere except at $t=0$, where it is infinitely high, but it is defined in such a way that its total area is exactly 1.
-   **Mathematical Definition**: It is defined by its effect under integration:
    $$ \delta(t) = 0 \quad \text{for } t \neq 0 $$
    $$ \int_{-\infty}^{\infty} \delta(t) dt = 1 $$

> [!warning] Laplace Transform of Unit Impulse Function, $\delta(t)$
> Laplace Transform of Unit Step Function is $$\boxed{\quad 1 \quad}$$

##### Properties of the Unit Impulse
#impulse-function/properties 

1.  **Sifting Property**: This is the most important property. The impulse function "sifts out" the value of another function at the point of the impulse.
    $$\boxed{\quad \int_{-\infty}^{\infty} x(t) \delta(t-t_0) dt = x(t_0) \quad}$$
    This property holds if $x(t)$ is continuous at $t=t_0$.

2.  **Multiplication Property**: Multiplying a continuous function $x(t)$ by a shifted impulse $\delta(t-t_0)$ scales the impulse by the value of the function at $t=t_0$.
    $$\boxed{\quad x(t)\delta(t-t_0) = x(t_0)\delta(t-t_0) \quad}$$

3.  **Scaling Property**: Scaling the time axis compresses the impulse and increases its height, keeping the area constant.
    $$\boxed{\quad \delta(at) = \frac{1}{|a|} \delta(t) \quad \text{for } a \neq 0 \quad}$$

---
#### Relationship Between Unit Step and Unit Impulse
#impulse-step-relationship

The step and impulse functions are fundamentally related through calculus.

-   The unit impulse is the derivative of the unit step function.
    $$\boxed{\quad \delta(t) = \frac{d}{dt} u(t) \quad}$$
    Conceptually, the derivative is zero for $t<0$ and $t>0$. At $t=0$, the step function has an infinitely steep slope (a vertical jump), which is represented by the impulse.

-   The unit step is the running (cumulative) integral of the unit impulse function.
    $$\boxed{\quad u(t) = \int_{-\infty}^{t} \delta(\tau) d\tau \quad}$$
    Conceptually, the integral of the impulse is zero for $t<0$. As soon as we integrate past the impulse at $\tau=0$, the total area "accumulated" becomes 1 and stays 1 for all subsequent time.

---
### Related Concepts
#unit-signals/related-concepts

> [[Impulse Response of an LTI System]] (The response of a system to a $\delta(t)$ input, which completely characterizes the system)

[[Representation of a CT signal by its Samples|Impulse Train Sampling]] (The impulse train models the ideal sampling process)
[[Fourier Transforms]] (The FT of $\delta(t)$ is 1, and the FT of $u(t)$ is $\frac{1}{i\omega} + \pi\delta(\omega)$)
[[The Laplace Transform]] (The LT of $\delta(t)$ is 1, and the LT of $u(t)$ is $1/s$)
[[Discrete-Time Unit Impulse and Unit Step Sequences]] (The discrete-time counterparts)
[[Exponential and Sinusoidal Signals]]
