<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useThemeConfig } from 'valaxy'
import { ElTimeline, ElTimelineItem } from 'element-plus/es/components/timeline/index'
import { useCurrentCategory } from '../../hooks/useCategory'
import { useCategoryPost } from '../../hooks/useCategoryPost'

import type { HairyTheme } from '../..'
import 'element-plus/es/components/timeline/style/index'
import 'element-plus/es/components/timeline-item/style/index'
const props = defineProps<{
  categories: string
}>()
const themeConfig = useThemeConfig<HairyTheme>()
const categoriesLayout = computed(() => themeConfig.value.categories?.layout || 'post')

const router = useRouter()

const paths = computed(() => props.categories.split('/').filter(Boolean))
const current = useCurrentCategory(paths)
const posts = useCategoryPost(paths)

const i18n = useI18n()

const s = '/'

const getBreadcrumbPath = (index: number) => {
  const paths = props.categories.split('/').filter(Boolean)
  if (paths[index] === paths[paths.length - 1])
    return ''
  return `/categories/${paths.slice(0, index + 1).join('/')}`
}
const displayCategory = (key: string) => {
  router.push({ path: `/categories/${[key, ...paths.value].reverse().join('/')}` })
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
    <HairyBreadcrumbItem v-for="(key, index) in categories.split(s)" :key="key" :to="getBreadcrumbPath(index)">
      {{ i18n.t(key) }}
    </HairyBreadcrumbItem>
  </HairyBreadcrumb>

  <div class="grid__view dark:text-gray-3 flex-wrap">
    <template v-for="([key, item]) in current.children" :key="key">
      <div
        class="relative flex items-center flex-col cursor-pointer hover:text-primary transition-color"
        @click="displayCategory(key)"
      >
        <div class="i-ri-folder-open-line text-22 lt-sm:text-15" />
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

  <el-timeline v-if="categoriesLayout === 'timeline'" class="pt-5 pl-10">
    <el-timeline-item v-for="(item, index) in posts" :key="index" hollow size="large">
      <HairyTimelinePostItem :post="item" />
    </el-timeline-item>
  </el-timeline>
  <template v-else>
    <HairyPostList :posts="posts" />
  </template>
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
