<script lang="ts" setup>
import { ElTimeline, ElTimelineItem } from 'element-plus'
import { computed } from 'vue'
import type { Post } from 'valaxy'
import { useRoute } from 'vue-router'
import { getArchiveLink } from '../../../utils'
import { useYearArchives } from '../../../composables'

interface TimeLineByPost extends Post {
  type: 'link' | 'post'
  month: string
  link: string
  count: number
}

const activities = useYearArchives()

const year = computed(() => useRoute().params.year as string)

const filterYear = computed(() => activities.value.filter(item => item.year === year.value))
const timelines = computed(() => {
  const timeLines: Partial<TimeLineByPost>[] = []
  for (const { year, count, month, posts } of filterYear.value) {
    timeLines.push({
      type: 'link',
      month,
      count,
      link: getArchiveLink(year, month),
    })
    for (const post of posts)
      timeLines.push({ ...post, type: 'post' })
  }
  return timeLines as TimeLineByPost[]
})
</script>

<template>
  <HairyBreadcrumb class="mb-5" size="large" after="归档">
    <HairyBreadcrumbItem to="/archives/">
      全部
    </HairyBreadcrumbItem>
    <HairyBreadcrumbItem>
      {{ year }}年
    </HairyBreadcrumbItem>
  </HairyBreadcrumb>

  <ElTimeline>
    <template v-for="(item, index) in timelines" :key="index">
      <ElTimelineItem
        v-if="item.type === 'link'"
        hollow
        :index="index"
        size="large"
      >
        <HairyLink @click="$router.push(getArchiveLink(year, item.month))">
          {{ item.month }}月
        </HairyLink>
      </ElTimelineItem>
      <ElTimelineItem
        v-else
        hollow
        size="normal"
      >
        <HairyTimelineContent :post="item" />
      </ElTimelineItem>
    </template>
  </ElTimeline>
</template>

<route lang="yaml">
  meta:
    layout: archive-year
  </route>
