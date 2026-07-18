---
tags:
  - electric-circuits
  - graph-theory
  - network-topology
  - circuit-analysis
created: 2025-07-12
aliases:
  - Network Topology
  - Circuit Graphs
  - Graph Theory in Network Analysis
  - Twigs
subject: "[[Electric Circuits]]"
parent: "[[Circuit Analysis Techniques]]"
confidence: 9
formula:
  - "Graph Theory - Nodes, Branches, Twigs (Tree branches), Links (Chords), Fundamental loops (Tie-sets), Fundamental cut-sets : $$\\begin{aligned}\\text{Nodes} &= n \\\\\\text{Branches} &= b \\\\\\text{Twigs (Tree branches)} &= n - 1 \\\\\\text{Links (Chords)} &= b - n + 1 \\\\\\text{Fundamental loops (Tie-sets)} &= b - n + 1 \\\\\\text{Fundamental cut-sets} &= n - 1\\end{aligned}$$"
---
### Graph Theory in Electric Circuits
#graph-theory #network-topology #circuit-analysis

> Network topology, or graph theory, is used to study the properties of a circuit's structure, independent of the types of elements in it. By representing a circuit as a graph, we can systematically formulate the equilibrium equations (like KCL and KVL) in a way that is ideal for complex circuits and computer-aided analysis (e.g., SPICE). It focuses purely on the interconnection of elements.

![[Circuit and it's Graph.jpg]]

#### Basic Terminology of Network Graphs
#graph-theory/definitions

* **Graph**: ==A collection of nodes (vertices) connected by branches (edges). To create a graph from a circuit, each element (R, L, C, source) is replaced by a line segment (a branch).==
* **Node (Vertex)**: ==A terminal of a branch. A point where two or more circuit elements connect.==
* **Branch (Edge)**: ==A line segment representing a single circuit element.==
* **Path**: ==A sequence of branches traversed between two nodes without passing through any single node more than once.==
* **Loop**: ==Any closed path in the graph.==
* **Oriented (Directed) Graph**: ==A graph in which each branch is assigned a direction, typically corresponding to the assumed current direction or voltage polarity.==

---
#### Trees, Co-Trees, and Fundamental Loops/Cut-sets
#tree #co-tree #links #twigs

For a connected graph with $n$ nodes and $b$ branches:

* **Tree**: ==A subgraph that connects all $n$ nodes without forming any loops. The branches of a tree are called **twigs**.==
    $$\boxed{\quad \text{Number of tree branches (twigs)} = n - 1 \quad}$$
* **Co-tree**: ==The set of all branches in the graph that are not part of the chosen tree. The branches of the co-tree are called **links** or **chords**.==
    $$\boxed{\quad \text{Number of links (chords)}, l = b - (n-1) = b - n + 1 \quad}$$
* **Fundamental Loop (Tie-Set)**: ==A loop formed by adding a single link to a tree.== The loop consists of that one link and the unique path through the tree connecting the link's two nodes. The number of fundamental loops is equal to the number of links, $l$. This forms the basis of mesh analysis.
* **Fundamental Cut-Set**: ==A cut-set is a minimal set of branches that, if removed, divides the graph into two disjoint parts. A fundamental cut-set is one that contains exactly one twig. The number of fundamental cut-sets is equal to the number of twigs, $n-1$.== This forms the basis of nodal analysis.
	![[Fundamental Circuits & Fundamental Cut Sets in Graph Theory.jpg]]

$$
\boxed{\quad
\begin{aligned}
\text{Nodes} &= n \\
\text{Branches} &= b \\
\text{Twigs (Tree branches)} &= n - 1 \\
\text{Links (Chords)} &= b - n + 1 \\
\text{Fundamental loops (Tie-sets)} &= b - n + 1 \\
\text{Fundamental cut-sets} &= n - 1
\end{aligned}
\quad}
$$

> [!pyq]-
> ![[ee_2018#^q7]]

> [!memory] Notes
> Independent loops in a network = Fundamental loops = Number of links

---
#### [[Incidence Matrix]] (A)
#incidence-matrix #kcl

The incidence matrix relates the branches of a graph to its nodes. For a graph with $n$ nodes and $b$ branches, the **complete incidence matrix** $A_a$ is an $n \times b$ matrix where the element $a_{ij}$ is defined as:
*   $a_{ij} = +1$, if branch $j$ is incident to and directed away from node $i$.
*   $a_{ij} = -1$, if branch $j$ is incident to and directed towards node $i$.
*   $a_{ij} = 0$, if branch $j$ is not incident to node $i$.

The **reduced incidence matrix** $A$ (an $(n-1) \times b$ matrix) is obtained by deleting the row corresponding to the reference node.
[[Kirchhoff's Laws#Kirchhoff's Current Law (KCL)|Kirchhoff's Current Law (KCL)]] can be expressed concisely using the reduced incidence matrix A and the vector of branch currents $I_b$:
$$\boxed{\quad A \cdot I_b = 0 \quad}$$
$$
\boxed{\quad
\begin{aligned}
\text{Independent KCL equations} &= n - 1 \\
\text{Independent KVL equations} &= b - n + 1
\end{aligned}
\quad}
$$

> [!pyq]-
> ![[ee_2016(2)#^q24]]

> [!concept] Reason
> One KCL/KVL equation is always dependent due to charge/energy conservation.

---
#### [[Tie-Set Matrix|Tie-Set (Fundamental Loop) Matrix]] (B)
#tie-set-matrix #kvl #mesh-analysis

The tie-set matrix relates branches to the fundamental loops. For a graph with $l$ fundamental loops and $b$ branches, the **tie-set matrix** $B$ is an $l \times b$ matrix where the element $b_{ij}$ is defined as:
* $b_{ij} = +1$, if branch $j$ is in loop $i$ and its orientation matches the loop orientation.
* $b_{ij} = -1$, if branch $j$ is in loop $i$ and its orientation opposes the loop orientation.
* $b_{ij} = 0$, if branch $j$ is not in loop $i$.

Kirchhoff's Voltage Law (KVL) for all fundamental loops can be expressed using the tie-set matrix B and the vector of branch voltages $V_b$:
$$\boxed{\quad B \cdot V_b = 0 \quad}$$

$$
\boxed{\quad
\begin{aligned}
\text{rank}(A) &= n - 1 \\
\text{rank}(B) &= b - n + 1 \\
\text{rank}(Q) &= n - 1
\end{aligned}
\quad}
$$
---
#### [[Cut-Set Matrix|Cut-Set Matrix]] (Q)
#cut-set-matrix #kcl #nodal-analysis

The cut-set matrix relates branches to the fundamental cut-sets. For a graph with $n-1$ fundamental cut-sets and $b$ branches, the **cut-set matrix** $Q$ is an $(n-1) \times b$ matrix where the element $q_{ij}$ is defined as:
* $q_{ij} = +1$, if branch $j$ is in cut-set $i$ and its orientation matches the cut-set orientation.
* $q_{ij} = -1$, if branch $j$ is in cut-set $i$ and its orientation opposes the cut-set orientation.
* $q_{ij} = 0$, if branch $j$ is not in cut-set $i$.

The KCL equations for all fundamental cut-sets can be expressed using the cut-set matrix Q and the vector of branch currents $I_b$:
$$\boxed{\quad Q \cdot I_b = 0 \quad}$$

$$
\boxed{\quad
B \cdot Q^{T} = 0
\quad}
$$
Tie-set and cut-set matrices are orthogonal.

---
#### Duality in Circuits
#duality #planar-graphs

Duality is a property of planar circuits. A circuit is **planar** if it can be drawn on a 2D plane without any branches crossing each other. Two planar circuits are considered duals if the mesh equations of one are mathematically identical (isomorphic) to the nodal equations of the other.

> [!important]
> Duality is valid only for **planar** networks
> 

> [!fail]
> **Non-planar** circuits do not have a valid dual network

| Original Quantity/Concept | Dual Quantity/Concept |
| :--- | :--- |
| Voltage (V) | Current (I) |
| Resistance (R) | Conductance (G) |
| Inductance (L) | Capacitance (C) |
| Impedance (Z) | Admittance (Y) |
| Series Connection | Parallel Connection |
| Loop / Mesh | Node |
| KVL | KCL |
| Short Circuit | Open Circuit |
| Thévenin's Theorem | Norton's Theorem |
| Twig | Link |
| Tie-Set Matrix (B) | Cut-Set Matrix (Q) |

---
### Related Concepts
#graph-theory/related-concepts

> [[Nodal Analysis]] (Based on KCL, systematically formulated using cut-sets)

[[Mesh Analysis]] (Based on KVL, systematically formulated using tie-sets)
[[Matrix Operations|Matrix Algebra]] (The mathematical foundation for using topology matrices)
[[State-Space Representation of LTI Systems|State-Space Analysis]] (Choosing state variables like capacitor voltages and inductor currents is aided by graph theory)
[[Circuit Analysis Techniques]]