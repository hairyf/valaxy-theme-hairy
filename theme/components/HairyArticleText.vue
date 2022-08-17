<script lang="ts" setup>
import { useThemeConfig } from 'valaxy'
import type { Post } from 'valaxy'
import { computed, defineProps } from 'vue'
import type { HairyTheme } from '..'
const props = defineProps<{
  post: Post
}>()
const themeConfig = useThemeConfig<HairyTheme>()
const layout = computed(() => themeConfig.value.post?.layout || 'text')
const text = computed(() => {
  if (layout.value === 'text')
    return props.post.text
  return props.post.excerpt
})

const Blogs = {
  name: 'Mao’s blog',
  desc: '记录生活、持续学习。',
  link: 'https://hairy.blog/',
  thumbnail: 'https://user-images.githubusercontent.com/49724027/182444624-6228d153-94cb-461d-a5d8-be8535441fb6.png',
}
</script>

<template>
  <li class="py-12">
    <article class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
      <div class="space-y-5 xl:col-span-4">
        <div class="space-y-6">
          <h2 class="text-2xl leading-8 font-bold tracking-tight">
            <a class="st-text" :href="post.path">{{ post.title }}</a>
          </h2>
          <div
            v-if="text"
            class="prose max-w-none text-gray-500"
            v-html="text"
          />
        </div>
        <div class="text-base leading-6 font-medium">
          <a class="link" aria-label="read more" :href="post.path">Read more →</a>
        </div>
      </div>
    </article>
  </li>
</template>
