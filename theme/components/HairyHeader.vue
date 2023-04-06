<script lang="ts" setup>
import { useGlobalState } from '../composables'

defineProps<{
  headline?: String
  title?: String
  description?: string
}>()

const { headerRef } = useGlobalState()
</script>

<template>
  <header ref="headerRef" class="HairyHeader relative animate__animated animate__fadeIn">
    <div class="h-30vh lt-md:h-60vh min-h-80 flex-center">
      <HairyHeaderInfo v-if="title" class="relative z-2" :title="title" v-bind="$props">
        <template #description>
          <slot name="description" />
        </template>
      </HairyHeaderInfo>
    </div>
    <HairyCarousel class="inset-0" style="position: absolute" />
    <HairyWaves class="relative z-10" />
  </header>
</template>

<style>
.HairyHeader {
  position: relative;
}
</style>
