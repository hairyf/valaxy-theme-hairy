<script lang="ts" setup>
import type { Post } from 'valaxy'
import { computed, defineProps } from 'vue'
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'
import { removeTags, toArray } from '../../utils'
import { useLayoutPost } from '../../composables'

const props = defineProps<{
  post: Post
  reverse?: boolean
}>()

const router = useRouter()
const layout = useLayoutPost()
const slice = computed(() => layout.value.includes('slice'))
const image = computed(() => props.post.image?.toString())
const text = computed(() => removeTags(props.post.excerpt))
function onReadMore() {
  if (props.post.path)
    router.push(props.post.path)
}

function displayCategory(keys: string | string[] = []) {
  router.push({ path: `/categories/${toArray(keys).join('/')}` })
}
</script>

<template>
  <li class="HairyArticleImage mb-10 py-2 lt-sm:mb-5 lt-md:mb-6" :class="[slice && 'slice', reverse && 'reverse']">
    <article>
      <div class="flex justify-between items-center">
        <a
          class="text-size-2xl lt-sm:max-w-200px font-bold truncate cursor-pointer lt-sm:text-size-lg"
          :class="[reverse ? 'order-last' : 'order-first']" @click="onReadMore"
        >
          {{ post.title }}
        </a>
        <div class="flex justify-end gap-2 text-size-sm lt-sm:text-size-xs">
          <span>{{ dayjs(post.date).format('YYYY-MM-DD') }}</span>
          <span>{{ post.wordCount }}字</span>
          <span class="lt-sm:hidden">{{ post.readingTime }}分钟</span>
        </div>
      </div>
      <div
        class="h-200px lt-sm:h-120px flex bg-light-2 dark:bg-transparent rounded-5"
        :class="[reverse ? 'pl-4' : 'pr-4']"
      >
        <div class="flex-1 post-image-content" :class="[reverse ? 'order-last' : 'order-first']">
          <img class="post-image rounded-1 w-full h-full object-cover cursor-pointer" :src="image" @click="onReadMore">
        </div>
        <div class="flex-1 lt-md:flex-[1.2] flex flex-col justify-between py-2 dark:py-0">
          <div class="flex-1 text-size-sm">
            <div class="line-clamp-text line-clamp-5 lt-sm:line-clamp-3">
              {{ text }}
            </div>
          </div>
          <div class="flex justify-between items-center">
            <a class="cursor-pointer truncate lt-sm:max-w-120px" :class="[reverse && 'order-1']">
              <span v-if="post.categories?.length" @click="displayCategory(post.categories)">
                {{ $t(toArray(post.categories).at(-1) || '', {}, { missingWarn: false }) }}
              </span>
            </a>
            <div class="text-base leading-6 font-medium">
              <a class="link flex gap-2 cursor-pointer" aria-label="read more" @click="onReadMore">
                <span v-if="reverse">←</span>
                <span class="hidden md:block">Read more</span>
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
}

.post-image {
  @apply duration-200;
}

.dark {
  .post-image {
    @apply opacity-75 hover:opacity-90 duration-200;
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
    clip-path: polygon(0 0, 100% 0, 100% 100%, 8% 100%);
    border-radius: 0 0.625rem 0.625rem 0;
    overflow: hidden;
  }
}

.HairyArticleImage.slice {
  .post-image {
    // @apply transition-all;
  }

  &:hover {
    .post-image {
      transform: scale(1.05) rotate(1deg);
    }
  }
}
</style>
