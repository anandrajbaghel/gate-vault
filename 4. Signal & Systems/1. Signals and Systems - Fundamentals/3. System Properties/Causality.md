---
tags:
  - signal-processing
  - signals-and-systems
  - system-properties
  - causality
  - causal-systems
  - gate-ee
created: 2025-09-24
aliases:
  - Causal Systems
  - Non-causal Systems
  - Physical Realizability
subject: "[[Signals & Systems]]"
parent:
  - System Properties
modified: 2026-07-23T16:34:37
---
### Causality
#causality #causal-systems #non-causal-systems #physical-realizability

> **Causality** is a system property that reflects the real-world constraint that an effect cannot occur before its cause. ==In the context of [[Signals & Systems|signals and systems]], this means that the output of a **causal system** at any given time can only depend on the present and past values of the input.== It cannot depend on future input values. This property is a prerequisite for a system to be physically realizable in real-time.

#### Causal Systems
#causal-systems

A system is **causal** if its output at any time $t_0$ depends only on the input $x(t)$ for $t \le t_0$. The system does not "anticipate" or "see into" the future.

- **Intuition**: All physical systems that operate in real time are causal. An electrical circuit, for instance, cannot produce a voltage response to a current that has not yet been applied.
- **Example**: $y(t) = x(t) + x(t-2)$. The output at time $t$ depends on the current input and an input from 2 seconds in the past. This is causal.
- A **memoryless system** is always causal, as its output depends only on the present input.

##### Causality Condition for LTI Systems
#causality/conditions/lti-system

For [[LTI|Linear Time-Invariant (LTI) systems]], there is a precise and crucial condition for causality based on the system's [[Impulse Response of an LTI System|impulse response]], $h(t)$ or $h[n]$. Since the impulse occurs at $t=0$, the system's response to it cannot begin before the impulse has occurred.

-   **Continuous-Time (CT)**: A CT LTI system is causal if and only if its impulse response is zero for all negative time.
    $$\boxed{\quad h(t) = 0 \quad \text{for } t < 0 \quad}$$

> [!pyq]- PYQ : GATE EE 2019
> ![[ee_2019#^q7]]

-   **Discrete-Time (DT)**: A DT LTI system is causal if and only if its impulse response is zero for all negative indices.
    $$\boxed{\quad h[n] = 0 \quad \text{for } n < 0 \quad}$$
A signal that is zero for negative time is often called a **causal signal**. Thus, an LTI system is causal if its impulse response is a causal signal.

> [!pyq]- PYQ : 2023
> ![[ee_2023#^q27]]

---
#### Non-Causal Systems
#non-causal-systems

A system is **non-causal** if its output at any time depends on future values of the input.

-   **Realizability**: Non-causal systems are not physically realizable for real-time processing.
-   **Applications**: They are commonly used in applications where the entire signal is recorded and available for processing (i.e., "offline" processing).
    -   **Image Processing**: A filter might need to know the values of pixels on all sides of the current pixel, which involves "future" data in the spatial dimension.
    -   **Data Analysis**: Calculating a centered moving average of economic data requires knowing data points both before and after the current point in time.
-   **Example**: $y[n] = \frac{1}{3}(x[n-1] + x[n] + x[n+1])$. To compute the output at time $n$, the system must know the input at time $n+1$, which is in the future.

---
### Related Concepts
#causality/related-concepts

> [[System Definition and Classification]]

[[Impulse Response of an LTI System]]
[[Causality of LTI Systems in terms of Impulse Response]]
[[Memory and Memoryless Systems]]
[[Region of Convergence (ROC)]] (The ROC of a system's transfer function is directly tied to its causality and stability)