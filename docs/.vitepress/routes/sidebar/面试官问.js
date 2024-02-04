import { useStraightItem } from '../usePath'

export default [
  {
    text: '面试官问',
    items: [{ text: '如何利用本版块', link: '/面试官问/index' }],
  },
  {
    text: 'HTML & CSS',
    collapsed: true,
    items: [
      // useStraightItem('了解flex布局吗', 'css', 1, 'flex'),
      // useStraightItem('了解grid布局吗', 'css', 1, 'grid'),
    ],
  },
  {
    text: 'JavaScript',
    collapsed: true,
    items: [
      useStraightItem('什么是事件循环', 'js', 1, '事件循环'),
      // useStraightItem('什么是事件循环', 'js', 1, '事件循环'),
    ],
  },
  {
    text: '算法相关',
    collapsed: true,
    items: [
      // useStraightItem('堆栈', 'algo', 1, '堆栈'),
      // useStraightItem('队列', 'algo', 2, '队列'),
      // useStraightItem('链表', 'algo', 3, '链表'),
    ],
  },
  {
    text: 'http 相关',
    collapsed: true,
    items: [
      // useStraightItem('网络七层协议', 'http', 1, '网络七层协议'),
      // useStraightItem('http', 'http', 2, 'http'),
      // useStraightItem('https', 'http', 3, 'https'),
      // useStraightItem('websocket', 'http', 4, 'websocket'),
    ],
  },
  {
    text: 'Node.js',
    collapsed: true,
    items: [
      // useStraightItem('网络七层协议', 'http', 1, '网络七层协议'),
    ],
  },
  {
    text: '前端工程化',
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
    collapsed: true,
    items: [
      // useStraightItem('图片懒加载', 'opt', 1, '图片懒加载'),
      // useStraightItem('白屏', 'opt', 2, '白屏'),
    ],
  },
  {
    text: '前端安全',
    collapsed: true,
    items: [
      // useStraightItem('XSS', 'opt', 1, 'XSS'),
      // useStraightItem('CSRF', 'opt', 1, 'CSRF'),
    ],
  },
  {
    text: 'Vue',
    collapsed: true,
    items: [
      // useStraightItem('MVC和MVVM', 'vue', 1, 'MVC和MVVM'),
      // useStraightItem('VirtualDOM和Diff算法', 'vue', 2, 'VirtualDOM和Diff算法'),
    ],
  },
  {
    text: 'React',
    collapsed: true,
    items: [
      // useStraightItem('MVC和MVVM', 'react', 1, 'MVC和MVVM'),
      // useStraightItem('VirtualDOM和Diff算法', 'vue', 2, 'VirtualDOM和Diff算法'),
    ],
  },
]
