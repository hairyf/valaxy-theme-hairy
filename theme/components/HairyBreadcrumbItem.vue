<script lang="ts" setup>
import { ElBreadcrumbItem, breadcrumbItemProps } from 'element-plus/es/components/breadcrumb/index'
defineProps(breadcrumbItemProps)
</script>

<template>
  <ElBreadcrumbItem v-bind="$props">
    <slot />
  </ElBreadcrumbItem>
</template>

<style lang="scss" scoped>

</style>
