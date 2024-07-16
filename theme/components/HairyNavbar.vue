<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref } from 'vue'
import { useElementSize, useScroll, whenever } from '@vueuse/core'
import { useSiteConfig } from 'valaxy'
import { useGlobalStore } from '../store'

// get header height
const globalStore = useGlobalStore()
const { headerRef } = storeToRefs(globalStore)
const headerSize = useElementSize(headerRef)
const headerHeight = computed(() => headerSize.height.value)

// get document scroll
const documentRef = ref()
const scroll = useScroll(documentRef)
const dire = ref<'top' | 'bottom'>('top')

whenever(() => scroll.directions.top, () => dire.value = 'top')
whenever(() => scroll.directions.bottom, () => dire.value = 'bottom')

const show = computed(() => {
  return scroll.y.value < (headerHeight.value / 2)
    || dire.value === 'top'
})
const config = useSiteConfig()
onMounted(() => documentRef.value = document)
</script>

<template>
  <div
    class="fixed w-full h-3.125rem lt-sm:h-3.5rem top-0 opacity-0 z-1000 duration-200"
    :class="[show && 'opacity-100']"
  >
    <div class="px-12px md:px-0 mx-auto container flex relative z-1 h-full">
      <div class="flex items-center lt-sm:order-1 lt-sm:flex-1 justify-center">
        <HairyLink class="px-2.5" type="white" :href="config.url">
          {{ config.title }}
        </HairyLink>
      </div>
      <div class="flex items-center sm:flex-1">
        <HairyNavExpand class="sm:hidden pl-2 pr-13" />
        <HairyNav class="lt-sm:hidden" />
        <slot name="nav" />
      </div>
      <div class="flex-center order-1">
        <HairyNavbarToggleDark />
        <HairySearch />
      </div>
    </div>

    <HairyNavbarBackground />
  </div>
</template>

<style lang="scss" scoped></style>
