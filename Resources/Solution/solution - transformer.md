---
original: "[[ee_2025.pdf]]"
question paper: "[[ee_2025]]"
question: "[[ee_2025#^q43]]"
tags:
  - example/transformer
aliases:
  - "Example : Transformer 3-Phase"
---
### Transformer

![[ee_2025#^q43]]

---
#### Solution (step-by-step)

**Reason:** primary is Y so ($I_A$) is the phase current of that winding. Each primary phase is linked to one secondary delta winding, so by ampere-turns  
$$I_a=\frac{N_p}{N_s}I_A=2I_A,\quad I_b=2I_B,\quad I_c=2I_C.$$  
For the delta corner $a$ the line current is the difference of the two adjacent delta branch currents (with the sign convention used in the figure)  
$$I_{ad}=I_a-I_c=2I_A-2I_C=2\big(1-e^{j120^\circ}\big)I_A.$$  
Compute the phasor factor:  
$$2(1-e^{j120^\circ})=2\sqrt3\angle(-30^\circ).$$  
Thus $|I_{ad}|=2\sqrt3,|I_A|$ so  
$$\frac{|I_A|}{|I_{ad}|}=\frac{1}{2\sqrt3},$$  
and $I_{ad}$ lags $I_A$ by $30^\circ$.

---
###### Answer

**(A) $|I_A|/|I_{ad}| = 1/(2\sqrt{3})$ and $I_{ad}$ lags $I_A$ by 30°**
