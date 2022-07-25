<script lang="ts" setup>
import { ElTimeline, ElTimelineItem } from 'element-plus'
import dayjs from 'dayjs'
import 'element-plus/es/components/timeline/style/index'
import 'element-plus/es/components/timeline-item/style/index'
import { computed } from 'vue'
import type { Post } from 'valaxy'
import { useYearArchives } from '../../../hooks/useYearArchives'
import { getArchiveLink } from '../../..//utils'
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
  <div class="text-size-2.5em mb-5">
    title
  </div>
  <el-timeline>
    <template v-for="(item, index) in timelines" :key="index">
      <el-timeline-item
        v-if="item.type === 'link'"
        hollow
        size="large"
      >
        <HairyLink @click="$router.push(item.link)">
          {{ item.month }}月
        </HairyLink>
      </el-timeline-item>
      <el-timeline-item
        v-else
        hollow
        size="normal"
      >
        <div class="mb-1 text-size-3.5 mt-1.5">
          {{ dayjs(item.date).format('MM-DD') }}
        </div>
        <a class="cursor-pointer text-size-4" @click="$router.push(item.path || '')">{{ item.title }}</a>
      </el-timeline-item>
    </template>
  </el-timeline>
</template>

<route lang="yaml">
meta:
  layout: year
</route>
