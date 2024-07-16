<script lang="ts" setup>
import { ElBreadcrumb, breadcrumbProps } from 'element-plus'
import 'element-plus/theme-chalk/el-breadcrumb.css'
import type { PropType } from 'vue'
import { computed } from 'vue'

const props = defineProps({
  ...breadcrumbProps,
  size: String as PropType<'default' | 'large'>,
  after: String,
})
const text = computed(() => `"${props.after || ''}"`)
</script>

<template>
  <ElBreadcrumb :class="[size]" :style="{ '--after-text': text }" v-bind="$props">
    <slot />
  </ElBreadcrumb>
</template>

<style lang="scss">
  .el-breadcrumb {
    overflow: hidden;
    display: inline-block;
    position: relative;
  }
  .el-breadcrumb .el-breadcrumb__inner,
  .el-breadcrumb .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    color: var(--va-c-text);
  }
  .el-breadcrumb .el-breadcrumb__inner.is-link {
    @apply border-b border-dashed hover:border-primary hover:text-primary transition-all cursor-pointer;
    font-weight: normal;
  }

  .el-breadcrumb::after {
    @apply text-gray-5 text-size-5;
    content: var(--after-text);
    clear: none;
    transform: translateX(2px);
  }
  .el-breadcrumb.large {
    margin-top: 3rem;
    font-size: 2.5em;
    @apply lt-md:text-3xl lt-sm:text-xl;
    .el-breadcrumb__separator {
      @apply text-size-5 text-gray-5;
      font-weight: normal;
    }
  }
</style>
