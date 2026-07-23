---
tags:
  - power-system
  - transmission-lines
  - line-modeling
  - two-port-network
  - power-system-analysis
created: 2025-10-11
aliases:
  - Generalized Circuit Constants
  - Transmission Parameters
  - Chain Parameters
  - ABCD Parameters in Power System
subject: "[[Power System]]"
parent: Performance of Transmission Lines
modified: 2026-07-23T21:17:46
---
### ABCD Parameters (Generalized Circuit Constants)
#abcd-parameters #two-port-network #transmission-line-modeling

> **ABCD parameters**, also known as **Transmission Parameters** or **Generalized Circuit Constants**, provide a standardized framework for analyzing two-port networks, such as transmission lines. They relate the voltage and current at the sending end of the network to the voltage and current at the receiving end, simplifying the analysis of complex power systems.

#### Definition and Equations
#abcd-definition

For any linear, passive, bilateral two-port network, the sending-end voltage ($V_s$) and current ($I_s$) can be expressed as linear functions of the receiving-end voltage ($V_r$) and current ($I_r$).

The defining equations are:
$$\begin{align}
V_s &= A V_r + B I_r \\
I_s &= C V_r + D I_r
\end{align}$$
In matrix form, this is written as:
$$\boxed{\quad \begin{bmatrix} V_s \\ I_s \end{bmatrix} = \begin{bmatrix} A & B \\ C & D \end{bmatrix} \begin{bmatrix} V_r \\ I_r \end{bmatrix} \quad \text{or} \quad [V_s, I_s]^T = [T] [V_r, I_r]^T \quad}$$

-   **A (Unitless)**: Reverse Voltage Ratio ($V_s/V_r$ with $I_r=0$).
-   **B ($\Omega$)**: Short-circuit Reverse Transfer Impedance ($V_s/I_r$ with $V_r=0$).
-   **C (Siemens)**: Open-circuit Reverse Transfer Admittance ($I_s/V_r$ with $I_r=0$).
-   **D (Unitless)**: Reverse Current Ratio ($I_s/I_r$ with $V_r=0$).

---
#### Properties of ABCD Parameters
#abcd-parameters/properties 

Two important properties characterize the network:

1.  **Symmetry**: A network is symmetrical if its input and output ports can be interchanged without altering its electrical characteristics. For transmission lines, this means the line appears the same from both ends.
    $$\boxed{\quad \text{Condition for Symmetry: } A = D \quad}$$

2.  **Reciprocity**: A network is reciprocal if the ratio of excitation at one port to the response at the other is the same when the positions of excitation and response are swapped. All passive transmission lines are reciprocal.
    $$\boxed{\quad \text{Condition for Reciprocity: } AD - BC = 1 \quad}$$

---
#### Cascaded Networks
#cascaded-networks #abcd-parameters/cascaded-networks 

One of the most powerful features of ABCD parameters is their utility in analyzing cascaded networks. If two networks, $[T_1]$ and $[T_2]$, are connected in cascade (output of the first connects to the input of the second), the overall transmission matrix $[T]$ is simply the product of the individual matrices.
$$\boxed{\quad [T]_{overall} = [T_1][T_2] \quad}$$
This makes ABCD parameters ideal for analyzing systems composed of multiple transmission line segments, transformers, and other series components.

---
#### Performance Calculation
#performace-calculation #voltage-regulation 

The parameters can be used directly to calculate key performance metrics. For instance, the [[Voltage Regulation#Voltage Regulation in Transmission Lines|voltage regulation]] can be found by first calculating the no-load receiving-end voltage. At no-load, $I_R = 0$, so $V_S = A V_{R,NL}$. This gives:
    $$ |V_{R,NL}| = \frac{|V_S|}{|A|} $$
    This value can then be used in the voltage regulation formula.

---
#### ABCD Parameters for Different Line Models
#abcd-parameters/different-transmission-models 

The generalized constants depend on the specific model used for the transmission line.

| Transmission Line Model                                                                         | $$A$$               | $$B$$                   | $$C$$                            | $$D$$               |  $$\text{In Matrix Form} \\ \begin{bmatrix} A & B \\ C & D \end{bmatrix}$$                                                 |
| ----------------------------------------------------------------------------------------------- | ------------------- | ----------------------- | -------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **[[Modeling of Short Transmission Lines]]**                                                    | $$1$$               | $$Z$$                   | $$0$$                            | $$1$$               | $$\begin{bmatrix} 1 & Z \\ 0 & 1 \end{bmatrix} $$                                                                          |
| **[[Modeling of Medium Transmission Lines\|Medium Line (Nominal-π)]]** | $$1+\frac{YZ}{2}$$  | $$Z$$                   | $$Y(1+\frac{YZ}{4})$$            | $$1+\frac{YZ}{2}$$  | $$\begin{bmatrix} 1+\frac{ZY}{2} & Z \\ Y(1+\frac{ZY}{4}) & 1+\frac{ZY}{2} \end{bmatrix} $$                                |
| **[[Modeling of Medium Transmission Lines\|Medium Line (Nominal-T)]]** | $$1+\frac{YZ}{2}$$  | $$Z(1+\frac{YZ}{4})$$   | $$Y$$                            | $$1+\frac{YZ}{2}$$  | $$\begin{bmatrix} 1+\frac{ZY}{2} & Z(1+\frac{ZY}{4}) \\ Y & 1+\frac{ZY}{2} \end{bmatrix} $$                                |
| **[[Modeling of Long Transmission Lines]]**                                 | $$\cosh(\gamma l)$$ | $$Z_c \sinh(\gamma l)$$ | $$\frac{1}{Z_c}\sinh(\gamma l)$$ | $$\cosh(\gamma l)$$ | $$\begin{bmatrix} \cosh(\gamma l) & Z_c \sinh(\gamma l) \\ \frac{1}{Z_c}\sinh(\gamma l) & \cosh(\gamma l) \end{bmatrix} $$ |

As seen from the table, all standard transmission line models are **symmetrical ($A=D$)** and **reciprocal ($AD-BC=1$)**.

![[Power Flow through a Transmission Line#^maximum-power-transfer]]

---
### Related Concepts
#power-system/related-concepts

> [[Modeling of Short Transmission Lines]]

[[Modeling of Medium Transmission Lines]]
[[Modeling of Long Transmission Lines]]
[[Voltage Regulation and Transmission Efficiency]]
[[Power Flow through a Transmission Line]] (General Power Flow Equations (Using ABCD Parameters))