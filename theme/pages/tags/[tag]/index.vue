<script lang="ts" setup>
import { computed } from 'vue'
import { usePostList } from 'valaxy'
import { ElTimeline, ElTimelineItem } from 'element-plus'
import { useRoute } from 'vue-router'

const tag = computed(() => useRoute().params.tag)

const posts = computed<any[]>(() =>
  usePostList().value.filter(post => post.tags?.includes(tag.value as string)),
)
</script>

<template>
  <HairyBreadcrumb class="mb-5" size="large" after="标签">
    <HairyBreadcrumbItem to="/">
      首页
    </HairyBreadcrumbItem>
    <HairyBreadcrumbItem>
      {{ tag }}
    </HairyBreadcrumbItem>
  </HairyBreadcrumb>
  <ElTimeline>
    <ElTimelineItem
      v-for="(item, index) in posts"
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
  layout: tag
</route>
