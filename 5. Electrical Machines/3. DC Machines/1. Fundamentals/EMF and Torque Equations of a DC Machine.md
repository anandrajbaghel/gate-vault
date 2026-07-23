---
tags:
  - electrical-machines
  - dc-machines
  - emf-equation
  - torque-equation
created: 2025-09-15
aliases:
  - DC Machine Equations
  - EMF Equation of DC Machine
  - Torque Equation of DC Machine
  - Power Balance Equation for DC Machine
  - Machine Constant, K
  - Why do we sometimes use Eg and sometimes Eb?
  - Back EMF
subject: "[[Electrical Machines]]"
parent:
  - DC Machines
formula:
  - "Machine Constant (K) : $$K = \\frac{PZ}{2\\pi A}$$"
  - "EMF Equation for DC Machine : $$E = \\frac{\\phi Z N P}{60 A}$$"
modified: 2026-07-23T20:39:27
---
### EMF and Torque Equations of a DC Machine
#dc-machines #emf-equation #torque-equation

> The performance of a DC machine, both as a generator and a motor, is governed by two fundamental equations: the **EMF equation** and the **Torque equation**. These equations are interconnected and link the machine's electrical quantities (voltage, current) with its mechanical quantities (speed, torque) through the magnetic flux.

#### EMF Equation
#emf-equation #dc-generator #dc-motor

The EMF equation is derived from Faraday's Law of electromagnetic induction. It gives the magnitude of the EMF induced in the armature winding.

Core EMF relation (permanent) : $E$ is proportional to flux and speed.
$$\boxed{\quad E = \frac{\phi Z N P}{60 A} \quad}$$
Simplified (define machine constant $K$):
$$K = \frac{PZ}{2\pi A} \quad\Rightarrow\quad E = K\phi\omega$$

- $N$ is in rpm in the upper formula;
- $\omega$ is in rad/s in the lower formula.

> [!faq] Why do we sometimes use $E_g$ and sometimes $E_b$?
> ==The general equation for induced EMF ($E$) is exactly the same for both motors and generators:==
> $$E = \frac{\phi Z N P}{60 A}$$
> - **In a Generator:** The induced EMF is the main source voltage, denoted as **Generated EMF** ($E_g$).
> - **In a Motor:** The same induced EMF opposes the applied supply voltage ($V$), so it is called **Back EMF** ($E_b$).
> 
> ==Mathematically and physically, $E = E_g = E_b$. The different subscripts just indicate the machine's current operating mode.==
^emf-faq

##### Derivation
1.  **Flux cut by one conductor in one revolution**:
    In one revolution, a conductor cuts the flux from all $P$ poles.
    Total flux cut = $\phi \times P$ Webers.
2.  **Time taken for one revolution**:
    If the armature rotates at $N$ revolutions per minute (RPM), the time for one revolution is $t = \frac{60}{N}$ seconds.
3.  **Average EMF induced in one conductor**:
    According to [[Faraday's Law in Integral and Point Form#Integral Form of Faraday's Law|Faraday's law]], $e_{avg} = \frac{\text{Total Flux Cut}}{\text{Time Taken}} = \frac{\phi P}{60/N} = \frac{\phi P N}{60}$ Volts.
4.  **Total EMF induced in the armature**:
    Let $Z$ be the total number of [[Armature Winding (Lap and Wave)|armature conductors]] and $A$ be the number of parallel paths in the winding. The number of conductors in series in each path is $Z/A$.
    The total EMF across the brushes is the EMF generated in any one of the parallel paths.
    $$E = (\text{average EMF per conductor}) \times (\text{number of conductors in series per path})$$
    $$E = \left(\frac{\phi P N}{60}\right) \times \left(\frac{Z}{A}\right)$$

This leads to the general EMF equation for a DC machine:
$$\boxed{\quad E = \frac{\phi Z N P}{60 A} \quad}$$
Where:
-   $E$ = Induced EMF (Volts). This is $E_g$ (Generated EMF) for a generator and $E_b$ (Back EMF) for a motor.
-   $\phi$ = Flux per pole (Wb)
-   $Z$ = Total number of armature conductors
-   $N$ = Speed of the armature in RPM
-   $P$ = Number of poles
-   $A$ = Number of parallel paths
    -   For a **[[Armature Winding (Lap and Wave)#Lap Winding|Lap winding]]**: $A = P$
    -   For a **[[Armature Winding (Lap and Wave)#Wave Winding|Wave winding]]**: $A = 2$

For a specific machine, the values of $Z, P,$ and $A$ are constant. Therefore, the induced EMF is directly proportional to the speed and flux:
$$ E \propto \phi N $$

---
##### Terminal Voltage and EMF Relationship
#terminal-voltage

The relationship between the terminal voltage ($V$) and the induced EMF depends entirely on the [[#^emf-faq|machine's operating mode (generator vs. motor)]]. By applying [[Kirchhoff's Laws#Kirchhoff's Voltage Law (KVL)|Kirchhoff's Voltage Law]] to the armature circuit, we get the following relationships:

###### 1. For a DC Generator
#dc-generator 

The machine produces power. The generated EMF ($E_g$) must supply the terminal voltage plus the internal voltage drop across the armature resistance.
$$E_g = V + I_a R_a + V_{drop}$$

###### 2. For a DC Motor
#dc-motor 

The machine consumes power. The applied terminal voltage ($V$) must overcome the opposing back EMF ($E_b$) plus the internal voltage drop across the armature resistance.
$$V = E_b + I_a R_a + V_{drop}$$
$$\Rightarrow E_b = V - I_a R_a - V_{drop}$$

where,
- $V$ = Terminal voltage (Volts)
- $I_a$ = Armature current (Amps)
- $R_a$ = Armature circuit resistance (Ohms)
- $V_{drop}$ = Brush voltage drop (often neglected in ideal calculations, typically 1-2V per brush).

---
#### Torque Equation
#torque-equation #dc-motor #electromagnetic-torque

The torque equation gives the magnitude of the electromagnetic torque developed by the armature. It is derived from the power balance principle.

> [!memory] Core Torque relation (permanent)
> Torque $\propto$ flux $\times$ armature current.
> $$T_a = \frac{PZ}{2\pi A}\,\phi\,I_a = K\,\phi\,I_a$$
> Where $K$ is the same machine constant as in the EMF equation.

##### Derivation
#torque-equation/derivation

1.  **Power Converted in Armature**:
    The electrical power converted into mechanical power by the motor armature is $P_{dev} = E_b I_a$.
2.  **Mechanical Power Expression**:
    The mechanical power developed can also be expressed in terms of armature torque ($T_a$) and angular speed ($\omega$).
    $P_{dev} = T_a \times \omega$, where $\omega = \frac{2\pi N}{60}$ rad/s.
3.  **Equating Power Expressions**:
    $$T_a \times \frac{2\pi N}{60} = E_b I_a$$
    Solving for $T_a$:
    $$T_a = \frac{60}{2\pi N} E_b I_a$$
4.  **Substituting the EMF Equation**:
    Substitute $E_b = \frac{\phi Z N P}{60 A}$ into the expression for $T_a$:
    $$T_a = \frac{60}{2\pi N} \left(\frac{\phi Z N P}{60 A}\right) I_a$$
    The terms $60$ and $N$ cancel out, giving the final torque equation:
$$\boxed{\quad T_a = \frac{PZ}{2\pi A} \phi I_a \quad}$$
Where:
-   $T_a$ = Armature torque or electromagnetic torque (N-m)
-   $I_a$ = Armature current (A)

Since $\frac{PZ}{2\pi A}$ is a constant for a given machine, the armature torque is directly proportional to the flux and the armature current:
$$ T_a \propto \phi I_a $$

##### Armature Torque vs. Shaft Torque
#armature-torque #shaft-torque 

- **Armature Torque ($T_a$)**: The total torque developed by the armature.
- **Shaft Torque ($T_{sh}$)**: The useful torque available at the motor shaft. It is less than $T_a$ because some of the armature torque is used to overcome the machine's rotational losses (friction, windage, and iron losses). $$T_a = T_{sh} + T_{loss}$$

---
#### Key Relationships and Machine Constant
#machine-constant #power-balance

The EMF and torque equations can be simplified by defining a **machine constant**.

Let the constant $K = \frac{PZ}{2\pi A}$. The equations become:
1.  **Torque**:
    $$ T_a = K \phi I_a $$
2.  **EMF**:
    The EMF can be expressed in terms of angular speed $\omega$:
    $$ E = \frac{\phi Z N P}{60 A} = \left(\frac{PZ}{2\pi A}\right) \phi \left(\frac{2\pi N}{60}\right) $$
    $$\boxed{\quad E = K \phi \omega \quad}$$

These two simple relations show that for a DC machine, the *same machine constant* connects EMF with speed and torque with current.

**Power Balance Equation:** The fundamental relationship connecting the electrical and mechanical domains is:
$$ P_{dev} = E I_a = T_a \omega $$

---
#### Speed Equation (Derived from EMF)
#speed-equation

The speed equation of a DC motor is a direct rearrangement of the general EMF equation. Starting with the back EMF:
$$E_b = \frac{\phi Z N P}{60 A}$$
We can isolate the speed ($N$ in RPM):
$$N = \left(\frac{60 A}{Z P}\right) \frac{E_b}{\phi}$$
Because the term $\left(\frac{60 A}{Z P}\right)$ is constant for a constructed machine, we get the fundamental proportional relationship for speed:
$$N \propto \frac{E_b}{\phi}$$
By applying Kirchhoff's Voltage Law to the armature circuit ($E_b = V - I_a R_a$), the practical speed equation becomes:
$$N \propto \frac{V - I_a R_a}{\phi}$$

---
### Related Concepts
#dc-machines/related-concepts

> [[Principle of Operation of DC Generators]]

[[Principle of Operation of DC Motors]]
[[Constructional Features of DC Machines]]
[[Speed Control of DC Motors]]
[[Losses, Efficiency, and Testing of DC Machines]]