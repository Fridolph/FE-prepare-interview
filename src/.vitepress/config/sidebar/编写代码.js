import { useCodingItem } from './usePath'

export default [
  // {
  //   text: '结合代码 & 手写题',
  //   items: [{ text: '如何利用该版块', link: '/编写代码/index' }],
  // },
  {
    text: '算法相关',
    collapsed: true,
    items: [
      useCodingItem('栈 stack', 'algo', 1, 'stack'),
      useCodingItem('队列 queue', 'algo', 2, 'queue'),
      useCodingItem('链表 linked list', 'algo', 3, 'linkedlist'),
      useCodingItem('1-冒泡排序', 'sort', 1, 'bubbleSort'),
      useCodingItem('2-选择排序', 'sort', 2, 'selectionSort'),
      useCodingItem('3-插入排序', 'sort', 3, 'insertionSort'),
      useCodingItem('4-希尔排序', 'sort', 4, 'shellSort'),
      useCodingItem('5-归并排序', 'sort', 5, 'mergeSort'),
      useCodingItem('6-快速排序', 'sort', 6, 'quickSort'),
      useCodingItem('7-堆排序', 'sort', 7, 'heapSort'),
      useCodingItem('8-计数排序', 'sort', 8, 'countingSort'),
      useCodingItem('9-桶排序', 'sort', 9, 'bucketSort'),
      useCodingItem('10-基数排序', 'sort', 10, 'radixSort'),
    ],
  },
  {
    text: 'HTML & CSS',
    collapsed: true,
    items: [
      useCodingItem('常见布局一览', 'css', 1, '常见布局'),
      useCodingItem('水平垂直居中', 'css', 2, '水平垂直居中'),
      useCodingItem('sticky 粘黏布局', 'css', 3, 'sticky'),
      useCodingItem('flex 布局之画骰子', 'css', 4, 'flex'),
      useCodingItem('css 新特性之 grid', 'css', 5, 'grid'),
    ],
  },
  {
    text: 'JavaScript',
    collapsed: true,
    items: [
      useCodingItem('实现简易 Promise', 'js', 1, 'promise'),
      useCodingItem('写个 deepCopy 实现深拷贝', 'js', 2, 'deepcopy'),
    ],
  },  
  {
    text: 'Vue',
    collapsed: true,
    items: [
      useCodingItem('Vue响应式原理', 'vue', 1, 'reactive'),
    ],
  },
  {
    text: 'React',
    collapsed: true,
    items: [
    ],
  },
  // {
  //   text: 'HTTP',
  //   collapsed: true,
  //   items: [
  //   ],
  // },
  // {
  //   text: 'Node.js',
  //   collapsed: true,
  //   items: [
  //   ],
  // },
  // {
  //   text: '前端工程化',
  //   collapsed: true,
  //   items: [
  //   ],
  // },  
  // {
  //   text: '性能优化',
  //   collapsed: true,
  //   items: [
  //   ],
  // },
  // {
  //   text: '前端安全',
  //   collapsed: true,
  //   items: [
  //   ],
  // },
]
