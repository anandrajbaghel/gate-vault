---
tags:
  - probability-theory
  - axioms-of-probability
  - random-variables
  - engineering-math
created: 2025-09-15
aliases:
  - Kolmogorov Axioms
  - Probability Axioms
  - Andrey Kolmogorov
subject: "[[Mathematics]]"
parent:
  - Probability and Statistics
confidence: 10
---
### Axioms of Probability
#axioms-of-probability #kolmogorov-axioms #probability-theory

> The **Axioms of Probability**, formulated by Andrey Kolmogorov, are the three fundamental rules that form the bedrock of modern probability theory. These axioms are not proven; rather, they are the self-evident truths upon which the entire framework of probability is built. Any function that assigns a probability to an event must satisfy these three rules. From these axioms, all other properties of probability (such as the complement rule or the addition rule for non-mutually exclusive events) can be logically derived.

#### The Setup

Before stating the axioms, we need a few definitions:
* **Sample Space ($S$)**: The set of all possible outcomes of a random experiment.
* **Event ($A$)**: A subset of the sample space $S$.
* **Probability Measure ($P$)**: A function that assigns a real number $P(A)$ to every event $A$.

The axioms define the properties this function $P$ must have.

---
#### The Three Axioms

##### Axiom 1: Non-negativity

The probability of any event is a non-negative real number.
$$\boxed{\quad P(A) \ge 0 \quad}$$
*   **Interpretation**: An event cannot have a negative chance of occurring.

##### Axiom 2: Certainty (Normalization)

The probability of the entire sample space is 1.
$$\boxed{\quad P(S) = 1 \quad}$$
*   **Interpretation**: It is a certainty that one of the possible outcomes in the sample space will occur.

##### Axiom 3: Additivity

For any sequence of **mutually exclusive** (disjoint) events $A_1, A_2, \dots, A_n$, the probability that at least one of these events occurs is the sum of their individual probabilities.
$$\text{If } A_i \cap A_j = \emptyset \text{ for all } i \neq j \text{, then:}$$
$$\boxed{\quad P(A_1 \cup A_2 \cup \dots \cup A_n) = \sum_{i=1}^n P(A_i) \quad}$$
*   **Interpretation**: This is the "OR" rule for events that cannot happen at the same time. If event A has a 1/6 chance and event B has a 1/6 chance and they can't both happen, the chance of "A or B" is 1/6 + 1/6 = 2/6.

---
#### Important Corollaries (Derived Properties)

These are direct logical consequences of the three axioms.
1.  **Probability of the Impossible Event**: The probability of the empty set (an impossible event) is zero.
    $$P(\emptyset) = 0$$
2.  **Range of Probability**: The probability of any event is between 0 and 1, inclusive.
    $$0 \le P(A) \le 1$$
3.  **The Complement Rule**: The probability that an event $A$ does not occur (denoted $A'$, $A^c$, or $\bar{A}$) is 1 minus the probability that it does occur.
    $$\boxed{\quad P(A') = 1 - P(A) \quad}$$
4.  **The General Addition Rule**: For any two events $A$ and $B$ (not necessarily mutually exclusive), the probability of their union is:
    $$\boxed{\quad P(A \cup B) = P(A) + P(B) - P(A \cap B) \quad}$$
    This formula corrects for the "double counting" of the outcomes that are in both events. If $A$ and $B$ are mutually exclusive, $P(A \cap B) = 0$, and this reduces to Axiom 3.

---
### Related Concepts
#probability-theory/related-concepts 

> [[Conditional Probability]]

[[Bayes' Theorem]]
[[Random Variables]]
[[Set Theory]]