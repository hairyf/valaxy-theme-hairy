<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{
  tag: string
}>()
</script>

<template>
  <div class="text-center pt-20 text-20">
    施工中
  </div>
</template>

<route lang="yaml">
meta:
  layout: tags
</route>
