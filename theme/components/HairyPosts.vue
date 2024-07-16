<script lang="ts" setup>
import { computed, defineProps, ref, withDefaults } from 'vue'
import type { Post } from 'valaxy'
import { usePostList } from 'valaxy'
import { useLayoutPost } from '../composables'

const props = withDefaults(defineProps<{
  type?: string
  posts?: Post[]
  curPage?: number
  pagination?: boolean
  updated?: boolean
}>(), {
  curPage: 1,
  pagination: false,
})
const layout = useLayoutPost()

const pageSize = ref(7)
const routes = usePostList({ type: props.type || '' })
const posts = computed<any[]>(() => props.posts || routes.value)
const pagePosts = computed(() => posts.value.slice((props.curPage - 1) * pageSize.value, props.curPage * pageSize.value))
const displayedPosts = computed(() => props.pagination ? pagePosts.value : posts.value)
</script>

<template>
  <div class="mt-8">
    <HairyPostToggleLayout />
    <HairyUpdatedPost v-if="updated" :posts="posts" />
    <HairyPostImageList v-if="layout.includes('image')" :posts="displayedPosts" />
    <HairyPostTextsList v-else :posts="displayedPosts" />
    <ValaxyPagination v-if="pagination" class="mb-6" :cur-page="curPage" :page-size="pageSize" :total="posts.length" />
  </div>
</template>

<style lang="scss">
.pagination {
  font-size: 16px;
}

.pagination .prev.active,
.pagination .next.active,
.pagination .page-number.active {
  font-weight: normal;
  background: transparent;
  color: var(--hy-c-primary);
  cursor: default;
}

.pagination .prev:hover,
.pagination .next:hover,
.pagination .page-number:hover {
  color: var(--va-c-bg);
  background: rgba(143, 230, 213, 0.8);
}
</style>
