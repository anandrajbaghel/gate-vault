---
tags:
  - digital-logic
  - cmos
  - logic-gates
  - vlsi
  - digital-electronics
created: 2025-11-10
aliases:
  - CMOS Inverter
  - CMOS NAND
  - CMOS NOR
  - CMOS Logic
  - CMOS Logic Gates (Inverter, NAND, NOR)
subject: "[[Analog & Digital Electronics]]"
parent: "[[Logic Families - TTL, ECL, CMOS]]"
modified: 2026-08-04T09:18:02
---
### CMOS Logic Gates
#cmos #logic-gates #vlsi-design

> **Complementary Metal-Oxide-Semiconductor (CMOS)** logic is the foundation of modern digital electronics. Its design philosophy is based on using a complementary pair of a P-channel MOSFET (PMOS) and an N-channel MOSFET (NMOS) for each input. The PMOS transistors form a **Pull-Up Network (PUN)** to connect the output to the supply voltage ($V_{DD}$), while the NMOS transistors form a **Pull-Down Network (PDN)** to connect the output to ground.

The key advantage of this structure is that in any steady state (logic HIGH or LOW), one network is ON while the other is OFF, preventing a direct path between $V_{DD}$ and ground.
$$\boxed{\quad \text{In a static state, there is no direct current path, resulting in near-zero static power dissipation.} \quad}$$

---
#### The CMOS Inverter (NOT Gate)
#cmos-inverter

The inverter is the most basic CMOS logic gate, consisting of one PMOS and one NMOS transistor.
*   **Structure**: The gates of the two transistors are connected together to form the input. The drains are connected together to form the output. The PMOS source is connected to $V_{DD}$ and the NMOS source to ground.
*   **Operation**:
    *   **Input = LOW (0V)**: The PMOS gate-to-source voltage ($V_{GS,p}$) is negative, turning it **ON**. The NMOS gate-to-source voltage ($V_{GS,n}$) is zero, turning it **OFF**. The output is pulled up to $V_{DD}$ through the active PMOS.
    *   **Input = HIGH ($V_{DD}$)**: The PMOS $V_{GS,p}$ is zero, turning it **OFF**. The NMOS $V_{GS,n}$ is positive, turning it **ON**. The output is pulled down to ground through the active NMOS.

![CMOS Inverter Circuit](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/CMOS_inverter.svg/200px-CMOS_inverter.svg.png)

---
#### The CMOS NAND Gate
#cmos-nand

A 2-input NAND gate is built using two PMOS and two NMOS transistors.
*   **Pull-Up Network (PUN)**: The two PMOS transistors are connected in **parallel**.
*   **Pull-Down Network (PDN)**: The two NMOS transistors are connected in **series**.
*   **Operation**:
    *   If **any input (A or B) is LOW**, at least one of the parallel PMOS transistors will be ON, creating a path to $V_{DD}$. Simultaneously, at least one of the series NMOS transistors will be OFF, breaking the path to ground. The output will be **HIGH**.
    *   If **both inputs (A and B) are HIGH**, both parallel PMOS transistors will be OFF. Both series NMOS transistors will be ON, completing the path to ground. The output will be **LOW**.

This behavior perfectly matches the NAND logic function.

![CMOS NAND Gate Circuit](https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/CMOS_NAND.svg/250px-CMOS_NAND.svg.png)

---
#### The CMOS NOR Gate
#cmos-nor

A 2-input NOR gate demonstrates the principle of duality to the NAND gate.
*   **Pull-Up Network (PUN)**: The two PMOS transistors are connected in **series**.
*   **Pull-Down Network (PDN)**: The two NMOS transistors are connected in **parallel**.
*   **Operation**:
    *   If **both inputs (A and B) are LOW**, both series PMOS transistors will be ON, creating a path to $V_{DD}$. Both parallel NMOS transistors will be OFF. The output will be **HIGH**.
    *   If **any input (A or B) is HIGH**, at least one of the series PMOS transistors will be OFF, breaking the path to $V_{DD}$. Simultaneously, at least one of the parallel NMOS transistors will be ON, creating a path to ground. The output will be **LOW**.

This behavior matches the NOR logic function.

![CMOS NOR Gate Circuit](https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/CMOS_NOR.svg/250px-CMOS_NOR.svg.png)

---
### Related Concepts

> [[Logic Families - TTL, ECL, CMOS]]

[[Characteristics of Digital ICs]]
[[MOSFET]]
[[Universal Gates (NAND and NOR)]]
[[Analog & Digital Electronics]]
