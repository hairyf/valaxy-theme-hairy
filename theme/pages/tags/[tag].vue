<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{
  tag: string
}>()
</script>

<template>
  <HairyBreadcrumb class="mb-5" size="large" after="标签">
    <HairyBreadcrumbItem to="/">
      首页
    </HairyBreadcrumbItem>
  </HairyBreadcrumb>
</template>

<route lang="yaml">
meta:
  layout: tag
</route>
