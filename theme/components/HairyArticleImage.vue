<script lang="ts" setup>
import type { Post } from 'valaxy'

defineProps<{
  post: Post
  reverse?: boolean
}>()
</script>

<template>
  <HairyArticleImageDefault :post="post" :reverse="reverse" class="hidden sm:block" />
  <HairyArticleImageSmall :post="post" :reverse="reverse" class="hidden lt-sm:block" />
</template>

<style lang="scss">

</style>
