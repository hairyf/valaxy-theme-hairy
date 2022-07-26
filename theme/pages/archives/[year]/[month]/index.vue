<script lang="ts" setup>
import { ElTimeline, ElTimelineItem } from 'element-plus'
import 'element-plus/es/components/timeline/style/index'
import 'element-plus/es/components/timeline-item/style/index'
import { computed, defineProps } from 'vue'
import dayjs from 'dayjs'
import { useYearArchives } from '../../../../hooks/useYearArchives'
import { getArchiveLink } from '../../../../utils'

const props = defineProps<{
  year: string
  month: string
}>()

const activities = useYearArchives()
const months = computed(() =>
  activities.value
    .filter(item => item.year === props.year)
    .filter(item => item.month === props.month),
)
const count = computed(() => months.value.reduce((total, value) => total + value.count, 0))
const post = computed(() => months.value.flatMap(item => item.posts))
</script>

<template>
  <div class="activity inline-flex items-end text-size-2.5em leading-12 pt-5 mb-10">
    <HairyLink @click="$router.push(getArchiveLink())">
      全部
    </HairyLink>
    <span class="text-gray-5 text-size-5 mx-2">/</span>
    <HairyLink @click="$router.push(getArchiveLink(year))">
      {{ year }}年
    </HairyLink>
    <span class="text-gray-5 text-size-5 mx-2">/</span>
    <span>{{ month }}月</span>
    <span class="text-gray-5 text-size-5 ml-1">归档({{ count }}篇)</span>
  </div>
  <el-timeline>
    <el-timeline-item
      v-for="(item, index) in post"
      :key="index"
      hollow
      size="large"
    >
      <div class="mb-1 text-size-3.5 mt-1.5">
        {{ dayjs(item.date).format('MM-DD') }}
      </div>
      <a class="cursor-pointer text-size-4" @click="$router.push(item.path || '')">{{ item.title }}</a>
    </el-timeline-item>
  </el-timeline>
</template>

<route lang="yaml">
meta:
  layout: month
</route>
