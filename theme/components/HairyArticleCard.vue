<script lang="ts" setup>
import type { Post } from 'valaxy'
import { defineProps } from 'vue'
defineProps<{
  post: Post
}>()
</script>

<template>
  <article class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
    <div class="space-y-5 xl:col-span-4">
      <div class="space-y-6">
        <h2 class="text-2xl leading-8 font-bold tracking-tight">
          <a class="st-text" :href="post.path">{{ post.title }}</a>
        </h2>
        <div
          v-if="post.excerpt"
          class="prose max-w-none text-gray-500"
          v-html="post.excerpt"
        />
      </div>
      <div class="text-base leading-6 font-medium">
        <a class="link" aria-label="read more" :href="post.path">Read more →</a>
      </div>
    </div>
  </article>
</template>
