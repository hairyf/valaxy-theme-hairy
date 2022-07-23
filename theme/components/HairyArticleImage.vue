<script lang="ts" setup>
import type { Post } from 'valaxy'
import { computed, defineProps } from 'vue'
import dayjs from 'dayjs'
import { usePostLayout } from '../hooks/usePostLayout'

defineProps<{
  post: Post
}>()
const layout = usePostLayout()
const slice = computed(() => layout.value.includes('slice'))
</script>

<template>
  <li class="HairyArticleImage my-10 py-2" :class="[slice && 'slice']">
    <article>
      <div class="flex justify-between items-center">
        <a class="text-size-2xl font-bold truncate">{{ post.title }}</a>
        <div class="flex justify-end gap-2 text-size-sm">
          <span>{{ dayjs(post.date).format('YYYY-MM-DD') }}</span>
          <span>2.2k字</span>
          <span>{{ post.duration || '2' }} 分钟</span>
        </div>
      </div>
      <div class="h-200px flex">
        <div class="flex-1 mr-4 post-image-content">
          <img class="post-image rounded-1 w-full h-full object-cover" :src="post.image" />
        </div>
        <div class="flex flex-col justify-between flex-1">
          <div class="flex-1 text-size-sm">
            <div class="line-clamp-text">
              {{ post.text }}
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div>TODO: 分类</div>
            <div class="text-base leading-6 font-medium">
              <a class="link" aria-label="read more" :href="post.path">Read more →</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  </li>
</template>

<style lang="scss" scoped>
.line-clamp-text {
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
}
.dark {
  .post-image {
    @apply opacity-75 hover:opacity-90 duration-200;
  }
}

.slice {
  webkit-clip-path: polygon(0 0,92% 0,100% 100%,0 100%);
  clip-path: polygon(0 0,92% 0,100% 100%,0 100%);
  border-radius: 0.625rem 0 0 0.625rem;
  overflow: hidden;
}

.HairyArticleImage.slice {
  .post-image {
    @apply transition-all;
  }
  &:hover {
    .post-image {
      transform: scale(1.05) rotate(1deg);
    }
  }
}
</style>
