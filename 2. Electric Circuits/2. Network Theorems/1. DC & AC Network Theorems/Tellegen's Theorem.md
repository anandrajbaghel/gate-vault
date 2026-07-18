---
tags:
  - electric-circuits
  - network-theorems
  - power-conservation
  - circuit-analysis
created: 2025-07-26
aliases:
  - Tellegen's Principle
  - Tellegen's Theorem
subject: "[[Electric Circuits]]"
parent: "[[Network Theorems]]"
confidence: 9
---

```mermaid
mindmap
  root((Tellegen's Theorem))
    Core Principle
      Conservation of Power
      Based fundamentally on KCL & KVL
      Sum of instantaneous power in all branches is zero
    Statement
      For any lumped network
      Σ vₖ(t) iₖ(t) = 0
    Key Characteristics
      Topological Theorem
        (Depends on the graph/structure, not elements)
      Universal Applicability
        Linear & Non-linear
        Passive & Active
        Time-variant & Time-invariant
    Generalized Form
      For two networks (1 & 2) with the same topology
      Σ vₖ₁(t) iₖ₂(t) = 0
      Σ vₖ₂(t) iₖ₁(t) = 0
      (Voltages from one, currents from the other)
    Frequency Domain
      Conservation of Complex Power
      Σ Vₖ Iₖ* = 0
      Implies ΣP = 0 and ΣQ = 0
    Applications
      Theoretical Proofs (e.g., reciprocity)
      Sensitivity Analysis
      Adjoint Network Method
      Proving other network theorems
```

---
### Tellegen's Theorem
#tellegens-theorem #network-theorem #power-conservation #kirchhoffs-laws

> **Tellegen's Theorem** is one of the most general and powerful theorems in circuit theory. It states that for any lumped electrical network, the sum of the instantaneous powers delivered to all branches is identically zero at any instant of time. The theorem is a direct consequence of Kirchhoff's Current Law (KCL) and Kirchhoff's Voltage Law (KVL) and is independent of the nature of the circuit elements.

This theorem is essentially a restatement of the principle of conservation of energy for electrical networks.

#### Statement of the Theorem
#tellegens-theorem/statement

For any lumped network with `b` branches, if the branch voltages $v_k(t)$ and branch currents $i_k(t)$ are defined according to the passive sign convention (current enters the positive voltage terminal), then Tellegen's Theorem states:
$$\boxed{\quad \sum_{k=1}^{b} v_k(t) \cdot i_k(t) = 0 \quad}$$
This means that the total power delivered to the network elements is equal to the total power absorbed by them at every instant.
$$\sum P_{\text{absorbed by passive elements}} = \sum P_{\text{supplied by sources}}$$

#### Key Characteristics and Uniqueness
#tellegens-theorem/properties

The remarkable aspect of Tellegen's theorem is its universality. Its validity depends **only on the network's topology** (the way components are interconnected) and the fact that the voltages satisfy KVL and the currents satisfy KCL. It does **not** depend on the type of circuit elements.
Therefore, the theorem holds for any network, whether it is:
*   **Linear** or **Non-linear** (e.g., contains diodes, transistors).
*   **Passive** or **Active** (e.g., contains dependent sources).
*   **Time-variant** or **Time-invariant**.

#### Generalized Form of Tellegen's Theorem
#tellegens-theorem/generalized

The most powerful form of the theorem applies to two different networks, N1 and N2, that share the **exact same topology** (graph).
Let $\{v_{k1}, i_{k1}\}$ be the branch voltages and currents in Network N1.
Let $\{v_{k2}, i_{k2}\}$ be the branch voltages and currents in Network N2.
Since both sets of voltages and currents satisfy KVL and KCL on the same graph, the theorem states:
$$\boxed{\quad \sum_{k=1}^{b} v_{k1}(t) i_{k2}(t) = 0 \quad \text{and} \quad \sum_{k=1}^{b} v_{k2}(t) i_{k1}(t) = 0 \quad}$$
This result is non-intuitive: it shows a valid relationship between the voltages of one circuit and the currents of a completely different circuit, provided they have the same layout. This form is instrumental in theoretical proofs and sensitivity analysis.

#### Frequency Domain and Complex Power
#complex-power #ac-analysis

For AC circuits operating in sinusoidal steady-state, Tellegen's theorem can be expressed in terms of phasors. It demonstrates the conservation of complex power.
$$\boxed{\quad \sum_{k=1}^{b} V_k I_k^* = 0 \quad}$$

> [!warning]- Derivation: Why complex conjugate appears in $VI^*$
> Instantaneous power is
> $$p(t)=v(t)i(t)$$
> Let
> $$v(t)=V_m\cos(\omega t+\theta_v), \quad i(t)=I_m\cos(\omega t+\theta_i)$$
> Using $\cos A\cos B=\tfrac12[\cos(A-B)+\cos(A+B)]$,
> $$p(t)=\frac{V_m I_m}{2}\Big[\cos(\theta_v-\theta_i)+\cos(2\omega t+\theta_v+\theta_i)\Big]$$
> Averaging over one cycle eliminates the $2\omega t$ term:
> 
> ![[Pasted image 20251231112453.png]]
> $$P=\frac{V_m I_m}{2}\cos(\theta_v-\theta_i)$$
> RMS phasors:
> $$V=\frac{V_m}{\sqrt2}e^{j\theta_v}, \quad I=\frac{I_m}{\sqrt2}e^{j\theta_i}$$
> Then
> $$VI^*=\frac{V_m I_m}{2}e^{j(\theta_v-\theta_i)}$$
> Taking real part,
> $$P=\Re\{VI^*\}$$
> Hence, the complex conjugate is required so that the real part of $VI^*$ equals true average (active) power.

where $V_k$ is the phasor voltage and $I_k^*$ is the complex conjugate of the phasor current for branch `k`.

Since the sum of complex powers is zero, the real and imaginary parts must be zero independently:
*   **Conservation of Average Power**: $\text{Re} \left( \sum_{k=1}^{b} V_k I_k^* \right) = \sum_{k=1}^{b} P_k = 0$
*   **Conservation of Reactive Power**: $\text{Im} \left( \sum_{k=1}^{b} V_k I_k^* \right) = \sum_{k=1}^{b} Q_k = 0$

---
### Related Concepts
#tellegens-theorem/related-concepts

> [[Kirchhoff's Laws]] (The theorem is a direct mathematical consequence of KCL and KVL)

[[Conservation of Energy]] (The physical principle that the theorem represents in a network context)
[[Graph Theory in Circuits]] (The theorem is fundamentally topological)
[[Network Theorems]] (Parent category)
[[AC Power Analysis]] (For the application of the theorem to complex power)