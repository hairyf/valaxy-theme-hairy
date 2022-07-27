<script lang="ts" setup>
import { useFrontmatter } from 'valaxy'
const post = useFrontmatter()
</script>

<template>
  <HairyNav />
  <HairyHeader :title="post.title" />
  <HairyBody />
  <HairyBackToTop />
</template>

