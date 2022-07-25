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
    <div class="h-50vh flex-center">
      <HairyPostTitle v-if="title" :title="title" v-bind="$props">
        <template #description>
          <slot name="description" />
        </template>
      </HairyPostTitle>
    </div>
    <HairyWaves />
  </header>
</template>

<style>
.HairyHeader {
  background: url(https://tuimao233.gitee.io/mao-blog/background.jpg) center/cover no-repeat;
}
</style>
