import { test } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import sidebar from '../../src/.vitepress/config/sidebar/index.js'
import nav from '../../src/.vitepress/config/nav.js'
import { learningDomains } from '../../src/.vitepress/data/learning.ts'

function linksOf(items) {
  return items.flatMap(item => [item.link, ...linksOf(item.items ?? [])]).filter(Boolean)
}

test('栏目迁移后，顶部导航、侧栏与首页入口均指向现存文档', () => {
  const links = [...linksOf(nav), ...Object.values(sidebar).flatMap(linksOf), ...learningDomains.flatMap(domain => domain.topics.map(topic => topic.link))]
  for (const link of links.filter(link => link.startsWith('/'))) {
    const path = decodeURI(link.split(/[?#]/)[0]).replace(/\.md$/, '').replace(/\/$/, '/index')
    const target = fileURLToPath(new URL(`../../src${path}.md`, import.meta.url))
    assert.ok(existsSync(target), `缺少导航目标：${link}`)
    assert.doesNotMatch(path, /^\/(直击概念|编写代码|面试官问)\//)
  }
})
