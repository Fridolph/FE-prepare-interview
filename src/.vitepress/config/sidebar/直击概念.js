import { useStraightIntro, useStraightItem } from './usePath'

export default [
  // {
  //   text: '直击概念',
  //   items: [{ text: '如何利用该版块', link: '/直击概念/index' }],
  // },
  {
    text: 'HTML & CSS',
    collapsed: true,
    link: useStraightIntro('html'),
    items: [
      useStraightItem('BFC', 'css', 1, 'BFC'),
      // useStraightItem('了解 grid 布局吗', 'css', 1, 'grid'),
    ],
  },
  {
    text: 'JavaScript',
    link: useStraightIntro('js'),
    collapsed: false,
    items: [
      useStraightItem('变量，声明、类型、判断等', 'js', 1, 'base'),
      useStraightItem('闭包', 'js', 2, 'closure'),
      useStraightItem('对象、原型、继承', 'js', 3, 'object'),
      useStraightItem('this 相关', 'js', 4, 'this'),
      useStraightItem('事件 Event', 'js', 5, 'event'),
      useStraightItem('ES6（2015）', 'esnext', 1, 'es6'),
      useStraightItem('Promise - 设计', 'promise', 1, 'design'),
      useStraightItem('Promise - 基础', 'promise', 2, 'base'),
      useStraightItem('Promise - 进阶', 'promise', 3, 'promise'),
      useStraightItem('ESNext', 'esnext', 2, 'esnext'),
    ],
  },
  {
    text: 'HTTP',
    link: useStraightIntro('http'),
    collapsed: true,
    items: [
      useStraightItem('OSI 七层模型', 'http', 0, 'osi'),
      useStraightItem('HTTP 概述', 'http', 1, 'http'),
      useStraightItem('HTTP 状态码', 'http', 2, 'http_status_code'),
      useStraightItem('HTTP Header', 'http', 3, 'http_header'),
      useStraightItem('HTTP 缓存', 'http', 4, 'cache'),
      useStraightItem('HTTPS', 'http', 5, 'https'),
      useStraightItem('WebSocket', 'http', 6, 'WebSocket'),
      // useStraightItem('从浏览器输入 url 到页面渲染', 'http', 6, '从浏览器输入 url'),
      // useStraightItem('事件循环 Event Loop', 'http', 7, 'eventloop'),
    ],
  },
  {
    text: 'Broswer',
    link: useStraightIntro('bw'),
    collapsed: false,
    items: [
      useStraightItem('浏览器工作原理', 'bw', 1, 'broswer'),
      useStraightItem('浏览器进程模型', 'bw', 4, 'process'),
      useStraightItem('浏览器渲染原理', 'bw', 5, 'render'),
      useStraightItem('事件循环 Event Loop', 'bw', 2, 'eventloop'),
      useStraightItem('垃圾回收 GC', 'bw', 3, 'gc'),
    ],
  },
  {
    text: '前端工程化',
    link: useStraightIntro('webpack'),
    collapsed: true,
    items: [
      useStraightItem('webpack', 'webpack', 1, 'webpack'),
      useStraightItem('vite', 'vite', 1, 'vite'),
    ],
  },
  // 前端工程化 和 性能优化是两个大类，但性能相关很多是交杂在一起的
  // 这里 sidebar 分开了，但目录里是一个大类需注意下
  // 记得看 typeMap，别搞错目录了
  {
    text: '性能优化',
    link: useStraightIntro('opt'),
    collapsed: false,
    items: [
      useStraightItem('Web 性能', 'opt', 1, 'Web性能'),
      useStraightItem('多媒体（图片和视频）', 'opt', 2, '多媒体'),
      useStraightItem('JavaScript 性能优化', 'opt', 3, 'JavaScript性能优化'),
      useStraightItem('HTML 性能优化', 'opt', 4, 'HTML性能优化'),
      useStraightItem('CSS 性能优化', 'opt', 5, 'CSS性能优化'),
    ],
  },
  {
    text: 'Vue',
    link: useStraightIntro('vue'),
    collapsed: false,
    items: [
      useStraightItem('响应式 Reactive', 'vue', 1, 'reactive'),
      useStraightItem('生命周期 Lifecylcle', 'vue', 2, 'lifecycle'),
      useStraightItem('模版编译 Compile', 'vue', 4, 'compile'),
      useStraightItem('Virtual DOM & Diff', 'vue', 3, 'diff'),
      useStraightItem('keep-alive', 'vue', 5, 'keep_alive'),
    ],
  },
  {
    text: 'React',
    link: useStraightIntro('react'),
    collapsed: true,
    items: [
      // useStraightItem('MVC 和 MVVM', 'react', 1, 'MVC 和 MVVM'),
      // useStraightItem('VirtualDOM 和 Diff 算法', 'vue', 2, 'VirtualDOM 和 Diff 算法'),
    ],
  },
  // {
    // text: '解决方案',
    // collapsed: true,
    // link: useStraightIntro('solution'),
    // items: [
      // useStraightItem('特定场景下解决方案', 'slt', 1, 'solution'),
    // ],
  // },
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
    text: 'TypeScript',
    link: useStraightIntro('ts'),
    collapsed: true,
    items: [useStraightItem('TypeScript 基础', 'ts', 1, 'base')],
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
    text: '前端安全',
    link: useStraightIntro('safe'),
    collapsed: true,
    items: [
      useStraightItem('Web 安全', 'safe', 1, 'Web 安全'),
      useStraightItem('XSS', 'safe', 2, 'XSS'),
      useStraightItem('CSRF', 'safe', 3, 'CSRF'),
      useStraightItem('中间人攻击', 'safe', 4, '中间人攻击'),
      useStraightItem('旁观者攻击', 'safe', 5, '旁观者攻击'),
    ],
  },
]
