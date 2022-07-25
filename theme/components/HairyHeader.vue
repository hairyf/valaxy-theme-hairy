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
  <header ref="headerRef" class="HairyHeader">
    <div class="h-45vh flex-center">
      <HairyPostTitle v-if="title" class="relative z-2" :title="title" v-bind="$props">
        <template #description>
          <slot name="description" />
        </template>
      </HairyPostTitle>
    </div>
    <HairyCarousel class="absolute inset-0" />
    <HairyWaves class="relative z-10" />
  </header>
</template>

<style>
.HairyHeader {
  background: url(https://tuimao233.gitee.io/mao-blog/background.jpg) center/cover no-repeat;
  position: relative;
}
</style>
