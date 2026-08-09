---
practice: "Practice : Three-Phase (3ϕ) Fault Analysis"
topic question:
  - "[[Analysis of Symmetrical Faults]]"
tags:
  - lll-faults
  - three-phase/faults
---
### Three-Phase (3ϕ) Fault Analysis Practice Question

---

A **3-phase, Y-connected generator** rated at **20 kV, 100 MVA, 50 Hz** supplies power through an ideal system.  
At the generator terminals, a **bolted three-phase (3ϕ) fault** occurs.

The generator has the following per-unit reactances (on its own base):

- Positive-sequence reactance:
  $$X_1 = 0.2\ \text{pu}$$
- Negative-sequence reactance:
  $$X_2 = 0.15\ \text{pu}$$
- Zero-sequence reactance:
  $$X_0 = 0.05\ \text{pu}$$

Answer the following **step-by-step**.

---

#### Q1. Physical reasoning (boundary conditions)

1. How many phases are involved in a 3ϕ fault?
2. Are the three phase voltages equal at the fault point?
3. Is the system balanced or unbalanced during the fault?

---

#### Q2. Symmetrical components reasoning

1. Which sequence networks are **present** during a 3ϕ fault?
2. Which sequence currents are **zero**?
3. How many sequence networks must be connected to find the fault current?

---

#### Q3. Calculation (per-unit)

1. Find the **per-unit fault current** for the bolted 3ϕ fault.
2. Is the fault current dependent on $X_2$ or $X_0$? (Yes/No, with reason)

---

#### Q4. Calculation (actual current)

1. Calculate the **base current** of the generator.
2. Find the **actual fault current** in kA.

---

---

### Answers

#### A1. Physical reasoning

1. **All three phases** are involved in a 3ϕ fault.
2. Yes. At the fault point:
   $$V_a = V_b = V_c = 0$$
3. The system remains **balanced** during a 3ϕ fault.

---

#### A2. Symmetrical components reasoning

1. Only the **positive-sequence network** is present.
2. Negative- and zero-sequence currents are zero:
   $$I_2 = 0,\quad I_0 = 0$$
3. Only **one sequence network (positive sequence)** is required.

---

#### A3. Calculation (per-unit)

1. Per-unit 3ϕ fault current:
   $$I_{3\phi} = \frac{1}{X_1} = \frac{1}{0.2} = 5\ \text{pu}$$
2. Dependence on $X_2$ or $X_0$: **No**  
   Because a 3ϕ fault is balanced, only the positive-sequence network is excited.

---

#### A4. Calculation (actual current)

1. Base current:
   $$I_{base} = \frac{S_{base}}{\sqrt{3}V_{base}}$$
   $$I_{base} = \frac{100\times10^6}{\sqrt{3}\times20\times10^3}
   = 2886.8\ \text{A}$$

2. Actual fault current:
   $$I_{fault} = I_{3\phi}\times I_{base}$$
   $$I_{fault} = 5 \times 2886.8 = 14.43\ \text{kA}$$

> For a balanced 3-phase fault, the calculated fault current is the per-phase (and line) current.

---

### Key takeaway

A **three-phase fault is always balanced**, so **only the positive-sequence network participates**, and the fault current depends **only on $X_1$**.
