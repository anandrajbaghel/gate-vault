---
tags:
  - control-systems
  - system-modeling
  - feedback
  - open-loop
  - closed-loop
created: 2025-09-20
aliases:
  - Open-Loop Control
  - Closed-Loop Control
  - Feedback Control Systems
  - "Example : Open-Loop Control Systems"
  - "Example : Close-Loop Control Systems"
  - Closed-Loop System
  - Open-Loop System
  - closed-loop feedback control system
subject: "[[Control Systems]]"
parent:
  - Control System Modeling
modified: 2026-07-23T08:13:22
---
### Open-Loop and Closed-Loop (Feedback) Control Systems
#control-systems/fundamentals #open-loop #closed-loop #feedback-control

> A **control system** is a system of devices that manages, commands, directs, or regulates the behavior of other devices or systems to achieve a desired result. [[Control Systems]] are broadly classified into two types: open-loop systems and closed-loop systems, distinguished by the absence or presence of a feedback path.

#### Open-Loop Control System
#open-loop-system

==An open-loop control system is one in which the control action is independent of the 'output' or the result. It acts solely on the basis of the input signal, following a pre-set command without self-correction.==

##### Block Diagram
#ols/block-diagram 

The output is not fed back to the input for comparison or correction.

![[Open-Loop Control System.jpg]]

---
##### Characteristics
#ols/characteristics 

- **Simple and Economical:** Easy to construct and maintain due to fewer components.
- **Inaccurate:** Its accuracy depends heavily on prior calibration. It cannot compensate for unforeseen errors.
- **Sensitive to Disturbances:** External disturbances and variations in system parameters can significantly affect the output, as there is no mechanism to correct for them.
- **Stability:** These systems are generally stable.

> [!Example] Examples
> #ols/examples 
> 
> - **Automatic Toaster:** Operates based on a preset timer, regardless of whether the toast is perfectly browned or burnt.
> - **Traffic Lights:** Operate on a fixed time sequence, irrespective of the actual traffic density on the roads.
> - **Simple Washing Machine:** Runs through a pre-set cycle of wash, rinse, and spin based on a timer, without checking if the clothes are actually clean.

---
#### Closed-Loop (Feedback) Control System
#closed-loop-system #feedback

A closed-loop control system, ==also known as a **feedback control system**, is one in which the control action is dependent on the output. The system uses a feedback signal from the output to continuously adjust the input to the controller, thereby minimizing errors==.

##### Block Diagram
#cls/block-diagram

![[Closed-Loop Control System Block Diagram.jpg]]

-   **Reference Input $r(t)$**: The desired output value.
-   **Output $c(t)$**: The actual output of the system (process/plant).
-   **Feedback Signal $b(t)$**: A signal derived from the output, typically via a sensor, for comparison with the input.
-   **Error Signal $e(t)$**: The difference between the reference input and the feedback signal.
    $$\boxed{\quad e(t) = r(t) - b(t) \quad}$$
    The controller acts on this error signal to drive the output towards the desired value.

> [!refer]
> [[Steady State Error for Non-Unity Feedback System]]

---
##### Characteristics
#cls/characteristics 

- **Complex and Costly:** Requires more components, including sensors and comparators, making it more complex and expensive.
- **Highly Accurate:** The feedback mechanism allows the system to correct for errors and maintain the output close to the desired value.
- **Reduced Sensitivity:** It is less sensitive to external disturbances and variations in internal system parameters.
- **Potential for Instability:** The feedback can sometimes lead to oscillations or instability if not designed properly. Stability is a major design consideration.
- **Bandwidth:** The bandwidth of the system is often increased.

> [!Example] Examples
> #cls/examples 
> 
> - **Air Conditioner with Thermostat:** The thermostat measures the room temperature (output) and compares it to the set temperature (input). It turns the compressor on or off to reduce the temperature error.
> - **Automobile Cruise Control:** The vehicle's speed is measured and fed back to the controller, which adjusts the throttle to maintain the desired speed despite disturbances like hills.
> - **Human Body:** The regulation of body temperature, blood pressure, and blood sugar are all examples of complex biological feedback control systems.

---
#### Comparison of Open-Loop and Closed-Loop Systems
#system-comparison

| Feature                   | Open-Loop Control System       | Closed-Loop (Feedback) Control System |
| ------------------------- | ------------------------------ | ------------------------------------- |
| **Feedback Path**         | Does not exist                 | Exists                                |
| **Complexity & Cost**     | Simple & Less expensive        | Complex & More expensive              |
| **Accuracy**              | Low, depends on calibration    | High, due to error correction         |
| **Stability**             | Generally stable               | Stability is a major design concern   |
| **Sensitivity**           | High to disturbances & params  | Low to disturbances & params          |
| **Calibration**           | Requires regular recalibration | Less need for recalibration           |
| **Example**               | Traffic Light, Toaster         | Cruise Control, Air Conditioner       |

---
### Related Concepts
#control-systems/related-concepts

> [[Effect of Feedback on System Performance]]

[[Transfer Function and Impulse Response]]
[[Block Diagram Representation]]
[[Block Diagram Reduction]]
[[Steady-State Error]]
[[Steady-State Error for Disturbances]]
[[Routh-Hurwitz Stability Criterion]]
[[Control System Modeling]]
