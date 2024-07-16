<script lang="ts" setup>
import { useElementSize, useScroll } from '@vueuse/core'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '../../store'
import { useLayoutPost } from '../../composables'

const layout = useLayoutPost()

const layouts = [
  { layout: 'image:slice:reverse' as const, icon: 'i-fluent-text-align-distributed-24-filled' },
  { layout: 'image:slice' as const, icon: 'i-fluent-text-align-left-16-filled' },
  { layout: 'image' as const, icon: 'i-fluent-text-align-justify-20-filled' },
  { layout: 'markdown' as const, icon: 'i-fluent-markdown-20-filled' },
  { layout: 'text' as const, icon: 'i-fluent-code-text-16-filled' },
]

const globalStore = useGlobalStore()
const { headerRef } = storeToRefs(globalStore)
const { height: headerHeight } = useElementSize(headerRef)
const scroll = useScroll(typeof document !== 'undefined' ? document : undefined)

const show = computed(() => {
  return scroll.y.value > headerHeight.value
})
</script>

<template>
  <div
    class="inline-flex gap-2 sticky top-15 inset-0 rounded-2 transition-colors duration-200"
    :class="[show && 'bg-white bg-opacity-85 dark:bg-black dark:bg-opacity-80 z-100']"
  >
    <div v-for="(item) in layouts" :key="item.layout" class="p-2 rounded-full cursor-pointer" :class="[layout === item.layout && 'text-primary']" @click="layout = item.layout">
      <div class="text-size-xl" :class="item.icon" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
