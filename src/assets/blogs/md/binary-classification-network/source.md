## Mini-Batch Scaled Conjugate Gradient
*Sep 23, 2022*  
&nbsp;  
&nbsp;  

Scaled Conjugate Gradient (SCG) is an effective full-batch learning algorithms when trained on data that can fit in memory. ImageNet, however, is too large for full-batch optimization, but could we use a large enough batch (e.g. 1024 samples) to get a good representation of the data during optimization?

https://stats.stackexchange.com/questions/207049/neural-network-for-binary-classification-use-1-or-2-output-neurons

https://web.stanford.edu/~nanbhas/blog/sigmoid-softmax/

Mutally Exclusive 

#### Equations

$$
\begin{equation}
g\left(k\right) = \binom{n}{k} p^k\left(1-p\right)^{n-k}
\label{1}
\end{equation}
$$
where,