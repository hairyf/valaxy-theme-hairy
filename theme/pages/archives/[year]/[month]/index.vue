<script lang="ts" setup>
import { ElTimeline, ElTimelineItem } from 'element-plus'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useYearArchives } from '../../../../composables'
import { getArchiveLink } from '../../../../utils'

const year = computed(() => useRoute().params.year as string)
const month = computed(() => useRoute().params.month as string)

const activities = useYearArchives()
const months = computed(() =>
  activities.value
    .filter(item => item.year === year.value)
    .filter(item => item.month === month.value),
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
  <ElTimeline>
    <ElTimelineItem
      v-for="(item, index) in post"
      :key="index"
      hollow
      size="large"
    >
      <HairyTimelineContent :post="item" />
    </ElTimelineItem>
  </ElTimeline>
</template>

<route lang="yaml">
  meta:
    layout: archive-month
  </route>
