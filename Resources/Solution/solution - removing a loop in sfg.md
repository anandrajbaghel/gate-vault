---
original: "[[ee_2020.pdf]]"
question paper: "[[ee_2020]]"
question: "[[ee_2020#^q13]]"
aliases:
  - "Example : Removing a Loop in SFG"
tags:
  - example/sfg/removing-a-loop
---
### Removing a Loop in SFG Example

![[ee_2020#^q13]]

---
#### Solution (step-by-step)

Since there are 5 nodes;

We will resolve small $\boxed{\quad cd \quad}$ loop

Treat the small loop as a local feedback around the block from node-3 to node-4. Solve the two-node relations:
$$\begin{aligned} n_4 &= d\,n_3,\\ n_3 &= a\,n_2 + c\,n_4. \end{aligned}$$
Eliminate $n_3$​ and $n_4$​ to get an _effective_ transfer from node-2 to node-4:
$$n_4 = \frac{a d}{1 - d c}\; n_2$$

Equivalently you can view this as replacing the original single branch $d$ by an **equivalent branch**
$$d'=\frac{d}{1 - d c}$$​

---
#### Answer

**Option (C)** is the correct option

