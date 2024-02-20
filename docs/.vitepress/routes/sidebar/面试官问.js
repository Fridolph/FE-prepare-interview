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
      // useQuestionItem('了解flex布局吗', 'css', 1, 'flex'),
      // useQuestionItem('了解grid布局吗', 'css', 1, 'grid'),
    ],
  },
  {
    text: 'JavaScript',
    collapsed: true,
    link: useQuestionIntro('js'),
    items: [
      useQuestionItem('事件循环 Event Loop', 'js', 1, '事件循环'),
      useQuestionItem('变量和类型相关', 'js', 2, '变量类型'),
      useQuestionItem('浅拷贝与深拷贝', 'js', 3, '浅拷贝与深拷贝'),
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
      useQuestionItem('http常考察点', 'http', 1, 'http'),
      useQuestionItem('OSI七层模型', 'http', 2, 'osi'),
      useQuestionItem('http缓存机制', 'http', 3, '缓存机制'),
      useQuestionItem('为什么使用https', 'http', 4, 'https'),
      useQuestionItem('从浏览器输入url到页面渲染', 'http', 5, '从浏览器输入url'),
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
    items: [
      // useQuestionItem('图片懒加载', 'opt', 1, '图片懒加载'),
      // useQuestionItem('白屏', 'opt', 2, '白屏'),
    ],
  },
  {
    text: '前端安全',
    link: useQuestionIntro('safe'),
    collapsed: true,
    items: [
      // useQuestionItem('XSS', 'opt', 1, 'XSS'),
      // useQuestionItem('CSRF', 'opt', 1, 'CSRF'),
    ],
  },
  {
    text: 'Vue',
    collapsed: true,
    link: useQuestionIntro('vue'),
    items: [
      useQuestionItem('Vue核心', 'vue', 0, 'vuebase'),
      useQuestionItem('1-Vue3（同上）', 'vue', 1, 'vue3'),
      useQuestionItem('2-生命周期', 'vue', 2, 'lifecycle'),
      useQuestionItem('3-相关API、方法等', 'vue', 3, 'vue_api'),
      useQuestionItem('4-组件通信', 'vue', 4, 'communication'),
      useQuestionItem('5-路由', 'vue', 5, 'router'),
      useQuestionItem('6-状态管理', 'vue', 6, '状态管理'),
      useQuestionItem('7-其他待整理', 'vue', 7, 'other'),
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
]
