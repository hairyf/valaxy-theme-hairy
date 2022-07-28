<script lang="ts" setup>
import { useScroll, whenever } from '@vueuse/core'
import { computed, ref } from 'vue'
import { useHeaderHeight } from '../hooks/useHeaderHeight'

const headerHeight = useHeaderHeight()
const cache = ref<'top' | 'bottom'>('top')
const scroll = useScroll(document)

whenever(() => scroll.directions.top, () => {
  cache.value = 'top'
})
whenever(() => scroll.directions.bottom, () => {
  cache.value = 'bottom'
})

const isShow = computed(() => {
  return scroll.y.value < (headerHeight.value / 2) || cache.value === 'top'
})
</script>

<template>
  <div class="HairyNav fixed w-full h-3.125rem top-0 z-10 opacity-0 transition-opacity duration-200" :class="[isShow && 'opacity-100']">
    <div class="mx-auto breakpoint flex relative z-1">
      <div class="flex-1 flex items-center">
        <HairyNavTitle class="lt-sm:hidden" />
        <HairyMenu />
      </div>
      <div class="flex-center lt-sm:hidden">
        <HairyNavToggleDark />
        <HairyNavSearch />
      </div>
    </div>
    <HairyNavBackground />
  </div>
</template>

<style>
</style>
