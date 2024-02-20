import { defineConfig } from 'vitepress'
// todo:fix 由于npm run build 报错，暂时把该插件去掉，解决后加回来
// import { postcssIsolateStyles } from 'vitepress'
// import { pagefindPlugin, chineseSearchOptimize } from 'vitepress-plugin-pagefind'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath, URL } from 'node:url'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
// https://vitepress.dev/reference/site-config
// menu route
import straight from './routes/sidebar/直击概念'
import question from './routes/sidebar/面试官问'
import coding from './routes/sidebar/编写代码'
import contribution from './routes/sidebar/参与贡献'
import interview from './routes/sidebar/网友面经'

export default defineConfig({
  // base: '/FE-prepare-interview/',
  base: '/',
  title: '前端必备的知识宝典',
  description:
    '前端必备的知识宝典，经Fridolph整理编写。内容均搜集自互联网，非商业，遵循GPL开源协议。',
  head: [['link', { rel: 'shortcut icon', href: '/favicon.ico' }]],
  lastUpdated: true,
  themeConfig: {
    outline: 'deep',
    sidebarDepth: 2,
    appearance: true,
    logo: '/me.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '直击概念', link: '/直击概念/index' },
      { text: '面试官问', link: '/面试官问/index' },
      { text: '编写代码', link: '/编写代码/index' },
      { text: '相关准备', link: '/相关准备/三月后再删' },
      { text: '网友面经', link: '/网友面经/0intro' },
      { text: '参与贡献', link: '/参与贡献/index' },
    ],
    sidebar: {
      '/直击概念/': straight,
      '/面试官问/': question,
      '/编写代码/': coding,
      '/网友面经/': interview,
      '/相关准备/': [
        {
          text: '如何利用该版块',
          items: [
            { text: '祝大家新年快乐', link: '/相关准备/三月后再删' },
            { text: '推荐工具', link: '/相关准备/index' },
            { text: '如何写好简历', link: '/相关准备/如何写好简历' },
          ],
        },
      ],
      '/参与贡献/': contribution,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Fridolph/FE-prepare-interview' },
    ],
    footer: {
      // message: '',
      copyright:
        'Released <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hans" target="_blank">CC BY-NC-ND 4.0</a> License. <span style="margin: 0 30px;">Powered by <a href="https://vitepress.dev/zh/" target="_blank">VitePress</a>.</span> Copyright © 2024 <a href="https://blog.fridolph.top" target="_blank">Yinsheng Fu</a>',
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
          if (env.frontmatter?.title)
            return md.render(`# ${env.frontmatter.title}`) + html
          return html
        },
      },
    },
    // 由于本地搜索对中文和 英文大小写判断稍差
    // 试试algolia - - ORZ 还没申请下来
    outlineTitle: '本页导航',
    docFooter: {
      prev: '上一节',
      next: '下一节',
    },
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
  lang: 'zh-cn',
  vite: {
    plugins: [
      // todo:fix 由于npm run build 报错，暂时把该插件去掉，解决后加回来
      // postcssIsolateStyles(),
      // pagefindPlugin({
      //   customSearchQuery: chineseSearchOptimize,
      //   btnPlaceholder: '搜索',
      //   placeholder: '搜索文档',
      //   emptyText: '空空如也',
      //   heading: '共: {{searchResult}} 条结果',
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
