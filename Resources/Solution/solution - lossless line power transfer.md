---
original: "[[ee_2020.pdf]]"
question paper: "[[ee_2020]]"
question: "[[ee_2020#^q47]]"
aliases:
  - "Example : Lossless Line Power Transfer"
tags:
  - example/lossless-transmission-line-power-transfer
---
### Lossless Line Power Transfer Example


![[ee_2020#^q47]]

---
#### Solution (step-by-step)

Given a lossless line, the power flow from bus 1 to 2 is: $$P_{12} = \frac{V_1 V_2}{X}\sin\delta$$
$$Q_{12} = \frac{V_1^2}{X} - \frac{V_1 V_2}{X}\cos\delta$$

Since the real power flow is zero under both conditions: $$P_{12} = 0 \Rightarrow \sin\delta = 0 \Rightarrow \delta = 0^\circ$$
Thus $\cos\delta = 1$ and reactive power becomes: $$Q_{12} = \frac{V_1^2 - V_1 V_2}{X} = \frac{V_1(V_1 - V_2)}{X}$$

---

##### Step 1: Initial reactive power

Given: $V_{1,\text{old}} = 1.1$ pu   $V_2 = 1$ pu
So:
$$Q_{\text{old}} = \frac{1.1^2 - 1.1}{X}
= \frac{1.21 - 1.1}{X}
= \frac{0.11}{X}$$

---
##### Step 2: New reactive power is 20% more

$$Q_{\text{new}} = 1.2\,Q_{\text{old}} = 1.2 \cdot \frac{0.11}{X} = \frac{0.132}{X}$$
Let the new bus-1 voltage be $V$.
From the reactive power formula: $$Q_{\text{new}} = \frac{V^2 - V}{X}$$
Equate both: $$\frac{V^2 - V}{X} = \frac{0.132}{X}$$
$$V^2 - V = 0.132$$

---
##### Step 3: Solve quadratic

$$V^2 - V - 0.132 = 0$$
$$V = \frac{1 \pm \sqrt{1 + 4 \cdot 0.132}}{2}$$
$$V = \frac{1 \pm \sqrt{1.528}}{2}$$
$$\sqrt{1.528} \approx 1.236$$
So: $V = \frac{1 + 1.236}{2} \approx 1.118$ pu (negative root is discarded)

---
#### Answer

The correct numerical value is $V_1 = 1.12\ \text{pu}$
