<script lang="ts" setup>
import { useContext } from '../hooks/useContext'

defineProps<{
  headline?: String
  title?: String
  description?: string
}>()

const { headerRef } = useContext()
</script>

<template>
  <header ref="headerRef" class="HairyHeader relative animate__animated animate__fadeIn">
    <div class="h-30vh lt-md:h-60vh min-h-80 flex-center">
      <HairyPostTitle v-if="title" class="relative z-2" :title="title" v-bind="$props">
        <template #description>
          <slot name="description" />
        </template>
      </HairyPostTitle>
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
