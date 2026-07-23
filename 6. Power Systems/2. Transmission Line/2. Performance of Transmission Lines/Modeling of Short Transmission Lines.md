---
tags:
  - power-system
  - transmission-lines
  - line-modeling
  - short-lines
  - power-system-analysis
created: 2025-10-11
aliases:
  - Short Line Model
  - Short Transmission Line
subject: "[[Power System]]"
parent:
  - Performance of Transmission Lines
formula:
  - "ABCD Parameters (Short TL) : $$\\begin{bmatrix} V_s \\\\ I_s \\end{bmatrix} = \\begin{bmatrix} 1 & Z \\\\ 0 & 1 \\end{bmatrix} \\begin{bmatrix} V_r \\\\ I_r \\end{bmatrix}$$"
modified: 2026-07-23T21:18:52
---
### Modeling of Short Transmission Lines
#short-line-model #transmission-line-modeling

> A transmission line is classified as a **short line** if its length is less than 80 km and the operating voltage is relatively low (typically below 20 kV). For such lines, the effects of shunt capacitance are negligible and can be ignored in the analysis. Consequently, a short line is modeled as a simple series circuit consisting of the total line resistance ($R$) and inductance ($L$).

#### Circuit Model and Equations
#short-line-circuit

The short transmission line is represented by its lumped series impedance, $Z = R + jX_L$.

-   $R$: Total resistance of the line ($R = r \times l$)
-   **$X_L$**: Total inductive reactance of the line ($X_L = \omega L = 2\pi f L_{total}$)

![[ShortLineModel.png]]

The relationship between sending-end and receiving-end quantities is given by:
-   **Sending-end Voltage ($V_s$)**:
    $$\boxed{\quad V_s = V_r + I_r Z = V_r + I_r(R + jX_L) \quad}$$
-   **Sending-end Current ($I_s$)**:
    $$\boxed{\quad I_s = I_r \quad}$$
Here, $V_r$ and $I_r$ are the receiving-end voltage and current, respectively.

#### Phasor Diagram
#short-line-phasor

The phasor diagram for a lagging power factor load is crucial for understanding voltage regulation.
1.  Take the receiving-end voltage $V_r$ as the reference phasor.
2.  The receiving-end current $I_r$ lags $V_r$ by the power factor angle $\phi_r$.
3.  The resistive voltage drop $I_rR$ is in phase with $I_r$.
4.  The inductive voltage drop $I_rX_L$ leads the current $I_r$ by $90^\circ$.
5.  The sending-end voltage $V_s$ is the vector sum: $V_s = V_r + I_rR + jI_rX_L$.

![[ShortLinePhasor.png]]

#### ABCD Parameters
#abcd-parameters

The performance of any two-port network, including a transmission line, can be expressed using ABCD parameters:
$$\begin{align}
V_s &= A V_r + B I_r \\
I_s &= C V_r + D I_r
\end{align}$$
By comparing these with the short line equations, we get:
-   $A = 1$
-   $B = Z = R + jX_L$
-   $C = 0$
-   $D = 1$

$$\boxed{\quad \begin{bmatrix} V_s \\ I_s \end{bmatrix} = \begin{bmatrix} 1 & Z \\ 0 & 1 \end{bmatrix} \begin{bmatrix} V_r \\ I_r \end{bmatrix} \quad}$$
-   **Symmetry**: Since $A=D$, the network is symmetrical.
-   **Reciprocity**: Since $AD-BC = (1)(1) - (Z)(0) = 1$, the network is reciprocal.

#### Voltage Regulation
#voltage-regulation

Voltage regulation is a measure of the change in receiving-end voltage from no-load to full-load.
$$ VR = \frac{|V_{r, nl}| - |V_{r, fl}|}{|V_{r, fl}|} \times 100\% $$
For a short line, at no-load ($I_r=0$), we have $|V_{r, nl}| = |V_s|$. Therefore:
$$ VR = \frac{|V_s| - |V_r|}{|V_r|} \times 100\% $$
From the phasor diagram, an approximate formula for voltage regulation can be derived:
$$\boxed{\quad VR \approx \frac{|I_r|(R \cos\phi_r \pm X_L \sin\phi_r)}{|V_r|} \quad}$$
-   **'+' sign** is used for **lagging** power factor loads.
-   **'-' sign** is used for **leading** power factor loads.

-   **Condition for Zero VR**: Occurs for a leading power factor load when $R \cos\phi_r - X_L \sin\phi_r = 0$, which means $\tan\phi_r = R/X_L$.
-   **Condition for Maximum VR**: Occurs for a lagging power factor load when the load impedance angle $\phi_r$ equals the line impedance angle $\theta_Z$ (i.e., $\tan\phi_r = X_L/R$).

#### Transmission Efficiency ($\eta$)
#transmission-efficiency

Efficiency is the ratio of power delivered to the power sent from the source.
$$ \eta = \frac{\text{Power Delivered (3-phase)}}{\text{Power Sent (3-phase)}} = \frac{P_r}{P_s} = \frac{P_r}{P_r + \text{Line Losses}} $$
The total line loss for a three-phase system is $3|I_r|^2 R$.
$$\boxed{\quad \eta = \frac{\sqrt{3} |V_{r,LL}| |I_r| \cos\phi_r}{\sqrt{3} |V_{r,LL}| |I_r| \cos\phi_r + 3|I_r|^2 R} \times 100\% \quad}$$

---
### Related Concepts
#power-system/related-concepts

> [[Modeling of Medium Transmission Lines]] (The next level of model complexity)

[[Modeling of Long Transmission Lines]]
[[ABCD Parameters (Generalized Circuit Constants)]]
[[Voltage Regulation and Transmission Efficiency]]
[[Resistance of Transmission Lines]] and [[Inductance of Single-phase and Three-phase Lines]] (The parameters used in the model)