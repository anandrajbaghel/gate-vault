---
original: "[[ee_2018]]"
question paper: "[[ee_2018]]"
question: "[[ee_2018#^q1]]"
tags:
  - example/voltage-regulation
aliases:
  - "Example : Voltage Regulation of a Single-Phase Transformer"
---
### Voltage Regulation Example

![[ee_2018#^q1]]

---
#### Solution (step-by-step)

We are asked to find **percentage voltage regulation** of a transformer at 0.8 lagging power factor.
##### Step 1: Given data
- Transformer rating: $100\ \text{kVA}, 1000/100\ \text{V}, 50\ \text{Hz}$
- Full load voltage drop across series impedance = **5%**
- Of this, drop due to resistance = **3%**  
    → So: $$\%R = 3, \quad \%Z = 5$$
- Then: $$\%X = \sqrt{(\%Z)^2 - (\%R)^2} = \sqrt{25 - 9} = \sqrt{16} = 4$$So: $$\%R = 3,\ \%X = 4$$

##### Step 2: Formula for percentage regulation

At power factor $\cos\phi$ :

$$\%VR = \%R\cos\phi + \%X\sin\phi$$

Here:  
$\cos\phi = 0.8 \text{ lagging}$
$\sin\phi = \sqrt{1-0.8^2} = 0.6$
##### Step 3: Substitution

$$\%VR = (3)(0.8) + (4)(0.6) = 2.4 + 2.4 = 4.8$$

Answer: **(A) 4.8**.
