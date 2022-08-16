<script lang="ts" setup>
import { ElTimeline, ElTimelineItem } from 'element-plus/es/components/timeline/index'
import 'element-plus/es/components/timeline/style/index'
import 'element-plus/es/components/timeline-item/style/index'
import { computed, defineProps } from 'vue'
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
  <HairyBreadcrumb class="mb-5" size="large" :after="`归档(${count}篇)`">
    <HairyBreadcrumbItem to="/archives/">
      全部
    </HairyBreadcrumbItem>
    <HairyBreadcrumbItem :to="getArchiveLink(year)">
      {{ year }}年
    </HairyBreadcrumbItem>
    <HairyBreadcrumbItem :to="getArchiveLink(year)">
      {{ month }}月
    </HairyBreadcrumbItem>
  </HairyBreadcrumb>
  <el-timeline>
    <el-timeline-item
      v-for="(item, index) in post"
      :key="index"
      hollow
      size="large"
    >
      <HairyTimelinePostItem :post="item" />
    </el-timeline-item>
  </el-timeline>
</template>

<route lang="yaml">
meta:
  layout: month
</route>
