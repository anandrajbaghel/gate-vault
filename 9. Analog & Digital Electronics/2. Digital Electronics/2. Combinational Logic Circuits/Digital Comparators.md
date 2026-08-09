---
tags:
  - digital-logic
  - combinational-circuits
  - comparator
  - digital-electronics
created: 2025-10-26
aliases:
  - Magnitude Comparator
  - Digital Comparator
  - Binary Comparator
subject: "[[Analog & Digital Electronics]]"
parent: "[[Design of Combinational Circuits]]"
modified: 2026-08-04T09:33:23
---
### Digital Comparators
#magnitude-comparator #combinational-logic #digital-design

> A **Digital Magnitude Comparator** is a combinational logic circuit that compares two binary numbers (A and B) and determines their relative magnitude. The standard output consists of three signals: one each for A is greater than B ($A>B$), A is equal to B ($A=B$), and A is less than B ($A<B$). These circuits are crucial in CPUs for decision-making and in various control applications.

#### Identity Comparator (Equality)
#identity-comparator

An identity comparator is the simplest form, checking only for equality ($A=B$). Two n-bit numbers, A and B, are equal if and only if all corresponding pairs of bits are equal ($A_i = B_i$ for all i). This can be implemented using an [[Boolean Algebra and Logic Gates|XNOR]] gate for each bit pair and then ANDing all the XNOR outputs.
$$\boxed{\quad (A=B) = (A_{n-1} \odot B_{n-1}) \cdot (A_{n-2} \odot B_{n-2}) \cdot \dots \cdot (A_0 \odot B_0) \quad}$$
The output is 1 only when all bit pairs are identical.

---
#### 1-Bit Magnitude Comparator
#1-bit-comparator

This is the fundamental building block. It takes two single bits, A and B, as input and produces three outputs.

**Truth Table:**

| A | B | A > B | A = B | A < B |
|:-:|:-:|:-----:|:-----:|:-----:|
| 0 | 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 | 0 |
| 1 | 1 | 0 | 1 | 0 |

From the truth table, the logic expressions are:
$$\boxed{\begin{align}
(A > B) &= A \cdot B' \\
(A = B) &= A'B' + AB = (A \oplus B)' \\
(A < B) &= A' \cdot B
\end{align}}$$

---
#### N-Bit Magnitude Comparator
#n-bit-comparator

To compare two n-bit numbers, say $A = A_{n-1}...A_0$ and $B = B_{n-1}...B_0$, the comparison starts from the Most Significant Bit (MSB) and proceeds to the LSB.

*   **Equality ($A=B$)**: This condition is true only if all individual bit pairs are equal.
    Let $E_i = (A_i \oplus B_i)'$. Then,
    $$\boxed{\quad (A=B) = E_{n-1} \cdot E_{n-2} \cdot \dots \cdot E_0 = \prod_{i=0}^{n-1} E_i \quad}$$
*   **Greater Than ($A>B$)**: This condition is true if:
    *   The MSB of A is greater than the MSB of B ($A_{n-1}=1, B_{n-1}=0$), OR
    *   The MSBs are equal, AND the next bit of A is greater than the next bit of B, OR
    *   The first two MSBs are equal, AND the third bit of A is greater than the third bit of B, and so on.

    Let $G_i = A_i B_i'$. The general logic for a 4-bit comparator is:
    $$\boxed{\quad (A>B) = G_3 + E_3 G_2 + E_3 E_2 G_1 + E_3 E_2 E_1 G_0 \quad}$$

*   **Less Than ($A<B$)**: The logic is similar to the "greater than" case. Let $L_i = A_i' B_i$.
    $$\boxed{\quad (A<B) = L_3 + E_3 L_2 + E_3 E_2 L_1 + E_3 E_2 E_1 L_0 \quad}$$

The hardware for these expressions can become complex for a large number of bits, leading to a ripple-like delay similar to that in a Ripple-Carry Adder.

#### Cascading Comparators
#cascading-comparators

To reduce complexity and create larger comparators, standard ICs (like the 74HC85 4-bit comparator) are designed to be **cascaded**. These ICs have cascading inputs ($A>B_{in}, A=B_{in}, A<B_{in}$).
*   To build an 8-bit comparator from two 4-bit comparators, the outputs of the lower-order comparator (comparing bits 0-3) are connected to the cascading inputs of the higher-order comparator (comparing bits 4-7).
*   The overall result is taken from the outputs of the higher-order comparator.
*   For the lowest-order stage, the cascading inputs are set to indicate equality ($A=B_{in} = 1$, others = 0).

---
### Related Concepts

> [[Design of Combinational Circuits]]

[[Arithmetic Circuits]]
[[Boolean Algebra and Logic Gates]]
[[Analog & Digital Electronics]]
