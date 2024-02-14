import { useCodingItem } from '../usePath'

export default [
  {
    text: '结合代码 & 手写题',
    items: [{ text: '如何利用该版块', link: '/编写代码/index' }],
  },
  {
    text: 'HTML & CSS',
    collapsed: true,
    items: [
      useCodingItem('常见布局一览', 'css', 1, '常见布局'),
      useCodingItem('水平垂直居中', 'css', 2, '水平垂直居中'),
      useCodingItem('sticky 粘黏布局', 'css', 3, 'sticky'),
      useCodingItem('flex布局之画骰子', 'css', 4, 'flex'),
      useCodingItem('css新特性之grid', 'css', 5, 'grid'),
    ],
  },
  {
    text: 'JavaScript',
    collapsed: true,
    items: [
      useCodingItem('实现简易Promise', 'js', 1, 'promise'),
      useCodingItem('写个deepCopy实现深拷贝', 'js', 2, 'deepcopy'),
    ],
  },
  {
    text: '算法相关',
    collapsed: true,
    items: [
      useCodingItem('栈 stack', 'algo', 1, 'stack'),
      useCodingItem('队列 queue', 'algo', 2, 'queue'),
      useCodingItem('链表 linked list', 'algo', 3, 'linkedlist'),
      useCodingItem('冒泡排序', 'sort', 1, 'bubbleSort'),
    ],
  },
  {
    text: 'HTTP',
    collapsed: true,
    items: [
      // useCodingItem('网络七层协议', 'http', 1, '网络七层协议'),
      // useCodingItem('http', 'http', 2, 'http'),
      // useCodingItem('https', 'http', 3, 'https'),
      // useCodingItem('websocket', 'http', 4, 'websocket'),
    ],
  },
  {
    text: 'Node.js',
    collapsed: true,
    items: [
      // useCodingItem('网络七层协议', 'http', 1, '网络七层协议'),
    ],
  },
  {
    text: '前端工程化',
    collapsed: true,
    items: [
      // useCodingItem('webpack', 'webpack', 1, 'webpack'),
      // useCodingItem('Webpack优化实践', 'webpack', 1, 'Webpack优化实践'),
    ],
  },
  // 前端工程化 和 性能优化是两个大类，但性能相关很多是交杂在一起的
  // 这里sidebar分开了，但目录里是一个大类需注意下
  // 记得看typeMap，别搞错目录了
  {
    text: '性能优化',
    collapsed: true,
    items: [
      // useCodingItem('图片懒加载', 'opt', 1, '图片懒加载'),
      // useCodingItem('白屏', 'opt', 2, '白屏'),
    ],
  },
  {
    text: '前端安全',
    collapsed: true,
    items: [
      // useCodingItem('XSS', 'opt', 1, 'XSS'),
      // useCodingItem('CSRF', 'opt', 1, 'CSRF'),
    ],
  },
  {
    text: 'Vue',
    collapsed: true,
    items: [
      // useCodingItem('MVC和MVVM', 'vue', 1, 'MVC和MVVM'),
      // useCodingItem('VirtualDOM和Diff算法', 'vue', 2, 'VirtualDOM和Diff算法'),
    ],
  },
  {
    text: 'React',
    collapsed: true,
    items: [
      // useCodingItem('MVC和MVVM', 'react', 1, 'MVC和MVVM'),
      // useCodingItem('VirtualDOM和Diff算法', 'vue', 2, 'VirtualDOM和Diff算法'),
    ],
  },
]
