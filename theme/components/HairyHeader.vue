<script lang="ts" setup>
defineProps<{
  headline?: String
  title?: String
  description?: string
}>()
</script>

<template>
  <header class="HairyHeader">
    <div class="h-50vh flex-center">
      <HairyPostTitle v-if="title" :title="title" v-bind="$props" />
    </div>
    <HairyWaves />
  </header>
</template>

<style>
.HairyHeader {
  background: url(https://tuimao233.gitee.io/mao-blog/background.jpg) center/cover no-repeat;
}
</style>
