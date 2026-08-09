---
practice: "Practice : Single Line-to-Ground (LG) Fault Analysis"
topic question:
  - "[[Analysis of Single Line-to-Ground (LG) Fault]]"
tags:
  - lg-fault
  - faults/analysis
---
### Single Line-to-Ground (LG) Fault Analysis Practice Question

---
A **3-phase, Y-connected generator** supplies power through an ideal system.  
At the generator terminals, a **single line-to-ground (LG) fault occurs on phase A**.

Answer the following questions **step-by-step**, using physical reasoning first and then symmetrical components.

---

#### Q1. Physical reasoning (Boundary conditions)

1. Which phase is **directly connected to ground** at the fault point?
2. Which phases have a **closed current path** at the fault point?
3. Write the **boundary conditions** at the fault point in terms of phase voltages and currents.

---

#### Q2. Symmetrical components reasoning

1. Which **phase currents are zero** at the fault point?
2. Using this information, write the **relationship between sequence currents**
   $$I_0,\; I_1,\; I_2$$
3. How must the **sequence networks** be connected during an LG fault?

---

#### Q3. Calculation

The generator has the following per-unit reactances:

- Positive sequence reactance:  
  $$X_1 = 0.3 \ \text{pu}$$
- Negative sequence reactance:  
  $$X_2 = 0.2 \ \text{pu}$$
- Zero sequence reactance:  
  $$X_0 = 0.1 \ \text{pu}$$
- Neutral grounding reactance:  
  $$X_n = 0.1 \ \text{pu}$$

1. Find the **equivalent reactance** seen by the system during the LG fault.
2. Find the **LG fault current** in per-unit.

---

#### Q4. Conceptual contrast (Line-to-Line fault)

If instead a **line-to-line (A–B) fault** occurs at the generator terminals:

1. Does current flow to ground? (Yes/No)
2. How many phase conductors carry fault current?
3. Which **sequence network is absent**?

---

---

### Answers

#### A1. Physical reasoning

1. **Phase A** is directly connected to ground.
2. A closed current path exists **only for phase A**.  
   Phases B and C have no closed path at the fault.
3. Boundary conditions at the fault point:
   $$V_a = 0,\quad I_b = 0,\quad I_c = 0$$

---

#### A2. Symmetrical components reasoning

1. Zero phase currents at the fault:
   $$I_b = 0,\quad I_c = 0$$
2. From the boundary conditions:
   $$I_0 = I_1 = I_2$$
   and
   $$I_a = I_0 + I_1 + I_2 = 3I_0$$
3. Since the same current flows in all sequence networks, the **positive, negative, and zero sequence networks are connected in series**.

---

#### A3. Calculation

1. Equivalent reactance during LG fault:
   $$X_{eq} = X_1 + X_2 + X_0 + 3X_n$$
   $$X_{eq} = 0.3 + 0.2 + 0.1 + 3(0.1) = 0.9\ \text{pu}$$

2. LG fault current:
   $$I_{LG} = \frac{3}{X_{eq}} = \frac{3}{0.9} = 3.33\ \text{pu}$$

---

#### A4. Line-to-Line (LL) fault

1. Current flows to ground: **No**
2. Number of conductors carrying fault current: **2**
3. Sequence network absent: **Zero-sequence network**

---

### Key takeaway

In an LG fault, **only one phase is physically connected to ground**, which imposes boundary conditions that force  
$$I_0 = I_1 = I_2$$  
leading to **series connection of sequence networks**.
