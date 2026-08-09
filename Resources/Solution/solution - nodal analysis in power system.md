---
question paper: "[[ee_2024]]"
original: "[[ee_2024.pdf]]"
question: "[[ee_2024#^q19]]"
tags:
  - example/nodal-analysis
  - example/power-system
aliases:
  - "Example : Nodal Analysis in Power System"
---
### Nodal Analysis in Power System Example

![[ee_2024#^q19]]

---
#### Solution (step-by-step)

##### Step 1: Given data

| Branch | Impedance (pu) |
| :----: | :------------: |
| $b_1$  |      $4z$      |
| $b_2$  |      $z$       |
| $b_3$  |      $2z$      |
| $b_4$  |      $4z$      |

Loss depends only on the real part ($r$).  
Let $R_1 = 4r$, $R_2 = r$, $R_3 = 2r$, $R_4 = 4r$
##### Step 2: Write KCL equations

Let node voltages (with source node = $0$):
- Left bus: $V_L$
- Right bus: $V_R$
- Bottom bus: $V_B$

Each bus draws current $(I)$ 
$$\begin{aligned}
\text{Left: } & \frac{V_L - 0}{4} + \frac{V_L - V_B}{2} = I \quad \Rightarrow \; 3V_L - 2V_B = 4I \\
\text{Right: } & \frac{V_R - 0}{1} + \frac{V_R - V_B}{4} = I \quad \Rightarrow \; 5V_R - V_B = 4I \\
\text{Bottom: } & \frac{V_B - V_L}{2} + \frac{V_B - V_R}{4} = I \quad \Rightarrow \; -2V_L - V_R + 3V_B = 4I
\end{aligned}$$
##### Step 3: Solve for voltages
$$V_L = \frac{52}{11}I, \quad
V_R = \frac{20}{11}I, \quad
V_B = \frac{56}{11}I$$
##### Step 4: Find branch currents
$$\begin{aligned}
I_{b1} &= \frac{V_L}{4} = \frac{13}{11}I \\
I_{b2} &= \frac{V_R}{1} = \frac{20}{11}I \\
I_{b3} &= \frac{V_L - V_B}{2} = \frac{2}{11}I \\
I_{b4} &= \frac{V_R - V_B}{4} = \frac{9}{11}I
\end{aligned}$$
##### Step 5: Calculate total losses (for comparison)

$$P_{loss,full} = r \left[ 4\left(\frac{13}{11}I\right)^2 + 1\left(\frac{20}{11}I\right)^2 + 2\left(\frac{2}{11}I\right)^2 + 4\left(\frac{9}{11}I\right)^2 \right]
\approx 11.636\,rI^2$$

##### Step 6: Losses with each branch open

Now compute losses when each branch is opened (solve nodal equations for each case [[#Step 2 Write KCL equations|similarly]]). Results (losses shown in units of $rI^2$):

| Branch Open | Total Loss ($\propto rI^2$) |
| :---------: | :-------------------------: |
|    $b_1$    |            $27$             |
|    $b_2$    |            $48$             |
|    $b_3$    |            $12$             |
|    $b_4$    |            $19$             |
##### Step 7: Conclusion

Minimum loss occurs when $b_3$ is opened.

---
#### Answer

**(C). $b_3$ is the correct answer.**
