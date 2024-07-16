<script lang="ts" setup>
import { ElBreadcrumbItem, breadcrumbItemProps } from 'element-plus'

defineProps(breadcrumbItemProps)
</script>

<template>
  <ElBreadcrumbItem v-bind="$props">
    <slot />
  </ElBreadcrumbItem>
</template>
