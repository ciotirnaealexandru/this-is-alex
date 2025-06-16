# Holbein and Linear Transformations

**Tags:**
<span class="linear-algebra">Linear Algebra</span>
<span class="python">Python</span>

## A linear algebra background

Throughout my first year of college, in my **Linear Algebra** class (in romanian, **Algebră liniară, geometrie analitică si ecuații diferențiale**), we studied the concept of **linear tranformations** and their real world applications.

Mathematically, we saw that any matrix **$A \in \mathcal{M}_{m,n}(\mathbb{R})$** defines a linear transformation **$f : \mathbb{R}^n \to \mathbb{R}^m$**, given by **$f(x) = Ax$**. One such linear transformation is the **shear transformation**, which can have the 2 following definitions: **$A =\begin{pmatrix} 1 & a\\ 0 & 1 \end{pmatrix}$** or **$\begin{pmatrix} 1 & 0\\ a & 1 \end{pmatrix}$**, **$a \in \mathbb{R} $**. 

Why would this be useful? Visually, a shear transform can be used to _warp_ a domain, and as such, change the appearance of an image. For example, let's consider the **horizontal sheer transformation**:

$$
\begin{pmatrix} x'\\ y' \end{pmatrix} = \begin{pmatrix} 1 & a\\ 0 & 1 \end{pmatrix} \begin{pmatrix} x\\ y \end{pmatrix}
$$

If we multiply the right side, we see that we basically assign the old $\begin{pmatrix} x, y \end{pmatrix}$ coordonate pair a new $\begin{pmatrix} x', y' \end{pmatrix}$ point in space:

$$
\begin{pmatrix} x'\\ y' \end{pmatrix} = \begin{pmatrix} x + ay\\ y \end{pmatrix} 
$$

This is a **graphical interpretation** of a horizontal shear transformation applied over a square domain. We applied this transformation for each point in that domain:

<img src='images/Holbein_and_Linear_Transformations/shear.png' alt='linear_transformation' class='full'>

## "The Ambassadors", by H. Holbein

<img src='images/Holbein_and_Linear_Transformations/The_Ambassadors.jpg' alt='linear_transformation' class='semi'>
