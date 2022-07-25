<script lang="ts" setup>
import { useFrontmatter } from 'valaxy'
const post = useFrontmatter()
</script>

<template>
  <HairyNav />
  <HairyHeader :title="post.title" />
  <HairyAside />
  <HairyBody />
  <HairyBackToTop />
</template>

