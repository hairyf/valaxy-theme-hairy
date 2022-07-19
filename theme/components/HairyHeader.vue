<script lang="ts" setup>
import { useConfig } from 'valaxy'
const config = useConfig()
</script>

<template>
  <header class="HairyHeader">
    <div class="h-50vh flex-center">
      <HairyPostTitle :headline="config.title" :title="config.author.name" description="good evening, how are you doing?" />
    </div>
    <HairyWaves />
  </header>
</template>

<style>
.HairyHeader {
  background: url(https://tuimao233.gitee.io/mao-blog/background.jpg) center/cover no-repeat;
}
</style>
