---
original: "[[ee_2021.pdf]]"
question paper: "[[ee_2021]]"
question: "[[ee_2021#^q36]]"
aliases:
  - "Example : Sequence Components"
tags:
  - example/sequence-components
---
### Example

![[ee_2021#^q36]]

---
#### Solution (step-by-step)
##### Step 1: Given

1. $I_{B0} = 0.1\angle 0^\circ$ (zero-sequence, so $I_{A0}=I_{B0}=I_{C0}=0.1\angle0^\circ$)
2. $I_A = 1.1\angle0^\circ$
3. $I_C = 1\angle120^\circ + 0.1\angle0^\circ$
##### Step 2: Sequence decomposition idea

Each phase current can be written as sum of sequence components:

$\displaystyle I_A = I_1 + I_2 + I_0$
$\displaystyle I_B = a^2 I_1 + a I_2 + I_0$
$\displaystyle I_C = a I_1 + a^2 I_2 + I_0$

where $I_1$ = positive-sequence phasor, $I_2$ = negative-sequence phasor, $I_0$ = zero-sequence phasor, and $a= e^{j120^\circ}$

Because the problem gives an explicit common $0.1\angle0^\circ$ term in phases A and C and states $I_{B0}=0.1\angle0^\circ$, the zero-sequence is nonzero and equal in all phases. The given phase phasors match the form $I_{phase}=I_{1,phase}+I_0$ with a balanced set for $I_1$, so $I_2=0$ (no negative-sequence present).
##### Step 3: Extract positive-sequence $I_1$

From $I_A$: $$\displaystyle I_A = 1.1\angle0^\circ = I_{1A} + I_0 = I_1 + 0.1\angle0^\circ$$

Therefore $$\displaystyle I_1 = 1.1\angle0^\circ - 0.1\angle0^\circ = 1\angle0^\circ$$
Check with $I_C$: $$\displaystyle I_C = 1\angle120^\circ + 0.1\angle0^\circ = a I_1 + I_0$$
which is consistent with $I_1 = 1\angle0^\circ$

So the positive-sequence phasors are: $$\displaystyle I_{A1} = 1\angle0^\circ,\quad I_{B1} = 1\angle240^\circ(=1\angle-120^\circ),\quad I_{C1} = 1\angle120^\circ$$
##### Step 3: Compute $I_B$

Since $I_0 = 0.1\angle0^\circ$ and $I_{B1} = 1\angle240^\circ$, and $I_2=0$, we have $$\displaystyle I_B = I_{B1} + I_0 = 1\angle240^\circ + 0.1\angle0^\circ$$
##### Step 4: Optional rectangular check

$$1\angle240^\circ = \cos240^\circ + j\sin240^\circ = -0.5 - j0.8660254$$

Add $0.1\angle0^\circ = 0.1 + j0$: $$\displaystyle I_B = -0.4 - j0.8660254 \quad (\text{p.u.})$$

---
##### Answer

**Option D : $I_B = 1\angle240^\circ + 0.1\angle0^\circ$ is the correct answer.**
(Equivalent form: $I_B = 1\angle -120^\circ + 0.1\angle0^\circ$)

