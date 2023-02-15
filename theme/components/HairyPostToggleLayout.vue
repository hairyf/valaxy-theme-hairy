<script lang="ts" setup>
import { useScroll } from '@vueuse/core'
import { computed } from 'vue'
import { usePostLayout } from '../hooks/usePostLayout'
import { useHeaderHeight } from '../hooks/useHeaderHeight'
import type { HairyPostLayout } from '..'

const layout = usePostLayout()
const layouts = [
  { layout: 'image:slice:reverse' as HairyPostLayout, icon: 'i-fluent-text-align-distributed-24-filled' },
  { layout: 'image:slice' as HairyPostLayout, icon: 'i-fluent-text-align-left-16-filled' },
  { layout: 'image' as HairyPostLayout, icon: 'i-fluent-text-align-justify-20-filled' },
  { layout: 'markdown' as HairyPostLayout, icon: 'i-fluent-markdown-20-filled' },
  { layout: 'text' as HairyPostLayout, icon: 'i-fluent-code-text-16-filled' },
]

const headerHeight = useHeaderHeight()
const scroll = useScroll(document)

const show = computed(() => {
  return scroll.y.value > headerHeight.value
})
</script>

<template>
  <div class="inline-flex gap-2 sticky top-15 inset-0 rounded-2" :class="[show && 'bg-white bg-opacity-85 dark:bg-black dark:bg-opacity-80 z-100']">
    <div v-for="(item) in layouts" :key="item.layout" class="p-2 rounded-full cursor-pointer" :class="[layout === item.layout && 'text-primary']" @click="layout = item.layout">
      <div class="text-size-xl" :class="item.icon" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
