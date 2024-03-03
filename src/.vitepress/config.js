import { defineConfig } from 'vitepress'
import { basename } from 'node:path'
// todo:fix 由于 npm run build 报错，暂时把该插件去掉，解决后加回来
// import { postcssIsolateStyles } from 'vitepress'
// import { pagefindPlugin, chineseSearchOptimize } from 'vitepress-plugin-pagefind'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath, URL } from 'node:url'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
// https://vitepress.dev/reference/site-config
// menu route
import head from './config/head'
import nav from './config/nav'
import sidebar from './config/sidebar'


export default defineConfig({
  // base: '/FE-prepare-interview/',
  base: '/',
  outDir: '../dist',
  lang: 'zh-cn',
  title: '前端必备的知识宝典',
  description:
    '前端必备的知识宝典，经 Fridolph 整理编写。内容均搜集自互联网，非商业，遵循 GPL 开源协议。',
  // head: [['link', { rel: 'shortcut icon', href: '/favicon.ico' }]],
  head,
  themeConfig: {
    sidebarDepth: 2,
    appearance: true,
    logo: '/me.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/Fridolph/FE-prepare-interview' }],
    footer: {
      // message: '',
      copyright:
        'Released <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hans" target="_blank">CC BY-NC-ND 4.0</a> License. <span style="margin: 0 30px;">Powered by <a href="https://vitepress.dev/zh/" target="_blank">VitePress</a>.</span> Copyright © 2023-present <a href="https://blog.fridolph.top" target="_blank">Yinsheng Fu</a>',
    },
    editLink: {
      pattern: 'https://github.com/Fridolph/FE-prepare-interview/edit/dev/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          const html = md.render(src, env)
          if (env.frontmatter?.title) return md.render(`# ${env.frontmatter.title}`) + html
          return html
        },
      },
    },
    // 由于本地搜索对中文和 英文大小写判断稍差
    // 试试 algolia - - ORZ 还没申请下来
    outline: {
      level: 'deep',
      label: '本页目录',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    darkModeSwitchLabel: '外观',
    cleanUrls: true,
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },
    returnToTopLabel: '返回顶部',
    externalLinkIcon: true,
  },
  vite: {
    plugins: [
      // todo:fix 由于 npm run build 报错，暂时把该插件去掉，解决后加回来
      // postcssIsolateStyles(),
      // pagefindPlugin({
      //   customSearchQuery: chineseSearchOptimize,
      //   btnPlaceholder: '搜索',
      //   placeholder: '搜索文档',
      //   emptyText: '空空如也',
      //   heading: '共：{{searchResult}} 条结果',
      //   excludeSelector: ['img', 'a.header-anchor'],
      //   forceLanguage: 'zh-cn',
      //   indexingCommand:
      //     'npx pagefind --source "docs/.vitepress/dist" --bundle-dir "pagefind" --exclude-selectors "div.aside, a.header-anchor"',
      // }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
  },
  markdown: {
    math: true,
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
    codeTransformers: [transformerTwoslash()],
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '注意',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },
  sitemap: {
    hostname: 'https://github.com/Fridolph/FE-prepare-interview',
  },
})
