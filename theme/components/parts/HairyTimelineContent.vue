<script lang="ts" setup>
import type { Post } from 'valaxy'
import dayjs from 'dayjs'
import { withDefaults } from 'vue'
import { last } from 'lodash-es'
import { useRouter } from 'vue-router'
import { toArray } from '../../utils'

withDefaults(
  defineProps<{
    post: Post
    format?: string
  }>(),
  {
    format: 'YYYY-MM-DD',
  },
)

const router = useRouter()

function displayCategory(keys: string | string[] = []) {
  router.push({ path: `/categories/${toArray(keys).join('/')}` })
}
</script>

<template>
  <div class="mb-1 text-size-3.5 mt-1.5 flex items-center">
    <div class="mr-2.2 dark:text-gray-500 text-gray-400">
      {{ dayjs(post.date).format(format) }}
    </div>
    <HairyLink v-if="post.categories?.length" bordered type="white" @click="displayCategory(post.categories)">
      {{ $t(last(toArray(post.categories)) || '', {}, { missingWarn: false }) }}
    </HairyLink>
  </div>
  <a class="cursor-pointer text-size-4" @click="$router.push(post.path || '')">{{ post.title }}</a>
</template>
