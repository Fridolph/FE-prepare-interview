import { defineConfig } from 'vitepress'
import { pagefindPlugin, chineseSearchOptimize } from 'vitepress-plugin-pagefind'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath, URL } from 'node:url'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/FE-prepare-interview/',
  title: 'Web前端必备面试宝典',
  description: 'Web前端开发必备面试宝典，Fridolph著。内容搜集整理自互联网，遵循GPL开源协议。',
  head: [['link', { rel: 'shortcut icon', href: '/favicon.ico' }]],
  themeConfig: {
    appearance: false,
    logo: '/me.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '准备简历', link: '/准备简历/index' },
      { text: '直击概念', link: '/直击概念/index' },
      { text: '面试官问', link: '/面试官问/index' },
      { text: '手写代码', link: '/手写代码/index' },
    ],
    sidebar: {      
      '/直击概念/': [
        {
          text: '介绍',
          items: [{ text: '介绍本模块', link: '/直击概念/index.md' }],
        },
      ],
      '/面试官问/': [
        {
          text: '介绍',
          items: [{ text: '介绍', link: '/面试官问/index.md' }],
        },
      ],
      '/手写代码/': [
        {
          text: '介绍',
          items: [{ text: '介绍', link: '/手写代码/index.md' }],
        },
      ],
      '/准备简历/': [
        {
          text: '介绍',
          items: [{ text: '介绍本模块', link: '/准备简历/index.md' }],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Fridolph/FE-prepare-interview' }],
    footer: {
      // message: '',
      copyright:
        'Released under the <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hans" target="_blank">CC BY-NC-ND 4.0</a> License.  Copyright © 2024-present <a href="https://blog.fridolph.top" target="_blank">Yinsheng Fu</a>',
    },
    editLink: {
      pattern: 'https://github.com/Fridolph/FE-prepare-interview/edit/dev/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
    search: {
      provider: 'local',
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
    docFooter: {
      prev: '上一节',
      next: '下一节',
    },
    returnToTopLabel: '返回顶部',
    externalLinkIcon: true,
  },
  lang: 'zh-cn',
  vite: {
    plugins: [
      pagefindPlugin({
        customSearchQuery: chineseSearchOptimize,
        btnPlaceholder: '搜索',
        placeholder: '搜索文档',
        emptyText: '空空如也',
        heading: '共: {{searchResult}} 条结果',
        excludeSelector: ['img', 'a.header-anchor'],
        forceLanguage: 'zh-cn',
        indexingCommand:
          'npx pagefind --source "docs/.vitepress/dist" --bundle-dir "pagefind" --exclude-selectors "div.aside, a.header-anchor"',
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },
})
