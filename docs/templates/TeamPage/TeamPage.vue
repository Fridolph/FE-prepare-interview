<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>贡献成员</template>
      <template #lead>辛苦了，今晚加鸡腿</template>
    </VPTeamPageTitle>
    <VPTeamMembers
      size="medium"
      :members="members" />

    <VPTeamPageSection>
      <template #title>感谢赞助商</template>
      <template #lead>等待加盟</template>
      <VPTeamMembers
        size="medium"
        :members="partners" />
    </VPTeamPageSection>
  </VPTeamPage>
</template>

<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers, VPTeamPageSection } from 'vitepress/theme'
import members from './ourTeam'
import partners from './ourTeam'
</script>
