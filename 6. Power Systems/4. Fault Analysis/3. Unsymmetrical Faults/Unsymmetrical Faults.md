---
tags:
  - power-system
  - fault-analysis
  - symmetrical-components
  - gate
created: 2026-07-08
aliases:
  - Asymmetrical Faults
  - LG Fault
  - LL Fault
  - LLG Fault
subject: "[[Power System]]"
parent:
  - "[[Fault Calculations|Fault Analysis]]"
modified: 2026-07-23T21:23:43
---
### Unsymmetrical Faults
#power-system/fault-analysis #symmetrical-components

> **Unsymmetrical Faults** (or Asymmetrical Faults) are short-circuit conditions that affect the three phases unequally, leading to unbalanced currents and voltages in the system. To analyze these faults, the power system is modeled using **Symmetrical Components** (Fortescue's Theorem), transforming the unbalanced system into three decoupled, balanced sequence networks (Positive, Negative, and Zero).

```mermaid
mindmap
  root((Unsymmetrical Faults))
    Analysis Method
      Symmetrical Components
      Positive Sequence Z1
      Negative Sequence Z2
      Zero Sequence Z0
    Single Line to Ground LG
      Most Frequent 70 to 80 percent
      Boundary Ia is If, Ib is 0, Ic is 0
      Network Connection Series
      I_a1 equals I_a2 equals I_a0
    Line to Line LL
      Boundary Ia is 0, Ib equals minus Ic
      Network Connection Parallel Pos and Neg
      Zero Seq Network is Open
      I_a1 equals minus I_a2
    Double Line to Ground LLG
      Boundary Ia is 0, Vb equals Vc equals 0
      Network Connection All Parallel
      V_a1 equals V_a2 equals V_a0
    Severity and Frequency
      Frequency LG max then LLG then LL then 3ph
      Severity 3ph usually max
      Exception LG can be most severe if solidly grounded
```

| Fault Type | Boundary Condition | Sequence Network Connection | Fault Current ($I_f$) |
| :--- | :--- | :--- | :--- |
| **[[Analysis of Single Line-to-Ground (LG) Fault\|LG]]** | $I_b = I_c = 0$, $V_a = 0$ | $Z_1, Z_2, Z_0$ in **Series** | $I_f = 3I_{a1}$ |
| **[[Analysis of Line-to-Line (LL) Fault\|LL]]** | $I_a = 0$, $I_b = -I_c$, $V_b = V_c$ | $Z_1, Z_2$ in **Series** ($Z_0$ open) | $I_f = \sqrt{3}I_{a1}$ |
| **[[Analysis of Double Line-to-Ground (LLG) Fault\|LLG]]** | $I_a = 0$, $V_b = V_c = 0$ | $Z_1, Z_2, Z_0$ in **Parallel** | $I_f = 3I_{a0}$ |

---
#### 1. Single Line-to-Ground (LG) Fault
#fault-analysis/lg-fault
This is the most common type of fault (70%-80% of occurrences), often caused by lightning or falling trees.

![[Analysis of Single Line-to-Ground (LG) Fault#Fault Current Calculation]]

---
#### 2. Line-to-Line (LL) Fault
#fault-analysis/ll-fault
A short circuit between two phases.

![[Analysis of Line-to-Line (LL) Fault#Fault Current Calculation]]

---
#### 3. Double Line-to-Ground (LLG) Fault
#fault-analysis/llg-fault
A short circuit between two phases and the ground.

![[Analysis of Double Line-to-Ground (LLG) Fault#Fault Current Calculation]]

---
#### Frequency and Severity Comparison (GATE High-Yield)
#gate/comparison

1.  **Frequency of Occurrence:**
    **LG Fault** ($70\%-80\%$) > **LLG Fault** ($10\%$) > **LL Fault** ($5\%$) > **3-Phase Symmetrical Fault** ($2\%-3\%$).
2.  **Severity (Magnitude of Fault Current):**
    * Generally, the 3-Phase fault is the most severe (used for sizing Circuit Breakers).
    * **Typical Order:** **3-Phase > LLG > LL > LG**.
    
    ![[Analysis of Single Line-to-Ground (LG) Fault#^exam-trap-severity]]

---
### Related Concepts
#topic/related-concepts

> [[Concept of Symmetrical Components]]

[[Analysis of Symmetrical Faults]]
[[Sequence Impedances and Networks of Transformers]]
[[Sequence Impedances and Networks of Synchronous Machines]]
[[Sequence Impedances and Networks of Transmission Lines]]
[[Neutral Grounding]]
[[Parallel Sources in Fault Analysis]]