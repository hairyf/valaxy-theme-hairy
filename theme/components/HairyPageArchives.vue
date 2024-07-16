<script lang="ts" setup>
import { ElTimeline, ElTimelineItem } from 'element-plus'
import { usePostList } from 'valaxy'

import { getArchiveLink } from '../utils'
import { useYearArchives } from '../composables'

const activities = useYearArchives()
const posts = usePostList()
</script>

<template>
  <HairyBreadcrumb class="mb-5" size="large" after="归档">
    <HairyBreadcrumbItem to="/">
      首页
    </HairyBreadcrumbItem>
    <HairyBreadcrumbItem>
      目前共计 {{ posts.length }} 篇文章
    </HairyBreadcrumbItem>
  </HairyBreadcrumb>
  <ElTimeline>
    <ElTimelineItem
      v-for="(activity, index) in activities"
      :key="index"
      size="large"
      hollow
    >
      <div class="activity inline-flex items-center">
        <HairyLink class="text-size-8" @click="$router.push(getArchiveLink(activity.year))">
          {{ activity.year }}
        </HairyLink>
        <span class="text-gray-5 mx-2">/</span>
        <HairyLink class="text-size-8" @click="$router.push(getArchiveLink(activity.year, activity.month))">
          {{ activity.month }}
        </HairyLink>
        <span class="text-gray-5 text-size-5 ml-1">({{ activity.count }}篇)</span>
      </div>
      <HairyTimelineContent v-for="(item, index) in activity.posts.slice(0, 2)" :key="index" :post="item" />
      <div v-if="activity.posts.length > 2">
        <HairyLink @click="$router.push(getArchiveLink(activity.year))">
          ....
        </HairyLink>
      </div>
    </ElTimelineItem>
  </ElTimeline>
</template>

<route lang="yaml">
meta:
  layout: archive
</route>

<style lang="scss" scoped>
.activity:hover {
  .HairyLink {
    color: var(--hy-c-primary);
  }
}
</style>
