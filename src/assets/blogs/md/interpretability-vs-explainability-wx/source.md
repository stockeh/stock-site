## Mini-Batch Scaled Conjugate Gradient
*Sep 23, 2022*  
&nbsp;  
&nbsp;  

Scaled Conjugate Gradient (SCG) is an effective full-batch learning algorithms when trained on data that can fit in memory. ImageNet, however, is too large for full-batch optimization, but could we use a large enough batch (e.g. 1024 samples) to get a good representation of the data during optimization?

#### Equations

$$
\begin{equation}
g\left(k\right) = \binom{n}{k} p^k\left(1-p\right)^{n-k}
\label{1}
\end{equation}
$$
where,

$$
\begin{equation}
  w \leftarrow w - \eta \nabla_w \mathcal{L}(f)
\label{e}
\end{equation}
$$
something,

$$
\begin{equation}
\begin{aligned} 
\sin 2\theta = 2\sin \theta \cos \theta \\ = \cfrac{2 \tan \theta}{1+\tan^2 \theta} 
\end{aligned} 
\label{1-1}
\end{equation}
$$

#### Code

```bash
nohup python -u imagenet.py -a alexnet --epochs 9 -b 20000 -o scg --gpu 0 --exp-id 3 > log.out &

nohup python -u imagenet.py -a alexnet --epochs 12 --lr 0.01 -b 512 -o sgd --gpu 0 --exp-id 1 > log.out &

model   top1 scg       top5 scg       top1 sgd        top5 sgd
------- -------------- -------------- --------------- ---------------
alexnet 0.098 +- 0.000 0.508 +- 0.000 39.770 +- 0.000 65.286 +- 0.000

average 0.098          0.508          39.770          65.286
```
#### Images

![alt](progressive_cascade_nets_1.png)
![alt](scg_alg_01.png)
![alt](scg_alg_02.png)
<p>Cool, eh?</p>

