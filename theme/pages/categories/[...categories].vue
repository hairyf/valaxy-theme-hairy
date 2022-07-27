<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useCurrentCategory } from '../../hooks/useCategory'
import { useCategoryPost } from '../../hooks/useCategoryPost'

import { usePostLayout } from '../../hooks/usePostLayout'
const props = defineProps<{
  categories: string
}>()
const layout = usePostLayout()

const router = useRouter()

const paths = computed(() => props.categories.split('/').filter(Boolean))
const current = useCurrentCategory(paths)

console.log(current.value)

const posts = useCategoryPost(paths)

const i18n = useI18n()

const getBreadcrumbPath = (index: number) => {
  if (paths.value[index] === paths.value.at(-1))
    return ''
  return `/categories/${paths.value.slice(0, index)}`
}
const displayCategory = (key: string) => {
  router.push({ path: `/categories/${[...paths.value, key].join('/')}` })
}
</script>

<template>
  <HairyBreadcrumb class="mb-5" size="large" after="分类">
    <HairyBreadcrumbItem to="/">
      首页
    </HairyBreadcrumbItem>
    <HairyBreadcrumbItem to="/categories/">
      全部
    </HairyBreadcrumbItem>
    <HairyBreadcrumbItem v-for="(key, index) in paths" :key="key" :to="getBreadcrumbPath(index)">
      {{ i18n.t(key) }}
    </HairyBreadcrumbItem>
  </HairyBreadcrumb>
  <div class="grid grid-flow-col auto-cols-30 gap-12 dark:text-gray-3">
    <template v-for="([key, item]) in current.children" :key="key">
      <div class="relative flex items-center flex-col cursor-pointer hover:text-primary transition-color" @click="displayCategory(key)">
        <div class="i-ri-folder-open-line text-22" />
        <div class="text-center leading-normal">
          {{ i18n.t(key) }}
        </div>
        <div class="badge">
          {{ item.total }}
        </div>
      </div>
    </template>
  </div>
  <div class="border-t border-gray-200 dark:border-gray-500 mt-5" />
  <HairyPostImageList v-if="layout.includes('image')" :posts="posts" />
  <HairyPostList v-else :posts="posts" />
</template>

<style lang="scss" scoped>
  .badge {
    position: absolute;
    right: 0.8rem;
    top: 0.5rem;
    padding-left: 6px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-right: 6px;

    line-height: normal;
    border-radius: 50%;
    background-color: #f56c6c;
    color: #fff;
  }
</style>
