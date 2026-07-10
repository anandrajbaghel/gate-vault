---
tags:
  - calculus
  - differential-equations
  - ode
  - linear-ode
  - rlc-circuits
  - engineering-math
created: 2025-09-15
aliases:
  - Homogeneous ODEs with Constant Coefficients
  - LHOCC
  - Natural Response
subject: "[[Mathematics]]"
parent: "[[Second-Order Linear ODEs]]"
confidence: 10
---
### Linear Homogeneous ODEs with Constant Coefficients
#linear-ode #characteristic-equation #natural-response

> A **linear homogeneous ordinary differential equation with constant coefficients** is a foundational type of ODE in engineering. It describes the **natural response** of a system—its behavior in the absence of any external input or forcing function. The solution method involves converting the differential equation into a simple algebraic polynomial called the **characteristic equation**, whose roots directly determine the form of the solution. This is the basis for analyzing the transient response of RLC circuits and determining the stability of control systems.

#### The Characteristic (Auxiliary) Equation
#characteristic-equation

Consider a second-order linear homogeneous ODE with constant coefficients $a, b, c$:
$$ a\frac{d^2y}{dx^2} + b\frac{dy}{dx} + cy = 0 $$
To solve this, we assume a solution of the form $y = e^{mx}$. Substituting this into the ODE yields:
$$ a(m^2e^{mx}) + b(me^{mx}) + c(e^{mx}) = 0 $$
$$ e^{mx}(am^2 + bm + c) = 0 $$
Since $e^{mx}$ is never zero, the expression in the parenthesis must be zero. This gives us the **characteristic (or auxiliary) equation**:
$$\boxed{\quad am^2 + bm + c = 0 \quad}$$
Solving the ODE is now reduced to finding the roots of this simple quadratic equation.

---
#### General Solution based on the Roots
The form of the general solution depends entirely on the nature of the roots ($m_1, m_2$) of the characteristic equation, which are determined by the discriminant $\Delta = b^2 - 4ac$.

##### Case 1: Real and Distinct Roots ($\Delta > 0$)
The roots $m_1$ and $m_2$ are real and unequal. The general solution is a linear combination of two real exponential terms.
$$\boxed{\quad y(x) = c_1e^{m_1x} + c_2e^{m_2x} \quad}$$
*   **Physical Interpretation**: Represents an **overdamped** system (e.g., in an RLC circuit) that returns to equilibrium slowly without oscillation.

##### Case 2: Real and Repeated Roots ($\Delta = 0$)
The roots are real and equal, $m_1 = m_2 = m = -b/2a$. To obtain two linearly independent solutions, the second solution is multiplied by $x$.
$$\boxed{\quad y(x) = (c_1 + c_2x)e^{mx} \quad}$$
*   **Physical Interpretation**: Represents a **critically damped** system, which returns to equilibrium in the fastest possible time without any oscillation.

##### Case 3: Complex Conjugate Roots ($\Delta < 0$)
The roots are a complex conjugate pair, $m_{1,2} = \alpha \pm j\beta$, where $\alpha = -b/2a$ and $\beta = \frac{\sqrt{4ac-b^2}}{2a}$.
Using Euler's identity, the complex exponential solution is transformed into a real solution involving sinusoids.
$$\boxed{\quad y(x) = e^{\alpha x}(c_1\cos(\beta x) + c_2\sin(\beta x)) \quad}$$
*   **Physical Interpretation**: Represents an **underdamped** system. The response is an oscillation with frequency $\beta$ whose amplitude decays exponentially according to the term $e^{\alpha x}$.

---
#### Applications in Electrical Engineering
#rlc-circuits #control-systems #poles

*   **RLC Circuits**: The source-free KVL equation for a series RLC circuit is $L\frac{d^2i}{dt^2} + R\frac{di}{dt} + \frac{1}{C}i = 0$. This is a direct application, where the characteristic equation determines whether the circuit's natural response is overdamped, critically damped, or underdamped.
*   **Control Systems**: The roots of the characteristic equation of a system's differential equation are the **poles** of its transfer function. The location of these poles in the complex plane determines the stability and transient response of the system.

---
### Related Concepts
#calculus/related-concepts

> [[Second-Order Linear ODEs]]

[[Linear Non-Homogeneous ODEs]]
[[RLC Circuits]]
[[Poles and Zeros of a Transfer Function|Poles and Zeros]]
[[Linear Independence and Dependence of Vectors|Linear Independence]]