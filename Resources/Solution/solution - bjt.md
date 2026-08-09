---
original: "[[ee_2018.pdf]]"
question paper: "[[ee_2018]]"
question: "[[ee_2018#^q41]]"
tags:
  - example/bjt
aliases:
  - "Example : BJT Common Collector (Emitter Follower)"
---
### BJT Example

![[ee_2018#^q41]]

---
#### Solution (step-by-step)

The transistor acts as an emitter-follower around its DC bias.

##### Step 1 : Turn off independent sources

Short the 15 V and the 10.7 V sources. After doing that:

- the base is tied to ground through the ($10\ \text{k}\Omega$) resistor (call it $R_B$),
- the collector is tied to ground through the ($10\ \Omega$) resistor (it is effectively at ground for small-signal emission looking into the emitter),
- the emitter terminal ($a$) is connected to ground through ($R_E=1\ \text{k}\Omega$).

##### Step 2 : Reflection of base resistance to the emitter

An emitter follower reflects the resistance seen at the base to the emitter divided by the factor ($\beta+1$). Thus the ($10\ \text{k}\Omega$) at the base is seen at the emitter approximately as  

$$R_{B,\text{ref}}=\frac{R_B}{\beta+1}=\frac{10,000}{100+1}=\frac{10,000}{101}=99.0099\ \Omega.$$

(We are using the usual emitter-follower reflection result. This is consistent with treating the transistor as an emitter follower around its DC bias — a small modelling approximation which is standard here.)

##### Step 3 : Combine with the emitter resistor

The emitter sees that reflected resistance in parallel with the actual emitter resistor ($R_E=1\ \text{k}\Omega$). So  

$$R_{Th} = R_E \parallel R_{B,\text{ref}} = \frac{1}{\frac{1}{1000}+\frac{1}{99.0099}}  
\approx 90.09\ \Omega.$$
---
#### Answer
$$\boxed{R_{Th}\approx 90.09\ \Omega}$$
