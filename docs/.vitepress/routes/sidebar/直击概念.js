import { useStraightIntro, useStraightItem } from '../usePath'

export default [
  {
    text: '直击概念',
    items: [{ text: '如何利用该版块', link: '/直击概念/index' }],
  },

  {
    text: 'HTML & CSS',
    collapsed: true,
    link: useStraightIntro('html'),
    items: [
      useStraightItem('BFC', 'css', 1, 'BFC'),
      // useStraightItem('了解grid布局吗', 'css', 1, 'grid'),
    ],
  },
  {
    text: 'JavaScript',
    link: useStraightIntro('js'),
    collapsed: true,
    items: [
      useStraightItem('变量，声明、类型、判断等', 'js', 1, 'base'),
      useStraightItem('闭包', 'js', 2, 'closure'),
      useStraightItem('对象、原型、继承', 'js', 3, 'object'),
      useStraightItem('this相关', 'js', 4, 'this'),
      useStraightItem('事件 Event', 'js', 5, 'event'),
      useStraightItem('事件循环 Event Loop', 'js', 6, 'eventloop'),
    ],
  },
  {
    text: '算法相关',
    link: useStraightIntro('algo'),
    collapsed: true,
    items: [
      // useStraightItem('算法基础', 'algo', 0, 'base'),
      useStraightItem('栈 stack', 'algo', 1, 'stack'),
      useStraightItem('队列 queue', 'algo', 2, 'queue'),
      useStraightItem('链表 linkedlist', 'algo', 3, 'linkedlist'),
      useStraightItem('数组 array', 'algo', 4, 'array'),
      useStraightItem('1-冒泡排序', 'sort', 1, 'bubbleSort'),
      useStraightItem('2-选择排序', 'sort', 2, 'selectionSort'),
      useStraightItem('3-插入排序', 'sort', 3, 'insertionSort'),
      useStraightItem('4-希尔排序', 'sort', 4, 'shellSort'),
      useStraightItem('5-归并排序', 'sort', 5, 'mergeSort'),
      useStraightItem('6-快速排序', 'sort', 6, 'quickSort'),
      useStraightItem('7-堆排序', 'sort', 7, 'heapSort'),
      useStraightItem('8-计数排序', 'sort', 8, 'countingSort'),
      useStraightItem('9-桶排序', 'sort', 9, 'bucketSort'),
      useStraightItem('10-基数排序', 'sort', 10, 'radixSort'),
    ],
  },
  {
    text: 'HTTP',
    link: useStraightIntro('http'),
    collapsed: true,
    items: [
      useStraightItem('OSI七层模型', 'http', 6, 'osi'),
      useStraightItem('从浏览器输入 url 到页面渲染', 'http', 7, '从浏览器输入url'),
      useStraightItem('HTTP概述', 'http', 1, 'http'),
      useStraightItem('HTTP状态码', 'http', 2, 'http_status_code'),
      useStraightItem('HTTP Header', 'http', 3, 'http_header'),
      useStraightItem('HTTP缓存', 'http', 4, 'http缓存'),
      useStraightItem('HTTPS', 'http', 5, 'https'),
      useStraightItem('WebSocket', 'http', 8, 'WebSocket'),
    ],
  },
  {
    text: 'Node.js',
    link: useStraightIntro('nodejs'),
    collapsed: true,
    items: [
      // useStraightItem('网络七层协议', 'http', 1, '网络七层协议'),
    ],
  },
  {
    text: '前端工程化',
    link: useStraightIntro('webpack'),
    collapsed: true,
    items: [
      // useStraightItem('webpack', 'webpack', 1, 'webpack'),
      // useStraightItem('Webpack优化实践', 'webpack', 1, 'Webpack优化实践'),
    ],
  },
  // 前端工程化 和 性能优化是两个大类，但性能相关很多是交杂在一起的
  // 这里sidebar分开了，但目录里是一个大类需注意下
  // 记得看typeMap，别搞错目录了
  {
    text: '性能优化',
    link: useStraightIntro('opt'),
    collapsed: true,
    items: [
      useStraightItem('Web性能', 'opt', 1, 'Web性能'),
      useStraightItem('多媒体', 'opt', 2, '多媒体'),
      useStraightItem('JavaScript性能优化', 'opt', 3, 'JavaScript性能优化'),
      useStraightItem('HTML性能优化', 'opt', 4, 'HTML性能优化'),
      useStraightItem('CSS性能优化', 'opt', 5, 'CSS性能优化'),
    ],
  },
  {
    text: '前端安全',
    link: useStraightIntro('safe'),
    collapsed: true,
    items: [
      useStraightItem('Web安全', 'safe', 1, 'Web安全'),
      useStraightItem('XSS', 'safe', 2, 'XSS'),
      useStraightItem('CSRF', 'safe', 3, 'CSRF'),
      useStraightItem('中间人攻击', 'safe', 4, '中间人攻击'),
      useStraightItem('旁观者攻击', 'safe', 5, '旁观者攻击'),
    ],
  },
  {
    text: 'Vue',
    link: useStraightIntro('vue'),
    collapsed: true,
    items: [
      useStraightItem('Vue响应式原理', 'vue', 1, 'reactive'),
      useStraightItem('Vue生命周期', 'vue', 2, 'lifecycle'),
      useStraightItem('Vue Diff相关', 'vue', 3, 'diff'),
    ],
  },
  {
    text: 'React',
    link: useStraightIntro('react'),
    collapsed: true,
    items: [
      // useStraightItem('MVC和MVVM', 'react', 1, 'MVC和MVVM'),
      // useStraightItem('VirtualDOM和Diff算法', 'vue', 2, 'VirtualDOM和Diff算法'),
    ],
  },
]
