---
tags:
  - signal-processing
  - signals-and-systems
  - system-properties
  - memoryless-systems
  - dynamic-systems
  - gate-ee
created: 2025-09-24
aliases:
  - Memoryless Systems
  - Static Systems
  - Systems with Memory
  - Dynamic Systems
  - "Example : Memoryless Systems"
subject: "[[Signals & Systems]]"
parent:
  - System Properties
modified: 2026-07-23T16:34:58
---
### Memory and Memoryless Systems
#memoryless-systems #systems-with-memory #static-systems #dynamic-systems

> This classification is based on whether a system's output at a given time depends *only* on the input at that same instant, or if it also depends on past or future inputs. This property is fundamental to understanding if a system is static or dynamic.

---
#### Memoryless (Static) Systems
#memoryless-systems #static-systems

A system is **memoryless** or **static** if its output at any given time depends only on the input at that same instant. The system does not need to store any past information to compute the current output.

-   **Formal Definition**:
    -   **CT**: The output $y(t_0)$ depends only on the input $x(t_0)$.
    -   **DT**: The output $y[n_0]$ depends only on the input $x[n_0]$.

-   **Physical Implication**: Memoryless systems typically do not have energy storage elements (like capacitors or inductors). Their behavior is governed by algebraic equations rather than differential or difference equations.

##### Examples of Memoryless Systems
1.  **Ideal Resistor**: The voltage-current relationship is $v(t) = R \cdot i(t)$. The voltage at any time $t$ is directly proportional to the current at that exact instant.
2.  **Ideal Amplifier**: $y(t) = K \cdot x(t)$.
3.  **Squaring Device**: $y[n] = (x[n])^2$. The output at index $n$ depends only on the input at index $n$.

---
#### Systems with Memory (Dynamic)
#systems-with-memory #dynamic-systems

A system has **memory** if its output at a given time depends on input values from the past or the future. These systems are also called **dynamic systems**.

-   **Formal Definition**: The output $y(t)$ depends on $x(\tau)$ for $\tau \neq t$.

-   **Physical Implication**: These systems require a mechanism to store past information, referred to as the system's **state**. In electrical circuits, this is accomplished by energy storage elements like capacitors and inductors. The behavior of such systems is described by differential (for CT) or difference (for DT) equations.

##### Examples of Systems with Memory
1.  **Integrator**:
    $$ y(t) = \int_{-\infty}^{t} x(\tau) d\tau $$
    The output at time $t$ is the accumulated sum of all past values of the input, clearly requiring memory of the entire input history.
2.  **Delay System**:
    $$ y[n] = x[n-1] $$
    The output at index $n$ depends on the input at the previous index, $n-1$. The system must store the previous input value.
3.  **Capacitor**: The voltage across a capacitor is given by $v(t) = \frac{1}{C}\int_{-\infty}^{t} i(\tau) d\tau$. The voltage depends on the entire history of the current that has flowed through it.
4.  **Moving Average System**:
    $$ y[n] = \frac{1}{2}(x[n] + x[n-1]) $$
    The output depends on the present and one past input sample.

---
### Related Concepts
#memory-systems/related-concepts

> [[System Definition and Classification]] (The parent topic)

[[Causality]] (Causality is a related but distinct property; a memoryless system is always causal, but a system with memory can be causal or non-causal)
[[Linear Constant-Coefficient Differential Equations (CT)|Differential Equations]] and [[Linear Constant-Coefficient Difference Equations (DT)|Difference Equations]] (These are the mathematical models for dynamic systems with memory)
[[LTI|LTI Systems]]