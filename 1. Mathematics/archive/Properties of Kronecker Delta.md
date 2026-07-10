---
tags:
  - kronecker-delta/properties
  - kronecker-delta
---
### Kronecker Delta - Properties Table

| **Property / Identity**                    | **Expression / Description**                                                                |
| ------------------------------------------ | ------------------------------------------------------------------------------------------- |
| **Definition**                             | $$\delta_{ij} = \begin{cases} 1 & i = j \\ 0 & i \ne j \end{cases}$$                        |
| **Symmetry**                               | $$\delta_{ij} = \delta_{ji}$$                                                               |
| **Sifting Property (Summation)**           | $\sum_j \delta_{ij} a_j = a_i - \text{ picks the } i^{th} \text{ element from vector } a_j$ |
| **Multiplication Property**                | $$\delta_{ij} \cdot a_j = a_i$$                                                             |
| **Orthogonality of Basis Vectors**         | $$\vec{e}_i \cdot \vec{e}_j = \delta_{ij}$$                                                 |
| **Trace of Identity Matrix**               | $\sum_i \delta_{ii} = n$ for $n \times n$ identity matrix                                   |
| **Tensor Contraction (Einstein notation)** | Used to reduce indices $$\delta^i_j a^j = a^i$$                                             |
| **Identity Matrix Representation**         | $I_{ij} = \delta_{ij} - \text{ identity matrix elements}$                                   |
| **Invariance under Index Renaming**        | $\delta_{ij} = \delta_{kl}$ when $i = k, j = l$                                             |
| **Index Replacement Rule**                 | $\delta_{ij} a_j = a_i$ – replaces $j$ with $i$ in expression                               |
