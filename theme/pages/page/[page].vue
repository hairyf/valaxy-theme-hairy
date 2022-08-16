<script setup lang="ts">
defineProps<{ page: string }>()
</script>

<template>
  <HairyPostList :pagination="true" :cur-page="parseInt(page)" />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
