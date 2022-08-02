<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import { usePostList } from 'valaxy'
import { ElTimeline, ElTimelineItem } from 'element-plus/es/components/timeline/index'
import 'element-plus/es/components/timeline/style/index'
import 'element-plus/es/components/timeline-item/style/index'
const props = defineProps<{
  tag: string
}>()

const posts = usePostList()

const tagPosts = computed<any[]>(() => posts.value.filter(post => post.tags?.includes(props.tag)))
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
  <el-timeline>
    <el-timeline-item
      v-for="(item, index) in tagPosts"
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
  layout: tag
</route>
