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

const show = computed(() => {
  return scroll.y.value < (headerHeight.value / 2) || cache.value === 'top'
})
</script>

<template>
  <div class="HairyNav fixed w-full h-3.125rem lt-sm:h-3.5rem top-0 z-20 opacity-0 transition-opacity duration-200" :class="[show && 'opacity-100']">
    <div class="mx-auto breakpoint flex relative z-1 h-full">
      <div class="flex items-center lt-sm:order-1 lt-sm:flex-1 justify-center">
        <HairyNavTitle />
      </div>
      <div class="flex items-center sm:flex-1">
        <HairyNavMenu class="sm:hidden pl-2 pr-13" />
        <HairyMenu class="lt-sm:hidden" />
      </div>
      <div class="flex-center order-1">
        <HairyNavToggleDark />
        <HairyNavSearch />
      </div>
    </div>
    <HairyNavBackground />
  </div>
</template>

<style>
</style>
