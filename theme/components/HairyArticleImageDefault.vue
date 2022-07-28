<script lang="ts" setup>
import type { Post } from 'valaxy'
import { computed, defineProps } from 'vue'
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import last from 'lodash/last'
import { usePostLayout } from '../hooks/usePostLayout'
import { toArr } from '../utils'

const props = defineProps<{
  post: Post
  reverse?: boolean
}>()
const router = useRouter()
const layout = usePostLayout()
const slice = computed(() => layout.value.includes('slice'))
const image = computed(() => props.post.image)

const i18n = useI18n()

const onReadMore = () => {
  if (props.post.path)
    router.push(props.post.path)
}

const displayCategory = (keys: string | string[] = []) => {
  router.push({ path: `/categories/${toArr(keys).join('/')}` })
}
</script>

<template>
  <li class="HairyArticleImage my-10 py-2" :class="[slice && 'slice', reverse && 'reverse']">
    <article>
      <div class="flex justify-between items-center">
        <a class="text-size-2xl font-bold truncate cursor-pointer" :class="[reverse ? 'order-first' : 'order-last']" @click="onReadMore">{{ post.title }}</a>
        <div class="flex justify-end gap-2 text-size-sm">
          <span>{{ dayjs(post.date).format('YYYY-MM-DD') }}</span>
          <span>{{ (post.length / 1000).toFixed(1) }}k字</span>
          <span>{{ post.durations.minutes.toFixed(2) }}分钟</span>
        </div>
      </div>
      <div class="h-200px flex">
        <div class="flex-1 post-image-content" :class="[reverse ? 'order-last' : 'order-first']">
          <img
            class="post-image rounded-1 w-full h-full object-cover cursor-pointer" :src="image"
            @click="onReadMore"
          />
        </div>
        <div class="flex flex-col justify-between flex-1">
          <div class="flex-1 text-size-sm">
            <div class="line-clamp-text">
              {{ post.text }}
            </div>
          </div>
          <div class="flex justify-between items-center">
            <a class="cursor-pointer" :class="[reverse && 'order-1']">
              <span v-if="post.categories?.length" @click="displayCategory(post.categories)">
                {{ i18n.t(last(toArr(post.categories)) || '') }}
              </span>
            </a>
            <div class="text-base leading-6 font-medium">
              <a class="link cursor-pointer" aria-label="read more" @click="onReadMore">
                <span v-if="reverse">←</span>
                Read more
                <span v-if="!reverse">→</span>
              </a>
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
    @apply opacity-75 hover: opacity-90 duration-200;
  }
}

.post-image-content {
  margin-right: 1rem;
}

.slice {
  .post-image-content {
    webkit-clip-path: polygon(0 0, 92% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 92% 0, 100% 100%, 0 100%);
    border-radius: 0.625rem 0 0 0.625rem;
    overflow: hidden;
  }
}

.reverse {
  .post-image-content {
    margin-right: 0;
    margin-left: 1rem;
    clip-path: polygon(0 0,100% 0,100% 100%,8% 100%);
    border-radius: 0 0.625rem 0.625rem 0;
    overflow: hidden;
  }
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
