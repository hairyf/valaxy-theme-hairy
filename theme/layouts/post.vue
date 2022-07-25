<script lang="ts" setup>
import { useFrontmatter } from 'valaxy'
import dayjs from 'dayjs'

const post = useFrontmatter()
</script>

<template>
  <HairyNav />
  <HairyHeader :title="post.title">
    <template #description>
      <div class="flex gap-2">
        <span>发表于 {{ dayjs(post.date).format('YYYY-MM-DD') }}</span>
        <span>本文字数 {{ (post.length / 1000).toFixed(1) }}k 字</span>
        <span>阅读时长 {{ post.durations.minutes.toFixed(2) }} 分钟</span>
      </div>
    </template>
  </HairyHeader>
  <HairyAside />
  <HairyBody />
  <HairyBackToTop />
</template>

