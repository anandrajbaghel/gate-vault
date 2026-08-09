> [!question] GATE 2011 EE Question 6
> **Reference:** [[ee_2011#^q6]]
> 
> A three-phase, salient pole synchronous motor is connected to an infinite bus. It is operated at no load at normal excitation. The field excitation of the motor is first reduced to zero and then increased in the reverse direction gradually. Then the armature current:
> (A) increases continuously
> (B) first increases and then decreases steeply
> (C) first decreases and then increases steeply
> (D) remains constant
> 
> **Official Answer Key Verification:** **(B)** first increases and then decreases steeply

### Solution & Technical Breakdown

**1. Normal Excitation to Zero Excitation:**
At no load and normal excitation, the induced EMF $E$ is approximately equal to the infinite bus voltage $V$. The armature current $I_a$ is nearly zero.
$$I_a \approx \frac{V - E}{X_d} \approx 0$$
As the field excitation $E$ is reduced to zero, the machine runs purely as a reluctance motor. It must draw lagging reactive current from the infinite bus to establish the required magnetic flux. Therefore, $I_a$ **increases** to a value of approximately $V / X_d$.

**2. Zero to Reverse Excitation:**
When the field current is reversed, the induced EMF $E$ becomes negative relative to the stator field. The voltage difference increases:
$$I_a \approx \frac{V - (-E)}{X_d} = \frac{V + |E|}{X_d}$$
During this phase, the armature current $I_a$ **continues to increase**. 

**3. The Pole Slip:**
With reverse excitation, the rotor field poles actively oppose the stator poles. This creates a negative synchronous torque that opposes the stabilizing reluctance torque. 
When the reverse excitation reaches a critical magnitude, the reluctance torque can no longer hold the rotor in synchronism. The rotor becomes unstable and **slips by one pole pitch** (180 electrical degrees). 

**4. Post-Slip Drop (The Steep Decrease):**
By slipping 180 degrees, the rotor poles physically realign with the opposite stator poles. In this new locked position, the reversed field winding effectively acts as a *positive* (normal) excitation again. 

Because the magnitude of the reverse excitation had been gradually increased prior to the slip, the machine suddenly finds itself operating with high positive excitation in this new reference frame. The effective voltage difference abruptly drops back down to $(V - |E|)$, causing the armature current to **decrease steeply**.

> [!info] The V-Curve Limitation in Reverse Excitation
> It makes total sense to reach for the V-curve—it is the classic visualization for synchronous motor excitation and a great candidate for a conceptual node in a Zettelkasten system. However, relying purely on the standard V-curve can be misleading here because the curve assumes standard operating conditions and breaks down outside of stable, positive excitation. 
> 
> Here is the breakdown of why the V-curve actually points to an initial increase, and why it fails to predict the steep decrease:
> 
> ### 1. Normal Excitation to Zero: The Initial Increase
> On a standard no-load V-curve, the x-axis is Field Current ($I_f$) and the y-axis is Armature Current ($I_a$).
> * **The Starting Point:** "Normal excitation" at no-load corresponds to unity power factor. This is the absolute **minimum** point of $I_a$ (the bottom tip of the "V").
> * **Moving to Zero:** As you reduce the field excitation to zero, you move to the *left* along the curve into the under-excited region. The motor loses its internal magnetic field and must draw heavily lagging reactive current from the infinite bus just to magnetize the core. 
> * **Result:** $I_a$ slides up the left side of the "V", meaning the current **increases**. This initial step alone rules out option (C).
> 
> ### 2. Zero to Reverse Excitation: Off the Chart
> The standard V-curve only maps positive field current where the rotor is magnetically locked to the stator's rotating field. 
> * **Fighting the Stator:** When excitation is reversed, the rotor's magnetic poles actively repel the stator's poles. The motor only stays spinning at synchronous speed because the physical shape of the iron *salient poles* creates reluctance torque. The armature draws even more current to fight the growing repulsive magnetic field.
> * **The Pole Slip:** As the reverse field grows, the magnetic repulsion eventually overpowers the physical reluctance torque holding it together. The rotor loses its grip and violently "slips" backward by one pole pitch (180 electrical degrees).
> * **The Re-synchronization (Steep Decrease):** By physically slipping 180 degrees, the rotor's "reverse" poles suddenly align perfectly with the opposite stator poles. What was acting as a strong reverse excitation is instantly acting as a strong *forward* excitation in this new position. The machine suddenly snaps back to the stable, right side of the V-curve, causing the armature current to **decrease steeply**.

