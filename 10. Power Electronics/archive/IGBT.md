---
title: Insulated Gate Bipolar Transistors (IGBTs)
parent: "[[Power Transistors]]"
tags:
  - IGBTs
aliases:
  - insulated gate bipolar transistors
  - IGBTs
  - IGBT
  - MOSIGT
  - COMFET
  - GEMFET
  - IGT
  - Insulated Gate Bipolar Transistors (IGBTs)
---
> **Insulated Gate Bipolar Transistor**, also called
> 1. **Metal Oxide Insulated Gate Transistor** (MOSIGT)
> 2. **Conductively-Modulated Field Effect Transistor** (COMFET)
> 3. **Gain-Modulated FET** (GEMFET)
> 4. **Insulated Gate Transistor** (IGT) (initially called)

##### Basic Structure

![[Pasted image 20250817134550.png]]

##### Equivalent Circuit

![[Pasted image 20250817134816.png]]

> The IGBT is a hybrid device that combines the desirable traits of both BJTs and MOSFETs. It has the high input impedance of a MOSFET, which simplifies the drive circuitry, and the low on-state conduction losses of a BJT.

##### Key Characteristics

##### Operation
Like a MOSFET, an IGBT is a **voltage-controlled device** with high input impedance. Its structure includes a p+ substrate (collector), an n- drift region, and a p body, which results in the injection of both holes and electrons into the n- drift region. This phenomenon, known as conductivity modulation, significantly lowers the on-state voltage drop.
##### Latching
A potential issue with IGBTs is "latch-up." This occurs due to a parasitic thyristor structure within the device. Under high current conditions, this parasitic thyristor can turn on, causing the IGBT to lose gate control. Modern fabrication techniques, however, have led to the development of "latch-up-free" IGBTs.
##### Applications
IGBTs are well-suited for medium-power applications (up to 1200 V, 500 A ratings) and operate at frequencies up to 50 kHz. They are extensively used in DC and AC motor drives, uninterruptible power supplies (UPS), and power supplies. They are generally more efficient, smaller, and less expensive than BJT-based converters for many applications.