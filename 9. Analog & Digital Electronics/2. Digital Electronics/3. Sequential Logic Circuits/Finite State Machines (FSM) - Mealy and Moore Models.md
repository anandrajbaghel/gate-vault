---
tags:
  - digital-logic
  - sequential-circuits
  - fsm
  - mealy-machine
  - moore-machine
  - digital-electronics
created: 2025-11-02
aliases:
  - FSM
  - Finite State Machine
  - Mealy Machine
  - Moore Machine
  - Finite Automata
subject: "[[Analog & Digital Electronics]]"
parent:
  - Sequential Logic Circuits
modified: 2026-08-04T09:42:13
---
### Finite State Machines (FSM) - Mealy and Moore Models
#fsm #sequential-logic #state-machine

> A **Finite State Machine (FSM)** or Finite Automaton is a mathematical model of computation used to design synchronous sequential logic circuits. It describes the behavior of a system that can be in one of a finite number of "states" at any given time. The FSM's transition to a new state and its output generation are functions of its current state and external inputs. All synchronous sequential circuits, including counters and controllers, are implementations of FSMs.

An FSM is formally defined by its states, inputs, outputs, a next-state function, and an output function. There are two primary models for FSMs, which differ in how they generate outputs: the **Moore** model and the **Mealy** model.

---
#### Moore Machine
#moore-machine

In a Moore machine, the output is a function of the **present state only**. The inputs determine the next state, but not the current output.

$$\boxed{\quad \text{Output } Z(t) = f(\text{Present State } Q(t)) \quad}$$

**Key Characteristics:**
*   **State Diagram**: The output value is written *inside* the state circle.
*   **Output Timing**: The output is synchronous with the clock. It changes only when the state changes, which occurs after an active clock edge.
*   **Hardware**: The output combinational logic is connected only to the outputs of the state flip-flops.
*   **Number of States**: A Moore machine may require more states than a Mealy machine to describe the same process because a state must fully define the output.

**Block Diagram:**
![Moore Machine Block Diagram](https://i.imgur.com/8Qe5i7W.png)

---
#### Mealy Machine
#mealy-machine

In a Mealy machine, the output is a function of **both the present state and the present inputs**.

$$\boxed{\quad \text{Output } Z(t) = g(\text{Present State } Q(t), \text{Present Input } X(t)) \quad}$$

**Key Characteristics:**
*   **State Diagram**: The output value is written on the transition arc, along with the input that causes the transition (in the format `input/output`).
*   **Output Timing**: The output can change asynchronously. If the input changes while the machine is in a stable state, the output can change immediately without waiting for the next clock edge. This can sometimes result in output glitches.
*   **Hardware**: The output combinational logic is connected to both the state flip-flops and the external inputs.
*   **Number of States**: A Mealy machine often requires fewer states than a Moore machine to implement the same functionality.

**Block Diagram:**
![Mealy Machine Block Diagram](https://i.imgur.com/R3x3fD9.png)

---
#### Comparison of Moore and Mealy Models

| Feature | Moore Machine | Mealy Machine |
| :--- | :--- | :--- |
| **Output Dependency** | Depends only on the **present state**. | Depends on the **present state** and **present inputs**. |
| **Output Timing** | Synchronous. Output changes with the state on a clock edge. | Asynchronous. Output can change if the input changes. |
| **Response to Input** | Responds to inputs in the next clock cycle (via state change). | Can respond to inputs in the current clock cycle. |
| **Number of States** | Generally requires more states ($N_{Moore} \geq N_{Mealy}$). | Generally requires fewer states. |
| **State Diagram** | Output is written inside the state. | Output is written on the transition arcs. |
| **Hardware** | Output logic depends only on flip-flops. | Output logic depends on flip-flops and inputs. |
| **Suitability** | Better for applications where outputs must be stable and glitch-free (e.g., controllers). | Better for applications requiring faster response to inputs (e.g., sequence detectors). |

---
### Related Concepts

> [[State Diagram and State Reduction]]

[[Design of Synchronous Counters]]
[[Latches and Flip-Flops (SR, JK, T, D)]]
[[Counters - Asynchronous (Ripple) and Synchronous Counters]]
[[Sequential Logic Circuits]]
[[Analog & Digital Electronics]]