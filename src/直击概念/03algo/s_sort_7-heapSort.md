# 堆排序 Heap Sort

堆排序可以说是一种利用堆的概念来排序的选择排序。

## 简介

堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：**即子结点的键值或索引总是小于（或者大于）它的父节点**。

## 算法描述

1. 将初始待排序关键字序列(R1,R2....Rn)构建成大顶堆，此堆为初始的无序区；
2. 将堆顶元素 R[1]与最后一个元素 R[n]交换，此时得到新的无序区(R1,R2,......Rn-1)和新的有序区(Rn),且满足 R[1,2...n-1]<=R[n]；
3. 由于交换后新的堆顶 R[1]可能违反堆的性质，因此需要对当前无序区(R1,R2,......Rn-1)调整为新堆，然后再次将 R[1]与无序区最后一个元素交换，得到新的无序区(R1,R2....Rn-2)和新的有序区(Rn-1,Rn)。不断重复此过程直到有序区的元素个数为 n-1，则整个排序过程完成。

<Image alt="堆排序动图演示" src="/03algo/heapSort.gif" />

## 算法实现

[堆排序实现](../../编写代码/03algo/c_sort_7-heapSort/c_sort_7-heapSort.md)

## 算法分析

- 最佳情况：T(n) = O(nlogn)
- 最差情况：T(n) = O(nlogn)
- 平均情况：T(n) = O(nlogn)

## 参考

- [十大经典排序算法总结（JavaScript 描述）](https://juejin.cn/post/6844903444365443080)
