import { useQuestionItem } from '../usePath'

export default [
  {
    text: '面试官问',
    items: [{ text: '如何利用本版块', link: '/面试官问/index' }],
  },
  {
    text: 'HTML & CSS',
    collapsed: true,
    items: [
      // useQuestionItem('了解flex布局吗', 'css', 1, 'flex'),
      // useQuestionItem('了解grid布局吗', 'css', 1, 'grid'),
    ],
  },
  {
    text: 'JavaScript',
    collapsed: true,
    items: [
      useQuestionItem('事件循环 Event Loop', 'js', 1, '事件循环'),
      useQuestionItem('变量和类型相关', 'js', 2, '变量类型'),
      useQuestionItem('浅拷贝与深拷贝', 'js', 3, '浅拷贝与深拷贝'),
    ],
  },
  {
    text: '算法相关',
    collapsed: true,
    items: [
      // useQuestionItem('堆栈', 'algo', 1, '堆栈'),
      // useQuestionItem('队列', 'algo', 2, '队列'),
      // useQuestionItem('链表', 'algo', 3, '链表'),
    ],
  },
  {
    text: 'HTTP',
    collapsed: true,
    items: [
      useQuestionItem('http常考察点', 'http', 1, 'http'),
      useQuestionItem('OSI七层模型', 'http', 2, 'osi'),
      useQuestionItem('http缓存机制', 'http', 3, '缓存机制'),
      useQuestionItem('为什么使用https', 'http', 4, 'https'),
      // useQuestionItem('网络七层协议', 'http', 1, '网络七层协议'),
      // useQuestionItem('http', 'http', 2, 'http'),
      // useQuestionItem('https', 'http', 3, 'https'),
      // useQuestionItem('websocket', 'http', 4, 'websocket'),
    ],
  },
  {
    text: 'Node.js',
    collapsed: true,
    items: [
      // useQuestionItem('网络七层协议', 'http', 1, '网络七层协议'),
    ],
  },
  {
    text: '前端工程化',
    collapsed: true,
    items: [
      // useQuestionItem('webpack', 'webpack', 1, 'webpack'),
      // useQuestionItem('Webpack优化实践', 'webpack', 1, 'Webpack优化实践'),
    ],
  },
  // 前端工程化 和 性能优化是两个大类，但性能相关很多是交杂在一起的
  // 这里sidebar分开了，但目录里是一个大类需注意下
  // 记得看typeMap，别搞错目录了
  {
    text: '性能优化',
    collapsed: true,
    items: [
      // useQuestionItem('图片懒加载', 'opt', 1, '图片懒加载'),
      // useQuestionItem('白屏', 'opt', 2, '白屏'),
    ],
  },
  {
    text: '前端安全',
    collapsed: true,
    items: [
      // useQuestionItem('XSS', 'opt', 1, 'XSS'),
      // useQuestionItem('CSRF', 'opt', 1, 'CSRF'),
    ],
  },
  {
    text: 'Vue',
    collapsed: true,
    items: [
      // useQuestionItem('MVC和MVVM', 'vue', 1, 'MVC和MVVM'),
      // useQuestionItem('VirtualDOM和Diff算法', 'vue', 2, 'VirtualDOM和Diff算法'),
    ],
  },
  {
    text: 'React',
    collapsed: true,
    items: [
      // useQuestionItem('MVC和MVVM', 'react', 1, 'MVC和MVVM'),
      // useQuestionItem('VirtualDOM和Diff算法', 'vue', 2, 'VirtualDOM和Diff算法'),
    ],
  },
]
