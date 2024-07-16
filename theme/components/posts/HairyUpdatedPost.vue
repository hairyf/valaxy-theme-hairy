<!-- eslint-disable unused-imports/no-unused-vars -->
<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import type { Post } from 'valaxy'
import { ElTag } from 'element-plus'
import { useRouter } from 'vue-router'
import { toArray } from '../../utils'

const props = defineProps<{
  type?: string
  posts: Post[]
}>()

const router = useRouter()

const post = computed(() => {
  const clone = [...props.posts].map(v => ({
    ...v,
    date: v.date instanceof Date
      ? v.date.valueOf()
      : new Date(v.date || Date.now()).valueOf(),
  }))
  clone.sort((b, a) => a.date - b.date)
  return clone[0]
})

function displayCategory(keys: string | string[] = []) {
  router.push({ path: `/categories/${toArray(keys).join('/')}` })
}
</script>

<template>
  <div class="border-b border-[var(--hy-c-divider)] flex-wrap items-center flex justify-between mb-4 gap-2">
    <div class="flex-shrink-0 w-100px">
      最近更新：
    </div>
    <div class="flex-1 flex items-center justify-end gap-2 flex-wrap">
      <HairyLink :href="post.path">
        {{ post.title }}
      </HairyLink>
      <template v-if="post.tags?.length">
        <div class="lt-md:hidden">
          |
        </div>
        <div class="lt-md:hidden">
          <div class="tags flex-center gap-2">
            <div class="i-material-symbols-bookmarks" />
            <ElTag
              v-for="(tag) in post.tags"
              :key="tag"
              size="small"
              class="dark:bg-dark-50 cursor-pointer border-none!"
              @click="$router.push(`/tags/${tag}`)"
            >
              {{ tag }}
            </ElTag>
          </div>
        </div>
      </template>
      <template v-if="post.categories">
        <div class="lt-md:hidden">
          |
        </div>
        <div class="lt-md:hidden flex items-center gap-2">
          <div class="i-material-symbols-folder-open-rounded text-14px" />
          <ElTag size="small" class="dark:bg-dark-50 cursor-pointer border-none!" @click="displayCategory(post.categories)">
            {{ toArray(post.categories).map($t).join('/') }}
          </ElTag>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
