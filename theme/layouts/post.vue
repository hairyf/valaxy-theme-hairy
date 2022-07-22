<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { Post } from 'valaxy'
const route = useRoute()
const post = computed<Post>(() => route.meta)
</script>

<template>
  <HairyNav />
  <HairyHeader :title="post.title" />
  <HairyAside />
  <HairyBody />
  <HairyBackToTop />
</template>

