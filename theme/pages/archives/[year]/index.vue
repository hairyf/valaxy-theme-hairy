<script lang="ts" setup>
import { ElTimeline, ElTimelineItem } from 'element-plus/es/components/timeline/index'
import 'element-plus/es/components/timeline/style/index'
import 'element-plus/es/components/timeline-item/style/index'
import { computed } from 'vue'
import type { Post } from 'valaxy'
import { useYearArchives } from '../../../hooks/useYearArchives'
import { getArchiveLink } from '../../../utils'
interface TimeLineItem extends Post {
  type: 'link' | 'post'
  month: string
  link: string
  count: number
}
const props = defineProps<{
  year: string
}>()

const activities = useYearArchives()
const filterYear = computed(() => activities.value.filter(item => item.year === props.year))
const timelines = computed(() => {
  const timeLines: Partial<TimeLineItem>[] = []
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
  return timeLines as TimeLineItem[]
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

  <el-timeline>
    <template v-for="(item, index) in timelines" :key="index">
      <el-timeline-item
        v-if="item.type === 'link'"
        hollow
        :index="index"
        size="large"
      >
        <HairyLink @click="$router.push(getArchiveLink(year, item.month))">
          {{ item.month }}月
        </HairyLink>
      </el-timeline-item>
      <el-timeline-item
        v-else
        hollow
        size="normal"
      >
        <HairyTimelinePostItem :post="item" />
      </el-timeline-item>
    </template>
  </el-timeline>
</template>

<route lang="yaml">
meta:
  layout: year
</route>
