import { useQuestionItem, useQuestionIntro } from './usePath'

export default [
  {
    text: '面试官问',
    items: [
      // { text: '如何利用本版块', link: '/面试官问/index' },
      { text: '自我介绍', link: '/面试官问/00me/1自我介绍' },
      { text: '项目难点梳理', link: '/面试官问/00me/2难点梳理' },
    ],
  },
  {
    text: 'HTML & CSS',
    collapsed: true,
    link: useQuestionIntro('html'),
    items: [
      useQuestionItem('HTML 基础', 'html', 1, 'base'),
      useQuestionItem('CSS 基础', 'css', 1, 'base'),
      useQuestionItem('布局 Layout', 'css', 2, 'layout'),
    ],
  },
  {
    text: 'JavaScript',
    collapsed: true,
    link: useQuestionIntro('js'),
    items: [
      useQuestionItem('基础 Base', 'js', 1, 'base'),
      useQuestionItem('函数 Function', 'js', 2, 'function'),
      useQuestionItem('面向对象 Object', 'js', 3, 'object'),
      useQuestionItem('核心 API', 'js', 4, 'api'),
      useQuestionItem('事件 Event', 'js', 5, 'event'),
      useQuestionItem('ES6 相关', 'es6', 1, 'base'),
      useQuestionItem('Promise', 'es6', 2, 'promise'),
    ],
  },
  {
    text: 'HTTP',
    collapsed: true,
    link: useQuestionIntro('http'),
    items: [
      useQuestionItem('http 基础', 'http', 1, 'base'),
      useQuestionItem('http 常考察点', 'http', 2, 'http'),
      useQuestionItem('缓存机制', 'http', 3, 'cache'),
      useQuestionItem('为什么使用 https', 'http', 4, 'https'),                  
      // useQuestionItem('websocket', 'http', 4, 'websocket'),
    ],
  },
  {
    text: 'Broswer',
    link: useQuestionIntro('bw'),
    collapsed: true,
    items: [
      useQuestionItem('从浏览器输入 url 到页面渲染', 'bw', 1, 'fromurl'),
      useQuestionItem('事件循环 Event Loop', 'bw', 2, 'eventloop'),
      useQuestionItem('其他', 'bw', 3, 'other'),
    ],
  },
  {
    text: '前端工程化',
    link: useQuestionIntro('build'),
    collapsed: true,
    items: [
      useQuestionItem('Vite', 'vite', 1, 'vite'),
      useQuestionItem('Webpack', 'webpack', 1, 'webpack'),
      useQuestionItem('其他', 'webpack', 2, 'other'),
    ],
  },
  // 前端工程化 和 性能优化是两个大类，但性能相关很多是交杂在一起的
  // 这里 sidebar 分开了，但目录里是一个大类需注意下
  // 记得看 typeMap，别搞错目录了
  {
    text: '性能优化',
    link: useQuestionIntro('opt'),
    collapsed: true,
    items: [
      useQuestionItem('基本性能优化策略', 'opt', 1, 'base'),
      useQuestionItem('图片 Image', 'opt', 2, 'image'),
    ],
  },
  {
    text: 'Vue',
    collapsed: true,
    link: useQuestionIntro('vue'),
    items: [
      useQuestionItem('Vue相关原理', 'vue', 0, 'vue_base'),
      useQuestionItem('1-Vue3基础', 'vue', 1, 'vue3'),
      useQuestionItem('2-生命周期', 'vue', 2, 'lifecycle'),
      useQuestionItem('3-核心使用', 'vue', 3, 'vue_core'),
      useQuestionItem('4-主要工具', 'vue', 4, 'vue_utils'),
      useQuestionItem('5-API', 'vue', 5, 'vue_api'),
      useQuestionItem('6-Vue组件', 'vue', 6, 'component'),
      useQuestionItem('7-最佳实践', 'vue', 7, 'performance'),
      useQuestionItem('8-状态管理', 'vue', 8, 'store'),
      useQuestionItem('9-路由', 'vue', 9, 'router'),
      useQuestionItem('10-其他', 'vue', 10, 'other'),
    ],
  },
  {
    text: 'React',
    collapsed: true,
    link: useQuestionIntro('react'),
    items: [
      useQuestionItem('React 44 个面试问题', 'react', 1, 'dev44'),
      // useQuestionItem('VirtualDOM 和 Diff 算法', 'vue', 2, 'VirtualDOM 和 Diff 算法'),
    ],
  },
  {
    text: '解决方案',
    collapsed: true,
    link: useQuestionIntro('solution'),
    items: [useQuestionItem('特定场景下解决方案', 'slt', 1, 'solution')],
  },
  {
    text: '算法相关',
    collapsed: true,
    link: useQuestionIntro('algo'),
    items: [
      // items: [
      // useQuestionItem('堆栈', 'algo', 1, '堆栈'),
      // useQuestionItem('队列', 'algo', 2, '队列'),
      // useQuestionItem('链表', 'algo', 3, '链表'),
    ],
  },
  {
    text: 'TypeScript',
    collapsed: true,
    link: useQuestionIntro('ts'),
    items: [
      useQuestionItem('TypeScript 基础考察', 'ts', 1, 'base'),
      // useQuestionItem('VirtualDOM 和 Diff 算法', 'vue', 2, 'VirtualDOM 和 Diff 算法'),
    ],
  },
  {
    text: 'Node.js',
    link: useQuestionIntro('node'),
    collapsed: true,
    items: [
      // useQuestionItem('网络七层协议', 'http', 1, '网络七层协议'),
    ],
  },
  {
    text: '前端安全',
    link: useQuestionIntro('safe'),
    collapsed: true,
    items: [
      useQuestionItem('Web 安全', 'safe', 1, 'websafe'),
      useQuestionItem('XSS', 'safe', 2, 'xss'),
      useQuestionItem('CSRF', 'safe', 3, 'csrf'),
    ],
  },
]
