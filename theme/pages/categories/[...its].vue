<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { useThemeConfig } from 'valaxy'
import { ElTimeline, ElTimelineItem } from 'element-plus'

import type { HairyTheme } from '../..'
import { useCategory, useCategoryPost } from '../../composables'

const themeConfig = useThemeConfig<HairyTheme.Config>()
const layout = computed(() => themeConfig.value.layout?.categories || 'post')

const router = useRouter()
const route = useRoute()

const categories = computed(() => route.params.its as string)
const paths = computed(() => categories.value.split('/').filter(Boolean))
const current = useCategory(paths)
const posts = useCategoryPost(paths)

const i18n = useI18n()

function getBreadcrumbPath(index: number) {
  const paths = categories.value.split('/').filter(Boolean)
  if (paths[index] === paths[paths.length - 1])
    return ''
  return `/categories/${paths.slice(0, index + 1).join('/')}`
}

function displayCategory(key: string) {
  router.push({ path: `/categories/${[...paths.value, key].join('/')}` })
}
</script>

<template>
  <HairyBreadcrumb class="mb-5" size="large" after="分类">
    <HairyBreadcrumbItem to="/">
      首页
    </HairyBreadcrumbItem>
    <HairyBreadcrumbItem :to="paths.length && '/categories/' || ''">
      全部
    </HairyBreadcrumbItem>
    <HairyBreadcrumbItem v-for="(key, index) in categories.split('/')" :key="key" :to="getBreadcrumbPath(index)">
      {{ i18n.t(key) }}
    </HairyBreadcrumbItem>
  </HairyBreadcrumb>

  <div class="grid__view dark:text-gray-3 flex-wrap">
    <template v-for="([key, item]) in current.children" :key="key">
      <div
        v-if="!key.startsWith('/post')"
        class="relative flex items-center flex-col cursor-pointer hover:text-primary transition-colors"
        @click="displayCategory(key)"
      >
        <div class="i-material-symbols-folder-open-rounded text-22 lt-sm:text-15" />
        <div class="text-center leading-normal">
          {{ i18n.t(key) }}
        </div>
        <div class="badge text-12px right-20px top-12px">
          {{ item.total }} dir
        </div>
      </div>
    </template>
  </div>
  <div class="border-t border-gray-200 dark:border-gray-500 mt-5" />

  <ElTimeline v-if="layout === 'timeline'" class="pt-5 pl-10">
    <ElTimelineItem v-for="(item, index) in posts" :key="index" hollow size="large">
      <HairyTimelinePostItem :post="item" />
    </ElTimelineItem>
  </ElTimeline>
  <template v-else>
    <HairyPosts :posts="posts" />
  </template>
</template>

<style lang="scss" scoped>
.badge {
  position: absolute;
  // padding-left: 6px;
  // padding-top: 2px;
  // padding-bottom: 2px;
  // padding-right: 6px;
  line-height: normal;
  border-radius: 50%;
  color: #fff;
}

.grid__view {
  display: grid;
  grid-template-columns: repeat(auto-fill, 7.5rem);
  gap: 3rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, 6.5rem);
  }

  &>* {
    height: var(--height);
  }
}
</style>

<route lang="yaml">
meta:
  layout: categories
</route>
