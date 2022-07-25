<script lang="ts" setup>
import { useConfig } from 'valaxy'
const config = useConfig()
</script>

<template>
  <HairyNav />
  <HairyHeader
    class="HairyHomeHeader" :headline="config.title" :title="config.author.name"
    description="good evening, how are you doing?"
  />
  <HairyBody />
  <HairyBackToTop />
</template>

<style>
.HairyHomeHeader .title {
  @apply tracking-5;
}
</style>
