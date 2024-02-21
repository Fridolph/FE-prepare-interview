import { useQuestionItem, useQuestionIntro } from '../usePath'

export default [
  {
    text: '面试官问',
    items: [{ text: '如何利用本版块', link: '/面试官问/index' }],
  },
  {
    text: 'HTML & CSS',
    collapsed: true,
    link: useQuestionIntro('html'),
    items: [
      useQuestionItem('HTML基础', 'html', 1, 'base'),
      useQuestionItem('CSS基础', 'css', 1, 'base'),
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
    ],
  },
  {
    text: '算法相关',
    link: useQuestionIntro('algo'),
    // items: [
    // useQuestionItem('堆栈', 'algo', 1, '堆栈'),
    // useQuestionItem('队列', 'algo', 2, '队列'),
    // useQuestionItem('链表', 'algo', 3, '链表'),
    // ],
  },
  {
    text: 'HTTP',
    collapsed: true,
    link: useQuestionIntro('http'),
    items: [
      useQuestionItem('应用层', 'http', 1, 'osi'),
      useQuestionItem('http 常考察点', 'http', 2, 'http'),
      useQuestionItem('缓存机制', 'http', 3, 'cache'),
      useQuestionItem('为什么使用https', 'http', 4, 'https'),
      useQuestionItem('从浏览器输入url到页面渲染', 'http', 5, '从浏览器输入url'),
      useQuestionItem('事件循环 Event Loop', 'browser', 6, 'eventloop'),
      // useQuestionItem('网络七层协议', 'http', 1, '网络七层协议'),
      // useQuestionItem('http', 'http', 2, 'http'),
      // useQuestionItem('https', 'http', 3, 'https'),
      // useQuestionItem('websocket', 'http', 4, 'websocket'),
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
    text: '前端工程化',
    link: useQuestionIntro('build'),
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
    link: useQuestionIntro('opt'),
    collapsed: true,
    items: [useQuestionItem('性能优化实践', 'opt', 1, 'per1')],
  },
  {
    text: '前端安全',
    link: useQuestionIntro('safe'),
    collapsed: true,
    items: [
      useQuestionItem('Web安全', 'safe', 1, 'websafe'),
      useQuestionItem('XSS', 'safe', 2, 'xss'),
      useQuestionItem('CSRF', 'safe', 3, 'csrf'),
    ],
  },
  {
    text: 'Vue',
    collapsed: true,
    link: useQuestionIntro('vue'),
    items: [
      useQuestionItem('Vue核心', 'vue', 0, 'vue_base'),
      useQuestionItem('1-Vue3（同上）', 'vue', 1, 'vue3'),
      useQuestionItem('2-生命周期', 'vue', 2, 'lifecycle'),
      useQuestionItem('3-相关属性、方法、API等', 'vue', 3, 'vue_api'),
      useQuestionItem('4-组件', 'vue', 4, 'component'),
      useQuestionItem('5-路由', 'vue', 5, 'router'),
      useQuestionItem('6-状态管理', 'vue', 6, 'store'),
      useQuestionItem('7-最佳实践', 'vue', 7, 'performance'),
      useQuestionItem('8-其他', 'vue', 8, 'other'),
    ],
  },
  {
    text: 'React',
    collapsed: true,
    link: useQuestionIntro('react'),
    items: [
      useQuestionItem('React 44 个面试问题', 'react', 1, 'dev44'),
      // useQuestionItem('VirtualDOM和Diff算法', 'vue', 2, 'VirtualDOM和Diff算法'),
    ],
  },
  {
    text: 'TypeScript',
    collapsed: true,
    link: useQuestionIntro('ts'),
    items: [
      useQuestionItem('TypeScript基础考察', 'ts', 1, 'base'),
      // useQuestionItem('VirtualDOM和Diff算法', 'vue', 2, 'VirtualDOM和Diff算法'),
    ],
  },
]
