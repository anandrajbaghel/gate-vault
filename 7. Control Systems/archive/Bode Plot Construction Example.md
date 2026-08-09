---
tags:
  - bode-plot
  - construction
aliases:
  - "Example : Bode Plot Construction"
---
### Example of Bode Plot Construction
#bode-plot/construction/example

Consider the [[Open-Loop Transfer Function (OLTF)|open-loop transfer function]]
$$ G(s)H(s) = \frac{10s}{(s+2)(s+5)} $$

##### 1. Standard Form
$$ G(s)H(s) = \frac{10s}{2(1+s/2) \cdot 5(1+s/5)} = \frac{10s}{10(1+0.5s)(1+0.2s)} = \frac{s}{(1+0.5s)(1+0.2s)} $$
Here, $K_{eff}=1$ (after factoring out constants from poles). There is one zero at the origin ($s$). There are two simple poles with time constants $\tau_{p1}=0.5 \text{ sec}$ and $\tau_{p2}=0.2 \text{ sec}$.

##### 2. Corner Frequencies
*   Pole 1: $\omega_{c1} = 1/\tau_{p1} = 1/0.5 = 2 \text{ rad/sec}$.
*   Pole 2: $\omega_{c2} = 1/\tau_{p2} = 1/0.2 = 5 \text{ rad/sec}$.
Sorted corner frequencies: $2 \text{ rad/sec}, 5 \text{ rad/sec}$.

##### 3. Magnitude Plot
*   **Low Frequencies (e.g., $\omega < 2$)**: The term $s$ (zero at origin) dominates. Slope is $+20 \text{ dB/decade}$. This line passes through $0 \text{ dB}$ at $\omega=1 \text{ rad/sec}$ (since $K_{eff}=1$).
*   **At $\omega_{c1} = 2 \text{ rad/sec}$**: The pole $(1+0.5s)$ contributes. Slope changes from $+20 \text{ dB/decade}$ to $+20 - 20 = 0 \text{ dB/decade}$.
*   **At $\omega_{c2} = 5 \text{ rad/sec}$**: The pole $(1+0.2s)$ contributes. Slope changes from $0 \text{ dB/decade}$ to $0 - 20 = -20 \text{ dB/decade}$.

##### 4. Phase Plot
*   **Zero at origin ($s$)**: Contributes $+90^\circ$ constantly.
*   **Pole at $\omega_{c1}=2$**: Contributes $0^\circ$ for $\omega \ll 2$, $-45^\circ$ at $\omega=2$, and $-90^\circ$ for $\omega \gg 2$.
*   **Pole at $\omega_{c2}=5$**: Contributes $0^\circ$ for $\omega \ll 5$, $-45^\circ$ at $\omega=5$, and $-90^\circ$ for $\omega \gg 5$.
*   Total phase is the sum. E.g.:
    *   $\omega \to 0$: Phase $\approx +90^\circ$.
       *   At $\omega=2$: Phase $\approx +90^\circ - 45^\circ - (\text{small from pole at 5, e.g., } \tan^{-1}(2/5) \approx 21.8^\circ) \approx +90^\circ - 45^\circ - 21.8^\circ \approx +23.2^\circ$.
     *   At $\omega=5$: Phase $\approx +90^\circ - (\text{large from pole at 2, e.g., } \tan^{-1}(5/2) \approx 68.2^\circ) - 45^\circ \approx +90^\circ - 68.2^\circ - 45^\circ \approx -23.2^\circ$.
     *   $\omega \to \infty$: Phase $\approx +90^\circ - 90^\circ - 90^\circ = -90^\circ$.

(Drawing the plot would typically be done on semi-log paper or using software.)
