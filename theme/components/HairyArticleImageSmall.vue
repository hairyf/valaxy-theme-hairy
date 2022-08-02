<script lang="ts" setup>
import type { Post } from 'valaxy'
import { computed, defineProps } from 'vue'
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { last } from 'lodash-es'
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
    </article>
  </li>
</template>

<style lang="scss">

</style>
