---
tags:
  - digital-logic
  - boolean-algebra
  - logic-gates
  - digital-electronics
created: 2025-10-17
aliases:
  - Boolean Algebra
  - Logic Gates
  - AND Gates
  - OR Gates
  - NOT Gates
  - NAND Gates
  - NOR Gates
  - XOR Gates
  - XNOR Gates
  - Absorption Law
  - Consensus Theorem
  - Involution Law
  - Boolean Algebra Simplification
subject: "[[Analog & Digital Electronics]]"
parent:
  - Digital Electronics
trends:
  - "[[trends - Boolean Algebra and Logic Gates]]"
modified: 2026-08-04T09:14:17
---
### Boolean Algebra and Logic Gates
#boolean-algebra #logic-gates #digital-fundamentals

> Boolean algebra is the mathematical foundation of digital logic. It provides a framework for analyzing and simplifying digital circuits. Logic gates are the fundamental physical building blocks that perform these Boolean operations. Mastery of both is essential for designing any digital system.

#### Boolean Algebra Postulates and Theorems
#boolean-algebra/theorems

Boolean algebra is an algebraic structure defined on a set of elements $B = \{0, 1\}$ with two binary operators, OR ($+$) and AND ($·$), and one unary operator, NOT ($'$).

##### Key Postulates
#postulates

1.  **Closure**: The result of an operation is always an element of the set $B$.
2.  **Identity Element**:
    *   $A + 0 = A$
    *   $A \cdot 1 = A$
3.  **Commutative Law**:
    *   $A + B = B + A$
    *   $A \cdot B = B \cdot A$
4.  **Distributive Law**:
    *   $A \cdot (B + C) = A \cdot B + A \cdot C$
    *   $A + (B \cdot C) = (A + B) \cdot (A + C)$
5.  **Complement**: For every element $A$, there exists an element $A'$ such that:
    *   $A + A' = 1$
    *   $A \cdot A' = 0$

---
##### Important Theorems for Simplification
#theorems 

* **Idempotent Law**: $A + A = A$, $A \cdot A = A$
* **Involution Law**: $(A')' = A$
* **Absorption Law**:
    * $A + A \cdot B = A$
    * $A \cdot (A + B) = A$
* **Consensus Theorem**: $AB + A'C + BC = AB + A'C$
* **De Morgan's Theorem**: This theorem is crucial for simplifying expressions and converting between SOP and POS forms.
    $$\boxed{\quad (A + B)' = A' \cdot B' \quad}$$
    $$\boxed{\quad (A \cdot B)' = A' + B' \quad}$$
    "Break the line, change the sign."
> [!pyq]-
> ![[ee_2018#^q14]]

* **Duality Principle**: A valid Boolean expression remains valid if we interchange operators (AND $\leftrightarrow$ OR) and identity elements (0 $\leftrightarrow$ 1).

---
#### Logic Gates
#logic-gates #digital-circuits

Logic gates are electronic circuits that implement Boolean functions.

|           Gate           |       Symbol       | Expression          |          Truth Table           | Description                                                         |
| :----------------------: | :----------------: | :-----------------: | :----------------------------: | ------------------------------------------------------------------- |
|    **NOT** (Inverter)    | ![[NOT Gate.png]]  | $Y = A'$            | ![[Digital Electronics Repeated#^NOT]]  | Output is the complement of the input.                              |
|         **AND**          | ![[AND Gate.png]]  | $Y = A \cdot B$     | ![[Digital Electronics Repeated#^AND]]  | Output is 1 only if **all** inputs are 1.                           |
|          **OR**          |  ![[OR Gate.png]]  | $Y = A + B$         |  ![[Digital Electronics Repeated#^OR]]  | Output is 1 if **any** input is 1.                                  |
|         **NAND**         | ![[NAND Gate.png]] | $Y = (A \cdot B)'$  | ![[Digital Electronics Repeated#^NAND]] | Complement of AND. A **Universal Gate**.                            |
|         **NOR**          | ![[NOR Gate.png]]  | $Y = (A + B)'$      | ![[Digital Electronics Repeated#^NOR]]  | Complement of OR. A **Universal Gate**.                             |
|  **XOR** (Exclusive-OR)  | ![[XOR Gate.png]]  | $Y = A \oplus B$    | ![[Digital Electronics Repeated#^XOR]]  | Output is 1 if inputs are **different**. Also an "odd 1s detector". |
| **XNOR** (Exclusive-NOR) | ![[XNOR Gate.png]] | $Y = (A \oplus B)'$ | ![[Digital Electronics Repeated#^XNOR]] | Output is 1 if inputs are **equal**. An "equality detector".        |

---
##### Universal Gates
#universal-gates

NAND and NOR gates are called **universal gates** because any other logic gate (AND, OR, NOT) can be implemented using only NAND gates or only NOR gates. This property is vital in IC fabrication as it allows complex circuits to be built from a single type of gate, simplifying the manufacturing process.

> See [[Universal Gates (NAND and NOR)]] in details.

---
#### Standard Forms
#canonical-forms #sop #pos

Any Boolean function can be expressed in two standard (or canonical) forms:
1. **Sum of Products (SOP)**: The expression is a sum (OR) of product (AND) terms. Each product term is called a **minterm**. A minterm is a product term that includes all variables of the function, either in complemented or uncomplemented form.
    * *Example*: $F(A,B,C) = A'BC + AB'C + ABC$
    * *Shorthand*: $F = \sum m(3, 5, 7)$
2. **Product of Sums (POS)**: The expression is a product (AND) of sum (OR) terms. Each sum term is called a **maxterm**. A maxterm is a sum term that includes all variables of the function.
    * *Example*: $F(A,B,C) = (A+B+C) \cdot (A'+B+C')$
    * *Shorthand*: $F = \Pi M(0, 5)$

---
### Related Concepts

> [[Universal Gates (NAND and NOR)]]

[[Logic Minimization using Karnaugh Maps (K-Map)]]
[[Combinational Logic Circuits]]
[[Binary Codes (BCD, Gray Code, Excess-3)]]
[[Sum of Products (SOP) and Product of Sums (POS)]]
[[Set Theory]]