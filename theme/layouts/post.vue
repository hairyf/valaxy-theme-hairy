<script lang="ts" setup>
import { useFrontmatter } from 'valaxy'
const post = useFrontmatter()
</script>

<template>
  <HairyNav />
  <HairyHeader :title="post.title">
    <template #description>
      <div class="flex gap-2">
        <span>发表于 2022-07-01</span>
        <span>本文字数 8.2k 字</span>
        <span>阅读时长 7 分钟</span>
      </div>
    </template>
  </HairyHeader>
  <HairyAside />
  <HairyBody />
  <HairyBackToTop />
</template>

