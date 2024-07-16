<script lang="ts" setup>
import { usePostList, useTags } from 'valaxy'
import { computed, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { toArray } from '../../utils'
import { useGlobalStore } from '../../store'

const posts = usePostList()
const tags = useTags()
const router = useRouter()
const { showDrawer } = storeToRefs(useGlobalStore())

const total = computed(() => {
  const categories = posts.value.map(v => toArray(v.categories || [])).filter(v => v.length)
  const maps: string[] = []
  for (const category of categories) {
    let caches: string[] = []
    for (const iterator of category) {
      caches.push(iterator)
      maps.push(caches.join('-'))
    }
    caches = []
  }
  return new Set(maps).size
})

async function navigation(path: string) {
  await router.push(path)
  await nextTick()
  showDrawer.value = false
}
</script>

<template>
  <div class="flex justify-center mt-2">
    <HairyUserStats :count="posts.length" @click="navigation('/archives/')">
      文章
    </HairyUserStats>
    <div class="w-1px bg-gray bg-opacity-50" />
    <HairyUserStats :count="total" @click="navigation('/categories/')">
      分类
    </HairyUserStats>
    <div class="w-1px bg-gray bg-opacity-50" />
    <HairyUserStats :count="tags.size" @click="navigation('/tags/')">
      标签
    </HairyUserStats>
  </div>
  <HairySocialLinks class="mt-5" />
  <HairyMenu class="HairyUserMenu mt-5 flex-col h-auto" />
</template>

<style lang="scss">
  .HairyUserMenu {
    display: flex;
    flex-direction: column;
    gap: 6px;
    .HairyMenuItem {
      padding: 2px;
      width: 100%;
      border: 1px solid transparent;
      border-radius: 10px;
      transition: all 0.2s;
      background-color: transparent;
      user-select: none;
      > div {
        justify-content: center;
      }
    }

    .HairyMenuItem:hover,
    .HairyMenuItem.active {
      background-color: #f4f4f5;
    }
    .HairyMenuItem:active {
      background-color: #efefef;
    }

    .HairyMenuItem.active + .HairyMenuItem {
      border-top-color: transparent;
    }
    .HairyMenuItem:hover + .HairyMenuItem {
      border-top-color: transparent;
    }
  }
  .dark .HairyUserMenu {
    .HairyMenuItem:hover,
    .HairyMenuItem.active {
      background-color: #f4f4f50a;
    }
    .HairyMenuItem:active {
      background-color: #f4f4f521;
    }
  }
</style>
