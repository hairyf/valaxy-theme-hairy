<script lang="ts" setup>
import { useConfig } from 'valaxy'
const config = useConfig()
</script>

<template>
  <HairyLayout
    class="HairyHomeLayout"
    :header="{
      headline: config.title,
      title: config.author.name,
      description: 'good evening, how are you doing?',
    }"
  >
    <router-view />
  </HairyLayout>
</template>

<style>
.HairyHomeHeader .title {
  @apply tracking-5;
}
</style>
