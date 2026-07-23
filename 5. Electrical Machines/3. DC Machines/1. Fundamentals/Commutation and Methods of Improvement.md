---
tags:
  - electrical-machines
  - dc-machines
  - commutation
  - interpoles
created: 2025-09-15
aliases:
  - Commutation Process
  - Improving Commutation
  - Sparkless Commutation
  - Interpoles
  - Reactance Voltage
subject: "[[Electrical Machines]]"
parent:
  - DC Machines
modified: 2026-07-16
---
### Commutation and Methods of Improvement
#commutation #dc-machines #interpoles

> **Commutation** is the process of reversing the direction of current in an armature coil as it passes through the brushes. This process takes place when the commutator segments connected to the coil are short-circuited by a brush. The primary goal is to achieve this current reversal smoothly and without sparking, a condition known as **sparkless commutation**.

#### The Commutation Process
#commutation/process 

As the armature rotates, a coil moves from being under the influence of a North pole to a South pole (or vice versa). To maintain a unidirectional torque (in a motor) or output voltage (in a generator), the direction of current in this coil must be reversed exactly when it passes through the **Magnetic Neutral Axis (MNA)**. The commutator and brushes are designed to facilitate this reversal. The brief period during which a coil is short-circuited by a brush is called the **commutation period ($T_c$)**.

---
#### Problems with Commutation: Reactance Voltage
#commutation/problem #reactance-voltage 

Ideal commutation involves a linear reversal of current from $+I_c$ to $-I_c$ during the period $T_c$. However, in practice, this is hindered by the self-inductance ($L$) of the armature coil.

1. **Self-Inductance**: The rapid change of current ($di/dt$) in the short-circuited coil induces an EMF in it according to Faraday's law. This is known as the **Reactance Voltage**. $$e_L = L \frac{di}{dt}$$
2. **Lenz's Law**: This self-induced EMF opposes the change in current, effectively delaying the reversal process.
3. **[[Armature Reaction|Armature Reaction]]**: The armature reaction shifts the MNA. As a result, the coil being commutated is not in a flux-free zone. It cuts some magnetic flux, inducing a rotational EMF. This EMF adds to the reactance voltage, making the commutation problem worse.

==The combined effect of these induced voltages is that the current reversal is not completed by the time the commutator segment leaves the brush. The delayed current is forced to jump from the commutator to the brush in the form of an arc, causing **sparking**.==

> [!memory] Consequences of Poor Commutation
> 1. ==Severe sparking at the brushes.==
> 2. Pitting and rapid wear of the commutator surface and brushes.
> 3. Reduced efficiency and potential for flashover (arcing between brushes).

---
#### Methods for Improving Commutation

The key to achieving smooth commutation is to neutralize the reactance voltage. This is primarily done using **EMF Commutation**.

##### 1. Resistance Commutation
#resistance-commutation

This method involves using brushes with high contact resistance, such as **carbon brushes**.
* **Mechanism**: As a commutator segment begins to move out from under a brush, the contact area decreases. This increases the resistance of the path for the current that has not yet reversed. This high resistance forces the current to follow the alternate, lower-resistance path through the incoming commutator segment, thus aiding the reversal.
* **Limitation**: This method alone is sufficient only for small, low-speed DC machines.

---
##### 2. EMF Commutation
#emf-commutation

The most effective method is to induce a "commutating EMF" or "reversing EMF" in the short-circuited coil that is equal in magnitude and opposite in direction to the reactance voltage.
$$\text{Reversing EMF} + \text{Reactance Voltage} = 0$$
This is achieved by using **Interpoles**.

###### Using Interpoles (Commutating Poles)
#interpoles


| ![[DC - Cross-sectional view of the general arrangements of a dc machine2.png]] | ![[DC - Cross-sectional view of the general arrangements of a dc machine.png]] |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |

Interpoles are the universal modern solution for achieving excellent commutation.
* **Construction**: They are narrow poles placed in the interpolar gap, midway between the main poles.
* **Connection**: The interpole winding is connected in **series with the armature winding**.

**Action of Interpoles:**
#interpoles/action 

1. **Neutralizing Reactance Voltage**: The interpole winding creates a magnetic field in the commutating zone. As the short-circuited coil moves through this field, it induces the required reversing EMF. Since the interpole winding carries the armature current ($I_a$), the interpole flux is proportional to $I_a$. The reactance voltage is also proportional to $I_a$. Therefore, the canceling effect is automatic and effective at all loads.
2. **Neutralizing Armature Reaction**: The flux produced by the interpoles also opposes and cancels the [[Armature Reaction#1. Cross-Magnetizing Effect|cross-magnetizing flux]] created by the [[Armature Reaction|armature reaction]] in the commutating zone. This keeps the MNA fixed at the GNA, ensuring the commutated coil is in the ideal position.

**Polarity of Interpoles:** The polarity of the interpole must be correct to induce the reversing EMF in the right direction.

#interpoles/polarity #interpoles/polarity/generator #interpoles/polarity/motor 

1. For a **Generator**: The polarity of an interpole is the **same** as that of the **next main pole** ahead in the direction of rotation.
2. For a **Motor**: The polarity of an interpole is the **same** as that of the **previous main pole** behind in the direction of rotation.


---
### Related Concepts
#commutation/related-concepts

> [[Armature Reaction]]

[[Constructional Features of DC Machines]]
[[Compensating Windings]]
[[EMF and Torque Equations of a DC Machine]]
[[Mitigation Techniques in Machines]]