<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '../store'

defineProps<{
  headline?: string
  title?: string
  description?: string
}>()

const { headerRef } = storeToRefs(useGlobalStore())
</script>

<template>
  <header ref="headerRef" class="relative min-h-30vh animate__animated animate__fadeIn">
    <div class="h-30vh lt-md:h-60vh min-h-80 flex-center">
      <HairyHeadHero v-if="title || headline || description || $slots.description" class="relative z-2" :title="title" v-bind="$props">
        <template #description>
          <slot name="description" />
        </template>
      </HairyHeadHero>
    </div>
    <HairySwiperCarousel class="inset-0" style="position: absolute" />
    <HairyHeadWaves class="relative z-10" />
  </header>
</template>

<style>
.HairyHeader {
  position: relative;
}
</style>
