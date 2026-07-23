---
tags:
  - power-system
  - transmission-lines
  - power-system-analysis
  - voltage-regulation
  - efficiency
created: 2025-10-11
aliases:
  - VR and Efficiency
  - Line Performance Metrics
subject: "[[Power System]]"
parent:
  - Performance of Transmission Lines
  - "[[Voltage Regulation]]"
modified: 2026-07-23T21:19:27
---
### Voltage Regulation and Transmission Efficiency
#voltage-regulation #transmission-efficiency #power-system-performance

> Voltage Regulation (VR) and Transmission Efficiency ($\eta$) are two of the most critical performance metrics for a transmission line. VR quantifies the line's ability to maintain a constant voltage at the load, while efficiency measures the economic aspect of power delivery by quantifying losses.

#### Voltage Regulation (VR)
#voltage-regulation

Voltage regulation is defined as the percentage change in the receiving-end voltage as the load varies from no-load to full-load, with respect to the full-load voltage.

-   **Definition**:
    $$ VR = \frac{|V_{r, nl}| - |V_{r, fl}|}{|V_{r, fl}|} \times 100\% $$
    where $|V_{r, nl}|$ is the magnitude of the receiving-end voltage at no-load, and $|V_{r, fl}|$ is the magnitude at full-load. A lower VR (closer to zero) is highly desirable as it indicates a "stiffer" or more stable voltage supply.

-   **Using ABCD Parameters**: At no-load, $I_r=0$, so from $V_s = A V_r + B I_r$, we get $|V_{r, nl}| = |V_s| / |A|$.
    For a **short line**, $A=1$, so $|V_{r, nl}| = |V_s|$. The formula simplifies to:
    $$\boxed{\quad VR = \frac{|V_s| - |V_r|}{|V_r|} \times 100\% \quad (\text{For short lines})}$$

-   **Approximate Formula**: For short and medium lines, a very useful approximate formula is:
    $$\boxed{\quad VR \approx \frac{|I_r|(R \cos\phi_r \pm X_L \sin\phi_r)}{|V_r|} \quad}$$
    -   Use **'+'** for a **lagging** power factor load.
    -   Use **'-'** for a **leading** power factor load.

-   **Effect of Load Power Factor on VR**:
    -   **Lagging PF**: Both resistive and reactive drops contribute to a larger overall voltage drop, resulting in a positive and significant VR.
    -   **Unity PF**: The reactive drop is perpendicular to the voltage, contributing less to the magnitude change. VR is positive but smaller.
    -   **Leading PF**: The reactive drop opposes the resistive drop's effect on voltage magnitude. VR can be small, zero, or even negative. A negative VR means the full-load receiving voltage is higher than the no-load voltage (related to the [[Ferranti Effect]]).

-   **Key Conditions**:
    1.  **Condition for Zero VR**: Occurs at a leading power factor when the numerator of the approximate formula is zero.
        $$ R \cos\phi_r = X_L \sin\phi_r \implies \tan\phi_r = \frac{R}{X_L} \quad (\text{leading}) $$
    2.  **Condition for Maximum VR**: Occurs at a lagging power factor when the load impedance angle matches the line impedance angle ($\phi_r = \theta_Z$).
        $$ \tan\phi_r = \frac{X_L}{R} \quad (\text{lagging}) $$

---
#### Transmission Efficiency ($\eta$)
#transmission-efficiency

Transmission efficiency is the ratio of the real power delivered to the load to the real power supplied at the sending end.

-   **Definition**:
    $$\boxed{\quad \eta = \frac{\text{Power Delivered to Load }(P_r)}{\text{Power Sent from Source }(P_s)} \times 100\% = \frac{P_r}{P_r + \text{Line Losses}} \times 100\% \quad}$$

-   **Line Losses**: The primary loss in a transmission line is the copper loss ($I^2R$) due to the line's resistance. For a 3-phase line, the total loss is $P_{loss} = 3 |I_L|^2 R_{phase}$.

-   **Formula for 3-Phase Lines**:
    $$ \eta = \frac{\sqrt{3} |V_{r,LL}| |I_L| \cos\phi_r}{\sqrt{3} |V_{r,LL}| |I_L| \cos\phi_r + 3|I_L|^2 R} \times 100\% $$

-   **Factors Influencing Efficiency**:
    1.  **Load Current ($I_L$)**: Since losses are proportional to $I_L^2$, efficiency drops significantly as the load current increases.
    2.  **Transmission Voltage ($V_L$)**: For a given amount of power $P$, the current $I_L \propto 1/V_L$. Therefore, the power loss $P_{loss} \propto I_L^2 \propto 1/V_L^2$. Doubling the voltage reduces the losses to one-fourth, drastically improving efficiency. This is the fundamental reason for using high-voltage transmission.
    3.  **Power Factor ($\cos\phi_r$)**: For a given real power $P_r$, the current $I_L \propto 1/\cos\phi_r$. A lower power factor means a higher current is needed to deliver the same real power, leading to higher $I^2R$ losses and lower efficiency.

---
### Related Concepts
#power-system/related-concepts

> [[Modeling of Short Transmission Lines]]

[[ABCD Parameters (Generalized Circuit Constants)]]
[[Power Flow through a Transmission Line]]
[[Ferranti Effect]] (A phenomenon related to negative voltage regulation)
[[Economic Load Dispatch (ELD) including losses]] (Where line efficiency becomes a key economic factor)