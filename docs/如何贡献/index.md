---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const members = [
  {
    avatar: '../public/me.jpg',
    name: 'Yinsheng Fu',
    title: 'Creator. FE developer, in Chengdu.',
    links: [
      { icon: 'github', link: 'https://github.com/Fridolph' },
      { link: 'https://blog.fridolph.top', icon: {
        svg: `<svg t="1706777280493" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26849" width="200" height="200"><path d="M512 0C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S794.624 0 512 0z m-6.656 226.816c80.896 0 147.456 66.56 148.48 149.504 0 81.92-66.56 149.504-148.48 149.504s-148.48-66.56-148.48-149.504c0-81.92 66.56-149.504 148.48-149.504zM796.672 742.4c0 54.784-86.528 54.784-186.368 54.784H414.208c-104.448 0-186.368 0-186.368-55.808v-10.752c0-104.448 84.48-188.928 186.368-188.928h197.12c102.4 0 186.368 84.48 185.344 189.952v10.752z" fill="#707070" p-id="26850"></path></svg>`
      },  }
    ],
    
  },
]
const partners = [
  // {
  //   avatar: 'https://www.github.com/yyx990803.png',
  //   name: 'Evan You',
  //   title: 'Creator',
  //   links: [
  //     { icon: 'github', link: 'https://github.com/yyx990803' },
  //     { icon: 'github', link: 'https://github.com/yyx990803' },
  //   ]
  // }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>贡献成员</template>
    <template #lead>辛苦了，今晚加鸡腿</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="members" />

  <VPTeamPageSection>
    <template #title>感谢赞助商</template>
    <template #lead>等待加盟</template>
    <VPTeamMembers size="medium" :members="partners" />
  </VPTeamPageSection>
</VPTeamPage>
