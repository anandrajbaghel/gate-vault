---
tags:
  - signal-processing
  - signals-and-systems
  - lti-systems
  - convolution
  - convolution-properties
  - gate-ee
created: 2025-09-24
aliases:
  - Convolution Properties
  - "Properties : Convolution"
subject: "[[Signals & Systems]]"
parent:
  - "[[LTI|Linear Time-Invariant (LTI) Systems]]"
formula:
  - "Shifting Property : $$\\text{If } x(t)*h(t)=y(t) \\implies x(t - t_1) * h(t - t_2) = y(t - t_1 - t_2)$$"
modified: 2026-07-22T14:21:12
---
### Properties of Convolution
#convolution-properties #lti-systems

> ==The convolution operation, while appearing complex, adheres to a set of algebraic properties that are analogous to multiplication.== These properties—**Commutativity, Associativity, and Distributivity**—are fundamental to simplifying the analysis of [[LTI|Linear Time-Invariant (LTI) systems]] and manipulating expressions involving cascaded or parallel system configurations.

#### Commutative Property
#commutative-property

The order in which two signals are convolved does not affect the result.

$$\boxed{\quad x(t) * h(t) = h(t) * x(t) \quad}$$
**Implication**: When performing [[Graphical and Analytical Convolution|graphical convolution]], you can choose whichever signal is simpler to "flip and shift".
$$\int_{-\infty}^{\infty} x(\tau) h(t-\tau) d\tau = \int_{-\infty}^{\infty} h(\tau) x(t-\tau) d\tau$$

---
#### Associative Property
#associative-property

For multiple convolutions in series, the order of grouping does not matter.
$$\boxed{\quad [x(t) * h_1(t)] * h_2(t) = x(t) * [h_1(t) * h_2(t)] \quad}$$
**Implication (Systems in Cascade)**: If two LTI systems with impulse responses $h_1(t)$ and $h_2(t)$ are connected in cascade, the overall equivalent impulse response is the convolution of the individual responses.
$$h_{eq}(t) = h_1(t) * h_2(t)$$
The output of the cascaded system can be found by convolving the input with this equivalent impulse response.

---
#### Distributive Property
#distributive-property

Convolution distributes over addition.
$$\boxed{\quad x(t) * [h_1(t) + h_2(t)] = [x(t) * h_1(t)] + [x(t) * h_2(t)] \quad}$$
**Implication (Systems in Parallel)**: If two LTI systems with impulse responses $h_1(t)$ and $h_2(t)$ are connected in parallel, the overall equivalent impulse response is the sum of the individual responses.
$$h_{eq}(t) = h_1(t) + h_2(t)$$
The output of the parallel system is the sum of the outputs of each individual branch.

---
#### Other Key Convolution Properties
#convolution-identities

##### Identity Element
#convolution/property/identity-element

The unit impulse function, $\delta(t)$, acts as the identity element for convolution. Convolving any signal with an impulse yields the original signal.
$$\boxed{\quad x(t) * \delta(t) = x(t) \quad}$$
Convolving with a **shifted impulse** results in a shifted version of the original signal.
$$\boxed{\quad x(t) * \delta(t - t_0) = x(t - t_0) \quad}$$

---
##### Shifting Property
#convolution/property/shifting

==If $x(t) * h(t) = y(t)$, then shifting both signals results in the output being shifted by the sum of the individual shifts.==
$$\boxed{\quad x(t - t_1) * h(t - t_2) = y(t - t_1 - t_2) \quad}$$

> [!pyq]- PYQ : 2021
> ![[ee_2021#^q7]]

---
##### Differentiation Property
#convolution/property/differentiation 

The derivative of a convolution can be taken on either of the signals before convolving.
$$\boxed{\quad \frac{d}{dt} [x(t) * h(t)] = \frac{dx(t)}{dt} * h(t) = x(t) * \frac{dh(t)}{dt} \quad}$$
This is particularly useful for signals with step discontinuities, as their derivatives are impulses, simplifying the convolution. For example, convolving two rectangular pulses can be simplified by differentiating them twice to get impulses.

---
### Related Concepts
#convolution-properties/related-concepts

> [[Continuous-Time Convolution Integral]]

[[Discrete-Time Convolution Sum]]
[[Impulse Response of an LTI System]]
[[Graphical and Analytical Convolution]]
[[Continuous-Time Unit Impulse and Unit Step Functions]]