---
tags:
  - control-systems
  - system-modeling
  - signal-flow-graph
  - sfg
  - graphical-representation
created: 2025-09-26
aliases:
  - SFG
  - Signal Flow Graphs
subject: "[[Control Systems]]"
parent:
  - Control System Modeling
modified: 2026-08-04T10:27:35
---
### Signal Flow Graph (SFG)
#control-systems/modeling #signal-flow-graph

> A **Signal Flow Graph (SFG)** is ==a graphical method for representing the relationships between variables in a set of linear algebraic equations==. It is a more concise and systematic alternative to [[Block Diagram Representation|block diagrams]], especially for complex systems, and is used to determine the overall [[Transfer Function and Impulse Response|transfer function]] of a system using [[Mason's Gain Formula]].

#### Elements of a Signal Flow Graph
#sfg/elements

1. **Node:** A circle representing a system variable or signal (e.g., $X_1(s), E(s)$).
    - **Input Node (Source):** A node with only outgoing branches. Represents an independent variable.
    - **Output Node (Sink):** A node with only incoming branches. Represents a dependent variable. *Any non-input node can be made an output node by adding an outgoing branch with a gain of 1.*
    - **Mixed Node:** A node with both incoming and outgoing branches.

2. **Branch:** A directed line segment connecting two nodes, indicating the direction of signal flow.

3. **Transmittance (Gain):** The gain associated with a branch. It is the transfer function between the variables represented by the two connected nodes. The signal is multiplied by this gain as it flows through the branch.

---
#### Key Terminology for SFG Analysis
#sfg/terminology

Understanding this terminology is essential for applying Mason's Gain Formula.

- **Path:** Any continuous sequence of connected branches traversed in the direction of the arrows.
- **Forward Path:** A path from an input node to an output node that does not pass through any node more than once. The product of the branch gains along a forward path is the **Forward Path Gain**, denoted by $P_k$.
- **Loop:** A path that starts and ends at the same node, without passing through any other node more than once. The product of the branch gains along a loop is the **Loop Gain**, denoted by $L_i$.
- **Non-touching Loops:** Two or more loops are considered non-touching if they do not share any common nodes.
- **Self-Loop:** A loop consisting of a single branch that starts and ends at the same node.

---
#### Properties and Construction Rules
#sfg/properties

- **Linearity:** SFG is applicable only to linear systems.
- **Signal Flow:** Signals travel along branches only in the direction of the arrows.
- **Node Equation:** The value of the variable at any node is the algebraic sum of the signals entering that node from all incoming branches.
- **Branch Transmission:** The signal leaving a node through an outgoing branch is the product of the node's variable and the branch's transmittance.

##### Constructing an SFG from a Block Diagram
#construction/SFG/block-diagram 

1. Represent each summing point, take-off point, input, and output as a distinct node.
2. Connect the nodes with branches that represent the signal flow in the block diagram.
3. The transfer function of each block in the diagram becomes the gain (transmittance) of the corresponding branch in the SFG.
4. A negative sign at a summing point is represented by a negative gain on the corresponding branch. For a standard negative feedback loop, the feedback branch will have a gain of $-H(s)$.

> [!Example]
> For a canonical feedback system with forward path $G(s)$ and feedback path $H(s)$:
> - Nodes: $R(s)$, $E(s)$, $C(s)$
> - Branches:
>     - $R(s)$ to $E(s)$ with gain $+1$
>     - $E(s)$ to $C(s)$ with gain $G(s)$
>     - $C(s)$ to $E(s)$ with gain $-H(s)$ (for negative feedback)
>     - Add a branch from $C(s)$ to a new output node $C_{out}(s)$ with gain $1$ to make it a proper sink.

---
### Related Concepts
#control-systems/related-concepts

> [[Mason's Gain Formula]] (The primary tool used with SFGs to find the overall transfer function)

[[Block Diagram Representation]]
[[Block Diagram Reduction Techniques]]
[[Transfer Function and Impulse Response]]
[[Mathematical Modeling of Physical Systems (Mechanical, Electrical)]]