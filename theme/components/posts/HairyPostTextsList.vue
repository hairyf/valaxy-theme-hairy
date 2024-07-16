<script lang="ts" setup>
import type { Ref } from 'vue'
import { computed } from 'vue'
import type { Post } from 'valaxy'
import { usePostList } from 'valaxy'

const props = withDefaults(defineProps<{
  type?: string
  posts?: Post[]
}>(), {})

const routes = usePostList() as any as Ref<Post[]>
const posts = computed(() => props.posts || routes.value)
</script>

<template>
  <ul class="divide-y divide-gray-200 dark:divide-gray-700">
    <Transition v-for="post, i in posts" :key="i" name="fade">
      <HairyArticleText :post="post" />
    </Transition>
  </ul>
</template>
